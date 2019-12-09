// Your code goes here

//First event listener
const funBus = document.querySelector('#funBus');
funBus.addEventListener('mouseover', () => {
    funBus.style.transform = "scale(1.02)";
    funBus.style.transition = "all 0.3s";
});

funBus.addEventListener('mouseleave', () => {
    funBus.style.transform = "scale(1.0)";
    funBus.style.transition = "all 0.3s";
});

//Second event listener
const navItem = document.querySelectorAll('.nav-link');

navItem.forEach((item) => {
    item.addEventListener('mouseover', (event) => {
        item.style.color = ('#ffdb58');
        item.style.transition = ('all 0.3s');
        event.stopPropagation();
    }); 
    
    item.addEventListener('mouseleave', () => {
        item.style.color = ('black');
        item.style.transition = ('all 0.3s');
    });

    item.addEventListener('click', (event) => {
        event.preventDefault();
    });
});

//Third event listener
funBus.addEventListener('dblclick', (event) => {
    funBus.style.paddingTop = "100px";
    funBus.style.paddingBottom = "100px";
    event.stopPropagation();
});

//Fourth event listener
const navBar = document.querySelector('.main-navigation');
const logoHeading = document.querySelector('.logo-heading');
navBar.addEventListener('mouseover', (event) => {
    navBar.style.backgroundColor = "slategray";
    navBar.style.transition = "all 0.5s"
    navItem.style.color = "white";
    logoHeading.style.color = "white";
});

navBar.addEventListener('mouseleave', (event) => {
    navBar.style.backgroundColor = "white";
    navBar.style.transition = "all 0.5s"
    navItem.style.color = "white";
    logoHeading.style.color = "white";
});
//Fifth event listener
const button = document.querySelectorAll('.btn');

button.forEach((item) => {
    item.addEventListener('mouseover', () => {
        item.style.padding = "25px";
        item.style.transition = "all 0.4s"
    });

    item.addEventListener('mouseleave', () => {
        item.style.padding = "20px";
        item.style.transition = "all 0.4s"
    });
});

//Sixth event listener
const boat = document.querySelector('#boat');
const adventureImg = document.querySelector('#adventure');
boat.addEventListener('click', () => {
    alert("Why did you click the boat?");
});

//Seventh event listener
const scrollContent = document.querySelector('.inverse-content');
scrollContent.addEventListener('mouseover', () => {
    adventureImg.style.width = "350px";
    adventureImg.style.transition = "all 0.5s";
});

//Eighth event listener
const footer = document.querySelector('footer');

footer.addEventListener('click', () => {
    footer.style.backgroundColor = "black";
    footer.style.transition = "all 0.6s";
});

//Ninth event listener
const footerText = document.querySelector('#footer-text');
footer.addEventListener('click', () => {
    footerText.style.paddingRight = "85%";
    footerText.style.color = "white";
    footerText.style.transition = "all 0.6s";
});

//Tenth event listener
button.forEach((item) => {
    item.addEventListener('click', () => {
        item.style.backgroundColor = "black";
        item.style.transition = "all 0.4s";
    });
});