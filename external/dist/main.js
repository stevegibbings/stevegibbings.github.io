/**
 * Created by steve.gibbings on 25/09/2015.
 */
require.config({
    baseUrl: "dist",
    paths: {
          "lazysizes": "https://cdn.rawgit.com/aFarkas/lazysizes/gh-pages/lazysizes.min",
          "picturefill": "https://cdnjs.cloudflare.com/ajax/libs/picturefill/2.3.1/picturefill"
    },
    shim: {
        lazysizes: {
            deps: [],
            exports: "lazysizes"
        },
        picturefill: {
            deps: [],
            exports: "picturefill"
        }
    }
});

require(["picturefill", "lazysizes"], function(pictureFill, lazySizes) {
    pictureFill();
    lazySizes.init();
});