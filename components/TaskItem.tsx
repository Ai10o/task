import React, { useRef, useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Modal, Animated } from 'react-native';
import styles from '../styles';
import { StyleSheet } from 'react-native';

export interface Task {
    id: string;
    title: string;
    description: string;
  }

  const TaskItem = ({ task, onDelete, onEdit }: { task: Task; onDelete: (taskId: string) => void; onEdit: (task: Task) => void }) => {
    const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);
    const handleDeleteConfirm = () => {
      onDelete(task.id);
      setDeleteModalVisible(false);
    };
    const handleEdit = () => {
      onEdit(task);
    };
  
    return (
      <View style={styles.taskItem}>
        <Text style={styles.taskTitle}>{task.title}</Text>
        <Text style={styles.taskDescription}>{task.description}</Text>
        <TouchableOpacity onPress={() => setDeleteModalVisible(true)} style={styles.deleteButton}>
          <Text style={styles.deleteButtonText}>X</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleEdit} style={styles.editButton}>
          <Text style={styles.deleteButtonText}>E</Text>
        </TouchableOpacity>
  
        <Modal
          visible={isDeleteModalVisible}
          transparent={true}
          animationType="fade"
          onRequestClose={() => setDeleteModalVisible(false)}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Удалить эту задачу?</Text>
              <View style={styles.modalButtons}>
                <TouchableOpacity
                  style={[styles.button]}
                  onPress={() => setDeleteModalVisible(false)}
                >
                  <Text style={styles.buttonText}>Отмена</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.button]}
                  onPress={handleDeleteConfirm}
                >
                  <Text style={styles.buttonText}>Удалить</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  };
  
  export default TaskItem;

 