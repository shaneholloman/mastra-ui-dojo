import { Mastra } from "@mastra/core/mastra";
import { registerCopilotKit } from "@ag-ui/mastra/copilotkit";
import { LibSQLStore } from "@mastra/libsql";
import { chatRoute } from "@mastra/ai-sdk";
import { ghibliAgent } from "./agents/ghibli-agent";
import { weatherAgent } from "./agents/weather-agent";

export const mastra = new Mastra({
  agents: {
    ghibliAgent,
    weatherAgent,
  },
  storage: new LibSQLStore({
    url: ":memory:",
  }),
  server: {
    cors: {
      origin: "*",
      allowMethods: ["*"],
      allowHeaders: ["*"],
    },
    apiRoutes: [
      chatRoute({
        path: "/chat/:agentId",
      }),
      registerCopilotKit({
        path: "/copilotkit",
        resourceId: "ghibliAgent",
      }),
    ],
  },
});
