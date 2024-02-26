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
  deleteButton: {
    borderRadius: 50,
    position: 'absolute',
    top: 10,
    backgroundColor: 'red',
    right: 0,
    width: 30, /* Ширина квадрата */
    height: 30, /* Высота квадрата */
  },
  deleteButtonText:{
    color: 'white',
    fontFamily: 'VAG World',
    textAlign: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    transform: [{ scaleX: 1.4 }],
    fontSize: 20,
  },
  taskItem: {
    paddingVertical: 20,

    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },  
  taskTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginRight: 70,
  },
  taskDescription: {
    fontSize: 14,
    color: 'black',
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
  noTasksText: {
    textAlign: 'center',
    top: 200,
    fontSize: 18,
    color: 'lightgrey',
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
    fontSize: 70, 
    textAlign: 'center',
    color: '#fff',
    lineHeight: 66,
    fontWeight: 'bold',
},
editButton: {
    borderRadius: 50,
    position: 'absolute',
    top: 10,
    backgroundColor: '#797979',
    right: 40,
    width: 30, /* Ширина квадрата */
    height: 30, /* Высота квадрата */
},
editButtonText: {
  fontSize: 70, 
  textAlign: 'center',
  color: '#fff',
  lineHeight: 66,
  fontWeight: 'bold',
},

  modalContent: {
    flex: 1,
    padding: 20,
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
  },
  button: {
    padding: 10,
    backgroundColor: '#797979',
    borderRadius: 5,
    marginTop: 5,
    marginBottom: -5,
    marginHorizontal: 20, // Добавить горизонтальные отступы для увеличения расстояния между кнопками
  },
  buttonText: {
    color: '#fff',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    color: 'black',
  },

});


export default styles;
