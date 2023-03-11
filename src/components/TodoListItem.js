import { FaTrash, FaSquare, FaCheckSquare } from 'react-icons/fa';
import './TodoListItem.scss';
import React from 'react';
import cn from 'classnames';

const TodoListItem = ({ todo, onRemove, onToggle }) => {
  const { id, text, checked } = todo;

  return (
    <div className="TodoListItem">
      <div className={cn('checkbox', { checked })} onClick={() => onToggle(id)}>
        {checked ? <FaCheckSquare /> : <FaSquare />}
        <div className="text">{text}</div>
      </div>
      <div className="remove">
        <FaTrash onClick={() => onRemove(id)} />
      </div>
    </div>
  );
};

export default React.memo(TodoListItem);
