/**
 * 请求参数_创建菜单
 */
export interface CreateMenuRequest {
  button: {
    /**
     * 菜单的响应动作类型
     */
    type: string;
    /**
     * 菜单的名字。不能为空，主菜单不能超过16字节，子菜单不能超过40字节。
     */
    name: string;
    /**
     * 菜单KEY值，用于消息接口推送，不超过128字节(click等点击类型必须)
     */
    key?: string;
    /**
     * 网页链接，成员点击菜单可打开链接，不超过1024字节。为了提高安全性，建议使用https的url
     * view类型必须
     */
    url?: string;
    sub_button?: {
      type: string;
      name: string;
      key?: string;
      url?: string;
      sub_button?: any;
    }[];
  }[];
}
