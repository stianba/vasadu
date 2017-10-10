// @flow
import vasadu from '../lib/vasadu';
import type { localizer } from '../lib/vasadu';
import localizeData from './localization.json';

const localization = vasadu((localizeData: localizer), 'no');

const menuLabel =
  typeof localization.menu === 'object' ? localization.menu.topLevel : '';

console.log(menuLabel);
