import {Configuration, EmotionsApi, ReactionsApi} from './generated/reactions/'
import {Configuration as C,  ModerationVideoServiceApi} from './generated/moder/'

const basePath = process.env.NODE_ENV === 'development' ? 'https://api.rupor-dev.ru/v1/user-reactions/' : `https://api.rupor-dev.ru/v1/user-reactions/`

const configuration = new Configuration({
    basePath,
})

export const EmotionsController = new EmotionsApi(configuration)
export const ReactionsController = new ReactionsApi(configuration)
export const M = new ModerationVideoServiceApi(configuration)

M.moderationVideoServiceCreateTicketVideo({videoId:})
