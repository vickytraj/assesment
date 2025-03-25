/* Basic styles for the page */
body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
}

/* Slider container */
.slider-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    position: relative;
}

/* Image styles */
.slider-image {
    width: 500px;
    height: 300px;
    object-fit: cover;
    border-radius: 10px;
}

/* Button styles */
.slider-button {
    background-color: #333;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s ease;
}

.slider-button:hover {
    background-color: #555;
}

/* Position the previous and next buttons */
#prevButton {
    position: absolute;
    left: 0;
}

#nextButton {
    position: absolute;
    right: 0;
}
