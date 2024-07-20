export default function SearchBar() {
  return (
    <span className="relative-block w-full flex md:justify-end justify-center items-center">
        <input className="bg-background py-2 w-full sm:w-1/2 md:w-1/4 px-6 my-2 rounded-s-3xl" placeholder="Search for category" />
      <button className="px-4 py-2 bg-primary text-dark rounded-r-md">
        Search
      </button>
    </span>

    
  )
}
