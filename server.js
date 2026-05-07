const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "127.0.0.1";

const mediaEntries = {
  logo: "https://res.cloudinary.com/dtisalktc/image/upload/v1778168855/logo_jrfcki.png",
  hascool_logo:
    "https://res.cloudinary.com/dtisalktc/image/upload/v1778168842/HASCOOL_LOGO_k4eunl.png",

  master_1:
    "https://res.cloudinary.com/dtisalktc/image/upload/v1778168856/master_1_t8jyiu.png",
  master_2:
    "https://res.cloudinary.com/dtisalktc/image/upload/v1778168892/master_2_ljepb6.png",
  master_3:
    "https://res.cloudinary.com/dtisalktc/image/upload/v1778168911/master_3_bymu09.png",
  master_4:
    "https://res.cloudinary.com/dtisalktc/image/upload/v1778168900/master_4_e895p3.png",
  master_5:
    "https://res.cloudinary.com/dtisalktc/image/upload/v1778168870/master_5_tqy79g.png",
  master_6:
    "https://res.cloudinary.com/dtisalktc/image/upload/v1778168880/master_6_mngprj.png",
  master_fp:
    "https://res.cloudinary.com/dtisalktc/image/upload/v1778168885/master_floor_plan_orkqan.png",
  master_vid:
    "https://res.cloudinary.com/dtisalktc/video/upload/master_kjnawp.mp4",
  bed1_1:
    "https://res.cloudinary.com/dtisalktc/image/upload/v1778168853/bedroom1-1_lc9p3h.png",
  bed1_2:
    "https://res.cloudinary.com/dtisalktc/image/upload/v1778168852/bedroom1-2_xf99oq.png",
  bed1_3:
    "https://res.cloudinary.com/dtisalktc/image/upload/v1778168854/bedroom1-3_gqgala.png",
  bed1_4:
    "https://res.cloudinary.com/dtisalktc/image/upload/v1778168835/bedroom1-4_ieg0si.png",
  bed1_fp:
    "https://res.cloudinary.com/dtisalktc/image/upload/v1778168834/bedroom1_floor_plan_fqpd6s.png",
  bed1_vid:
    "https://res.cloudinary.com/dtisalktc/video/upload/bedroom1_w9xk4t.mp4",

  bed2_1:
    "https://res.cloudinary.com/dtisalktc/image/upload/v1778168836/bedroom2-1_fryo7a.png",
  bed2_2:
    "https://res.cloudinary.com/dtisalktc/image/upload/v1778168839/bedroom2-2_p1dhoo.png",
  bed2_3:
    "https://res.cloudinary.com/dtisalktc/image/upload/v1778168841/bedroom2-3_aug8pg.png",
  bed2_4:
    "https://res.cloudinary.com/dtisalktc/image/upload/v1778168841/bedroom2-4_dr391c.png",
  bed2_fp:
    "https://res.cloudinary.com/dtisalktc/image/upload/v1778168689/LEVING_5_dagzj5.png",
  bed2_vid:
    "https://res.cloudinary.com/dtisalktc/video/upload/bedroom2_gyundk.mp4",

  living_1:
    "https://res.cloudinary.com/dtisalktc/image/upload/v1778168853/LEVING_1_tdtjjd.png",
  living_2:
    "https://res.cloudinary.com/dtisalktc/image/upload/v1778168848/LEVING_2_w6p9mf.png",
  living_3:
    "https://res.cloudinary.com/dtisalktc/image/upload/v1778168850/LEVING_3_vjfstg.png",
  living_4:
    "https://res.cloudinary.com/dtisalktc/image/upload/v1778168854/LEVING_4_nsrj5o.png",
  living_5:
    "https://res.cloudinary.com/dtisalktc/image/upload/v1778168904/LEVING_5_hwutt5.png",
  living_6:
    "https://res.cloudinary.com/dtisalktc/image/upload/v1778168856/LEVING_6_weqcgm.jpg",
  living_fp:
    "https://res.cloudinary.com/dtisalktc/image/upload/v1778168891/LEVING_floor_plan_dbegaf.png",
  living_vid:
    "https://res.cloudinary.com/dtisalktc/video/upload/v1778167842/living_ecnvyl.mp4",
};

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
