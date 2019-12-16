const path = require("path")
const nodeExternals = require("webpack-node-externals")

const { NODE_ENV = "development" } = process.env

module.exports = {
  entry: "./src/index.ts",
  externals: [
    nodeExternals(),
    nodeExternals({
      modulesDir: path.resolve(__dirname, "../node_modules")
    })
  ],
  mode: NODE_ENV,
  target: "node",
  output: {
    filename: "index.js",
    path: NODE_ENV === "development" ? path.resolve(__dirname, "build") : path.resolve(__dirname, "../build")
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ["ts-loader"]
      }, {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: "graphql-tag/loader"
      }
    ]
  }
}
