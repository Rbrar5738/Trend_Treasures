const { app } = require(".");
const { connectDb } = require("./config/db");

const PORT = 8000;
app.listen(PORT, async () => {
  await connectDb();
  console.log("Server started at port: ", PORT);
});
