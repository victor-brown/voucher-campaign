import { Connection } from "mysql";
import connection from "../database/connection";
import { Voucher } from "../models/voucher.model";
import { toMySqlDate } from "../utils/dateHelper";

class VoucherRepository {
  private connection: Connection;

  constructor(connection: Connection) {
    this.connection = connection;
  }

  async getAllVoucher(): Promise<Voucher[]> {
    const sql = "SELECT * FROM vouchers";

    return new Promise<Voucher[]>((resolve, reject) => {
      this.connection.query(sql, (err, result) => {
        return err ? reject(err) : resolve(result);
      });
    });
  }

  async getVoucherByCampaignId(campaignId: string): Promise<Voucher[]> {
    const sql = "SELECT * FROM vouchers WHERE campaign_id = ?";

    return new Promise<Voucher[]>((resolve, reject) => {
      this.connection.query(sql, campaignId, (err, result) => {
        return err ? reject(err) : resolve(result);
      });
    });
  }

  async createVoucher(vouchers: Voucher[]): Promise<string> {
    const valuesClause = vouchers
      .map(
        (voucher) =>
          `('${voucher.id}', '${voucher.campaign_id}', '${toMySqlDate(
            voucher.validity_start
          )}', '${toMySqlDate(voucher.validity_end)}', '${voucher.amount}', '${
            voucher.currency
          }', '${voucher.prefix}', '${voucher.code}')`
      )
      .join(",");
    const sql = `INSERT INTO vouchers (id, campaign_id, validity_start, validity_end, amount, currency, prefix, code) VALUES ${valuesClause}`;


    return new Promise<string>((resolve, reject) => {
      this.connection.query(sql, (err, result) => {
        return err ? reject(err) : resolve(result);
      });
    });
  }

  // async deleteCampaign(id: string): Promise<void> {
  //   return new Promise<void>((resolve, reject) => {
  //     this.connection.query(
  //       "DELETE FROM vouchers WHERE campaign_id = ?",
  //       [id],
  //       (err, result) => {
  //         return err ? reject(err) : resolve(result);
  //       }
  //     );

  //     this.connection.query(
  //       "DELETE FROM campaigns WHERE id = ?",
  //       [id],
  //       (err, result) => {
  //         return err ? reject(err) : resolve(result);
  //       }
  //     );
  //   });
  // }
}

export const voucherRepository: VoucherRepository = new VoucherRepository(
  connection
);
