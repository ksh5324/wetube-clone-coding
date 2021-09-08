const fakeUser = {
  username: "Nico",
  loggedIn: true,
};

let videos = [
  {
    title: "First Video",
    rating: 5,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 59,
    id: 1,
  },
  {
    title: "Second Video",
    rating: 5,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 59,
    id: 2,
  },
  {
    title: "Third Video",
    rating: 5,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 59,
    id: 3,
  },
];

export const trending = (req, res) => {
  return res.render("home", {
    pageTitle: "Home",
    videos: videos,
    fakeUser: fakeUser,
  });
};

export const see = (req, res) => {
  console.log(req.params);
  return res.render("watch", {
    pageTitle: "Home",
    videos: videos,
    fakeUser: fakeUser,
  });
};

export const edit = (req, res) => {
  console.log(req.params);
  return res.render("edit", {
    pageTitle: "Home",
    videos: videos,
    fakeUser: fakeUser,
  });
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
