class Formatter {
  //add static methods here

  static capitalize(srString){
    return srString.charAt(0).toUpperCase() + srString.slice(1)
  }

  static sanitize(srString){
    let newStr = srString.split(' ');
    for (let i=0; i<newStr.length; i++){
      let leter= newStr[i].split("");
      let f= false;
      for (let j=0; j<leter.length; j++){
        let v = leter[j].charCodeAt(0);
        if ((v>32&&v<39)||(v>39&&v<45)||(v>57&&v<65)||(v>90&&v<97)||(v>122&&v<=126)||(v>45&&v<48)){
          f= true;
          leter[j]=""
        }
        else{leter[j]=leter[j] }
      }
      leter= leter.join('')
      newStr[i]= leter;
    }
    newStr= newStr.join(' ');
    srString=newStr;
    return srString;
    }

  static titleize(srString){
    let mySrt= srString.split(' ')
    mySrt[0]=mySrt[0].charAt(0).toUpperCase() + mySrt[0].slice(1);
    for (let i=1; i<mySrt.length; i++){
      let smString= mySrt[i].toString();
      
      if (!(smString=='a'||smString=='an'||smString=='but'||smString=='of'||smString=='and'||smString=='for'||smString=='at'||smString=='by'||smString=='from'||smString=='or'||smString=='the')){
        smString= smString.charAt(0).toUpperCase() + smString.slice(1)
      }
      else{
        smString= smString;
      }
      mySrt[i]=smString;
    }

    mySrt=mySrt.join(' ');
    srString=mySrt;
    return (srString);

}
}