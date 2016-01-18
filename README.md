# imgpx [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![Version](https://img.shields.io/npm/v/imgpx.svg)](https://www.npmjs.com/package/imgpx) [![Downloads](https://img.shields.io/npm/dt/imgpx.svg)](https://www.npmjs.com/package/imgpx) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Get a matrix of pixels of a given image.

## Installation

```sh
$ npm i --save imgpx
```

## Example

```js
const imgpx = require("imgpx");

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
```

## Documentation

### `imgpx(source, options, callback)`

#### Params
- **String|Buffer|Lwip** `source`: The image url/path/buffer or the lwip object itself.
- **Object** `options`: An object containing:
 - `image_type` (String): An optional field representing the image type (default: taken from the url/path).
 - `resize` (Array): An array of two numbers (`[width, height]`) used to resize the image. If not provided, the image will not be resized.
- **Function** `callback`: The callback function.

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

## License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2016#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md