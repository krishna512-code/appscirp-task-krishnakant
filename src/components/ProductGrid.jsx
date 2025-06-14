import React, { useState, useRef, useEffect } from 'react';
import ProductCard from './ProductCard';
import FilterSidebar from './FilterSidebar';
import styled, { css } from 'styled-components';
import { ChevronRight, ChevronLeft, ChevronDown } from 'lucide-react';

const ChevronAndFilter = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const GridHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 0 12px 0;
  border-bottom: 1px solid #E5E5E5;
  border-top: 1px solid #E5E5E5;
  margin: 24px 0 8px 0;
  font-family: inherit;
  /* background: #fff; */
  @media (max-width: 600px) {
    display: none;
  }
`;
const GridHeaderCenter = styled.div`
  display: flex;
  align-items: center;
  gap: 22px;
`;
const GridHeaderCount = styled.span`
  font-weight: 700;
  font-size: 1.25rem;
  letter-spacing: 0.5px;
  color: #222;
  font-family: inherit;
`;
const GridHeaderChevron = styled.span`
  display: flex;
  align-items: center;
  color: #222;
  font-weight: 400;
`;
const GridHeaderFilterLink = styled.span`
  color: #8B8681;
  font-family: 'Georgia', 'Times New Roman', serif;
  font-weight: 400;
  font-size: 1.15rem;
  text-decoration: underline;
  cursor: pointer;
  letter-spacing: 0.5px;
  transition: color 0.2s;
  display: flex;
  align-items: center;
  gap: 6px;
  &:hover { color: #d7263d; }
`;
const GridHeaderRight = styled.div`
  font-weight: 700;
  font-size: 1.25rem;
  color: #222;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  user-select: none;
  position: relative;
  font-family: inherit;
`;
const Dropdown = styled.div`
  position: absolute;
  top: 120%;
  right: 0;
  min-width: 220px;
  background: #fff;
  border: 1px solid #eee;
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);
  border-radius: 8px;
  z-index: 10;
  padding: 12px 0;
`;
const DropdownItem = styled.div`
  padding: 12px 24px;
  font-size: 1.05rem;
  font-weight: ${props => props.selected ? 700 : 500};
  color: #222;
  background: ${props => props.selected ? '#f7f7f7' : 'transparent'};
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover { background: #f2f2f2; }
`;
const CheckMark = styled.span`
  color: #111;
  font-size: 1.2em;
  margin-right: 10px;
`;
const ProductGridWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 1440px;
  padding: 0 24px;
`;
const StyledProductGrid = styled.div`
  display: grid;
  gap: 32px;
  grid-template-columns: repeat(4, 1fr);
  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
    padding: 0 4px;
  }
`;
const Overlay = styled.div`
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.18);
  z-index: 100;
  display: flex;
`;
const SidebarWrapper = styled.div`
  background: #fff;
  min-width: 320px;
  max-width: 90vw;
  height: 100vh;
  box-shadow: 2px 0 16px rgba(0,0,0,0.08);
  z-index: 101;
  @media (max-width: 600px) {
    min-width: 80vw;
  }
`;
const MobileSidebarOverlay = styled.div`
  display: none;
  @media (max-width: 600px) {
    display: flex;
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(0,0,0,0.18);
    z-index: 200;
    justify-content: flex-start;
  }
`;
const SidebarDrawer = styled.div`
  background: #fff;
  width: 80vw;
  max-width: 340px;
  height: 100vh;
  box-shadow: 2px 0 16px rgba(0,0,0,0.08);
  z-index: 201;
  position: relative;
`;
const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  background: none;
  border: none;
  font-size: 2rem;
  color: #888;
  cursor: pointer;
  z-index: 202;
`;
const MainContent = styled.div`
  display: grid;
  grid-template-columns: ${props => props.$showFilter ? '320px 1fr' : '1fr'};
  gap: 32px;
  align-items: flex-start;
  transition: grid-template-columns 0.3s cubic-bezier(0.4,0,0.2,1);
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;
const SidebarColumn = styled.div`
  background: #fff;
  border-right: 1px solid #eee;
  min-width: 320px;
  max-width: 320px;
  height: 100%;
  @media (max-width: 900px) {
    display: none;
  }
`;

const MobileHeaderBar = styled.div`
  display: none;
  @media (max-width: 600px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    border-bottom: 1px solid #E5E5E5;
    border-top: 1px solid #E5E5E5;
    margin: 0 0 16px 0;
    background: #fff;
    font-size: 1.1rem;
    font-family: inherit;
  }
`;
const MobileHeaderButton = styled.button`
  background: none;
  border: none;
  font-weight: 700;
  font-size: 1.1rem;
  color: #222;
  width: 100%;
  padding: 16px 0;
  border-right: 1px solid #E5E5E5;
  text-align: center;
  cursor: pointer;
  &:last-child { border-right: none; }
`;

const SORT_OPTIONS = [
  'RECOMMENDED',
  'NEWEST FIRST',
  'POPULAR',
  'PRICE : HIGH TO LOW',
  'PRICE : LOW TO HIGH',
];

const ProductGrid = () => {
  const products = [
    {
      name: "PPXOC MILKYWAY DRESS IN BLACK",
      price: "€95.00",
      originalPrice: "€120.00",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop&crop=center",
      seoFriendlyName: "ppxoc-milkyway-dress-black",
      isNew: true
    },
    {
      name: "PPXOC MILKYWAY DRESS IN WHITE",
      price: "€95.00",
      image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=400&fit=crop&crop=center",
      seoFriendlyName: "ppxoc-milkyway-dress-white",
      isOutOfStock: true
    },
    {
      name: "PPXOC MILKYWAY DRESS IN RED",
      price: "€125.00",
      image: "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=400&h=400&fit=crop&crop=center",
      seoFriendlyName: "ppxoc-milkyway-dress-red"
    },
    {
      name: "PPXOC MILKYWAY DRESS IN BLUE",
      price: "€65.00",
      originalPrice: "€85.00",
      image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=400&fit=crop&crop=center",
      seoFriendlyName: "ppxoc-milkyway-dress-blue"
    },
    {
      name: "PPXOC MILKYWAY DRESS IN GREEN",
      price: "€85.00",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop&crop=center",
      seoFriendlyName: "ppxoc-milkyway-dress-green"
    },
    {
      name: "PPXOC MILKYWAY DRESS IN YELLOW",
      price: "€110.00",
      originalPrice: "€130.00",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=400&fit=crop&crop=center",
      seoFriendlyName: "ppxoc-milkyway-dress-yellow"
    },
    {
      name: "RECYCLED BACKPACK",
      price: "€80.00",
      image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=400&h=400&fit=crop&crop=center",
      seoFriendlyName: "recycled-backpack"
    },
    {
      name: "COTTON CAP",
      price: "€35.00",
      image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=400&h=400&fit=crop&crop=center",
      seoFriendlyName: "cotton-cap"
    },
    {
      name: "LEATHER HANDBAG",
      price: "€210.00",
      originalPrice: "€250.00",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop&crop=center",
      seoFriendlyName: "leather-handbag"
    },
    {
      name: "KIDS TOY DINO",
      price: "€22.00",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=400&fit=crop&crop=center",
      seoFriendlyName: "kids-toy-dino"
    },
    {
      name: "TRAVEL POUCH",
      price: "€18.00",
      image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=400&h=400&fit=crop&crop=center",
      seoFriendlyName: "travel-pouch"
    },
    {
      name: "SUNGLASSES CASE",
      price: "€15.00",
      image: "https://images.unsplash.com/photo-1465101178521-c1a9136a3c8b?w=400&h=400&fit=crop&crop=center",
      seoFriendlyName: "sunglasses-case"
    }
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [liked, setLiked] = useState([false, true, false, false, false, false]);
  const [showFilter, setShowFilter] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [sortOption, setSortOption] = useState(SORT_OPTIONS[0]);
  const dropdownRef = useRef();

  const handleCardClick = (index) => setSelectedIndex(index);
  const handleHeartClick = (index, e) => {
    e.stopPropagation();
    setLiked((prev) => prev.map((v, i) => (i === index ? !v : v)));
  };

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [dropdownOpen]);

  return (
    <ProductGridWrapper>
      <GridHeader>
        <GridHeaderCenter>
          <GridHeaderCount>3425 ITEMS</GridHeaderCount>
          <ChevronAndFilter>
            <GridHeaderChevron><ChevronRight size={18} /></GridHeaderChevron>
            <GridHeaderFilterLink onClick={() => setShowFilter(v => !v)}>
              {showFilter ? 'HIDE FILTER' : 'SHOW FILTER'}
            </GridHeaderFilterLink>
          </ChevronAndFilter>
        </GridHeaderCenter>
        <GridHeaderRight ref={dropdownRef}>
          <span
            style={{
              fontWeight: 700,
              textDecoration: dropdownOpen ? 'underline' : 'none',
              color: '#222',
              letterSpacing: 0.5,
              fontFamily: 'inherit',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
            }}
            onClick={() => setDropdownOpen((v) => !v)}
          >
            {sortOption} <ChevronDown size={18} style={{marginLeft: 4, transition: 'transform 0.2s', transform: dropdownOpen ? 'rotate(180deg)' : 'none'}} />
          </span>
          {dropdownOpen && (
            <Dropdown>
              {SORT_OPTIONS.map(option => (
                <DropdownItem
                  key={option}
                  selected={option === sortOption}
                  onClick={() => {
                    setSortOption(option);
                    setDropdownOpen(false);
                  }}
                >
                  {option === sortOption && <CheckMark>✓</CheckMark>}
                  {option}
                </DropdownItem>
              ))}
            </Dropdown>
          )}
        </GridHeaderRight>
      </GridHeader>
      {/* Mobile header bar */}
      <MobileHeaderBar>
        <MobileHeaderButton onClick={() => setShowFilter(true)}>
          FILTER
        </MobileHeaderButton>
        <MobileHeaderButton onClick={() => setDropdownOpen((v) => !v)} style={{ position: 'relative' }}>
          RECOMMENDED
          <ChevronDown size={18} style={{ marginLeft: 6, verticalAlign: 'middle' }} />
          {dropdownOpen && (
            <Dropdown style={{ left: 0, right: 'auto', top: '100%', minWidth: '100%', zIndex: 100 }}>
              {SORT_OPTIONS.map(option => (
                <DropdownItem
                  key={option}
                  selected={option === sortOption}
                  onClick={() => {
                    setSortOption(option);
                    setDropdownOpen(false);
                  }}
                >
                  {option === sortOption && <CheckMark>✓</CheckMark>}
                  {option}
                </DropdownItem>
              ))}
            </Dropdown>
          )}
        </MobileHeaderButton>
      </MobileHeaderBar>
      <MainContent $showFilter={showFilter}>
        {showFilter && (
          <SidebarColumn>
            <FilterSidebar show={showFilter} />
          </SidebarColumn>
        )}
        <StyledProductGrid>
          {products.map((product, index) => (
            <ProductCard
              key={index}
              name={product.name}
              price={product.price}
              originalPrice={product.originalPrice}
              image={product.image}
              seoFriendlyName={product.seoFriendlyName}
              isOutOfStock={product.isOutOfStock}
              isNew={product.isNew}
              selected={selectedIndex === index}
              liked={liked[index]}
              onHeartClick={(e) => handleHeartClick(index, e)}
            />
          ))}
        </StyledProductGrid>
      </MainContent>
      {showFilter && (
        <MobileSidebarOverlay onClick={() => setShowFilter(false)}>
          <SidebarDrawer onClick={e => e.stopPropagation()}>
            <CloseButton onClick={() => setShowFilter(false)}>&times;</CloseButton>
            <FilterSidebar show={showFilter} />
          </SidebarDrawer>
        </MobileSidebarOverlay>
      )}
    </ProductGridWrapper>
  );
};

export default ProductGrid;
