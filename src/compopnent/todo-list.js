import React, { useState } from "react";
import styled, { css } from "styled-components";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import CreateIcon from "@material-ui/icons/Create";
import SaveAltIcon from "@material-ui/icons/SaveAlt";

const ListWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  margin-top: 1.4rem;
  font-size: 2rem;
  border: 7px solid #49736f;
  width: 400px;

  /* border-bottom:2px solid #A65149; */
  h5 {
    margin: 0 auto;
    padding: 2rem;
    font-weight: 600;
    ${(props) =>
      props.done
        ? css`
            color: #898c27;
            text-decoration: line-through;
          `
        : css`
            color: #000;
          `}
  }
  input {
    margin-right: 1.2rem;
  }
  .list-icon {
    display: none;
    margin-right: 1rem;
  }
  &:hover {
    .list-icon {
      display: initial;
    }
  }
`;

function List({ done, list, handleRemove, handleToggle, handleUpdateConfirm }) {
  const handleUpdate = () => {
    const newMenu = prompt("다시 메뉴를 적어주세요", list.menu);
    handleUpdateConfirm(list.id, newMenu);
  };
  return (
    <>
      <ListWrapper done={done}>
        <h5
          onClick={() => {
            handleToggle(list.id);
          }}
        >
          {" "}
          오늘의 메뉴는 '{list.menu}' 입니다{" "}
        </h5>

        <button className="list-icon" onClick={handleUpdate}>
          수정
        </button>
        <button
          className="list-icon"
          onClick={(e) => {
            e.stopPropagation();
            handleRemove(list.id);
          }}
        >
          삭제
        </button>
      </ListWrapper>
    </>
  );
}

const TodoListWrapper = styled.div`
  flex: 1;
  margin-top: 2rem;
  background: #bfae7a;
`;

function TodoList({
  listZip,
  handleRemove,
  handleToggle,
  handleUpdateConfirm,
}) {
  return (
    <>
      <TodoListWrapper>
        {listZip.map((list) => (
          <List
            list={list}
            key={list.id}
            done={list.done}
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
