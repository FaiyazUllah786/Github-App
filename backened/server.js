import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import "./passport/github.auth.js";
import passport from "passport";
import session from "express-session";

import userRoutes from "./routes/user.route.js";
import exploreRoutes from "./routes/explore.route.js";
import authRoutes from "./routes/auth.route.js";
import connectMongoDB from "./db/connectMongoDB.js";

dotenv.config({ path: ".env" });

const app = express();

app.use(cors());

//initializing passport
app.use(
  session({ secret: "keyboard cat", resave: false, saveUninitialized: false })
);
app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
  res.send("Serveris running");
});

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/explore", exploreRoutes);

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  () => console.log(`server is running on port: ${PORT}`),
  connectMongoDB()
);
