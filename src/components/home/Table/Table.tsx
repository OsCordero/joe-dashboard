import React from "react";

import {
  AvaxLogo,
  StyledTable,
  StyledTD,
  StyledTH,
  StyledTR,
  TableContainer,
  TableTitle,
  Title,
  TitleAll,
  TitleRed,
  UsdcLogo,
  VerticalLine,
  VerticalTableLine,
} from "./table-styles";

export default function Table() {
  return (
    <>
      <TableContainer>
        <TableTitle>
          <span>
            <TitleRed>Top</TitleRed> <VerticalLine /> <TitleAll>All</TitleAll>{" "}
            <VerticalLine />
            <Title>My Pools</Title>
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
      </TableContainer>
    </>
  );
}
