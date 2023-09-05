import { useEffect, useState } from "react";
import ListedTeam from "../components/ListedTeam";
import Loading from "../components/Loading";
import { getClubs } from "../services/clubs";

function List() {
  const [clubsList, setClubsList] = useState(null);

  useEffect(() => {
    getClubs().then((data) => {
      setClubsList(data.map((club) => <ListedTeam name={club.name} crestUrl={club.crestUrl} tla={club.tla} key={club.id}/>));
    });
  },[]);

  const list = (
    <div className="container text-center mt-1 mb-5">
      <h1 className="mb-3"><strong>{clubsList && clubsList.length}</strong> clubs in database</h1>
      <div className="row">
        <div className="align-self-center">
          <ul className="col-8 club-list list-group">
            {clubsList}
          </ul>
        </div>
      </div>
    </div>
  );

  return clubsList ? list : <Loading />;
}

export default List;
