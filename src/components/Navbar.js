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
    background: white;
    border: 1px solid black;
    margin:auto;
    height: 10vh;
    color:black;
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
    // height:35px;
    border:1px solid black;
    display:flex;
    justify-content:center;
    algn-items:center;
    border-radius:50%;
    padding:5px;
    gap:10px
`

const StyledAppbar=styled(AppBar)`
    width:95%;
    margin:auto;
`
const StyledLinks=styled.a`

`
const SearchBarConatiner=styled.div`
    display:flex;
    justify-content:center;
    algn-items:center;
`
const StyledCartLogo=styled(LocalMallOutlinedIcon)`
    font-size:13px;
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
                    <p>Home</p>
                    <p>products</p>
                    <p>Contact</p>
                    <p>About</p>
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
    </Box>
);
}
