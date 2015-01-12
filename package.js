'use strict';

Package.describe({
  name: 'mistereo:identicon',
  summary: 'Client-side identicon generation.',
  version: '1.0.0',
  git: 'https://github.com/Mistereo/meteor-identicon.git'
});

Package.onUse(function (api) {
  api.versionsFrom('1.0.2.1');
  api.use('templating', {weak: true});
  api.addFiles([
    'vendor/blockies/blockies.js',
    'lib/identicon.js'
  ], 'client');
});
