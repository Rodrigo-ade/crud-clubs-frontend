import ListedTeam from "../components/ListedTeam";

function List() {
  return (
    <div className="container text-center mt-1 mb-5">
      <h1 className="mb-3"><strong>54</strong> clubs in database</h1>
      <div className="row">
        <div className="align-self-center">
        <ul className="col-8 club-list list-group">
            <ListedTeam />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default List;
