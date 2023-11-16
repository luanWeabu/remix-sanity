const path = require("path");

module.exports = {
  entry: "./path/to/my/entry/file.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "my-first-webpack.bundle.js",
  },
};
module.exports = {
  entry: "./path/to/my/entry/file.js",
};
externals: {
  ("@sanity/image-url/lib/types/builder");
  ("commonjs2 @sanity/image-url/lib/types/builder");
}
