import React from "react";
import "./PricingTable.scss";

export default function Pricing({ tableContent }) {
  return (
    <table className="pricing-table">
      {tableContent.map((tableBody) => (
        <tbody className="pricing-table-unit">
          {tableBody.map((tableRow) => (
            <tr>
              {tableRow.map((tableCell) => (
                <td>
                  <p>{tableCell}</p>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      ))}
    </table>
  );
}
