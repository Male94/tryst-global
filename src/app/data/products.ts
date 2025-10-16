export type Product = {
  id: string;
  name: string;
  price: number;
  date: string;
  images: string[];
  category:
    | "Swim Wear"
    | "Intimates"
    | "Casual Wear"
    | "Active Wear"
    | "Lounge Wear";
  order: number;
};
