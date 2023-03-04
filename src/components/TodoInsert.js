import './TodoInsert.scss';
import { FaPen } from 'react-icons/fa';

const TodoInsert = () => {
  return (
    <form className="TodoInsert">
      <input placeholder="다음의 할 일!" type="text" />
      <button type="submt">
        <FaPen />
      </button>
    </form>
  );
};

export default TodoInsert;
