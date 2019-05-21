import { Http } from '../http';
import {
  CreateDepartmentRequest,
  CreateDepartmentResult,
  getDepartmentList,
  UpdateDepartmentRequest,
} from '../interfaces/address/department';

export class DepartmentApi {
  constructor(private http: Http) {}

  /**
   * 创建部门
   * 参考文档 https://work.weixin.qq.com/api/doc#90000/90135/90205
   * @param department 部门
   */
  createDepartment(
    department: CreateDepartmentRequest,
  ): Promise<CreateDepartmentResult> {
    return this.http.post(`/cgi-bin/department/create`, department);
  }

  /**
   * 更新部门
   * 参考文档 https://work.weixin.qq.com/api/doc#90000/90135/90206
   * @param department 部门
   */
  updateDepartment(department: UpdateDepartmentRequest): Promise<BaseResult> {
    return this.http.post(`/cgi-bin/department/update`, department);
  }

  /**
   * 删除部门
   * 参考文档 https://work.weixin.qq.com/api/doc#90000/90135/90207
   * @param id 部门id。（注：不能删除根部门；不能删除含有子部门、成员的部门）
   */
  deleteDepartment(id: number): Promise<BaseResult> {
    return this.http.get(`/cgi-bin/department/delete?id=${id}`);
  }

  /**
   * 获取部门列表
   * @param id 部门id。获取指定部门及其下的子部门。 如果不填，默认获取全量组织架构
   */
  getDepartmentList(id: number): Promise<getDepartmentList> {
    return this.http.get(`/cgi-bin/department/list?id=${id}`);
  }
}
