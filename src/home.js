import bakeryImage from "../assets/bakery.jpg";

export default function loadHome() {
    const contentDiv = document.querySelector(".content");
    contentDiv.innerHTML = '';
    const header = document.createElement("h1");
    const image = document.createElement("img");
    const text = document.createElement("p");
    header.textContent = "Andy's Bakery";
    image.src = bakeryImage;
    text.textContent = "We sell baked goods! We are very wonderful!";
    contentDiv.append(header, image, text);
}