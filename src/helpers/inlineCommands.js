import moment from "moment";

/**
 * Color values matching colorPicker.vue.
 * green = default, gray = cancelled, red = needs to be done that day, blue = done.
 */
const COLOR_MAP = {
  green: "#77e785",
  gray: "#6b7280",  // cancelled
  red: "#ed544b",
  blue: "#06b6d4",  // done
};

/**
 * Matches slash commands; longer patterns first so /tom+1 and /yes-1 are not split.
 * Case-insensitive. Word boundary after command name.
 * Cancelled: gray, cancel, cancelled. Done: blue, ok, done.
 */
const COMMAND_REGEX = /\/(tod|yes|tom\+1|yes-1|tom|green|gray|cancel|cancelled|red|blue|ok|done)\b/gi;

const DATE_COMMANDS = ["tod", "yes", "tom", "tom+1", "yes-1"];
const COLOR_COMMANDS = ["green", "gray", "cancel", "cancelled", "red", "blue", "ok", "done"];

function isDateCommand(cmd) {
  return DATE_COMMANDS.includes(cmd.toLowerCase());
}

function isColorCommand(cmd) {
  return COLOR_COMMANDS.includes(cmd.toLowerCase());
}

/**
 * Returns target listId (YYYYMMDD) for a date command, or null for color-only.
 */
function getListIdForDateCommand(cmd) {
  const c = cmd.toLowerCase();
  const today = moment().startOf("day");
  if (c === "tod") return today.format("YYYYMMDD");
  if (c === "yes") return today.clone().subtract(1, "day").format("YYYYMMDD");
  if (c === "tom") return today.clone().add(1, "day").format("YYYYMMDD");
  if (c === "tom+1") return today.clone().add(2, "days").format("YYYYMMDD");
  if (c === "yes-1") return today.clone().subtract(2, "days").format("YYYYMMDD");
  return null;
}

/**
 * Returns color hex for a color command or for /tod (green). Otherwise undefined.
 * cancel, cancelled -> gray; ok, done -> blue.
 */
function getColorForCommand(cmd) {
  const c = cmd.toLowerCase();
  if (c === "tod") return COLOR_MAP.green;
  if (c === "cancel" || c === "cancelled") return COLOR_MAP.gray;
  if (c === "ok" || c === "done") return COLOR_MAP.blue;
  if (COLOR_MAP[c]) return COLOR_MAP[c];
  return undefined;
}

/**
 * Process inline commands in task title text.
 * Strips all /command tokens from the title and returns updated text plus any color/listId.
 *
 * @param {string} inputText - Raw task title (may contain /tod, /green, etc.)
 * @returns {{ text: string, color?: string, listId?: string, checked?: boolean }}
 */
export function processInlineCommands(inputText) {
  if (typeof inputText !== "string") {
    return { text: "" };
  }

  let text = inputText;
  let listId = null;
  let color = undefined;

  let match;
  const regex = new RegExp(COMMAND_REGEX.source, "gi");
  while ((match = regex.exec(inputText)) !== null) {
    const cmd = match[1];
    if (isDateCommand(cmd)) {
      listId = getListIdForDateCommand(cmd);
      const cmdColor = getColorForCommand(cmd);
      if (cmdColor !== undefined) color = cmdColor;
    } else if (isColorCommand(cmd)) {
      color = getColorForCommand(cmd);
    }
  }

  text = inputText.replace(COMMAND_REGEX, "").replace(/\s+/g, " ").trim();

  const result = { text };
  if (color !== undefined) result.color = color;
  if (listId !== null) result.listId = listId;
  // Done color (blue) means completed: same as checkTodo / checked = true / strikethrough
  if (color === COLOR_MAP.blue) result.checked = true;
  return result;
}

export default { processInlineCommands };
