import { Global, Module } from "@nestjs/common";
import { AlsService } from "./als.service";

@Global()
@Module({
  providers: [AlsService],
  exports: [AlsService],
})
export class AlsModule {}
