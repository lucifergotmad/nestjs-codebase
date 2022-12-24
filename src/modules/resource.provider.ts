import { AppAuthModule } from "./app/app-auth.module";
import { UserModule } from "./user/user.module";

const systemProviders = [AppAuthModule, UserModule];

export const resourceProviders = [...systemProviders];
