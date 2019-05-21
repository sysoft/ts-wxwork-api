/**
 * 请求参数_获取审批数据
 */
export interface GetApprovalDataRequest {
  /**
   * 获取审批记录的开始时间。Unix时间戳
   */
  starttime: number;
  /**
   * 获取审批记录的结束时间。Unix时间戳
   */
  endtime: number;
  /**
   * 第一个拉取的审批单号，不填从该时间段的第一个审批单拉取
   */
  next_spnum?: number;
}

/**
 * 返回结果_获取审批数据
 */
export interface GetApprovalDataResult extends BaseResult {
  /**
   * 拉取的审批单个数，最大值为10000，当total参数大于10000时，可运用next_spnum参数进行多次拉取
   */
  count: number;
  /**
   * 时间段内的总审批单个数
   */
  total: number;
  /**
   * 拉取列表的最后一个审批单号
   */
  next_spnum: number;
  /**
   * 审批数据格式
   * 请假、报销、加班等等
   */
  data: any[];
}
