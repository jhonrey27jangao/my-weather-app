import React from "react";
import { Table as ReactStrapTable } from "reactstrap";
import { getCurrentDay } from "../../utils/helpers";

const MobileTable = ({ cols, data }) => {
  return (
    <ReactStrapTable bordered className="mt-5">
      <thead>
        <tr>
          <th>{cols[0]}</th>
          <th>{cols[1]}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{getCurrentDay()}</td>
          <td>{data.temp}</td>
        </tr>
      </tbody>
    </ReactStrapTable>
  );
};

function Table({ data, cols, isMobile }) {
  const { main, weather } = data;
  if (main && weather) {
    return (
      <>
        {isMobile ? (
          <MobileTable cols={cols} data={main} />
        ) : (
          <ReactStrapTable bordered className="mt-5" responsive>
            <thead>
              <tr>
                {cols.map((item, index) => (
                  <th key={index}>{item}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{getCurrentDay()}</td>
                <td>{main.temp}</td>
                <td>{weather[0] && weather[0].description}</td>
                <td>{weather[0] && weather[0].main}</td>
                <td>{main.pressure}</td>
                <td>{main.humidity}</td>
              </tr>
            </tbody>
          </ReactStrapTable>
        )}
      </>
    );
  }
  return <></>;
}

export default Table;
