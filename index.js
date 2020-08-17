class Formatter {
    static capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    static sanitize(string) {
        return string.replace(/[^A-Za-z0-9- ']+/g, "");
    }
    static titleize(string) {
        string = string.toLowerCase().split(' ');
        for (var i = 0; i < string.length; i++) {
            if (i !== 0 && string[i] === 'a' || string[i] === 'an' || string[i] === 'but' || string[i] === 'of' ||
                string[i] === 'and' || string[i] === 'for' || string[i] === 'at' ||
                string[i] === 'by' || string[i] === 'from' || string[i] === 'the') {

            } 
            else {
                console.log(string[i] = string[i].charAt(0).toUpperCase() + string[i].slice(1));
                string[i] = string[i].charAt(0).toUpperCase() + string[i].slice(1);
            }}
            return string.join(' ');
        }
  
}



console.log(Formatter.titleize("but of for mop"));