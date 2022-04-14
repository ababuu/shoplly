import React from 'react';
import styled from '@emotion/styled';
import '../style/MainContent.css'

const StyledContainer=styled.div`
    display:flex;
`
const StyledSidebar=styled.div`
    border:1px solid red;
    width:20%;
    height:100vh;
    display:flex;
    flex-direction:column;
`
const StyledGrid=styled.div`
    border: 1px solid green;
    width:80%;
    height:100vh;
`
const FilterContainer=styled.div`
    width:100%;
    border: 1px solid black;
    text-align: left;
    padding:10px;
    margin-top:20px;
`
const SortContainer=styled.div`
    width:100%;
    border: 1px solid black;
    display:flex;
    flex-direction:column;
    text-align: left;
    padding:10px;
`

const StyledLabel=styled.label`

`

function MainContent() {
    return (
        <StyledContainer>
            <StyledSidebar>
                
                <FilterContainer>
                    <p className='title'>Filter</p>
                    <hr/>
                    <div className="check__item">
                        <label>
                        <input type="checkbox" className="default__check" name="sofas" value="sofas"/>
                        <span className="custom__check"></span>
                        <p>Sofas</p>
                        </label>
                        <label>
                        <input type="checkbox" className="default__check" id="beds" name="beds" value="beds"/>
                        <span className="custom__check"></span>
                        <p>Beds</p>
                        </label>
                        <label>
                        <input type="checkbox" className="default__check" name="tables" value="tables"/>
                        <span className="custom__check"></span>
                        <p>Tables</p>
                        </label>
                        <label>
                        <input type="checkbox" className="default__check" name="tv-stands" value="tv stands"/>
                        <span className="custom__check"></span>
                        <p>TV Stand</p>
                        </label>
                        <label>
                        <input type="checkbox" className="default__check" name="wardrobes" value="wardrobes"/>
                        <span className="custom__check"></span>
                        <p>Wardrobe</p>
                        </label>
                        <label>
                        <input type="checkbox" className="default__check" name="cabinets" value="cabinets"/>
                        <span className="custom__check"></span>
                        <p>Cabinets</p>
                        </label>
                        <label>
                        <input type="checkbox" className="default__check" name="other" value="other"/>
                        <span className="custom__check"></span>
                        <p>Other</p>
                        </label>
                    </div>
                    
                </FilterContainer>
                
                <SortContainer>
                    <p className='title'>Sort</p>
                    <hr/>
                    <div className="check__item">
                    <label>
                        <input type="radio" className="default__check"/>
                        <span className="custom__check"></span>
                        <p>Discounts</p>
                    </label>
                    <label>
                        <input type="radio" className="default__check"/>
                        <span className="custom__check"></span>
                        <p>Best Selling</p>
                    </label>
                    <label>
                        <input type="radio" className="default__check"/>
                        <span className="custom__check"></span>
                        <p>Price, low to high</p>
                    </label>
                    <label>
                        <input type="radio" className="default__check"/>
                        <span className="custom__check"></span>
                        <p>Price, high to low</p>
                    </label>
                    </div>
                    
                </SortContainer>
            </StyledSidebar>
            <StyledGrid>

            </StyledGrid>
        </StyledContainer>
    );
}

export default MainContent;
