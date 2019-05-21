/**
 * 发票的用户信息
 * 引用地方：查询电子发票、批量查询电子发票
 */
export interface InvoiceUserInfo {
  /**
   * 发票加税合计金额，以分为单位
   */
  fee: number;
  /**
   * 发票的抬头
   */
  title: string;
  /**
   * 开票时间，为十位时间戳
   */
  billing_time: number;
  /**
   * 发票代码
   */
  billing_no: string;
  /**
   * 发票号码
   */
  billing_code: string;
  info: {
    /**
     * 项目（商品）名称
     */
    name: string;
    /**
     * 项目数量
     */
    num: number;
    /**
     * 项目单位
     */
    unit: string;
    /**
     * 发票加税合计金额，以分为单位
     */
    fee: number;
    /**
     * 单价，以分为单位
     */
    price: number;
  }[];
  /**
   * 不含税金额，以分为单位
   */
  fee_without_tax: number;
  /**
   * 含税金额，以分为单位
   */
  tax: number;
  /**
   * 发票详情，一般描述的是发票的使用说明
   */
  detail: string;
  /**
   * 这张发票对应的PDF_URL
   */
  pdf_url: string;
  /**
   * 校验码
   */
  check_code: string;
  /**
   * 购买方纳税人识别号
   */
  buyer_number: string;
  /**
   * 购买方地址、电话
   */
  buyer_address_and_phone: string;
  /**
   * 购买方开户行及账号
   */
  buyer_bank_account: string;
  /**
   * 销售方纳税人识别号
   */
  seller_number: string;
  /**
   * 销售方地址、电话
   */
  seller_address_and_phone: string;
  /**
   * 销售方开户行及账号
   */
  seller_bank_account: string;
  /**
   * 备注
   */
  remarks: string;
  /**
   * 收款人，发票左下角处
   */
  cashier: string;
  /**
   * 开票人，发票有下角处
   */
  maker: string;
  /**
   * 发报销状态
   * INVOICE_REIMBURSE_INIT：发票初始状态，未锁定；
   * INVOICE_REIMBURSE_LOCK：发票已锁定，无法重复提交报销;
   * INVOICE_REIMBURSE_CLOSURE:发票已核销，从用户卡包中移除
   */
  reimburse_status: string;
}
/**
 * 请求参数_查询电子发票
 */
export interface GetInvoiceInfoRequest {
  /**
   * 发票id
   */
  card_id: string;
  /**
   * 加密code
   */
  encrypt_code: string;
}

/**
 * 返回结果_查询电子发票
 */
export interface GetInvoiceInfoResult extends BaseResult {
  /**
   * 发票id
   */
  card_id: string;
  /**
   * 发票的有效期起始时间
   */
  begin_time: string;
  /**
   * 发票的有效期截止时间
   */
  end_time: string;
  /**
   * 用户标识
   */
  openid: string;
  /**
   * 发票类型，如广东增值税普通发票
   */
  type: string;
  /**
   * 发票的收款方
   */
  payee: string;
  /**
   * 发票的收款方
   */
  detail: string;
  /**
   * 发票的用户信息
   */
  user_info: InvoiceUserInfo;
}

/**
 * 请求参数_更新发票状态
 */
export interface UpdateInvoiceStatusRequest {
  /**
   * 发票id
   */
  card_id: string;
  /**
   * 加密code
   */
  encrypt_code: string;
  /**
   * 发报销状态
   * INVOICE_REIMBURSE_INIT：发票初始状态，未锁定；
   * INVOICE_REIMBURSE_LOCK：发票已锁定，无法重复提交报销;
   * INVOICE_REIMBURSE_CLOSURE:发票已核销，从用户卡包中移除
   */
  reimburse_status: string;
}

/**
 * 请求参数_批量更新发票状态
 */
export interface BatchUpdateInvoiceStatusRequest {
  /**
   * 用户openid，可用“userid与openid互换接口”获取
   */
  openid: string;
  /**
   * 发报销状态
   * INVOICE_REIMBURSE_INIT：发票初始状态，未锁定；
   * INVOICE_REIMBURSE_LOCK：发票已锁定，无法重复提交报销;
   * INVOICE_REIMBURSE_CLOSURE:发票已核销，从用户卡包中移除
   */
  reimburse_status: string;
  /**
   * 发票列表，必须全部属于同一个openid
   */
  invoice_list: {
    /**
     * 发票卡券的card_id
     */
    card_id: string;
    /**
     * 发票卡券的加密code，和card_id共同构成一张发票卡券的唯一标识
     */
    encrypt_code: string;
  }[];
}

/**
 * 请求参数_批量查询电子发票
 */
export interface BatchGetInvoiceInfoRequest {
  /**
   * 发票列表
   */
  item_list: {
    /**
     * 发票id
     */
    card_id: string;
    /**
     * 	加密code
     */
    encrypt_code: string;
  }[];
}

/**
 * 返回结果_批量查询电子发票
 */
export interface BatchGetInvoiceInfoResult extends BaseResult {
  /**
   * 发票列表
   */
  item_list: {
    /**
     * 发票卡券的card_id
     */
    card_id: string;
    /**
     * 用户标识
     */
    openid: string;
    /**
     * 发票类型，如广东增值税普通发票
     */
    type: string;
    /**
     * 发票的收款方
     */
    payee: string;
    /**
     * 发票详情
     */
    detail: string;
    /**
     * 发票的用户信息
     */
    user_info: InvoiceUserInfo;
  }[];
}
