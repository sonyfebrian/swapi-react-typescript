import React, { useState, useEffect } from "react";
import { ApiClient } from "../../network/ApiClient";
import { AiOutlineDoubleRight, AiOutlineDoubleLeft } from "react-icons/ai";

const DetailPlanet = () => {
  const [page, setPage] = useState<number>(1);

  const [loading, setLoading] = useState<boolean>(false);

  const [planet, setPlanet] = useState<
    Array<{
      name: string;
      surface_water: string;
      rotation_period: string;
      climate: string;
      diameter: string;
      orbital_period: string;
    }>
  >([]);

  const apiUrl = `${ApiClient.baseURL}/planets/?page=${page}`;

  const getPlanet = async () => {
    setLoading(true);

    try {
      const fetchData = await fetch(apiUrl);
      const data = await fetchData.json();

      setPlanet(data.results);
      setLoading(false);

      return data.results;
    } catch (error) {
      alert(`Throwing ${error}`);
      throw error;
    }
  };
  useEffect(() => {
    getPlanet();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);
  console.log(planet);
  const buttonStyling = `flex space-x-3 mr-2 font-semibold bg-gradient-to-r from-blue-600 via-indigo-700 to-indigo-900 
  text-gray-100 rounded-sm ring-2 ring-blue-200 px-6 py-2 
  hover:bg-white  hover:text-white hover:ring-slate-300 mx-8`;
  return (
    <>
      <div className="grid gap-8 space-x-1 lg:grid-cols-6">
        {planet.length > 0 &&
          planet.map((planet) => (
            <div className="px-4 py-4  rounded">
              <div className="flex justify-center">
                <div className="block rounded-lg shadow-lg bg-white max-w-sm">
                  <div className="py-3 px-6 border-b border-gray-300 text-center text-xl font-bold">
                    {planet.name}
                  </div>
                  <div className="p-6 truncate">
                    <p className="text-gray-700 text-base mb-4">
                      <span className="font-bold"> rotation_period:</span>{" "}
                      {planet.rotation_period}
                    </p>
                    <p className="text-gray-700 text-base mb-4">
                      <span className="font-bold"> orbital_period:</span>{" "}
                      {planet.orbital_period}
                    </p>
                    <p className="text-gray-700 text-base mb-4">
                      <span className="font-bold">surface_water:</span>{" "}
                      {planet.surface_water}
                    </p>
                    <h5 className="text-gray-900 text-base mb-2">
                      <span className="font-bold">climate:</span>{" "}
                      {planet.climate}
                    </h5>
                    <p className="text-gray-700 text-base mb-4">
                      <span className="font-bold">diameter:</span>{" "}
                      {planet.diameter}
                    </p>
                    <button
                      className={buttonStyling}
                    >
                      Read More..
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className="flex justify-center">
        <div className="bg-transparan p-10 justify-center">
          <div className="grid grid-cols-2 place-items-center flex">
            {page !== 1 && (
              <button
                onClick={() => setPage(page - 1)}
                className={buttonStyling}
              >
                <AiOutlineDoubleLeft size="1.5rem" />
                <p>Prev</p>
              </button>
            )}
            {page !== 6 && (
              <button
                onClick={() => setPage(page + 1)}
                className={buttonStyling}
              >
                <p>Next</p>
                <AiOutlineDoubleRight size="1.5rem" />
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default DetailPlanet;
