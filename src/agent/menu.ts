import { Http } from '../http';
import { CreateMenuRequest } from '../interfaces/agent/menu';

export class MenuApi {
  constructor(private http: Http) {}

  /**
   * 创建菜单
   * 参考文档 https://work.weixin.qq.com/api/doc#90000/90135/90231
   * @param agentid 企业应用的id，整型。可在应用的设置页面查看
   * @param menu 菜单信息
   */
  createMenu(agentid: string, menu: CreateMenuRequest): Promise<BaseResult> {
    return this.http.post(`/cgi-bin/menu/create?agentid=${agentid}`, menu);
  }

  /**
   * 获取菜单
   * 参考文档 https://work.weixin.qq.com/api/doc#90000/90135/90232
   * @param agentid 企业应用的id，整型。可在应用的设置页面查看
   */
  getMenu(agentid: string): Promise<CreateMenuRequest> {
    return this.http.get(`/cgi-bin/menu/get?agentid=${agentid}`);
  }

  /**
   * 删除菜单
   * 参考文档 https://work.weixin.qq.com/api/doc#90000/90135/90233
   * @param agentid 企业应用的id，整型。可在应用的设置页面查看
   */
  deleteMenu(agentid: string): Promise<BaseResult> {
    return this.http.get(`/cgi-bin/menu/delete?agentid=${agentid}`);
  }
}
