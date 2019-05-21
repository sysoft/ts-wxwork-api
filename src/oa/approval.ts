import { Http } from '../http';
import { GetAppchatResult } from '../interfaces/message/sendMessageToChat';
import { GetApprovalDataRequest } from '../interfaces/OA/Approval';

export class ApprovalApi {
  constructor(private http: Http) {}

  /**
   * 获取审批数据
   * 参考文档 https://work.weixin.qq.com/api/doc#90000/90135/91530
   * @param searchValue 查询条件
   */
  getApprovalData(
    searchValue: GetApprovalDataRequest,
  ): Promise<GetAppchatResult> {
    return this.http.post(`/cgi-bin/corp/getapprovaldata`, searchValue);
  }
}
