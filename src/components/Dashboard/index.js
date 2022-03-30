/* 
  authorName : Sanjuna Konda 
  email : sn493898@dal.ca
*/

import React, { useState, useEffect } from "react";
import {Card, Dropdown, DropdownButton} from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import houselogo from '../../Resources/House 02.jpg';
import "../../css/Dashboard.css";

function Dashboard() {
    const [showHouses, setShowHouses] = useState([]);
    const [housesList, setHousesList] = useState([]);
    const [filtervalue, setFilterValue] = useState("");
    const [filterInput, setFilterInput] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [inputFlag, setInputFlag] = useState(true);
    const [flag, setFlag] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        loadHouses();
    }, []);

    const loadHouses =(e) => {
        axios
      .get("http://localhost:8080/getallhouses")
      .then((res) => {
        if (res.data.success) {
          console.log(res.data.houses);
          setShowHouses(res.data.houses);
          setHousesList(res.data.houses);
        }
      })
      .catch((error) => {
        console.log(error.response);
      });
    }

    const handleSelect=(e)=>{
        setFilterValue(e)
        setInputFlag(false);
      }
    const handleHouseClick = (id) => {
        navigate("/RentalForm");
    }

    const handleFilterInput = (event) => {
        if(event.target.value) {
            setFilterInput(event.target.value);
            setFlag(true);
        }
        else {
            setFlag(false);
        }
    }

    const handleFilterOption = () => {
        if(flag && filtervalue.match("location")) {
            let filteredHouses = housesList.filter(house => (house.city.toLowerCase().includes(filterInput.toLowerCase())));
            setShowHouses(filteredHouses);
        }
        if(flag && filtervalue.match("housetype")) {
            let filteredHouses = housesList.filter(house => (house.category.toLowerCase().includes(filterInput.toLowerCase())));
            setShowHouses(filteredHouses);
        }
        if(flag && filtervalue.match("cost")) {
            let filteredHouses = housesList.filter(house => (house.price.toLowerCase().includes(filterInput.toLowerCase())));
            setShowHouses(filteredHouses);
        }
        if(flag && filtervalue.match("peoplecount")) {
            let filteredHouses = housesList.filter(house => (house.peoplecount.toLowerCase().includes(filterInput.toLowerCase())));
            setShowHouses(filteredHouses);
        }
        if(!flag && filtervalue.match("")) {
            alert("Please enter filter value");
        }
    };

  const token = localStorage.getItem("token");

  if (token == null) {
    navigate("/sign-in");
  }

  return (
    <div className="Dashboard">
    <div className="container-fluid">
        <div className="row">
            <div className="col-sm-12" >
                <div className='filterdropdown'>
                <DropdownButton
                    alignRight
                    title={filtervalue ? "Filter by " + filtervalue : "Filter options"}
                    id="dropdown-menu-align-right"
                    onSelect={handleSelect}>
                    <Dropdown.Item eventKey="location">Filter by location</Dropdown.Item>
                    <Dropdown.Item eventKey="housetype">Filter by type of house</Dropdown.Item>
                    <Dropdown.Item eventKey="cost">Filter by cost</Dropdown.Item>
                    <Dropdown.Item eventKey="peoplecount">Filter by number of people</Dropdown.Item>
                </DropdownButton>
                <input type='text' disabled={inputFlag} placeholder='enter filter value' className='form-group searchinput' onChange={handleFilterInput} />
                <button onClick={handleFilterOption}>Go</button>
                </div>                
            </div>
        </div>
        <div className="row">
            <Card className="totalCard">
                {showHouses ? 
                (<div>{showHouses.map(item => (
                    <div className="row eachCard" onClick={() => handleHouseClick(showHouses._id) } >
                        <div className="col-sm-3"><Card className='image'><img  src = {houselogo} alt = "logo" /></Card></div>
                        <div className="col-sm-4"><Card className='housedetails'>
                            <span>{item.address}</span>
                            <br />
                            <span>CA$ {item.price}/Month</span>
                            <br />
                            <span>House category: {item.category}</span>
                            </Card></div>
                        <div className="col-sm-5">
                            <Card className='renterdetails'>
                                <span>Renter Contact details</span>
                                <br />
                                <span>Mailing address: {item.email}</span>
                                <br />
                                <span>Contact number: {item.phone}</span>
                                </Card>
                        </div>
                    </div>
                ))}  </div>): 
                <Card>
                    <span>No houses found for this filter, kindly choose some other filter</span>
                </Card> }        
            </Card>
        </div>
        </div>
        </div>
  );
}

export default Dashboard;
