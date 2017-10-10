const vasadu = require('../lib/vasadu').default;
const localizeData = require('./localization.json');

const localization = vasadu(localizeData, 'es');
console.log(localization.menu.topLevel);
