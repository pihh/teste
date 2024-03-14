/** @type{import("@storybook/react-native").StorybookConfig} */
module.exports = {
  stories: ["../src/components/**/*.stories.?(ts|tsx|js|jsx)"],
  addons: [
    // '@a110/storybook-expand-all',

    // Other Storybook addons
    "@storybook/addon-ondevice-controls",
    "@storybook/addon-ondevice-actions",
    // '@storybook/addon-ondevice-notes',
    // '@storybook/addon-ondevice-backgrounds',

    // "@storybook/addon-a11y", //👈 The a11y addon goes here
  ],
  docs: {
    autodocs: true,
  },
};
