import Redis from "ioredis";
import { Queue } from "./queue";
import { IJobData } from "../interfaces/job.interface";

export class Jobs extends Queue {
  private static id: number;
  constructor() {
    super();
    Jobs.id = 0; //default id
  }

  //Whenever job is added id++ so no duplicate id is form
  public async add(client: Redis, jobData: IJobData) {
    const currentJobId = Jobs.id;
    await client.set(
      jobData.name,
      jobData.data,
      "EX",
      jobData.expireTimeInSeconds
    );
    this.push(Jobs.id);
    Jobs.id++;
  }
}
