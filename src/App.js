import React, { useState, useRef } from "react";
import TodoForm from "./compopnent/todo-form";
import TodoList from "./compopnent/todo-list";
import AppWrapper from "./compopnent/app-wrapper";
import produce from "immer";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body{
    background: #49736F;
  }
  h1{
    margin:0 auto;
    color:#A65149;
    font-size:15rem;

  }
  `;

function App() {
  const [input, setInput] = useState(
    {
      menu: "",
    },
    {
      done: false,
    }
  );

  // const {menu} = input;
  const [listZip, setListZip] = useState([
    {
      id: 1,
      menu: "회",
      done: false,
    },
    {
      id: 2,
      menu: "가지구이",
      done: false,
    },
  ]);

  const handleChange = (e) => {
    setInput(
      produce(input, (draft) => {
        draft["menu"] = e.target.value;
      })
    );
  };

  const nextId = useRef(3);

  const handleCreate = (e) => {
    e.preventDefault();
    console.log(input);

    const list = {
      id: nextId.current,
      menu: input.menu,
      done: false,
    };
    setListZip(
      produce(listZip, (draft) => {
        console.log(listZip, list);
        //여기서 draftZip이 listZip임
        draft.push(list);
      })
    );
    setInput({
      menu: "",
    });
    nextId.current += 1;
  };

  // const handleCreate = () => {
  //   const list= {
  //     id: nextId.current,
  //     menu,
  //     check:false

  //   };
  //   setListZip(listZip.concat(list));

  // setInput({
  //   menu:''
  // })

  //   nextId.current += 1;
  // };

  const handleRemove = (id) => {
    setListZip(listZip.filter((list) => list.id !== id));
  };

  const handleToggle = (id) => {
    setListZip(
      listZip.map((list) => {
        if (list.id === id) {
          return {
            ...list,
            done: !list.done,
          };
        }
        return list;
      })
    );
  };

  const handleUpdateConfirm = (id, newMenu) => {
    setListZip(
      listZip.map((list) => {
        if (list.id !== id) {
          return listZip;
        } else {
          return {
            ...list,
            menu: newMenu,
          };
        }
      })
    );
  };

  return (
    <>
      <GlobalStyle />
      <AppWrapper>
        <h1>MENU</h1>
        <TodoForm
          menu={input.menu}
          handleChange={handleChange}
          handleCreate={handleCreate}
        />
        <TodoList
          listZip={listZip}
          handleRemove={handleRemove}
          handleToggle={handleToggle}
          handleUpdateConfirm={handleUpdateConfirm}
        />
      </AppWrapper>
    </>
  );
}

export default App;
