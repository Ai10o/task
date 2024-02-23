import React from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from '../styles';
import TaskItem from './TaskItem';
import { Task } from './TaskItem'; // Предполагается, что интерфейс Task экспортируется из TaskItem

const TaskList = ({ tasks }: { tasks: Task[] }) => {
  return (
    <View style={styles.listContainer}>
      {tasks.length > 0 ? (
        <FlatList
          data={tasks}
          renderItem={({ item }) => <TaskItem task={item} />}
          keyExtractor={item => item.id}
        />
      ) : (
        <Text style={styles.noTasksText}>Нет задач, добавьте новую!</Text>
      )}
    </View>
  );
};

export default TaskList;