const { app } = require(".");
const { connectDb } = require("./src/config/db");

const PORT = process.env.PORT || 8000;
app.listen(PORT, async () => {
  await connectDb();
  console.log("Server started at port: ", PORT);
});
