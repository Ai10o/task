import React, { useState } from 'react';
import { Modal, View, TextInput, TouchableOpacity, Text } from 'react-native';
import styles from '../styles';
import { Task } from './TaskItem'; // Предполагается, что интерфейс Task экспортируется из TaskItem

const AddTaskModal = ({ modalVisible, setModalVisible, onAddTask }: { modalVisible: boolean, setModalVisible: Function, onAddTask: (task: Task) => void }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isInputValid, setIsInputValid] = useState(false); // Состояние для валидации ввода

  const handleCreate = () => {
    if (isInputValid) { // Проверяем, что ввод допустим перед созданием задачи
      const newTask: Task = { id: Date.now().toString(), title, description }; // Создание новой задачи
      onAddTask(newTask); // Вызов onAddTask с новой задачей
      setTitle('');
      setDescription('');
      setModalVisible(false);
      setIsInputValid(false); // Сброс валидации после создания задачи
    }
  };

  const handleCancel = () => {
    setTitle('');
    setDescription('');
    setIsInputValid(false);
    setModalVisible(false);
  };
  

  const handleNameChange = (text: string) => {
    setTitle(text);
    validateInput(text, description);
  };

  const handleDescriptionChange = (text: string) => {
    setDescription(text);
    validateInput(title, text);
  };

  const validateInput = (name: string, description: string) => {
    const isValid = name.trim().length > 0 && description.trim().length > 0; // 
    setIsInputValid(isValid);
  };

  const createButtonStyle = isInputValid ? styles.button : [styles.button, { backgroundColor: '#f2f2f2' }]; // Изменяем стиль кнопки в зависимости от валидации

  return (
    <Modal visible={modalVisible} animationType="slide">
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Добавление задачи</Text>
      </View>
      <View style={styles.modalContent}>
        <TextInput style={styles.input} placeholder="Название" maxLength={35} value={title} onChangeText={handleNameChange} />
        <TextInput style={styles.textArea} placeholder="Описание" maxLength={1000} multiline={true} value={description} onChangeText={handleDescriptionChange} />
        <View style={styles.modalButtons}>
            <TouchableOpacity style={styles.button} onPress={handleCancel}>
                <Text style={styles.buttonText}>Отмена</Text>
            </TouchableOpacity>
          <TouchableOpacity style={createButtonStyle} onPress={handleCreate} disabled={!isInputValid}>
            <Text style={styles.buttonText}>Создать</Text>
          </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default AddTaskModal;