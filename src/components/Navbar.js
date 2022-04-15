import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import styled from '@emotion/styled';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import Avatar from '@mui/material/Avatar';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import CartContext from './CartContext';

const style = {
  position: 'absolute',
  top: '50%',
  right: '-375px',
  transform: 'translate(-50%, -50%)',
  width: '55%',
  height:'100%',
  bgcolor: 'white',
  border:'0px',
  outline: 'none',
  padding: '50px'
};
const CloseButtonContainer=styled.div`
    width:100%;
    height:80px;
`
const StyledDivContainer=styled.div`
    width:100%;
    position:relative;
`
const StyledCloseButton=styled.button`
    padding: 7px;
    border:0.5px solid lightgray;
    background: white;
    position:absolute;
    top:20px;
    right:60px;
    border-radius: 20px;
    width: 80px;
    cursor:pointer;

`
const StyledHr=styled.hr`
    width:87%;
    position:absolute;
    right: 45px;
    top:80px;
    border: 0;
    height: 0;
    border-top: .1px solid #8c8c8c;
    background-color: #fff;
    padding: 0;
`
const StyledHr2=styled.hr`
    width:80%;
    border: 0;
    height: 0;
    border-top: .1px solid #8c8c8c;
    background-color: #fff;
    padding: 0;
    margin-top:20px;
    margin-bottom:20px;
`
const TitleContainer=styled.div`
    width:100%;
    height:20px;
    position: absolute;
    top:120px;
    
`
const StyledTitleText=styled.p`
    font-weight:bold;
`
const ProductsConatiner=styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    height:fit-content;
    flex-direction:column;
    position: absolute;
    top:170px;
`
const Products=styled.div`
    display:flex;
    flex-direction: row;
    position:relative;
    width:100%;
    gap:40px
`
const ProductImage=styled.img`
    width:15%;
    border-radius:20px;
`
const ProductDetailContainer=styled.div`
    width:70%;
`
const ProductDetailTitleContainer=styled.div`
    width:70%;
    position: relative;
`
const ProductDetailTitle=styled.p`
    font-weight:bold;
    text-transform: capitalize;
    margin-bottom: 7px
`
const ProductDetailText=styled.p`
    
`
const ProductPrice=styled.p`
    position:absolute;
    bottom:0px
`
const ProductQuantity=styled.input`
    
`
const CloseIconContainer=styled.div`
    height:16px;
    width:fit-content;
    border:1px solid gray;
    border-radius:50%;
    position:absolute;
    top:5px;
    right:150px;
    &:hover{
        border:1px solid black;
        color:black;
        cursor:pointer;
    }
`
const StyledDeleteIcon=styled(CloseIcon)`
    font-size: 15px;
    color: gray;
    &:hover{
        color:black;
        cursor:pointer;
    }
`

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
    border:1px solid gray;
    cursor:pointer;
`

const StyledAppbar=styled(AppBar)`
box-shadow:none
`
const StyledCartLogo=styled(LocalMallOutlinedIcon)`
    font-size:18px;
`
const StyledText=styled.p`
    color:gray;
    font-weight:bold;
    font-size:12px
`


export default function NavBar() {
    const {cart,handleDelete}=React.useContext(CartContext);
    const [open, setOpen] = React.useState(false);
    const handleCartClick=()=>{
        setOpen(!open);
    }
    
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
                    <CartContainer onClick={handleCartClick}>
                        <StyledCartLogo/>
                    </CartContainer>
                </CartAvatarContainer>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </StyledToolbar>
        </StyledContainer>
    </StyledAppbar>
    
    <hr/>
    <br/>

    <StyledDivContainer>
        <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    >
        <Box sx={style}>
        <CloseButtonContainer>
            <StyledCloseButton onClick={handleCartClick}>Close</StyledCloseButton>
        </CloseButtonContainer>
        <StyledHr/>
        <TitleContainer>
            <StyledTitleText>Order Summary</StyledTitleText>
        </TitleContainer>
        <ProductsConatiner>
            {cart.length ? cart.map((item,id)=>(
                <div key={id}>
                <Products>
                <ProductImage src={item.src}/>
                <ProductDetailContainer>
                    <ProductDetailTitle>{item.name}</ProductDetailTitle>
                    <ProductDetailTitleContainer>
                        <ProductDetailText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nemo eius odio explicabo porro error temporibus libero ex debitis quam.</ProductDetailText>
                    </ProductDetailTitleContainer>
                    <ProductPrice>{item.price}</ProductPrice>
                    <CloseIconContainer>
                        <StyledDeleteIcon onClick={()=>handleDelete(item)}/>
                    </CloseIconContainer>
                </ProductDetailContainer>
                </Products>
                <StyledHr2/>
                </div>
            )) : <h2>Cart Empty!</h2>}
        </ProductsConatiner>
        
        </Box>
    </Modal>
   </StyledDivContainer>
    </Box>
);
}
