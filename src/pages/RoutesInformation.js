import React from "react";
import styled from "styled-components";
import { locations } from "../json/routesdata";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../components/cartContext";


//Learnt to do this from this video, it seemed easier to style like this more than my first approach of creating classNames and coding in the SCSS or CSS document.
//https://www.youtube.com/watch?v=Njk-3VioS8w
const Container = styled.section`
    background-color: white;
    padding: 1rem;
    border-radius: 5px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    text-align: center;
`;
const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 60%;
`;

const BackButton = styled.button`
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #0056b3;
    }
`;

const PurchaseButton = styled.button`
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #218838;
    }
`;

function RoutesInformation() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addToCart } = useCart();

    const routeInfo = locations.find((route) => route.id === id);

    if (!routeInfo) {
        return <div>Route not found</div>;
    }
    //this will go into the button to force the item to be added into the cart when you click on the button, method was established in cartContext
    const handlePurchase = () => {
        addToCart({
            id: routeInfo.id,
            title: routeInfo.title,
            price: routeInfo.price,
            quantity: 1,
        });
        navigate("/TicketPurchase");
    };
    //this method will take you back to the main page
    const handleBack = () => {
        navigate("/");
    };

    return (
        //this will return the information according to the information pasted below
        <main>
            <Container>
                <h1 className="heading">Route Information</h1>
                <section className="d-flex flex-column align-items-center">
                    <h2>{routeInfo.title}</h2>
                    <h3>{routeInfo.id}</h3>
                    <p>Duration: {routeInfo.duration}</p>
                    <p>Stops: {routeInfo.stops}</p>
                    <p>Price: R{routeInfo.price}</p>
                    <p>Description: {routeInfo.description}</p>
                    <ButtonContainer>
                        <BackButton onClick={handleBack}>Back</BackButton>
                        <PurchaseButton onClick={handlePurchase}>Purchase Ticket</PurchaseButton>
                    </ButtonContainer>
                </section>
            </Container>
        </main>
    );
}

export default RoutesInformation;

