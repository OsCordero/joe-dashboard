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
          {activeTab === "pool" && <PoolTable />}
          {activeTab === "tokens" && <TokensTable />}
        </Container>
      </TableContainer>
    </>
  );
}
