import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from 'styled-components'
import '../style/MainContent.css';

const slideAnime = keyframes`
0% {
    transform: translateY(0);
    }
100% {
    transform: translateY(-100px);
    }
`
const sofa=[
    {
        name:'Wells Leather Sofa',
        src:'https://cb.scene7.com/is/image/Crate/WellsLthrSofa84inCynSOSSF20_1x1/$web_plp_card$/200720144725/wells-leather-tuxedo-sofa.jpg',
        price:'$3,099.00'
    },
    {
        name:'Gather Sofa',
        src:'https://cb.scene7.com/is/image/Crate/Gather88inSofaICSOSSF20_3D_1x1/$web_plp_card$/200820160640/gather-sofa.jpg',
        price:'$1,849.00'
    },
     {
        name:'Avondale Wood Leg Sofa',
        src:'https://cb.scene7.com/is/image/Crate/PacificSofa2StBCSOSSS21_3D/$web_plp_card$/210427160306/pacific-2-seat-track-arm-sofa-with-wood-legs.jpg',
        price:'$1,849.00'
    }
];
const beds=[
    {
        name:'Lafayette Mist Upholstered Bed',
        src:'https://cb.scene7.com/is/image/Crate/PacificSofa2StBCSOSSS21_3D/$web_plp_card$/210427160306/pacific-2-seat-track-arm-sofa-with-wood-legs.jpg',
        price:'$2,849.00'
    },
    {
        name:'Terra Natural Oak Bed',
        src:'https://cb.scene7.com/is/image/Crate/LafayetteUphQnBdLMSOSSS21_3D/$web_plp_card$/210113175545/lafayette-mist-upholstered-bed.jpg',
        price:'$1,200.00'
    },
    {
        name:'Gather Ivory Upholstered Bed',
        src:'https://cb.scene7.com/is/image/Crate/GatherQnBdIvorySOSSS22_3D/$web_plp_card$/220121175412/gather-white-upholstered-bed.jpg',
        price:'$1,999.00'
    },
]
const chairs=[{
        name:'Wells Leather Chair',
        src:'https://cb.scene7.com/is/image/Crate/WellsLthrChairCynSOSSF20_1x1/$web_plp_card$/200720144738/wells-leather-tuxedo-chair.jpg',
        price:'$1,899.00'
    },
    {
        name:'Ojai Upholstered Wood Frame Accent Chair',
        src:'https://cb.scene7.com/is/image/Crate/OjaiUphWFAcntChrBCSOSSS22_3D/$web_plp_card$/220118124451/ojai-upholstered-wood-frame-accent-chair.jpg',
        price:'$799.00'
},]
const furnitures=[
        {
            name:'Gather Sofa',
            src:'https://cb.scene7.com/is/image/Crate/Gather88inSofaICSOSSF20_3D_1x1/$web_plp_card$/200820160640/gather-sofa.jpg',
            price:'$1,849.00'
        },
        {
            name:'Ojai Chair',
            src:'https://cb.scene7.com/is/image/Crate/OjaiUphWFAcntChrBCSOSSS22_3D/$web_plp_card$/220118124451/ojai-upholstered-wood-frame-accent-chair.jpg',
            price:'$799.00'
        },
        {
            name:'Avondale Sofa',
            src:'https://cb.scene7.com/is/image/Crate/TerraQnBedSOSSS22/$web_plp_card$/211220110249/terra-bed.jpg',
            price:'$1,849.00'
        },
        {
            name:'Lafayette Bed',
            src:'https://cb.scene7.com/is/image/Crate/PacificSofa2StBCSOSSS21_3D/$web_plp_card$/210427160306/pacific-2-seat-track-arm-sofa-with-wood-legs.jpg',
            price:'$2,849.00'
        },
        {
            name:'Terra Bed',
            src:'https://cb.scene7.com/is/image/Crate/LafayetteUphQnBdLMSOSSS21_3D/$web_plp_card$/210113175545/lafayette-mist-upholstered-bed.jpg',
            price:'$1,200.00'
        },
        {
            name:'Wells Chair',
            src:'https://cb.scene7.com/is/image/Crate/WellsLthrChairCynSOSSF20_1x1/$web_plp_card$/200720144738/wells-leather-tuxedo-chair.jpg',
            price:'$1,899.00'
        },
        {
            name:'Gather Bed',
            src:'https://cb.scene7.com/is/image/Crate/GatherQnBdIvorySOSSS22_3D/$web_plp_card$/220121175412/gather-white-upholstered-bed.jpg',
            price:'$1,999.00'
        },
        {
            name:'Wells Sofa',
            src:'https://cb.scene7.com/is/image/Crate/WellsLthrSofa84inCynSOSSF20_1x1/$web_plp_card$/200720144725/wells-leather-tuxedo-sofa.jpg',
            price:'$3,099.00'
        },
];
const electronics=[
    {
        name:'Apple iPhone 13',
        src:'https://c1.neweggimages.com/ProductImageCompressAll300/AN2HS211002kKERn.jpg',
        price:'$1,709.99'
    },
    {
        name:'Apple iPhone SE ',
        src:'https://c1.neweggimages.com/ProductImageCompressAll300/AAM8S200527Iir5F.jpg',
        price:'$799.00'
    },
    {
        name:'Dell - Inspiron 7000',
        src:'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6432/6432554_sd.jpg;maxHeight=200;maxWidth=300',
        price:'$1,279.99'
    },
    {
        name:'ASUS - Vivobook',
        src:'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6469/6469397_sd.jpg;maxHeight=200;maxWidth=300',
        price:'$319.99'
    },
    {
        name:'Samsung - 55" 4K',
        src:'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6401/6401735_sd.jpg;maxHeight=200;maxWidth=300',
        price:'$409.99'
    },
    {
        name:'LG - 86" 4K',
        src:'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6452/6452986_sd.jpg;maxHeight=200;maxWidth=300',
        price:'$1,899.00'
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
const PriceButtoncontainer=styled.div`
    position:relative;
    height:50px
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
    border:1px solid black;
`
const StyledText=styled.p`
    color:gray;
    cursor:pointer;
    font-size:12px;
    font-weight: bold;
`
const StyledSortText=styled.p`
font-size:12px;
font-weight: bold;
`

const furnitureFilter=['Sofas','Beds','Tables','TV Stand','Wardrobe','Cabinets','Other'];
const electronicsFilter=['Smart Phones','Laptop','TV','Headphones','Speakers','Keyboard','Other'];

function MainContent(props) {
    const [catagory, setCatagory] = React.useState(furnitures);
    const [filters, setFilters]=React.useState(furnitureFilter);
    const [key, setKey] = React.useState(0);
    const [indicatorPosition, setIndicatorPosition] = React.useState();
    const [indicatorWidth, setIndicatorWidth] = React.useState();
    const navElement = React.useRef();
    const handleCatagoryClick=(e)=>{
        handleClick(e);
        const cata=e.currentTarget.innerText;
        if(cata=='Furnitures'){
            setCatagory(furnitures);
            setFilters(furnitureFilter);
            setKey(0);
        }
        else if(cata=='Electronics'){
            setCatagory(electronics);
            setFilters(electronicsFilter);
            setKey(1);
        }
    }
    const handleClick = (event) => {
        const linkLeft = event.currentTarget.getBoundingClientRect().left;
        const navLeft = navElement.current.getBoundingClientRect().left;
        const linkWidth = event.currentTarget.getBoundingClientRect().width;
        const singleLinkWidth = linkWidth;
        const singleLinkLeft = linkLeft - navLeft;
        setIndicatorPosition(singleLinkLeft);
        setIndicatorWidth(singleLinkWidth);
        console.log(navLeft);
    };
    const Indicator = styled.div`
  position: absolute;
  bottom: 5px;
  width: ${({ width }) => `${width}px`};
  left: ${({ left }) => `${left}px`};
  height: 3px;
  background: black;
  transition: all .5s ease-in-out;
`;
    return (
        <div>
            <SearchBarContainer ref={navElement}>
            <InputContainer>
                <StyledInput placeholder='Search'/>
            </InputContainer>
            <br/>
            <ProductsContainer >
                <StyledText onClick={handleCatagoryClick}>Furnitures</StyledText>
                <StyledText onClick={handleCatagoryClick}>Electronics</StyledText>
                <StyledText onClick={handleCatagoryClick}>Vehicles</StyledText>
                <StyledText onClick={handleCatagoryClick}>Accessories</StyledText>
                <StyledText onClick={handleCatagoryClick}>Fashion</StyledText>
                <Indicator left={indicatorPosition} width={indicatorWidth} />
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
                                <input type="checkbox" className="default__check" name="filter" value={filter}/>
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
                {catagory.map((cata,id)=>(
                    <GridElements key={id}>
                    <StyledImg src={cata.src}/>
                        <NameText>{cata.name}</NameText>
                        <PriceText>{cata.price}</PriceText>
                        <AddtoCartBtn>Add to cart</AddtoCartBtn>
                    
                </GridElements>
                ))}
                
            </div>
        </StyledContainer>
        </div>
    );
}

export default MainContent;
