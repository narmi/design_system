import React, {useState, useEffect} from "react";
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
  }
`;

const StyledTableRow = styled.tr`
  border-top: 1px solid var(--nds-grey-disabled);
  :hover {
    background-color: ${(props) =>
      props.hoverable ? "var(--nds-primary-color-lightest)" : null};
  }
`;

const renderRow = (row) => {
  return row.map((cell) => (
    <StyledTableCell>
      <Typography>{cell.content}</Typography>
    </StyledTableCell>
  ));
};

const Table = (props) => {
  const [grid, setGrid] = useState([[]]);
  const renderColumns = ([col, colData]) => {
    return <StyledTableRow {...props}>{renderRow(colData)}</StyledTableRow>;
  };


  useEffect(
    () => {
      setGrid(Object.entries(props.gridData).map(renderColumns));
    },
    [],
  );

  function sortByKey(array, key) {
    return array.sort(function(a, b) {
        console.log("yo", a, b);
        var result = a.filter(obj => {
          return obj.column === key;
        });

        var result2 = b.filter(obj => {
          return obj.column === key;
        });

        console.log("r", result, result2);
        var x = result[0].content; var y = result2[0].content;

        var currency2 = Number(x.replace(/[^0-9.-]+/g,""));;
        var currency = Number(y.replace(/[^0-9.-]+/g,""));;
        console.log("currency", currency, currency2, currency < currency2);
        return ((currency < currency2) ? -1 : ((currency > currency2) ? 1 : 0));
    });
}

  const sortGrid = (heading) => {
    console.log("sort", heading, "column");
    let newGrid = sortByKey(props.gridData, heading);
    console.log("old grid", props.gridData);
    console.log("new grid", newGrid);
    setGrid(Object.entries(newGrid).map(renderColumns));
  }
  console.log(props.gridData);

  const renderHeader = (props) => {
    var gridColumns = props.gridData.map(function (row) {
      return row.map(function (cell) {
        return cell.column;
      });
    });
    const columns = [].concat.apply([], gridColumns);
    const uniqueColumns = [...new Set(columns)];
    return (
      <StyledTableRow>
        {uniqueColumns.map((heading) => (
          <StyledTableHeader>
            <Typography subheader onClick={()=>{sortGrid(heading)}}>
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
        <Typography h3>
          {props.title}
        </Typography>
      </StyledTableTitleDiv>
      <br />
      <StyledTable>
        {renderHeader(props)}
        {grid}
      </StyledTable>
    </div>
  );
};

Table.propTypes = {
  title: PropTypes.node,
  hoverable: PropTypes.bool,
  gridData: PropTypes.array,
};

Table.defaultProps = {
  title: "",
  hoverable: true,
  gridData: [[]],
};

/*
props.gridData takes an array of arrays, the content of which are objects of the format

      {
        column: "DESCRIPTION", // column name type string. This is optional for cells with no column name. 
                                                    // Cells with no column name will placed at the end of a row
        content:  // cell content of type node
      },

For instance, a sample gridData with {3} columns could look like:
[
  [ { column: column1,  content: <p>cell1</p>}, { column: column2,  content: <p>cell2</p>}, { column: column3,  content: <p>cell3</p>}],
  [ { column: column1,  content: <p>cell4</p>}, { column: column2,  content: <p>cell5</p>}, { column: column3,  content: <p>cell6</p>}],
]
*/

export default Table;
