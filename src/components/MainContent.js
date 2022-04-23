import React, { createContext } from 'react';
import styled from '@emotion/styled';
import { keyframes } from 'styled-components'
import '../style/MainContent.css';
import NavBar from './Navbar';
import CartContext from './CartContext';
import productData from '../products.json';
import discountImg from '../images/discount.png'
import bestSellingImg from '../images/bestSelling.png';
import CheckIcon from '@mui/icons-material/Check';
const slideAnime = keyframes`
0% {
    transform: translateY(0);
    }
100% {
    transform: translateY(-100px);
    }
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

const StyledContainer=styled.div`
    display:flex;
    height:fit-content;
`
const StyledSidebar=styled.div`
    width:15%;
    height:fit-content;
    display:flex;
    flex-direction:column;
    @media(max-width:500px){
        display:none;
    }
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
    width:200px;
    height:250px;
    background:white;
    float:left;
    margin:15px;
    margin-left: 35px;
    padding:10px;
    border-radius:10px;
    box-shadow: 1px 1px 2px  lightgrey;
    position:relative;
    @media(max-width:500px){
        width:100%;
        height:450px;
        margin-left:0px;
    }
`
const StyledImg=styled.img`
    width:100%;
    border-radius:10px;
    @media(max-width:500px){
        width:100%
    }
`
const PriceText=styled.p`
position:absolute;
bottom:45px;
right:10px;
font-size:11px;
@media(max-width:500px){
    font-size: 15px;
    margin-top:5px;
    font-weight:bold;
}
`
const NameText=styled.p`
position:absolute;
bottom:45px;
left:10px;
font-size:11px;
@media(max-width:500px){
    font-size: 15px;
    margin-top:5px;
    font-weight:bold;
}
`
const AddtoCartBtn=styled.button`
padding:7px;
width: 90%;
position:absolute;
bottom:7px;
left:10px;
border-radius:20px;
border:0px;
color:white;
background:black;
font-size:10px;
&.styleClassName{
    background:white;
    color:black;
    border:1px solid gray;
    font-weight: bolder;
    font-size:10px;
    padding:5px
};
@media(max-width:500px){
    width: 80%;
    margin-left:7%;
    padding:10px;
}
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
    border-radius:20px;
    @media(max-width:500px){
        width: 80%;
    }
`
const ProductsContainer=styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    algn-items:center;
    gap:50px;
    height:25px;
    position:relative;
    @media(max-width:500px){
        gap:20px;
        width: 100%;
    }
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
const StyledCheckIcon=styled(CheckIcon)`
    font-size:12px;
    align-text:center;
`
const StyledHr3=styled.hr`
    width:100%;
    border: 0;
    height: 0;
    border-top: .1px solid lightgray;
    padding: 0;
`
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

//drawer

const Burger=styled.div`
    position: fixed;
    top: 20px;
    right: 70px;
    background: #17141d;
    width:40px;
    z-index: 1000;
    height:30px;
    cursor: pointer;
    transition: 0.3s linear;
    box-shadow: 2px 2px 5px #17141d;
    display:none;
    @media(max-width:500px){
        display:inline;
        position: fixed;
        top: 690px;
        right: 20px;
    };
`
const LineContainer=styled.div`
    width:100%;
    height:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
`
const Line=styled.div`
    width: 22px;
    margin-bottom: 5px;
    height: 2px;
    background-color: white;
    &:last-child {
        margin-bottom: 0;
    }
`
const Nav=styled.div`
    height: 100vh;
    width: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    color: white;
    position: fixed;
    right: 0;
    z-index: 999;
    transform: translateX(100%);
    transition: transform 0.3s linear;
    margin-left: 200px;
    padding:30px 10px 10px 10px;
    &.active {
        transform: translateX(0);
    };
    @media(min-width:501px){
        display:none;
    }
`
const SortContainer2=styled.div`
    color:black;
    width:100%;
    margin-top:30px;
    font-size:20px
`
const FilterContainer2=styled.div`
    color:black;
    width:100%;
    margin-top:30px;
`
const SortAndFilterContainer=styled.div`
    width:100%;
    height:100%;
    `

let idInCart=[];
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
    const [indicatorPosition, setIndicatorPosition] = React.useState(18);
    const navElement = React.useRef();
    const [clickedItem, setClickedItem]=React.useState([]);
    const [itemsInCart, setItemsInCart] = React.useState([]);
    const [unsorted,setUnsorted]=React.useState(true);
    const [width,setWidth]=React.useState();
    const gridElement=React.useRef();
    const [showNav,setShowNav]=React.useState(false);

    const Indicator = styled.div`
    position: absolute;
    bottom: 5px;
    width:20px;
    left: ${({ left }) => `${left+15}%`};
    height: 3px;
    background: black;
    transition: all .3s ease-in-out;
    border-radius:10px;
    @media(max-width:400px){
        left: ${({ left }) => `${left+19}px`};
        width:17px;
    }
`;

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
        else if(cata=='Vehicles'){
            setProducts([]);
            // setFilters(electronicsFilter);
            setKey(1);
            setSelection('vehicles');
        }
        else if(cata=='Accessories'){
            setProducts([]);
            // setFilters(electronicsFilter);
            setKey(1);
            setSelection('accessories');
        }
        else if(cata=='Fashion'){
            setProducts([]);
            // setFilters(electronicsFilter);
            setKey(1);
            setSelection('fashion');
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
            setUnsorted(false);
        }
        else if(checked=='Best Selling'){
            setDiscount(false);
            setBestSelling(true);
            setUnsorted(false);
        }
        else if(checked=='Price, low to high'){
            setDiscount(false);
            setBestSelling(false);
            products.sort(function(a, b){
                return a.priceNumber - b.priceNumber;
            })
            setProducts(products);
            setUnsorted(false);
        }
        else if(checked=='Price, high to low'){
            setDiscount(false);
            setBestSelling(false);
            products.sort(function(a, b){
                return b.priceNumber - a.priceNumber;
            })
            setProducts([]);
            setProducts(products);
            setUnsorted(false);
        }
        else if(checked=='Unsorted'){
            setDiscount(false);
            setBestSelling(false);
            setUnsorted(true);
            setProducts(products);
        }
    }

    const handleAdd=(cata,e)=>{
        if(!cart.includes(cata)){
            setCart([...cart, cata]);
            setAddedtoCart(true);
        }
        e.currentTarget.classList.toggle('styleClassName');
        setClickedItem([...clickedItem, e.currentTarget.id]);
        
    }
    const handleDelete=(el)=>{
        let hardCopy = [...cart];
        hardCopy = hardCopy.filter((cartItem) => cartItem.id !== el.id);
        setCart(hardCopy);
        el.quantity=1;
    }

    React.useEffect(() => {
        setItemsInCart([]);
        idInCart=[];
        cart.map(item=>{
            setItemsInCart([...itemsInCart,item.id]);
            idInCart.push(item.id);
        });
    }, [cart]);

    React.useEffect(()=>{
        function handleResize() {
            setWidth(window.innerWidth);
        }
        window.addEventListener('resize', handleResize);
        
        if(width>'500px'){
            setIndicatorPosition(308.03125);
        }
        else if(width<='500px'){
            setIndicatorPosition(9.03125);
        }
        return () => window.removeEventListener('resize', handleResize);
    },[])

    const handleBurgerClick=(e)=>{
        setShowNav(!showNav);
    }

    return (
        <div style={{position:'relative'}}>
            <Burger className={showNav ? 'active' : ''} onClick={handleBurgerClick}>
                <LineContainer>
                    <Line></Line>
                    <Line></Line>
                    <Line></Line>
                </LineContainer>
            </Burger>
            <Nav className={showNav ? 'active' : ''}>
                <SortAndFilterContainer>
                <FilterContainer2>
                    <p className='title filter-text'>Filter</p>
                    <StyledHr3/>
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
                    
                </FilterContainer2>
            <SortContainer2>
                    <p className='title'>Sort</p>
                    <StyledHr3/>
                    <div className="check__item">
                    <label>
                        <input type="radio" onChange={handleSort} className="default__check" name='sort' value='Unsorted' checked={unsorted ? true:false}/>
                        <span className="custom__check"></span>
                        <StyledSortText>Unsorted</StyledSortText>
                    </label>
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
                </SortContainer2>
                </SortAndFilterContainer>
            </Nav>
            <CartContext.Provider value={{cart,handleDelete}}>
                <NavBar showComponent={false}/>
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
                <StyledText className={selection=='vehicles' ? 'selected' :''} onClick={handleCatagoryClick}>Vehicles</StyledText>
                <StyledText className={selection=='accessories' ? 'selected' :''} onClick={handleCatagoryClick}>Accessories</StyledText>
                <StyledText className={selection=='fashion' ? 'selected' :''} onClick={handleCatagoryClick}>Fashion</StyledText>
            </ProductsContainer>
            <br/>
            <StyledHr3/>
        </SearchBarContainer>
            <StyledContainer>
            <StyledSidebar>
                
                <FilterContainer>
                    <p className='title filter-text'>Filter</p>
                    <StyledHr3/>
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
                    <StyledHr3/>
                    <form>
                    <div className="check__item">
                    <label>
                        <input type="radio" onChange={handleSort} className="default__check" name='sort' value='Unsorted' checked={unsorted ? true:false}/>
                        <span className="custom__check"></span>
                        <StyledSortText>Unsorted</StyledSortText>
                    </label>
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
                    <GridElements ref={gridElement}  key={product.id}>
                        <ImageContainer>
                            <StyledDiscountImg src={discountImg}/>
                            <StyledImg src={product.src}/>
                        </ImageContainer>
                        <NameText>{product.name}</NameText>
                        <PriceText>{product.price}</PriceText>
                        <AddtoCartBtn id={product.id} className={`${idInCart.includes(product.id) ? 'styleClassName' : 'effect effect-1'}`} onClick={(e)=>handleAdd(product,e) } disabled={idInCart.includes(product.id) ? true : false}>{idInCart.includes(product.id) ? 'ADDED  ' : 'ADD TO CART'}{idInCart.includes(product.id) ? <StyledCheckIcon/> : null} </AddtoCartBtn>
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
                        <AddtoCartBtn id={product.id} className={`${idInCart.includes(product.id) ? 'styleClassName' : 'effect effect-1'}`} onClick={(e)=>handleAdd(product,e) } disabled={idInCart.includes(product.id) ? true : false}>{idInCart.includes(product.id) ? 'ADDED  ' : 'ADD TO CART'}{idInCart.includes(product.id) ? <StyledCheckIcon/> : null} </AddtoCartBtn>
                </GridElements>
                ))
            }
                {products.map((product,index)=>(
                    <GridElements  key={product.id}>
                    <StyledImg src={product.src}/>
                        <NameText>{product.name}</NameText>
                        <PriceText>{product.price}</PriceText>
                        <AddtoCartBtn id={product.id} className={`${idInCart.includes(product.id) ? 'styleClassName' : 'effect effect-1'}`} onClick={(e)=>handleAdd(product,e) } disabled={idInCart.includes(product.id) ? true : false}>{idInCart.includes(product.id) ? 'ADDED  ' : 'ADD TO CART'}{idInCart.includes(product.id) ? <StyledCheckIcon/> : null} </AddtoCartBtn>
                </GridElements>
                ))}
            
            </div>
        </StyledContainer>
        </div>
    );
}

export default MainContent;
