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
    border: 1px solid black;
    margin:auto;
    height: 10vh;
    color:black;
    background-color: #FCFCFC;
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
    border:1px solid black;
    display:flex;
    justify-content:center;
    algn-items:center;
    border-radius:50%;
    padding:5px;
    gap:10px
`

const StyledAppbar=styled(AppBar)`
box-shadow:none
`
const StyledCartLogo=styled(LocalMallOutlinedIcon)`
    font-size:13px;
`
const SearchBarContainer=styled.div`
    display:flex;
    justify-content:center;
    algn-items:center;
    flex-direction: column
`
const InputContainer=styled.div`
    width:100%;
    border:1px solid black;
`
const StyledInput=styled.input`
    width:25%;
    padding:10px;
    border:0.5px solid gray;
    box-shadow:none;
    margin:10px;
    border-radius:20px
`
const ProductsContainer=styled.div`
    width:100%;
    border:1px solid black;
    display:flex;
    justify-content:center;
    algn-items:center;
    gap:50px

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
    <SearchBarContainer>
            <InputContainer>
                <StyledInput placeholder='Search'/>
            </InputContainer>
            <ProductsContainer>
                <p>Furnitures</p>
                <p>Electronics</p>
                <p>Vehicles</p>
                <p>Accessories</p>
                <p>Fashion</p>

            </ProductsContainer>
        </SearchBarContainer>
    </Box>
);
}
