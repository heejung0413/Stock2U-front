import { getErrorMessage } from '@/api/helper';
import { printErrorLog, printResponseLog } from '@/utils/log';

export function logResponse(response) {
  const { config, data } = response;

  printResponseLog({
    method: config?.method,
    endPoint: config?.url,
    responseObj: data?.data ?? data,
  });

  return response;
}

export function unwrapResponse(response) {
  return response.data?.data ?? response.data;
}

export function logError(e) {
  const url = e.config?.url;
  const method = e.config?.method;

  const errorMessage = getErrorMessage(e);

  printErrorLog({
    method,
    endPoint: url,
    errorMessage,
    errorObj: e,
  });

  return Promise.reject(e);
}

export function processError(e) {
  if (e.status === 401 || e.response?.status === 401) {
    // TODO: 에러 없이 로그인 페이지로 리디렉션
    // return;
  }
  return Promise.reject(e);
}
