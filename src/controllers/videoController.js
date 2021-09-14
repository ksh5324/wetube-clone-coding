import Video from "../models/Video";

export const home = async (req, res) => {
  console.log("i start");
  const videos = await Video.find({});
  console.log("i finish");
  console.log(videos);
  return res.render("home", {
    pageTitle: "Home",
    videos,
  });
};

export const watch = (req, res) => {
  const { id } = req.params;
  return res.render("watch", { pageTitle: `Watching` });
};

export const getEdit = (req, res) => {
  const { id } = req.params;
  return res.render("edit", { pageTitle: `Editing` });
};

export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  return res.redirect(`/videos/${id}`);
};

export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: "Upload Videos" });
};

export const postUpload = (req, res) => {
  // here we will add a video to the videos array.
  const { title } = req.body;
  return res.redirect("/");
};

// export const search = (req, res) => {
//   return res.send("search");
// };

// export const deleteVideo = (req, res) => {
//   console.log(req.params);
//   return res.send("delete");
// };

// export const upload = (req, res) => {
//   return res.send("upload");
// };
