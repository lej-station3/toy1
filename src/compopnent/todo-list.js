import React,{useState} from 'react';
import styled, { css } from 'styled-components';
import edit from '../icon/edit-2-outline.png';
import trash from '../icon/trash-2-outline.png';




const ListWrapper = styled.div`
display:flex;
align-items:center;
margin:0 auto;
margin-top:4rem;
font-size:2rem;
border:7px solid #49736F;
width:400px;


/* border-bottom:2px solid #A65149; */
h5{
    margin:0 1rem;
    padding:2rem;
    font-weight:600;
    ${props =>
        props.done ? css`
    color:#898C27;
    text-decoration:line-through;
    `:
            css`
    color:#000;
    `
    }
}

button{
    padding:0.5rem;
    color:#f2f2f2;
    font-size:1.3rem;
    text-align:center;
    font-weight:bold;
    border:none;
    border-radius:5px;
    background:#A65149;
}
input{
    margin-right:1.2rem;
}
.list-icon{
    display:none;
    margin-right:1rem;
}
&:hover {
    .list-icon{
        display:initial;
    }
  }

`

function List({ done, list, handleRemove, handleToggle, handleUpdateConfirm,}) {


const handleUpdate = () => {
    const newMenu = prompt('dd',list.menu);
    handleUpdateConfirm(list.id,newMenu);
};

  
    return (
        <>
            <ListWrapper done={done}  >
                {/* <input

                    type='checkbox'
                    onClick={() => {
                        handleToggle(list.id)
                    }
                    }
                /> */}
                <h5 onClick={() => {
                        handleToggle(list.id)
                    }
                    } > 오늘의 메뉴는 '{list.menu}' 입니다 </h5>

                <button  className='list-icon' 
                onClick={() => {
                    handleUpdate(list.id)
                }}>
                   수정
                    </button>
                <button    
                 className='list-icon'
                  onClick={e => {
                    e.stopPropagation();
                    handleRemove(list.id);}}>
                        삭제
                    </button>

              

            </ListWrapper>

        </>
    )
}




const TodoListWrapper = styled.div`
flex:1;
margin-top:2rem;
background:#BFAE7A;
`


function TodoList({ listZip, handleRemove, handleToggle,handleUpdateConfirm}) {

      



    return (
        <>
            <TodoListWrapper>
                {listZip.map(list => (
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
    )
}

export default TodoList;

