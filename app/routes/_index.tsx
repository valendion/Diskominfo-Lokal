import type { MetaFunction, LoaderFunction } from "@remix-run/node";
import { useLoaderData, useRouteError } from "@remix-run/react";
import NewsKolut from "~/components/news/NewsKolut";
import { LoaderData, MediaData } from "~/model/NewsModel";
import { ClientOnly } from "remix-utils/client-only";

import Tagline from "~/components/base/Tagline";
import BPSBook from "~/components/bps/BPSBook";
import KolakaUtaraMap from "~/components/Map/KolakaUtaraMap";
import MapWithPing from "~/components/Map/MapWithPing";
import MapBody from "~/components/Map/MapBody.client";

// Meta
export const meta: MetaFunction = () => {
  return [{ title: "Home" }, { name: "Home", content: "Home" }];
};

// Loader
export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const bpsPage = Number(url.searchParams.get("page")) || 1;

  try {
    // Fetch News Data
    const newsResponse = await fetch(import.meta.env.VITE_URL_NEWS, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    if (!newsResponse.ok) {
      console.error("News API Error:", await newsResponse.text());
      throw new Error(`News API failed with status: ${newsResponse.status}`);
    }

    const newsData = await newsResponse.json();

    // Fetch Media Data
    const mediaIds = newsData
      .map((news: any) => news.featured_media)
      .filter((id: number | null) => id);

    const mediaData: MediaData = {};

    if (mediaIds.length > 0) {
      const mediaUrl = `${
        import.meta.env.VITE_URL_MEDIA
      }?include=${mediaIds.join(",")}`;
      console.log("Fetching media from:", mediaUrl);

      const mediaResponse = await fetch(mediaUrl, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      if (!mediaResponse.ok) {
        throw new Error(
          `Media API failed with status: ${mediaResponse.status}`
        );
      }

      const mediaResults = await mediaResponse.json();
      mediaResults.forEach((media: any) => {
        mediaData[media.id] = media.source_url;
      });
    }

    // Enhance News Data with Media
    const enhancedNewsData = newsData.map((news: any) => ({
      ...news,
      imageUrl: mediaData[news.featured_media] || null,
    }));

    // Fetch BPS Data
    const bpsUrl = `${import.meta.env.VITE_BPS_URL_BASE}model/${
      import.meta.env.VITE_BPS_MODEL_PUBLICATION
    }/domain/${import.meta.env.VITE_BPS_DOMAIN}/page/${bpsPage}/key/${
      import.meta.env.VITE_BPS_KEY
    }/`;

    const bpsResponse = await fetch(bpsUrl, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    if (!bpsResponse.ok) {
      throw new Error(`BPS API failed with status: ${bpsResponse.status}`);
    }

    const bpsData = await bpsResponse.json();

    // Return all data
    return Response.json({
      news: enhancedNewsData,
      bps: bpsData,
      bpsPage,
    });
  } catch (error) {
    console.error("Loader error:", error);
    throw error;
  }
};

export function ErrorBoundary() {
  const error = useRouteError();
  console.error("Route error:", error);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-2xl w-full">
        <h1 className="text-2xl font-bold text-red-800 mb-4">Error</h1>
        <p className="text-red-600">
          {error instanceof Error
            ? error.message
            : "An unexpected error occurred. Please try again later."}
        </p>
      </div>
    </div>
  );
}

// Main Component
export default function Index() {
  const { news = [], bps = [], bpsPage } = useLoaderData<LoaderData>();

  return (
    <div className="wrapper-simple-screen wrapper-simple-padding">
      <div className="flex flex-col ">
        <Tagline />

        {/* <ClientOnly fallback={<div>Loading map...</div>}>
          {() => <MapBody />}
        </ClientOnly> */}
        <ClientOnly fallback={<div>Loading news...</div>}>
          {() => <MapWithPing />}
        </ClientOnly>
      </div>

      <div className="mt-8">
        <ClientOnly fallback={<div>Loading news...</div>}>
          {() =>
            news.length > 0 ? (
              <NewsKolut posts={news} />
            ) : (
              <div>No news available</div>
            )
          }
        </ClientOnly>
      </div>

      <div className="mt-8">
        <ClientOnly fallback={<div>Loading BPS data...</div>}>
          {() =>
            bps.data[1].length > 0 ? (
              <BPSBook bps={bps} currentPage={bpsPage} />
            ) : (
              <div>No news available</div>
            )
          }
        </ClientOnly>
      </div>
    </div>
  );
}
