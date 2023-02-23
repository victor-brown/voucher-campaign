import { Router } from "express";
import { campaignService } from "../services/campaign.service";

const router = Router();

router.get("/", async (req, res, next) => {
  try {
    const result = await campaignService.getCampaign();

    res.send(result);
  } catch (err) {
    next(err);
  }
});

export default router;
