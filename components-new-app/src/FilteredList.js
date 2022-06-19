import { useMemo } from "react";

export function FilteredList({ list }) {
  const calculateAdultAge = (list) => {
    const adult = list.filter((person) => {
      if (person.age > 18) {
        return person;
      }
    });
    return adult;
  };

  const filteredlist = useMemo(() => {
    return calculateAdultAge(list);
  }, [list]);
  return (
    <>
      <ul>
        {filteredlist.map((person) => (
          <li key={person.id}>
            {person.name && (
              <span>
                <strong>Nome:</strong> {person.name},
              </span>
            )}
            {person.age && (
              <span>
                <strong> Età:</strong> {person.age}
              </span>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
