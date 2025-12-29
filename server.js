const app = require("./app");
const port = process.env.PORT || 3000;

app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened", err);
    process.exit(1);
  }
  console.log(`Server is listening on ${port}`);
});