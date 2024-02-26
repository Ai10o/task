import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles';
import TaskList from '../components/TaskList';
import AddTaskModal from '../components/AddTaskModal';
import { Task } from '../components/TaskItem'; // Предполагается, что интерфейс Task экспортируется из TaskItem


const HomeScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [currentTask, setCurrentTask] = useState<Task | null>(null);  // Для хранения редактируемой задачи
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleAddOrEditTask = (task: Task) => {
    if (currentTask) {
      setTasks(tasks.map(t => (t.id === task.id ? task : t)));
    } else {
      setTasks([...tasks, task]);
    }
    setCurrentTask(null);
    setModalVisible(false);
  };

  const handleDeleteTask = (taskId: string) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const openEditModal = (task: Task) => {
    setCurrentTask(task);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Задачи</Text>
      </View>
      <TaskList
        tasks={tasks}
        onDeleteTask={handleDeleteTask}
        onEditTask={openEditModal}  // Передаем функцию для открытия модального окна редактирования
      />
      <TouchableOpacity style={styles.addButton} onPress={() => { setCurrentTask(null); setModalVisible(true); }}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
      <AddTaskModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        onAddOrEditTask={handleAddOrEditTask}
        currentTask={currentTask}  // Передаем текущую задачу для редактирования
      />
    </View>
  );
};

export default HomeScreen;