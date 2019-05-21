/**
 * 标签基础信息
 */
export interface BaseTagInfo {
  /**
   * 标签ID。
   */
  tagid: number;
  /**
   * 标签名称，长度限制为32个字以内（汉字或英文字母），标签名不可与其他标签重名。
   */
  tagname: string;
}

/**
 * 请求参数_创建标签
 */
export interface CreateTagRequest {
  /**
   * 标签id,非负整型，指定此参数时新增的标签会生成对应的标签id，不指定时则以目前最大的id自增。
   */
  tagid?: number;
  /**
   * 标签名称，长度限制为32个字以内（汉字或英文字母），标签名不可与其他标签重名。
   */
  tagname: string;
}

/**
 * 返回结果_创建标签
 */
export interface CreateTagResult extends BaseResult {
  /**
   * 标签id
   */
  tagid: number;
}

/**
 * 请求参数_更新标签名字
 */
export interface UpdateTagRequest {
  /**
   * 标签ID
   */
  tagid: number;
  /**
   * 标签名称，长度限制为32个字以内（汉字或英文字母），标签名不可与其他标签重名。
   */
  tagname: string;
}

/**
 * 返回结果_获取标签成员
 */
export interface GetTagUserResult extends BaseResult {
  /**
   * 标签名
   */
  tagname: string;
  /**
   * 标签中包含的成员列表
   */
  userlist: {
    /**
     * 成员帐号
     */
    userid: string;
    /**
     * 成员名
     */
    name: string;
  }[];
  /**
   * 标签中包含的部门id列表
   */
  partylist: number;
}

/**
 * 请求参数_增加标签成员
 */
export interface AddTagUsersRequest {
  /**
   * 标签ID
   */
  tagid: number;
  /**
   * 企业成员ID列表，注意：userlist、partylist不能同时为空，单次请求长度不超过1000
   */
  userlist?: string[];
  /**
   * 企业部门ID列表，注意：userlist、partylist不能同时为空，单次请求长度不超过100
   */
  partylist?: number[];
}

/**
 * 返回结果_增加标签成员
 */
export interface AddTagUsersResult extends BaseResult {
  /**
   * 非法的成员帐号列表
   */
  invalidlist: any;
  /**
   * 非法的部门id列表
   */
  invalidparty: any;
}

/**
 * 请求参数_删除标签成员
 */
export interface DelTagUsersRequest {
  /**
   * 标签ID
   */
  tagid: number;
  /**
   * 企业成员ID列表，注意：userlist、partylist不能同时为空，单次请求长度不超过1000
   */
  userlist?: string[];
  /**
   * 企业部门ID列表，注意：userlist、partylist不能同时为空，单次请求长度不超过100
   */
  partylist?: number[];
}

/**
 * 返回结果_删除标签成员
 */
export interface DelTagUsersResult extends BaseResult {
  /**
   * 非法的成员帐号列表
   */
  invalidlist: any;
  /**
   * 非法的部门id列表
   */
  invalidparty: any;
}

/**
 * 返回结果_获取标签列表
 */
export interface GetTagListResult extends BaseResult {
  /**
   * 标签列表
   */
  taglist: BaseTagInfo[];
}
