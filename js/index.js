const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "top-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
 logo.setAttribute('src', siteContent["nav"]["img-src"])

// //Navigation items
let navItems = document.querySelectorAll('a');

navItems[0].textContent = siteContent["nav"]["nav-item-1"];
navItems[1].textContent = siteContent["nav"]["nav-item-2"];
navItems[2].textContent = siteContent["nav"]["nav-item-3"];
navItems[3].textContent = siteContent["nav"]["nav-item-4"];
navItems[4].textContent = siteContent["nav"]["nav-item-5"];
navItems[5].textContent = siteContent["nav"]["nav-item-6"];


//cta items
let cta_h1=document.querySelector('.cta-text>h1');
cta_h1.textContent = siteContent["cta"]["h1"];

let cta_button=document.querySelector('.cta-text>button');
cta_button.textContent=siteContent["cta"]["button"];

let cta_img=document.querySelector('#cta-img');
cta_img.src=siteContent["cta"]["img-src"];


//Main Content top
let features_h4 = document.querySelector(".top-content>div:first-child>h4");
features_h4.textContent = siteContent["top-content"]["features-h4"];

let features_content = document.querySelector(".top-content>div:first-child>p");
features_content.textContent = siteContent["top-content"]["features-content"];

let about_h4 = document.querySelector(".top-content>div:nth-child(2)>h4");
about_h4.textContent = siteContent["top-content"]["about-h4"];

let about_content = document.querySelector(".top-content>div:nth-child(2)>p");
about_content.textContent = siteContent["top-content"]["about-content"];

let middle_img = document.querySelector("#middle-img");
middle_img.src = siteContent["top-content"]["middle-img-src"];

//Main Content bottom
let services_h4 = document.querySelector(".bottom-content>div:first-child>h4");
services_h4.textContent = siteContent["top-content"]["services-h4"];

let services_content = document.querySelector(".bottom-content>div:first-child>p");
services_content.textContent = siteContent["top-content"]["services-content"];

let product_h4 = document.querySelector(".bottom-content>div:nth-child(2)>h4");
product_h4.textContent = siteContent["top-content"]["product-h4"];

let product_content = document.querySelector(".bottom-content>div:nth-child(2)>p");
product_content.textContent = siteContent["top-content"]["product-content"];

let vision_h4 = document.querySelector(".bottom-content>div:nth-child(3)>h4");
vision_h4.textContent = siteContent["top-content"]["vision-h4"];

let vision_content = document.querySelector(".bottom-content>div:nth-child(3)>p");
vision_content.textContent = siteContent["top-content"]["vision-content"];


//Contacts
let contact_h4 = document.querySelector(".contact>h4");
contact_h4.textContent = siteContent["contact"]["contact-h4"];

let address = document.querySelector(".contact>p:nth-child(2)");
address.textContent = siteContent["contact"]["address"];

let phone = document.querySelector(".contact>p:nth-child(3)");
phone.textContent = siteContent["contact"]["phone"];

let email = document.querySelector(".contact>p:nth-child(4)");
email.textContent = siteContent["contact"]["email"];

//Footer
let copyright = document.querySelector("footer>p");
copyright.textContent = siteContent['footer']['copyright'];


//Adding or changing Content

//Changing nav font color to green
navItems.forEach(element => element.style.color = 'green');

//Adding nav element in the front
nav = document.querySelector('nav');

addedChildFirst = document.createElement('a');
addedChildFirst.textContent = "addedChildFirst";
addedChildFirst.style.color = 'green';
nav.prepend(addedChildFirst);

//Adding nav element in the back
addedChildLast = document.createElement('a');
addedChildLast.textContent = "addedChildLast";
addedChildLast.style.color = 'green';
nav.appendChild(addedChildLast);

