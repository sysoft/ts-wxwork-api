declare interface BaseResult {
  /**
   * 出错返回码，为0表示成功，非0表示调用失败
   */
  errcode: number;
  /**
   * 返回码提示语
   */
  errmsg: string;
}

declare interface AccessTokenResult extends BaseResult {
  /**
   * 获取到的凭证，最长为512字节
   */
  access_token: string;
  /**
   * 凭证的有效时间（秒）
   */
  expires_in: number;
}
