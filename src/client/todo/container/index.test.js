/* eslint-disable react/jsx-filename-extension,no-shadow,comma-dangle */
import configureStore from 'redux-mock-store';
import { fetchTodo } from '../actions';

const mockInitialState = {
  todo: {
    list: [
      {
        id: 1,
        title: 'Go to the Gym',
      },
      {
        id: 2,
        title: 'Dentist Appointment',
      },
      {
        id: 3,
        title: 'Finish homework',
      },
    ],
  },
};

const mockStore = configureStore();
const store = mockStore(mockInitialState);

jest.mock('../actions', () => ({
  fetchTodo: jest.fn().mockReturnValue({ type: 'mock-FETCH_TODO_SUCCESS' }),
}));

describe('Todo Container', () => {
  beforeEach(() => {
    fetchTodo.mockClear();
    store.clearActions();
  });

  it('should dispatch fetchTodo', () => {
    store.dispatch(fetchTodo());
    const actions = store.getActions();
    expect(actions).toEqual([{ type: 'mock-FETCH_TODO_SUCCESS' }]);
  });
});
