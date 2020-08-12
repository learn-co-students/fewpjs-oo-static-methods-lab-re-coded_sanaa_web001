class Formatter {
  //add static methods here
  static capitalize(str){
    return str.replace(str[0], str[0].toUpperCase())
  }
  static sanitize(str){
   var newStr=str.replace(/[^\w\s'-]|_/g,"");
   return newStr;
  }
  static titleize(str){
   const arr=["the","a","an","but","of","and","for","at","by","and","from"];
   const newarr=str.split(" ");
   str="";
   for(let i=0;i<newarr.length;i++){
     if(newarr[i]===newarr[0]){
       str+= newarr[i].replace(newarr[0][0], newarr[0][0].toUpperCase());
       
     }
     else if(newarr[i]!=="the"&&newarr[i]!=="a"&&newarr[i]!=="an"&&newarr[i]!=="but"&&newarr[i]!=="of"&&newarr[i]!=="and"&&newarr[i]!=="for"&&newarr[i]!=="at"&&newarr[i]!=="by"&&newarr[i]!=="and"&&newarr[i]!=="from"){
       str+=" "
       str+= newarr[i].replace(newarr[i][0], newarr[i][0].toUpperCase());
       
     }
     else{
       str+=" "
       str+= newarr[i].replace(newarr[i][0], newarr[i][0].toLowerCase());
     }
   }
   return str;
  }
}
Formatter.capitalize("sss");