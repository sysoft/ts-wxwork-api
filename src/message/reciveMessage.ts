import { Http } from '../http';
import { GetCallbackIpResult } from '../interfaces/message/reciveMessage';

export class ReciveMessageApi {
  constructor(private http: Http) {}
  /**
   * 获取企业微信服务器的ip段
   * 参考文档 https://work.weixin.qq.com/api/doc#90000/90135/90238
   */
  getCallbackIp(): Promise<GetCallbackIpResult> {
    return this.http.get(`/cgi-bin/getcallbackip`);
  }
}
