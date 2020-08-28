class Formatter {
  //add static methods here
  // 1.  Write a method `static capitalize` that takes in a string and capitalizes the
  //   first letter.
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  // 2.  Write a method `static sanitize` that takes in a string and removes all
  //     non-alphanumeric characters except for dashes, single quotes and spaces.
  // static
  static sanitize(string) {
    return string.replace(/[^- 'A-Za-z0-9]+/g, "");
  }

  // 3.  Write a method `static titleize` that takes in a string and capitalizes all
  //     words in a sentence except the, a, an, but, of, and, for, at, by, and from; and
  //     always capitalizes the first word.

  static titleize(srtingOfTitle) {
    // let firstWord = srtingOfTitle.split(' ');
    let stopwords = ["a", "an", "but", "of", "and", "for", "at", "by", "from", "the"];

    let firstWord = srtingOfTitle.replace(/ .*/, "");
    firstWord = this.capitalize(firstWord);

    let otherWords = srtingOfTitle.split(" ");
    otherWords.shift();
    // console.log(otherWords);

    let newArry = [];
    newArry.push(firstWord);

    for (let i = 0; i < otherWords.length; i++) {
      if (stopwords.includes(otherWords[i])) {
        newArry.push(otherWords[i]);
      }else {
        newArry.push(this.capitalize(otherWords[i]));
      }
    }
    return( newArry.join(' '))

    // console.log(firstWord)
    // capitalize first word
    // let firstWord = Formatter.capitalize(srtingOfTitle[0]);
    // let otherWords = srtingOfTitle.filter((word) =>
    // word.includes(["a", "an", "but", "of", "and", "for", "at", "by", "from"])
    // );
    // return firstWord + otherWords;
  }
}
console.log(Formatter.titleize("where the wild things are")); // A Tale of Two Cities
