import { useEffect, useState } from "react";
import DashTable from "./DashTable";
import Loader from "../Loader";
import SortButton from "./SortButton";

function DashBody() {
  const [users, setUsers] = useState([]);
  const [results, setResults] = useState(10);
  const [isLoading, setIsLoading] = useState("false");

  useEffect(
    function () {
      setIsLoading(true);
      fetch(
        `https://calendar-api-cdef.onrender.com/getEvents`,
        {
          method: "get",
          mode: "cors",
        }
        // `https://randomuser.me/api/?inc=name,email,phone&results=${results}`
      )
        .then((response) => response.json())
        .then((data) => {
          setUsers(data.results);
          setIsLoading(false);
        })
        .catch((error) => console.error(error));
    },
    [results]
  );
  console.log(users);

  return (
    <div className="dashboard-body">
      <div className="body-top-nav">
        <SortButton sortBy="All Orders" number="148" />
        <SortButton sortBy="Pending" number="48" />
        <SortButton sortBy="Completed" number="100" />
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
            {isLoading ? (
              <Loader />
            ) : users?.length > 0 ? (
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
          <option value="50">50</option>
        </select>
      </div>
    </div>
  );
}

export default DashBody;
