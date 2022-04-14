import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import styled from '@emotion/styled';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import Avatar from '@mui/material/Avatar';

const StyledContainer=styled.div`
    position: relative;
`;
const StyledToolbar=styled(Toolbar)`
    margin:auto;
    height: 10vh;
    color:black;
    background-color: rgb(248, 248, 248);
    box-shadow:none
`
const LinkContainer=styled.div`
    display:flex;
    justify-content:center;
    algn-items:center;
    gap:50px;
    width:80%
`
const LogoContainer=styled.div`
    Width:10%;
`
const CartAvatarContainer=styled.div`
    width:10%;
    display:flex;
    justify-content:center;
    algn-items:center;
`
const CartContainer=styled.div`
    width:fit-content;
    display:flex;
    justify-content:center;
    algn-items:center;
    border-radius:50%;
    padding:5px;
    gap:10px;
    border:1px solid
`

const StyledAppbar=styled(AppBar)`
box-shadow:none
`
const StyledCartLogo=styled(LocalMallOutlinedIcon)`
    font-size:16px;
`
const StyledText=styled.p`
    color:gray
`

export default function NavBar() {
return (
    <Box sx={{ flexGrow: 1 }}>
    <StyledAppbar position="static">
        <StyledContainer>
            <StyledToolbar>
                <LogoContainer>
                    <p>Logo</p>
                </LogoContainer>
                <LinkContainer>
                    <StyledText>Home</StyledText>
                    <StyledText>products</StyledText>
                    <StyledText>Contact</StyledText>
                    <StyledText>About</StyledText>
                </LinkContainer>
                <CartAvatarContainer>
                    <CartContainer>
                        <StyledCartLogo/>
                    </CartContainer>
                </CartAvatarContainer>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </StyledToolbar>
        </StyledContainer>
    </StyledAppbar>
    
    <hr/>
    <br/>
    </Box>
);
}
