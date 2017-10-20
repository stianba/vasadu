# vasadu
Simple localizer.

[![Build Status](https://travis-ci.org/stianba/vasadu.svg?branch=master)](https://travis-ci.org/stianba/vasadu)

```
$ yarn add vasadu
```

```javascript
import vasadu from 'vasadu';

const localizationData = {
  MENU_LABEL: {
    no: "Meny",
    en: "Menu"
  },
  LOG_IN: {
    no: "Logg inn",
    en: "Log in"
  }
}

const locale = "no";
const localization = vasadu(localizationData, locale);

console.log(localization.LOG_IN); // Logg inn
```
