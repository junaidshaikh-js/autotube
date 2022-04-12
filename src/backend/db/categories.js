import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Sports Car",
    description: "",
  },
  {
    _id: uuid(),
    categoryName: "Car Reviews",
    description: "",
  },
  {
    _id: uuid(),
    categoryName: "Car Tech",
    description: "",
  },
  {
    _id: uuid(),
    categoryName: "Drag Race",
    description: "",
  },
  {
    _id: uuid(),
    categoryName: "Auto Expo",
    description: "",
  },
];
