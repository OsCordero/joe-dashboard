import React, { useEffect, useState } from "react";
import { useMoralis, useMoralisWeb3Api } from "react-moralis";
import { providers } from "ethers";

import styled from "styled-components";
import { LiquidityPosition } from "../../../../types/poolsTypes";
import {
  StyledTable,
  StyledTD,
  StyledTH,
  StyledTR,
  Token1Logo,
  Token2Logo,
  VerticalTableLine,
} from "../table-styles";
import { formatMoney } from "../../../../utils/formats";

const Pairs = styled.span`
  display: grid;
  font-size: 14px;
  font-weight: bold;
  grid-template-columns: 0.35fr 0.65fr;
  justify-items: start;
  align-items: center;
  max-width: 80%;
  margin-left: auto;
  .logos {
    min-width: 0;
  }

  .pair-symbols {
    min-width: 0;
  }
`;

const PoolTable = ({ pairs }: { pairs: LiquidityPosition[] }) => {
  const { Moralis } = useMoralis();
  const [web3, setWeb3] = useState<providers.Web3Provider>();

  useEffect(() => {
    Moralis.enableWeb3().then((web3) => {
      setWeb3(web3);
    });
  }, []);

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

      {pairs.map(({ pair }) => {
        const volume24 = pair.hourData.reduce((acc, actual) => {
          return acc + +actual.untrackedVolumeUSD;
        }, 0);
        const fees24 = volume24 * 0.0025;
        const oneYearFeesAPR = (fees24 * 365 * 100) / +pair.reserveUSD;
        console.log(pair.token0.id);

        return (
          <StyledTR key={pair.id}>
            <StyledTD>
              <Pairs>
                {web3 && (
                  <div className="logos">
                    <Token1Logo
                      src={
                        pair.token0.symbol.includes("AVAX")
                          ? "/avalanche-avax-logo.png"
                          : `https://raw.githubusercontent.com/traderjoe-xyz/joe-tokenlists/main/logos/${web3.formatter.address(
                              pair.token0.id
                            )}/logo.png`
                      }
                    />
                    <Token2Logo
                      src={
                        pair.token1.symbol.includes("AVAX")
                          ? "/avalanche-avax-logo.png"
                          : `https://raw.githubusercontent.com/traderjoe-xyz/joe-tokenlists/main/logos/${web3.formatter.address(
                              pair.token1.id
                            )}/logo.png`
                      }
                    />
                  </div>
                )}
                <div className="pair-symbols">
                  {pair.token0.symbol} - {pair.token1.symbol}
                </div>
              </Pairs>
            </StyledTD>
            <StyledTD>{formatMoney(+pair.reserveUSD)}</StyledTD>
            <StyledTD>{formatMoney(volume24)}</StyledTD>
            <StyledTD>{formatMoney(fees24)}</StyledTD>
            <StyledTD>{oneYearFeesAPR.toFixed(5)}%</StyledTD>
          </StyledTR>
        );
      })}
    </StyledTable>
  );
};

export default PoolTable;
