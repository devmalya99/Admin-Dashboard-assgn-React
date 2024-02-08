
import InputCard from "./Components/InputCard";
import "./App.css";
import ProductList from "./Components/ProductList";
function App() {
  return (
    <>
      <div className="container flex flex-col sm:flex-row justify-center items-center h-screen">
        <div className="bg-gray-500 text-white p-4 mx-2">
          <InputCard />
        </div>
        <div className="bg-gray-500 text-white p-4 mx-2 mt-3">
          <ProductList />
        </div>
      </div>
    </>
  );
}

export default App;
