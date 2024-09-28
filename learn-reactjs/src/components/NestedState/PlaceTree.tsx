import React from "react";
import { TTravelPlan } from "./data/places";

type PlaceTreeProps = {
  id: number;
  parentId: number;
  placesById: TTravelPlan;
  onComplete: (parentId: number, childId: number) => void;
};

const PlaceTree: React.FC<PlaceTreeProps> = (props) => {
  const { id, onComplete, parentId, placesById } = props;

  const place = placesById[id];
  const childIds = place.childIds;

  return (
    <li>
      {place.title}

      <button
        onClick={() => {
          onComplete(parentId, id);
        }}
      >
        Complete
      </button>

      {childIds.length > 0 && (
        <ol>
          {childIds.map((childId) => (
            <PlaceTree
              key={childId}
              id={childId}
              parentId={id}
              placesById={placesById}
              onComplete={onComplete}
            />
          ))}
        </ol>
      )}
    </li>
  );
};

export default PlaceTree;
