import React, { createContext } from 'react';
import styled from '@emotion/styled';
import { keyframes } from 'styled-components'
import '../style/MainContent.css';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import NavBar from './Navbar';
import CartContext from './CartContext';
import productData from '../products.json';

const slideAnime = keyframes`
0% {
    transform: translateY(0);
    }
100% {
    transform: translateY(-100px);
    }
`

const StyledContainer=styled.div`
    display:flex;
    height:fit-content;
`
const StyledSidebar=styled.div`
    width:15%;
    height:fit-content;
    display:flex;
    flex-direction:column;
`
const StyledGrid=styled.div`
    width:85%;
    height:100vh;
    margin-top: 30px;
    animation-name: ${slideAnime};
    animation-duration: 40s;
`
const FilterContainer=styled.div`
    width:100%;
    text-align: left;
    padding:10px;
    margin-top:20px;
`
const SortContainer=styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    text-align: left;
    padding:10px;
`


const GridElements=styled.div`
    width:180px;
    height:240px;
    background:white;
    float:left;
    margin:15px;
    padding:10px;
    border-radius:10px;
    box-shadow: 1px 1px 2px  lightgrey;
    position:relative;
`
const StyledImg=styled.img`
    width:100%;
    border-radius:10px;
`
const PriceText=styled.p`
position:absolute;
bottom:45px;
right:10px;
font-size:11px
`
const NameText=styled.p`
position:absolute;
bottom:45px;
left:10px;
font-size:11px
`
const AddtoCartBtn=styled.button`
padding:5px;
width: 160px;
position:absolute;
bottom:7px;
left:10px;
border-radius:20px;
border:0px;
color:white;
background:black;
`
const SearchBarContainer=styled.div`
    display:flex;
    justify-content:center;
    algn-items:center;
    flex-direction: column;
    width:100%;
    
`
const InputContainer=styled.div`
    width:100%;
`
const StyledInput=styled.input`
    width:25%;
    padding:10px;
    border:0.5px solid lightgray;
    box-shadow:none;
    margin:10px;
    border-radius:20px
`
const ProductsContainer=styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    algn-items:center;
    gap:50px;
    height:25px;
    position:relative;
`
const StyledText=styled.p`
    color:gray;
    cursor:pointer;
    font-size:12px;
    font-weight: bold;
    &.selected {
        color:black;
    }
`
const StyledSortText=styled.p`
font-size:12px;
font-weight: bold;
`

const furnitureFilter=['Sofas','Beds','Tables','TV Stand','Wardrobe','Cabinets','Other'];
const electronicsFilter=['Smart Phones','Laptop','TV','Headphones','Speakers','Keyboard','Other'];

function removeItem(arr, item) {
    return arr.filter((f) => f !== item);
    }
let filtersItems=[];
let display=[];
function MainContent() {
    const [products, setCatagory] = React.useState(productData.furnitures);
    const [filters, setFilters]=React.useState(furnitureFilter);
    const [selection, setSelection]=React.useState('furnitures');
    const [cart,setCart]=React.useState([]);
    const [key, setKey] = React.useState(0);
    const [indicatorPosition, setIndicatorPosition] = React.useState(408.03125);
    const navElement = React.useRef();
    const handleCatagoryClick=(e)=>{
        handleClick(e);
        const cata=e.currentTarget.innerText;
        if(cata=='Furnitures'){
            setCatagory(productData.furnitures);
            setFilters(furnitureFilter);
            setKey(0);
            setSelection('furnitures');
        }
        else if(cata=='Electronics'){
            setCatagory(productData.electronics);
            setFilters(electronicsFilter);
            setKey(1);
            setSelection('electronics');
        }
    }
    const handleClick = (event) => {
        const linkLeft = event.currentTarget.getBoundingClientRect().left;
        const navLeft = navElement.current.getBoundingClientRect().left;
        const singleLinkLeft = linkLeft - navLeft;
        setIndicatorPosition(singleLinkLeft);
    };
    const handleChange = (e) => { 
        const clickedFilter=e.currentTarget.value;
    };
    const handleAdd=(cata)=>{
        setCart([...cart, cata]);
        
    }
    const handleDelete=(el)=>{
        let hardCopy = [...cart];
        hardCopy = hardCopy.filter((cartItem) => cartItem.id !== el.id);
        setCart(hardCopy);
    }
    const Indicator = styled.div`
        position: absolute;
        bottom: 5px;
        width:20px;
        left: ${({ left }) => `${left+15}px`};
        height: 3px;
        background: black;
        transition: all .3s ease-in-out;
        border-radius:10px;
`;
    return (
        <div>
            <CartContext.Provider value={{cart,handleDelete}}>
                <NavBar cartItems={cart}/>
            </CartContext.Provider>
            <SearchBarContainer ref={navElement}>
            <InputContainer>
                <StyledInput placeholder='Search'/>
            </InputContainer>
            <br/>
            <ProductsContainer >
                <Indicator left={indicatorPosition}/>
                <StyledText className={selection=='furnitures' ? 'selected' :''} onClick={handleCatagoryClick}>Furnitures</StyledText>
                <StyledText className={selection=='electronics' ? 'selected' :''} onClick={handleCatagoryClick}>Electronics</StyledText>
                <StyledText onClick={handleCatagoryClick}>Vehicles</StyledText>
                <StyledText onClick={handleCatagoryClick}>Accessories</StyledText>
                <StyledText onClick={handleCatagoryClick}>Fashion</StyledText>
                
            </ProductsContainer>
            <br/>
            <hr/>
        </SearchBarContainer>
            <StyledContainer>
            <StyledSidebar>
                
                <FilterContainer>
                    <p className='title filter-text'>Filter</p>
                    <hr/>
                    <div className="check__item " key={key}>
                        {filters.map(filter=>(
                            <label key={filter}>
                                <input type="checkbox" onChange={handleChange} className="default__check" name="filter" value={filter}/>
                                <span className="custom__check"></span>
                                <p className='tracking-in-expand filter-text'>{filter}</p>
                            </label>
                        ))}
                    </div>
                    
                </FilterContainer>
                
                <SortContainer>
                    <StyledSortText className='title'>Sort</StyledSortText>
                    <hr/>
                    <form>
                    <div className="check__item">
                    <label>
                        <input type="radio"  className="default__check" name='sort'/>
                        <span className="custom__check"></span>
                        <StyledSortText>Discounts</StyledSortText>
                    </label>
                    <label>
                        <input type="radio" className="default__check" name='sort'/>
                        <span className="custom__check"></span>
                        <StyledSortText>Best Selling</StyledSortText>
                    </label>
                    <label>
                        <input type="radio" className="default__check" name='sort'/>
                        <span className="custom__check"></span>
                        <StyledSortText>Price, low to high</StyledSortText>
                    </label>
                    <label>
                        <input type="radio" className="default__check" name='sort'/>
                        <span className="custom__check"></span>
                        <StyledSortText>Price, high to low</StyledSortText>
                    </label>
                    </div>
                    </form>
                </SortContainer>
            </StyledSidebar>
            <div className='grid-container slide' key={key}>
                {products.map(product=>(
                    <GridElements  key={product.id}>
                    <StyledImg src={product.src}/>
                        <NameText>{product.name}</NameText>
                        <PriceText>{product.price}</PriceText>
                        <AddtoCartBtn className="effect effect-1" onClick={()=>handleAdd(product)}>Add to cart</AddtoCartBtn>
                </GridElements>
                ))}
            </div>
        </StyledContainer>
        </div>
    );
}

export default MainContent;
