import Club from '../entities/Club.js';

export function mapClubs(clubsData) {
  return clubsData.map((club) => {
    const {
      area: {name: areaName},
      name,
      shortName,
      tla,
      crestUrl,
      address,
      phone,
      website,
      email,
      founded,
      clubColors,
      venue,
      lastUpdated,
      id,
      area: {areaId},
    } = club;

    return new Club(
      areaName,
      name,
      shortName,
      tla,
      crestUrl,
      address,
      phone,
      website,
      email,
      founded,
      clubColors,
      venue,
      lastUpdated,
      id,
      areaId,
    );
  });
}
