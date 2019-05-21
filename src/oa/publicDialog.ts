import { Http } from '../http';
import {
  GetDialRecordRequest,
  GetDialRecordResult,
} from '../interfaces/OA/publicDialog';

export class PublicDialogApi {
  constructor(private http: Http) {}

  /**
   * 获取公费电话拨打记录
   * 参考文档 https://work.weixin.qq.com/api/doc#90000/90135/90267
   * @param searchValue 查询条件
   */
  getDialRecord(
    searchValue: GetDialRecordRequest,
  ): Promise<GetDialRecordResult> {
    return this.http.post(`/cgi-bin/dial/get_dial_record`, searchValue);
  }
}
