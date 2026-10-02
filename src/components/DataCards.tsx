import type { StarWarsPerson } from "../types/starwars";

interface DataCardsProps {
  data: StarWarsPerson[];
}

export const DataCards = ({ data }: DataCardsProps) => {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {data.map((person) => (
        <article
          key={person.url}
          className="p-4 rounded-lg border border-gray-200 bg-white shadow-sm space-y-2"
        >
          <h2 className="text-lg font-semibold text-gray-900">{person.name}</h2>
          <div className="text-sm text-gray-600 space-y-1">
            <p>
              <span className="font-medium text-gray-800">Height:</span>
              {person.height} cm
            </p>
            <p>
              <span className="font-medium text-gray-800">Mass:</span>
              {person.mass} kg
            </p>
            <p>
              <span className="font-medium text-gray-800">Hair Color:</span>
              {person.hair_color}
            </p>
            <p>
              <span className="font-medium text-gray-800">Skin Color:</span>
              {person.skin_color}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
};
