import React from 'react'
import styled from 'styled-components';


const Wrapper = styled.div`
width: 500px;
height:700px;
background:#ffff;
margin:0 auto;
margin-top:10rem;
display: flex;
flex-direction: column;
`

function AppWrapper({ children }) {
  
    return (
        <Wrapper>{children}</Wrapper>
    )
}

export default AppWrapper;