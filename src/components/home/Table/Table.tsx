import React from "react";
import { Container } from "../../commons/lib";

import {
  AvaxLogo,
  StyledTable,
  StyledTD,
  StyledTH,
  StyledTR,
  TabButton,
  TableContainer,
  TableTitle,
  UsdcLogo,
  VerticalLine,
  VerticalTableLine,
} from "./table-styles";

export default function Table() {
  return (
    <>
      <TableContainer>
        <Container>
          <TableTitle>
            <span>
              <TabButton>Pools</TabButton> <VerticalLine />
              <TabButton>Tokens</TabButton> <VerticalLine />
              <TabButton>Lending</TabButton>
            </span>
          </TableTitle>
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
        </Container>
      </TableContainer>
    </>
  );
}
