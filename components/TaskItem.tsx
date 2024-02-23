import React from 'react';
import { View, Text,  TouchableOpacity } from 'react-native';
import styles from '../styles';

export interface Task {
    id: string;
    title: string;
    description: string;
  }

  const TaskItem = ({ task, onDelete }: { task: Task; onDelete: (taskId: string) => void }) => {
    const handleDelete = () => {
      onDelete(task.id);
    };
  
    return (
      <View style={styles.taskItem}>
        <Text style={styles.taskTitle}>{task.title}</Text>
        <Text style={styles.taskDescription}>{task.description}</Text>
        <TouchableOpacity onPress={handleDelete} style={styles.deleteButton}>
          <Text style={styles.deleteButtonText}>X</Text>
        </TouchableOpacity>
      </View>
    );
  };

export default TaskItem;
