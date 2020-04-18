// outsource dependencies

// local dependencies
import { TYPES } from '../constans/types';

const initialState = {
  data: null,
  error: false,
  loading: false,
};

export const selector = (state) => state.app;

const app = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.START_LOADING:
      return {...state, loading: true};

    case TYPES.FINISH_LOADING:
      return {...state, loading: false};

    case TYPES.CALL_SUCCESS: {
      const { data } = action;

      return {...state, data};
    }

    default:
      return state;
  }
};

export default app;
