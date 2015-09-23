/**
 * 100 Thin (Hairline)
 * 200 Extra Light (Ultra Light)
 * 300 Light
 * 400 Normal
 * 500 Medium
 * 600 Semi Bold (Demi Bold)
 * 700 Bold
 * 800 Extra Bold (Ultra Bold)
 * 900 Black (Heavy)
 */

var weights = {
  thin       : 100,
  extraLight : 200,
  light      : 300,
  normal     : 400,
  medium     : 500,
  semiBold   : 600,
  bold       : 700,
  extraBold  : 800,
  black      : 900
};

// aliases

weights.hairline = weights.thin;
weights.regular  = weights.normal;
weights.xLight   = weights.ultraLight = weights.uLight = weights.extraLight;
weights.sBold    = weights.demiBold = weights.dBold = weights.semiBold;
weights.xBold    = weights.ultraBold = weights.uBold = weights.extraBold;
weights.heavy    = weights.black;

// lower-case aliases

Object.keys( weights )
  .forEach( function ( key ) {
    weights[ key.toLowerCase() ] = weights[ key ];
  });

module.exports = weights;
