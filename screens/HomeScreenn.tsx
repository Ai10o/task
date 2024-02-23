import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles';
import TaskList from '../components/TaskList';
import AddTaskModal from '../components/AddTaskModal';
import { Task } from '../components/TaskItem'; // Предполагается, что интерфейс Task экспортируется из TaskItem



const HomeScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [tasks, setTasks] = useState<Task[]>([]); // Добавлено состояние для задач

  const handleAddTask = (newTask: Task) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Задачи</Text>
      </View>
      <TaskList tasks={tasks} />
      <TouchableOpacity style={styles.addButton} onPress={() => setModalVisible(true)}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
      <AddTaskModal modalVisible={modalVisible} setModalVisible={setModalVisible} onAddTask={handleAddTask} />
    </View>
  );
};

export default HomeScreen;
