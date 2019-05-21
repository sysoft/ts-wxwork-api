/**
 * 请求参数_获取公费电话拨打记录
 */
export interface GetDialRecordRequest {
  /**
   * 查询的起始时间戳
   */
  start_time: number;
  /**
   * 查询的结束时间戳
   */
  end_time: number;
  /**
   * 分页查询的偏移量
   */
  offset: number;
  /**
   * 分页查询的每页大小,默认为100条，如该参数大于100则按100处理
   */
  limit: number;
}

/**
 * 请求参数_获取公费电话拨打记录
 */
export interface GetDialRecordResult extends BaseResult {
  /**
   * 记录信息
   */
  record: {
    /**
     * 拨出时间
     */
    call_time: number;
    /**
     * 总通话时长，单位为分钟
     */
    total_duration: number;
    /**
     * 通话类型，1-单人通话 2-多人通话
     */
    call_type: number;
    /**
     * 主叫用户
     */
    caller: {
      /**
       * 主叫用户的userid
       */
      userid: string;
      /**
       * 主叫用户的通话时长
       */
      duration: number;
    };
    /**
     * 被叫用户
     */
    callee: {
      /**
       * 被叫用户的userid，当被叫用户为企业内用户时返回
       */
      phone: number;
      /**
       * 被叫用户的号码，当被叫用户为外部用户时返回
       */
      duration: number;
    }[];
  }[];
}
