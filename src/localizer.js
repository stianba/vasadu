// @flow
type localizer = { [string]: localizer | string };

function locRecursion(loc: localizer, locale: string): string | localizer {
  for (let k in loc) {
    if (loc.hasOwnProperty(k)) {
      if (typeof loc[k] === 'string') {
        return ((loc[locale]: any): string);
      }

      loc[k] = locRecursion(loc[k], locale);
    }
  }

  return loc;
}

/*
localize takes a localizer data map and extracts the correct localization string based on locale
*/
function localize(data: localizer, locale: string): localizer {
  return ((locRecursion(data, locale): any): localizer);
}

export default localize;
export type { localizer };
