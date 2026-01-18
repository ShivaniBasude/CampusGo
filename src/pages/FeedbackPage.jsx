import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { sub } from "framer-motion/client";

export default function FeedbackPage() {
    const navigate = useNavigate();

    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState("");

    const isValidEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const submitFeedback = () => {
        if(!name.trim()) {
            alert("Please enter name");
            return;
        }

        if(!email.trim() || !isValidEmail(email)) {
            alert("Enter valid email");
            return ;
        }

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
            <div className="Validation">
            <input type="text" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="email" placeholder="Your email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
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



            <button
            onClick={ () => {
                const data = localStorage.getItem("feedbacks") || "";
                const blob = new Blob([data], {type: "text/plain"});
                const url = URL.createObjectURL(blob);

                const link = document.createElement("a");
                link.href = url;
                link.download = "feedback.txt";
                link.click();
            }}
            >Download feedback</button>

        </div>
        </>
    );
}