import React from 'react'
import styled from 'styled-components';


const Wrapper = styled.div`
display: flex;
flex-direction: column;
width: 500px;
height:700px;
margin:0 auto;
margin-top:10rem;
background:#ffff;
`

function AppWrapper({ children }) {
  
    return (
        <Wrapper>{children}</Wrapper>
    )
}

export default AppWrapper;