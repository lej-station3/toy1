import React, { useState, useRef } from 'react';
import AppWrapper from './compopnent/app-wrapper';
import produce from 'immer';
import { createGlobalStyle } from 'styled-components';
import { TodoList,TodoForm
} from './compopnent/index';
const GlobalStyle = createGlobalStyle`
  #root {
  font-family:  'Roboto',-apple-system;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
}
html {
  padding: 0;
  margin: 0;
  font-size: 10px;
}
body{
    background: #49736F;
  }

  h1{
    margin:0 auto;
    color:#A65149;
    font-size:15rem;
    letter-spacing:5px;
  }
  `;

function App() {
  const [input, setInput] = useState(''); //input.menu바꿈
  const [listZip, setListZip] = useState([
    {
      id: 1,
      menu: '회',
      done: false,
    },
  ]);

  const handleChange = e => {
    setInput(e.currentTarget.value);//앞으로도계속~
  };

  const nextId = useRef(2);

  const handleCreate = () => {
    // e.preventDefault();
    console.log(input);
    const list = {
      id: nextId.current,
      menu: input,
      done: false,
    };
    setListZip(
      produce(listZip, draft => {
        console.log(listZip, list);
        //여기서 draftZip이 listZip임 
        draft.push(list);
      })
    );
    setInput('');
    nextId.current += 1;
  };
 
  const handleRemove = id => {
    setListZip(listZip.filter(
      list => list.id !== id)
    );
  };

  const handleToggle = id => {
    const next = produce(listZip, draft => {
      const idx = draft.findIndex(i => i.id === id);
      draft[idx].done = !draft[idx].done;
    });
    setListZip(next);

    // setListZip(prevState => {
    //   return prevState.map(list => {
    //     if (list.id === id) {
    //       return {
    //         ...list,
    //         done: !list.done
    //       };
    //     }
    //     return list;
    //   });
    // });
  };

  // const handleToggle = id => {
  //   setListZip(listZip.map(list => {
  //     if (list.id === id) {
  //       return {
  //         ...list,
  //         done: !list.done
  //       };
  //     }
  //     return list;
  //   }));
  // };


  const handleUpdateConfirm = (id, menuNew) => {
    console.log('id ', id, menuNew)
    setListZip(
      listZip.map(listItem => {
        if(listItem.id !== id) {
          return listItem
        }
        else {
          return {
            ...listItem, 
            menu:menuNew
          }
        }
      })
    );
  }
  return (
    <>
      <GlobalStyle />
      <AppWrapper>
        <h1>MENU</h1>
        <TodoForm
          menu={input}
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