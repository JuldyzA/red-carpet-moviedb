import React from 'react';
import "./RatingCircle.css";

function RatingCircle({ rating }) {
    // Convert rating to percentage (0-10 to 0-100)
    const percentage = (rating / 10) * 100;
    
    // Calculate color based on rating
    const getColor = (rating) => {
        if (rating >= 8) return '#21d07a';    // Green for high ratings
        if (rating >= 6) return '#d2d531';    // Yellow for medium ratings
        return '#db2360';                     // Red for low ratings
    };

    const color = getColor(rating);
    
    // Calculate the circle's circumference and stroke-dasharray
    const radius = 20;
    const circumference = 2 * Math.PI * radius;
    const strokeDasharray = `${(percentage * circumference) / 100} ${circumference}`;

    return (
        <div className="rating-circle">
            <svg width="50" height="50" viewBox="0 0 50 50">
                {/* Background circle */}
                <circle
                    cx="25"
                    cy="25"
                    r={radius}
                    stroke="#1d1d1d"
                    strokeWidth="3"
                    fill="rgba(0, 0, 0, 0.65)"
                />
                {/* Progress circle */}
                <circle
                    cx="25"
                    cy="25"
                    r={radius}
                    stroke={color}
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                    transform="rotate(-90 25 25)"
                    strokeDasharray={strokeDasharray}
                    strokeDashoffset="0"
                />
                {/* Rating text */}
                <text
                    x="25"
                    y="25"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill="white"
                    fontSize="14px"
                    fontWeight="bold"
                >
                    {rating.toFixed(1)}
                </text>
            </svg>
        </div>
    );
}

export default RatingCircle;