const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "127.0.0.1";

const mediaEntries = {
  logo: "/img/logo.png",
  hascool_logo: "/img/HASCOOL%20LOGO.png",

  master_1: "/img/master%201.png",
  master_2: "/img/master%202.png",
  master_3: "/img/master%203.png",
  master_4: "/img/master%204.png",
  master_5: "/img/master%205.png",
  master_6: "/img/master%206.png",
  master_fp: "/img/master%20floor%20plan.png",
  master_vid: "/img/master.mp4",
  bed1_1: "/img/bedroom1-1.png",
  bed1_2: "/img/bedroom1-2.png",
  bed1_3: "/img/bedroom1-3.png",
  bed1_4: "/img/bedroom1-4.png",
  bed1_fp: "/img/bedroom1%20floor%20plan.png",
  bed1_vid: "/img/bedroom1.mp4",

  bed2_1: "/img/bedroom2-1.png",
  bed2_2: "/img/bedroom2-2.png",
  bed2_3: "/img/bedroom2-3.png",
  bed2_4: "/img/bedroom2-4.png",
  bed2_fp: "/img/bedroom2%20floor%20plan.png",
  bed2_vid: "/img/bedroom2.mp4",

  living_1: "/img/LEVING%201.png",
  living_2: "/img/LEVING%202.png",
  living_3: "/img/LEVING%203.png",
  living_4: "/img/LEVING%204.png",
  living_5: "/img/LEVING%205.png",
  living_6: "/img/LEVING%206.jpg",
  living_fp: "/img/LEVING%20floor%20plan.png",
  living_vid: "/img/living.mp4",
};

app.use("/img", express.static(path.join(__dirname, "img")));

app.get("/api/media", (_req, res) => {
  res.json(mediaEntries);
});

app.get("/", (_req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

if (require.main === module) {
  app.listen(PORT, HOST, () => {
    console.log(`Server running at http://${HOST}:${PORT}`);
  });
}

module.exports = app;
