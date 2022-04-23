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
import CompleteOrder from './CompleteOrder';
import { Navigate } from 'react-router-dom';
import Fab from '@mui/material/Fab';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import '../style/NavBar.css';
import Logo from '../images/Logo_main.png';
const style = {
  position: 'absolute',
  top: '50%',
  right: '-30%',
  transform: 'translate(-50%, -50%)',
  width: '55%',
  height:'100%',
  bgcolor: 'white',
  ['@media (max-width:500px)']: {
    right:'-50%',
    width:'100%',
    padding: '5px',
  },
  border:'0px',
  outline: 'none',
  padding: '50px',
  overflowY: 'scroll',
};
const style2={
    width: '100%',
    height:'100%',
    bgcolor: 'white',
    border:'0px',
    outline: 'none',
    padding: '50px',
    overflowY: 'scroll',
  };
const StyedBox=styled`
    position: absolute;
    top: 50%;
    right: -375px;
    transform: translate(-50%, -50%);
    transition: transform 0.3s linear;
    width: 55%;
    height:100%;
    bgcolor: white;
    border:0px;
    outline: none;
    padding: 50px;
    overflowY: scroll;
`
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
    border-top: .1px solid lightgray;
    padding: 0;
`
const StyledHr2=styled.hr`
    width:80%;
    border: 0;
    height: 0;
    border-top: .1px solid lightgray;
    padding: 0;
    margin-top:20px;
    margin-bottom:20px;
`
const StyledHr3=styled.hr`
    width:100%;
    border: 0;
    height: 0;
    border-top: .1px solid lightgray;
    padding: 0;
`
const TitleContainer=styled.div`
    width:100%;
    height:20px;
    position: absolute;
    top:100px;
    
`
const StyledTitleText=styled.p`
    font-weight:bold;
    margin-bottom:20px
`
const ProductsConatiner=styled.div`
    width:90%;
    height:fit-content;
    display:flex;
    justify-content:center;
    flex-direction:column;
    position: absolute;
    top:200px;
    @media(max-width:500px){
        width:100%;
        display:flex;
        justify-content:center;
        align-items:center;
    }
`
const Products=styled.div`
    display:flex;
    flex-direction: row;
    position:relative;
    width:100%;
    gap:40px;
    @media(max-width:500px){
        width:100%
    }
`
const ProductImage=styled.img`
    width:15%;
    border-radius:20px;
    height:15%;
    padding:5px;
    @media(max-width:500px){
        width:25%;
    }
`
const ProductDetailContainer=styled.div`
    width:75%;
    position:relative;
    height: 95px;
    @media(max-width:500px){
        width:90%;
    }
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
    margin-bottom:10px
`
const ProductPrice=styled.p`
    position:absolute;
`
const CloseIconContainer=styled.div`
    height:16px;
    width:fit-content;
    border:1px solid gray;
    border-radius:50%;
    position:absolute;
    top:5px;
    right:50px;
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
    width:80%;
    @media(max-width:500px){
        gap:30px;
        width:60%;
        margin-left:40px;
        margin-top:40px
    }
`
const LogoContainer=styled.div`
    Width:10%;
    @media(max-width:500px){
        width: 100%;
    }
`
const LogoImage=styled.img`
width:100%;
@media(max-width:500px){
    width: 200%;
    margin-left:-10px;
}
`
const CartAvatarContainer=styled.div`
    width:10%;
    display:flex;
    justify-content:center;
    algn-items:center;
    @media(max-width:500px){
        margin-left:40px;
    }
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
    position:relative;
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
const InputContainer=styled.div`
    position:absolute;
    right:40px;
    bottom:-25px;
    display:flex;
    align-items:center;
    justify-content:center;
    @media(max-width:500px){
        bottom:-35px
    }
`
const QuantityText=styled.p`
    font-weight:bold;
    font-size:13px;
    padding:10px;
    padding-right:13px
`
const RoundBtn=styled.span`
    width:20px;
    height:20px;
    background:transparent;
    border-radius:50%;
    // padding:8px 5px 8px 5px;
    border:1px solid black;
    display: inline-block;
    vertical-align: middle;
    text-align: center;
    cursor:pointer;
    &:hover{
        background:black;
        color:white;
        border:1px solid white;
    }
    &.disabled{
        color:lightgray;
        border:1px solid lightgray;
        cursor:not-allowed;
        &:hover{
            background:white;
        }
    }
`


const TotalPriceContainer=styled.div`
    position: relative;
    border:1px solid black;
    height:30px;
    width:80%;
    border-radius:20px;
    padding:5px;
    @media(max-width:500px){
        width:90%;
        margin:auto;
    }
`
const TotalText=styled.p`
    position:absolute;
    left:0px;
    font-size:13px;
    font-weight:bold;
    padding-left:10px
`
const TotalPrice=styled.p`
    position:absolute;
    right:0px;
    font-size:13px;
    font-weight:bold;
    padding-right:10px;
`
const NumberContainer=styled.div`
    
    width:12px;
    height:12px;
    border-radius:50%;
    position:absolute;
    right:-3px;
    top:-5px;
    background: linear-gradient(to right, #12c2e9, #c471ed, #f64f59); 
`
const CartMobile=styled.div`
    height: 100vh;
    width: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    color: black;
    padding:30px;
    @media(max-width:501px){
        display:none;
    }
`
const StyedModal=styled(Modal)`
transform: translateX(100%);
transition: transform 0.3s linear;
&.active {
    transform: translateX(0%);
};
@media(min-width:500px){
    display:none;
}`
const StyledAvatar=styled(Avatar)`
@media(max-width:500px){
    display:none;
}
`

let sum=0;
export default function NavBar(props) {
    const {cart,handleDelete}=React.useContext(CartContext);
    const [open, setOpen] = React.useState(false);
    const [quantity,setQuantity]=React.useState(1);
    const [disableMinus,setDisableMinus]=React.useState(false);
    const [totalPrice,setTotalPrice]=React.useState('0');
    const [gotoCompelete,setGotoCompelete]=React.useState(false);
    const quantityRef=React.useRef();
    const handleCartClick=()=>{
        setOpen(!open);
    }
    const handleIncremet=(event)=>{
        setQuantity(quantity+1);
        const id=event.currentTarget.id;
        cart.map(item=>{
            if(id==item.id){
                item.quantity+=1;
            }
        })
        console.log(cart)
    }
    const handleDecrement=(event,item)=>{
        const id=event.currentTarget.id;
        if(item.quantity>=2){
            setQuantity(quantity-1);
            cart.map(item=>{
            if(id==item.id){
                item.quantity-=1;
            }
        })
        }
    }
    const handleComplete=()=>{
        setGotoCompelete(true);
        localStorage.setItem('cart', JSON.stringify(cart));
    }
    
    React.useEffect(() => {
        sum=0;
        cart.map(item=>{
            sum+=item.priceNumber;
        })
        setTotalPrice(sum.toLocaleString())
    },[cart])
    
    React.useEffect(() => {
        if(quantity==1){
            setDisableMinus(true);
        }
        else{
            setDisableMinus(false);
        }
        setTotalPrice((sum*quantity).toLocaleString());
    }, [quantity]);
return (
    <Box sx={{ flexGrow: 1 }}>
    
        <StyledAppbar position="static">
        <StyledContainer>
            <StyledToolbar>
                <LogoContainer>
                    <LogoImage src={Logo}/>
                </LogoContainer>
                <LinkContainer>
                    <StyledText>Home</StyledText>
                    <StyledText>products</StyledText>
                    <StyledText>Contact</StyledText>
                    <StyledText>About</StyledText>
                </LinkContainer>
                <CartAvatarContainer>
                    <CartContainer onClick={handleCartClick}>
                        <NumberContainer><p style={{color:'white',fontSize:'10px',paddingLeft:'4px'}}>{cart.length}</p></NumberContainer>
                        <StyledCartLogo/>
                    </CartContainer>
                </CartAvatarContainer>
                <StyledAvatar  alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </StyledToolbar>
        </StyledContainer>
    </StyledAppbar>
    
    <StyledHr3/>
    <br/>
    <StyledDivContainer>
        <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{transition: '0.3s linear'}}
    >
        <Box sx={style} className='nav'>
        <CloseButtonContainer>
            <StyledCloseButton onClick={handleCartClick}>Close</StyledCloseButton>
        </CloseButtonContainer>
        <StyledHr/>
        <TitleContainer>
            <StyledTitleText>Order Summary</StyledTitleText>
            {/* <StyledHr3/> */}
            <TotalPriceContainer>
                <TotalText>Total:</TotalText>
                <TotalPrice>${totalPrice}</TotalPrice>
            </TotalPriceContainer>
            {/* <StyledHr3/> */}
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
                    <InputContainer>
                    <RoundBtn id={item.id} className={item.quantity==1 ? 'disabled' : ''} onClick={(event)=>handleDecrement(event,item)}>-</RoundBtn>
                    <QuantityText ref={quantityRef}>{item.quantity}</QuantityText> 
                    <RoundBtn id={item.id} onClick={(event)=>handleIncremet(event)}>+</RoundBtn>
                </InputContainer>
                </ProductDetailContainer>
                </Products>
                <StyledHr2/>
                </div>
            )) : <h2>Cart Empty!</h2>}
        </ProductsConatiner>
        <Fab onClick={handleComplete} variant="extended" size="medium" color="black" aria-label="add" style={{position:'absolute',top:'15px'}}>
        
        Complete Order
        <ArrowForwardIcon/>
        </Fab>
        </Box>
    </Modal>
</StyledDivContainer>
    {gotoCompelete && <Navigate to='/complete'/>}
    </Box>
);
}
