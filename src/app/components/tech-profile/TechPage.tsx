import { Suspense } from "react";
// import ProductsList from "./TechList";
import TechList from "./TechList";

export default function TechPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TechList />
    </Suspense>
  );
}
