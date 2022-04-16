import styled from '@emotion/styled'
import React from 'react';
import { Navigate } from 'react-router-dom';
import CartContext from './CartContext';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export default function CompleteOrder() {
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
const StyledHr3=styled(StyledHr2)`
margin-top:0px;
margin-bottom:0px;
`
const ProductsConatiner=styled.div`
    width:90%;
    height:fit-content;
    display:flex;
    justify-content:center;
    flex-direction:column;
    position: absolute;
    top:200px;
`
const Products=styled.div`
    display:flex;
    flex-direction: row;
    position:relative;
    width:100%;
    gap:40px;
`
const ProductImage=styled.img`
    width:15%;
    border-radius:20px;
`
const ProductDetailContainer=styled.div`
    width:75%;
    position:relative
    
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
const GotoHomeText=styled.p`
    color:gray;
    cursor:pointer;
    font-size: 15px;
    &:hover{
        color:black
    }
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
    right:50px;
    &:hover{
        border:1px solid black;
        color:black;
        cursor:pointer;
    }
`



const InputContainer=styled.div`
    position:absolute;
    right:40px;
    bottom:-10px
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
const NumberInput=styled.input`
    height:34px;
    width: 30px;
    text-align: center;
    border:0px;
    border-radius:4px;
    display: inline-block;
    vertical-align: middle;
    font-size: 15px;
    &::-webkit-outer-spin-button,&::-webkit-inner-spin-button{
        appearance: none;
        margin: 0;
    };
    -moz-appearance: textfield;
`

const TotalPriceContainer=styled.div`
    position: relative;
    border:1px solid black;
    height:30px;
    width:80%;
    border-radius:20px;
    padding:5px
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
    const ContainerDiv=styled.div`
        padding: 50px 20px 50px 20px;
        width:100%;
        height:100vh;
    `
    const GridContainer=styled.div`
        display: flex;
        justify-content: center;
        gap:70px;
        width:100%;
        height:100vh;
    `
    const FormContainer=styled.form`
    margin-top: 50px;
        padding:10px;
        border-radius:10px;
        box-shadow: 1px 1px 2px  lightgrey;
        width: 30%;
        background:white;
        height:450px;
        padding:20px
    `
    const ProductContainer=styled.div`
        margin-top: 50px;
        padding:10px;
        border-radius:10px;
        box-shadow: 1px 1px 2px  lightgrey;
        width: 50%;
        background:white;
        height:450px
    `
    const StyledText2=styled.p`
        font-weight: bold;
        margin-bottom: 20px
    `
    const StyledInput=styled.input`
        padding:10px;
        border:1px solid lightgray;
        width:97%;
        border-radius: 10px;
        margin-bottom: 15px;
    `
    const StyledInput2=styled(StyledInput)`
    padding:10px;
    border:1px solid lightgray;
    width:46.7%;
    border-radius: 10px;
    margin-bottom: 15px;
    margin-right: 10.9px
    `
    const StyledInput3=styled(StyledInput)`
    padding:10px;
    border:1px solid lightgray;
    width:46.7%;
    border-radius: 10px;
    margin-bottom: 15px;
    `
    const StyledButton=styled.button`
        border:0px;
        padding:7px;
        background:black;
        color:white;
        margin-top:40px;
        border-radius:15px;
        width:200px;
        margin-left:100px
    `
    const {cart,handleDelete}=React.useContext(CartContext);
    const [gotoHome,setGotoHome]=React.useState(false);
    const handleHomeClick=()=>{
        setGotoHome(true);
    }
    console.log(cart)
    return(
        <ContainerDiv>
            <GotoHomeText onClick={handleHomeClick}><ArrowBackIosIcon style={{fontSize:'15px'}}/>Go to Home</GotoHomeText>
            
            <GridContainer>
            
                <FormContainer>
                    <StyledText2>Contact Information</StyledText2>
                    <StyledInput type='text' placeholder='Email or Phone Number' required/>
                    <StyledText2>Shipping Address</StyledText2>
                    <StyledInput2 type='text' placeholder='Frist Name' required/>
                    <StyledInput3 type='text' placeholder='Last Name' required/>
                    <StyledInput type='text' placeholder='Address Line 1' required/>
                    <StyledInput type='text' placeholder='Address Line 2'/>
                    <StyledInput type='text' placeholder='City/Town' required/>
                    <StyledInput2 type='text' placeholder='Country' required/>
                    <StyledInput2 type='text' placeholder='Postal/Zip Code' required/>
                    <input id='remember' type='checkbox'/>
                    <label for='remember'>Save this info for next time</label>
                    <br/>
                    <StyledButton>Complete Order</StyledButton>
                </FormContainer>
                <ProductContainer>
            
                </ProductContainer>
            </GridContainer>
            
            {gotoHome && <Navigate to='/'/>}
        </ContainerDiv>
    )
}
