import React, { useRef } from 'react'
import styled from 'styled-components';


const TodoFormWrapper = styled.div`
display:flex;
justify-content:center;
margin-bottom:1.2rem;
    input{
        width:25rem;
        height:3rem;
        text-align:center;
        border:none;
        box-shadow:none;
        outline-style: none;
        font-size:1.6rem;
        font-style:italic;
        margin-right:1.2rem;
        cursor: pointer;
        &:hover{
            border-bottom:3px solid #A65149;
        }

    }
    button{
        border:none;
        box-shadow:none;
        border-radius:5px;
        outline-style: none;
        cursor: pointer;
        background:#fff;
     font-size:1.8rem;
     color:#000;
     font-weight:bold;
    &:hover{
        color:#fff;
        background:#A65149;

    }

    }
    
`


function TodoForm({ handleChange, handleCreate, menu,handleUpdate}) {




    return (
        <>
            <TodoFormWrapper>
                <input
                    type='text'
                    name='menu'
                    placeholder='메뉴를 적으세요'
                    onChange={handleChange}
                    value={menu}


                />
                
                <button
                    onClick={handleCreate}

                > 등록 </button>

            </TodoFormWrapper>

        </>

    )
}

export default TodoForm;
