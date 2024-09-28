import newPlaces from "./new-places.json";

export type TTravelPlan = {
  [key: number]: {
    id: number;
    title: string;
    childIds: number[];
  };
};

export const initialTravelPlan: TTravelPlan = newPlaces;
