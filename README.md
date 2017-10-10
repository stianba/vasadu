# vasadu
Simple localizer.

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