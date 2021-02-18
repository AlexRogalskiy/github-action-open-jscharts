'use strict';

const CONFIG = {
  routes: {
    get_projects: 'https://bestofjs-static-api.vercel.app/projects.json',
    get_weekly_newsletter: 'https://bestofjs-static-api.vercel.app/latest/routeInfo.json',
  },
  targets: {
    base_url: 'https://github.com/',
    image_url: '/logos/',
  },
  name: 'open-jschart',
  path: 'images',
  extension: 'svg',
  width: 1024,
  height: 768,
};

module.exports = CONFIG;
