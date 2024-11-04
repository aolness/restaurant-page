export default function loadAbout() {
    const contentDiv = document.querySelector('.content');
    contentDiv.innerHTML = '';
    const title = document.createElement('h1');
    title.textContent = 'About';



    
    contentDiv.append(title);
}