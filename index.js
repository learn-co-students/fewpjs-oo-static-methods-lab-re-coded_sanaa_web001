class Formatter {
  //add static methods here
  
  
  static capitalize(string)
  {
    let firstLetter = string.charAt(0).toUpperCase()
    return firstLetter  + string.slice(1)
   }

  static sanitize(string)
  {
      return string.replace(/[^A-Za-z0-9 '-]/g, '') ;
  }


   static titleize(string) 
   {
    let upperString = string.charAt(0).toUpperCase() + string.slice(1)
    let  expectWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let arr = upperString.split(" ")
    return arr.map(string => {
      if (expectWords.includes(string)) {
        return string
      } else {
        return string.charAt(0).toUpperCase() + string.slice(1)
      }
    }).join(" ")
  }
}