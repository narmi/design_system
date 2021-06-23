import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Typography from "components/Typography";

const StyledTableTitleDiv = styled.div`
  font-size: 20px;
`;

const StyledTable = styled.table`
  border-spacing: 0;
  width: 100%;
  border-collapse: collapse;
`;

const StyledTableHeader = styled.th`
  text-align: left;
  padding: 12px 0px 12px 20px;
`;

const StyledTableCell = styled.td`
  text-align: left;
  padding: 12px 0px 12px 20px;
  :last-child {
    width: 0px;
    padding-right: 20px;
    margin-right: -50;
  }
`;

const StyledTableRow = styled.tr`
  border-top: 1px solid #d9d9d9;
  :hover {
    background-color: ${(props) =>
      props.hover ? "var(--nds-primary-color-lightest)" : null};
  }
`;

const renderHeader = (props) => {
  var gridColumns = props.gridData.map(function (row) {
    return row.map(function (cell) {
      return cell.column;
    });
  });
  const columns = [].concat.apply([], gridColumns);
  const uniqueColumns = [...new Set(columns)];
  return (
    <StyledTableRow {...props}>
      {uniqueColumns.map((heading) => (
        <StyledTableHeader>
          <Typography style={{ "font-size": "12px", "font-weight": "600" }}>
            {heading}
          </Typography>
        </StyledTableHeader>
      ))}
    </StyledTableRow>
  );
};

const renderRow = (row) => {
  return row.map((cell) => <StyledTableCell>{cell.content}</StyledTableCell>);
};

const Table = (props) => {
  const renderColumns = ([col, colData]) => {
    return <StyledTableRow {...props}>{renderRow(colData)}</StyledTableRow>;
  };

  let gridData = {};
  props.gridData.map((row, idx) => {
    row.map((cell) => {
      cell.rowId = idx;
      if (cell.column in gridData) {
        gridData[cell.column].push(cell);
      } else {
        gridData[cell.column] = [cell];
      }
    });
  });

  return (
    <div {...props}>
      <StyledTableTitleDiv>
        <Typography style={{ "font-weight": "600", "font-size": "20px" }}>
          {props.title}
        </Typography>
      </StyledTableTitleDiv>
      <br />
      <StyledTable>
        {renderHeader(props)}
        {Object.entries(props.gridData).map(renderColumns)}
      </StyledTable>
    </div>
  );
};

Table.propTypes = {
  title: PropTypes.node,
  hover: PropTypes.bool,
  gridData: PropTypes.array,
};

Table.defaultProps = {
  title: "",
  hover: true,
  gridData: [[]],
};

export default Table;
