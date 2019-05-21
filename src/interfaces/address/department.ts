/**
 * 部门基础信息
 * 引用地方：获取部门列表
 */
export interface BaseDepartmentInfo {
  /**
   * 部门id，32位整型，指定时必须大于1。若不填该参数，将自动生成id
   */
  id: number;
  /**
   * 部门名称。长度限制为1~32个字符，字符不能包括\:?”<>｜
   */
  name: string;
  /**
   * 父部门id，32位整型
   */
  parentid?: number[];
  /**
   * 在父部门中的次序值。order值大的排序靠前。有效的值范围是[0, 2^32)
   */
  order?: number;
}

/**
 * 请求参数_创建部门
 */
export interface CreateDepartmentRequest {
  /**
   * 部门名称。长度限制为1~32个字符，字符不能包括\:?”<>｜
   */
  name: string;
  /**
   * 父部门id，32位整型
   */
  parentid: number[];
  /**
   * 在父部门中的次序值。order值大的排序靠前。有效的值范围是[0, 2^32)
   */
  order?: number;
  /**
   * 部门id，32位整型，指定时必须大于1。若不填该参数，将自动生成id
   */
  id?: number;
}

/**
 * 请求参数_更新部门
 */
export interface UpdateDepartmentRequest {
  /**
   * 部门id，32位整型，指定时必须大于1。若不填该参数，将自动生成id
   */
  id: number;
  /**
   * 部门名称。长度限制为1~32个字符，字符不能包括\:?”<>｜
   */
  name?: string;
  /**
   * 父部门id，32位整型
   */
  parentid?: number[];
  /**
   * 在父部门中的次序值。order值大的排序靠前。有效的值范围是[0, 2^32)
   */
  order?: number;
}

/**
 * 返回结果_创建部门
 */
export interface CreateDepartmentResult extends BaseResult {
  /**
   * 创建的部门id
   */
  id: number;
}

/**
 * 返回结果_获取部门列表
 */
export interface getDepartmentList extends BaseResult {
  /**
   * 部门列表数据。
   */
  department: BaseDepartmentInfo[];
}
