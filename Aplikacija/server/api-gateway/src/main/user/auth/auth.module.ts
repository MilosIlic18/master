import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { SharedModule } from 'src/main/shared/shared.module';

@Module({
  imports:[SharedModule],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
