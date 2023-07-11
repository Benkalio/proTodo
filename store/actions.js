export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

export function addTodo(todo) {
  return { type: ADD_TODO, todo };
}

export function toggleTodo(todoId) {
  return { type: TOGGLE_TODO, todoId };
}

export const TOGGLE_SMS_NOTIFICATION = 'TOGGLE_SMS_NOTIFICATION';
export const TOGGLE_PUSH_NOTIFICATION = 'TOGGLE_PUSH_NOTIFICATION';
export const TOGGLE_EMAIL_NOTIFICATION = 'TOGGLE_EMAIL_NOTIFICATION';

export function toggleSMSNotification(enabled) {
  return { type: TOGGLE_SMS_NOTIFICATION, enabled };
}

export function togglePushNotification(enabled) {
  return { type: TOGGLE_PUSH_NOTIFICATION, enabled };
}

export function toggleEmailNotification(enabled) {
  return { type: TOGGLE_EMAIL_NOTIFICATION, enabled };
}

