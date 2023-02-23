import { v4 as uuidv4 } from "uuid";

interface ICampaign {
  id: string;
  name: string;
}

export class Campaign implements ICampaign {
  id: string;
  name: string;

  constructor(name: string) {
    this.name = name;
    this.id = uuidv4();
  }
}
