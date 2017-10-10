// @flow
type localizer = Map<string, localizer | string>;

function locRecursion(loc: localizer, locale: string): string | localizer {
  for (let [k, v] of loc.entries()) {
    if (typeof v === 'string') {
      return ((loc.get('locale'): any): string);
    }

    loc.set(k, locRecursion(v, locale));
  }

  return loc;
}

/*
localize takes a localizer data map and extracts the correct localization string based on locale
*/
function localize(data: localizer, locale: string): string | localizer {
  return locRecursion(data, locale);
}

export default localize;
export type { localizer };
