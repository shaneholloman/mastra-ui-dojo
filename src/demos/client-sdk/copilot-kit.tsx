import { CopilotChat } from "@copilotkit/react-ui";
import { CopilotKit, useFrontendTool } from "@copilotkit/react-core";
import "@copilotkit/react-ui/styles.css";
import { changeBgColor } from "@/mastra/tools/color-change-tool";

export function ClientCopilotKitDemo() {
  return (
    <CopilotKit
      runtimeUrl="http://localhost:4111/copilotkit"
      agent="bgColorAgent"
    >
      <Chat />
    </CopilotKit>
  );
}

function Chat() {
  useFrontendTool({
    name: "colorChangeTool",
    description: "Changes the background color",
    parameters: [
      {
        name: "color",
        type: "string",
        description: "The color to change the background to",
        required: true
      }
    ],
    handler: ({ color }) => {
      changeBgColor(color)
    }
  })

  return (
    <CopilotChat
      labels={{
        title: "Background Color Changer",
        initial: "Hi! 👋 Ask me to change the background color.",
      }}
    />
  )
}
