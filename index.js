class Formatter {

  static capitalize(name) {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  static sanitize (string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g,'')
  }

  static titleize( sentence ) {
   let x = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
   let result = [];
   let arr = sentence.split( " " );
   for ( let n = 0; n < arr.length; n++ ) {
     if ( n == 0 ) {
       result.push( this.capitalize( arr[ n ] ) )
     } else {
       if ( x.includes( arr[ n ] ) ) {
         result.push( arr[ n ] );
       } else {
         result.push( this.capitalize( arr[ n ] ) );
       }
     }

   }
   return result.join( " " );
 }
}
