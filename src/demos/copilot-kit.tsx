import { CopilotChat } from "@copilotkit/react-ui";
import { CopilotKit } from "@copilotkit/react-core";
import "@copilotkit/react-ui/styles.css";

export function CopilotKitDemo() {
  return (
    <CopilotKit
      runtimeUrl="http://localhost:4111/copilotkit"
      agent="ghibliAgent"
    >
      <CopilotChat
        labels={{
          title: "Ghibli Films Assistant",
          initial: "Hi! 👋 Ask me about Ghibli movies, characters, and trivia.",
        }}
      />
    </CopilotKit>
  );
}
