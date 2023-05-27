import React, { useEffect, useState } from "react";

function App() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    // const fetchProd = async () => {
    //   const res = await fetch("https://fakestoreapi.com/products/")
    //   const data = await res.json();
    //   console.log(data);
    //   setProduct(data);
    // };
    // fetchProd();

      fetch("https://restcountries.com/v3.1/region/europe")
        .then((res) => res.json())
        .then((data) => {
          setProduct(data);
          console.log(data);
        })
        .catch((err) => alert(err.message));
  }, []);

  return (
    <>
      <div className="grid grid-cols-4">

        {product.map((allItems) => {
          return (
            <div className=" h-96 border-4 overflow-scroll" key={allItems.id}>
              <img src={allItems.flags.png} alt="COUNTRY-FLAG" className=" h-56" />
              <div>
                <h2 className="text-xl">
                  <span className="font-bold text-red-600">Name:</span>{" "}
                  {allItems.name.common}
                </h2>
                <p>
                  <span className="font-bold text-red-600">capital:</span>
                  {allItems.capital}
                </p>
                <p>
                  <span className="font-bold text-red-600">Population:</span>
                  {allItems.population}
                </p>
                <p>
                  <span className="font-bold text-red-600">Subregion :</span>
                  {allItems.subregion}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
