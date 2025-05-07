import type { ZudokuConfig } from "zudoku";

const config: ZudokuConfig = {
  basePath: "/EB-Docs",
  page: {
    pageTitle: "Exitbuilt",
    logo: {
      src: {
        light:
          "https://i0.wp.com/exitbuilt.com/wp-content/uploads/2023/12/cropped-cropped-Asset-3.png?w=512&ssl=1",
        dark: "https://i0.wp.com/exitbuilt.com/wp-content/uploads/2023/12/cropped-cropped-Asset-3.png?w=512&ssl=1",
      },
    },
  },

  metadata: {
    title: "Exitbuilt Documentation",
    description: "Documentation for Exitbuilt",
    logo: "https://i0.wp.com/exitbuilt.com/wp-content/uploads/2023/12/cropped-cropped-Asset-3.png?w=512&ssl=1",
    favicon:
      "https://i0.wp.com/exitbuilt.com/wp-content/uploads/2023/12/cropped-cropped-Asset-3.png?w=512&ssl=1",
    authors: ["Mateo Marco", "Maximiliano Perchik"],
    creator: "Maximiliano Perchik",
  },

  topNavigation: [
    { id: "eb", label: "Exitbuilt" },
    { id: "meta", label: "Meta" },
    { id: "google", label: "Google" },
    { id: "herd", label: "Herd" },
    { id: "wordpress", label: "Wordpress" },
    {id: "issa", label: "ISSA"}
    // { id: "api", label: "API Reference" },
  ],
  sidebar: {
    eb: [
      {
        type: "category",
        label: "Overview",
        items: ["docs/introduction", "docs/example"],
      },
    ],
    google: [
      {
        type: "category",
        label: "Access to Google Platforms",
        items: [
          "google/access"
        ],
      },
      {
        type: "category",
        label: "Google Ads",
        items: [
          "google/google_ads/google_ads",
          "google/google_ads/create_conversion",
          "google/google_ads/google_ads_conversion_to_gtm",
        ],
      },
    ],
    meta: [
      {
        type: "category",
        label: "Meta",
        items: [
          "meta/access",
        ],
      },
    ],
    wordpress:[
      {
        type: "doc",
        label: "",
        id: "wordpress/access/access",
      },
    ],
    herd: [
      {
        type: "category",
        label: "Product Addons",
        items: ["herd/product_addons/index","herd/product_addons/customization"],
      },
      {
        type:"category",
        label: "Shipping",
        items:["herd/shipping/index"]
      },
      {
        type: "category",
        label: "Taxes",
        items: ["herd/taxes/general_tax","herd/taxes/avalara_avatax/index"]
      },
      {
        type: "category",
        label: "Custom Theme: Hello Elementor Child",
        items: ["herd/custom_theme/index","herd/custom_theme/general","herd/custom_theme/inc/scripts"],
      }
    ],
    issa:[
      {
        type:"category",
        label: "access.issa.com",
        items:["issa/access.issa.com/directory_form/index"],
      }
    ],

  },
  redirects: [{ from: "/", to: "docs/introduction" }],
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
