import styled from '@emotion/styled'
import React from 'react';
import { Navigate } from 'react-router-dom';
import CartContext from './CartContext';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ThumbsUp from '../images/thumbsup.png'
const StyledDivContainer=styled.div`
width:100%;
position:relative;
`

const StyledHr2=styled.hr`
width:95%;
border: 0;
height: 0;
border-top: .1px solid lightgray;
padding: 0;
margin-top:20px;
margin-bottom:20px;
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
margin-right:50px
`
const ProductDetailContainer=styled.div`
width:75%;
position:relative;
`
const ProductDetailTitleContainer=styled.div`
width:60%;
position: relative;
`
const ProductDetailTitle=styled.p`
font-weight:bold;
text-transform: capitalize;
margin-bottom: 7px;
font-size:15px
`
const ProductPrice=styled.p`
position:absolute;
right:50px;
top:30px;
font-size:11px;
font-weight:bold
`
const ContainerDiv=styled.div`
    padding: 50px 20px 50px 20px;
    width:100%;
    height:fit-content;
    position:relative;
`
const GridContainer=styled.div`
    display: flex;
    justify-content: center;
    gap:70px;
    width:100%;
    height:100vh;
    @media(max-width:500px){
        flex-direction:column;
        gap:20px;
        position:relative;
    }
`
const FormContainer=styled.form`
    margin-top: 50px;
    padding:10px;
    width: 30%;
    background-color: rgb(248, 248, 248);
    height:450px;
    padding:20px;
    position:relative;
    @media(max-width:500px){
        width:100%;
        height:200px;
        padding:0px;
        margin-top:0px;
        position:none;
    }
`
const ProductContainer=styled.div`
    margin-top: 50px;
    padding:20px;
    border-radius:10px;
    box-shadow: 1px 1px 2px  lightgrey;
    width: 50%;
    background:white;
    height:450px;
    position:relative;
    @media(max-width:500px){
        width:100%;
    }
`

const ProductListContainer=styled.div`
    border-radius:10px;
    width: 100%;
    background:white;
    height:215px;
    overflow-y:scroll;
`
const TotalPriceContainer=styled.div`
    height:110px;
    position:relative;
    margin-top:20px
`

const SubtotalPriceValue=styled.p`
    font-size:12px;
    font-weight:bold;
    position:absolute;
    top:1px;
    right:40px;
`
const ShippingText=styled.p`
    color:gray;
    font-size: 12px;
    font-weight:bold;
    position:absolute;
    top:30px;
    left:0px;
`

const StyledHr4=styled.hr`
    width:100%;
    border: 0;
    height: 0;
    border-top: .5px solid lightgray;
    padding: 0;
    position:absolute;
    bottom:100px
`
const Footer=styled.div`
    position:absolute;
    bottom:60px;
    width:100%;
    height: 30px;
    display:flex;
    gap:15px
`
const StyledText=styled.p`
    font-size:10px;
    font-weight: bold;
`
const StyledLabel=styled.label`
    font-size:12px;
    font-weight: bold;
    margin:10px
`
const ProductDetailText=styled.p`
    font-size:11px;
`
const Logo=styled.div`
    position:absolute;
    height:30px;
    width:100px;
    top:30px;
    left:50px
`
//new
const Image=styled.img`
    width:110px;
    position: absolute;
    top:100px;
    left:-10px;
    @media(max-width:500px){
        top:0px
    }
`
const StyledP=styled.p`
    font-weight:bolder;
    position: absolute;
    top:180px;
    font-size:17px;
    @media(max-width:500px){
        top:70px
    }
`
const StyledP2=styled.p`
    position: absolute;
    top:205px;
    font-size: 11px;
    font-weight:bolder;
    @media(max-width:500px){
        top:100px
    }
`
const StyledButton=styled.button`
    border:1px solid black;
    padding:5px;
    background:transparent;
    color:black;
    margin-top:40px;
    border-radius:15px;
    width:180px;
    position:absolute;
    bottom: 220px;
    left:130px;
    &:hover{
        cursor:pointer;
        background: black;
        color: white;
    };
    @media(max-width:500px){
        bottom:60px;
    }
`
const ButtonText=styled.p`
    font-size:11px;
    font-weight:bold;
    &:hover{
        cursor:pointer;
        
    }
`

const OrderSummaryContainer=styled.div`
    width:100%;
    height:150px;
    margin-bottom:20px;
    position:relative
`
const SummaryText=styled.p`
    color:black;
    font-size: 13px;
    font-weight:bold;
    position:absolute;
    top:0px;
    left:0px;
`
const OrderNumberContainer=styled.div`
    width:100%;
    height:20px;
    position: absolute;
    top:27px;
    display:flex;
    gap:20%
`
const ParameterText=styled.p`
    color:gray;
    font-weight:bold;
    font-size:12px;
    
`
const DetailText=styled.p`
    color:black;
    font-weight:bold;
    font-size:12px;
    margin-bottom:3px
`
const DeliveryDateConstainer=styled.div`
    width:100%;
    height:20px;
    position: absolute;
    top:60px;
    display:flex;
    gap:11%
`
const ShippingDetailContainer=styled.div`
    width:100%;
    height:50px;
    position: absolute;
    top:99px;
    display:flex;
    gap:12%
`
const ShippingAddressContainer=styled.div`
    width:fit-content;
`
const PriceContainer=styled.div`
    height:20px;
    position: relative;
`
const Total=styled.p`
    color:gray;
    font-weight:bold;
    font-size:12px;
    position: absolute;
    left:30%;
`
const TotalValue=styled.p`
    color:black;
    font-weight:bold;
    font-size:12px;
    position: absolute;
    left:80%;
`
let sum=0;
let priceFinal=0;
export default function ({deliveryDetail}) {

    const [gotoHome,setGotoHome]=React.useState(false);
    const [cart,setCart]=React.useState([]);
    const [total,setTotal]=React.useState(0);
    const [finalPrice,setFinalPrice]=React.useState(0);
    const handleHomeClick=()=>{
        setGotoHome(true);
    }
    React.useEffect(() => {
        setCart(JSON.parse(localStorage.getItem('cart')));
        sum=0;
        priceFinal=0;
        cart.map(item=>{
            sum+=item.priceNumber;
            sum*=item.quantity;
        })
        priceFinal=sum+50;
        setTotal(sum.toLocaleString())
        setFinalPrice(priceFinal.toLocaleString());
    })
    

return(
    <ContainerDiv>
        <Logo>Logo</Logo>
        <GridContainer>
            <FormContainer>
                <Image src={ThumbsUp}/>
                <StyledP>Thank you for shopping with Shoplly.</StyledP>
                <StyledP2>Your orders are on the way.</StyledP2>
                
            </FormContainer>
            <StyledButton onClick={handleHomeClick}><ButtonText>BACK TO SHOPPING</ButtonText></StyledButton>
            <ProductContainer>
                <OrderSummaryContainer>
                    <SummaryText>Order Summary</SummaryText>
                    <OrderNumberContainer><ParameterText>ORDER NO</ParameterText><DetailText>{deliveryDetail.orderNo}</DetailText></OrderNumberContainer>
                    <DeliveryDateConstainer><ParameterText>EST DELIVERY DATE</ParameterText><DetailText>{deliveryDetail.date}</DetailText></DeliveryDateConstainer>
                    <ShippingDetailContainer><ParameterText>SHIPPING DETAILS</ParameterText><ShippingAddressContainer>
                    <DetailText>{`${deliveryDetail.firstName} ${deliveryDetail.lastName}`}</DetailText><DetailText>{`${deliveryDetail.address}, ${deliveryDetail.city}`}</DetailText><DetailText>{deliveryDetail.country}</DetailText></ShippingAddressContainer></ShippingDetailContainer>
                </OrderSummaryContainer>
                <StyledHr2/>
                <PriceContainer>
                    <Total>TOTAL</Total>
                    <TotalValue>${total}.00</TotalValue>
                </PriceContainer>
                <ProductListContainer>
                    
                
                {cart.map((item,index)=>(
                    <div key={index}>
                        <Products>
                            <ProductImage src={item.src}/>
                            <ProductDetailContainer>
                                <ProductDetailTitle>{item.name}</ProductDetailTitle>
                                <ProductDetailTitleContainer>
                                    <ProductDetailText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nemo eius.</ProductDetailText>
                                </ProductDetailTitleContainer>
                                <ProductPrice>{item.price}</ProductPrice>
                            </ProductDetailContainer>
                        </Products>
                        <StyledHr2/>
                    </div>
                ))}
                </ProductListContainer>
            </ProductContainer>
            
        </GridContainer>
        {gotoHome && <Navigate to='/'/>}
        <StyledHr4/>
        <Footer>
            <StyledText>Refund Policy</StyledText>
            <StyledText>Privacy Policy</StyledText>
            <StyledText>Terms of service</StyledText>
        </Footer>
    </ContainerDiv>
)
    
}
