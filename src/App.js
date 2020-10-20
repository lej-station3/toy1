import React, { useState,useRef,useCallback } from 'react';
import TodoForm from './compopnent/todo-form';
import TodoList from './compopnent/todo-list';
import produce from 'immer'

function App(){

  const [input,setInput] = useState({
    menu:''
  });

// const {menu} = input;
const [listZip, setListZip] = useState([
  {
    id: 1,
    menu: '아침',
    check:false
    
  },
  {
    id: 2,
    menu: '점심',
    check:false
 
  },
 
]);


const handleChange = e => {

  setInput(produce(input,(draft) => {
    draft['menu'] = e.target.value;

  }));
};


const nextId = useRef(3);


const handleCreate = e => {
  e.preventDefault();
  console.log(input);

  const list = {
    id:nextId.current,
    menu: input.menu,
    check:false
  
  };
  setListZip(
    produce(listZip, (draft) => {
      console.log(listZip, list);
      //여기서 draftZip이 listZip임 
      draft.push(list)
    })
  );
  setInput({
    menu:'',
  });
  nextId.current +=1;
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
setListZip(listZip.filter(list => list.id !== id)
)
}

const handleToggle = id => {
  setListZip(listZip.map(list=> {
    if(list.id === id){
      return{
        ...list,
        done:!list.done
      }
    }

  }))
}

  return(
    <div>
      <h1>ToDo</h1>
      <TodoForm 
        menu={input.menu}
        handleChange={handleChange}
        handleCreate={handleCreate}
       />
      <TodoList 
        listZip={listZip}
        handleRemove={handleRemove}
        handleToggle={handleToggle}
      
        />
    </div>
  )
}

export default App;
