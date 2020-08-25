class Formatter {
    //add static methods here
    static capitalize(string){
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

    static sanitize(string) {
       return string.replace(/[^A-Za-z0-9 '-]/g, '' )
     }

    static titleize(string){

        let words =string.split(' ');
        let exceptions =['a','an','the','but','of','by','at','from','for','and',];
       let  newString="";
        words.forEach(word =>{
            if(words.indexOf(word)===0){
                newString+=Formatter.capitalize(word);
            }
            else if(exceptions.includes(word)){
                newString+=` ${word}`;
            }
            else {
                newString+=' '+Formatter.capitalize(word);
            }
        })
          return newString;


  }
}
  // console.log(Formatter.titleize(" this is a test for capitalizeing all but an exception not  "))
