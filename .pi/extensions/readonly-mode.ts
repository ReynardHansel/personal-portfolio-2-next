import type { ExtensionAPI } from "@mariozechner/pi-coding-agent";

/**
 * Read-only mode extension for this codebase.
 * 
 * By default, blocks `edit` and `write` tool calls to prevent accidental code changes.
 * Instead, explains what changes would be made and teaches/guides the user.
 * 
 * To enable editing, the user must explicitly ask to edit, make changes, write code, etc.
 * Common triggers: "edit", "make changes", "write code", "update", "fix", "modify", "add", "create file", "delete"
 */
export default function (pi: ExtensionAPI) {
  // Track if user has explicitly asked for code changes
  let editingMode = false;

  // Keywords that indicate the user wants to make actual code changes
  const editingKeywords = [
    "edit the code",
    "make changes",
    "write code",
    "write the code",
    "update the code",
    "fix the bug",
    "fix this",
    "modify the",
    "add the",
    "add a",
    "add this",
    "create a file",
    "create the file",
    "delete the",
    "remove the",
    "implement",
    "build",
    "refactor",
    "replace the",
    "change the",
    "rewrite",
    "apply the changes",
    "apply changes",
    "do it",
    "make it happen",
    "just do it",
    "execute",
    "yes, edit",
    "yes, write",
    "yes, make the changes",
    "go ahead",
    "proceed",
    "commit",
    "save the changes",
    "save changes",
  ];

  // Keywords that indicate read-only mode (re-confirm editing intent)
  const readOnlyKeywords = [
    "just show",
    "just tell",
    "just explain",
    "just describe",
    "teach me",
    "help me understand",
    "show me how",
    "what would",
    "how would",
    "walk me through",
    "explain",
    "describe",
    "tell me",
    "show me",
    "read-only",
    "no edit",
    "don't edit",
    "don't modify",
    "do not edit",
    "view only",
    "view-only",
    "why"
  ];

  // Check if message contains editing intent
  function containsEditingIntent(message: string): boolean {
    const lower = message.toLowerCase();
    return editingKeywords.some((keyword) => lower.includes(keyword));
  }

  // Check if message explicitly asks for read-only mode
  function containsReadOnlyIntent(message: string): boolean {
    const lower = message.toLowerCase();
    return readOnlyKeywords.some((keyword) => lower.includes(keyword));
  }

  // Intercept tool calls to block edit/write by default
  pi.on("tool_call", async (event, ctx) => {
    const toolName = event.toolName;

    // Only block edit and write tools
    if (toolName !== "edit" && toolName !== "write") {
      return;
    }

    // Get the last user message to check intent
    const entries = ctx.sessionManager.getBranch();
    const lastUserMessage = entries
      .filter((e) => e.type === "message" && e.message.role === "user")
      .at(-1);

    const userMessage = lastUserMessage?.message.content
      .map((c) => ("text" in c ? c.text : ""))
      .join("") ?? "";

    // Check if user explicitly wants editing
    if (containsEditingIntent(userMessage)) {
      editingMode = true;
      return;
    }

    // Check if user explicitly asks for read-only
    if (containsReadOnlyIntent(userMessage)) {
      editingMode = false;
    }

    // Block editing by default
    if (!editingMode) {
      return {
        block: true,
        reason:
          "🔒 Read-Only Mode Active\n\n" +
          "This codebase is configured for teaching/guidance by default.\n" +
          "To enable code edits, please explicitly ask to make changes.\n\n" +
          "Example: 'Edit the file to fix the bug' or 'Make the following changes: ...'\n\n" +
          "I can show you exactly what changes would be made without applying them.",
      };
    }
  });

  // Show notification on session start
  pi.on("session_start", async (_event, ctx) => {
    ctx.ui.notify(
      "📖 Read-Only Mode Active - Teaching & Guidance Mode",
      "info"
    );
  });

  // Reset editing mode on new session
  pi.on("session_start", async (_event, _ctx) => {
    editingMode = false;
  });

  // Inject context into system prompt to remind LLM of read-only mode
  pi.on("before_agent_start", async (event, ctx) => {
    const entries = ctx.sessionManager.getBranch();
    const lastUserMessage = entries
      .filter((e) => e.type === "message" && e.message.role === "user")
      .at(-1);

    const userMessage = lastUserMessage?.message.content
      .map((c) => ("text" in c ? c.text : ""))
      .join("") ?? "";

    // Update editing mode based on current message
    if (containsEditingIntent(userMessage)) {
      editingMode = true;
    } else if (containsReadOnlyIntent(userMessage)) {
      editingMode = false;
    }

    if (!editingMode) {
      return {
        systemPrompt:
          event.systemPrompt +
          "\n\n[READ-ONLY MODE] This codebase is in teaching/guidance mode. " +
          "Do NOT use edit or write tools to make changes. " +
          "Instead, explain what changes would be made, show code examples, " +
          "and guide the user. Only make changes when the user explicitly asks to edit, " +
          "make changes, or similar phrasing.",
      };
    }
  });

  // Register a command to toggle editing mode manually
  pi.registerCommand("edit-on", {
    description: "Enable editing mode (allows edit/write tools)",
    handler: async (_args, ctx) => {
      editingMode = true;
      ctx.ui.notify("✏️ Editing mode enabled", "success");
    },
  });

  pi.registerCommand("edit-off", {
    description: "Disable editing mode (teaching/guidance only)",
    handler: async (_args, ctx) => {
      editingMode = false;
      ctx.ui.notify("📖 Read-only mode enabled", "info");
    },
  });

  pi.registerCommand("edit-status", {
    description: "Show current editing mode status",
    handler: async (_args, ctx) => {
      const status = editingMode ? "✏️ Editing Mode ON" : "📖 Read-Only Mode";
      ctx.ui.notify(status, editingMode ? "success" : "info");
    },
  });
}
