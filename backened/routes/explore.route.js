import express from "express";

import { explorePopularRepos } from "../controller/explore.controller.js";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated.js";

const router = express.Router();

router.get("/repos/:language", explorePopularRepos);

export default router;
