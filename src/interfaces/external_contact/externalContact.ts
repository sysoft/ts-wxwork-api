/**
 * 外部联系人基础信息
 */
export interface BaseExternalContactInfo {
  /**
   * 外部联系人的userid
   */
  external_userid: string;
  /**
   * 外部联系人的姓名
   */
  name: string;
  /**
   * 外部联系人的职位，如果外部企业或用户选择隐藏职位，则不返回，仅当联系人类型是企业微信用户时有此字段
   */
  position: string;
  /**
   * 外部联系人头像，第三方不可获取
   */
  avatar: string;
  /**
   * 外部联系人所在企业的简称，仅当联系人类型是企业微信用户时有此字段
   */
  corp_name: string;
  /**
   * 外部联系人所在企业的主体名称，仅当联系人类型是企业微信用户时有此字段
   */
  corp_full_name: string;
  /**
   * 外部联系人的类型，1表示该外部联系人是微信用户，2表示该外部联系人是企业微信用户
   */
  type: number;
  /**
   * 外部联系人性别 0-未知 1-男性 2-女性
   */
  gender: number;
  /**
   * 外部联系人在微信开放平台的唯一身份标识（微信unionid），通过此字段企业可将外部联系人与公众号/小程序用户关联起来。仅当联系人类型是微信用户，且企业绑定了微信开发者ID有此字段。查看绑定方法
   */
  unionid: string;
  /**
   * 外部联系人的自定义展示信息，可以有多个字段和多种类型，包括文本，网页和小程序，仅当联系人类型是企业微信用户时有此字段
   * 字段详情见 https://work.weixin.qq.com/api/doc#90000/90135/90223
   */
  external_profile: {
    external_attr: {
      /**
       * 属性类型: 0-本文 1-网页 2-小程序
       */
      type: number;
      /**
       * 属性名称： 需要先确保在管理端有创建该属性，否则会忽略
       */
      name: string;
      /**
       * 文本类型的属性
       */
      text: {
        /**
         * 文本属性内容,长度限制12个UTF8字符
         */
        value: string;
      };
      /**
       * 网页类型的属性，url和title字段要么同时为空表示清除该属性，要么同时不为空
       */
      web: {
        /**
         * 网页的url,必须包含http或者https头
         */
        url: string;
        /**
         * 网页的展示标题,长度限制12个UTF8字符
         */
        title: string;
      };
      /**
       * 小程序类型的属性，appid和title字段要么同时为空表示清除改属性，要么同时不为空
       */
      miniprogram: {
        /**
         * 小程序appid，必须是有在本企业安装授权的小程序，否则会被忽略
         */
        appid: string;
        /**
         * 小程序的页面路径
         */
        pagepath: string;
        /**
         * 小程序的展示标题,长度限制12个UTF8字符
         */
        title: string;
      };
    }[];
  };
  /**
   * 跟进人（添加了此外部联系人的企业成员）信息
   */
  follow_user: {
    /**
     * 添加了此外部联系人的企业成员userid
     */
    userid: string;
    /**
     * 该成员对此外部联系人的备注
     */
    remark: string;
    /**
     * 该成员对此外部联系人的描述
     */

    description: string;
    /**
     * 该成员添加此外部联系人的时间
     */
    createtime: Date;
    /**
     * 该成员添加此外部联系人所打标签信息
     */
    tags: {
      /**
       * 该成员添加此外部联系人所打标签的分组名称（标签功能需要企业微信升级到2.7.5及以上版本）
       */
      group_name: string;
      /**
       * 该成员添加此外部联系人所打标签名称
       */
      tag_name: string;
      /**
       * 该成员添加此外部联系人所打标签类型, 1-企业设置, 2-用户自定义
       */
      type: number;
      /**
       * 该成员对此客户备注的企业名称
       */
      remark_company: string;
      /**
       * 该成员对此客户备注的手机号码
       */
      remark_mobiles: number[];
    }[];
  }[];
}

/**
 * 请求参数_离职成员的外部联系人再分配
 */
export interface TransferExternalContactRequest {
  /**
   * 外部联系人的userid，注意不是企业成员的帐号
   * 注：external_userid必须是handover_userid的客户（即配置了客户联系功能的成员所添加的联系人）。
   */
  external_userid: string;
  /**
   * 离职成员的userid
   */
  handover_userid: string;
  /**
   * 接替成员的userid
   */
  takeover_userid: string;
}

/**
 * 返回结果_获取外部联系人列表
 */
export interface GetExternalContactListResult extends BaseResult {
  /**
   * 外部联系人的userid列表
   */
  external_userid: string[];
}

/**
 * 返回结果_获取外部联系人详情
 */
export interface GetExternalContactResult extends BaseResult {
  /**
   *外部联系人信息
   */
  external_contact: BaseExternalContactInfo;
}

/**
 * 返回结果_获取配置了客户联系功能的成员列表
 */
export interface GetCustomerContactsResult extends BaseResult {
  /**
   * 配置了客户联系功能的成员userid列表
   */
  customer_contacts: string[];
}

/**
 * 请求参数_添加企业群发消息模板
 * 注意：text、image、link和miniprogram四者的相关要求见 https://work.weixin.qq.com/api/doc#90000/90135/91473
 */
export interface AddMsgTemplateRequest {
  /**
   * 客户的外部联系人id列表
   */
  external_userid: string[];
  /**
   * 消息文本
   */
  text?: {
    /**
     * 消息文本内容
     */
    content?: string;
  };
  /**
   * 消息图片
   */
  image?: {
    /**
     * 图片的media_id
     */
    media_id: string;
  };
  /**
   * 图文消息
   */
  link?: {
    /**
     * 图文消息标题
     */
    title: string;
    /**
     * 图文消息封面的url
     */
    picurl?: string;
    /**
     * 图文消息的描述
     */
    desc?: string;
    /**
     * 图文消息的链接
     */
    url: string;
  };
  /**
   * 小程序消息
   */
  miniprogram?: {
    /**
     * 小程序消息标题
     */
    title: string;
    /**
     * 小程序消息封面的url
     */
    picurl: string;
    /**
     * 小程序appid
     */
    appid: string;
    /**
     * 小程序page路径
     */
    page: string;
  };
}

/**
 * 返回结果_添加企业群发消息模板
 */
export interface AddMsgTemplateResult extends BaseResult {
  /**
   * 无效或无法发送的external_userid列表
   */
  fail_list: string[];
}

/**
 * 请求参数_配置客户联系「联系我」方式
 */
export interface AddContactWayRequest {
  /**
   * 联系方式类型,1-单人, 2-多人
   */
  type: number;
  /**
   * 场景，1-在小程序中联系，2-通过二维码联系
   */
  scene: number;
  /**
   * 在小程序中联系时使用的控件样式
   */
  style?: number;
  /**
   * 联系方式的备注信息，用于助记，不超过30个字符
   */
  remark?: string;
  /**
   * 外部客户添加时是否无需验证，默认为true
   */
  skip_verify?: boolean;
  /**
   * 使用该联系方式的用户userID列表，在type为1时为必填，且只能有一个
   */
  user?: string[];
  /**
   * 使用该联系方式的部门id列表，只在type为2时有效
   */
  party?: number[];
}

/**
 * 返回结果_配置客户联系「联系我」方式
 */
export interface AddContactWayResult extends BaseResult {
  /**
   * 新增联系方式的配置id
   */
  config_id: string;
}

/**
 * 请求参数_获取企业已配置的「联系我」方式
 */
export interface GetContactWayRequest {
  /**
   * 联系方式的配置id
   */
  config_id: string;
}

/**
 * 返回结果_获取企业已配置的「联系我」方式
 */
export interface GetContactWayResult extends BaseResult {
  contact_way: {
    /**
     * 企业联系方式的配置id
     */
    config_id: string;
    /**
     * 联系方式类型,1-单人, 2-多人
     */
    type: number;
    /**
     * 场景，1-在小程序中联系，2-通过二维码联系
     */
    scene: number;
    /**
     * 联系方式的备注信息，用于助记，不超过30个字符
     */
    remark: string;
    /**
     * 外部客户添加时是否无需验证，默认为true
     */
    skip_verify?: boolean;
    /**
     * 在小程序中联系时使用的控件样式
     */
    style: number;
    /**
     * 联系二维码的URL，仅在type为1时返回
     */
    qr_code: string;
  }[];
}

/**
 * 请求参数_更新企业已配置的「联系我」方式
 */
export interface UpdateContactWayRequest {
  /**
   * 企业联系方式的配置id
   */
  config_id: string;
  /**
   * 联系方式的备注信息，不超过30个字符，将覆盖之前的备注
   */
  remark?: string;
  /**
   * 外部客户添加时是否无需验证，默认为true
   */
  skip_verify?: boolean;
  /**
   * 样式，只针对“在小程序中联系”的配置生效
   */
  style?: number;
  /**
   * 使用该联系方式的用户列表，将覆盖原有用户列表
   */
  user?: string[];
  /**
   * 使用该联系方式的部门列表，将覆盖原有部门列表，只在配置的type为2时有效
   */
  party?: number[];
}

/**
 * 请求参数_删除企业已配置的「联系我」方式
 */
export interface DeleteContactWayRequest {
  /**
   * 联系方式的配置id
   */
  config_id: string;
}
