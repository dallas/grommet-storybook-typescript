import { configure, addParameters } from "@storybook/react";

const req = require.context("../src/stories", false, /\.stories\.tsx?$/);

function loadStories() {
  req.keys().forEach(req);
}

addParameters({
  options: {
    name: "UI Library",
    showPanel: false,
    sortStoriesByKind: true,
  },
});

configure(loadStories, module);
