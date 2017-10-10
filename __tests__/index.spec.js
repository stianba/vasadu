import vasadu from '../src/vasadu';

const jsonLocalization = {
  MENU_TOP_LEVEL: {
    no: 'Meny',
    en: 'Menu',
    es: 'Menú'
  },
  LOG_IN: {
    no: 'Logg inn',
    en: 'Log in',
    es: 'Iniciar sesión'
  },
  SET_LANGUAGE: {
    no: 'Endre språk',
    en: 'Change language',
    es: 'Cambiar idioma'
  }
};

describe('vasadu', () => {
  it('it should match with current locale', () => {
    const localization = vasadu(jsonLocalization, 'es');

    expect(localization.MENU_TOP_LEVEL).toEqual('Menú');
    expect(localization.LOG_IN).toEqual('Iniciar sesión');
    expect(localization.SET_LANGUAGE).toEqual('Cambiar idioma');
  });

  it('should throw if locale does not match key in data', () => {
    expect(() => {
      const locale = vasadu(jsonLocalization, 'fr');
    }).toThrow();

    expect(() => {
      const locale = vasadu(jsonLocalization, 'se');
    }).toThrow();

    expect(() => {
      const locale = vasadu(jsonLocalization, 'no');
    }).not.toThrow();
  });
});
