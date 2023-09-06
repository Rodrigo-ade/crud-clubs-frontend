const URL = 'http://localhost:8080';

export async function getClubs() {
  return (await fetch(`${URL}/clubs`)).json();
}

export async function getClub(clubTla) {
  return (await fetch(`${URL}/clubs/${clubTla}`)).json();
}

export async function addClub(clubData) {
  return (await fetch(`${URL}/clubs`, {method: 'POST', body: clubData}));
}

export async function deleteClub(clubTla) {
  return (await fetch(`${URL}/clubs/${clubTla}`, {method: 'DELETE'}));
}

export async function editClub(clubTla, clubData) {
  return (await fetch(`${URL}/clubs/${clubTla}`, {method: 'PUT', body: clubData}));
}
