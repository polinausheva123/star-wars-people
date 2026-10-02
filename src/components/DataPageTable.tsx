import type { StarWarsPerson } from "../types/starwars";

interface DataPageTableProps {
  data: StarWarsPerson[];
}

export const DataPageTable = ({ data }: DataPageTableProps) => {
  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
      <table className="w-full text-left text-sm text-gray-600">
        <caption className="sr-only">Star Wars Characters</caption>
        <thead className="bg-gray-50 text-xs uppercase text-gray-700 border-b border-gray-200">
          <tr>
            <th scope="col" className="px-4 py-3">
              Name
            </th>
            <th scope="col" className="px-4 py-3">
              Height
            </th>
            <th scope="col" className="px-4 py-3">
              Mass
            </th>
            <th scope="col" className="px-4 py-3">
              Hair Color
            </th>
            <th scope="col" className="px-4 py-3">
              Skin Color
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {data.map((person) => (
            <tr key={person.url} className="hover:bg-gray-50">
              <td className="px-4 py-3 font-medium text-gray-900">
                {person.name}
              </td>
              <td className="px-4 py-3">{person.height}</td>
              <td className="px-4 py-3">{person.mass}</td>
              <td className="px-4 py-3">{person.hair_color}</td>
              <td className="px-4 py-3">{person.skin_color}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
