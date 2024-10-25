import Navbar from "../components/Navbar";

function Home(){
    return (
        <div>
            <div className="bg-violet-400"> <Navbar page="home"/> </div>
            <div className="mx-10 mt-20">
            <div className="container mx-auto py-8">
    {/* <!-- Header Section --> */}
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-2xl font-bold">Categories that might interest you</h2>
      <button className="bg-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-gray-600">See all categories</button>
    </div>

    {/* <!-- Category Grid --> */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {/* <!-- Category Block 1 --> */}
      <div className="bg-white md:h-48 md:pt-10 rounded-lg p-6 text-center hover:bg-gray-700 cursor-pointer">
        <div className="text-4xl mb-4">💻</div>
        <h3 className="text-lg font-semibold">Laptops & Computers</h3>
      </div>

      {/* <!-- Category Block 2 --> */}
      <div className="bg-gray-800 rounded-lg p-6 text-center hover:bg-gray-700 cursor-pointer">
        <div className="text-4xl mb-4">📺</div>
        <h3 className="text-lg font-semibold">TV</h3>
      </div>

      {/* <!-- Category Block 3 --> */}
      <div className="bg-gray-800 rounded-lg p-6 text-center hover:bg-gray-700 cursor-pointer">
        <div className="text-4xl mb-4">📱</div>
        <h3 className="text-lg font-semibold">Tablets</h3>
      </div>

      {/* <!-- Category Block 4 --> */}
      <div className="bg-gray-800 rounded-lg p-6 text-center hover:bg-gray-700 cursor-pointer">
        <div className="text-4xl mb-4">🎧</div>
        <h3 className="text-lg font-semibold">Audio</h3>
      </div>

      {/* <!-- Category Block 5 --> */}
      <div className="bg-gray-800 rounded-lg p-6 text-center hover:bg-gray-700 cursor-pointer">
        <div className="text-4xl mb-4">🖨️</div>
        <h3 className="text-lg font-semibold">Printers</h3>
      </div>

      {/* <!-- Category Block 6 --> */}
      <div className="bg-gray-800 rounded-lg p-6 text-center hover:bg-gray-700 cursor-pointer">
        <div className="text-4xl mb-4">⌨️</div>
        <h3 className="text-lg font-semibold">Computer Accessories</h3>
      </div>

      {/* <!-- Category Block 7 --> */}
      <div className="bg-gray-800 rounded-lg p-6 text-center hover:bg-gray-700 cursor-pointer">
        <div className="text-4xl mb-4">🔒</div>
        <h3 className="text-lg font-semibold">Security & Wi-Fi</h3>
      </div>

      {/* <!-- Category Block 8 --> */}
      <div className="bg-gray-800 rounded-lg p-6 text-center hover:bg-gray-700 cursor-pointer">
        <div className="text-4xl mb-4">🏷️</div>
        <h3 className="text-lg font-semibold">Deals</h3>
      </div>
    </div>
  </div>
            </div>
    </div>
        
    )
}

export default Home;