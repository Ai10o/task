import React, { useState, useEffect } from 'react';
import { Modal, View, TextInput, TouchableOpacity, Text } from 'react-native';
import styles from '../styles';
import { Task } from './TaskItem';

interface AddTaskModalProps {
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
  onAddOrEditTask: (task: Task) => void;
  currentTask: Task | null;
}

const AddTaskModal = ({ modalVisible, setModalVisible, onAddOrEditTask, currentTask }: AddTaskModalProps) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isInputValid, setIsInputValid] = useState(false); 

useEffect(() => {
    if (currentTask && modalVisible) {
        setTitle(currentTask.title);
        setDescription(currentTask.description);
        setIsInputValid(true);
    } else if (!modalVisible) {
        setTitle('');
        setDescription('');
        setIsInputValid(false);
    }
}, [currentTask, modalVisible]);


  const handleSave = () => {
    if (isInputValid) {
      const taskToSave = { id: currentTask ? currentTask.id : Date.now().toString(), title, description };
      onAddOrEditTask(taskToSave);
      handleCancel();
    }
  };

  useEffect(() => {
    validateInput(title, description); // Вызываем функцию валидации при изменении title или description
  }, [title, description]);

  const validateInput = (title: string, description: string) => {
    setIsInputValid(title.trim().length > 0 && description.trim().length > 0);
  };
  const handleCancel = () => {
    if (!currentTask) {
        setTitle('');
        setDescription('');
    }
    setIsInputValid(false);
    setModalVisible(false);
};

  const saveButtonStyle = isInputValid ? styles.button : [styles.button, { backgroundColor: '#cccccc', opacity: 0.5 }];

  return (
    <Modal visible={modalVisible} animationType="slide" onRequestClose={() => setModalVisible(false)}>
        <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Добавить задачу</Text>
      </View>
      <View style={styles.modalContent}>
        <TextInput
          style={styles.input}
          placeholder="Название задачи"
          value={title}
          onChangeText={setTitle}
          maxLength={35}
        />
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Описание задачи"
          multiline
          value={description}
          onChangeText={setDescription}
          maxLength={1000} 
        />
        <View style={styles.modalButtons}>
        <TouchableOpacity style={styles.button} onPress={handleCancel}>
            <Text style={styles.buttonText}>Отмена</Text>
          </TouchableOpacity>
          <TouchableOpacity style={saveButtonStyle} onPress={handleSave} disabled={!isInputValid}>
            <Text style={styles.buttonText}>Сохранить</Text>
          </TouchableOpacity>
        </View>
      </View>
      </View>
    </Modal>
  );
};

export default AddTaskModal;
