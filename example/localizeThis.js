const localize = require('../lib/localizer').default;
const localizeData = require('./localization.json');

const localization = localize(localizeData, 'es');
console.log(localization.menu.topLevel);
