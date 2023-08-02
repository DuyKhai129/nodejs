const getHome = (req, res) => {
  res.render("simple", {
    name: "Henry",
  });
};
module.exports = {
  getHome,
};
