/**
 * 返回结果_上传临时素材
 */
export interface UploadMediaResult extends BaseResult {
  /**
   *媒体文件类型，分别有图片（image）、语音（voice）、视频（video），普通文件(file)
   */
  type: string;
  /**
   * 媒体文件上传后获取的唯一标识，3天内有效
   */
  media_id: string;
  /**
   * 媒体文件上传时间戳
   */
  created_at: string;
}

/**
 * 上传图片
 */
export interface UploadimgMediaResult extends BaseResult {
  /**
   * 上传后得到的图片URL。永久有效
   */
  url: string;
}
