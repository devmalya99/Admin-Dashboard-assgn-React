import InputCard from "./Components/InputCard";
import "./App.css";
import ProductList from "./Components/ProductList";

function App() {
    return (
        <>
            <div className="container flex flex-col items-center px-4 pt-10 pb-32 md:px-0">
              <div className="bg-white-200  text-white p-4  my-3 w-full max-w-xl">
                  <InputCard />
              </div>
              <div className="bg-white-200 text-white p-4 mb-4 mt-4 w-full max-w-xl">
                  <ProductList />
              </div>
            </div>
        </>
    );
}

export default App;