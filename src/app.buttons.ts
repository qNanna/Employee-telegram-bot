import { Markup } from 'telegraf'

export function actionButtons() {
  return Markup.keyboard(
    [
      Markup.button.callback('🏖 Request Time-off', String('request-time-off' || 1)),
      Markup.button.callback('📆 Time-Off Balance', String('rtime-off-balance' || 2)),
      Markup.button.callback('💻 Report / Request Hardware', String('report-request-hardware' || 3)),
      Markup.button.callback('📑 Vacation Policy', String('vacation-policy' || 4)),
      Markup.button.callback('📝 Find Contact', String('find-contact' || 5)),
      Markup.button.callback('📑 Health Insurance Info', String('health-insurance-info' || 6)),
      Markup.button.callback('👁‍🗨 Leave Anonymous Feedback', String('leave-anonymous-feedback' || 7)),
      /* */Markup.button.callback('⏰ Automessage reminder twice a month', String('auto-message-twice' || 8)),
      /* */Markup.button.callback('⏰ Automessage everyday', String('auto-message-everyday' || 9)),
    ],
    {
      columns: 3
    }
  )
}
