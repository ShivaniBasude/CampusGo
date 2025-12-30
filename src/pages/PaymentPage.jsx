// pages/PaymentPage.jsx
import {useState} from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";



export default function PaymentPage(){
  const navigate = useNavigate();

  const [openMethod ,setOpenMethod] = useState(null);
  const [processing , setProcessing] = useState(false);

  const [upiId , setUpiId] = useState("");
  const [pin , setPin] = useState("");
  const [card , setCard] = useState("");
  const [expiry , setExpiry] = useState("");
  const [cvv , setCvv] = useState("");

  const toggleMethod = (method) => {
    setOpenMethod(openMethod === method ? null : method);
  };
  const handlePayment = () => {

   if(openMethod === "UPI" && (!upiId || pin.length !==4)){
    alert("Enter valid UPI details");
    return;
   }

   if(openMethod === "Credit/Debit Card" && (!card || !expiry || cvv.length !==3)){
    alert("Enter valid Card details");
    return;
   }

    setProcessing (true);

    setTimeout( () => {
      alert("Payment Successful!");

      localStorage.removeItem("cart");

      navigate("/feedback");
    
    }, 2000)
  };

  return(
    <>
   
    <div className="payment-container">
      <h2>Select Payment Method</h2>

      <div className="method-card" onClick={() => toggleMethod("UPI")}>
        <h3>UPI Payment</h3>

        {openMethod === "UPI" && (
          <div className="dropdown"
          onClick={(e) => e.stopPropagation()}>
             <input placeholder="UPI ID" value={upiId}
             onChange={(e) => setUpiId(e.target.value)}/>

             <input placeholder="PIN" type="password" value={pin}
             onChange={(e) => setPin(e.target.value)}/>

           <button onClick={handlePayment}>Pay</button>

          </div>
        )}
      </div>

      

      <div className="method-card" onClick={() => setOpenMethod(openMethod === "Credit/Debit Card" ? null : "Credit/Debit Card")}>
        <h3>Credit/Debit Card</h3>

        {openMethod === "Credit/Debit Card" && (
          <div className="dropdown"
          onClick={(e) => e.stopPropagation()}>
            <input placeholder="Card Number" value={card}
            onChange={(e) => setCard(e.target.value)}/>

            <input placeholder="Expiry Date(MM/YY)" value={expiry}
            onChange={(e) => setExpiry(e.target.value)}/>

            <input placeholder="CVV" value={cvv}
            onChange={(e) => setCvv(e.target.value)}/>

          <button onClick={handlePayment}>Pay</button>
          </div>
        )}
      </div>

      <div className="method-card" onClick={() => setOpenMethod(openMethod === "Cash on Delivery" ? null : "Cash on Delivery")}>
        <h3>Cash on Delivery</h3>

        {openMethod === "Cash on Delivery" && (
          <div className="dropdown"
          onClick={(e) => e.stopPropagation()}>
            <p>Pay when the order is Delivered.</p>
            <button onClick={handlePayment}>Confirm Order</button>
          </div>
        )}
    
      </div>


      {processing && (
        <div className="processing">
          <div className="loader"></div>
          <p>Processing Payment...</p>
        </div>
      )}
     </div>
    </>
    
  );
}
