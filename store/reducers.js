import { ADD_TODO, TOGGLE_TODO } from './actions';

const initialState = {
  todos: [],
};

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.todo],
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.todoId ? { ...todo, done: !todo.done } : todo
        ),
      };
    default:
      return state;
  }
}
