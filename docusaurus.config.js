/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'mind-ar-js',
  tagline: 'web augmented reality - augmented images',
  url: 'https://hiukim.github.io',
  baseUrl: '/test-gh/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'hiukim', // Usually your GitHub org/user name.
  projectName: 'test-gh', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'MindAR - Documentation',
      logo: {
        alt: 'MindAR',
        src: 'img/logo.png',
      },
    },
    /*
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    */
  },
  plugins: ['docusaurus-plugin-sass'],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
	  routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          //editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  scripts: [
    'https://cdnjs.cloudflare.com/ajax/libs/dropzone/5.7.2/min/dropzone.min.js',
    'https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@0.3.1/dist/mindar.prod.js',
  ],
  stylesheets: [
    'https://cdnjs.cloudflare.com/ajax/libs/dropzone/5.7.2/dropzone.min.css'
  ]
};
