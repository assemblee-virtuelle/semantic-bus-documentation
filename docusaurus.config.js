module.exports = {
  title: 'Semantic Bus',
  tagline: 'Documentation of the Semantic Bus',
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
    defaultLocale: 'en',
    locales: ['en'],
  },

  themeConfig: {
    navbar: {
      title: 'Semantic Bus',
      logo: {
        alt: 'Semantic Bus logo',
        src: 'img/logo.svg',
      },
      items: [
        // {
        //   to: '/docs',
        //   // activeBasePath: 'docs',
        //   label: 'Docs',
        //   position: 'left',
        // },
        // {
        //   to: '/blog', 
        //   label: 'Blog', 
        //   position: 'left'
        // },
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
        },
        {
          to: '/blog', 
          label: 'Blog', 
          position: 'left'
        },
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },

        // ...Other navigation items
      ],
    },
    footer: {
      style: 'dark',
      links: [
        // ...Footer links
      ],
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

  webpack: {
    configure: (webpackConfig, { isServer, defaultLoaders }) => {
      if (!isServer) {
        webpackConfig.resolve.alias = {
          ...webpackConfig.resolve.alias,
          '@src': path.join(__dirname, 'src'),
        };
      }

      return webpackConfig;
    },
  },

  // presets: [
  //   [
  //     '@docusaurus/preset-classic',
  //     {
  //       docs: {
  //         sidebarPath: require.resolve('./sidebars.js'),
  //         // Other options for the documentation
  //       },
  //       theme: {
  //         customCss: require.resolve('./src/css/custom.css'),
  //       },
  //     },
  //   ],
  // ],
};
