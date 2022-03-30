import React, { useState } from "react";
import HouseDataService from "../../services/HouseService.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Button } from "react-bootstrap";
import { PickerOverlay } from 'filestack-react';
import { useNavigate } from "react-router-dom";

var options = require("../../config/constants.js");


const apikey = 'A39idLbeQdidVjG0ZQjZqz';

const AddHouse = () => {
    const initialHouseState = {
        id: null,
        title: "",
        description: "",
        street: "",
        city: "",
        province: "",
        category: "house",
        people: "",
        rooms: "1",
        bathrooms: "",
        price: "",
        email: "",
        phone: "",
        selectedFile: "",
        isFilePicked: false,
    };
    const navigate = useNavigate();
    const [house, setHouse] = useState(initialHouseState);
    const [selectedFile, setSelectedFile] = useState();
    const [isPickerOverlayVisible, setIsPickerOverlayVisible] = useState(false);
    const [errors, SetErrors] = useState([]);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setHouse({ ...house, [name]: value });
    };


    const handleValidation = () => {
        let formIsValid = true;
        //First Name
        if (!house.title) {
            formIsValid = false;
            errors["title"] = "First name cannot be empty.";
        }
        SetErrors(errors);
        return formIsValid;
    }


    const handleSubmit = (event) => {
        if (handleValidation()) {
            

            var data = {
                title: house.title,
                description: house.description,
                selectedFile: selectedFile,
                street: house.street,
                city: house.city,
                province: house.province,
                category: house.category,
                people: house.people,
                rooms: house.rooms,
                bathrooms: house.bathrooms,
                price: house.price,
                email: house.email,
                phone: house.phone
            };
            HouseDataService.create(data)
                .then(response => {
                    setHouse({
                        id: response.data.id,
                        title: response.data.title,
                        description: response.data.description,
                        selectedFile: response.data.selectedFile,
                        people: response.data.selectedFile,
                        street: response.data.street,
                        city: response.data.city,
                        province: response.data.province,
                        category: response.data.category,
                        rooms: response.data.rooms,
                        bathrooms: response.data.bathrooms,
                        price: response.data.price,
                        email: response.data.email,
                        phone: response.data.phone,
                    });
                    navigate("/houses")
                })
                .catch(e => {
                    console.log(e);
                });
        }
        else {
            alert("errors");
            console.log(errors);

        }
    };

    return (
        <div class="container mt-4">
            <Row>
                <h2 style={{ fontFamily: "apple-system" }}><strong>Add House</strong></h2>
            </Row>
            <div className="form ml-4 mt-3 mb-4 mr-4 p-3 border border-primary">

                <div class="row">

                    <div class="col-lg-6">
                        <div className="form-group m-3 p-1">
                            <label className="mb-1" htmlFor="title">Title</label>
                            <input
                                type="text"
                                className="form-control"
                                id="title"
                                required
                                value={house.title}
                                onChange={handleInputChange}
                                name="title"
                            />

                            <span style={{ color: "red" }}>{errors["title"]}</span>
                        </div>
                        {console.log(errors)}
                        <div className="form-group m-3 p-1">
                            <label className="mb-1" htmlFor="description">Description</label>
                            <input
                                type="text"
                                className="form-control"
                                id="description"
                                required
                                value={house.description}
                                onChange={handleInputChange}
                                name="description"
                            />
                        </div>


                        <div className="form-group m-3 p-1">
                            <label className="mb-1" htmlFor="image-file">Upload Image</label>
                            <div>
                                <button className="btn-primary"
                                    onClick={() =>
                                        isPickerOverlayVisible
                                            ? setIsPickerOverlayVisible(false)
                                            : setIsPickerOverlayVisible(true)
                                    }
                                >
                                    Choose File
                                </button>
                                {isPickerOverlayVisible && <PickerOverlay apikey='A39idLbeQdidVjG0ZQjZqz' onSuccess={(res) => "first" + console.log(res)}
                                    onUploadDone={(res) => {
                                        console.log((res.filesUploaded)[0].url);
                                        var image_url = (res.filesUploaded)[0].url;
                                        setSelectedFile(image_url);
                                        setIsPickerOverlayVisible(false);
                                    }
                                    } />}

                            </div>
                        </div>
                        <div className="form-group m-3 p-1">
                            <label className="mb-1" htmlFor="street">Street</label>
                            <input
                                type="text"
                                className="form-control"
                                id="street"
                                required
                                value={house.street}
                                onChange={handleInputChange}
                                name="street"
                            />
                        </div>

                        <div className="form-group m-3 p-1">
                            <label className="mb-1" htmlFor="city">City</label>
                            <input
                                type="text"
                                className="form-control"
                                id="city"
                                required
                                value={house.city}
                                onChange={handleInputChange}
                                name="city"
                            />
                        </div>

                        <div className="form-group m-3 p-1">
                            <label className="mb-1" htmlFor="province">Province</label>
                            <input
                                type="text"
                                className="form-control"
                                id="province"
                                required
                                value={house.province}
                                onChange={handleInputChange}
                                name="province"
                            />
                        </div>

                    </div>
                    <div class="col-lg-6">

                        <div className="form-group m-3 p-1">
                            <label className="mb-1" htmlFor="category">Category</label>
                            {console.log(house)}
                            <select name="category" id="category" value={house.category} className="form-control" onChange={handleInputChange}>
                                {options.house_categories_options.map((option) => (
                                    <option value={option.value}>{option.label}</option>
                                ))}
                            </select>
                        </div>


                        <div className="form-group m-3 p-1">
                            <label className="mb-1">Rooms</label>
                            <select name="rooms" value={house.rooms} className="form-control" onChange={handleInputChange}>
                                {options.rooms.map((option) => (
                                    <option value={option.value}>{option.label}</option>
                                ))}
                            </select>

                        </div>

                        <div className="form-group m-3 p-1">
                            <label className="mb-1" htmlFor="people">Number of People</label>
                            <input
                                type="number"
                                className="form-control"
                                id="people"
                                required
                                value={house.people}
                                onChange={handleInputChange}
                                name="people"
                            />
                        </div>

                        <div className="form-group m-3 p-1">
                            <label className="mb-1" htmlFor="bathrooms">Bathrooms</label>
                            <input
                                type="number"
                                className="form-control"
                                id="bathrooms"
                                required
                                value={house.bathrooms}
                                onChange={handleInputChange}
                                name="bathrooms"
                            />
                        </div>

                        <div className="form-group m-3 p-1">
                            <label className="mb-1" htmlFor="price">Price</label>
                            <input
                                type="number"
                                className="form-control"
                                id="price"
                                required
                                value={house.price}
                                onChange={handleInputChange}
                                name="price"
                            />
                        </div>

                        <div className="form-group m-3 p-1">
                            <label className="mb-1" htmlFor="email">Email</label>
                            <input
                                type="text"
                                className="form-control"
                                id="email"
                                required
                                value={house.email}
                                onChange={handleInputChange}
                                name="email"
                            />
                        </div>

                        <div className="form-group m-3 p-1">
                            <label className="mb-1" htmlFor="phone">Phone</label>
                            <input
                                type="phone"
                                className="form-control"
                                id="phone"
                                required
                                value={house.phone}
                                onChange={handleInputChange}
                                name="phone"
                            />
                        </div>

                        <Button className="float-end m-3 px-3" onClick={handleSubmit} variant="success" >Submit</Button>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default AddHouse;