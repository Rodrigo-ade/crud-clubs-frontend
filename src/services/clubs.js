import { getClubs as getClubsFromApi } from '../api/clubs.js';
import { mapClubs } from '../mappers/clubs.js';

export async function getClubs() {
  const clubsData = await getClubsFromApi();
  return mapClubs(clubsData);
}
