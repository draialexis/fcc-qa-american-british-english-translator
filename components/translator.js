const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require('./american-to-british-titles.js');
const britishOnly = require('./british-only.js');

class Translator {
  constructor() {
    this.britishToAmericanSpelling = Object.fromEntries(
        Object.entries(americanToBritishSpelling).map(([key, value]) => [value, key]),
    );

    this.britishToAmericanTitles = Object.fromEntries(
        Object.entries(americanToBritishTitles).map(([key, value]) => [value, key]),
    );
  }

  americanToBritish(text) {
    let translatedText = text;

    translatedText = this.applyTranslations(translatedText, americanOnly);
    translatedText = this.applyTranslations(translatedText, americanToBritishSpelling);
    translatedText = this.applyTranslations(translatedText, americanToBritishTitles);
    translatedText = this.translateTimeFormats(translatedText, ':', '.');

    return translatedText;
  }

  britishToAmerican(text) {
    let translatedText = text;

    translatedText = this.applyTranslations(translatedText, britishOnly);
    translatedText = this.applyTranslations(translatedText, this.britishToAmericanSpelling);
    translatedText = this.applyTranslations(translatedText, this.britishToAmericanTitles);
    translatedText = this.translateTimeFormats(translatedText, '.', ':');

    return translatedText;
  }

  applyTranslations(text, translations) {
    // Sort keys by length to handle longer phrases first, preventing overlap
    const sortedKeys = Object.keys(translations).sort((a, b) => b.length - a.length);

    for (let key of sortedKeys) {
      const value = translations[key];

      const escapedKey = key.replace('.', '\\.');
      const regex = new RegExp(`\\b${escapedKey}(?!\\w)`, 'gi');

      text = text.replace(regex, (match) => {
        let translatedValue = this.capitalizeTargetSameAsSource(match, value);
        return this.highlightTranslation(translatedValue);
      });
    }
    return text;
  }

  capitalizeTargetSameAsSource(source, target) {
    return source.charAt(0) === source.charAt(0).toUpperCase()
        ? target.charAt(0).toUpperCase() + target.slice(1)
        : target;
  }

  highlightTranslation(text) {
    return `<span class="highlight">${text}</span>`;
  }

  translateTimeFormats(text, searchValue, replaceValue) {
    const regex = new RegExp(`(\\d{1,2})\\${searchValue}(\\d{2})`, 'g');
    return text.replace(regex, (match) => {
      return this.highlightTranslation(match.replace(searchValue, replaceValue));
    });
  }
}

module.exports = Translator;
