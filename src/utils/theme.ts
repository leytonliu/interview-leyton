const kebabCase = (word) => {
  const newWord = word
    .replace(RegExp('[A-Z]', 'g'), function (i) {
      return '-' + i;
    })
    .toLowerCase()
    .replace(RegExp('^-'), '');

  return newWord;
};

const style = (styles) => {
  if (Array.isArray(styles)) {
    return styles
      .filter(function (item) {
        return item != null && item !== '';
      })
      .map(function (item) {
        return style(item);
      })
      .join(';');
  }

  if ('Object' === styles.constructor) {
    return Object.keys(styles)
      .filter(function (key) {
        return styles[key] != null && styles[key] !== '';
      })
      .map(function (key) {
        return [kebabCase(key), [styles[key]]].join(':');
      })
      .join(';');
  }

  return styles;
};
const mapThemeVarsToCSSVars = (themeVars) => {
  const cssVars = {};
  Object.keys(themeVars).forEach(function (key) {
    const cssVarsKey = '--' + kebabCase(key);
    cssVars[cssVarsKey] = themeVars[key];
  });

  return style(cssVars);
};

export { mapThemeVarsToCSSVars };
