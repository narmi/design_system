import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { deviceBreakpoints } from "../../globalStyles";
import Typography from "components/Typography";
import { StyledPlainButton } from "components/PlainButton";
import List from "components/List";
import Popover from "components/Popover";
import { Check } from "react-feather";

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
  padding: 12px 0px 12px 20px;
  @media ${`(max-width: ${deviceBreakpoints.mobileMax})`} {
    display: none;
  }

  :last-child {
    float: right;
    padding-right: 20px;
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

const StyledOverlayItem = styled.div`
  display: flex;
  align-items: center;
`;

const StyledCheck = styled(Check)`
  size: 18;
  padding: 0px 8px 0px 8px;
  color: var(--nds-primary-color);
  visibility: ${(props) => (props.visibility ? "inherit" : "hidden")};
`;

const StyledOverlayItemSpan = styled.span`
  padding-right: 8px;
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

  const getSortOrder = (sortKey, order) => {
    // reverse logic if not a string i.e. integers etc ...
    switch (typeof sortKey) {
      case "string":
        return order;
      case "number":
        return !order;
      default:
        return order;
    }
  };

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

  const resetGrid = () => {
    setGrid(Object.entries(props.gridData).map(renderRow));
    let uniqueColumns = getUniqueColumns(props.gridData);
    let colOrderObject = {};
    colOrderObject = uniqueColumns.reduce((result, col, idx) => {
      if (col !== undefined) {
        result[col] = { ascending: null, idx: idx }; // active means col is sorted asc or desc, asc
      }
      return result;
    }, {});
    setActiveSortColumns(colOrderObject);
  };

  useEffect(() => {
    resetGrid();
  }, []);

  function sortByKey(array, key, order) {
    return array.sort(function (row1, row2) {
      let idx = activeSortColumns[key]["idx"];
      var cell1 = row1[idx];
      var cell2 = row2[idx];

      let sortKey1 = cell1.sortKey;
      let sortKey2 = cell2.sortKey;
      let orderCheck = getSortOrder(sortKey1, order);

      if (orderCheck) {
        sortKey1 = cell2.sortKey;
        sortKey2 = cell1.sortKey;
      }
      if (sortKey1 > sortKey2) {
        return -1;
      } else if (sortKey1 < sortKey2) {
        return 1;
      } else {
        return 0;
      }
    });
  }

  const resetNonActiveHeadings = (heading) => {
    Object.keys(activeSortColumns).map((x) =>
      x != heading ? (activeSortColumns[x]["ascending"] = null) : null
    );
  };

  const sortGrid = (heading, direction) => {
    resetNonActiveHeadings(heading);
    activeSortColumns[heading]["ascending"] = direction === "asc";

    let newGrid = props.gridData.slice(0);
    newGrid = sortByKey(
      newGrid,
      heading,
      activeSortColumns[heading]["ascending"]
    );
    setGrid(Object.entries(newGrid).map(renderRow));
  };

  const renderSortableHeader = (headerOption, heading) => {
    let id = headerOption.sortOrder === "asc" ? "0" : "1";
    let selected = false;
    if (activeSortColumns) {
      selected =
        activeSortColumns[heading]["ascending"] ===
        (headerOption.sortOrder === "asc");
    }
    return (
      <Typography
        data-testid={heading + id}
        onClick={() => {
          // if clicked but already active and ascedning matches
          if (selected) {
            activeSortColumns[heading]["ascending"] = false;
            resetGrid();
          } else {
            activeSortColumns[heading]["ascending"] = true;
            sortGrid(heading, headerOption.sortOrder);
          }
          resetNonActiveHeadings(heading);
        }}
      >
        <StyledOverlayItem>
          <StyledCheck
            visibility={
              activeSortColumns && activeSortColumns[heading] ? selected : false
            }
          />
          <StyledOverlayItemSpan>{headerOption.text}</StyledOverlayItemSpan>
        </StyledOverlayItem>
      </Typography>
    );
  };

  const renderPopoverHeader = (heading) => {
    return (
      <StyledTableHeader style={{ padding: "12px 0px 12px 20px" }}>
        <Popover hoverable label={<Typography subheader>{heading}</Typography>}>
          <List
            renderItem={(item) => renderSortableHeader(item, heading)}
            items={[
              { sortOrder: "asc", text: "Sort A to Z" },
              { sortOrder: "desc", text: "Sort Z to A" },
            ]}
          ></List>
        </Popover>
      </StyledTableHeader>
    );
  };

  const renderHeader = () => {
    const uniqueColumns = getUniqueColumns(props.gridData);
    return (
      <StyledTableRow>
        {uniqueColumns.map((heading) =>
          heading && props.sortableHeaders.includes(heading) ? (
            renderPopoverHeader(heading)
          ) : (
            <StyledTableHeader>
              <Typography subheader>{heading}</Typography>
            </StyledTableHeader>
          )
        )}
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
  sortableHeaders: PropTypes.array,
  gridData: PropTypes.array,
};

Table.defaultProps = {
  title: "",
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
