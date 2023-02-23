import { Connection, createConnection } from "mysql";
import connection from "../database/connection";
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

  async createCampaign(campaign: Campaign): Promise<string> {
    const sql = "INSERT INTO campaigns SET ?";

    return new Promise<string>((resolve, reject) => {
      this.connection.query(sql, campaign, (err, result) => {
        console.log(result);
        return err ? reject(err) : resolve(result);
      });
    });
  }

  async deleteCampaign(id: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.connection.query(
        "DELETE FROM vouchers WHERE campaign_id = ?",
        [id],
        (err, result) => {
          return err ? reject(err) : resolve(result);
        }
      );

      this.connection.query(
        "DELETE FROM campaigns WHERE id = ?",
        [id],
        (err, result) => {
          return err ? reject(err) : resolve(result);
        }
      );
    });
  }
}

export const campaignRepository: CampaignRepository = new CampaignRepository(
  connection
);
