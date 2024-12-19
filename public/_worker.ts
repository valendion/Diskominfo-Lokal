import { createPagesFunctionHandler } from "@remix-run/cloudflare-pages";
import * as build from "./build/server";

interface Env {
  ASSETS: Fetcher;
}

export default {
  async fetch(
    request: Request,
    env: Env,
    ctx: ExecutionContext
  ): Promise<Response> {
    const url = new URL(request.url);

    // Handle API requests (custom logic)
    if (url.pathname.startsWith("/api/")) {
      return new Response("Custom API Response", { status: 200 });
    }

    // Remix SSR handling
    const remixHandler = createPagesFunctionHandler({
      build,
      getLoadContext: () => ({ env }),
    });

    // Use Remix handler for non-asset requests
    if (!env.ASSETS || !env.ASSETS.fetch) {
      return remixHandler(request);
    }

    try {
      // Check if the asset exists
      const assetResponse = await env.ASSETS.fetch(request);
      if (assetResponse.status !== 404) {
        return assetResponse;
      }
    } catch (err) {
      console.warn("Error serving assets:", err);
    }

    // Fall back to the Remix handler
    return remixHandler(request);
  },
} satisfies ExportedHandler<Env>;
