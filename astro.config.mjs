import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: 'https://cri-lab.github.io',
  base: '/crc-documentation',
  integrations: [
    starlight({
      title: "CRC Documentation",
      logo: {
        light: "/public/crc-logo.svg",
        dark: "/public/crc-logo.svg",
      },
      favicon: "/public/crc-logo.svg",
      social: {
        github: "https://github.com/CRI-lab",
      },
      sidebar: [
        {
          label: "Data Management",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Koa Cloud", items: [
              {
                label: "About KoaCloud",
                link: "/data-management/koacloud/"
              },
              {
                label: "Accessing KoaCloud",
                link: "/data-management/koacloud/guides/accessing/"
              },
            ]},
            { label: "Metadata Tool", items: [
              {
                label: "Accessing UID Tool",
                link: "/data-management/metadata-tool/guides/accessing/"
              },
              {
                label: "Record Curation",
                link: "/data-management/metadata-tool/guides/record-curation/"
              },
              {
                label: "Managing Records",
                link: "/data-management/metadata-tool/guides/record-management/"
              },
              {
                label: "Viewing Projects",
                link: "/data-management/metadata-tool/guides/projects/"
              },
            ] 
          },
        ],
        },
      ],
    }),
  ],
});
