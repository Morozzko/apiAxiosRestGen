const fs = require('fs').promises
const axios = require('axios')
const {apiUrls, folderName, getName, apiFolder} = require("./config");


const rmrf = async (folder) => await fs.rm(folder, {recursive: true, force: true});
const generateFolder = async () => await fs.mkdir(folderName)


const generateSwagger = async () => {
    for await (const {name, url} of apiUrls) {
        try {
            const {data} = await axios.get(url)
            if (data) {
                await fs.writeFile(getName(`${folderName}${name}`), JSON.stringify(data))
            }
        } catch (e) {

        }
    }
}


const main = async () => {
    await rmrf(folderName)
    await rmrf(`./${apiFolder}`)
    await generateFolder()
    await generateSwagger()
}

main()
    .then(() => {
        console.log("done")
    })
    .catch((e) => {
    })
    .finally(() => {

    })
