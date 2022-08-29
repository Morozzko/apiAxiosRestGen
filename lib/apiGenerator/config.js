const folderName = "./swagger/"
const apiFolder = "src/api/generated"
const apiUrls = [
    {
        name: "reactions",
        url: "123"
    },
]
const getName = (name) => `${name}-swagger.json`

module.exports = {
    apiUrls,
    folderName,
    apiFolder,
    getName
}
