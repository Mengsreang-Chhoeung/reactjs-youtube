import React from "react";

const people: string[] = [
  "Kok Dara",
  "Kok Tola",
  "Kok Seyha",
  "Kok Bunna",
  "Kok Thyda",
];

const PeopleList = people.map((it) => <li>{it}</li>);

const People: React.FC = () => {
  return (
    <ul>
      {/* <li>Kok Dara</li>
      <li>Kok Tola</li>
      <li>Kok Seyha</li>
      <li>Kok Bunna</li>
      <li>Kok Thyda</li> */}

      {/* {people.map((it) => {
        return <li>{it}</li>;
      })} */}

      {/* {people.map((it) => (
        <li>{it}</li>
      ))} */}

      {PeopleList}
    </ul>
  );
};

export default People;
