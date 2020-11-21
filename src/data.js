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

function writeJSON() {
    let accountsJSON = JSON.stringify(accounts, null, 4)

    fs.writeFileSync(
        path.join(__dirname, 'json/accounts.json'),
        accountsJSON,
        "utf8"
    )

}

module.exports = {
    writeJSON,
    accounts,
    users
};