const skipWords = require('./spellchecker-skiped-words');

const skipIfMatch = [
  '[d]*px',
  'https?://[^s]*',
  '^[-\\w]+/[-\\w\\.]+$', // For MIME Types
  '^.*@semrush.com$',
];

module.exports = {
  rules: {
    'spellcheck/spell-checker': [
      1,
      {
        comments: true,
        strings: true,
        identifiers: true,
        lang: 'en_US',
        skipWords,
        skipIfMatch,
        skipWordIfMatch: [
          '^foobar.*$', // words that begin with foobar will not be checked
        ],
        minLength: 4,
      },
    ],
  },
};
