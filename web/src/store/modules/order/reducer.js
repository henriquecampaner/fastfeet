import produce from 'immer';

const INITITAL_STATE = {
  order: null,
  product: null,
  deliveryman: {
    name: null,
    id: null,
  },
  recipient: {
    id: null,
    name: null,
  },
};

export default function order(state = INITITAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@order/ORDER_REQUEST': {
        break;
      }

      case '@order/ORDER_SUCCESS': {
        draft.order = action.data;
        draft.product = action.data.product;
        draft.recipient.id = action.data.recipient.id;
        draft.recipient.name = action.data.recipient.name;
        draft.deliveryman.name = action.data.deliveryman.name;
        draft.deliveryman.id = action.data.deliveryman.id;
        break;
      }
      default:
    }
  });
}
