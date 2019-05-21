import { Http } from '../http';
import {
  BatchUserRequest,
  BatchUserResult,
  BatchGetAsyncTaskResult,
  BatchReplacePartyRequest,
  BatchReplacePartyResult,
} from '../interfaces/address/batchOperate';

export class BatchOperateApi {
  constructor(private http: Http) {}

  /**
   * 增量更新成员
   * 参考文档 https://work.weixin.qq.com/api/doc#90000/90135/90980
   * 注：请先下载CSV模板（https://work.weixin.qq.com/wework_admin/downloadfile/batch_user_sample.csv），根据需求填写文件内容。
   * @param csvTemplate CSV文件
   */
  batchSyncUser(csvFileTemplate: BatchUserRequest): Promise<BatchUserResult> {
    return this.http.post(`/cgi-bin/batch/syncuser`, csvFileTemplate);
  }

  /**
   * 全量覆盖成员
   * 参考文档 https://work.weixin.qq.com/api/doc#90000/90135/90981
   * 注：请先下载CSV模板（https://work.weixin.qq.com/wework_admin/downloadfile/batch_user_sample.csv），根据需求填写文件内容。
   * @param csvTemplate CSV文件
   */
  batchReplaceUser(
    csvFileTemplate: BatchUserRequest,
  ): Promise<BatchUserResult> {
    return this.http.post(`/cgi-bin/batch/replaceuser`, csvFileTemplate);
  }

  /**
   * 全量覆盖部门
   * 参考文档 https://work.weixin.qq.com/api/doc#90000/90135/90982
   * 注：请先下载CSV模板（https://work.weixin.qq.com/wework_admin/downloadfile/batch_party_sample.csv），根据需求填写文件内容。
   * @param csvTemplate CSV文件
   */
  batchReplaceParty(
    csvFileTemplate: BatchReplacePartyRequest,
  ): Promise<BatchReplacePartyResult> {
    return this.http.post(`/cgi-bin/batch/replaceparty`, csvFileTemplate);
  }

  /**
   * 获取异步任务结果
   * 参考文档 https://work.weixin.qq.com/api/doc#90000/90135/90983
   * @param jobid
   */
  batchGetAsyncTaskResult(jobid: string): Promise<BatchGetAsyncTaskResult> {
    return this.http.get(`/cgi-bin/batch/getresult?jobid=${jobid}`);
  }
}
