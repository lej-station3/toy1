import React from 'react'

function List({list,handleRemove,handleToggle}){
return(
<div>
   <input 
    type='checkbox'
    onClick={ ()=> { 
        handleToggle(!list.id)
    }
    }
    /> 
   <span> {list.menu}</span>
    <span onClick={e => {
        e.stopPropagation();
        handleRemove(list.id);
    }}> ❌ </span> 
</div>
)
}



function TodoList({listZip,handleRemove,handleToggle}) {
    return(
        <div>
           {listZip.map(list => (
              <List 
                list={list} 
                key={list.id}
                handleRemove={handleRemove}
                handleToggle={handleToggle}
            />
           ))}
        </div>
    )
}

export default TodoList;