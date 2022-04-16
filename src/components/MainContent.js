import React, { createContext } from 'react';
import styled from '@emotion/styled';
import { keyframes } from 'styled-components'
import '../style/MainContent.css';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import NavBar from './Navbar';
import CartContext from './CartContext';
import productData from '../products.json';
import discountImg from '../images/discount.png'
import bestSellingImg from '../images/bestSelling.png'
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
    display:flex;
    justify-content:center;
    algn-items:center;
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

const furnitureFilter=[
    {
        name:'Sofas',
        id:1
    },
    {
        name:'Beds',
        id:2
    },
    {
        name:'Tables',
        id:3
    },
    {
        name:'TV Stand',
        id:4
    },
    {
        name:'Wardrobe',
        id:5
    },
    {
        name:'Cabinets',
        id:6
    },
    {
        name:'Other',
        id:7
    },
    ];
    const electronicsFilter=[
        {
            name:'Smart Phones',
            id:1
        },
        {
            name:'Laptop',
            id:2
        },
        {
            name:'TV',
            id:3
        },
        {
            name:'Headphones',
            id:4
        },
        {
            name:'Speakers',
            id:5
        },
        {
            name:'Keyboard',
            id:6
        },
        {
            name:'Other',
            id:7
        },
        ];

const StyledDiscountImg=styled.img`
    width:70px;
    position:absolute;
    top:0px;
    right:0px
`
const ImageContainer=styled.div`
width:fit-content;
position:relative;
`
function MainContent() {
    const [products, setProducts] = React.useState(productData.furnitures);
    const [Discountproducts, setDiscountProducts] = React.useState(productData.discounts.furnitures);
    const [BestSellingproducts, setBestSellingProducts] = React.useState(productData.bestSelling.furnitures);
    const [addedtoCart,setAddedtoCart]=React.useState(false);
    const [bestSelling, setBestSelling] = React.useState(false);
    const [filters, setFilters]=React.useState(furnitureFilter);
    const [selection, setSelection]=React.useState('furnitures');
    const [discount, setDiscount]=React.useState(false);
    const [checked, setChecked]=React.useState('');
    const [cart,setCart]=React.useState([]);
    const [key, setKey] = React.useState(0);
    const [indicatorPosition, setIndicatorPosition] = React.useState(408.03125);
    const navElement = React.useRef();
    const handleCatagoryClick=(e)=>{
        handleClick(e);
        const cata=e.currentTarget.innerText;
        if(cata=='Furnitures'){
            setProducts(productData.furnitures);
            setFilters(furnitureFilter);
            setKey(0);
            setSelection('furnitures');
            setDiscountProducts(productData.discounts.furnitures);
        }
        else if(cata=='Electronics'){
            setProducts(productData.electronics);
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
    const handleFilter = (value) => { 
        if(checked==value){
            setChecked('');
            setProducts(productData[selection])
        }
        else{
            setChecked(value);
            setProducts(productData[selection].filter(product=>product.catagory.indexOf(value)>=0))
        }
        
    };
    const handleSort= (e)=>{
        const checked=e.target.value;
        if(checked=='Discounts'){
            setDiscount(true);
            setBestSelling(false)
        }
        else if(checked=='Best Selling'){
            setDiscount(false);
            setBestSelling(true);
        }
        else if(checked=='Price, low to high'){
            setDiscount(false);
            setBestSelling(false);
            products.sort(function(a, b){
                return a.priceNumber - b.priceNumber;
            })
            setProducts(products);
        }
        else if(checked=='Price, high to low'){
            setDiscount(false);
            setBestSelling(false);
            products.sort(function(a, b){
                return b.priceNumber - a.priceNumber;
            })
            setProducts([]);
            setProducts(products);
        }
    }

    const handleAdd=(cata)=>{
        if(!cart.includes(cata)){
            setCart([...cart, cata]);
            setAddedtoCart(true);
        }
        
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
                        {filters.map((filter,id)=>(
                            <label key={id}>
                                <input 
                                type="checkbox" 
                                onChange={()=>handleFilter(filter.name)} 
                                className="default__check" 
                                name="filter" 
                                value={filter.name}
                                checked={checked==filter.name ? true:false}
                                />

                                <span className="custom__check"></span>
                                <p className='tracking-in-expand filter-text'>{filter.name}</p>
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
                        <input type="radio" onChange={handleSort}  className="default__check" name='sort' value='Discounts'/>
                        <span className="custom__check"></span>
                        <StyledSortText>Discounts</StyledSortText>
                    </label>
                    <label>
                        <input type="radio" onChange={handleSort} className="default__check" name='sort' value='Best Selling'/>
                        <span className="custom__check"></span>
                        <StyledSortText>Best Selling</StyledSortText>
                    </label>
                    <label>
                        <input type="radio" onChange={handleSort} className="default__check" name='sort' value='Price, low to high'/>
                        <span className="custom__check"></span>
                        <StyledSortText>Price, low to high</StyledSortText>
                    </label>
                    <label>
                        <input type="radio" onChange={handleSort} className="default__check" name='sort' value='Price, high to low'/>
                        <span className="custom__check"></span>
                        <StyledSortText>Price, high to low</StyledSortText>
                    </label>
                    </div>
                    </form>
                </SortContainer>
            </StyledSidebar>
            <div className='grid-container slide' key={key}>
            {discount && 
                Discountproducts.map(product=>(
                    <GridElements  key={product.id}>
                        <ImageContainer>
                            <StyledDiscountImg src={discountImg}/>
                            <StyledImg src={product.src}/>
                        </ImageContainer>
                        <NameText>{product.name}</NameText>
                        <PriceText>{product.price}</PriceText>
                        <AddtoCartBtn className="effect effect-1" onClick={()=>handleAdd(product)}>Add to cart</AddtoCartBtn>
                </GridElements>
                ))

            }
            {bestSelling && 
                BestSellingproducts.map(product=>(
                    <GridElements  key={product.id}>
                        <ImageContainer>
                            <StyledDiscountImg src={bestSellingImg}/>
                            <StyledImg src={product.src}/>
                        </ImageContainer>
                        <NameText>{product.name}</NameText>
                        <PriceText>{product.price}</PriceText>
                        <AddtoCartBtn className="effect effect-1"  onClick={()=>handleAdd(product)}>Add to cart</AddtoCartBtn>
                </GridElements>
                ))
            }
                {products.map(product=>(
                    <GridElements  key={product.id}>
                    <StyledImg src={product.src}/>
                        <NameText>{product.name}</NameText>
                        <PriceText>{product.price}</PriceText>
                        <AddtoCartBtn className="effect effect-1" id={addedtoCart ? 'added' : null} onClick={()=>handleAdd(product)}>Add to cart</AddtoCartBtn>
                </GridElements>
                ))}
            
            </div>
        </StyledContainer>
        </div>
    );
}

export default MainContent;
