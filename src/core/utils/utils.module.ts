import { Global, Module } from "@nestjs/common";
import { Utils } from "./utils.service";
import { InitModule } from "./modules/init.module";

@Global()
@Module({
  imports: [InitModule],
  providers: [Utils],
  exports: [Utils],
})
export class UtilsModule {}
