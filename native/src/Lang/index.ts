const enGb = require("./en-gb/messages")

export default (lang) => {
  switch (lang) {
    default:
    case "en-gb":
      return enGb
  }
}
