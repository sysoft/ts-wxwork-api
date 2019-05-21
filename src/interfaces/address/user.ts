/**
 * 成员基础信息
 * 引用地方：读取成员返回值、获取部门成员详情
 */
export interface BaseUserInfo {
  /**
   * 成员UserID。对应管理端的帐号，企业内必须唯一。不区分大小写，长度为1~64个字节
   */
  userid: string;
  /**
   * 成员名称。
   */
  name: string;
  /**
   * 成员所属部门id列表，仅返回该应用有查看权限的部门id
   */
  department: number[];
  /**
   * 部门内的排序值，默认为0。数量必须和department一致，数值越大排序越前面。值范围是[0, 2^32)
   */
  order: number[];
  /**
   * 职务信息；第三方仅通讯录应用可获取
   */
  position: string;
  /**
   * 手机号码，第三方仅通讯录应用可获取
   */
  mobile: string;
  /**
   * 性别。0表示未定义，1表示男性，2表示女性
   */
  gender: string;
  /**
   * 邮箱，第三方仅通讯录应用可获取
   */
  email: string;
  /**
   * 表示在所在的部门内是否为上级。；第三方仅通讯录应用可获取
   */
  is_leader_in_dept: string;
  /**
   * 头像url。注：如果要获取小图将url最后的”/0”改成”/100”即可。第三方仅通讯录应用可获取
   */
  avatar: string;
  /**
   * 座机。第三方仅通讯录应用可获取
   */
  telephone: string;
  /**
   * 启用/禁用成员。1表示启用成员，0表示禁用成员
   */
  enable: number;
  /**
   * 成员别名。长度1~32个utf8字符
   */
  alias: string;
  /**
   * 地址。长度最大128个字符
   */
  address: string;
  /**
   * 扩展属性，第三方仅通讯录应用可获取
   */
  extattr: {
    attrs: {
      /**
       * 对外属性类型 文本(type=0)、网页(type=1)
       */
      type: number;
      /**
       * 属性名称： 需要先确保在管理端有创建该属性，否则会忽略
       */
      name: string;
      /**
       * 文本类型的属性
       */
      text?: {
        /**
         * 文本属性内容,长度限制12个UTF8字符
         */
        value: string;
      };
      web?: {
        /**
         * 网页的url,必须包含http或者https头
         */
        url: string;
        /**
         * 网页的展示标题,长度限制12个UTF8字符
         */
        title: string;
      };
    }[];
  };
  /**
   * 激活状态: 1=已激活，2=已禁用，4=未激活。
  已激活代表已激活企业微信或已关注微工作台（原企业号）。未激活代表既未激活企业微信又未关注微工作台（原企业号）。
  */
  status: number;
  /**
   * 员工个人二维码，扫描可添加为外部联系人；第三方仅通讯录应用可获取
   */
  qr_code: string;
  /**
   * 对外职务，如果设置了该值，则以此作为对外展示的职务，否则以position来展示。
   */
  external_position: string;
  /**
   * 成员对外属性,字段详情请见：https://work.weixin.qq.com/api/doc#90000/90135/90223,第三方仅通讯录应用可获取
   */
  external_profile: {
    /**
     * 企业对外简称，需从已认证的企业简称中选填。可在“我的企业”页中查看企业简称认证状态。
     */
    external_corp_name: string;
    /**
     * 属性列表，目前支持文本、网页、小程序三种类型
     */
    external_attr: {
      /**
       * 对外属性类型 文本(type=0)、网页(type=1)、小程序(type=2)
       */
      type: number;
      /**
       * 属性名称： 需要先确保在管理端有创建该属性，否则会忽略
       */
      name: string;
      /**
       * 文本类型的属性
       */
      text?: {
        /**
         * 文本属性内容,长度限制12个UTF8字符
         */
        value: string;
      };
      web?: {
        /**
         * 网页的url,必须包含http或者https头
         */
        url: string;
        /**
         * 网页的展示标题,长度限制12个UTF8字符
         */
        title: string;
      };
      miniprogram?: {
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
}

/**
 * 请求参数_创建成员
 */
export interface CreateUserRequest {
  /**
   * 成员UserID。对应管理端的帐号，企业内必须唯一。不区分大小写，长度为1~64个字节。只能由数字、字母和“_-@.”四种字符组成，且第一个字符必须是数字或字母。/**    *
   */
  userid: string;
  /**
   *成员名称。长度为1~64个utf8字符
   */
  name: string;
  /**
   * 成员别名。长度1~32个utf8字符
   */
  alias?: string;
  /**
   * 手机号码。企业内必须唯一，mobile/email二者不能同时为空
   */
  mobile?: string;
  /**
   * 成员所属部门id列表,不超过20个
   */
  department: number[];
  /**
   * 部门内的排序值，默认为0，成员次序以创建时间从小到大排列。数量必须和department一致，数值越大排序越前面。有效的值范围是[0, 2^32)
   */
  order?: number[];
  /**
   * 职务信息。长度为0~128个字符
   */
  position?: '';
  /**
   * 性别。1表示男性，2表示女性
   */
  gender?: string;
  /**
   * 邮箱。长度6~64个字节，且为有效的email格式。企业内必须唯一，mobile/email二者不能同时为空
   */
  email?: string;
  /**
   * 个数必须和department一致，表示在所在的部门内是否为上级。1表示为上级，0表示非上级。在审批等应用里可以用来标识上级审批人
   */
  is_leader_in_dept?: string;
  /**
   * 启用/禁用成员。1表示启用成员，0表示禁用成员
   */
  enable?: number;
  /**
   * 成员头像的mediaid，通过素材管理接口上传图片获得的mediaid
   */
  avatar_mediaid?: string;
  /**
   * 座机。32字节以内，由纯数字或’-‘号组成。
   */
  telephone?: string;
  /**
   * 地址。长度最大128个字符
   */
  address?: string;
  /**
   * 自定义字段。自定义字段需要先在WEB管理端添加,见：https://work.weixin.qq.com/api/doc#90000/90135/90193/%E6%89%A9%E5%B1%95%E5%B1%9E%E6%80%A7%E7%9A%84%E6%B7%BB%E5%8A%A0%E6%96%B9%E6%B3%95，否则忽略未知属性的赋值。
    与对外属性一致，不过只支持type=0的文本和type=1的网页类型，详细描述查看:https://work.weixin.qq.com/api/doc#90000/90135/90223
   */
  extattr?: {
    attrs?: {
      /**
       * 对外属性类型 文本(type=0)、网页(type=1)
       */
      type: number;
      /**
       * 属性名称： 需要先确保在管理端有创建该属性，否则会忽略
       */
      name: string;
      /**
       * 文本类型的属性	type为0时必填
       */
      text?: {
        /**
         * 文本属性内容,长度限制12个UTF8字符
         */
        value?: string;
      };
      /**
       * 网页类型的属性，url和title字段要么同时为空表示清除该属性，要么同时不为空。 type为1时必填
       */
      web?: {
        /**
         * 网页的url,必须包含http或者https头
         */
        url?: string;
        /**
         * 网页的展示标题,长度限制12个UTF8字符
         */
        title?: string;
      };
    }[];
  };
  /**
   * 是否邀请该成员使用企业微信（将通过微信服务通知或短信或邮件下发邀请，每天自动下发一次，最多持续3个工作日），默认值为true。
   */
  to_invite?: boolean;
  /**
   * 对外职务，如果设置了该值，则以此作为对外展示的职务，否则以position来展示。长度12个汉字内
   */
  external_position?: string;
  /**
   * 成员对外属性，字段详情见:https://work.weixin.qq.com/api/doc#90000/90135/90223，目前支持文本、网页、小程序三种类型
   */
  external_profile?: {
    /**
     * 企业对外简称，需从已认证的企业简称中选填。可在“我的企业”页中查看企业简称认证状态。
     */
    external_corp_name?: string;
    /**
     * 属性列表，目前支持文本、网页、小程序三种类型
     */
    external_attr?: {
      /**
       * 对外属性类型 文本(type=0)、网页(type=1)、小程序(type=2)
       */
      type: number;
      /**
       * 属性名称： 需要先确保在管理端有创建该属性，否则会忽略
       */
      name: string;
      /**
       * 文本类型的属性	type为0时必填
       */
      text?: {
        /**
         * 文本属性内容,长度限制12个UTF8字符
         */
        value?: string;
      };
      /**
       * 网页类型的属性，url和title字段要么同时为空表示清除该属性，要么同时不为空。
       * type为1时必填
       */
      web?: {
        /**
         * 网页的url,必须包含http或者https头
         */
        url?: string;
        /**
         * 网页的展示标题,长度限制12个UTF8字符
         */
        title?: string;
      };
      /**
       * 小程序类型的属性，appid和title字段要么同时为空表示清除改属性，要么同时不为空。
       * type为2时必填
       */
      miniprogram?: {
        /**
         * 小程序appid，必须是有在本企业安装授权的小程序，否则会被忽略
         */
        appid?: string;
        /**
         * 小程序的页面路径
         */
        pagepath?: string;
        /**
         * 小程序的展示标题,长度限制12个UTF8字符
         */
        title?: string;
      };
    }[];
  };
}

/**
 * 返回结果_读取成员
 */
export interface UserResult extends BaseResult {
  /**
   * 成员UserID。对应管理端的帐号，企业内必须唯一。不区分大小写，长度为1~64个字节
   */
  userid: string;
  /**
   * 成员名称。
   */
  name: string;
  /**
   * 成员所属部门id列表，仅返回该应用有查看权限的部门id
   */
  department: number[];
  /**
   * 部门内的排序值，默认为0。数量必须和department一致，数值越大排序越前面。值范围是[0, 2^32)
   */
  order: number[];
  /**
   * 职务信息；第三方仅通讯录应用可获取
   */
  position: string;
  /**
   * 手机号码，第三方仅通讯录应用可获取
   */
  mobile: string;
  /**
   * 性别。0表示未定义，1表示男性，2表示女性
   */
  gender: string;
  /**
   * 邮箱，第三方仅通讯录应用可获取
   */
  email: string;
  /**
   * 表示在所在的部门内是否为上级。；第三方仅通讯录应用可获取
   */
  is_leader_in_dept: string;
  /**
   * 头像url。注：如果要获取小图将url最后的”/0”改成”/100”即可。第三方仅通讯录应用可获取
   */
  avatar: string;
  /**
   * 座机。第三方仅通讯录应用可获取
   */
  telephone: string;
  /**
   * 启用/禁用成员。1表示启用成员，0表示禁用成员
   */
  enable: number;
  /**
   * 成员别名。长度1~32个utf8字符
   */
  alias: string;
  /**
   * 地址。长度最大128个字符
   */
  address: string;
  /**
   * 扩展属性，第三方仅通讯录应用可获取
   */
  extattr: {
    attrs: {
      /**
       * 对外属性类型 文本(type=0)、网页(type=1)
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
    }[];
  };
  /**
   * 激活状态: 1=已激活，2=已禁用，4=未激活。
  已激活代表已激活企业微信或已关注微工作台（原企业号）。未激活代表既未激活企业微信又未关注微工作台（原企业号）。
  */
  status: number;
  /**
   * 员工个人二维码，扫描可添加为外部联系人；第三方仅通讯录应用可获取
   */
  qr_code: string;
  /**
   * 对外职务，如果设置了该值，则以此作为对外展示的职务，否则以position来展示。
   */
  external_position: string;
  /**
   * 成员对外属性,字段详情请见：https://work.weixin.qq.com/api/doc#90000/90135/90223,第三方仅通讯录应用可获取
   */
  external_profile: {
    /**
     * 企业对外简称，需从已认证的企业简称中选填。可在“我的企业”页中查看企业简称认证状态。
     */
    external_corp_name: string;
    /**
     * 属性列表，目前支持文本、网页、小程序三种类型
     */
    external_attr: {
      /**
       * 对外属性类型 文本(type=0)、网页(type=1)、小程序(type=2)
       */
      type: number;
      /**
       * 属性名称： 需要先确保在管理端有创建该属性，否则会忽略
       */
      name: string;
      /**
       * 文本类型的属性	type为0时必填
       */
      text?: {
        /**
         * 文本属性内容,长度限制12个UTF8字符
         */
        value: string;
      };
      web?: {
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
       * 小程序类型的属性
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
}

/**
 * 请求参数_更新成员
 */
export interface UpdateUserRequest {
  /**
   * 成员UserID。对应管理端的帐号，企业内必须唯一。不区分大小写，长度为1~64个字节
   */
  userid: string;
  /**
   * 成员名称。长度为1~64个utf8字符
   */
  name?: string;
  /**
   * 成员所属部门id列表，不超过20个
   */
  department?: number[];
  /**
   * 部门内的排序值，默认为0。数量必须和department一致，数值越大排序越前面。有效的值范围是[0, 2^32)
   */
  order?: number[];
  /**
   * 职务信息。长度为0~128个字符
   */
  position?: string;
  /**
   * 手机号码。企业内必须唯一。若成员已激活企业微信，则需成员自行修改（此情况下该参数被忽略，但不会报错）
   */
  mobile?: string;
  /**
   * 性别。1表示男性，2表示女性
   */
  gender?: string;
  /**
   * 邮箱。长度不超过64个字节，且为有效的email格式。企业内必须唯一
   */
  email?: string;
  /**
   * 上级字段，个数必须和department一致，表示在所在的部门内是否为上级。
   */
  is_leader_in_dept?: number[];
  /**
   * 启用/禁用成员。1表示启用成员，0表示禁用成员
   */
  enable?: number;
  /**
   * 成员头像的mediaid，通过素材管理接口上传图片获得的mediaid
   */
  avatar_mediaid?: string;
  /**
   * 座机。由1-32位的纯数字或’-‘号组成
   */
  telephone?: string;
  /**
   * 别名。长度为1-32个utf8字符
   */
  alias?: string;
  /**
   * 地址。长度最大128个字符
   */
  address?: string;
  /**
   * 自定义字段。自定义字段需要先在WEB管理端添加,见：https://work.weixin.qq.com/api/doc#90000/90135/90193/%E6%89%A9%E5%B1%95%E5%B1%9E%E6%80%A7%E7%9A%84%E6%B7%BB%E5%8A%A0%E6%96%B9%E6%B3%95，否则忽略未知属性的赋值。
    与对外属性一致，不过只支持type=0的文本和type=1的网页类型，详细描述查看:https://work.weixin.qq.com/api/doc#90000/90135/90223
   */
  extattr?: {
    attrs?: {
      /**
       * 对外属性类型 文本(type=0)、网页(type=1)
       */
      type: number;
      /**
       * 属性名称： 需要先确保在管理端有创建该属性，否则会忽略
       */
      name: string;
      /**
       * 文本类型的属性	type为0时必填
       */
      text?: {
        /**
         * 文本属性内容,长度限制12个UTF8字符
         */
        value?: string;
      };
      /**
       * 网页类型的属性，url和title字段要么同时为空表示清除该属性，要么同时不为空
       * type为1时必填
       */
      web?: {
        /**
         * 网页的url,必须包含http或者https头
         */
        url?: string;
        /**
         * 网页的展示标题,长度限制12个UTF8字符
         */
        title?: string;
      };
    }[];
  };
  /**
   * 对外职务，如果设置了该值，则以此作为对外展示的职务，否则以position来展示。不超过12个汉字
   */
  external_position?: string;
  /**
   * 成员对外属性，字段详情见:https://work.weixin.qq.com/api/doc#90000/90135/90223，目前支持文本、网页、小程序三种类型
   */
  external_profile?: {
    /**
     * 企业对外简称，需从已认证的企业简称中选填。可在“我的企业”页中查看企业简称认证状态。
     */
    external_corp_name?: string;
    /**
     * 属性列表，目前支持文本、网页、小程序三种类型
     */
    external_attr?: {
      /**
       * 对外属性类型 文本(type=0)、网页(type=1)、小程序(type=2)
       */
      type: number;
      /**
       * 属性名称： 需要先确保在管理端有创建该属性，否则会忽略
       */
      name: string;
      /**
       * 文本类型的属性	type为0时必填
       */
      text?: {
        /**
         * 文本属性内容,长度限制12个UTF8字符
         */
        value?: string;
      };
      /**
       * 网页类型的属性，url和title字段要么同时为空表示清除该属性，要么同时不为空
       * type为1时必填
       */
      web?: {
        /**
         * 网页的url,必须包含http或者https头
         */
        url?: string;
        /**
         * 网页的展示标题,长度限制12个UTF8字符
         */
        title?: string;
      };
      /**
       * 小程序类型的属性，appid和title字段要么同时为空表示清除改属性，要么同时不为空
       * type为2时必填
       */
      miniprogram?: {
        /**
         * 小程序appid，必须是有在本企业安装授权的小程序，否则会被忽略
         */
        appid?: string;
        /**
         * 小程序的页面路径
         */
        pagepath?: string;
        /**
         * 小程序的展示标题,长度限制12个UTF8字符
         */
        title?: string;
      };
    }[];
  };
}

/**
 * 请求参数_批量删除成员
 */
export interface BatchDeleteUserRequest {
  /**
   * 成员UserID列表。对应管理端的帐号。最多支持200个。若存在无效UserID，直接返回错误
   */
  useridlist: string[];
}

/**
 * 返回结果_获取部门成员
 */
export interface GetSimpleUserListResult extends BaseResult {
  /**
   * 成员列表
   */
  userlist: {
    /**
     * 成员UserID。对应管理端的帐号
     */
    userid: string;
    /**
     * 成员名称
     */
    name: string;
    /**
     * 成员所属部门列表。列表项为部门ID，32位整型
     */
    department: number[];
  }[];
}

/**
 * 返回结果_获取部门成员详情
 */
export interface GetUserListResult extends BaseResult {
  /**
   * 成员详细信息
   */
  userlist: BaseUserInfo;
}

/**
 * 请求参数_userid转openid
 */
export interface ConvertToOpenIdRequest {
  /**
   * 企业内的成员id
   */
  userid: string;
}

/**
 * 返回结果_userid转openid
 */
export interface ConvertToOpenIdResult extends BaseResult {
  /**
   * 企业微信成员userid对应的openid
   */
  openid: string;
}

/**
 * 请求参数_邀请成员
 * 批量、单个邀请成员使用企业微信
 */
export interface BatchInviteRequest extends BaseResult {
  /**
   * 成员ID列表, 最多支持1000个。
   */
  user?: string[];
  /**
   * 部门ID列表，最多支持100个。
   */
  party?: number[];
  /**
   * 标签ID列表，最多支持100个。
   */
  tag?: number[];
}

/**
 * 返回结果_邀请成员
 * 批量、单个邀请成员使用企业微信
 */
export interface BatchInviteResult extends BaseResult {
  /**
   * 非法成员列表
   */
  invaliduser: string[];
  /**
   * 非法部门列表
   */
  invalidparty: number[];
  /**
   * 非法标签列表
   */
  invalidtag: number[];
}
