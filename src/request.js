'use strict';

const fetch = require('unfetch');

const fetchJSON = async (url, options) => {
  const data = await fetch(url, options);
  const response = await checkStatus(data);

  return await response.json();
};

const fetchHTML = async (url, options) => {
  const data = await fetch(url, options);

  return await data.text();
};

const checkStatus = async response => {
  if (response.ok) {
    return response;
  }
  const error = new Error(response.statusText);
  error.response = response;

  return Promise.reject(error);
};

module.exports = {
  fetchJSON,
  fetchHTML,
};
