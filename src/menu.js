export default function loadMenu() {
    const contentDiv = document.querySelector('.content');
    contentDiv.innerHTML = '';
    const beverageTitle = document.createElement('h1');
    const pastryTitle = document.createElement('h1');
    const savoryTitle = document.createElement('h1');
    const beverageList = document.createElement('ul');
    const pastryList = document.createElement('ul');
    const savoryList = document.createElement('ul');

    beverageTitle.textContent = 'Beverages';
    savoryTitle.textContent = 'Savory';
    pastryTitle.textContent = 'Pastrys';

    contentDiv.append(beverageTitle, pastryTitle, savoryTitle);
}