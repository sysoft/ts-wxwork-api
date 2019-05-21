import {
  TextMessage,
  ImageMessage,
  VoiceMessage,
  VideoMessage,
  FileMessage,
  TextCardMessage,
  NewsMessage,
  MapNewsMessage,
  MarkdownMessage,
  MiniprogramNoticeMessage,
} from './commonMessage';
/**
 * 返回结果_发送应用消息返回
 */
export interface SendMessageResult extends BaseResult {
  /**
   * 无效的接收人
   */
  invaliduser: string;
  /**
   * 无效的接收部门
   */
  invalidparty: string;
  /**
   * 无效的接收标签
   */
  invalidtag: string;
}

/**
 * 发送应用基础消息
 */
export interface BasicSendMsg {
  /**
   * 成员ID列表（消息接收者，多个接收者用‘|’分隔，最多支持1000个）。特殊情况：指定为@all，则向该企业应用的全部成员发送
   */
  touser?: string;
  /**
   * 部门ID列表，多个接收者用‘|’分隔，最多支持100个。当touser为@all时忽略本参数
   */
  toparty?: string;
  /**
   * 标签ID列表，多个接收者用‘|’分隔，最多支持100个。当touser为@all时忽略本参数
   */
  totag?: string;
  /**
   * 消息类型
   * 目前支持的消息类型：文本(text)、图片(image)、语音(voice)、视频(video)、文件(file)、文本卡片(textcard)、图文(news、mpnews)、markdown(markdown)
   */
  msgtype: string;
  /**
   * 企业应用的id，整型。企业内部开发，可在应用的设置页面查看；第三方服务商，可通过接口 获取企业授权信息 获取该参数值
   */
  agentid: number;
}

/**
 * 请求参数_文本消息
 */
export interface TextMsgRequest extends BasicSendMsg, TextMessage {
  /**
   * 表示是否是保密消息，0表示否，1表示是，默认0
   */
  safe: number;
}

/**
 * 请求参数_图片消息
 */
export interface ImageMsgRequest extends BasicSendMsg, ImageMessage {
  /**
   * 表示是否是保密消息，0表示否，1表示是，默认0
   */
  safe: number;
}

/**
 * 请求参数_语音消息
 */
export interface VoiceMsgRequest extends BasicSendMsg, VoiceMessage {}

/**
 * 请求参数_视频消息
 */
export interface VideoMessageRequest extends BasicSendMsg, VideoMessage {
  /**
   * 表示是否是保密消息，0表示否，1表示是，默认0
   */
  safe: number;
}

/**
 * 请求参数_文件消息
 */
export interface FileMsgRequest extends BasicSendMsg, FileMessage {
  /**
   * 表示是否是保密消息，0表示否，1表示是，默认0
   */
  safe: number;
}

/**
 * 请求参数_文本卡片消息
 */
export interface TextCardMsgRequest extends BasicSendMsg, TextCardMessage {}

/**
 * 请求参数_(news)图文消息
 */
export interface NewsMsgRequest extends BasicSendMsg, NewsMessage {}

/**
 * 请求参数_(mpnews)图文消息
 */
export interface MapNewsMsgRequest extends BasicSendMsg, MapNewsMessage {
  /**
   * 表示是否是保密消息，0表示可对外分享，1表示不能分享且内容显示水印，2表示仅限在企业内分享，默认为0；
   * 注意仅mpnews类型的消息支持safe值为2，其他消息类型不支持
   */
  safe?: number;
}

/**
 * 请求参数_markdown消息
 */
export interface MarkdownMsgRequest extends BasicSendMsg, MarkdownMessage {}

/**
 * 请求参数_小程序通知消息
 */
export interface MiniprogramNoticeMsgRequest extends MiniprogramNoticeMessage {
  /**
   * 成员ID列表（消息接收者，多个接收者用‘|’分隔，最多支持1000个）。特殊情况：指定为@all，则向该企业应用的全部成员发送
   */
  touser?: string;
  /**
   * 部门ID列表，多个接收者用‘|’分隔，最多支持100个。当touser为@all时忽略本参数
   */
  toparty?: string;
  /**
   * 标签ID列表，多个接收者用‘|’分隔，最多支持100个。当touser为@all时忽略本参数
   */
  totag?: string;
  /**
   * 消息类型
   * 目前支持的消息类型：文本(text)、图片(image)、语音(voice)、视频(video)、文件(file)、文本卡片(textcard)、图文(news、mpnews)、markdown(markdown)
   */
  msgtype: string;
}
