"use strict";

const lwipify = require("lwipify")
    , lwipPixels = require("lwip-pixels")
    ;

/**
 * imgpx
 *
 * @name imgpx
 * @function
 * @param {String|Buffer|Lwip} source The image url/path/buffer or the lwip object itself.
 * @param {Object} options An object containing:
 *
 *  - `image_type` (String): An optional field representing the image type (default: taken from the url/path).
 *  - `resize` (Array): An array of two numbers (`[width, height]`) used to resize the image. If not provided, the image will not be resized.
 *
 * @param {Function} callback The callback function.
 */
module.exports = function imgpx(source, options, callback) {


    if (typeof options === "function") {
        callback = options;
        options = {
            image_type: undefined
        };
    }

    lwipify(source, options, (err, image) => {

        if (options.resize) {
            image.resize(options.resize[0], options.resize[1], (err, img) => {
                if (err) { return callback(err); }
                delete options.resize;
                imgpx(img, options, callback);
            });
            return;
        }


        callback(null, lwipPixels(image), image, source);
    });
};
