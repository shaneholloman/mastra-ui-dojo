import { Agent } from "@mastra/core/agent";
import { Memory } from "@mastra/memory";
import { ghibliFilms, ghibliCharacters } from "../tools/ghibli-tool";

export const ghibliAgent = new Agent({
  name: "Ghibli Trivia Agent",
  description: "Ghibli Films Agent, use for querying Ghibli Films",
  instructions:
    "You are my Ghibli Films assistant. I will ask you questions you must retrieve from Ghibli Films.",
  model: [
    {
      model: "openai/gpt-4o-mini",
    },
    {
      model: "vercel/deepseek/deepseek-r1",
    },
  ],
  tools: { ghibliFilms, ghibliCharacters },
  memory: new Memory(),
});
