import type { ZudokuConfig } from "zudoku";

const config: ZudokuConfig = {
  basePath: "/EB-Docs",
  page: {
    pageTitle: "Exitbuilt",
    logo: {
      src: {
        light: "https://i0.wp.com/exitbuilt.com/wp-content/uploads/2023/12/cropped-cropped-Asset-3.png?w=512&ssl=1",
        dark: "https://i0.wp.com/exitbuilt.com/wp-content/uploads/2023/12/cropped-cropped-Asset-3.png?w=512&ssl=1",
      },
    },
  },

  metadata: {
    "title": "Exitbuilt Documentation",
    "description": "Documentation for Exitbuilt",
    "logo": "https://i0.wp.com/exitbuilt.com/wp-content/uploads/2023/12/cropped-cropped-Asset-3.png?w=512&ssl=1",
    "favicon": "https://i0.wp.com/exitbuilt.com/wp-content/uploads/2023/12/cropped-cropped-Asset-3.png?w=512&ssl=1",
    "authors": ["Mateo Marco", "Maximiliano Perchik"],
    "creator": "Maximiliano Perchik",
  },

  topNavigation: [
    { id: "eb", label: "Exitbuilt" },
    // { id: "docs", label: "Documentation" },
    // { id: "api", label: "API Reference" },
  ],
  sidebar: {
    // docs: [
    //   {
    //     type: "category",
    //     label: "Overview",
    //     items: ["docs/introduction", "docs/example"],
    //   },
    // ],
    eb: [
      {
        type: "category",
        label: "Google Ads",
        items: ["google_ads/google_ads", "google_ads/create_conversion"],
      },
    ],
  },
  redirects: [{ from: "/", to: "/google_ads/google_ads" }],
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
