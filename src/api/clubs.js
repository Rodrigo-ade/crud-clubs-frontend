const URL = 'http://localhost:8080';

export async function getClubs() {
  return (await fetch(`${URL}/clubs`)).json();
}
