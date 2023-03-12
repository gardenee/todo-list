import "./TodoInsert.scss";
import { FaPen } from "react-icons/fa";
import { useCallback, useState } from "react";

const TodoInsert = ({ onInsert }) => {
	const [value, setValue] = useState("");

	const onChange = useCallback(e => {
		setValue(e.target.value);
	}, []);

	const onSubmit = useCallback(
		e => {
			onInsert(value);
			setValue("");
			e.preventDefault();
		},
		[onInsert, value],
	);

	return (
		<form className="TodoInsert" onSubmit={onSubmit}>
			<input
				placeholder="다음의 할 일!"
				type="text"
				value={value}
				onChange={onChange}
			/>
			<button>
				<FaPen />
			</button>
		</form>
	);
};

export default TodoInsert;
