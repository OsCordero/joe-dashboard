import React from "react";
import { AvaxLogo } from "../../../commons/lib";
import {
  StyledTable,
  StyledTD,
  StyledTH,
  StyledTR,
  UsdcLogo,
  VerticalTableLine,
} from "../table-styles";

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
          <span>
            <UsdcLogo src="/usdc-logo.png" />
            <AvaxLogo src="/avalanche-avax-logo.png" />
          </span>
          MM-TIME
        </StyledTD>
        <StyledTD>$269,400,451</StyledTD>
        <StyledTD>$269,400,451</StyledTD>
        <StyledTD>$269,400,451</StyledTD>
        <StyledTD>69,400%</StyledTD>
      </StyledTR>

      <StyledTR>
        <StyledTD>
          <span>
            <UsdcLogo src="/usdc-logo.png" />
            <AvaxLogo src="/avalanche-avax-logo.png" />
          </span>
          MM-TIME
        </StyledTD>
        <StyledTD>$269,400,451</StyledTD>
        <StyledTD>$269,400,451</StyledTD>
        <StyledTD>$269,400,451</StyledTD>
        <StyledTD>69,400%</StyledTD>
      </StyledTR>

      <StyledTR>
        <StyledTD>
          <span>
            <UsdcLogo src="/usdc-logo.png" />
            <AvaxLogo src="/avalanche-avax-logo.png" />
          </span>
          MM-TIME
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
