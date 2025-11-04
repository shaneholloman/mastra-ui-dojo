import { AssistantRuntimeProvider } from "@assistant-ui/react";
import {
  useChatRuntime,
  AssistantChatTransport,
} from "@assistant-ui/react-ai-sdk";
import { ThreadList } from "@/components/assistant-ui/thread-list";
import { Thread } from "@/components/assistant-ui/thread";
import { changeBgColor } from "@/mastra/tools/color-change-tool";

const suggestions = [
  {
    title: "Dark blue",
    action: "Change the background color to a dark blue"
  },
  {
    title: "Rebeccapurple",
    action: "Change the background color to rebeccapurple"
  },
];

export const ClientAssistantUIDemo = () => {
  const runtime = useChatRuntime({
    transport: new AssistantChatTransport({
      api: "http://localhost:4111/chat/bgColorAgent",
    }),
    onToolCall: ({ toolCall }) => {
      if (toolCall.toolName === 'colorChangeTool') {
        changeBgColor((toolCall.input as { color: string }).color)
      }
    }
  });

  return (
    <AssistantRuntimeProvider runtime={runtime}>
      <div className="grid grid-cols-[200px_1fr] gap-x-2 px-4 py-4 size-full">
        <ThreadList />
        <Thread suggestions={suggestions} welcome="Ask me to change the background color" />
      </div>
    </AssistantRuntimeProvider>
  );
};
