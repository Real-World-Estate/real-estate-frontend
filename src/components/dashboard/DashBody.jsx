import { useEffect, useState } from "react";
import DashTable from "./DashTable";
import Loader from "../Loader";
// `https://randomuser.me/api/?inc=name,email,phone&results=${results}`

function DashBody() {
  const [users, setUsers] = useState([]);
  const [results, setResults] = useState(10);
  const [getUpdatedStatus, setGetUpdatedStatus] = useState(false);
  const [isLoading, setIsLoading] = useState("false");

  useEffect(
    function () {
      setIsLoading(true);
      fetch(`https://calendar-api-cedf.onrender.com/getEvents`)
        .then((response) => response.json())
        .then((data) => {
          setUsers(data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setIsLoading(false);
        });
    },
    [results, getUpdatedStatus]
  );

  return (
    <div className="dashboard-body">
      <div className="body-top-nav">
        <button>
          All Orders <span>148</span>
        </button>
        <button>
          Pending <span>48</span>
        </button>
        <button>
          Completed <span>100</span>
        </button>
      </div>

      <div className="body-table">
        {isLoading ? (
          <Loader />
        ) : (
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
                  return (
                    <DashTable
                      user={user}
                      i={i}
                      key={i}
                      setUsers={setUsers}
                      setGetUpdatedStatus={setGetUpdatedStatus}
                    />
                  );
                })
              ) : (
                <tr>
                  <td>No User Found</td>
                </tr>
              )}
            </tbody>
          </table>
        )}
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
          <option value="50">50</option>
        </select>
      </div>
    </div>
  );
}

export default DashBody;
