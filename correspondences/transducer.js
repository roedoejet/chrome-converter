waldayu.transducers["heiltsuk_approx"] = (function() {
    var correspondences = {'\u0301': '', '\u1e43': 'm', '\u0127': 'h', '\u1e47': 'n', '\u026b': 'hl', '\u030c': '', '\u0313': '', '\u0294': '?', '\u1e37': 'l', '\u03bb': 'kl', '\u019b': 'kl'};
    var keys = ['\u0301', '\u1e43', '\u0127', '\u1e47', '\u026b', '\u030c', '\u0313', '\u0294', '\u1e37', '\u03bb', '\u019b'];
    var regex = new RegExp("(" + keys.join('|') + ")", 'g');
    return function(str) {
        return str.replace(regex, function(a,b) {
            return correspondences[a];
        });
    };
})();