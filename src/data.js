const fs = require('fs');
const path = require("path");


const accountData = fs.readFileSync(path.join(__dirname, "./json/accounts.json"), {
    encoding: "utf-8"
})
const userData = fs.readFileSync(path.join(__dirname, "./json/users.json"), {
    encoding: "utf-8"
})

const accounts = JSON.parse(accountData);
const users = JSON.parse(userData);

function writeJSON(data) {
    // console.log(data);
    let dataJSON = JSON.stringify(data)

    fs.writeFileSync(
        path.join(__dirname, 'json/accounts.json'),
        dataJSON,
        "utf8"
    )

}

module.exports = {
    writeJSON,
    accounts,
    users
};