import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { sub } from "framer-motion/client";

export default function FeedbackPage() {
    const navigate = useNavigate();

    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState("");

    const submitFeedback = () => {
        if (rating === 0) {
            alert("Please give a rating");
            return ;
        }

        const feedback = {
            rating, comment,
            date: new Date().toLocaleString()
        };

        const existing = 
        JSON.parse(localStorage.getItem("feedbacks")) || [];
        localStorage.setItem("feedbacks", JSON.stringify([...existing, feedback]));

        alert("Thank you for your feedback 🌟");
        navigate("/");
    };

    return (
        <>
        

        <div className="page-container">
            <h2>Rate Your Experience</h2>

            <div className="rating">
                {[1, 2, 3, 4, 5].map((star) => (
                    <span 
                    key={star}
                    className={star <= rating ? "star active" : "star"}
                    onClick={ () => setRating(star)}
                    >
                        ★
                    </span>
                ))}
            </div>

            <div className="comment">
            <textarea
            placeholder="Write your feedback..."
            value={comment}
            onChange={ (e) => setComment(e.target.value)} />
            <button onClick = {submitFeedback}> Submit Feedback </button>
            </div>
        </div>
        </>
    );
}