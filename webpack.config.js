const path = require("path")

module.exports = {
  target: "node",
  mode: "none",
  entry: "./src/index.ts",
  resolve: {
    extensions: [".js", ".ts"],
    alias: {
      "@": path.resolve(__dirname, "src")
    }
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        include: [path.resolve(__dirname, "src")],
        use: [
          {
            loader: "ts-loader",
            options: {
              compilerOptions: {
                sourceMap: true
              }
            }
          }
        ]
      }
    ]
  },
  output: {
    path: path.join(__dirname, "build"),
    filename: "index.js",
    libraryTarget: "commonjs2"
  }
}
