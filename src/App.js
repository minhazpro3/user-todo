import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import "./App.css";
import UserDetails from "./components/UserDetails";
import UserList from "./components/UserList";

function App() {
  const [data, setData] = useState([]);
  const [singleData, setSingleData] = useState({});
  console.log(data);
  console.log(singleData);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get("https://602e7c2c4410730017c50b9d.mockapi.io/users")
      .then((res) => {
        if (res.data) {
          setData(res.data);
          setLoading(false);
        }
      });
  }, []);

  const getSingleData = (data) => {
    setSingleData(data);
  };

  return (
    <div className="container mx-auto">
      <div className="my-5">
        <h4 className="text-success fs-3 mt-5 fw-bold text-center opacity-75 rounded-2 ">
          User Information
        </h4>
        <div className="row">
          <div className="col-md-4">
            <h4 className="text-success bg-success text-center bg-opacity-50 px-4 py-2 fs-4">
              Users List
            </h4>

            {loading ? (
              <h4 className="text-center my-5">
                {" "}
                <Spinner animation="grow" variant="success" />
              </h4>
            ) : (
              <div>
                {data?.map((info) => (
                  <UserList
                    info={info}
                    getSingleData={getSingleData}
                    loading={loading}
                  />
                ))}
              </div>
            )}
          </div>

          <div className="col-md-8">
            <h4 className="text-success text-center bg-success bg-opacity-50 px-4 py-2 fs-4">
              Users Details
            </h4>
            {!singleData.Bio ? (
              <h5 className="text-center my-5">Choose an user!</h5>
            ) : (
              <UserDetails singleData={singleData} loading={loading} />
            )}
          </div>
        </div>
        {error ? <p>{error}</p> : ""}
      </div>
    </div>
  );
}

export default App;
