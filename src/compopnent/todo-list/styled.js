import styled, { css } from 'styled-components';

export const ListWrapper = styled.div`
display:flex;
align-items:center;
margin:0 auto;
margin-top:4rem;
font-size:2rem;
border-bottom:5px solid #49736F;
width: 400px; //이렇게띄기
//글자 괄호 사이 띄기
h5 {
  flex-grow: 1;
  margin:0 1rem;
  padding:2rem;
  font-weight:600;
  letter-spacing:1px;
  //props로 가져오지말고~
  ${
  ({done})=>done ?
    css`
      color:#898C27;
      text-decoration:line-through;
    `:
    css`
      color:#000;
   `
}
}

.list-icon-zip{
margin-left:5rem;
white-space: nowrap;
cursor: pointer;
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
`;

export const EditZip = styled.button`
background-color:none;
white-space: nowrap;
cursor: pointer;
`;
export const Edit = styled.button`
margin-right: 1rem;
`;
export const Del = styled.button`
margin-right: 1rem;
`;
export const Label = styled.label`
display: flex;
align-items: center;
position: relative;
`;

export const Check = styled.div`
flex: none;
width: 20px;
height: 20px;
background-color: #fff;
`;


export const TodoListWrapper = styled.div`
flex:1;
margin-top:2rem;
background:#BFAE7A;
`;
