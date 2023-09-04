import React, { Component } from "react";
import "..//..//Assets//CSS//History.css";

class History extends Component {
  render() {
    const { changes } = this.props;
    let SerialNumber = 1;
    return (
      <div className="history-container">
        <table className="history-table">
          <thead>
            <tr>
              <th>S.NO</th>
              <th>USERNAME</th>
              <th>ACTIONS</th>
              <th>DETAILS</th>
              <th>TIME</th>
            </tr>
          </thead>
          <tbody>
            {changes.map((change, index) => {
              let action = "";
              let details = "";
              let time = "";
              let actionClassName = "";

              switch (change.type) {
                case "move":
                  action = "MOVED";
                  if (change.selectedContent !== change.BeforeEdit) {
                    action = "MOVED/VALUE CHANGED";
                    details = ` Value  changed from [${change.BeforeEdit} ]to [${change.selectedContent}] and moved form 
                      ${change.MovedFrom} to ${change.MovedTo}`;
                    actionClassName = "text-bg-danger";
                  } else {
                    actionClassName = "text-bg-danger";

                    details = `[${change.selectedContent}] - From ${change.MovedFrom} to ${change.MovedTo}`;
                  }
                  time = change.dateTime;
                  break;

                case "drag":
                  action = "DRAGGED";
                  details = `[${change.contentValue}]  - From ${change.sourceContainerId} to ${change.destinationContainerId}`;
                  time = change.dateTime;
                  actionClassName = "text-bg-primary";

                  break;
                case "create":
                  action = "CREATED";
                  details = `New Container Created - TITLE [${change.Container}]`;
                  time = change.dateTime;
                  actionClassName = "text-bg-success";

                  break;
                case "add":
                  action = "ADDED";
                  details = `New task added - TITLE [${change.Task}] - in ${change.Container}`;
                  time = change.dateTime;
                  actionClassName = "text-bg-warning";

                  break;
                default:
                  break;
              }

              return (
                <tr key={index}>
                  <td>{SerialNumber++}</td>
                  <td>{change.username}</td>
                  <td className={actionClassName}>{action}</td>
                  <td>{details}</td>
                  <td>{time}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default History;
