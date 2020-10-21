import React from 'react';
import styled, { css } from 'styled-components';



const ListWrapper = styled.div`
display:flex;
align-items:center;
margin-top:1.4rem;
margin-left:1.3rem;
font-size:2rem;


/* border-bottom:2px solid #A65149; */
h5{
    margin-right:1rem;
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

.list-icon{
    display:none;
}
&:hover {
    .list-icon{
        display:initial;
    }
  }

`

function List({ done, list, handleRemove, handleToggle }) {
    return (
        <>
            <ListWrapper done={done}  >
                <input

                    type='checkbox'
                    onClick={() => {
                        handleToggle(list.id)
                    }
                    }
                />
                <h5 > {list.menu}</h5>

                <span className='list-icon' onClick={e => {
                    e.stopPropagation();
                    handleRemove(list.id);
                }}> ❌ </span>



            </ListWrapper>

        </>
    )
}




const TodoListWrapper = styled.div`
background:#BFAE7A;
flex:1;
margin-top:2rem;

`


function TodoList({ listZip, handleRemove, handleToggle }) {




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
                    />
                ))}
            </TodoListWrapper>

        </>
    )
}

export default TodoList;