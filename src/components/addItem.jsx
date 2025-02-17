import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import InputMask from "react-input-mask";

function AddItem() {
  const baseUrl = `${import.meta.env.VITE_SERVER_URL}/api/parisMemories`;
  const [newPicName, setNewPicName] = useState("");
  const [newImageUrl, setNewImageUrl] = useState("");
  const [newPicDate, setNewPicDate] = useState("");
  const [newDesc, setNewDesc] = useState("");
  const [newBlogArray] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const addItemDetail = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(baseUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: newPicName,
          image: newImageUrl,
          date: newPicDate,
          description: newDesc,
          blogArray: newBlogArray,
        }),
      });

      if (response.ok) {
        // set form fields to blank after update
        setNewPicName("");
        setNewImageUrl("");
        setNewPicDate("");
        setNewDesc("");
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 2000);
        navigate("/virtualAlbum");
      } else {
        console.log("Failed to submit data.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // display form
  return (
    <div className="text-center font-delius text-3xl py-3">

      <form onSubmit={addItemDetail}>
        <div className="flex flex-col w-1/4 mx-auto text-center">
          <label
            htmlFor="title"
            className="mt-4 text-2xl pb-2"
          >
            Title of Image
          </label>

          <input
            type="text"
            className="text-lg bg-white bg-opacity-50 border-2 border-red-800 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-300"
            onChange={(e) => setNewPicName(e.target.value)}
            value={newPicName}
            required
          />

          <label
            htmlFor="Date"
            className="mt-4 text-2xl pb-2"
          >
            Date taken
          </label>
          {/* <InputMask
            mask="99/99/9999"
            maskChar={null}
            className="text-center text-teal-500 font-margarine text-lg bg-white bg-opacity-50 border-2 border-orange-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-300"
            placeholder="mm/dd/yyyy"
            onChange={(e) => setNewPicDate(e.target.value)}
            value={newPicDate}
            required
          /> */}

          <label
            htmlFor="Image"
            className="mt-4 text-2xl pb-2"
          >
            Image from Imgur
          </label>
          <input
            type="text"
            className="text-lg bg-white bg-opacity-50 border-2 border-red-800 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-200"
            onChange={(e) => setNewImageUrl(e.target.value)}
            value={newImageUrl}
            required
          />

          <label
            htmlFor="Description"
            className="mt-4 text-2xl pb-2"
          >
            Description
          </label>
          <textarea
            rows="5"
            className="text-lg bg-white bg-opacity-50 border-2 border-red-800 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-300"
            type="text"
            onChange={(e) => setNewDesc(e.target.value)}
            value={newDesc}
            required
          />

          <div className="flex flex-row w-full mx-auto justify-evenly pt-3 text-sm tablet:text-lg">
            <Link
              to="/virtualAlbum"
              className="bg-red-200 text-bg-cyan-400 p-1 rounded hover:red-100"
            >
              👈 back
            </Link>

            <input
              type="submit"
              className="bg-red-200 text-bg-cyan-400 p-1 rounded hover:bg-red-100"
              value={submitted ? "Saving..." : "💾 Save Comment"}
              disabled={submitted}
            />
          </div>

          <p className="text-center">
            {submitted && (
              <div className="success-message">Comment has been added!</div>
            )}
          </p>
        </div>
      </form>
    </div>
  );
}

export default AddItem;
