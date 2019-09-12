import React, { Component } from 'react';
import Modal from 'react-modal';
import TodoItem from './TodoItem';
import ItemAddComponent from './ItemAddComponent';
import api from './api';

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      addModal: false,
      todos: []
    };
  }

  componentDidMount = () => {
    // eslint-disable-next-line import/no-named-as-default-member
    api.getAllTodo().then((todos) => {
      this.setState({
        todos: todos.data.data
      });
    });
  };

  openAddModal = () => {
    this.setState({
      addModal: true
    });
  };

  closeAddModal = () => {
    this.setState({
      addModal: false
    });
  };

  deleteItem = (_id) => {
    // eslint-disable-next-line import/no-named-as-default-member
    api.deleteTodoById(_id).then(window.location.reload());
  };

  render() {
    const { todos, addModal } = this.state;

    return (
      <div className="todoList">
        <Modal
          modalClassName="addModal"
          isOpen={addModal}
          onRequestClose={this.closeAddModal}
        >
          <ItemAddComponent
            className="itemAdd"
            onCancel={this.closeAddModal}
            add={this.handleOnAddItem}
          />
        </Modal>

        <p>To do list</p>
        <table className="table">
          <tbody>
            {todos.map((post, index) => (
              <TodoItem
                name={post.name}
                _id={post._id}
                key={post._id}
                arrayId={index}
                handleDelete={this.deleteItem}
              />
            ))}
          </tbody>
        </table>
        <br />
        <button type="button" onClick={this.openAddModal} className="addButton">
          Add new
        </button>
      </div>
    );
  }
}

export default TodoList;
