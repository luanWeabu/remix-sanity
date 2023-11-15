import { createClient } from "@sanity/client";
import type { SanityClient } from "@sanity/client";

// Copy these from your Studio's sanity.config.ts
export const projectId = "9nq18xri";
export const dataset = "production";
export const apiVersion = "2023-07-01";

export function getClient(preview?: { token?: string }): SanityClient {
  const client = createClient({
    projectId: "9nq18xri",
    dataset: "production",
    apiVersion: "2023-06-20",
    useCdn: false,
    perspective: "published",
  });
  if (preview) {
    if (!preview.token) {
      throw new Error(
        "Attempted to activate Preview but a token was not provided"
      );
    }
    return client.withConfig({
      token: preview.token,
      useCdn: false,
      ignoreBrowserTokenWarning: true,
      perspective: "previewDrafts",
    });
  }
  return client;
}
