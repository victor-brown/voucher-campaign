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

router.post("/", async (req, res, next) => {
  try {
    const { name } = req.body;
    await campaignService.createCampaign({ name });

    res.sendStatus(200);
  } catch (err) {
    next(err);
  }
});

router.delete("/", async (req, res, next) => {
  try {
    const id = (req.query.id as string) || "";
    await campaignService.deleteCampaign(id);

    res.sendStatus(200);
  } catch (err) {
    next(err);
  }
});

export default router;
