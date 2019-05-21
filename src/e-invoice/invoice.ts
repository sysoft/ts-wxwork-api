import { Http } from '../http';
import {
  GetInvoiceInfoResult,
  GetInvoiceInfoRequest,
  UpdateInvoiceStatusRequest,
  BatchUpdateInvoiceStatusRequest,
  BatchGetInvoiceInfoRequest,
  BatchGetInvoiceInfoResult,
} from '../interfaces/e-invoice/invoice';

export class EInvoiceApi {
  constructor(private http: Http) {}

  /**
   * 查询电子发票
   * 参考文档 https://work.weixin.qq.com/api/doc#90000/90135/90284
   * @param value 发票
   */
  getInvoiceInfo(value: GetInvoiceInfoRequest): Promise<GetInvoiceInfoResult> {
    return this.http.post(`/cgi-bin/card/invoice/reimburse/getinvoiceinfo`);
  }

  /**
   * 更新发票状态
   * 参考文档 https://work.weixin.qq.com/api/doc#90000/90135/90285
   * @param data 发票
   */
  updateInvoiceStatus(data: UpdateInvoiceStatusRequest): Promise<BaseResult> {
    return this.http.post(
      `/cgi-bin/card/invoice/reimburse/updateinvoicestatus`,
    );
  }

  /**
   * 批量更新发票状态
   * 参考文档 https://work.weixin.qq.com/api/doc#90000/90135/90286
   * @param list 发票列表
   */
  batchUpdateInvoiceStatus(
    list: BatchUpdateInvoiceStatusRequest,
  ): Promise<BaseResult> {
    return this.http.post(
      `/cgi-bin/card/invoice/reimburse/updatestatusbatch`,
      list,
    );
  }

  /**
   * 批量查询电子发票
   * 参考文档 https://work.weixin.qq.com/api/doc#90000/90135/90287
   * @param list 发票列表
   */
  batchGetInvoiceInfo(
    list: BatchGetInvoiceInfoRequest,
  ): Promise<BatchGetInvoiceInfoResult> {
    return this.http.post(
      `/cgi-bin/card/invoice/reimburse/getinvoiceinfobatch`,
      list,
    );
  }
}
