import { Http } from '../http';
import { SendMessageResult } from '../interfaces/message/sendMessage';

export class SendMessageApi {
  constructor(private http: Http) {}
  /**
   * 发送应用消息
   * 参考文档 https://work.weixin.qq.com/api/doc#90000/90135/90236
   * @param messgae 消息
   */
  sendMessage<T>(messgae: T): Promise<SendMessageResult> {
    return this.http.post(`/cgi-bin/message/send`, messgae);
  }
}
