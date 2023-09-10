// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Host Factor',
  tagline: 'Host servers easily',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://assets.hostfactor.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/_docs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'hostfactor', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          routeBasePath: '/',
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/hostfactor/docs',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
      },
      // navbar: {
      //   title: 'Host Factor',
      //   logo: {
      //     alt: 'My Site Logo',
      //     src: 'img/logo.svg',
      //   },
      //   items: [
      //     {to: 'https://hostfactor.io', label: 'Site', position: 'left'},
      //     {to: '/blog', label: 'Blog', position: 'left'},
      //     {
      //       href: 'https://github.com/hostfactor/docs',
      //       label: 'GitHub',
      //       position: 'right',
      //     },
      //   ],
      // },
      // footer: {
      //   style: 'dark',
      //   links: [
      //     {
      //       title: 'Host Factor',
      //       items: [
      //         {
      //           label: 'Site',
      //           href: 'https://hostfactor.io'
      //         },
      //         {
      //           label: 'Apps',
      //           href: 'https://hostfactor.io/apps'
      //         }
      //       ]
      //     },
      //     {
      //       title: 'Community',
      //       items: [
      //         {
      //           label: 'Discord',
      //           href: 'https://discord.gg/TCkKNVAnEF',
      //         },
      //         {
      //           label: 'Twitter',
      //           href: 'https://twitter.com/hf_eddie',
      //         },
      //       ],
      //     },
      //     {
      //       title: 'More',
      //       items: [
      //         {
      //           label: 'Blog',
      //           to: '/blog',
      //         },
      //         {
      //           label: 'GitHub',
      //           href: 'https://github.com/hostfactor/docs',
      //         },
      //       ],
      //     },
      //   ],
      //   copyright: `Copyright © ${new Date().getFullYear()} Host Factor, LLC.`,
      // },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
