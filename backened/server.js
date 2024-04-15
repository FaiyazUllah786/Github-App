import express from "express";

import userRoutes from "./routes/user.route.js";
import exploreRoutes from "./routes/explore.route.js";

import dotenv from "dotenv";

import cors from "cors";

dotenv.config({ path: ".env" });

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("Serveris running");
});

app.use("/api/users", userRoutes);
app.use("/api/explore", exploreRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server is running on port: ${PORT}`));
