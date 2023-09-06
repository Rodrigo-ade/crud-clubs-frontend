import { 
  getClubs as getClubsFromApi, 
  getClub as getClubFromApi,
  addClub as addClubToApi,
} from '../api/clubs.js';

import { mapClubs } from '../mappers/clubs.js';

export async function getClubs() {
  const clubsData = await getClubsFromApi();
  return mapClubs(clubsData);
}

export async function getClub(clubTla) {
  const clubData = await(getClubFromApi(clubTla));
  return mapClubs([clubData]);
}

export async function addClub(club) {
  return await(addClubToApi(club));
}
