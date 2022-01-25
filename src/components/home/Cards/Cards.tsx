import React from "react";
import {
  Card,
  CardsContainer,
  CardsWrapper,
  CardTitle,
  PriceTag,
  Title,
  CardImgWrapper,
} from "./card-styles";

export default function Cards() {
  return (
    <>
      <CardsContainer>
        <Title>Avalanche Assets</Title>
        <CardsWrapper>
          <Card>
            <CardImgWrapper />
            <CardTitle>Portfolio total value</CardTitle>
            <PriceTag>$1000</PriceTag>
          </Card>
          <Card>
            <CardImgWrapper />
            <CardTitle>Portfolio total value</CardTitle>
            <PriceTag>$1000</PriceTag>
          </Card>
          <Card>
            <CardImgWrapper />
            <CardTitle>Portfolio total value</CardTitle>
            <PriceTag>$1000</PriceTag>
          </Card>
          <Card>
            <CardImgWrapper />
            <CardTitle>Portfolio total value</CardTitle>
            <PriceTag>$1000</PriceTag>
          </Card>
        </CardsWrapper>

        {/* ------------- */}

        <Title>All Assets</Title>
        <CardsWrapper>
          <Card>
            <CardImgWrapper />
            <CardTitle>Portfolio total value</CardTitle>
            <PriceTag>$1000</PriceTag>
          </Card>
          <Card>
            <CardImgWrapper />
            <CardTitle>Portfolio total value</CardTitle>
            <PriceTag>$1000</PriceTag>
          </Card>
          <Card>
            <CardImgWrapper />
            <CardTitle>Portfolio total value</CardTitle>
            <PriceTag>$1000</PriceTag>
          </Card>
          <Card>
            <CardImgWrapper />
            <CardTitle>Portfolio total value</CardTitle>
            <PriceTag>$1000</PriceTag>
          </Card>
        </CardsWrapper>
      </CardsContainer>
    </>
  );
}
