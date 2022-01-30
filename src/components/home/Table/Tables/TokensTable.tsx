import React from "react";
import styled from "styled-components";
import { AvaxLogo } from "../../../commons/lib";
import {
  StyledTable,
  StyledTD,
  StyledTH,
  StyledTR,
  VerticalTableLine,
} from "../table-styles";

const Token = styled.span`
  display: flex;
  justify-content: center;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const TokensTable = () => {
  return (
    <StyledTable>
      <StyledTR>
        <StyledTH>
          <p>Name</p> <VerticalTableLine />
        </StyledTH>
        <StyledTH>
          <p>Liquidity</p> <VerticalTableLine />
        </StyledTH>
        <StyledTH>
          <p>Volume(24H)</p> <VerticalTableLine />
        </StyledTH>
        <StyledTH>
          <p>Fees(24H)</p> <VerticalTableLine />
        </StyledTH>
        <StyledTH>
          <p>APR </p>
        </StyledTH>
      </StyledTR>

      <StyledTR>
        <StyledTD>
          <Token>
            <span>
              <AvaxLogo src="/avalanche-avax-logo.png" />
              MM-TIME
            </span>
          </Token>
        </StyledTD>
        <StyledTD>$269,400,451</StyledTD>
        <StyledTD>$269,400,451</StyledTD>
        <StyledTD>$269,400,451</StyledTD>
        <StyledTD>69,400%</StyledTD>
      </StyledTR>

      <StyledTR>
        <StyledTD>
          <Token>
            <span>
              <AvaxLogo src="/avalanche-avax-logo.png" />
              MM-TIME
            </span>
          </Token>
        </StyledTD>
        <StyledTD>$269,400,451</StyledTD>
        <StyledTD>$269,400,451</StyledTD>
        <StyledTD>$269,400,451</StyledTD>
        <StyledTD>69,400%</StyledTD>
      </StyledTR>

      <StyledTR>
        <StyledTD>
          <Token>
            <AvaxLogo src="/avalanche-avax-logo.png" />
            MM-TIME
          </Token>
        </StyledTD>
        <StyledTD>$269,400,451</StyledTD>
        <StyledTD>$269,400,451</StyledTD>
        <StyledTD>$269,400,451</StyledTD>
        <StyledTD>69,400%</StyledTD>
      </StyledTR>
    </StyledTable>
  );
};

export default TokensTable;
