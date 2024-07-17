export default function CategoryBrowse() {
  return (
    <section className="my-6 mx-4">
        <h2 className="text-3xl text-secondary font-semibold leading-loose">Qwis Category</h2>
        <div className="scroll-container grid grid-rows-2 grid-flow-col overflow-x-scroll gap-4 text-white p-4">
            <div className="bg-primary rounded-lg shadow-md p-6 w-64 flex-shrink-0">
                <div className=" flex items-center mb-4">
                    <span className="text-2xl mr-2">🚀</span>
                    <h2 className="text-xl font-bold">Kids</h2>
                </div>
                <p className="text-white">
                    Blitz Time: 2 min
                </p>
            </div>
            <div className="bg-primary rounded-lg shadow-md p-6 w-64 flex-shrink-0">
                <div className=" flex items-center mb-4">
                    <span className="text-2xl mr-2">🚀</span>
                    <h2 className="text-xl font-bold">Web Tech</h2>
                </div>
                <p className="text-white">
                    Blitz Time: 2 min
                </p>
            </div>
            <div className="bg-primary rounded-lg shadow-md p-6 w-64 flex-shrink-0">
                <div className=" flex items-center mb-4">
                    <span className="text-2xl mr-2">🚀</span>
                    <h2 className="text-xl font-bold">Java Script</h2>
                </div>
                <p className="text-white">
                    Blitz Time: 2 min
                </p>
            </div>
            <div className="bg-primary rounded-lg shadow-md p-6 w-64 flex-shrink-0">
                <div className=" flex items-center mb-4">
                    <span className="text-2xl mr-2">🚀</span>
                    <h2 className="text-xl font-bold">React</h2>
                </div>
                <p className="text-white">
                    Blitz Time: 2 min
                </p>
            </div>
            <div className="bg-primary rounded-lg shadow-md p-6 w-64 flex-shrink-0">
                <div className=" flex items-center mb-4">
                    <span className="text-2xl mr-2">🚀</span>
                    <h2 className="text-xl font-bold">Python</h2>
                </div>
                <p className="text-white">
                    Blitz Time: 2 min
                </p>
            </div>
            
        </div>
    </section>
  )
}
