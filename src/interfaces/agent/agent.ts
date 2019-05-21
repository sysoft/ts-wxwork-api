/**
 * 返回结果_获取指定的应用详情
 */
export interface GetAgentDetailResult extends BaseResult {
  /**
   * 企业应用id
   */
  agentid: number;
  /**
   * 企业应用名称
   */
  name: string;
  /**
   * 企业应用方形头像
   */
  square_logo_url: string;
  /**
   * 企业应用详情
   */
  description: string;
  /**
   * 企业应用可见范围（人员），其中包括userid
   */
  allow_userinfos: {
    user: {
      userid: string;
    }[];
  };
  /**
   * 企业应用可见范围（部门）
   */
  allow_partys: {
    partyid: number[];
  };
  /**
   * 企业应用可见范围（标签）
   */
  allow_tags: {
    tagid: number[];
  };
  /**
   * 企业应用是否被停用
   */
  close: number;
  /**
   * 企业应用可信域名
   */
  redirect_domain: string;
  /**
   * 企业应用是否打开地理位置上报 0：不上报；1：进入会话上报；
   */
  report_location_flag: number;
  /**
   * 是否上报用户进入应用事件。0：不接收；1：接收
   */
  isreportenter: number;
  /**
   * 应用主页url
   */
  home_url: string;
}

/**
 * 返回结果_获取access_token对应的应用列表
 */
export interface GetAgentListResult extends BaseResult {
  /**
   * 当前凭证可访问的应用列表
   */
  agentlist: {
    /**
     * 企业应用id
     */
    agentid: string;
    /**
     * 企业应用名称
     */
    name: string;
    /**
     * 企业应用方形头像url
     */
    square_logo_url: string;
  }[];
}

/**
 * 请求参数_设置应用
 */
export interface SetAgentRequest {
  /**
   * 企业应用id
   */
  agentid: number;
  /**
   * 企业应用是否打开地理位置上报 0：不上报；1：进入会话上报；
   */
  report_location_flag?: number;
  /**
   * 企业应用头像的mediaid，通过素材管理接口上传图片获得mediaid，上传后会自动裁剪成方形和圆形两个头像
   */
  logo_mediaid?: string;
  /**
   * 企业应用名称，长度不超过32个utf8字符
   */
  name?: string;
  /**
   * 企业应用详情，长度为4至120个utf8字符
   */
  description?: string;
  /**
   * 企业应用可信域名。注意：域名需通过所有权校验，否则jssdk功能将受限，此时返回错误码85005
   */
  redirect_domain?: string;
  /**
   * 是否上报用户进入应用事件。0：不接收；1：接收。
   */
  isreportenter?: number;
  /**
   * 应用主页url。url必须以http或者https开头（为了提高安全性，建议使用https）。
   */
  home_url?: string;
}
