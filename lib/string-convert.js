
export default {
    hyphen2camel: function (str) {
    return str
        .toLowerCase()
        .replace(/-[a-z]/g, function (match) {
            return match.slice(1).toUpperCase() ;
        });
}, camel2hyphen: function (str) {
    return str
        .replace(/[A-Z]/g, function (match) {
            return '-' + match.toLowerCase();
        })
        .toLowerCase();
}};