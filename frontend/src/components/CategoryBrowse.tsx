import CategoryCard from "./CategoryCard"

import { Categories } from "../mocks/data.ts";

export default function CategoryBrowse() {

    


  return (
    <section className="my-6 mx-4">
        <h2 className="text-3xl text-primary font-semibold">Qwis Category</h2>
        <p className="font-extralight">Select a category to start playing.</p>
        <div className="p-4 text-white grid grid-rows-2 grid-flow-col gap-4 place-content-start overflow-x-scroll">
            {
                Categories.map(data => {
                    return <CategoryCard cardDetail={data} />
                })
            }
        </div>
    </section>
  )
}
