'use strict';

const vagueTime = require('vague-time');

// Function equivalent to moment(<stringDate>).fromNow()
// but vague-time module is lighter than moment!
const fromNow = strDate => {
  try {
    const date = new Date(new Date(strDate));
    const formattedDate = vagueTime.get({ to: date }).replace('a couple of', '2');
    if (/\d+ years ago|a year ago/.test(formattedDate)) {
      return `in ${date.getFullYear()}`;
    }

    return formattedDate;
  } catch (e) {
    return '?';
  }
};

module.exports = {
  fromNow,
};
