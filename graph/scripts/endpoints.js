const fs = require("fs")
const swaggerDocs = require("../../backend/swagger.json")

const { paths } = swaggerDocs
const endpoints = Object.keys(paths)

function camelize(str) {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
      return index == 0 ? word.toLowerCase() : word.toUpperCase()
    })
    .replace(/\s+/g, "")
    .replace(/\//g, "")
    .replace(/\-/g, "")
    .replace(/\:/g, "By")
}

const getUrlParams = parameters => {
  const params = []
  if (parameters) {
    parameters.map(param => params.push(param.name))
  }
  return params
}

const getDynamicParams = endpoint => {
  const split = endpoint.split("/")

  const url = split.map(i => {
    if (i.substring(0, 1) === ":") {
      return "${" + i.substring(1, i.length) + "}"
    }
    return i
  })

  return "`" + url.join("/") + "`"
}

const getInputParams = ({ parameters }) => {
  const params = getUrlParams(parameters)
  let inputParams = ""
  params.map((param, i) => {
    if (i === params.length - 1) {
      inputParams = `${inputParams}${param}: string`
    } else {
      inputParams = `${inputParams}${param}: string, `
    }
  })
  return inputParams
}

let text = "export default {\n"

endpoints.map(endpoint => {
  const path = paths[endpoint]
  const paramdEndpoint = getDynamicParams(endpoint)

  if (path.get) {
    const inputParams = getInputParams(path.get)
    text = text + `  get${camelize(endpoint)}: (${inputParams}): string => ${paramdEndpoint},\n`
  }

  if (path.post) {
    const inputParams = getInputParams(path.post)
    text = text + `  post${camelize(endpoint)}: (${inputParams}): string => ${paramdEndpoint},\n`
  }

  if (path.put) {
    const inputParams = getInputParams(path.put)
    text = text + `  put${camelize(endpoint)}: (${inputParams}): string => ${paramdEndpoint},\n`
  }

  if (path.delete) {
    const inputParams = getInputParams(path.delete)
    text = text + `  delete${camelize(endpoint)}: (${inputParams}): string => ${paramdEndpoint},\n`
  }
})

text = text + "}"

fs.writeFile("./src/services/endpoints.ts", text, err => {
  if (err) {
    throw err
  }
  console.log("Saved!")
})
