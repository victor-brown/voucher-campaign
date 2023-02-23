import { campaignRepository } from "../repositories/campaign.repostiory";

class CampaignService {
  constructor() {}

  async getCampaign() {
    return await campaignRepository.getAllCampaigns();
  }

  async createCampaign() {
  }

  async deleteCampaign() {
  }
}

export const campaignService: CampaignService = new CampaignService();
