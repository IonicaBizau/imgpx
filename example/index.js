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
// [ [ { r: 0, g: 0, b: 0, a: 0 },
//     { r: 0, g: 0, b: 0, a: 0 },
//     ...
//     { r: 0, g: 0, b: 0, a: 0 },
//     { r: 0, g: 0, b: 0, a: 0 },
//     { r: 0, g: 0, b: 0, a: 0 } ],
//   ...
//   [ { r: 0, g: 0, b: 0, a: 0 },
//     ...
//     { r: 1, g: 1, b: 1, a: 100 },
//     { r: 33, g: 27, b: 24, a: 100 },
//     { r: 70, g: 58, b: 51, a: 100 },
//     ...
//     { r: 0, g: 0, b: 0, a: 0 } ],
//   ...
//   [ { r: 0, g: 0, b: 0, a: 0 },
//     ...
//     { r: 0, g: 0, b: 0, a: 0 } ] ]
