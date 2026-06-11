import { Module } from '@nestjs/common';
import { OrganizerModule } from './organizer/organizer.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [OrganizerModule, PrismaModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
