import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { TelegrafModule } from 'nestjs-telegraf';

import { AppController } from './app.controller';
import { AppUpdate } from './app.update';
import { GoogleSheetsService } from './services/google-sheets-service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TelegrafModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        token: configService.get<string>('TELEGRAM_BOT_TOKEN'),
      }),
      inject: [ConfigService],
    })
  ],
  controllers: [AppController],
  providers: [AppUpdate, GoogleSheetsService],
})
export class AppModule { }
