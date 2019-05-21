import * as request from 'request-promise';
import * as Url from 'url';

export class Http {
  constructor(private getAccessToken?: () => Promise<string>) {}
  async get(url: string, options?: request.OptionsWithUrl): Promise<any> {
    return this.request({
      ...options,
      method: 'GET',
      url,
    });
  }

  async post(
    url: string,
    data?: any,
    options?: Partial<request.OptionsWithUrl>,
  ): Promise<any> {
    const _options: Partial<request.OptionsWithUrl> = {
      headers: {
        'Content-Type': 'application/json',
      },
      ...options,
    };
    const params = {
      ..._options,
      method: 'POST',
      url,
    };
    if (data && typeof data !== 'string') {
      params.body = JSON.stringify(data);
    }
    return this.request(params);
  }

  async request(options: request.OptionsWithUrl): Promise<any> {
    const url = Url.parse(options.url as string, true);
    if (!url.pathname.startsWith('/cgi-bin/gettoken')) {
      if (!this.getAccessToken) {
        throw new Error(`缺少获取AccessToken方法`);
      }
      if (!url.query.access_token) {
        //获取access_token
        url.query.access_token = await this.getAccessToken();
        options.url = Url.format(url);
      }
    }
    return await request(options);
  }
}
