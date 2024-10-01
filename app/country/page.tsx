import Link from 'next/link';

const countries: string[] = ['Pakistan', 'Canada', 'Japan', 'Germany', 'SaudiArabia'];

const CountryList = () => {
  return (
    <div className="h-screen mx-auto p-4 bg-slate-200  ">
      <h1 className="text-3xl font-bold mb-6 flex justify-center">Country List</h1>
      <ul className="space-y-4">
        {countries.map((country) => (
          <li key={country} className="text-xl">
            <Link href={`/country/${country}`} className="text-blue-600 hover:underline">
              {country}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountryList;


