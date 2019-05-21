/**
 * 公共文本消息
 */
export interface TextMessage {
  text: {
    /**
     * 消息内容，最长不超过2048个字节，超过将截断
     */
    content: string;
  };
}

/**
 * 公共图片消息
 */
export interface ImageMessage {
  image: {
    /**
     * 图片媒体文件id，可以调用上传临时素材接口获取
     */
    media_id: string;
  };
}

/**
 * 公共语音消息
 */
export interface VoiceMessage {
  voice: {
    /**
     * 语音文件id，可以调用上传临时素材接口获取
     */
    media_id: string;
  };
}

/**
 * 公共视频消息
 */
export interface VideoMessage {
  video: {
    /**
     * 视频媒体文件id，可以调用上传临时素材接口获取
     */
    media_id: string;
    /**
     * 视频消息的标题，不超过128个字节，超过会自动截断
     */
    title?: string;
    /**
     * 视频消息的描述，不超过512个字节，超过会自动截断
     */
    description?: string;
  };
}

/**
 * 公共文件消息
 */
export interface FileMessage {
  file: {
    /**
     * 文件id，可以调用上传临时素材接口获取
     */
    media_id: string;
  };
}

/**
 * 公共文本卡片消息
 */
export interface TextCardMessage {
  textcard: {
    /**
     * 标题，不超过128个字节，超过会自动截断
     */
    title: string;
    /**
     * 描述，不超过512个字节，超过会自动截断
     */
    description: string;
    /**
     * 	点击后跳转的链接。
     */
    url: string;
    /**
     * 钮文字。 默认为“详情”， 不超过4个文字，超过自动截断。
     */
    btntxt?: string;
  };
}

/**
 * 公共(news)图文消息
 */
export interface NewsMessage {
  news: {
    /**
     * 图文消息，一个图文消息支持1到8条图文
     */
    articles: {
      /**
       * 标题，不超过128个字节，超过会自动截断
       */
      title: string;
      /**
       * 描述，不超过512个字节，超过会自动截断
       */
      description?: string;
      /**
       * 点击后跳转的链接。
       */
      url: string;
      /**
       * 图文消息的图片链接，支持JPG、PNG格式，较好的效果为大图 1068*455，小图150*150。
       */
      picurl?: string;
    }[];
  };
}

/**
 * 公共(mpnews)图文消息
 */
export interface MapNewsMessage {
  mpnews: {
    /**
     * 图文消息，一个图文消息支持1到8条图文
     */
    articles: {
      /**
       * 标题，不超过128个字节，超过会自动截断
       */
      title: string;
      /**
       * 图文消息缩略图的media_id, 可以通过素材管理接口获得。此处thumb_media_id即上传接口返回的media_id
       */
      thumb_media_id: number;
      /**
       * 图文消息的作者，不超过64个字节
       */
      author?: string;
      /**
       * 图文消息点击“阅读原文”之后的页面链接
       */
      content_source_url?: string;
      /**
       * 图文消息的内容，支持html标签，不超过666 K个字节
       */
      content: string;
      /**
       * 图文消息的描述，不超过512个字节，超过会自动截断
       */
      digest?: string;
    }[];
  };
}

/**
 * 公共markdown消息
 */
export interface MarkdownMessage {
  markdown: {
    /**
     * markdown内容，最长不超过2048个字节，必须是utf8编码
     */
    content: string;
  };
}

/**
 * 公共小程序通知消息
 */
export interface MiniprogramNoticeMessage {
  miniprogram_notice: {
    /**
     * 小程序appid，必须是与当前小程序应用关联的小程序
     */
    appid: string;
    /**
     * 点击消息卡片后的小程序页面，仅限本小程序内的页面。该字段不填则消息点击后不跳转。
     */
    page?: string;
    /**
     * 消息标题，长度限制4-12个汉字
     */
    title: string;
    /**
     * 消息描述，长度限制4-12个汉字
     */
    description?: string;
    /**
     * 是否放大第一个content_item
     */
    emphasis_first_item?: boolean;
    /**
     * 消息内容键值对，最多允许10个item
     */
    content_item?: {
      /**
       * 长度10个汉字以内
       */
      key: string;
      /**
       * 长度30个汉字以内
       */
      value: string;
    }[];
  };
}
