const express = require("express")
const router = express.Router()
const fs = require("fs") // file system module
const { Server } = require("http")
const path = require("path")
const { v4: uuidv4 } = require("uuid")

const dataContributors = path.join(__dirname,"../data/contributorsData.json")

function listContributors(){
    const data = fs.readFileSync(dataContributors)
    return JSON.parse(data)
}
router.get("/", (req, res) => {
    res.json(listContributors())
})

function addContributors(body){
    const itemList = listContributors()
    const item = NewContributors(body)
    itemList.push(item)
    fs.writeFileSync(dataContributors, JSON.stringify(itemList))
    return itemList
}
function NewContributors(body){
    return{
        id: uuidv4(), 
        name: body.name,
        image: body.image,
        linkedIn:body.linkedIn,
        gitHub:body.gitHub,
        twitter:body.twitter,
        

    }
}
router.post("/", (req, res) => {
    res.json(addContributors(req.body))
  })
  module.exports = router