import * as moment from 'moment';
import { Http } from './http';
import { UserApi } from './address/user';
import { DepartmentApi } from './address/department';
import { TagApi } from './address/tag';
import { AgentApi } from './agent/agent';
import { MenuApi } from './agent/menu';
import { ExternalContactApi } from './external_contact/externalContact';
import { SendMessageApi } from './message/sendMessage';
import { ReciveMessageApi } from './message/reciveMessage';
import { CorpSendMessageApi } from './message/corpSendMessage';
import { MediaApi } from './media/media';
import { CheckInApi } from './oa/CheckIn';
import { ApprovalApi } from './oa/Approval';
import { PublicDialogApi } from './oa/publicDialog';
import { EInvoiceApi } from './e-invoice/invoice';
import { SendMessageToChatApi } from './message/sendMessageToChat';
export class WxWorkAPI {
  private accessToken: string;
  private accessTokenExpires: Date;
  private http = new Http(this.getAccessToken);
  userApi = new UserApi(this.http);
  department = new DepartmentApi(this.http);
  tag = new TagApi(this.http);
  externalContact = new ExternalContactApi(this.http);
  agent = new AgentApi(this.http);
  menu = new MenuApi(this.http);
  sendMessage = new SendMessageApi(this.http);
  reviveMessgae = new ReciveMessageApi(this.http);
  corpSendMessage = new CorpSendMessageApi(this.http);
  sendMessageChat = new SendMessageToChatApi(this.http);
  media = new MediaApi(this.http);
  checkIn = new CheckInApi(this.http);
  approval = new ApprovalApi(this.http);
  publicDialog = new PublicDialogApi(this.http);
  eInvoice = new EInvoiceApi(this.http);

  constructor(
    private corpid: string,
    private corpsecret: string,
    private agentid?: string,
    private getAccessTokenCache?: () => Promise<string>,
    private saveAccessTokenCache?: (
      accessToken: string,
      expriesIn: number,
    ) => any,
  ) {}
  /**
   * 获取ACCESSTOKEN
   * @param force 是否强制获取ACCESSTOKEN
   */
  async getAccessToken(force = false) {
    if (!force && this.getAccessTokenCache) {
      this.accessToken = await this.getAccessTokenCache();
    } else {
      if (!this.accessToken || this.accessTokenExpires <= new Date()) {
        const result: AccessTokenResult = await this.http.get(
          `/cgi-bin/gettoken?corpid=${this.corpid}&corpsecret=${
            this.corpsecret
          }`,
        );
        if (result.errcode === 0) {
          this.accessToken = result.access_token;
          this.accessTokenExpires = moment()
            .add(result.expires_in, 'seconds')
            .toDate();
          if (this.saveAccessTokenCache) {
            try {
              this.saveAccessTokenCache(result.access_token, result.expires_in);
            } catch (e) {
              console.warn(`缓存ACCESSTOKEN时出错: ${e}`);
            }
          }
        }
      }
    }
    if (this.accessToken) {
      return this.accessToken;
    } else if (!force) {
      return this.getAccessToken(true);
    } else {
      throw new Error('获取ACCESSTOKEN失败');
    }
  }
}
