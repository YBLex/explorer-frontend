import environment from '../config/environment';
import { fetchStruct } from '../utils/fetchStruct';
import { GET_UNCONFIRMED_TRANSACTIONS_STRUCT } from '../constants/struct.types';

export class UnconfirmedTransactionsService {
  static get apiUrl(): string {
    return `${environment.apiUrl}`;
  }

  static getUnconfirmedTokensList(
    dispatch: any,
    { limit, offset, sortBy, sortDirection }: any
  ): any {
    return fetchStruct(
      dispatch,
      GET_UNCONFIRMED_TRANSACTIONS_STRUCT,
      'get',
      `${UnconfirmedTransactionsService.apiUrl}/transactions/unconfirmed`,
      {
        params: {
          limit,
          offset,
          sortBy: sortBy || 'size',
          sortDirection: sortDirection || 'desc',
        },
      }
    );
  }
}
