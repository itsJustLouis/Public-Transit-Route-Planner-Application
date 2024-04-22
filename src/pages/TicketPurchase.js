import React from "react";
import styled from "styled-components";
import { useCart } from "../components/cartContext";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2"; //saw this on tiktok and thought about trying it


//Learnt to do this from this video, it seemed easier to style like this more than my first approach of creating classNames and coding in the SCSS or CSS document.
//https://www.youtube.com/watch?v=Njk-3VioS8w
const Container = styled.section`
    background-color: white;
    padding: 1rem;
    border-radius: 5px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    text-align: center;
`;

const TicketItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
`;

const RemoveButton = styled.button`
    background-color: #dc3545;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    padding: 0.3rem 0.7rem;
`;

const CheckoutButton = styled.button`
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

//i used a hooks here from data that was created in cartContext to access these hooks and will display information about the ticket below, i copied this from the way we did it in class, and i used the remove from cart methods using the buttons and the total amounts.
function TicketPurchase() {
    const { cartItems, removeFromCart, totalAmount } = useCart();
    const navigate = useNavigate();

    //CHECKOUT!!!!!
    //stole this from tiktok, looked dope
    const handleCheckout = () => {
        Swal.fire({
            title: 'Purchase Confirmed',
            text: 'Order has been Received',
            icon: 'success',
            confirmButtonText: 'Done'
        })
        //will loop through each item and remove them individually
        cartItems.forEach((ticket) => {
            removeFromCart(ticket.id);
        });
        // after looping through them all, it will take me back to the main page
        navigate("/");
    };

    return (
        //once you do it multiple times and fail, its not really that hard to do it, but this will return the ticket details, and will allow the user to remove stuff from the cart or proceed to checkout
        <main>
            <Container>
                <h1 className="heading">Ticket Purchase</h1>
                <section className="d-flex flex-column align-items-center">
                    {cartItems.map((ticket) => (
                        <TicketItem key={ticket.id}>
                            <div>
                                <h3>{ticket.title}</h3>
                                <p>Price: R{ticket.price * ticket.quantity}</p>
                            </div>
                            <RemoveButton onClick={() => removeFromCart(ticket.id)}>
                                Remove
                            </RemoveButton>
                        </TicketItem>
                    ))}
                    <h4>Total Amount due: R{totalAmount.toFixed(2)}</h4>
                    <CheckoutButton onClick={handleCheckout}>Checkout</CheckoutButton>
                </section>
            </Container>
        </main>
    );
}

export default TicketPurchase;
