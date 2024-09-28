import React, { useState } from "react";
import { initialTravelPlan } from "./data/places";
import PlaceTree from "./PlaceTree";

const TravelPlan: React.FC = () => {
  const [plan, setPlan] = useState(initialTravelPlan);

  const handleComplete = (parentId: number, childId: number) => {
    const parent = plan[parentId];
    // Create a new version of the parent place
    // that doesn't include this child ID.
    const nextParent = {
      ...parent,
      childIds: parent.childIds.filter((id) => id !== childId),
    };
    // Update the root state object...
    setPlan({
      ...plan,
      // ...so that it has the updated parent.
      [parentId]: nextParent,
    });
  };

  const root = plan[0];
  const planetIds = root.childIds;

  return (
    <>
      <h2>Places to visit</h2>

      <ol>
        {planetIds.map((id) => (
          <PlaceTree
            key={id}
            id={id}
            parentId={0}
            placesById={plan}
            onComplete={handleComplete}
          />
        ))}
      </ol>
    </>
  );
};

export default TravelPlan;
