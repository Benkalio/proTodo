import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, toggleTodo } from '../store/actions';

function ToDoListScreen() {
  const [todoText, setTodoText] = useState('');
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const handleAddTodo = () => {
    if (todoText.trim()) {
      dispatch(addTodo({ id: Date.now(), text: todoText, done: false }));
      setTodoText('');
    }
  };

  const handleToggleTodo = (todoId) => {
    dispatch(toggleTodo(todoId));
  };

  return (
    <View>
      <TextInput
        placeholder="Enter a todo"
        value={todoText}
        onChangeText={(text) => setTodoText(text)}
      />
      <Button title="Add Todo" onPress={handleAddTodo} />
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text onPress={() => handleToggleTodo(item.id)}>
              {item.done ? '[DONE] ' : ''} {item.text}
            </Text>
          </View>
        )}
      />
    </View>
  );
}

export default ToDoListScreen;
