import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuthData } from "../Services/AuthContext";
const API_URL = `${process.env.REACT_APP_BASE_URL}`;
function CreateListing(props) {
  const [formData, setFormData] = useState({
    category: "Entertainment",
    link: "",
    url: "",
    title: "",
  });
  const { authData } = useAuthData();
  const [userName, setUsername] = useState("");

  useEffect(() => {
    setUsername(authData.username);
  }, [authData.username]);

  //const [msg, setMsg] = useState("");

  const handleEventChange = (event) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const response = await Axios.post(`${API_URL + "api/create-listing"}`,formData);
    if (response.data.success === true) {
      //setMsg("Listing created Successfully");
      toast.success("Listing created successfully !.");
    } else {
      //  setMsg("Listing failed! .");
      toast.success("Listing creation failed !.");
    }

    setFormData({ category: "Entertainment", link: "", url: "", title: "" });
  };

  return (
    <div className="create-listing">
      <ToastContainer />
      <div>
        <header>
          <h1 style={{ textTransform: "capitalize" }}>Welcome {userName} !</h1>
          <h1 id="title">Admin Listing form</h1>
          <p id="description"></p>
        </header>
      </div>
      <div>
        <form id="listing-form" onSubmit={handleFormSubmit}>
          <div>
            <p>which listing has to be created?</p>
            <label htmlFor="category" required>
              Choose a category:
            </label>
            <select
              id="dropdown"
              name="category"
              value={formData.category}
              onChange={handleEventChange}
              className="form-input-size"
              required
            >
              <option disabled selected value>
                Select category
              </option>
              <option value="Entertainment">Entertainment</option>
              <option value="Cooking">Cooking</option>
              <option value="Lifestyle">Lifestyle</option>
            </select>
          </div>
          <div className="form-input">
            <label id="link-label">Link:</label>
            <span className="input-group-addon">
              https://img.youtube.com/vi/
            </span>
            <input
              type="text"
              name="link"
              value={formData.link}
              onChange={handleEventChange}
              id="link"
              placeholder="Enter short link of video"
              className="form-input-size"
              required
            />
            <span className="input-group-addon">/hqdefault.jpg</span>
          </div>
          <div className="form-input">
            <label id="title-label">Title:</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleEventChange}
              id="title"
              placeholder="Enter title of video"
              className="form-input-size"
              required
            />
          </div>
          <div className="form-input">
            <label id="name-label">Url:</label>
            <input
              type="text"
              id="link"
              name="url"
              value={formData.url}
              onChange={handleEventChange}
              placeholder="Enter url of video"
              className="form-input-size"
              required
            />
          </div>
          <div className="form-input">
            <button className="btn btn-info" type="submit" id="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
      <div>
        <Link to="/view-listing">
          <button className="btn btn-info">View Listing</button>
        </Link>
      </div>
    </div>
  );
}

export default CreateListing;
