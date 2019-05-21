/**
 * 请求参数_更新成员
 * 引用地方:增量更新成员、全量覆盖成员
 */
export interface BatchUserRequest {
  /**
   * 上传的csv文件的media_id
   */
  media_id: string;
  /**
   * 是否邀请新建的成员使用企业微信（将通过微信服务通知或短信或邮件下发邀请，每天自动下发一次，最多持续3个工作日），默认值为true。
   */
  to_invite?: boolean;
  /**
   * 回调信息。如填写该项则任务完成后，通过callback推送事件给企业。具体请参考应用回调模式中的相应选项
   */
  callback?: {
    /**
     * 企业应用接收企业微信推送请求的访问协议和地址，支持http或https协议
     */
    url?: string;
    /**
     * 	用于生成签名
     */
    token?: string;
    /**
     * 用于消息体的加密，是AES密钥的Base64编码
     */
    encodingaeskey?: string;
  };
}

/**
 * 返回结果_更新成员
 * 引用地方:增量更新成员、全量覆盖成员
 */
export interface BatchUserResult extends BaseResult {
  /**
   * 异步任务id，最大长度为64字节
   */
  jobid: string;
}

/**
 * 请求参数_全量覆盖部门
 */
export interface BatchReplacePartyRequest {
  /**
   * 上传的csv文件的media_id
   */
  media_id: string;
  /**
   * 回调信息。如填写该项则任务完成后，通过callback推送事件给企业。具体请参考应用回调模式中的相应选项
   */
  callback?: {
    /**
     * 企业应用接收企业微信推送请求的访问协议和地址，支持http或https协议
     */
    url?: string;
    /**
     * 	用于生成签名
     */
    token?: string;
    /**
     * 用于消息体的加密，是AES密钥的Base64编码
     */
    encodingaeskey?: string;
  };
}

/**
 * 返回结果_全量覆盖部门
 */
export interface BatchReplacePartyResult extends BaseResult {
  /**
   * 异步任务id，最大长度为64字节
   */
  jobid: string;
}

/**
 * 返回结果_获取异步任务结果
 */
export interface BatchGetAsyncTaskResult extends BaseResult {
  /**
   * 任务状态，整型，1表示任务开始，2表示任务进行中，3表示任务已完成
   */
  status: number;
  /**
   * 操作类型，字节串，目前分别有：1. sync_user(增量更新成员) 2. replace_user(全量覆盖成员)3. replace_party(全量覆盖部门)
   */
  type: string;
  /**
   * 任务运行总条数
   */
  total: number;
  /**
   * 目前运行百分比，当任务完成时为100
   */
  percentage: number;
  /**
   * type为sync_user、replace_user时,返回: {"userid":"lisi","errcode":0, "errmsg":"ok" }
   * type为replace_party时,返回:{"action":1,"partyid":1, "errcode":0, "errmsg":"ok" }
   */
  result: {
    /**
     * 成员UserID。对应管理端的帐号
     */
    userid: string;
    /**
     * 操作类型（按位或）：1 新建部门 ，2 更改部门名称， 4 移动部门， 8 修改部门排序
     */
    action: number;
    /**
     * 部门ID
     */
    partyid: number;
    /**
     * 该成员对应操作的结果错误码
     */
    errcode: number;
    /**
     * 错误信息，例如无权限错误，键值冲突，格式错误等
     */
    errmsg: string;
  };
}
