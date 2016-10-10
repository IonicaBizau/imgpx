
# imgpx

 [![Patreon](https://img.shields.io/badge/Support%20me%20on-Patreon-%23e6461a.svg)][paypal-donations] [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![AMA](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Version](https://img.shields.io/npm/v/imgpx.svg)](https://www.npmjs.com/package/imgpx) [![Downloads](https://img.shields.io/npm/dt/imgpx.svg)](https://www.npmjs.com/package/imgpx) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Get a matrix of pixels of a given image.

## :cloud: Installation

```sh
$ npm i --save imgpx
```


## :clipboard: Example



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
```

## :memo: Documentation


### `imgpx(source, options, callback)`

#### Params
- **String|Buffer|Lwip** `source`: The image url/path/buffer or the lwip object itself.
- **Object** `options`: An object containing:
 - `image_type` (String): An optional field representing the image type (default: taken from the url/path).
 - `resize` (Array): An array of two numbers (`[width, height]`) used to resize the image. If not provided, the image will not be resized.
- **Function** `callback`: The callback function.



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## :moneybag: Donations

Another way to support the development of my open-source modules is
to [set up a recurring donation, via Patreon][patreon]. :rocket:

[PayPal donations][paypal-donations] are appreciated too! Each dollar helps.

Thanks! :heart:

## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`image-to-ascii`](https://github.com/IonicaBizau/image-to-ascii)—A Node.JS module that converts images to ASCII art.

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[patreon]: https://www.patreon.com/ionicabizau
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2016#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
