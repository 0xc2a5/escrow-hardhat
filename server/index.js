const express = require("express");

const port = 1234;
const app = express();
app.use(express.json());

const contracts = [{
    address: 0,
    arbiter: 0x0,
    beneficiary: 0x0,
    value: 0
}];

app.get("/get_contracts", (req, res) => {
    console.log("get_contracts");
    console.log(contracts);
    res.json(contracts);
});

app.post("/add_contract", (req, res) => {
    console.log("add_contract");
    console.log(req.body);
    contracts.push(req.body);
    res.end();
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});