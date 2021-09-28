const express = require("express")
const app = express()
const port = process.env.PORT || 3000
const handlebars = require("express-handlebars")
app.use(express.static("public"))
app.set("view engine", "handlebars")
app.engine(
  "handlebars",
  handlebars({
    layoutsDir: `${__dirname}/views/layouts`,
  })
)
app.get("/", (req, res) => {
  // res.send("Hello world")
  res.render("main", { layout: "index" })
})
app.listen(port, () => console.log(`App is listening on port ${port}`))
