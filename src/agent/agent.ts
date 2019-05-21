import { Http } from '../http';
import {
  GetAgentDetailResult,
  GetAgentListResult,
  SetAgentRequest,
} from '../interfaces/agent/agent';

export class AgentApi {
  constructor(private http: Http) {}

  /**
   * 获取指定的应用详情
   * 参考文档 https://work.weixin.qq.com/api/doc#90000/90135/90227
   * @param agentid 应用id
   */
  getAgentDetail(agentid: string): Promise<GetAgentDetailResult> {
    return this.http.get(`/cgi-bin/agent/get?agentid=${agentid}`);
  }

  /**
   * 获取access_token对应的应用列表
   * 参考文档 https://work.weixin.qq.com/api/doc#90000/90135/90227
   */
  getAgentList(): Promise<GetAgentListResult> {
    return this.http.get(`/cgi-bin/agent/list`);
  }

  /**
   * 设置应用
   * 参考文档 https://work.weixin.qq.com/api/doc#90000/90135/90228
   * @param agent 应用
   */
  setAgent(agent: SetAgentRequest): Promise<BaseResult> {
    return this.http.post(`/cgi-bin/agent/set`, agent);
  }
}
