import React, { useState } from 'react';
import { Modal, View, TextInput, TouchableOpacity, Text } from 'react-native';
import styles from '../styles';
import { Task } from './TaskItem'; // Предполагается, что интерфейс Task экспортируется из TaskItem

const AddTaskModal = ({ modalVisible, setModalVisible, onAddTask }: { modalVisible: boolean, setModalVisible: Function, onAddTask: (task: Task) => void }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleCreate = () => {
    const newTask: Task = { id: Date.now().toString(), title, description }; // Создание новой задачи
    onAddTask(newTask); // Вызов onAddTask с новой задачей
    setTitle('');
    setDescription('');
    setModalVisible(false);
  };

  return (
    <Modal visible={modalVisible} animationType="slide">
      <View style={styles.modalContent}>
        <TextInput style={styles.input} placeholder="Название" maxLength={35} value={title} onChangeText={setTitle} />
        <TextInput style={styles.textArea} placeholder="Описание" maxLength={1000} multiline={true} value={description} onChangeText={setDescription} />
        <View style={styles.modalButtons}>
          <TouchableOpacity style={styles.button} onPress={() => setModalVisible(false)}>
            <Text style={styles.buttonText}>Отмена</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleCreate}>
            <Text style={styles.buttonText}>Создать</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default AddTaskModal;
