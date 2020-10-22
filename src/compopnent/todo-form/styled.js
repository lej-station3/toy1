import styled from 'styled-components';

export const TodoFormWrapper = styled.div`
  display:flex;
  justify-content:center;
    input{
        width:25rem;
        height:3rem;
        margin-right:1.2rem;
        font-size:1.6rem;
        font-style:italic;
        text-align:center;
        border:none;
        box-shadow:none;
        outline-style: none;
        cursor: pointer;
    }
    button{
        color:#000;
        font-size:1.8rem;
        font-weight:bold;
        border:none;
        border-radius:5px;
        box-shadow:none;
        outline-style: none;
        cursor: pointer;
        background:#fff;
    &:hover{
        color:#fff;
        background:#A65149;
    }
    }
`;

