import { Http } from '../http';
import { CorpSendMessageResult } from '../interfaces/message/corpSendMessage';

export class CorpSendMessageApi {
  constructor(private http: Http) {}
  /**
   * 互联网企业发送应用消息
   * 参考文档 https://work.weixin.qq.com/api/doc#90000/90135/90249
   * @param messgae 推送消息
   */
  sendCorpMessage<T>(messgae: T): Promise<CorpSendMessageResult> {
    return this.http.post(`/cgi-bin/linkedcorp/message/send`, messgae);
  }
}
