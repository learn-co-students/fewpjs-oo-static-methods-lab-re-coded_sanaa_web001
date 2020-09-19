// class Formatter {
//   //add static methods here
//   static capitalize (myString){
//     return myString.charAt(0).toUpperCase() + myString.slice(1);
//   }
//   static sanitize(myString){
//     // let valids=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','-',"'",' ','1','2','3','4','5','6','7','8','9','0'];
//     // let strArray=myString.toLowerCase().split()
//     // return strArray.find(char=>valids.includes(char));
//     return myString.replace(/^[A-Za-z0-9' -]*$/g, '');
//   }
// }
class Formatter {
  //add static methods here
  static capitalize(sentence){
    let a= sentence.toUpperCase().charAt(0);
    return a+sentence.substr(1);
  }
  static sanitize(sentence){
    let a = sentence.replace(/[&@^!\/\\#,+()$~%.":*?<>{}]/g, "");
    return a;
  }
  static titleize(sentence){
    let wordArray = sentence.split(' ');
    let superWord="";
        for (let i = 0; i < wordArray.length; i++) {
          if (i==0)
          {superWord += Formatter.capitalize(wordArray[i])+' ';
          // superWord += Formatter.capitalize(wordArray[i])+' ';
          }
        else  if( wordArray[i]=="the"||  wordArray[i]=="a"|| wordArray[i]== "an"||  wordArray[i]=="but"||  wordArray[i]=="of"||wordArray[i]== "and"|| wordArray[i]== "for"|| wordArray[i]== "at"||  wordArray[i]=="by"|| wordArray[i]== "from")
          superWord+=wordArray[i]+' ';
          else
        {  if(i+1==wordArray.length)
          superWord += Formatter.capitalize(wordArray[i]);
            else
            superWord += Formatter.capitalize(wordArray[i])+' ';}
            // superWord += wordArray[i].charAt(0).toUpperCase();
        }
        return superWord;
  }
}



