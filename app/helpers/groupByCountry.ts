export interface Passenger {
  id: number;
  passenger_name: string;
  passenger_avatar: string;
  origin: string;
  destination: string;
}

export interface CountrySection {
  section: string;
  total: number;
  data: Passenger[];
}

const groupByCountry = (data: Passenger[]): CountrySection[] => {
  const countryMap: Record<string, Passenger[]> = {};

  data.forEach((passenger) => {
    const { origin, destination } = passenger;

    // Adicionar o passageiro no país de origem
    if (!countryMap[origin]) countryMap[origin] = [];
    countryMap[origin].push(passenger);

    // Adicionar o passageiro no país de destino
    if (!countryMap[destination]) countryMap[destination] = [];
    countryMap[destination].push(passenger);
  });

  return Object.keys(countryMap)
    .sort()
    .map((country) => ({
      section: country,
      total: countryMap[country].length,
      data: countryMap[country],
    }));
};

export default groupByCountry;
