const imgpx = require("../lib");

imgpx("https://octodex.github.com/images/original.png", {
    resize: [400, 400]
}, (err, pixels, img) => {
    if (err) { return console.error(err); }

    console.log(img.height());
    // 400

    console.log(pixels.length);
    // 400

    console.log(pixels[0].length);
    // 400
});

imgpx(`${__dirname}/octocat.png`, (err, pixels) => {
    console.log(err || pixels);
});
// [ [ PixelClass { r: 0, g: 0, b: 0, a: 0 },
//     PixelClass { r: 0, g: 0, b: 0, a: 0 },
//     PixelClass { r: 0, g: 0, b: 0, a: 0 },
//     ...
//     PixelClass { r: 0, g: 0, b: 0, a: 0 } ],
//   [ PixelClass { r: 0, g: 0, b: 0, a: 0 },
//     PixelClass { r: 0, g: 0, b: 0, a: 0 },
//     ...
//     PixelClass { r: 0, g: 0, b: 0, a: 0.18 },
//     PixelClass { r: 0, g: 0, b: 0, a: 0.12 },
//     ...
//     PixelClass { r: 0, g: 0, b: 0, a: 0 } ],
//   ... ]
