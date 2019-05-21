/**
 * 请求参数_获取打卡数据
 */
export interface GetCheckInDataRequest {
  /**
   * 打卡类型。1：上下班打卡；2：外出打卡；3：全部打卡
   */
  opencheckindatatype: number;
  /**
   * 获取打卡记录的开始时间。Unix时间戳
   */
  starttime: number;
  /**
   * 获取打卡记录的结束时间。Unix时间戳
   */
  endtime: number;
  /**
   * 需要获取打卡记录的用户列表
   */
  useridlist: string[];
}

/**
 * 返回结果_获取打卡数据
 */
export interface GetCheckInDataResult extends BaseResult {
  checkindata: {
    /**
     * 用户id
     */
    userid: string;
    /**
     * 打卡规则名称
     */
    groupname: string;
    /**
     * 打卡类型。字符串，目前有：上班打卡，下班打卡，外出打卡
     */
    checkin_type: string;
    /**
     * 异常类型，字符串，包括：时间异常，地点异常，未打卡，wifi异常，非常用设备。如果有多个异常，以分号间隔
     */
    exception_type: string;
    /**
     * 打卡时间。Unix时间戳
     */
    checkin_time: string;
    /**
     * 打卡地点title
     */
    location_title: string;
    /**
     * 打卡地点详情
     */
    location_detail: string;
    /**
     *  打卡wifi名称
     */
    wifiname: string;
    /**
     * 打卡备注
     */
    notes: string;
    /**
     * 打卡的MAC地址/bssid
     */
    wifimac: string;
    /**
     * 打卡的附件media_id，可使用media/get获取附件
     */
    mediaids: string;
  }[];
}

/**
 * 请求参数_获取打卡规则
 */
export interface GetCheckInOptionRequest {
  /**
   * 需要获取规则的日期当天0点的Unix时间戳
   */
  datetime: number;
  /**
   * 需要获取打卡规则的用户列表
   */
  useridlist: string[];
}

/**
 * 返回结果_获取打卡规则
 */
export interface GetCheckInOptionResult extends BaseResult {
  info: {
    userid: string;
    group: {
      /**
       * 打卡规则类型。1：固定时间上下班；2：按班次上下班；3：自由上下班 。
       */
      grouptype: number;
      /**
       * 	打卡规则id
       */
      groupid: number;
      /**
       * 打卡时间
       */
      checkindate: {
        /**
         * 工作日。若为固定时间上下班或自由上下班，则1到7分别表示星期一到星期日；若为按班次上下班，则表示拉取班次的日期。
         */
        workdays: number[];
        checkintime: {
          /**
           * 上班时间，表示为距离当天0点的秒数。
           */
          work_sec: number;
          /**
           * 下班时间，表示为距离当天0点的秒数。
           */
          off_work_sec: number;
          /**
           * 上班提醒时间，表示为距离当天0点的秒数。
           */
          remind_work_sec: number;
          /**
           * 下班提醒时间，表示为距离当天0点的秒数。
           */
          remind_off_work_sec: number;
        }[];
        /**
         * 弹性时间（毫秒）
         */
        flex_time: number;
        /**
         * 下班不需要打卡
         */
        noneed_offwork: boolean;
        /**
         * 打卡时间限制（毫秒）
         */
        limit_aheadtime: number;
      }[];
      /**
       * 特殊日期
       */
      spe_workdays: {
        /**
         * 特殊日期具体时间
         */
        timestamp: number;
        /**
         * 特殊日期备注
         */
        notes: string;
        checkintime: {
          /**
           * 上班时间，表示为距离当天0点的秒数。
           */
          work_sec: number;
          /**
           * 下班时间，表示为距离当天0点的秒数。
           */
          off_work_sec: number;
          /**
           * 上班提醒时间，表示为距离当天0点的秒数。
           */
          remind_work_sec: number;
          /**
           * 下班提醒时间，表示为距离当天0点的秒数。
           */
          remind_off_work_sec: number;
        }[];
      }[];
      /**
       * 特殊日期
       */
      spe_offdays: {
        /**
         * 特殊日期具体时间
         */
        timestamp: number;
        /**
         * 特殊日期备注
         */
        notes: string;
        checkintime: {}[];
      }[];
      /**
       * 是否同步法定节假日
       */
      sync_holidays: boolean;
      /**
       * 打卡规则名称
       */
      groupname: string;
      /**
       * 是否打卡必须拍照
       */
      need_photo: true;
      /**
       * WiFi打卡地点信息
       */
      wifimac_infos: {
        /**
         * WiFi打卡地点名称
         */
        wifiname: string;
        /**
         * WiFi打卡地点MAC地址/bssid
         */
        wifimac: string;
      }[];
      /**
       * 是否备注时允许上传本地图片
       */
      note_can_use_local_pic: boolean;
      /**
       * 是否非工作日允许打卡
       */
      allow_checkin_offworkday: true;
      /**
       * 是否允许异常打卡时提交申请
       */
      allow_apply_offworkday: true;
      /**
       * 位置打卡地点信息
       */
      loc_infos: {
        /**
         * 位置打卡地点纬度
         */
        lat: number;
        /**
         * 位置打卡地点经度
         */
        lng: number;
        /**
         * 位置打卡地点名称
         */
        loc_title: string;
        /**
         * 位置打卡地点详情
         */
        loc_detail: string;
        /**
         * 允许打卡范围（米）
         */
        distance: number;
      }[];
    };
  };
}
