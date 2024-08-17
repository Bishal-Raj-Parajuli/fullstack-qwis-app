import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import CategoryCard from '../components/ui/CategoryCard';
import SearchBar from '../components/ui/SearchBar';
import MainContentWrapper from '../components/common/MainContentWrapper';
import { useGetCategoryList } from '../hooks/useCategoryApi';

export default function Categories() {
  const { data: categoryList } = useGetCategoryList();
  return (
    <>
      <Navbar />
      <MainContentWrapper>
        <h2 className="text-3xl text-accent font-semibold">Browse</h2>
        <p className="font-extralight text-xs">
          Select a category to start playing.
        </p>
        <SearchBar />
        <div className="p-4 text-accent grid min-[580px]:grid-cols-2 min-[930px]:grid-cols-3 min-[1200px]:grid-cols-4 gap-4 place-content-center">
          {categoryList &&
            categoryList.map((data) => {
              return <CategoryCard key={data.id} cardDetail={data} />;
            })}
        </div>
      </MainContentWrapper>
      <Footer />
    </>
  );
}
