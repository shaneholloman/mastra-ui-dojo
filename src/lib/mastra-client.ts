import { MastraClient } from "@mastra/client-js";
import { MASTRA_BASE_URL } from "@/constants";

export const mastraClient = new MastraClient({
  baseUrl: `${MASTRA_BASE_URL}/`,
});
