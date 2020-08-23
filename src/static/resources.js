
const fs = require('fs');
const path = require('path');

const resources = {

}

resources.init = () => {
    const directoryPath = path.join(__dirname, `../static/JSON`);

    fs.readdir(directoryPath, function (err, files) {
        //handling error
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        }
        //listing all files using forEach
        files.forEach(function (file) {
            resources[file.split('.')[0]] = JSON.parse(fs.readFileSync(path.join(__dirname, `../static/JSON/${file}`), {encoding:'utf8'}))[file.split('.')[0]]
        });
    });
}

module.exports = resources

