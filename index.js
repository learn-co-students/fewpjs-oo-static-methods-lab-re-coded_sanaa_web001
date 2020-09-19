class Formatter {
  //add static methods here
  static capitalize(input) {
    return input.replace(/^\w/, function(c) {
      return c.toUpperCase();
    });
  }

  static sanitize(input) {
    return input.replace( /[^A-Za-z0-9 '-]/g, '' )
  }

  static titleize(input) {
    const exempt = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    const indivWords = input.split(' ');
    let titleizedInput = "";
    for (let i = 0; i < indivWords.length; i++){
      if (exempt.includes(indivWords[i]) && (i>0)) {
        titleizedInput += indivWords[i] + " "
      }
      else {
        titleizedInput += this.capitalize(indivWords[i]) + " "
      }
   }
   return titleizedInput.trim()
  }
}
