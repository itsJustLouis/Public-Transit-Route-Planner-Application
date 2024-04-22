import React, { useState } from "react";
import styled from "styled-components";
import { Form } from "react-bootstrap";
import { locations } from "../json/routesdata";
import { useNavigate } from "react-router-dom";

//Learnt to do this from this video, it seemed easier to style like this more than my first approach of creating classNames and coding in the SCSS or CSS document.
//https://www.youtube.com/watch?v=Njk-3VioS8w
const Container = styled.section`
    background-color: white;
    padding: 1rem;
    border-radius: 5px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    text-align: center;
`;

function AvailableRoutes({ searchState, setSearchState }) {
    const [selectedRouteInfo, setSelectedRouteInfo] = useState(null); // stores the selected route's information to be used
    const navigate = useNavigate(); // useNavigate, uses it to navigate through the hooks, and adding the route name at the end of url

    const handleRouteSelect = (e) => {
        const selectedRouteId = e.target.value;
        setSearchState((prevState) => ({
            ...prevState,
            from: selectedRouteId,
        }));

        // this one will return the selected route's information
        const routeInfo = locations.find((route) => route.id === selectedRouteId);
        setSelectedRouteInfo(routeInfo);

        // will use Navigate to add the name of the route's id at the end of the url
        navigate(`/RoutesInformation/${selectedRouteId}`);
    };
    //https://www.youtube.com/watch?v=Njk-3VioS8w
    return (
        <main>
            <Container>
                <h1 className="heading">Lou's Bus Bookings</h1>
                <h2>Available Routes Below!</h2>
                <section className="d-flex flex-column align-items-center">

                    <Form.Select
                        className="mb-3 width-300"
                        value={searchState.from}
                        onChange={handleRouteSelect}
                    >
                        {locations.map((data) => (
                            <option key={data.id} value={data.id}>
                                {data.id}
                            </option>
                        ))}
                    </Form.Select>

                    {/* at first i couldnt display the information on another page, the plan was to display it below on the same page, however i finally figured it out from watching multiple videos and using the code from class*/}
                    {selectedRouteInfo && (
                        <section>
                            <h3>{selectedRouteInfo.title}</h3>
                            <p>Duration: {selectedRouteInfo.duration}</p>
                            <p>Stops: {selectedRouteInfo.stops}</p>
                            <p>Price: R{selectedRouteInfo.price}</p>
                            <p>Description: {selectedRouteInfo.description}</p>
                        </section>
                    )}
                </section>
            </Container>
        </main>
    );
}

export default AvailableRoutes;

