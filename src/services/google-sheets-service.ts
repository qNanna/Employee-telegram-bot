// https://theoephraim.github.io/node-google-spreadsheet

import { Injectable, OnModuleInit } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

import { GoogleSpreadsheet } from 'google-spreadsheet';
import creds from '../../common/config/improvebot-62ccfb06e379.json';

type GoogleCreds = { client_email: string, private_key?: string };

@Injectable()
export class GoogleSheetsService implements OnModuleInit {
  private _sheetId: string;
  private _creds: GoogleCreds;
  private _doc: GoogleSpreadsheet;

  constructor(configService: ConfigService) {
    this._sheetId = configService.get<string>('GOOGLE_SHEET_ID');
    this._doc = new GoogleSpreadsheet(this._sheetId);
    this._creds = {
      client_email: configService.get<string>('GOOGLE_SERVICE_ACCOUNT_EMAIL'),
      // private_key: configService.get<string>('GOOGLE_PRIVATE_KEY')//.replace(/\\n/g, "\n")
    }
  }

  async onModuleInit() {
    await this._doc.useServiceAccountAuth(creds);
    // await this._doc.useServiceAccountAuth(this._creds);
  }

  async getTimeOffBalance(username: string) {
    await this._doc.loadInfo();
    const sheet = this._doc.sheetsByIndex[0];
    const rows = await sheet.getRows();

    return 'todo'
  }
}