import type { User } from './types';

export interface UsersState {
  current?: User;
}

const initialState: UsersState = {};

export const usersReducer = (state = initialState, action: any): UsersState => {
  switch (action.type) {
    default:
      return state;
  }
};

export default usersReducer;
