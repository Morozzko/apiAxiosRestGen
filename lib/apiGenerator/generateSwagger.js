const {exec} = require('child_process');
const fs = require('fs');
const {apiFolder, folderName, getName, apiUrls} = require('./config')

const getScript = (swagger, destination) => `yarn openapi-generator-cli generate --skip-validate-spec -i ${swagger} -g typescript-axios -o ${apiFolder}/${destination}`

apiUrls.forEach(file => {
    const path = `${folderName}${getName(file.name)}`
    const script = getScript(path, file.name)
    console.log(script)
    if (fs.existsSync(path)) {
        exec(script)
    }
})
