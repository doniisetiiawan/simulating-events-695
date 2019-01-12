import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { isFirstRender } from '@utils/frontend';

import styles from './Todo.scss';

class Todo extends Component {
  componentDidMount() {
    const { fetchTodo } = this.props;

    fetchTodo();
  }

  render() {
    const { todo } = this.props;

    if (isFirstRender(todo)) {
      return null;
    }

    return (
      <div>
        <div className={styles.Todo}>
          <ol>
            {todo.map((item, key) => <li key={key}>{item.title}</li>)}
          </ol>
        </div>
      </div>
    );
  }
}

Todo.propTypes = {
  fetchTodo: PropTypes.func,
  todo: PropTypes.array,
};

export default Todo;
