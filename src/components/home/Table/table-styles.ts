import styled from "styled-components";

export const TableTitle = styled.div`
  width: 100%;
  padding-bottom: 30px;
  display: inline-block;
  background-color: ${({ color, theme }) => color || theme.colors.bg};
`;

export const TabButton = styled.button`
  font-size: 18px;
  font-family: Poppins;
  color: #313131;
  opacity: 0.7;
  display: inline-block;
  padding-right: 33px;
  padding-left: 33px;
  background-color: transparent;
`;

export const VerticalLine = styled.div`
  top: 4px;
  height: 10px;
  border-left: 2px solid #000000;
  display: inline-block;
`;

export const VerticalTableLine = styled.div`
  height: 10px;
  border-left: 2px solid #000000;
  display: inline-block;
`;

export const TableContainer = styled.div`
  padding-top: 40px;
  background-color: ${({ color, theme }) => color || theme.colors.bg};
  padding-bottom: 74px;
`;

export const StyledTable = styled.table`
  margin-top: 30px;
  border-collapse: collapse;
  width: 100%;
  margin: auto;
  background-color: white;
  border-radius: 20px;
`;

export const StyledTHead = styled.th`
  padding-top: 26px;
  text-align: left;
`;

export const StyledTR = styled.tr`
  width: 100%; ;
`;

export const StyledTH = styled.th`
  text-align: center;
  height: 82px;
  p {
    padding-top: 26px;
    font-size: 18px;
    font-family: Poppins;
    vertical-align: center;
    font-weight: 500;
    color: #44445a;
    position: relative;
    display: inline-block;
    margin-right: 2.5rem;
  }
`;

// export const HorizontalLine = styled.div`
//   width: 100%;
//   height: 1px;
//   border-bottom: 1px solid #c9c7c7;
//   display: inline-block;
//   vertical-align: middle;
// `;

// export const StyledTHName = styled.th`
//   height: 82px;
//   text-align: left;

//   p {
//     padding-top: 26px;
//     font-size: 18px;
//     font-family: Poppins;
//     vertical-align: left;
//     font-weight: 500;
//     color: #44445a;
//     margin-left: 20%;
//   }
// `;

export const StyledTBody = styled.tbody``;

export const StyledTD = styled.td`
  text-align: center;
  font-size: 18px;
  font-family: Poppins;
  vertical-align: center;
  color: #313131;
  padding-top: 23.5px;
  padding-bottom: 23.5px;
  border-top: 1px solid #c9c7c7;
`;

// export const StyledTDName = styled.td`
//   text-align: center;
//   font-size: 18px;
//   font-family: Poppins;
//   vertical-align: center;
//   color: #313131;
//   padding-top: 23.5px;
//   padding-bottom: 23.5px;
//   border-top: 1px solid #c9c7c7;
//   padding-left: -50px;
// `;

export const UsdcLogo = styled.img`
  // margin-top: 4px;
  height: 27px;
  width: 27px;
  border-radius: 50%;
  margin-bottom: -7px;
  position: relative;
`;

export const AvaxLogo = styled.img`
  // margin-top: 4px;
  height: 27px;
  width: 27px;
  border-radius: 50%;
  margin-bottom: -7px;
  position: relative;
  left: -7px;
`;
