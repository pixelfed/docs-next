import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'en-US',
  title: "Pixelfed Docs",
  description: "The official Pixelfed documentation",
  themeConfig: {
    logo: {
      light: '/logo-black.png',
      dark: '/logo-white.png'
    },

    siteTitle: 'Docs (Next)',

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'pixelfed.org', link: 'https://pixelfed.org' },
      { text: 'Support', link: 'https://github.com/pixelfed/pixelfed/discussions' },
    ],

    search: {
      provider: 'local'
    },

    i18nRouting: false,

    sidebar: [
      {
        text: 'Running Pixelfed',
        items: [
          { text: 'Prerequisites', link: '/running-pixelfed/prerequisites' },
          { text: 'Installation', link: '/running-pixelfed/installation' },
          { text: 'Configuration', link: '/running-pixelfed/configuration' },
          { text: 'Administration', link: '/running-pixelfed/administration' },
          { text: 'CLI Cheatsheet', link: '/running-pixelfed/cli-cheatsheet' },
          { text: 'Troubleshooting', link: '/running-pixelfed/troubleshooting' }
        ]
      },
      // {
      //   text: 'Developing Pixelfed Apps',
      //   items: [
      //     { text: 'Overview', link: '/developing/overview' },
      //     { text: 'Public Endpoints', link: '/developing/endpoints' },
      //     { text: 'Registering OAuth Clients', link: '/developing/endpoints' },
      //     { text: 'Authentication', link: '/spec/webfinger' },
      //     { text: 'Libraries', link: '/spec/webfinger' },
      //     { text: 'Mastodon Compatibility', link: '/spec/webfinger' },
      //   ]
      // },
      {
        text: 'Spec Compliance',
        items: [
          { text: 'ActivityPub', link: '/spec/ActivityPub' },
          // { text: 'HTTP Signatures', link: '/spec/webfinger' },
          // { text: 'Microformats', link: '/spec/webfinger' },
          // { text: 'OAuth', link: '/spec/oauth' },
          // { text: 'Webfinger', link: '/spec/webfinger' },
        ]
      },
      // {
      //   text: 'Rest API',
      //   items: [
      //     { text: 'Overview', link: '/rest-api/overview' },
      //     { text: 'OAuth Scope', link: '/rest-api/oauth-scope' },
      //     { text: 'Rate limits', link: '/rest-api/rate-limits' },
      //     { text: 'Pagination', link: '/rest-api/rate-limits' },
      //     { text: 'Ecosystem APIs', link: '/rest-api/rate-limits' },
      //     { text: 'Mastodon Entities', link: '/rest-api/rate-limits' },
      //   ]
      // },
      // {
      //   text: 'API Methods',
      //   items: [
      //     { text: 'Apps', link: '/api-methods/apps' },
      //     { text: 'Accounts', link: '/api-methods/accounts' },
      //     { text: 'Profile', link: '/api-methods/profiles' },
      //     { text: 'Statuses', link: '/api-methods/profiles' },
      //     { text: 'Timelines', link: '/api-methods/profiles' },
      //     { text: 'Notifications', link: '/api-methods/profiles' },
      //     { text: 'Search', link: '/api-methods/profiles' },
      //     { text: 'Instance', link: '/api-methods/profiles' },
      //   ]
      // },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/pixelfed' },
      { icon: 'discord', link: 'https://discord.gg/MHvDHaSzmc' },
      { 
        icon: {
          svg: '<svg width="20" height="20" version="1.1" id="svg161" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg"> <defs id="defs165" /> <path d="M 10,20 C 4.4772,20 0,15.5228 0,10 0,4.4772 4.4772,0 10,0 15.5228,0 20,4.4772 20,10 20,15.5228 15.5228,20 10,20 Z M 9.206,12.1832 h 1.8344 c 1.728,0 3.1292,-1.364 3.1292,-3.046 0,-1.6824 -1.4008,-3.0464 -3.1292,-3.0464 H 8.3928 c -0.9968,0 -1.8052,0.7868 -1.8052,1.7576 v 6.84 z" fill-rule="evenodd" id="path159" style="stroke-width:0.4" /></svg>'
        }, 
        link: 'https://pixelfed.social/@pixelfed' 
      },
      { icon: 'mastodon', link: 'https://mastodon.social/@pixelfed' },
    ]
  },
  locales: {
    root: {
      label: 'English',
      lang: 'en'
    },
  },
  head: [
    ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "/assets/favicon.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/assets/favicon.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/assets/favicon.png"}],
    ['link', { rel: "shortcut icon", href: "/assets/favicon.png"}],
    ['meta', { name: "theme-color", content: "#ffffff"}],
  ],
})
