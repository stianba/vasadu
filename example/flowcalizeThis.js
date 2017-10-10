// @flow
import vasadu from '../lib/vasadu';
import type { localizerData, localizer } from '../lib/vasadu';
import localizeData from './localization.json';

const locale = 'no';
const localization: localizer = vasadu((localizeData: localizerData), locale);

console.log(localization.LOG_IN);
