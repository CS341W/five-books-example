const express = require("express")
const app = express()
const port = process.env.PORT || 3000
const handlebars = require("express-handlebars")
const { books } = require("./data.js")
app.use(express.static("public"))
app.set("view engine", "hbs")
app.engine(
  "hbs",
  handlebars.engine({
    layoutsDir: `${__dirname}/views/layouts`,
    defaultLayout: "index",
    extname: "hbs",
  })
)
app.get("/", (req, res, next) => {
  res.render("main", { books })
})
app.listen(port, () => console.log(`App is listening on port ${port}`))
