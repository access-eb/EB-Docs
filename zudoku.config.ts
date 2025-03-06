import type { ZudokuConfig } from "zudoku";

const config: ZudokuConfig = {
  basePath: "/EB-Docs",
  topNavigation: [
    { id: "docs", label: "Documentation" },
    { id: "api", label: "API Reference" },
    { id: "eb", label: "Exitbuilt" },
  ],
  sidebar: {
    docs: [
      {
        type: "category",
        label: "Overview",
        items: ["docs/introduction", "docs/example"],
      },
    ],
    eb: [
      {
        type: "category",
        label: "Ads",
        items: ["ads/linkedin_ads", "ads/google_ads"],
      },
    ],
  },
  // redirects: [{ from: "/", to: "/docs/introduction" }],
  apis: {
    type: "file",
    input: "./apis/openapi.yaml",
    navigationId: "api",
  },
  docs: {
    files: "/pages/**/*.{md,mdx}",
  },
};

export default config;
