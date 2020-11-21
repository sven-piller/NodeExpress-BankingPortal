const fs = require("fs");
const path = require("path");

const express = require("express");

const app = express();
const data = require('./data');

const users = data.users;
const accounts = data.accounts;
const writeJSON = data.writeJSON;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({
    extended: true
}));




app.get('/savings', (req, res) => {
    res.render('account', {
        account: accounts.savings
    })
})

app.get('/checking', (req, res) => {
    res.render('account', {
        account: accounts.checking
    })
})

app.get('/credit', (req, res) => {
    res.render('account', {
        account: accounts.credit
    })
})

app.get('/transfer', (req, res) => {
    res.render('transfer', {

    })
})

app.post('/transfer', (req, res) => {
    let from = req.body.from;
    let to = req.body.to;
    let amount = req.body.amount;

    accounts[from].balance = accounts[from].balance - parseInt(amount, 10);
    accounts[to].balance = accounts[to].balance + parseInt(amount, 10);
    
    writeJSON(accounts);

    res.render('transfer', {
        message: "Transfer Completed"
    })
})

app.get('/payment', (req, res) => {
    res.render('payment', {
        account: accounts.credit
    })
})

app.post('/payment', (req, res) => {
    let amount = req.body.amount;

    accounts['credit'].balance = accounts['credit'].balance - parseInt(amount, 10);
    accounts['credit'].available = accounts['credit'].available + parseInt(amount, 10);

    writeJSON(accounts);

    res.render('payment', {
        message: "Payment Successful",
        account: accounts.credit
    })
})

app.get('/profile', (req, res) => {
    res.render('profile', {
        user: users[0]
    })
})

app.get('/', (req, res) => {
    res.render('index', {
        title: "Account Summary",
        accounts: accounts
    })
});

app.listen(3000, () => {
    console.log("PS Projct Running on port 3000!");
});