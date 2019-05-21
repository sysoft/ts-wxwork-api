/**
 * 返回结果_获取企业微信服务器的ip段
 */
export interface GetCallbackIpResult extends BaseResult {
  /**
   * 企业微信回调的IP段
   */
  ip_list: string[];
}
