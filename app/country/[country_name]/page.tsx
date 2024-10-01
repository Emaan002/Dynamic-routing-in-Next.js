type CountryData = {
    name: string;
    population: number;
    capital: string;
  };
  
  const countryData: Record<string, CountryData> = {
    Pakistan: { name: 'Pakistan', population: 251269164, capital: 'Islamabad' },
    Canada: { name: 'Canada', population: 38000000, capital: 'Ottawa' },
    Japan: { name: 'Japan', population: 126300000, capital: 'Tokyo' },
    Germany: { name: 'Germany', population: 83000000, capital: 'Berlin' },
    SaudiArabia: { name: 'Saudi Arabia', population: 34107001, capital: 'Riyadh' }
  };
  
  const CountryDetails = ({ params }: { params: { country_name: string } }) => {
    const country = countryData[params.country_name];
  
    if (!country) {
      return <p>Country not found</p>;
    }
  
    return (
      <div className="h-screen mx-auto p-4 bg-slate-500">
        <h1 className="text-4xl font-bold mb-4 flex justify-center">{country.name}</h1>
        <p className="text-lg mb-2 flex justify-center"><strong>Population:</strong> {country.population.toLocaleString()}</p>
        <p className="text-lg flex justify-center "><strong>Capital:</strong> {country.capital}</p>
      </div>
    )
  };
  
  export default CountryDetails;
  
