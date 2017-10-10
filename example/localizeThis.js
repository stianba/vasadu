// @flow
import localize from '../lib/localizer';
import type { localizer } from '../lib/localizer';

const localizeData: localizer = {
  menu: {
    topLevel: {
      no: 'Meny',
      en: 'Menu',
      es: 'Menú'
    }
  },
  logIn: {
    no: 'Logg inn',
    en: 'Log in',
    es: 'Iniciar sesión'
  },
  setLanguage: {
    no: 'Endre språk',
    en: 'Change language',
    es: 'Cambiar idioma'
  }
};

const localization = localize(localizeData, 'es');

const menuLabel =
  typeof localization.menu === 'object' ? localization.menu.topLevel : '';

console.log(menuLabel);
