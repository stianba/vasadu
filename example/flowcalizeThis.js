// @flow
import localize from '../lib/localizer';
import type { localizer } from '../lib/localizer';
import localizeData from './localization.json';

const localization = localize((localizeData: localizer), 'no');

const menuLabel =
  typeof localization.menu === 'object' ? localization.menu.topLevel : '';

console.log(menuLabel);
