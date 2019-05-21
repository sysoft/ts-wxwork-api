import { Http } from '../http';
import {
  BaseUserInfo,
  CreateUserRequest,
  UpdateUserRequest,
  BatchDeleteUserRequest,
  GetSimpleUserListResult,
  GetUserListResult,
  ConvertToOpenIdRequest,
  ConvertToOpenIdResult,
  BatchInviteRequest,
  BatchInviteResult,
} from '../interfaces/address/user';

export class UserApi {
  constructor(private http: Http) {}
  /**
   * 创建成员
   * 参考文档 https://work.weixin.qq.com/api/doc#90000/90135/90195
   * @param user 成员
   */
  createUser(user: CreateUserRequest): Promise<BaseResult> {
    return this.http.post(`/cgi-bin/user/create`, user);
  }

  /**
   * 读取成员
   * 参考文档 https://work.weixin.qq.com/api/doc#90000/90135/90196
   * @param userid 成员UserID。对应管理端的帐号，企业内必须唯一。不区分大小写，长度为1~64个字节
   */
  getUser(userid: string): Promise<BaseUserInfo> {
    return this.http.get(`/cgi-bin/user/get?userid=${userid}`);
  }

  /**
   * 更新成员
   * 参考文档 https://work.weixin.qq.com/api/doc#90000/90135/90197
   * @param user 成员
   */
  updateUser(user: UpdateUserRequest): Promise<BaseResult> {
    return this.http.post(`/cgi-bin/user/update`, user);
  }

  /**
   * 删除成员
   * 参考文档 https://work.weixin.qq.com/api/doc#90000/90135/90198
   * @param userid 成员UserID。对应管理端的帐号
   */
  deleteUser(userid: string): Promise<BaseResult> {
    return this.http.get(`/cgi-bin/user/delete?userid=${userid}`);
  }

  /**
   * 批量删除成员
   * 参考文档 https://work.weixin.qq.com/api/doc#90000/90135/90199
   * @param useridlist 成员UserID列表。对应管理端的帐号。最多支持200个。若存在无效UserID，直接返回错误
   */
  batchDeleteUser(useridlist: BatchDeleteUserRequest): Promise<BaseResult> {
    return this.http.post(`/cgi-bin/user/batchdelete`, useridlist);
  }

  /**
   * 获取部门成员
   * 参考文档 https://work.weixin.qq.com/api/doc#90000/90135/90200
   * @param department_id 获取的部门id
   * @param fetch_child 1/0：是否递归获取子部门下面的成员
   */
  getSimpleUserList(
    department_id: number,
    fetch_child: number,
  ): Promise<GetSimpleUserListResult> {
    return this.http.get(
      `/cgi-bin/user/simplelist?department_id=${department_id}&fetch_child=${fetch_child}`,
    );
  }

  /**
   * 获取部门成员详情
   * 参考文档 https://work.weixin.qq.com/api/doc#90000/90135/90201
   * @param department_id 获取的部门id
   * @param fetch_child 1/0：是否递归获取子部门下面的成员
   */
  getUserListResult(
    department_id: number,
    fetch_child: number,
  ): Promise<GetUserListResult> {
    return this.http.get(
      `/cgi-bin/user/list?department_id=${department_id}&fetch_child=${fetch_child}`,
    );
  }

  /**
   * userid转openid
   * 参考文档 https://work.weixin.qq.com/api/doc#90000/90135/90202
   * @param user 企业成员
   */
  covertToOpenId(user: ConvertToOpenIdRequest): Promise<ConvertToOpenIdResult> {
    return this.http.post(`/cgi-bin/user/convert_to_openid`, user);
  }

  /**
   * 二次验证
   * 参考文档 https://work.weixin.qq.com/api/doc#90000/90135/90203
   * @param userid 成员UserID。对应管理端的帐号
   */
  authsuccUser(userid: string): Promise<BaseResult> {
    return this.http.get(`cgi-bin/user/authsucc?userid=${userid}`);
  }

  /**
   * 邀请成员
   * 参考文档 https://work.weixin.qq.com/api/doc#90000/90135/90975
   * @param invite 邀请信息
   */
  batchInvite(invite: BatchInviteRequest): Promise<BatchInviteResult> {
    return this.http.post(`/cgi-bin/batch/invite`, invite);
  }
}
