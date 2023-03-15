import { Controller, Req, Get, Res } from "@nestjs/common";
import { RefreshService } from "./refresh.service";
import {
  IFastifyRequest,
  IFastifyReply,
} from "../../base/interfaces/context.interface";
import { Public } from "../decorators/public.decorator";
import { AccessTokenDTO } from "./dtos/access-token.dto";

@Controller("refresh")
export class RefreshController {
  constructor(private readonly refreshService: RefreshService) {}

  @Public()
  @Get()
  async refresh(
    @Req() request: IFastifyRequest,
    @Res({ passthrough: true }) reply: IFastifyReply
  ): Promise<AccessTokenDTO> {
    return await this.refreshService.refresh(request, reply);
  }
}
