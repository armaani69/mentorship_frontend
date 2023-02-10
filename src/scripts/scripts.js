const { Json2Html } = require('json-into-html');
const fs = require("fs");

const getJSONValues =  () => {
    const JSONData = fs.readFileSync('../constants/constants.json', {encoding:'utf8', flag:'r'})
    return JSON.parse(JSONData)
}

fs.writeFileSync('../documents/index.html', Json2Html(getJSONValues()));


