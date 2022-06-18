const { translate } = require('free-translate');

(async() => {
    const translatedText = await translate('Hello World', { from: 'en', to: 'hi' });

    console.log(translatedText);
})();