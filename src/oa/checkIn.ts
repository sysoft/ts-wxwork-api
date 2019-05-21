import { Http } from '../http';
import {
  GetCheckInDataResult,
  GetCheckInDataRequest,
  GetCheckInOptionRequest,
} from '../interfaces/OA/CheckIn';

export class CheckInApi {
  constructor(private http: Http) {}

  /**
   * 获取打卡数据
   * 参考文档 https://work.weixin.qq.com/api/doc#90000/90135/90262
   * @param searchValue 查询条件
   */
  getCheckInData(
    searchValue: GetCheckInDataRequest,
  ): Promise<GetCheckInDataResult> {
    return this.http.post(`/cgi-bin/checkin/getcheckindata`, searchValue);
  }

  /**
   * 获取打卡规则
   * 参考文档 https://work.weixin.qq.com/api/doc#90000/90135/90263
   * @param searchValue 查询条件
   */
  getCheckInOption(
    searchValue: GetCheckInOptionRequest,
  ): Promise<GetCheckInDataResult> {
    return this.http.post(`/cgi-bin/checkin/getcheckinoption`, searchValue);
  }
}
