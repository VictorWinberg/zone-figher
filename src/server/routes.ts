import * as express from "express";

const router = express.Router();

router.get("/api/hello", (req, res) => {
  res.json("Good day to you, sir!");
});

export default router;
