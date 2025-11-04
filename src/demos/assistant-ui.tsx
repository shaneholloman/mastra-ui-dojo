import { AssistantRuntimeProvider } from "@assistant-ui/react";
import {
  useChatRuntime,
  AssistantChatTransport,
} from "@assistant-ui/react-ai-sdk";
import { ThreadList } from "@/components/assistant-ui/thread-list";
import { Thread } from "@/components/assistant-ui/thread";
import { MASTRA_BASE_URL } from "@/constants";

const suggestions = [
  {
    title: "What's the latest movie?",
    action: "What's the latest movie?",
  },
  {
    title: "What's the first Ghibli movie?",
    action: "What's the first Ghibli movie?",
  },
  {
    title: "How many Ghibli movies are there?",
    action: "How many Ghibli movies are there?",
  },
  {
    title: "What's the longest Ghibli movie?",
    action: "What's the longest Ghibli movie?",
  }
]

export const AssistantUIDemo = () => {
  const runtime = useChatRuntime({
    transport: new AssistantChatTransport({
      api: `${MASTRA_BASE_URL}/chat/ghibliAgent`,
    }),
  });

  return (
    <AssistantRuntimeProvider runtime={runtime}>
      <div className="grid grid-cols-[200px_1fr] gap-x-2 px-4 py-4 size-full">
        <ThreadList />
        <Thread suggestions={suggestions} welcome="Ask me about Ghibli movies, characters, and trivia." />
      </div>
    </AssistantRuntimeProvider>
  );
};
