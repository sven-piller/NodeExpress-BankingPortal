const express = require("express");
const {
    accounts,
    writeJSON
} = require('../data');
const router = express.Router();

router.get('/transfer', (req, res) => {
    res.render('transfer', {

    })
})

router.post('/transfer', (req, res) => {
    let from = req.body.from;
    let to = req.body.to;
    let amount = req.body.amount;

    accounts[from].balance = accounts[from].balance - parseInt(amount, 10);
    accounts[to].balance = accounts[to].balance + parseInt(amount, 10);

    writeJSON();

    res.render('transfer', {
        message: "Transfer Completed"
    })
})

router.get('/payment', (req, res) => {
    res.render('payment', {
        account: accounts.credit
    })
})

router.post('/payment', (req, res) => {
    let amount = req.body.amount;

    accounts['credit'].balance = accounts['credit'].balance - parseInt(amount, 10);
    accounts['credit'].available = accounts['credit'].available + parseInt(amount, 10);

    writeJSON();

    res.render('payment', {
        message: "Payment Successful",
        account: accounts.credit
    })
})

module.exports = router;