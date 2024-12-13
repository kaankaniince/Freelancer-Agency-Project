const Photo = require("../models/Photo")

exports.getIndexPage = (req, res) => {
  res.render("index")
}
exports.getAboutPage = (req, res) => {
  res.render("about")
}
exports.getClientsPage = (req, res) => {
  res.render("clients")
}
exports.getServicesPage = (req, res) => {
  res.render("services")
}
exports.getTeamPage = (req, res) => {
  res.render("team")
}
exports.getContactPage = (req, res) => {
  res.render("contact")
}
exports.getAddPage = (req, res) => {
  res.render("add")
}

exports.getEditPage = async (req, res) => {
  const photo = await Photo.findOne({ _id: req.params.id })
  res.render("edit", {
    photo,
  })
}
