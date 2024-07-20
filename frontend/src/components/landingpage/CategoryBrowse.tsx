import { ICategory } from "../../types.ts";
import CategoryCard from "../ui/CategoryCard.tsx"
import { useEffect, useState } from "react";


export default function CategoryBrowse() {

  const[categories, setCategories] = useState<ICategory[] | null>(null);

  useEffect(() => {
    fetch("http://localhost:3000/categories")
      .then((response) => {
          return response.json();
      })
      .then(data => {
        setCategories(data);
      })
      .catch(err => console.error(err));
  }, []);


  return (
    <section className="my-6 mx-4 ">
        <h2 className="text-3xl text-accent font-semibold">Qwis Category</h2>
        <p className="font-extralight text-xs">Select a category to start playing.</p>
        <div className="p-4 text-accent grid grid-rows-2 grid-flow-col gap-4 place-content-start overflow-x-scroll">
            {
                categories && categories.map(data => {
                    return <CategoryCard key={data.id} cardDetail={data} />
                })
            }
        </div>
    </section>
  )
}
