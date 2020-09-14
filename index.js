class Formatter {

    static capitalize (string) {
     return string.charAt(0).toUpperCase() + string.slice(1);
    }

    static sanitize (string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g, '');
    }

    static titleize (string) {
      let words = string.split(' ')
      let wordsCap = words.map ((word, index) => {
        if (word !=='the' && word !=='a' && word !=='an' &&word !=='but' && word !=='of' && word !=='and'&& word !=='for' && word !=='at' && word !=='by' && word !=='from')
        return this.capitalize(word)
        else if (index === 0)
        return this.capitalize(word)
        else
        return word;
      });
     return wordsCap.join(" ");
    }
}
