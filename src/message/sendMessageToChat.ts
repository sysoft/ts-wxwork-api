import { Http } from '../http';
import {
  CreateAppchatRequest,
  CreateAppchatResult,
  UpdateAppchatRequest,
  GetAppchatResult,
} from '../interfaces/message/sendMessageToChat';

export class SendMessageToChatApi {
  constructor(private http: Http) {}
  /**
   * 创建群聊会话
   * 参考文档 https://work.weixin.qq.com/api/doc#90000/90135/90245
   * @param chat 群
   */
  createAppchat(chat: CreateAppchatRequest): Promise<CreateAppchatResult> {
    return this.http.post(`/cgi-bin/appchat/create`, chat);
  }

  /**
   * 修改群聊会话
   * 参考文档 https://work.weixin.qq.com/api/doc#90000/90135/90246
   * @param chat 群
   */
  updateAppchat(chat: UpdateAppchatRequest): Promise<BaseResult> {
    return this.http.post(`/cgi-bin/appchat/update`, chat);
  }

  /**
   * 获取群聊会话
   * 参考文档 https://work.weixin.qq.com/api/doc#90000/90135/90247
   * @param chatid 群聊id
   */
  getAppchat(chatid: string): Promise<GetAppchatResult> {
    return this.http.get(`/cgi-bin/appchat/get?chatid=${chatid}`);
  }

  /**
   * 应用推送消息
   * 参考文档 https://work.weixin.qq.com/api/doc#90000/90135/90248
   * @param messgae 推送消息
   */
  sendMessageToChat<T>(messgae: T): Promise<BaseResult> {
    return this.http.post(`/cgi-bin/appchat/send`, messgae);
  }
}
