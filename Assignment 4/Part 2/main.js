const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');


const imageArray = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

const altText = ['A beautiful landscape', 'A beautiful landscape', 'A beautiful landscape', 'A beautiful landscape', 'A beautiful landscape'];


for (let i = 0; i < imageArray.length; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', 'images/' + imageArray[i]);
    newImage.setAttribute('alt', altText[i]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', (e) => {
        displayedImage.src = e.target.src;
    });
}

btn.addEventListener('click', () => {
    console.log("Button clicked"); 
    if (overlay.classList.contains('dark')) {
        console.log("Overlay class contains 'dark'"); 
        overlay.classList.remove('dark');
        btn.textContent = 'Darken';
    } else {
        console.log("Overlay class does not contain 'dark'"); 
        overlay.classList.add('dark');
        btn.textContent = 'Lighten';
    }
});
