import { Campaign } from "../models/Campaign.model";
import { campaignRepository } from "../repositories/campaign.repostiory";

class CampaignService {
  constructor() {}

  async getCampaign() {
    return await campaignRepository.getAllCampaigns();
  }

  async createCampaign(campaign: { name: string }) {
    return await campaignRepository.createCampaign(new Campaign(campaign.name));
  }

  async deleteCampaign(id: string) {
    return await campaignRepository.deleteCampaign(id);
  }
}

export const campaignService: CampaignService = new CampaignService();
