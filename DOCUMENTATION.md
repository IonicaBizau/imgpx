## Documentation

You can see below the API reference of this module.

### `imgpx(source, options, callback)`

#### Params
- **String|Buffer|Lwip** `source`: The image url/path/buffer or the lwip object itself.
- **Object** `options`: An object containing:
 - `image_type` (String): An optional field representing the image type (default: taken from the url/path).
 - `resize` (Array): An array of two numbers (`[width, height]`) used to resize the image. If not provided, the image will not be resized.
- **Function** `callback`: The callback function.

