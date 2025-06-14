import React from 'react';
import { Heart } from 'lucide-react';
import styled from 'styled-components';

const Card = styled.div`
  background: #fff;
  border: 1px solid #eee;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: all 0.2s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);
  height: 100%;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.13);
  }
  &.selected {
    border: 2px solid #a084f7;
    box-shadow: 0 0 0 2px #a084f733;
  }
`;
const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 100%;
  background: #f8f8f8;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const TopRow = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 12px;
  display: flex;
  justify-content: space-between;
  pointer-events: none;
  z-index: 3;
`;
const NewBadge = styled.span`
  background: #fff;
  color: #111;
  font-size: 11px;
  font-weight: bold;
  text-transform: uppercase;
  padding: 4px 10px;
  border-radius: 4px;
  border: 1.5px solid #222;
  pointer-events: auto;
`;
const HeartBtn = styled.button`
  pointer-events: auto;
  background: #fff;
  border: 1.5px solid #eee;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.2s ease;
  &:hover svg {
    color: #d7263d;
  }
`;
const OutOfStock = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.92);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 4;
  span {
    color: #000;
    font-weight: 700;
    font-size: 15px;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
`;
const ProductInfo = styled.div`
  padding: 18px;
  display: flex;
  flex-direction: column;
`;
const ProductTitle = styled.h3`
  font-size: 1rem;
  font-weight: 700;
  color: #000;
  margin-bottom: 8px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const PriceRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 6px;
`;
const PriceCurrent = styled.span`
  font-size: 1.1rem;
  font-weight: 700;
  color: #000;
`;
const PriceOriginal = styled.span`
  font-size: 0.95rem;
  color: #666;
  text-decoration: line-through;
  font-weight: 500;
`;
const SigninMsg = styled.span`
  font-size: 0.92rem;
  color: #888;
  line-height: 1.3;
`;
const SigninLink = styled.a`
  color: #d7263d;
  font-weight: 500;
  text-decoration: underline;
`;
const ProductImg = styled.img`
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  object-fit: cover;
`;

const ProductCard = ({
  name,
  price,
  originalPrice,
  image,
  seoFriendlyName,
  isOutOfStock,
  isNew,
  selected,
  liked,
  onHeartClick
}) => {
  return (
    <Card className={selected ? 'selected' : ''}>
      <ImageContainer>
        <TopRow>
          {isNew && <NewBadge>NEW PRODUCT</NewBadge>}
          <HeartBtn onClick={onHeartClick} tabIndex={-1} aria-label="Like product">
            <Heart
              size={20}
              fill={liked ? '#d7263d' : 'none'}
              color={liked ? '#d7263d' : '#888'}
            />
          </HeartBtn>
        </TopRow>
        <ProductImg
          src={image}
          alt={`${name} – Premium quality ${seoFriendlyName || 'product'} for modern lifestyle`}
        />
        {isOutOfStock && (
          <OutOfStock>
            <span>OUT OF STOCK</span>
          </OutOfStock>
        )}
      </ImageContainer>
      <ProductInfo>
        <ProductTitle title={name}>{name}</ProductTitle>
        <PriceRow>
          {price && <PriceCurrent>{price}</PriceCurrent>}
          {originalPrice && <PriceOriginal>{originalPrice}</PriceOriginal>}
        </PriceRow>
        <SigninMsg>
          <SigninLink href="#">Sign in</SigninLink> or Create an account to see pricing
        </SigninMsg>
      </ProductInfo>
    </Card>
  );
};

export default ProductCard;
