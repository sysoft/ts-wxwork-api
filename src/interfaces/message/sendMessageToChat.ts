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
} from './commonMessage';

/**
 * 请求参数_创建群聊会话
 */
export interface CreateAppchatRequest {
  /**
   * 群聊名，最多50个utf8字符，超过将截断
   */
  name?: string;
  /**
   * 指定群主的id。如果不指定，系统会随机从userlist中选一人作为群主
   */
  owner?: string;
  /**
   * 群成员id列表。至少2人，至多500人
   */
  userlist: string[];
  /**
   * 群聊的唯一标志，不能与已有的群重复；字符串类型，最长32个字符。只允许字符0-9及字母a-zA-Z。如果不填，系统会随机生成群id
   */
  chatid?: string;
}

/**
 * 返回结果_创建群聊会话
 */
export interface CreateAppchatResult extends BaseResult {
  /**
   * 群聊的唯一标志
   */
  chatid: string;
}

/**
 * 请求参数_修改群聊会话
 */
export interface UpdateAppchatRequest {
  /**
   * 群聊id
   */
  chatid: string;
  /**
   * 群聊名，最多50个utf8字符，超过将截断
   */
  name?: string;
  /**
   * 新群主的id。若不需更新，请忽略此参数
   */
  owner?: string;
  /**
   * 添加成员的id列表
   */
  userlist?: string[];
  /**
   * 踢出成员的id列表
   */
  del_user_list?: string[];
}

/**
 * 返回结果_获取群聊会话
 */
export interface GetAppchatResult extends BaseResult {
  /**
   * 群聊信息
   */
  chat_info: {
    /**
     * 群聊唯一标志
     */
    chatid: string;
    /**
     * 群聊名
     */
    name: string;
    /**
     * 群主id
     */
    owner: string;
    /**
     * 群成员id列表
     */
    userlist: string[];
  };
}

/**
 * 基础应用推送详细
 */
export interface BaseAppChatMsg {
  /**
   * 群聊id
   */
  chatid: string;
  /**
   * 消息类型
   * 目前支持的消息类型：文本(text)、图片(image)、语音(voice)、视频(video)、文件(file)、文本卡片(textcard)、图文(news、mpnews)、markdown(markdown)
   */
  msgtype: string;
}

/**
 * 请求参数_文本消息
 */
export interface AppChatTextMsgRequest extends BaseAppChatMsg, TextMessage {
  /**
   * 表示是否是保密消息，0表示否，1表示是，默认0
   */
  safe?: number;
}

/**
 * 请求参数_图片消息
 */
export interface AppChatImageMsgRequest extends BaseAppChatMsg, ImageMessage {
  /**
   * 表示是否是保密消息，0表示否，1表示是，默认0
   */
  safe?: number;
}

/**
 * 请求参数_语音消息
 */
export interface AppChatVoiceMsgRequest extends BaseAppChatMsg, VoiceMessage {}

/**
 * 请求参数_视频消息
 */
export interface AppChatVideoMsgRequest extends BaseAppChatMsg, VideoMessage {
  /**
   * 表示是否是保密消息，0表示否，1表示是，默认0
   */
  safe?: number;
}

/**
 * 请求参数_文件消息
 */
export interface AppChatFileMsgRequest extends BaseAppChatMsg, FileMessage {
  /**
   * 表示是否是保密消息，0表示否，1表示是，默认0
   */
  safe?: number;
}

/**
 * 请求参数_文本卡片消息
 */
export interface AppChatTextCardMsgRequest
  extends BaseAppChatMsg,
    TextCardMessage {
  /**
   * 表示是否是保密消息，0表示否，1表示是，默认0
   */
  safe: number;
}

/**
 * 请求参数_(news)图文消息
 */
export interface AppChatNewsMsgRequest extends BaseAppChatMsg, NewsMessage {
  /**
   * 表示是否是保密消息，0表示否，1表示是，默认0
   */
  safe: number;
}

/**
 * 请求参数_(mpnews)图文消息
 */
export interface AppChatMapNewsMsgRequest
  extends BaseAppChatMsg,
    MapNewsMessage {
  /**
   * 表示是否是保密消息，0表示可对外分享，1表示不能分享且内容显示水印，2表示仅限在企业内分享，默认为0；
   * 注意仅mpnews类型的消息支持safe值为2，其他消息类型不支持
   */
  safe?: number;
}

/**
 * 请求参数_markdown消息
 */
export interface AppChatMarkdownMsgRequest
  extends BaseAppChatMsg,
    MarkdownMessage {}
