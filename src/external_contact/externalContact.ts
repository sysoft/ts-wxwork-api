import { Http } from '../http';
import {
  TransferExternalContactRequest,
  GetExternalContactListResult,
  GetExternalContactResult,
  GetCustomerContactsResult,
  AddMsgTemplateRequest,
  AddMsgTemplateResult,
  AddContactWayRequest,
  AddContactWayResult,
  GetContactWayRequest,
  GetContactWayResult,
  UpdateContactWayRequest,
  DeleteContactWayRequest,
} from '../interfaces/external_contact/externalContact';

export class ExternalContactApi {
  constructor(private http: Http) {}
  /**
   * 离职成员的外部联系人再分配
   * 参考文档 https://work.weixin.qq.com/api/doc#90000/90135/90222
   * @param transferInfo 分配信息
   */
  transferExternalContact(
    transferInfo: TransferExternalContactRequest,
  ): Promise<BaseResult> {
    return this.http.post(
      `/cgi-bin/crm/transfer_external_contact`,
      transferInfo,
    );
  }

  /**
   * 获取外部联系人列表
   * 参考文档 https://work.weixin.qq.com/api/doc#90000/90135/91424
   * @param userid 企业成员的userid
   */
  getExternalContactListResult(
    userid: string,
  ): Promise<GetExternalContactListResult> {
    return this.http.get(
      `/cgi-bin/crm/get_external_contact_list?userid=${userid}`,
    );
  }

  /**
   * 获取外部联系人详情
   * 参考文档 https://work.weixin.qq.com/api/doc#90000/90135/90224
   * @param external_userid 外部联系人的userid，注意不是企业成员的帐号
   */
  getExternalContactResult(
    external_userid: string,
  ): Promise<GetExternalContactResult> {
    return this.http.get(
      `/cgi-bin/crm/get_external_contact?external_userid=${external_userid}`,
    );
  }

  /**
   * 获取配置了客户联系功能的成员列表
   * 参考文档 https://work.weixin.qq.com/api/doc#90000/90135/91448
   */
  getCustomerContactsResult(): Promise<GetCustomerContactsResult> {
    return this.http.get(`/cgi-bin/crm/get_customer_contacts`);
  }

  /**
   * 添加企业群发消息模板
   * 参考文档 https://work.weixin.qq.com/api/doc#90000/90135/91473
   * @param template 模板内容
   */
  addMsgTemplate(
    template: AddMsgTemplateRequest,
  ): Promise<AddMsgTemplateResult> {
    return this.http.post(`/cgi-bin/crm/add_msg_template`, template);
  }

  /**
   * 配置客户联系「联系我」方式
   * 参考文档 https://work.weixin.qq.com/api/doc#90000/90135/91449
   * @param contactWay 联系方式相关信息
   */
  addContactWay(
    contactWay: AddContactWayRequest,
  ): Promise<AddContactWayResult> {
    return this.http.post(`/cgi-bin/crm/add_contact_way`, contactWay);
  }

  /**
   * 获取企业已配置的「联系我」方式
   * 参考文档 https://work.weixin.qq.com/api/doc#90000/90135/91449
   * @param config 联系方式的配置信息
   */
  getContactWay(config: GetContactWayRequest): Promise<GetContactWayResult> {
    return this.http.post(`/cgi-bin/crm/get_contact_way`, config);
  }

  /**
   * 更新企业已配置的「联系我」方式
   * 参考文档 https://work.weixin.qq.com/api/doc#90000/90135/91449
   * @param contactWay 联系方式相关信息
   */
  updateContactWay(contactWay: UpdateContactWayRequest): Promise<BaseResult> {
    return this.http.post(`/cgi-bin/crm/update_contact_way`, contactWay);
  }

  /**
   * 删除企业已配置的「联系我」方式
   * 参考文档 参考文档
   * @param config 联系方式的配置信息
   */
  deleteContactWay(config: DeleteContactWayRequest): Promise<BaseResult> {
    return this.http.post(`/cgi-bin/crm/del_contact_way`, config);
  }
}
