import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { DecryptorMiddleware } from "src/middlewares/decryptor.middleware";
import { resourceProviders } from "./resource.provider";

@Module({
  exports: resourceProviders,
  imports: resourceProviders,
})
export class ResourceModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(DecryptorMiddleware).forRoutes("*");
  }
}
