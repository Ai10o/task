import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF', // Светлый фон для основного контента
    },
  header: {
    backgroundColor: '#F0F0F0', // Светлый фон для шапки
    padding: 20,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    color: '#000000', // Темный текст на светлом фоне
    fontWeight: 'bold',
  },
  listContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  taskItem: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  taskTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  taskDescription: {
    fontSize: 14,
    color: 'black',
  },
  noTasksText: {
    textAlign: 'center',
    marginTop: 50,
    fontSize: 18,
  },
  addButton: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#797979',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    fontSize: 24,
    color: '#fff',
  },
  modalContent: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 40, // Высота поля ввода
    marginVertical: 10, // Вертикальный отступ
    borderWidth: 1, // Толщина границы
    borderColor: '#cccccc', // Цвет границы
    padding: 10, // Внутренний отступ
    backgroundColor: '#ffffff', // Цвет фона
    color: '#000000', // Цвет текста
  },
  
  textArea: {
    height: 100, // Высота многострочного поля ввода
    marginVertical: 10, // Вертикальный отступ
    borderWidth: 1, // Толщина границы
    borderColor: '#cccccc', // Цвет границы
    padding: 10, // Внутренний отступ
    backgroundColor: '#ffffff', // Цвет фона
    color: '#000000', // Цвет текста
    textAlignVertical: 'top', // Выравнивание текста по верхнему краю
  },
  
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    padding: 10,
    backgroundColor: '#797979',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
  },
});

export default styles;
