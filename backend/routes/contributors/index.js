const express = require("express")
const router = express.Router()
const fs = require("fs") // file system module
const path = require("path")

const dataContributors = path.join(__dirname, "../../data/contributorsData.json")

router.get("/", async (req, res) => {
    try {
        const data = fs.readFileSync(dataContributors).toString('utf-8')

        res.status(200).send(JSON.parse(data))
    } catch (err) {
        console.log(err, err.response)
        res.sendStatus(500)
    }
})

module.exports = router