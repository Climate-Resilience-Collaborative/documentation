import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
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
            { label: "UID Tool", items: [
              {
                label: "Data",
                link: "/data-management/uid-tool/guides/data/"
              },
              {
                label: "Data Curation",
                link: "/data-management/uid-tool/guides/data-curation/"
              },
              {
                label: "Data Filtering",
                link: "/data-management/uid-tool/guides/data-filtering/"
              },
              {
                label: "Updating Data",
                link: "/data-management/uid-tool/guides/updating-data/"
              },
              {
                label: "Accounts",
                link: "/data-management/uid-tool/guides/accounts/"
              },
              {
                label: "Projects",
                link: "/data-management/uid-tool/guides/projects/"
              },
            ] 
          },
          { label: "Invenio RDM", items: [
            {
              label: "Uploading Data",
              link: "/data-management/invenio/guides/uploading-data/"
            }
          ]}
        ],
        },
      ],
    }),
  ],
});
