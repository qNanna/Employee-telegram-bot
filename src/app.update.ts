import { Ctx, Hears, InjectBot, Message, On, Start, Update, SceneEnter, Command } from 'nestjs-telegraf';
import { Telegraf, Context } from 'telegraf';

import { actionButtons } from './app.buttons';
import { GoogleSheetsService } from './services/google-sheets-service';

@Update()
export class AppUpdate {
  constructor(
    @InjectBot() private readonly bot: Telegraf<Context>,
    private readonly googleSheetsService: GoogleSheetsService
  ) { }

  @Command('TalThulOrtAmn')
  async customTestCommand(@Ctx() ctx: Context) {
    await ctx.reply('https://diablo2.io/runewords/spirit-t3.html');
  }

  @Start()
  async startCommand(@Ctx() ctx: Context) {
    await ctx.reply('👋 Hello Friend!', actionButtons());
  }

  @Hears('🏖 Request Time-off')
  async hearsTimeOff(@Ctx() ctx: Context) {
    await ctx.reply('https://google.com');
  }

  @Hears('📆 Time-Off Balance')
  async hearsTimeOffBalance(@Ctx() ctx: Context) {
    console.log(ctx.message.from);
    await ctx.reply('You still have x days of vacation and y days of sick leave to use by the end of %this year%');
  }

  @Hears('💻 Report / Request Hardware')
  async hearsHardware(@Ctx() ctx: Context) {
    await ctx.reply('https://docs.google.com/123213123123123123123/kC8PSMVlX0c582D3kD6p3lR_iKrW_3FQ/viewform');
  }

  @Hears('📑 Vacation Policy')
  async hearsVacationPolicy(@Ctx() ctx: Context) {
    await ctx.reply('https://drive.google.com/123123123123123123/HBLqe778O08DeI/view?usp=share_link');
  }

  @Hears('📝 Find Contact')
  async hearsFindContact(@Ctx() ctx: Context) {
    await ctx.reply('https://drive.google.com/123123123123123123/-t1vwlF1Yx8ZA7/view?usp=share_link');
  }

  @Hears('📑 Health Insurance Info')
  async hearsHealth(@Ctx() ctx: Context) {
    await ctx.reply('https://drive.google.com/123123123123123123123/mk3PMstlCW8/view?usp=sharing');
  }

  @Hears('👁‍🗨 Leave Anonymous Feedback')
  async hearsAnonimousFeedback(@Ctx() ctx: Context) {
    // await ctx.reply('Send here');
  }
}
