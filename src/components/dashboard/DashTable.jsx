import { useState } from "react";
import { icon } from "../../assets";

const message =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores laudantium doloremque accusamus sequi, possimus quidem? Ea velit, enim culpa doloribus cumque laborum minus reprehenderit nihil.";
const date = new Date();

function DashTable({ user, i }) {
  const [showMessage, setShowMessage] = useState(false);

  function changeStatus() {
    console.log("Status Changed");
  }

  function handleShowMessage() {
    if (showMessage === false) {
      return setShowMessage(!showMessage);
    }
    setShowMessage(!setShowMessage);
  }

  return (
    <>
      <tr className={`${showMessage === true ? "active" : ""}`}>
        <td>{i + 1}</td>
        <td>{user?.name.first}</td>
        <td>{user?.name.last}</td>
        <td>{user?.phone}</td>
        <td>{user?.email}</td>
        <td>{date.toLocaleString()}</td>
        <td onClick={handleShowMessage}>{message.slice(0, 19)} ...</td>
        <td>
          <button
            onClick={changeStatus}
            className={`${i % 2 === 0 ? "completed" : "pending"}`}
          >
            Completed
          </button>
        </td>
        <td>
          <img
            src={icon.iconDelete}
            alt="Delete Message"
            style={{ height: "2rem", width: "2rem" }}
          />
        </td>
      </tr>
      {/* the message row */}
      {showMessage && (
        <tr className="view-message">
          <td colSpan="9">
            <div>
              <h4>Message</h4>
              <p>{message}</p>
            </div>
          </td>
        </tr>
      )}
    </>
  );
}

export default DashTable;
