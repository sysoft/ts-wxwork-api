import { Http } from '../http';
import {
  CreateTagRequest,
  CreateTagResult,
  UpdateTagRequest,
  GetTagUserResult,
  AddTagUsersRequest,
  AddTagUsersResult,
  DelTagUsersRequest,
  DelTagUsersResult,
  GetTagListResult,
} from '../interfaces/address/tag';

export class TagApi {
  constructor(private http: Http) {}

  /**
   * 创建标签
   * 参考文档 https://work.weixin.qq.com/api/doc#90000/90135/90210
   * @param tag 标签
   */
  createTag(tag: CreateTagRequest): Promise<CreateTagResult> {
    return this.http.post(`/cgi-bin/tag/create`, tag);
  }

  /**
   * 更新标签名字
   * 参考文档 https://work.weixin.qq.com/api/doc#90000/90135/90211
   * @param tag 标签
   */
  updateTag(tag: UpdateTagRequest): Promise<BaseResult> {
    return this.http.post(`/cgi-bin/tag/update`, tag);
  }

  /**
   * 删除标签
   * 参考文档 https://work.weixin.qq.com/api/doc#90000/90135/90212
   * @param tagId 标签ID
   */
  deleteTag(tagId: number): Promise<BaseResult> {
    return this.http.get(`/cgi-bin/tag/delete?tagid=${tagId}`);
  }

  /**
   * 获取标签成员
   * 参考文档 https://work.weixin.qq.com/api/doc#90000/90135/90213
   * @param tagId 标签ID
   */
  getTagUser(tagId: number): Promise<GetTagUserResult> {
    return this.http.get(`/cgi-bin/tag/get?tagid=${tagId}`);
  }

  /**
   * 增加标签成员
   * 参考文档 https://work.weixin.qq.com/api/doc#90000/90135/90214
   * @param tagUserOrDept 要增加的标签成员或部门
   */
  addTagUsers(tagUserOrDept: AddTagUsersRequest): Promise<AddTagUsersResult> {
    return this.http.post(`/cgi-bin/tag/addtagusers`, tagUserOrDept);
  }

  /**
   * 删除标签成员
   * 参考文档 https://work.weixin.qq.com/api/doc#90000/90135/90215
   * @param tagUserOrDept 要删除的标签成员或部门
   */
  delTagUsers(tagUserOrDept: DelTagUsersRequest): Promise<DelTagUsersResult> {
    return this.http.post(`/cgi-bin/tag/addtagusers`, tagUserOrDept);
  }

  /**
   * 获取标签列表
   * 参考文档 https://work.weixin.qq.com/api/doc#90000/90135/90216
   *
   */
  getTagList(): Promise<GetTagListResult> {
    return this.http.get(`/cgi-bin/tag/list`);
  }
}
