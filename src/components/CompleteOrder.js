import styled from '@emotion/styled'
import React from 'react';
import { Navigate } from 'react-router-dom';
import CartContext from './CartContext';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import FinalPage from './FinalPage';

const StyledDivContainer=styled.div`
width:100%;
position:relative;
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
margin-bottom: 7px;
font-size:15px
`
const GotoHomeText=styled.p`
color:gray;
cursor:pointer;
font-size: 15px;
position:absolute;
bottom:155px;
&:hover{
    color:black
}
@media(max-width:500px){
    top:30px;
    right:20px
}
`
const ProductPrice=styled.p`
position:absolute;
right:10px;
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
        margin-bottom: 200px;
        gap:0px
    }
    
`
const FormContainer=styled.form`
    margin-top: 50px;
    padding:10px;
    border-radius:10px;
    box-shadow: 1px 1px 2px  lightgrey;
    width: 30%;
    background:white;
    height:450px;
    padding:20px;
    @media(max-width:500px){
        width:100%;
        margin-top:150px
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
    @media(max-width:500px){
        width:100%;
    }
`
const ProductListContainer=styled.div`
    border-radius:10px;
    width: 100%;
    background:white;
    height:300px;
    overflow-y:scroll;
`
const TotalPriceContainer=styled.div`
    height:110px;
    position:relative;
    margin-top:20px
`
const SubtotalText=styled.p`
    color:gray;
    font-size: 12px;
    font-weight:bold;
    position:absolute;
    top:1px;
    left:0px;
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
const ShippingPriceText=styled.p`
font-size:12px;
font-weight:bold;
position:absolute;
top:30px;
right:40px;
`
const StyledHr3=styled.hr`
    width:100%;
    border: 0;
    height: 0;
    border-top: .1px solid lightgray;
    padding: 0;
    position:absolute;
    top:65px;
`
const StyledHr4=styled.hr`
    width:100%;
    border: 0;
    height: 0;
    border-top: .5px solid lightgray;
    padding: 0;
`
const Footer=styled.div`
    position:absolute;
    bottom:60px;
    width:100%;
    height: 30px;
    display:flex;
    gap:15px;
    @media(max-width:500px){
        bottom:0px
    }
`
const FinalPriceContainer=styled.div`
    width:90px;
    height:20px;
    position:absolute;
    top:80px;
    right:40px;
`
const FinalPriceInnerContainer=styled.div`
width:100%;
height:100%;
position:relative;
`
const USDText=styled.p`
    color:gray;
    font-size: 12px;
    font-weight:bold;
    position:absolute;
    top:1px;
    left:1px;
`
const FinalPrice=styled.p`
    font-size:12px;
    font-weight:bold;
    position:absolute;
    top:1px;
    right:1px;
`
const TotalText=styled.p`
    color:gray;
    font-size: 12px;
    font-weight:bold;
    position:absolute;
    top:80px;
    left:0px;
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
width:46.5%;
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
    margin-left:100px;
    @media(max-width:500px){
        position:absolute;
        bottom: 80px;
    }
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
const MainContainer=styled.div`
width:100%;
height:100vh;
`
let sum=0;
let priceFinal=0;
function randomDate(time_to_exe) {
    let displayDate;
    const date = new Date();
    date.setDate(date.getDate() + parseInt(time_to_exe));
    displayDate = date.toLocaleDateString();
    let dob = new Date(displayDate);
    let dobArr = dob.toDateString().split(' ');
    let dobFormat = dobArr[2] + ' ' + dobArr[1] + ' ' + dobArr[3];
    return dobFormat
}
export default function CompleteOrder() {
    const [completeOrder,setCompleteOrder]=React.useState(false);
    const [gotoHome,setGotoHome]=React.useState(false);
    const [cart,setCart]=React.useState([]);
    const [total,setTotal]=React.useState(0);
    const [finalPrice,setFinalPrice]=React.useState(0);
    const [deliveryDetail,setDeliveryDetail]=React.useState({
        orderNo: Math.floor(100000 + Math.random() * 900000),
        date: randomDate(6),
        firstName: '',
        lastName:'',
        address:'',
        city:'',
        country:''
    })
    const handleHomeClick=()=>{
        setGotoHome(true);
    }
    const handleClick=()=>{
        setCompleteOrder(true);
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
    
    const handleChange = (event) => {
        setDeliveryDetail({ ...deliveryDetail, [event.target.name]: event.target.value });
    };

return(
    <MainContainer>
        {!completeOrder && <ContainerDiv>
        <Logo>Logo</Logo>
        <GridContainer>
            <FormContainer>
                <StyledText2>Contact Information</StyledText2>
                <StyledInput type='email' placeholder='Email or Phone Number'  required/>
                <StyledText2>Shipping Address</StyledText2>
                <StyledInput2 type='name' placeholder='Frist Name*' name='firstName' value={deliveryDetail.Firstname} onChange={handleChange} required/>
                <StyledInput3 type='name' placeholder='Last Name*' name='lastName' value={deliveryDetail.Lastname} onChange={handleChange} required/>
                <StyledInput type='address' placeholder='Address Line 1*' name='address' value={deliveryDetail.address} onChange={handleChange} required/>
                <StyledInput type='text' placeholder='Address Line 2'/>
                <StyledInput type='text' placeholder='City/Town*' name='city' value={deliveryDetail.city} onChange={handleChange} required/>
                <StyledInput2 type='text' placeholder='Country*' name='country' value={deliveryDetail.country} onChange={handleChange} required/>
                <StyledInput2 type='zip' placeholder='Postal/Zip Code'/>
                <input id='remember' type='checkbox'/>
                <StyledLabel for='remember'>Save this info for next time</StyledLabel>
                <br/>
                <StyledButton onClick={handleClick}>Complete Order</StyledButton>
            </FormContainer>
            <ProductContainer>
                <ProductListContainer>
                {cart.map((item,index)=>(
                    <div key={index}>
                    <Products>
                    <ProductImage src={item.src}/>
                    <ProductDetailContainer>
                        <ProductDetailTitle>{item.name}</ProductDetailTitle>
                        <ProductDetailTitleContainer>
                            <ProductDetailText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nemo eius odio explicabo porro error temporibus libero ex debitis quam.</ProductDetailText>
                        </ProductDetailTitleContainer>
                        <ProductPrice>{item.price}</ProductPrice>
                        
                    </ProductDetailContainer>
                    </Products>
                    <StyledHr2/>
                    </div>
                ))}
                </ProductListContainer>
                
                <TotalPriceContainer>
                    <SubtotalText>SUBTOTAL</SubtotalText>
                    <SubtotalPriceValue>${total}.00</SubtotalPriceValue>
                    <ShippingText>SHIPPING</ShippingText>
                    <ShippingPriceText>$50.00</ShippingPriceText>
                    <StyledHr3/>
                    <TotalText>TOTAL</TotalText>
                    <FinalPriceContainer><FinalPriceInnerContainer><USDText>USD</USDText><FinalPrice>${finalPrice}.00</FinalPrice></FinalPriceInnerContainer></FinalPriceContainer>
                </TotalPriceContainer>
            </ProductContainer>
            
        </GridContainer>
        <GotoHomeText onClick={handleHomeClick}><ArrowBackIosIcon style={{fontSize:'15px'}}/>Home</GotoHomeText>
        {gotoHome && <Navigate to='/'/>}
        
        <StyledHr4/>
        <Footer>
        
            <StyledText>Refund Policy</StyledText>
            <StyledText>Privacy Policy</StyledText>
            <StyledText>Terms of service</StyledText>
        </Footer>
    </ContainerDiv>}
    {completeOrder && <FinalPage deliveryDetail={deliveryDetail}/>}
    </MainContainer>
    
)
    
}
