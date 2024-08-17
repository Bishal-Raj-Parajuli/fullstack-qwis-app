import CategoryCard from '../ui/CategoryCard.tsx';
import { useGetCategoryList } from '../../hooks/useCategoryApi.ts';

export default function CategoryBrowse() {
  const { data: categoryList } = useGetCategoryList();

  return (
    <section className="my-6 mx-4 ">
      <h2 className="text-3xl text-accent font-semibold">Qwis Category</h2>
      <p className="font-extralight text-xs">
        Select a category to start playing.
      </p>
      <div className="p-4 text-accent grid grid-rows-2 grid-flow-col gap-4 place-content-start overflow-x-scroll">
        {categoryList &&
          categoryList.map((data) => {
            return <CategoryCard key={data.id} cardDetail={data} />;
          })}
      </div>
    </section>
  );
}
