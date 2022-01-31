import { useQuery } from "@apollo/client";
import React from "react";
import { HalfCircleSpinner } from "react-epic-spinners";
import { userPairsQuery } from "../../../apollo-client/queries";
import { UserPoolsResponse } from "../../../types/poolsTypes";
import { Container, LoaderDiv } from "../../commons/lib";
import {
  TabButton,
  TableContainer,
  TableTitle,
  VerticalLine,
} from "./table-styles";
import PoolTable from "./Tables/PoolTable";
import TokensTable from "./Tables/TokensTable";

interface TableTabsProps {
  handleTabChange: (tab: "pool" | "tokens" | "lending") => void;
  activeTab: "pool" | "tokens" | "lending";
}

export default function TableTabs({
  handleTabChange,
  activeTab,
}: TableTabsProps) {
  const { data: poolsData, loading: poolsLoading } =
    useQuery<UserPoolsResponse>(userPairsQuery, {
      variables: { id: "0x000000000a38444e0a6e37d3b630d7e855a7cb13" },
    });

  const poolPairs = poolsData?.user.liquidityPositions;

  return (
    <>
      <TableContainer>
        <Container>
          <TableTitle>
            <span>
              <TabButton
                $active={activeTab === "pool"}
                onClick={() => handleTabChange("pool")}
              >
                Pools
              </TabButton>
              <VerticalLine />
              <TabButton
                $active={activeTab === "tokens"}
                onClick={() => handleTabChange("tokens")}
              >
                Tokens
              </TabButton>
              <VerticalLine />
              <TabButton
                $active={activeTab === "lending"}
                onClick={() => handleTabChange("lending")}
              >
                Lending
              </TabButton>
            </span>
          </TableTitle>
          {/* {activeTab === "pool" && poolPairs && !poolsLoading && (
            <PoolTable pairs={poolPairs} />
          )} */}
          {poolsLoading ? (
            <LoaderDiv>
              <HalfCircleSpinner size={100} color="black" className="loader" />
            </LoaderDiv>
          ) : (
            activeTab === "pool" && poolPairs && <PoolTable pairs={poolPairs} />
          )}
          {activeTab === "tokens" && <TokensTable />}
        </Container>
      </TableContainer>
    </>
  );
}
