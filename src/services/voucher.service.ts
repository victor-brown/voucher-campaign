import { IVoucher, Voucher } from "../models/voucher.model";
import { voucherRepository } from "../repositories/voucher.repostiory";

class VoucherService {
  constructor() {}

  async getAllVouchers() {
    return await voucherRepository.getAllVoucher();
  }

  async getVoucherByCampaignId(campaignId: string) {
    return await voucherRepository.getVoucherByCampaignId(campaignId);
  }

  async createVoucher(voucher: IVoucher, count: number = 1) {
    if (count === 1) {
      let voucherObject = new Voucher(
        voucher.campaign_id,
        voucher.prefix,
        voucher.validity_start,
        voucher.validity_end,
        voucher.amount,
        voucher.currency,
        voucher.code
      );

      return await voucherRepository.createVoucher([voucherObject]);
    }

    let vouchers: Voucher[] = [];
    for (let i = 0; i < count; i++) {
      let voucherObject = new Voucher(
        voucher.campaign_id,
        voucher.prefix,
        voucher.validity_start,
        voucher.validity_end,
        voucher.amount,
        voucher.currency,
        voucher.code
      );
      vouchers.push(voucherObject);
      console.log(voucherObject);
    }

    return await voucherRepository.createVoucher(vouchers);
  }

  // async deleteCampaign(id: string) {
  //   return await campaignRepository.deleteCampaign(id);
  // }
}

export const voucherService: VoucherService = new VoucherService();
