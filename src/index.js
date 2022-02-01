const express = require("express");
const fs = require("fs");

const app = express();
//
// Throws an error if the PORT environment variable is missing.
//
if (!process.env.PORT) {
  throw new Error(
    "Please specify the port number for the HTTP server with the environment variable PORT."
  );
}

//
// Extracts the PORT environment variable.
//
const PORT = process.env.PORT;

app.get("/video", (req, res) => {
  const path = "./videos/my-video.mp4";
  fs.stat(path, (err, stats) => {
    if (err) {
      console.log("An error occurred");
      res.sendStatus(500);
      return;
    }

    res.writeHead(200, {
      "Content-Length": stats.size,
      "Content-Type": "video/mp4",
    });
    fs.createReadStream(path).pipe(res);
  });
});

app.listen(PORT, () => {
  console.log(`App started on port ${PORT}`);
});
