jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000;

// Setup tests for Zone without microtask support
require('../lib/browser/zone.js');
require('../lib/browser/long-stack-trace-zone.js');

// Patch jasmine
require('../lib/browser/jasmine-patch.js');

