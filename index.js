class Formatter {
  //add static methods here
  static capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  static sanitize(str){
    return str.replace(/[^A-Za-z0-9 '-]/g, '');
  }
  static titleize(str){
    let conjunctions=['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    let titleizedString=[];
    let words=str.split(" ");
    // console.log(words);
    for(let i=0;i<words.length;i++){
      if(i==0){
        titleizedString.push(this.capitalize(words[i]))
      }else if(conjunctions.includes(words[i])){
        titleizedString.push(words[i]);
      }else{
        // console.log(words[i])
        titleizedString.push(this.capitalize(words[i]))
      }
    }
    return titleizedString.join(" ")
  }
}

// console.log( Formatter.titleize( "a tale of two cities" ));