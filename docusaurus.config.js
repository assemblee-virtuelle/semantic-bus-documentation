module.exports = {
  title: 'Bus Sémantique',
  tagline: "Un outil open source pour intéropérer des données hétérogènes techniquement et sémantiquement.",
  url: 'https://assemblee-virtuelle.github.io',
  baseUrl: '/semantic-bus-documentation/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  
  organizationName: 'assemblee-virtuelle', // Replace with your GitHub username
  projectName: 'semantic-bus-documentation', // Replace with your GitHub repository name
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr','en'],
  },

  themeConfig: {
    navbar: {
      title: 'Bus Sémantique',
      logo: {
        alt: 'Logo du Bus Sémantique',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          to: '/blog', 
          label: 'Blog', 
          position: 'left'
        },
        {
          href: 'https://github.com/assemblee-virtuelle/Semantic-Bus',
          label: 'GitHub',
          position: 'right',
        },

        // ...Other navigation items
      ],
    },
    prism: {
      theme: require('prism-react-renderer/themes/dracula'),
      darkTheme: require('prism-react-renderer/themes/duotoneLight'),
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Communauté',
          items: [
            {
              label: "Forum de l'Assemblée Virtuelle",
              href: 'https://forums.assemblee-virtuelle.org/c/projets/bus-semantique/15',
            },
          ],
        },
        {
          title: 'Technique',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/assemblee-virtuelle/Semantic-Bus',
            }
          ],
        },
        {
          title: 'Articles',
          items: [
            {
              label: 'Data Players',
              href: 'https://data-players.com/bus-semantique/',
            },
            {
              label: "L'assemblée virtuelle",
              href: 'https://www.virtual-assembly.org/semantic-bus/',
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Assemblée Virtuelle`,
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  plugins: ['docusaurus-plugin-sass'],
};
