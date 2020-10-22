import React from 'react';
import {TodoFormWrapper} from './styled';

function TodoForm({ handleChange, handleCreate, menu }) {
  const handleEnter = (e) => {
    e.preventDefault();
    handleCreate();
  }
  return (
    //하나만 리턴하면 <> 안써두댐  
    <TodoFormWrapper>
      <form onSubmit={handleEnter}>
        <input
          type="text"
          name="menu"
          placeholder="메뉴를 적으세요"
          onChange={handleChange}
          value={menu}
        />
        <button type="submit">등록</button>
      </form>
    </TodoFormWrapper>
  );
}
export default TodoForm;
