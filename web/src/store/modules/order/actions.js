export function orderRequest(data) {
  return {
    type: '@order/ORDER_REQUEST',
    data,
  };
}
export function orderSuccess(data) {
  return {
    type: '@order/ORDER_SUCCESS',
    data,
  };
}
