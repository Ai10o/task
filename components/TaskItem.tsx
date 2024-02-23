import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles';

export interface Task {
    id: string;
    title: string;
    description: string;
  }

const TaskItem = ({ task }: { task: Task }) => {
  return (
    <View style={styles.taskItem}>
      <Text style={styles.taskTitle}>{task.title}</Text>
      <Text style={styles.taskDescription}>{task.description}</Text>
    </View>
  );
};

export default TaskItem;