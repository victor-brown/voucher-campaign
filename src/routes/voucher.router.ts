import { Router } from "express";
import { createError } from "../errors/ErrorFactory";
import { Currency, IVoucher } from "../models/voucher.model";
import { voucherService } from "../services/voucher.service";

const router = Router();

router.get("/", async (req, res, next) => {
  try {
    const result = await voucherService.getAllVouchers();

    res.send(result);
  } catch (err) {
    next(err);
  }
});

router.get("/:campaign_id", async (req, res, next) => {
  try {
    const id = (req.params.campaign_id as string) || "";
    const result = await voucherService.getVoucherByCampaignId(id);

    res.send(result);
  } catch (err) {
    next(err);
  }
});

router.post("/create/bunch/:campaign_id", async (req, res, next) => {
  try {
    const campaign_id = req.params.campaign_id as string;
    const prefix = req.query.prefix as string;

    if (!campaign_id)
      throw createError("BadRequestError", {
        message: "campaign_id is a required field!",
      });
    if (!prefix)
      throw createError("BadRequestError", {
        message: "prefix is a required field!",
      });

    const count = (req.query.count as unknown as number) || 1;

    const voucher = req.body as IVoucher;
    voucher.campaign_id = campaign_id;
    voucher.prefix = prefix;

    await voucherService.createVoucher(voucher, count);

    res.sendStatus(200);
  } catch (err) {
    next(err);
  }
});

router.post("/create/:campaign_id", async (req, res, next) => {
  try {
    const campaign_id = req.params.campaign_id as string;
    const prefix = req.query.prefix as string;

    if (!campaign_id)
      throw createError("BadRequestError", {
        message: "campaign_id is a required field!",
      });
    if (!prefix)
      throw createError("BadRequestError", {
        message: "prefix is a required field!",
      });

    const voucher = req.body as IVoucher;
    voucher.campaign_id = campaign_id;
    voucher.prefix = prefix;

    await voucherService.createVoucher(voucher);

    res.sendStatus(200);
  } catch (err) {
    next(err);
  }
});

// router.post("/", async (req, res, next) => {
//   try {
//     const { name } = req.body;
//     await campaignService.createCampaign({ name });

//     res.sendStatus(200);
//   } catch (err) {
//     next(err);
//   }
// });

// router.delete("/", async (req, res, next) => {
//   try {
//     const id = (req.query.id as string) || "";
//     await campaignService.deleteCampaign(id);

//     res.sendStatus(200);
//   } catch (err) {
//     next(err);
//   }
// });

export default router;
