const express = require("express")
const app = express()
const port = process.env.PORT || 3000
const handlebars = require("express-handlebars")
const { cars } = require("./data")
app.use(express.static("public"))
app.set("view engine", "handlebars")
app.engine(
  "handlebars",
  handlebars({
    layoutsDir: `${__dirname}/views/layouts`,
  })
)
app.get("/", (req, res, next) => {
  const { cars } = require("./data.js")
  res.render("main", { layout: "index", cars })
})
app.listen(port, () => console.log(`App is listening on port ${port}`))
