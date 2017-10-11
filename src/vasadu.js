// @flow
type localeData = { [string]: string };
type localizerData = { [string]: localeData };
type localizer = { [string]: string };

function pickLanguageString(loc: localizerData, locale: string): localizer {
  let localizer: localizer = {};

  for (let k in loc) {
    if (loc.hasOwnProperty(k)) {
      if (!loc[k].hasOwnProperty(locale)) {
        throw new Error(
          `'${locale}' is not a key in the given localization data.`
        );
      }

      localizer[k] = loc[k][locale];
    }
  }

  return localizer;
}

/**
 * @param {localizerData} data
 * @param {string} locale
 * localize takes a localizer data map and extracts 
 * the correct localization string based on locale
 */
function vasadu(data: localizerData, locale: string): localizer {
  return pickLanguageString(data, locale);
}

export default vasadu;
export type { localeData, localizerData, localizer };
