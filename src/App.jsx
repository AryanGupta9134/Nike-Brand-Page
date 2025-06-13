import './App.css'
const App = () => {
  return (
    <div>
      <div className="h-screen">
        {/* Navabr */}
        <div className="h-1/10 flex justify-between p-3">
          <img src="/public/Images/nike_logo.png" alt="" className="h-5/5" />
          <div className="flex gap-6 mt-2">
            <p>MENU</p>
            <p>LOCATION</p>
            <p>ABOUT</p>
            <p>CONTACT</p>
          </div>
          <button className=" bg-red-600 w-25 text-white rounded-xl">
            Login
          </button>
        </div>

        {/* main content  */}
        <div className="h-9/10 flex justify-center items-center">
          {/* left content */}
          <div className="w-5/10 flex flex-col justify-center items-center h-full">
            <h1 className="text-8xl font-bold p-7 w-4/5">YOUR FEET DESERVE THE BEST</h1>
            <div className="w-4/5 ml-10">
              <p className="text-xs font-bold text-gray-400 w-3/5 p-3">
                YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
                SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH
                OUR SHOES.
              </p>
              <div className="flex gap-4 p-2">
                <button className="p-1 bg-red-600 text-white font-bold">Shop Now</button>
                <button className="p-1 border-gray-400 font-bold text-gray-400">Category</button>
              </div>
              <div className="w-30 p-2">
                <p className="text-xs">Also Available On</p>
                <div className="flex gap-3 mt-2">
                  <img src="/public/Images/Flipkart.png" alt="" className="h-7" />
                  <img src="/public/Images/Amazon.png" alt="" className="h-7" />
                </div>
              </div>
            </div>
          </div>
          {/* right content */}
          <div className="w-5/10">
            <img src="/public/Images/shoe.png" alt="" className="w-full h-full shadow-effect" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
