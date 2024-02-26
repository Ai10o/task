import React from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from '../styles';
import TaskItem from './TaskItem';
import { Task } from './TaskItem'; // Предполагается, что интерфейс Task экспортируется из TaskItem


interface TaskListProps {
    tasks: Task[];
    onDeleteTask: (taskId: string) => void;
    onEditTask: (task: Task) => void;  // Добавлен пропс для редактирования задачи
  }
  
  const TaskList = ({ tasks, onDeleteTask, onEditTask }: TaskListProps) => {
  
    return (
      <View style={styles.listContainer}>
        {tasks.length > 0 ? (
          <FlatList
            data={tasks}
            renderItem={({ item }) => (
              <TaskItem
                task={item}
                onDelete={onDeleteTask}
                onEdit={onEditTask}  // Передаем функцию редактирования в TaskItem
              />
            )}
            keyExtractor={item => item.id}
          />
        ) : (
          <Text style={styles.noTasksText}>Нет задач, добавьте новую!</Text>
        )}
      </View>
    );
  };
  
  export default TaskList;