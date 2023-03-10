'use strict';

const ReactVersion = '18.3.0';

const nextChannelLabel = 'next';

const stablePackages = {
  'eslint-plugin-react-hooks': '5.0.0',
  'jest-react': '0.15.0',
  react: ReactVersion,
  'react-art': ReactVersion,
  'react-dom': ReactVersion,
  'react-server-dom-webpack': ReactVersion,
  'react-is': ReactVersion,
  'react-reconciler': '0.30.0',
  'react-refresh': '0.15.0',
  'react-test-renderer': ReactVersion,
  'use-subscription': '1.9.0',
  'use-sync-external-store': '1.3.0',
  scheduler: '0.24.0',
};

// These packages do not exist in the @next or @latest channel, only
// @experimental. We don't use semver, just the commit sha, so this is just a
// list of package names instead of a map.
const experimentalPackages = [];

module.exports = {
  ReactVersion,
  nextChannelLabel,
  stablePackages,
  experimentalPackages,
};
