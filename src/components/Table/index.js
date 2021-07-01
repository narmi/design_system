import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { deviceBreakpoints } from "../../globalStyles";
import Typography from "components/Typography";
import PlainButton, { StyledPlainButton } from "components/PlainButton";
import List from "components/List";
import Popover, {StyledLabel, StyledTrigger, StyledChevronDown, StyledWrapper, StyledOverlay} from "components/Popover";

const StyledTableTitleDiv = styled.div`
  font-size: 20px;
  padding-left: 20px;
`;

const StyledTable = styled.table`
  border-spacing: 0;
  width: 100%;
  border-collapse: collapse;
`;

const StyledTableHeader = styled.th`
  text-align: left;
  padding: ${props => props.popover ? null : "12px 0px 12px 20px"};
  @media ${`(max-width: ${deviceBreakpoints.mobileMax})`} {
    display: none;
  }
  :last-child {
    padding-right: 20px;
    text-align: right;
    ${StyledOverlay} {
      left: -90px;
    }
  }

  align-items: ${props => props.popover ? "unset" : null};
  // float: ${props => props.popover ? "left": null};
  :last-child {
    float: ${props => props.popover ? "right" : null};
    padding-right: ${props => props.popover ? "12px" : "20px"};
  }
  ${StyledLabel} {
    align-items: unset;
    // text-align: ${props => props.popover ? "right" : null};
    padding-right: 5px;
    ::before{
      width: 0px;
    }
  }

  ${StyledChevronDown}{
    :hover {
      color: var(--nds-grey);
      stroke-width: 1;
    }
  }
  ${StyledTrigger}{
    padding: 12px 0px 12px 20px;
    :hover ${StyledChevronDown}{
      stroke-width: ${(props) => (props.hoverable ? "1" : null)};
      color: ${(props) => (props.hoverable ? "green" : null)};
      stroke-width: 1;
      color: var(--nds-grey);
    }
  }
  ${StyledWrapper}{
    :hover ${StyledChevronDown}{
      stroke-width: ${(props) => (props.hoverable ? "1" : null)};
      color: ${(props) => (props.hoverable ? "green" : null)};
      stroke-width: 1;
      color: var(--nds-grey);
    }
  }
`;


const StyledTableCell = styled.td`
  text-align: left;
  padding: 12px 0px 12px 20px;
  @media ${`(max-width: ${deviceBreakpoints.mobileMax})`} {
    display: none;
  }
  :last-child {
    padding-right: 20px;
    text-align: right;
  }
`;

const StyledMobileTableCell = styled.td`
  text-align: left;
  padding: 12px 0px 12px 20px;
  @media ${`(min-width: ${deviceBreakpoints.mobileMax})`} {
    display: none;
  }
`;

const StyledTableRow = styled.tr`
  border-top: 1px solid var(--nds-grey-disabled);
  :hover {
    background-color: ${(props) =>
      props.hoverable ? "var(--nds-primary-color-lightest)" : null};
  }
`;

const StyledStackedCell = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 20px;
  text-align: right;

  ${StyledPlainButton} {
    font-size: 14px;
  }
`;

const renderCells = (row) => {
  const desktopCells = row.map((cell, idx) => (
    <StyledTableCell key={idx} data-testid={"col" + idx}>
      <Typography>{cell.content}</Typography>
    </StyledTableCell>
  ));

  let mobileCells = [
    <StyledMobileTableCell key={row[0].sortKey} data-testid={"MobileCol0"}>
      <Typography>{row[0].content}</Typography>
    </StyledMobileTableCell>,
  ];

  const collapsedCells = (
    <StyledStackedCell>
      {row.slice(1).map((cell, idx) => (
        <Typography>{cell.content}</Typography>
      ))}
    </StyledStackedCell>
  );

  let stackedMobileCell = (
    <StyledMobileTableCell key={row[1].sortKey} data-testid={"MobileCol1"}>
      <Typography>{collapsedCells}</Typography>
    </StyledMobileTableCell>
  );
  mobileCells = mobileCells.concat(stackedMobileCell);

  return mobileCells.concat(desktopCells);
};

const Table = (props) => {
  const [grid, setGrid] = useState([[]]);
  const [activeSortColumns, setActiveSortColumns] = useState();

  const renderRow = ([col, colData]) => {
    return <StyledTableRow {...props}>{renderCells(colData)}</StyledTableRow>;
  };

  const getUniqueColumns = (gridData) => {
    var gridColumns = gridData.map(function (row) {
      return row.map(function (cell) {
        return cell.column;
      });
    });
    const columns = [].concat.apply([], gridColumns);
    return [...new Set(columns)];
  };

  useEffect(() => {
    setGrid(Object.entries(props.gridData).map(renderRow));
    let uniqueColumns = getUniqueColumns(props.gridData);
    let colOrderObject = {};
    colOrderObject = uniqueColumns.reduce((result, col, idx) => {
      if (col !== undefined) {
        result[col] = { active: false, idx: idx };
      }
      return result;
    }, {});
    setActiveSortColumns(colOrderObject);
  }, []);

  function sortByKey(array, key, order) {
    return array.sort(function (row1, row2) {
      let idx = activeSortColumns[key]["idx"];
      var cell1 = row1[idx];
      var cell2 = row2[idx];

      let sortKey1 = cell1.sortKey;
      let sortKey2 = cell2.sortKey;
      let orderCheck = typeof sortKey1 === "string" ? order : !order; // reverse logic if not a string i.e. integers etc ...
      
      if (orderCheck) {
        sortKey1 = cell2.sortKey;
        sortKey2 = cell1.sortKey;
      }
      return sortKey1 < sortKey2 ? -1 : sortKey1 > sortKey2 ? 1 : 0;
    });
  }

  const resetNonActiveHeadings = (heading) => {
    Object.keys(activeSortColumns).map((x) =>
      x != heading ? (activeSortColumns[x]["active"] = false) : null
    );
  };

  const sortGrid = (heading, direction) => {
    resetNonActiveHeadings(heading);
    let reverse = direction !== 0;
    activeSortColumns[heading]["active"] = reverse;
    //   !activeSortColumns[heading]["active"];
    let newGrid = sortByKey(
      props.gridData,
      heading,
      activeSortColumns[heading]["active"]
    );
    setGrid(Object.entries(newGrid).map(renderRow));
  };

  // ()=>console.log(heading, item)

  const renderHeader = () => {
    const uniqueColumns = getUniqueColumns(props.gridData);
    return (
      <StyledTableRow>
        {uniqueColumns.map((heading) => (
          props.sortableHeaders.includes(heading) ? 
          <StyledTableHeader popover={true}>
            <Popover hoverable
                     label={<Typography subheader>{heading}</Typography>}>
              <List renderItem={(item) => <Typography onClick={() => sortGrid(heading, item.key)}>{item.text}</Typography>} items={[{key: 0, text:"Sort A to Z"},{key: 1, text: "Sort Z to A"}]}></List>
              </Popover>
          </StyledTableHeader>
          :
          <StyledTableHeader>
            <Typography
              subheader
              onClick={props.sortByHeader ? () => sortGrid(heading) : null}
            >
              {heading}
            </Typography>
          </StyledTableHeader>
        ))}
      </StyledTableRow>
    );
  };

  return (
    <div {...props}>
      <StyledTableTitleDiv>
        <Typography h4>{props.title}</Typography>
      </StyledTableTitleDiv>
      <br />
      <StyledTable>
        <thead>{renderHeader(props)}</thead>
        <tbody>{grid}</tbody>
      </StyledTable>
    </div>
  );
};

Table.propTypes = {
  title: PropTypes.node,
  hoverable: PropTypes.bool,
  sortByHeader: PropTypes.bool,
  sortableHeaders: PropTypes.array,
  gridData: PropTypes.array,
};

Table.defaultProps = {
  title: "",
  sortByHeader: true,
  hoverable: true,
  sortableHeaders: [],
  gridData: [[]],
};

/*
props.gridData takes an array of arrays, the content of which are objects of the format

      {
        column: "DESCRIPTION", // column name type string. This is optional for cells with no column name. 
                                                    // Cells with no column name will placed at the end of a row
        content:  // cell content of type node
        sortKey: // value to sort column if sortable
      },

For instance, a sample gridData with {3} columns could look like:
[
  [ { column: column1,  content: <p>cell1</p>}, { column: column2,  content: <p>cell2</p>}, { column: column3,  content: <p>cell3</p>}],
  [ { column: column1,  content: <p>cell4</p>}, { column: column2,  content: <p>cell5</p>}, { column: column3,  content: <p>cell6</p>}],
]
*/

export default Table;
