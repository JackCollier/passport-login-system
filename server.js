const express = require("express");
const app = express();

const PORT = process.env.PORT || 30000;
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
