// Displays all of the pictures added to MongoDB of ParisMemories
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Card, Button } from "flowbite-react";
// import DisplayBlogs from "./displayBlogs";

function VirtualAlbum() {
  // const location = useLocation();
  const baseUrl = `${import.meta.env.VITE_SERVER_URL}/api/parismemories`;
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [tag, setTag] = useState("");
  const [category, setCategory] = useState("all"); // Add category state

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        let url = baseUrl;
        if (category !== "all") {
          url += `?category=${category}`; // Add category as query parameter
        }
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.status}`);
        }
        const data = await response.json();
        setData(data);
        setIsLoading(false);
      } catch (error) {
        setError("Error fetching data," + error.message);
        setIsLoading(false);
      }
    };
    fetchData();
  }, [category]); // Re-fetch data when category changes

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  return (
    // Returns all images
    <div className="min-h-screen flex flex-col items-center justify-center">
      {/* <pre>{JSON.stringify(data, null, 2)} </pre> */}
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div>
          <h1 className="text-center text-black font-delius text-3xl pt-2">
            Virtual Album
          </h1>
          <h1 className="text-center text-black font-delius text-2xl pt-2 pb-2">
            Click on a photo to update it
          </h1>

          <div className="flex flex-row justify-evenly">
            <select
              name="selectedCategory"
              className="text-xs tablet:text-xl tablet:text-orange laptop:text-2xl desktop:text-xl bg-white bg-opacity-50 border-2 border-red-800 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-100 w-full mt-2 text-center"
              value={tag}
              onChange={(e) => setTag(e.target.value)}
              required
            >
              <option value="">Select a tag</option>
              <option value="Museums">Museums</option>
              <option value="Barge Excursions & Sight Seeing">
                Barge Excursions & Sight Seeing
              </option>
              <option value="Accomodations">Accomodations</option>
              <option value="Locks">Locks</option>
              <option value="Fun">Fun</option>
              <option value="Food">Food</option>
              <option value="People">People</option>
              <option value="Wine Tours">Wine Tours</option>
            </select>

            <div className="flex flex-row justify-center">
              <NavLink to="/addItem">
                <Button className="bg-red-200 text-red-800 border-2 border-red-800  font-delius text-lg p-1 rounded hover:bg-red-100 h-10 w-42 items-center">
                  Add new photo or video
                </Button>
              </NavLink>
            </div>
          </div>
          <div className="bg-card hover:bg-card-hover rounded-md p-3 m-2 grid grid-cols-1 laptop:grid-cols-2 desktop:grid-cols-4">
            {data.map((item) => (
              <Card
                key={item._id}
                className="max-w-sm m-2 bg-white bg-opacity-40 border-4 border-double border-red-900"
              >
                <NavLink
                  key={item._id}
                  to={`/ViewUpdateItem/${item._id}`}
                  state={{ scrollPosition: window.scrollY }}
                >
                  <h3 className="font-delius text-center text-red-500 font-bold text-lg laptop:text-3xl p-2">
                    {item.title}
                  </h3>

                  {item.image.match(/\.(mp4|webm|ogg)$/i) ? (
                    <video
                      className="w-full h-84 object-contain border-4 border-red-300"
                      src={item.image}
                      controls
                    >
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <img
                      className="w-full h-84 object-contain border-4 border-red-300"
                      src={item.image}
                      alt={item.title}
                    />
                  )}
                </NavLink>
              </Card>
            ))}
          </div>
        </div>
      )}
      <div className="flex justify-center">
        <NavLink to="/addItem">
          <Button className="bg-red-200 text-red-800 border-2 border-red-800  font-delius text-lg p-1 h-8 items-center rounded hover:bg-red-100">
            Add new photo or video
          </Button>
        </NavLink>
      </div>
    </div>
  );
}

export default VirtualAlbum;