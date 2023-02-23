import { Connection } from "mysql";
import connection from "../database/connect";
import { Campaign } from "../models/campaign.model";

class CampaignRepository {
  private connection: Connection;

  constructor(connection: Connection) {
    this.connection = connection;
  }

  async getAllCampaigns(): Promise<Campaign[]> {
    const sql = "SELECT * FROM campaigns";

    return new Promise<Campaign[]>((resolve, reject) => {
      this.connection.query(sql, (err, result) => {
        return err ? reject(err) : resolve(result);
      });
    });
  }

}

export const campaignRepository: CampaignRepository = new CampaignRepository(
  connection
);
