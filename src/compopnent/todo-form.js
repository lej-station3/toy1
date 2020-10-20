import React from 'react'

function TodoForm({handleChange, handleCreate, menu}){
    

    return(
        <div>
<input 
    name='menu'
    placeholder='메뉴를 적으세요'
    onChange={handleChange} 
    value={menu}

/>
<button onClick={handleCreate}> 추가 </button>

        </div>

    )
}

export default TodoForm;
