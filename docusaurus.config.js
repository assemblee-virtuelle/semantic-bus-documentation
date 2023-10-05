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
  deploymentBranch: 'deployement-test',
  trailingSlash: false,

  themeConfig: {
    navbar: {
      title: 'Semantic Bus',
      logo: {
        alt: 'Semantic Bus logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
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
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Other options for the documentation
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
