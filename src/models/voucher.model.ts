import { v4 as uuidv4 } from "uuid";
import { getNextMonthDate } from "../utils/dateHelper";
import { getDiscount, getRandomCode } from "../utils/generator";

export enum Currency {
  EUR = "EUR",
  USD = "USD",
  GBP = "GBP",
}

export interface IVoucher {
  id?: string;
  campaign_id: string;
  validity_start?: Date;
  validity_end?: Date;
  amount?: number;
  currency?: Currency;
  prefix: string;
  code: string;
}

export class Voucher implements IVoucher {
  id: string;
  campaign_id: string;
  validity_start: Date;
  validity_end: Date;
  amount: number;
  currency: Currency;
  prefix: string;
  code: string;

  constructor(
    campaign_id: string,
    prefix: string,
    validityStart?: Date,
    validityEnd?: Date,
    amount?: number,
    currency?: Currency,
    code?: string
  ) {
    this.id = uuidv4();
    this.campaign_id = campaign_id;

    const currentDate = new Date();
    const nextMonthDate: Date = getNextMonthDate(currentDate);

    this.validity_start = validityStart || currentDate;
    this.validity_end = validityEnd || nextMonthDate;
    this.amount = amount || getDiscount();
    this.currency = currency || Currency.EUR;
    this.prefix = prefix.toUpperCase();
    this.code = code?.toUpperCase() || getRandomCode();
  }
}
