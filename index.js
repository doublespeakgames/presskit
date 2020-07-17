const presskit = require('dopresskit-express');
const express = require('express');

const app = express();
app.listen(8080);

presskit.install(app);

presskit.on('complete', () => {
  console.log("Completed! Go to http://(domain and/or port)/install.php!");
});
