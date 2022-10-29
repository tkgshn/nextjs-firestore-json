import { useEffect, useState } from "react";
import { fetchPerson } from "./api/fetcher";

type testUserData = {
}

function App() {
  const [personID, setPersonID] = useState(1);
  const [error, setError] = useState("");
	
  useEffect(() => {
    const fetchData = async () => {
      const { status, response } = await fetchPerson(personID);
      if (status === "success") {
        console.log(response);
      } else if (status === "failure") {
        setError("Failed to fetch data!");
      }
    };
    fetchData();
  }, [personID]);

  return (
    <div>
      <button onClick={() => setPersonID(personID + 1)}>
        Get next person
      </button>
      {error && <p>{error}</p>}

      <p>{personID}</p>
      <p>{name}</p>
    </div>
  );
}
export default App;


