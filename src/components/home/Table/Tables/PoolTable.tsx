import React from "react";
import styled from "styled-components";
import { AvaxLogo } from "../../../commons/lib";
import {
  StyledTable,
  StyledTD,
  StyledTH,
  StyledTR,
  UsdcLogo,
  VerticalTableLine,
} from "../table-styles";

const Pairs = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  .logos {
    img:nth-child(2) {
      margin-right: -5px;
    }
    img:first-child {
      margin-right: 5px;
    }
  }
`;

const PoolTable = () => {
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
          <Pairs>
            <div className="logos">
              <UsdcLogo src="/usdc-logo.png" />
              <AvaxLogo src="/avalanche-avax-logo.png" />
            </div>
            MM-TIME
          </Pairs>
        </StyledTD>
        <StyledTD>$269,400,451</StyledTD>
        <StyledTD>$269,400,451</StyledTD>
        <StyledTD>$269,400,451</StyledTD>
        <StyledTD>69,400%</StyledTD>
      </StyledTR>

      <StyledTR>
        <StyledTD>
          <Pairs>
            <div className="logos">
              <UsdcLogo src="/usdc-logo.png" />
              <AvaxLogo src="/avalanche-avax-logo.png" />
            </div>
            MM-TIME
          </Pairs>
        </StyledTD>
        <StyledTD>$269,400,451</StyledTD>
        <StyledTD>$269,400,451</StyledTD>
        <StyledTD>$269,400,451</StyledTD>
        <StyledTD>69,400%</StyledTD>
      </StyledTR>

      <StyledTR>
        <StyledTD>
          <Pairs>
            <div className="logos">
              <UsdcLogo src="/usdc-logo.png" />
              <AvaxLogo src="/avalanche-avax-logo.png" />
            </div>
            MM-TIME
          </Pairs>
        </StyledTD>
        <StyledTD>$269,400,451</StyledTD>
        <StyledTD>$269,400,451</StyledTD>
        <StyledTD>$269,400,451</StyledTD>
        <StyledTD>69,400%</StyledTD>
      </StyledTR>
    </StyledTable>
  );
};

export default PoolTable;
