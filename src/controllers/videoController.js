export const trending = (req, res) => {
  return res.render("home");
};

export const see = (req, res) => {
  console.log(req.params);
  return res.send("see");
};

export const edit = (req, res) => {
  console.log(req.params);
  return res.send("Edit");
};

export const search = (req, res) => {
  return res.send("search");
};

export const deleteVideo = (req, res) => {
  console.log(req.params);
  return res.send("delete");
};

export const upload = (req, res) => {
  return res.send("upload");
};
