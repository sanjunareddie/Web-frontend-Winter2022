import React, { useState, useEffect } from "react";
import HouseDataService from "../../services/HouseService.js";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Container, Row, Button } from "react-bootstrap";


var options = require("../../config/constants.js");

const EditHouse = props => {
    console.log("inside");

    const params = useParams();
    const navigate = useNavigate();

    console.log("inside tutorial");


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
    const [currentHouse, setCurrentHouse] = useState(initialHouseState);
    const [message, setMessage] = useState("");
    const getHouse = async id => {
        console.log("inside get");
        var house = await HouseDataService.get(id)
        return house;
    };


    useEffect(() => {

        getHouse(params.id).then(response => {
            setCurrentHouse({
                id: response.data.id,
                title: response.data.title,
                description: response.data.description,
                selectedFile: response.data.selectedFile,
                street: response.data.address.street,
                city: response.data.address.city,
                people: response.data.address.people,
                province: response.data.address.province,
                category: response.data.category,
                rooms: response.data.rooms,
                bathrooms: response.data.bathrooms,
                price: response.data.price,
                email: response.data.email,
                phone: response.data.phone,
            });
        });
    }, [params.id]);


    const handleInputChange = event => {
        const { name, value } = event.target;
        setCurrentHouse({ ...currentHouse, [name]: value });
    };

    const updateHouse = () => {
        HouseDataService.update(params.id, currentHouse)
            .then(response => {
                setMessage("The tutorial was updated successfully!");
                navigate("/houses")
            })
            .catch(e => {
                console.log(e);
            });
    };

    return (
        <Container className="mt-4">

            <div className="edit-form">
                <Row>
                    <h2 style={{ fontFamily: "apple-system" }}><strong>Edit House</strong></h2>
                </Row>
                <div className="edit-form ml-4 mt-3 mb-4 mr-4 p-3 border border-primary">
                    <Row>
                        <div class="col-lg-6">
                            <div className="form-group m-3 p-1">
                                <label className="mb-1" htmlFor="title">Title</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="title"
                                    required
                                    value={currentHouse.title}
                                    onChange={handleInputChange}
                                    name="title"
                                />
                            </div>
                            <div className="form-group m-3 p-1">
                                <label className="mb-1" htmlFor="description">Description</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="description"
                                    required
                                    value={currentHouse.description}
                                    onChange={handleInputChange}
                                    name="description"
                                />
                            </div>

                            <div className="form-group m-3 p-1">
                                <label className="mb-1" htmlFor="image">Image</label>
                                <div>
                                    <img style={{ width: "50%" }} src={currentHouse.selectedFile}></img>
                                </div>
                            </div>

                            <div className="form-group m-3 p-1">
                                <label className="mb-1" htmlFor="street">Street</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="street"
                                    required
                                    value={currentHouse.street}
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
                                    value={currentHouse.city}
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
                                    value={currentHouse.province}
                                    onChange={handleInputChange}
                                    name="province"
                                />
                            </div>

                        </div>
                        <div class="col-lg-6">
                            <div className="form-group m-3 p-1">
                                <label className="mb-1" htmlFor="category">Category</label>
                                <select name="category" value={currentHouse.category} className="form-control" onChange={handleInputChange}>
                                    {options.house_categories_options.map((option) => (
                                        <option value={option.value}>{option.label}</option>
                                    ))}
                                </select>


                            </div>

                            <div className="form-group m-3 p-1">
                                <label className="mb-1" htmlFor="rooms">Rooms</label>
                                <select name="rooms" value={currentHouse.rooms} className="form-control" onChange={handleInputChange}>
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
                                    value={currentHouse.people}
                                    onChange={handleInputChange}
                                    name="people"
                                />
                            </div>

                            <div className="form-group m-3 p-1">
                                <label className="mb-1" htmlFor="bathrooms">Bathrooms</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="bathrooms"
                                    required
                                    value={currentHouse.bathrooms}
                                    onChange={handleInputChange}
                                    name="bathrooms"
                                />
                            </div>

                            <div className="form-group m-3 p-1">
                                <label className="mb-1" htmlFor="price">Price</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="price"
                                    required
                                    value={currentHouse.price}
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
                                    value={currentHouse.email}
                                    onChange={handleInputChange}
                                    name="email"
                                />
                            </div>

                            <div className="form-group m-3 p-1">
                                <label className="mb-1" htmlFor="phone">Phone</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="phone"
                                    required
                                    value={currentHouse.phone}
                                    onChange={handleInputChange}
                                    name="phone"
                                />
                            </div>

                            <Button className="float-end mt-2" variant="success" onClick={updateHouse}>Update</Button>
                        </div>
                    </Row>

                </div>

            </div>
        </Container>
    );
};
export default EditHouse;