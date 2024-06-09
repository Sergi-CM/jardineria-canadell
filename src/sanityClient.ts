import { createClient } from "@sanity/client";

export const sanity = createClient({
  projectId: "s68ig26a",
  dataset: "production",
});
