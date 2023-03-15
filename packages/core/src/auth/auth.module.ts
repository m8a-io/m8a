import { Module } from "@nestjs/common";
import { UserModule } from "../user/user.module";
import { JwtModule as JModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { AuthService } from "./auth.service";
import { LoginResolver } from "./login.resolver";
import { APP_GUARD } from "@nestjs/core";
import { JwtAuthGuard } from "./jwt.auth.guard";
import { JwtStrategy } from "./jwt.strategy";
import { CacheModule } from "../cache/cache.module";
import { RegisterResolver } from "./register.resolver";
import { LogoutResolver } from "./logout.resolver";
import { ConfigModule } from "../config/env/env-config.module";
import { AuthzModule } from "../authz/authz.module";

export const JwtModule = JModule.register({
  secret: "someSecretValueForAccess",
});

@Module({
  imports: [
    AuthzModule,
    ConfigModule,
    PassportModule.register({ defaultStrategy: "jwt" }),
    JwtModule,
    UserModule,
    CacheModule,
  ],
  providers: [
    LoginResolver,
    RegisterResolver,
    AuthService,
    JwtStrategy,
    LogoutResolver,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
  exports: [JwtModule],
})
export class AuthModule {}
