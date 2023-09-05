const URL = 'http://localhost:8080';

export async function getClubs() {
  return (await fetch(`${URL}/clubs`)).json();
}

export async function getClub(clubTla) {
  return (await fetch(`${URL}/clubs/${clubTla}`)).json();
}
