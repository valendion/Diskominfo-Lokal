import type { MetaFunction } from "@remix-run/node";
import NewsKolut from "~/components/news/NewsKolut";
import { useLoaderData } from "@remix-run/react";
import { NewsModal } from "~/model/NewsModel";

import { ClientOnly } from "remix-utils/client-only";
import { MapBody } from "~/components/Map/MapBody.client";
import Tagline from "~/components/base/Tagline";

import BPSBook from "~/components/bps/BPSBook";

export const meta: MetaFunction = () => {
  return [{ title: "Home" }, { name: "Home", content: "Home" }];
};

export async function loader({ request }: { request: Request }) {
  const url = new URL(request.url);
  const bpsPage = Number(url.searchParams.get("page")) || 1;

  try {
    const newsResponse = await fetch(import.meta.env.VITE_URL_NEWS);
    const newsData = newsResponse.ok ? await newsResponse.json() : [];

    const mediaIds = newsData
      .map((news: any) => news.featured_media)
      .filter((id: number | null) => id);

    const mediaData: Record<number, string> = {};
    if (mediaIds.length > 0) {
      const mediaResponse = await fetch(
        `${import.meta.env.VITE_URL_MEDIA}?include=${mediaIds.join(",")}`
      );
      if (mediaResponse.ok) {
        const mediaResults = await mediaResponse.json();
        mediaResults.forEach((media: any) => {
          mediaData[media.id] = media.source_url;
        });
      }
    }

    const enhancedNewsData = newsData.map((news: any) => ({
      ...news,
      imageUrl: mediaData[news.featured_media] || null,
    }));

    const bpsResponse = await fetch(
      `${import.meta.env.VITE_BPS_URL_BASE}model/${
        import.meta.env.VITE_BPS_MODEL_PUBLICATION
      }/domain/${import.meta.env.VITE_BPS_DOMAIN}/page/${bpsPage}/key/${
        import.meta.env.VITE_BPS_KEY
      }/`
    );
    const bpsData = bpsResponse.ok ? await bpsResponse.json() : [];

    return { news: enhancedNewsData, bps: bpsData, bpsPage };
  } catch (error) {
    return { news: [], bps: [], bpsPage };
  }
}

export default function Index() {
  const {
    news = [],
    bps = [],
    bpsPage,
  } = useLoaderData<{
    news: NewsModal[];
    bps: any;
    bpsPage: number;
  }>();

  return (
    <div className="wrapper-simple-screen wrapper-simple-padding">
      <div className="flex flex-col md:flex-row">
        <Tagline />
        <ClientOnly fallback={null}>{() => <MapBody />}</ClientOnly>
      </div>

      <div className="mt-8">
        <ClientOnly fallback={null}>
          {() => <NewsKolut posts={news} />}
        </ClientOnly>
      </div>

      <div className="mt-8">
        <ClientOnly fallback={null}>
          {() => <BPSBook bps={bps} currentPage={bpsPage} />}
        </ClientOnly>
      </div>
    </div>
  );
}
