'use strict';

// const iquotes = require('iquotes');

const core = require('@actions/core');
const fetch = require('isomorphic-unfetch');
const path = require('path');
const http = require('https');
const fs = require('fs');

const config = require('./src/config');
const { notBlankOrElse } = require('./src/utils');

async function getPlots(input) {
  if (!input) {
    return Promise.resolve({ options: [] });
  }

  const urlToFetch = `https://api.plot.ly/v2/search?q=${input}`;

  const data = await fetch(urlToFetch);
  const json = await data.json();

  return {
    options: json.files.map(o => {
      return {
        label: `${o.filename} by ${o.owner}, ${o.views} views`,
        value: `${o.web_url.replace(/\/$/, '')}.json`,
      };
    }),
  };
}

async function getTagsByCode(tags) {
  return tags.reduce((acc, tag) => {
    return { ...acc, [tag.code]: { ...tag, id: tag.code } };
  }, {});
}

async function getData(url) {
  const data = await fetch(url);
  const json = await data.json();
  return {
    options: json.map(o => {
      return {
        label: o.name,
        name: o.full_name,
        description: o.description,
        stars: o.stars,
        trends: o.trends,
        url: o.url,
        npm: o.npm,
        icon: o.icon,
        downloads: o.downloads,
      };
    }),
  };
}

async function getQuotesData(url) {
  const data = await fetch(url);
  const json = await data.json();

  return json.map(o => {
    return {
      quote: o.quoteText,
      author: o.quoteAuthor,
    };
  });
}

require('https').globalAgent.options.rejectUnauthorized = false;

async function fetchAsync(url) {
  // await response of fetch call
  try {
    const response = await fetch(url);
    // only proceed once promise is resolved
    return await response.json();
  } catch (e) {
    console.error(e);
    return null;
  }
}

async function createData(url, filePath, fileName, fileExtension) {
  try {
    const imagePath = path.join(filePath, `${fileName}.${fileExtension}`);
    console.log(`Generating screenshot with parameters: url=${url}, file=${imagePath}\n`);

    if (!fs.existsSync(filePath)) {
      fs.mkdirSync(filePath);
    }

    const image = fs.createWriteStream(imagePath);
    await http.get(url, resp => {
      resp.pipe(image);
    });

    return imagePath;
  } catch (e) {
    console.error(e);
  }
}

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const escape = str => {
  return (
    str
      .replace(/\\'/g, "\\'")
      .replace(/\\"/g, '\\"')
      .replace(/\\&/g, '\\&')
      .replace(/\\r/g, '\\r')
      .replace(/\\t/g, '\\t')
      .replace(/\\b/g, '\\b')
      .replace(/\\f/g, '\\f')
      // remove new lines
      .replace(/\r?\n|\r/g, '')
      // eslint-disable-next-line no-control-regex
      .replace(/[\u0000-\u0019]+/g, '')
      .trim()
  );
};

const random = max => {
  return Math.floor(Math.random() * max);
};

async function run() {
  // const url = core.getInput('url');
  // const width = notBlankOrElse(core.getInput('width'), config.width);
  // const height = notBlankOrElse(core.getInput('height'), config.height);
  // const fileName = notBlankOrElse(core.getInput('name'), config.name);
  // const filePath = notBlankOrElse(core.getInput('path'), config.path);
  // const fileExtension = notBlankOrElse(core.getInput('extension'), config.extension);
  // const data = getData(config.routes.get_weekly_newsletter);

  for (let i = 0; i <= 300; i++) {
    await delay(1000);
    try {
      const data = []; // await iquotes.random();
      const result = JSON.stringify({
        quote: escape(data.quote),
        author: escape(data.title),
      });
      console.log(`${result},`);
    } catch (e) {
      // empty
    }

    // const data = await fetchAsync('https://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote');
    // if (data) {
    //   const index = data.content.lastIndexOf('— ');
    //   const result = JSON.stringify({
    //     quote: escape(data.content.substring(0, index)),
    //     author: escape(data.content.substring(index + 1)),
    //   });
    //   console.log(`${result},`);
    // }
  }

  //const target = `${config.url}?url=${url}&width=${width}&height=${height}`;
  //const imagePath = await createData(target, filePath, fileName, fileExtension);
  //core.setOutput('image', imagePath);
}

module.exports = run;

if (require.main === module) {
  run();
}
