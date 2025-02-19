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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(baseUrl);
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
  }, []);

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
          <div className="flex flex-row justify-center">
            <NavLink to="/addItem">
              <Button className="bg-red-200 text-red-500 font-delius text-lg p-1 rounded hover:bg-red-100">
                Add new photo or video
              </Button>
            </NavLink>
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
                      className="w-full h-64 object-cover border-4 border-red-300"
                      src={item.image}
                      controls
                    >
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <img
                      className="w-full h-64 object-cover border-4 border-red-300"
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
          <Button className="font-delius bg-red-200 text-red-500 p-1 rounded hover:bg-red-100">
            Add new photo or video
          </Button>
        </NavLink>
      </div>
    </div>
  );
}

export default VirtualAlbum;