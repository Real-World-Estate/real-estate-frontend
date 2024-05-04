import { useState } from "react";
import { icon } from "../../assets";

const date = new Date();

function DashTable({ user, i, setUsers, setGetUpdatedStatus }) {
  const [showMessage, setShowMessage] = useState(false);
  const [userStatus, setUserStatus] = useState(user?.status);
  const [isLoading, setIsLoading] = useState("false");

  function changeStatus() {
    if (userStatus === true) {
      return console.log("No need to change the status");
    }
    setIsLoading(!isLoading);
    fetch(`https://calendar-api-cedf.onrender.com/updateEvent/${user?.email}`, {
      method: "PATCH",
      mode: "cors",
    })
      .then((response) => response.json())
      .then((data) => {
        setUserStatus(data?.status);
        return fetch(`https://calendar-api-cedf.onrender.com/getEvents`)
          .then((response) => response.json())
          .then((data) => {
            setUsers(data);
            setIsLoading(false);
          })
          .catch((error) => {
            console.log(error);
            setIsLoading(false);
          });
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
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
        <td>{user?.first_name}</td>
        <td>{user?.last_name}</td>
        <td>{user?.contact}</td>
        <td>{user?.email}</td>
        <td>{date.toLocaleString()}</td>
        <td onClick={handleShowMessage}>{user?.message.slice(0, 19)} ...</td>
        <td>
          <button
            onClick={changeStatus}
            className={`${userStatus === true ? "completed" : "pending"}`}
          >
            {userStatus === true ? "Completed" : "Pending"}
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
              <p>{user?.message}</p>
            </div>
          </td>
        </tr>
      )}
    </>
  );
}

export default DashTable;
