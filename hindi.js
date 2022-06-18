var Sentiment = require('sentiment');
var sentiment = new Sentiment();


//alternative to get the result directly from hindi
//every word is given a score
//more words can be added to the list

var hindi_Language = {
    labels: {
        'हानिकर': -2,
        'गुस्सा': -2,
        'परेशान': -2,
        'चिंतित': -3,
        'उदासीनता': -2,
        'भय': -2,
        'अभिमानी': -2,
        'नृशंस': -2,
        'भयंकर': -4,
        'खराब': -3,
        'तुच्छ': -3,
        'कंटीले': -2,
        'रोना': -3,
        'कठोर': -1,
        'लापरवाह': -3,
        'भ्रष्ट': -5,
        'पागल': -4,
        'आपराधिक': -3,
        'निर्दयी': -5,
        'आघात': -1,
        'मृत': -5,
        'खस्ताहाल': -2,
        'विकृत': -2,
        'विकृत': -2,
        'खेदजनक': -2,
        'उदास': -4,
        'वंचित': -1,
        'कीड़ा': -3,
        'नाली': -3
    },
    scoringStrategy: {
        apply: function(tokens, cursor, tokenScore) {

            var nexttoken = tokens[cursor + 1];
            if (nexttoken == 'नहीं') {
                tokenScore = -tokenScore;
            }

            return tokenScore;
        }
    }
};
sentiment.registerLanguage('hindi', hindi_Language);

// give input here
var result = sentiment.analyze('भ्रष्ट नहीं', { language: 'hindi' });
console.log(result)