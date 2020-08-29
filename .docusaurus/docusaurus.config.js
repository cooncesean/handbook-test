export default {
  "title": "Mexodus Handbook",
  "tagline": "Everything you need to know about how to be successful at Mexodus.",
  "url": "http://handbook-test.s3-website-us-west-2.amazonaws.com",
  "baseUrl": "/",
  "onBrokenLinks": "throw",
  "favicon": "img/favicon.ico",
  "organizationName": "cooncesean",
  "projectName": "handbook",
  "themeConfig": {
    "navbar": {
      "title": "Mexodus Handbook",
      "logo": {
        "alt": "My Site Logo",
        "src": "img/exodus-logo-white.png"
      },
      "items": [
        {
          "to": "docs/introduction",
          "activeBasePath": "docs",
          "label": "Handbook",
          "position": "right"
        },
        {
          "to": "/directory",
          "activeBasePath": "/directory",
          "label": "Company Directory",
          "position": "right"
        }
      ],
      "hideOnScroll": false
    },
    "algolia": {
      "apiKey": "32f1f7956b3d2c3c90fbe259c7901d94",
      "indexName": "lyft_clutch",
      "appId": "BH4D9OD16A"
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Docs",
          "items": [
            {
              "label": "Documentation",
              "to": "docs/introduction"
            },
            {
              "label": "How To Contribute",
              "to": "docs/contributing"
            }
          ]
        },
        {
          "title": "Communication",
          "items": [
            {
              "label": "Slack",
              "href": "https://stackoverflow.com/questions/tagged/docusaurus"
            },
            {
              "label": "Product Roadmap",
              "href": "https://discordapp.com/invite/docusaurus"
            },
            {
              "label": "All-Hands Meetings",
              "href": "https://twitter.com/docusaurus"
            }
          ]
        },
        {
          "title": "External Resources",
          "items": [
            {
              "label": "Company Blog",
              "href": "https://twitter.com/docusaurus"
            },
            {
              "label": "Twitter",
              "href": "https://twitter.com/docusaurus"
            },
            {
              "label": "YouTube",
              "href": "https://twitter.com/docusaurus"
            },
            {
              "label": "GitHub",
              "href": "https://twitter.com/docusaurus"
            },
            {
              "label": "Workable",
              "href": "https://twitter.com/docusaurus"
            },
            {
              "label": "HelpScout",
              "href": "https://twitter.com/docusaurus"
            }
          ]
        },
        {
          "title": "Downloads",
          "items": [
            {
              "label": "Current Eden",
              "to": "https://github.com/facebook/docusaurus"
            },
            {
              "label": "Current Desktop",
              "href": "https://downloads.exodus.io/releases/exodus-macos-20.8.28.dmg"
            }
          ]
        }
      ],
      "copyright": "Mexodus Handbook - Last Updated 2020"
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    }
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "homePageId": "doc1",
          "sidebarPath": "/Users/coonce/dev/handbook-test/sidebars.js",
          "editUrl": "https://github.com/cooncesean/handbook/edit/master/"
        },
        "theme": {
          "colorMode": {
            "disableSwitch": true
          },
          "customCss": "/Users/coonce/dev/handbook-test/src/css/custom.css"
        }
      }
    ]
  ],
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "plugins": [],
  "themes": []
};