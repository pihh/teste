/* do not change this file, it is auto generated by storybook. */

import { start } from "@storybook/react-native";

import "@storybook/addon-ondevice-controls/register";
import "@storybook/addon-ondevice-actions/register";
import "@storybook/addon-a11y/register";

const normalizedStories = [
  {
    titlePrefix: "",
    directory: "./src/components",
    files: "**/*.stories.?(ts|tsx|js|jsx)",
    importPathMatcher:
      /^\.(?:(?:^|[\\/]|(?:(?:(?!(?:^|[\\/])\.).)*?)[\\/])(?!\.)(?=.)[^\\/]*?\.stories\.(?:ts|tsx|js|jsx)?)$/,
    // @ts-ignore
    req: require.context(
      "../src/components",
      true,
      /^\.(?:(?:^|[\\/]|(?:(?:(?!(?:^|[\\/])\.).)*?)[\\/])(?!\.)(?=.)[^\\/]*?\.stories\.(?:ts|tsx|js|jsx)?)$/
    ),
  },
];

// @ts-ignore
global.STORIES = normalizedStories;

export const view = start({
  annotations: [
    require("./preview"),
    require("@storybook/react-native/dist/preview"),
    require("@storybook/addon-actions/preview"),
  ],
  storyEntries: normalizedStories,
});
