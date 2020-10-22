import React, { useState, useRef } from 'react';
import {ListWrapper,TodoListWrapper,EditZip,Edit,Del,Label,Check} from './styled.js';
import { ReactComponent as TrashSvg } from './images/trash.svg';
import { ReactComponent as EditSvg } from './images/edit.svg';
import styled  from 'styled-components';

const Checkbox = styled.input.attrs({
  type: 'checkbox'
  })`
  width: 0;
  height: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  bottom: 0;
  
  &:checked + div {
    background-color: red;
  }
  `;

function List({list, handleRemove, handleToggle, handleUpdateConfirm }) {
  const _input = useRef('');
  const [isEdit, setEdit] = useState(false);
  const handleUpdate = () => {
    setEdit(true);
    // const newMenu = prompt('메뉴를 바꿔바!', list.menu);
    // handleUpdateConfirm(list.id, newMenu);
  };
  const submit = (e) => {
    e.preventDefault();
    handleUpdateConfirm(list.id, _input.current.value);
    setEdit(false);
  }
  return (
    <>
      <ListWrapper done={list.done}  >
        <Label>
          {!isEdit && 
            <>
              <Checkbox
                checked={list.done}
                onChange={() => handleToggle(list.id)}
              />
              <Check/>
            </>
          }
          
          {isEdit ? (
            <form onSubmit={submit}>
              <input type="text" ref={_input} defaultValue={list.menu} />
              <button>save</button>
            </form>
          ) : (<h5>🍉 오늘의 메뉴는 '{list.menu}' 입니다</h5>)}
        </Label>
        {!isEdit && <EditZip>
          <Edit>
            <button onClick={handleUpdate.bind(null, list.id)}>
              <EditSvg width="20" height="20"/>
            </button>
          </Edit>
          <Del>
            <button onClick={handleRemove.bind(null, list.id)}>
              <TrashSvg width="20" height="20" />
            </button>
          </Del>
        </EditZip>}
      </ListWrapper>
    </>
  );
}


function TodoList({ listZip, handleRemove, handleToggle, handleUpdateConfirm }) {

  return (
    <>
      <TodoListWrapper>
        {listZip.map(list => (
          <List
            list={list}
            key={list.id}
            handleRemove={handleRemove}
            handleToggle={handleToggle}
            handleUpdateConfirm={handleUpdateConfirm}
          />
        ))}
      </TodoListWrapper>
    </>
  );
}
export default TodoList;
