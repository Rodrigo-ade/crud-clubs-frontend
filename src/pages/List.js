import { useEffect, useState } from "react";
import ListedTeam from "../components/ListedTeam";
import Loading from "../components/Loading";
import { getClubs } from "../services/clubs";
import ActionButton from "../components/ActionButton";
import { restoreCLubs } from "../services/clubs";

function List() {
  const [clubsList, setClubsList] = useState(null);

  function handleRestore(e) {
    e.preventDefault();
    restoreCLubs();
    window.location.reload();
  }

  useEffect(() => {
    getClubs()
      .then((clubs) => {
        const orderedClubs = clubs.sort((a,b) => (a.name > b.name ? 1 : (b.name > a.name) ? -1 : 0));
        setClubsList(orderedClubs.map((club) => <ListedTeam name={club.name} crestUrl={club.crestUrl} tla={club.tla} key={club.id}/>))
      })
      .catch(err => {
        setClubsList([]);
      })
  },[]);

  const list = (
    <div className="container text-center mb-5">
      <h1 className="mb-3 list-title"><strong>{clubsList && clubsList.length}</strong> clubs in database</h1>
      <form className="m-2" onSubmit={handleRestore}>
        <ActionButton type="submit"  text="Restore database"></ActionButton>
      </form>
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
