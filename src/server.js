import express from "express";

const PORT = 4000;

const app = express();

const loggerMiddleware = (req, res, next) => {
  console.log(` ${req.method} ${req.url}`);
  next();
};

const privateMiddleware = (req, res, next) => {
  const url = req.url;
  if (url === "/protected") {
    return res.send("<h1>Not Allowed</hr>");
  }
  next();
};

const handleHome = (req, res, next) => {
  return res.send("I Love middlewares");
};

const handleLogin = (req, res) => {
  return res.send({ message: "Login here" });
};

app.use(loggerMiddleware);
app.use(privateMiddleware);
app.get("/", handleHome);
app.get("/login", handleLogin);

const handleListening = () =>
  console.log(`✅ Server listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
