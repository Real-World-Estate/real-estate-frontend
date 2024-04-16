import { useEffect, useState } from "react";
import DashTable from "./DashTable";

function DashBody() {
  const [users, setUsers] = useState([]);
  const [activeStatus, setActiveStatus] = useState(false);
  const [results, setResults] = useState(10);

  useEffect(
    function () {
      fetch(
        `https://randomuser.me/api/?inc=name,email,phone&results=${results}`
      )
        .then((response) => response.json())
        .then((data) => {
          setUsers(data.results);
        })
        .catch((error) => console.error(error));
    },
    [results]
  );

  function handleActiveClass() {
    if (activeStatus === true) {
      setActiveStatus(!activeStatus);
    } else {
      setActiveStatus(!activeStatus);
    }
  }

  return (
    <div className="dashboard-body">
      <div className="body-top-nav">
        <button
          className={`${activeStatus === true ? "btn-active" : ""}`}
          onClick={handleActiveClass}
        >
          All Orders <span>148</span>
        </button>
        <button
          onClick={handleActiveClass}
          className={`${activeStatus === true ? "btn-active" : ""}`}
        >
          Pending <span>48</span>
        </button>
        <button
          onClick={handleActiveClass}
          className={`${activeStatus === true ? "btn-active" : ""}`}
        >
          Completed <span>100</span>
        </button>
      </div>

      <div className="body-table">
        <table className="table">
          <thead>
            <tr>
              <th>S/N</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Date Booked</th>
              <th>Message</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users?.length > 0 ? (
              users?.map((user, i) => {
                return <DashTable user={user} i={i} key={i} />;
              })
            ) : (
              <tr>
                <td>No User Found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="results-showing">
        <p>{`Showing 01 - ${results} results`}</p>
        <select
          name="results"
          value={results}
          onChange={(e) => setResults(e.target.value)}
        >
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="40">40</option>
          <option value="50">40</option>
        </select>
      </div>
    </div>
  );
}

export default DashBody;
