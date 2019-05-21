import { Http } from '../http';
import {
  UploadMediaResult,
  UploadimgMediaResult,
} from '../interfaces/media/media';
export class MediaApi {
  constructor(private http: Http) {}
  /**
   * 上传临时素材
   * 参考文档 https://work.weixin.qq.com/api/doc#90000/90135/90253
   * @param type 媒体文件类型，分别有图片（image）、语音（voice）、视频（video），普通文件（file）
   */
  uploadMedia(type: string): Promise<UploadMediaResult> {
    return this.http.post(`/cgi-bin/media/upload?type=${type}`);
  }

  /**
   * 上传图片
   * 参考文档 https://work.weixin.qq.com/api/doc#90000/90135/90256
   */
  uploadimgMedia(): Promise<UploadimgMediaResult> {
    return this.http.post(`/cgi-bin/media/uploadimg`);
  }

  /**
   * 获取临时素材
   * 参考文档 https://work.weixin.qq.com/api/doc#90000/90135/90254
   * @param media_id 媒体文件id
   */
  getMedia(media_id: string): Promise<BaseResult> {
    return this.http.post(`/cgi-bin/media/get?media_id=${media_id}`);
  }

  /**
   * 获取高清语音素材
   * 参考文档 https://work.weixin.qq.com/api/doc#90000/90135/90255
   * @param media_id 通过JSSDK的uploadVoice接口上传的语音文件id
   */
  getHighMedia(media_id: string): Promise<BaseResult> {
    return this.http.post(`/cgi-bin/media/get/jssdk?media_id=${media_id}`);
  }
}
