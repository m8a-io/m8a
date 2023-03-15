import { Injectable } from "@nestjs/common";
import { ReturnModelType } from "@typegoose/typegoose";
import { InjectModel } from "@m8a/nestjs-typegoose";
import { DbConfigEntity } from "./entities/config.entity";

@Injectable()
export class DbConfigService {
  constructor(
    @InjectModel(DbConfigEntity)
    private readonly configEntityModel: ReturnModelType<typeof DbConfigEntity>
  ) {}

  public async getConfig() {
    return await this.configEntityModel.find({});
  }

  public async setConfig(config: DbConfigEntity) {
    return await this.configEntityModel.create(config);
  }
}
