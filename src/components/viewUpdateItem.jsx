import React, { useState, useEffect, useRef, useId } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Button } from "flowbite-react";
import MaskedInput from 'react-text-mask'; 
import DisplayBlogs from "./displayBlogs";

const DELETE_PW = `${import.meta.env.VITE_APP_DELETE_PASSWORD}`;

function ViewUpdateItem() {
  const { postId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const baseUrl = `${
    import.meta.env.VITE_SERVER_URL
  }/api/parismemories/${postId}`;
  const [picName, setPicName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [date, setDate] = useState("");
  const [desc, setDesc] = useState("");
  const [blogArray] = useState([]);
  const [tag, setTag] = useState(""); 
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const dateInputRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(baseUrl);
        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.status}`);
        }
        const data = await response.json();
        setPicName(data.title);
        setImageUrl(data.image);
        setDate(data.date);
        setDesc(data.description);
        setTag(data.tag);
        setIsLoading(false);
      } catch (error) {
        setError("Error fetching data," + error.message);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  // Restore scroll position if available
  // useEffect(() => {
  //   if (location.state && location.state.scrollPosition) {
  //     console.log("Restoring scroll position:", location.state.scrollPosition);
  //     window.scrollTo(0, location.state.scrollPosition);
  //   }
  // }, [location]);

  const handleBackToPics = () => {
    // Capture current scroll position
    const scrollPosition = window.scrollY;

    // Navigate back with scroll position in state
    navigate("/parismemories", { state: { scrollPosition } });
  };

  const updatePost = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(baseUrl, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: picName,
          image: imageUrl,
          date: date,
          description: desc,
          blogArray: blogArray,
          tag: tag,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 2000);
        navigate(`/viewUpdateItem/${postId}`);
      } else {
        console.log("Failed to submit data.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const removePost = async (e) => {
    e.preventDefault();

    // only admin can delete
    alert("Enter admin password to delete");
    let password = prompt("Please enter the admin password");

    if (password == DELETE_PW) {
      alert("Photo content will be deleted");
    } else {
      alert("You do not have authority, contact the admin");
      return;
    }

    try {
      const response = await fetch(baseUrl, {
        method: "DELETE",
      });
      if (response.ok) {
        navigate("/virtualAlbum");
      }
    } catch (error) {}
  };

  // display form
  return (
    <div>
      <form className="flex flex-col" onSubmit={updatePost}>
        <div className="flex flex-col justify-center min-h-screen laptop:w-5/6">
          <div className="flex flex-col items-center desktop:flex-row desktop:items-start">
            <div className="justify-center flex m-5 laptop:w-2/3 desktop:w-1/2 border-8 border-double border-red-800">
              {imageUrl && imageUrl.match(/\.(mp4|webm|ogg)$/i) ? (
                <video
                  className="max-w-full max-h-full object-cover"
                  src={imageUrl}
                  alt={picName}
                  controls
                >
                  Your browser does not support the video tag.
                </video>
              ) : imageUrl ? (
                <img
                  className="max-w-full max-h-full object-contain"
                  src={imageUrl}
                  alt={picName}
                />
              ) : null}
            </div>

            <div className="font-delius flex flex-col items-center w-3/4 laptop:w-1/3 desktop:mt-0 desktop:w-1/2">
              <div className="flex flex-col items-center ">
                <div className="flex flex-col items-center">
                  <label
                    htmlFor="title"
                    className="xt-lg tablet:text-xl laptop:text-2xl tablet:pr-2"
                  >
                    Title
                  </label>

                  <input
                    type="text"
                    className="text-sm tablet:text-xl laptop:text-2xl desktop:text-xl bg-white bg-opacity-50 border-2 border-red-800 text-center rounded-md focus:outline-none focus:ring-2 focus:ring-red-100 laptop:w-full"
                    onChange={(e) => setPicName(e.target.value)}
                    value={picName}
                    required
                  />
                </div>

                <div className="mt-2 flex flex-col items-center">
                  <label
                    htmlFor="date"
                    className="text-lg tablet:text-xl laptop:text-2xl"
                  >
                    Date taken
                  </label>
                  <MaskedInput
                    mask={[
                      /\d/,
                      /\d/,
                      "/",
                      /\d/,
                      /\d/,
                      "/",
                      /\d/,
                      /\d/,
                      /\d/,
                      /\d/,
                    ]}
                    className="text-center text-sm tablet:text-xl laptop:text-2xl desktop:text-xl bg-white bg-opacity-50 border-2 border-red-800 rounded-md focus:outline-none focus:ring-2 focus:ring-red-100 p-2 mt-2 laptop:mx-1"
                    placeholder="mm/dd/yyyy"
                    onChange={(e) => setDate(e.target.value)}
                    value={date}
                    required
                  />
                </div>

                <div className="mt-2 flex flex-col items-center">
                  <label
                    htmlFor="Image"
                    className="text-lg tablet:text-xl laptop:text-2xl pr-4"
                  >
                    Image URL
                  </label>

                  <input
                    type="text"
                    className="text-center text-sm tablet:text-xl laptop:text-2xl desktop:text-xl bg-white bg-opacity-50 border-2 border-red-800 rounded-md focus:outline-none focus:ring-2 focus:ring-red-100 smallestMobile:mt-2"
                    onChange={(e) => setImageUrl(e.target.value)}
                    value={imageUrl}
                    required
                  />
                </div>
              </div>

              <div className="mt-2 flex items-center w-full flex-col">
                <label
                  className="text-lg tablet:text-xl laptop:text-2xl pr-4"
                  htmlFor="Description"
                >
                  Description
                </label>
                <textarea
                  rows="5"
                  className="text-xs tablet:text-xl tablet:text-orange laptop:text-2xl desktop:text-xl bg-white bg-opacity-50 border-2 border-red-800 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-100 w-full mt-2"
                  type="text"
                  onChange={(e) => setDesc(e.target.value)}
                  value={desc}
                  required
                />
              </div>
              <div className="mt-2 flex items-center w-1/3 flex-col">
                <label
                  className="text-lg tablet:text-xl laptop:text-2xl pr-4"
                  htmlFor="dropListId"
                >
                  Image Tag
                </label>
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
              </div>

              <div className="grid grid-cols-1 tablet:grid-cols-4 gap-x-8 place-items-center m-5">
                <Button
                  onClick={handleBackToPics}
                  className="font-delius flex items-center justify-center w-40 h-8 border-2 border-red-800  bg-red-200 text-bg-red-500 m-2 p-1 rounded hover:bg-red-100 text-xs"
                >
                  👈 Virtual Album
                </Button>

                <Button
                  type="submit"
                  className="font-delius w-40 h-8 bg-red-200  border-2 border-red-800 text-bg-red-500 m-2 p-1 rounded hover:bg-red-100 text-xs items-center"
                  disabled={submitted}
                >
                  {submitted ? "Saving..." : "💾 Save Updates"}
                </Button>

                <NavLink to={`/addBlog/${postId}`}>
                  <Button className="font-delius w-40 h-8 bg-red-200 border-2 border-red-800 text-bg-red-500 m-2 p-1 rounded hover:bg-red-100 text-xs items-center">
                    Add a Comment
                  </Button>
                </NavLink>

                <NavLink to="/virtualAlbum">
                  <Button
                    onClick={removePost}
                    className="font-delius w-40 h-8 bg-red-200 border-2 border-red-800 text-bg-cyan-400 m-2 p-1 rounded hover:bg-red-100 text-xs items-center"
                  >
                    ❌ Remove
                  </Button>
                </NavLink>
              </div>
              <p className="text-center">
                {submitted && (
                  <div className="success-message">
                    Comment has been updated!
                  </div>
                )}
              </p>
            </div>
          </div>
        </div>
      </form>
      <DisplayBlogs />
    </div>
  );
}

export default ViewUpdateItem;
