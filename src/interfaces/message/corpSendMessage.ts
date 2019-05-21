import {
  TextMessage,
  ImageMessage,
  VoiceMessage,
  VideoMessage,
  FileMessage,
  NewsMessage,
  MapNewsMessage,
  MarkdownMessage,
  MiniprogramNoticeMessage,
} from './commonMessage';
/**
 * 返回结果_互联网企业应用推送消息返回
 */
export interface CorpSendMessageResult extends BaseResult {
  /**
   * 无效的接收人
   */
  invaliduser: string[];
  /**
   * 无效的接收部门
   */
  invalidparty: string[];
  /**
   * 无效的接收标签
   */
  invalidtag: string[];
}

/**
 * /**
 * 请求参数_企业推送消息基础属性
 */

export interface BaseSendCorpMsg {
  /**
   * 成员ID列表（消息接收者，最多支持1000个）。每个元素的格式为： corpid/userid，其中，corpid为该互联成员所属的企业，userid为该互联成员所属企业中的帐号。如果是本企业的成员，则直接传userid即可
   */
  touser?: string[];
  /**
   * 部门ID列表，最多支持100个。partyid在互联圈子内唯一。每个元素都是字符串类型，格式为：linked_id/party_id，其中linked_id是互联id，party_id是在互联圈子中的部门id。如果是本企业的部门，则直接传party_id即可。
   */
  toparty?: string[];
  /**
   * 本企业的标签ID列表，最多支持100个。
   */
  totag?: string[];
  /**
   * 1表示发送给应用可见范围内的所有人（包括互联企业的成员），默认为0
   */
  toall?: number;
  /**
   * 消息类型，此时固定为：text
   */
  msgtype: string;
  /**
   * 企业应用的id，整型。可在应用的设置页面查看
   */
  agentid: number;
}

/**
 * 请求参数_文本消息
 */
export interface CorpTextMsgRequest extends BaseSendCorpMsg, TextMessage {
  /**
   * 表示是否是保密消息，0表示否，1表示是，默认0
   */
  safe?: number;
}

/**
 * 请求参数_图片消息
 */
export interface CorpImageMsgRequest extends BaseSendCorpMsg, ImageMessage {
  /**
   * 表示是否是保密消息，0表示否，1表示是，默认0
   */
  safe?: number;
}

/**
 * 请求参数_语音消息
 */
export interface CorpVoiceMsgRequest extends BaseSendCorpMsg, VoiceMessage {}

/**
 * 请求参数_视频消息
 */
export interface CorpVideoMsgRequest extends BaseSendCorpMsg, VideoMessage {
  /**
   * 表示是否是保密消息，0表示否，1表示是，默认0
   */
  safe?: number;
}

/**
 * 请求参数_文件消息
 */
export interface CorpFileMsgRequest extends BaseSendCorpMsg, FileMessage {
  /**
   * 表示是否是保密消息，0表示否，1表示是，默认0
   */
  safe?: number;
}

/**
 * 请求参数_文本卡片消息
 */
export interface CorpTextCardMsgRequest extends BaseSendCorpMsg, FileMessage {}

/**
 * 请求参数_(news)图文消息
 */
export interface CorpNewsMsgeRequest extends BaseSendCorpMsg, NewsMessage {}

/**
 * 请求参数_(mpnews)图文消息
 */
export interface CorpMapNewsMsgRequest extends BaseSendCorpMsg, MapNewsMessage {
  /**
   * 表示是否是保密消息，0表示可对外分享，1表示不能分享且内容显示水印，2表示仅限在企业内分享，默认为0；注意仅mpnews类型的消息支持safe值为2，其他消息类型不支持
   */
  safe: number;
}

/**
 * 请求参数_markdown消息
 */
export interface CorpMarkdownMsgRequest
  extends BaseSendCorpMsg,
    MarkdownMessage {}

/**
 * 请求参数_小程序通知消息
 */
export interface CorpMiniprogramNoticeMsgRequest
  extends MiniprogramNoticeMessage {
  /**
   * 成员ID列表（消息接收者，多个接收者用‘|’分隔，最多支持1000个）。特殊情况：指定为@all，则向该企业应用的全部成员发送
   */
  touser?: string[];
  /**
   * 部门ID列表，多个接收者用‘|’分隔，最多支持100个。当touser为@all时忽略本参数
   */
  toparty?: string[];
  /**
   * 标签ID列表，多个接收者用‘|’分隔，最多支持100个。当touser为@all时忽略本参数
   */
  totag?: string[];
  /**
   * 消息类型
   * 目前支持的消息类型：文本(text)、图片(image)、语音(voice)、视频(video)、文件(file)、文本卡片(textcard)、图文(news、mpnews)、markdown(markdown)
   */
  msgtype: string;
}
