class Formatter {
  //add static methods here
  static capitalize(a) {
    
     console.log( a.charAt(0).toUpperCase() + a.slice(1));
  }
  static sanitize(input){
    console.log(input.replace(/\W/g, ''))
  }
}
 Formatter.capitalize( "crocodile" );
Formatter.capitalize( "a" );
Formatter.capitalize( "alligator" );
Formatter.capitalize( "BURSTING BALLOON" );
Formatter.sanitize( "c" ) ;
 Formatter.sanitize( "!" );
 Formatter.sanitize( "ca$@#tching cold" );


//   describe( "sanitize", () => {
//     it( "is a static method", () => {
//       expect( Formatter.sanitize( "C catching colds" ) ).to.not.throw
//     } )

//     it( "removes non-alphanumeric characters except for dash, single quote and space", () => {
//       expect( Formatter.sanitize( "c" ) ).to.equal( "c" )
//       expect( Formatter.sanitize( "!" ) ).to.equal( "" )
//       expect( Formatter.sanitize( "ca$@#tching cold" ) ).to.equal( "catching cold" )
//       expect( Formatter.sanitize( "Doin' Dishes" ) ).to.equal( "Doin' Dishes" )
//       expect( Formatter.sanitize( "Entert*ain(i{ng-Elephan^ts" ) ).to.equal( "Entertaining-Elephants" )
//     } )
//   } )

//   describe( "titleize", () => {
//     it( "is a static method", () => {
//       expect( Formatter.titleize( "F forever foolish" ) ).to.not.throw
//     } )

//     it( "capitalizes all words in a sentence except 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', and 'from'", () => {
//       expect( Formatter.titleize( "getting giggles" ) ).to.equal( "Getting Giggles" )
//       expect( Formatter.titleize( "where the wild things are" ) ).to.equal( "Where the Wild Things Are" )
//       expect( Formatter.titleize( "chicken soup with rice and a few other songs" ) ).to.equal( "Chicken Soup With Rice and a Few Other Songs" )
//       expect( Formatter.titleize( "Maurice a an but of and for at by from end" ) ).to.equal( "Maurice a an but of and for at by from End" )
//     } )

//     it( "always capitalizes the first word", () => {
//       expect( Formatter.titleize( "a tale of two cities" ) ).to.equal( "A Tale of Two Cities" )
//       expect( Formatter.titleize( "in the night kitchen" ) ).to.equal( "In the Night Kitchen" )
//     } )
//   } )
// } )