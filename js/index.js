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
  "main-content": {
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


//Nav Items

//Nav 1
let services = document.getElementsByTagName('a')[0];
services.innerText = siteContent['nav']['nav-item-1']
services.style.color ='green';

//Nav 2
let product = document.getElementsByTagName('a')[1];
product.innerText = siteContent['nav']['nav-item-2']
product.style.color ='green';

//Nav 3
let vision = document.getElementsByTagName('a')[2];
vision.innerText = siteContent['nav']['nav-item-3']
vision.style.color ='green';

//Nav 4
let features = document.getElementsByTagName('a')[3];
features.innerText = siteContent['nav']['nav-item-4']
features.style.color ='green';

//Nav 5
let about = document.getElementsByTagName('a')[4];
about.innerText = siteContent['nav']['nav-item-5']
about.style.color ='green';

//Nav 6
let contact = document.getElementsByTagName('a')[5];
contact.innerText = siteContent['nav']['nav-item-6'];
contact.style.color ='green';


//CTA Items

//H1

//Button

//Image



//Features

//H4

//P



//About

//H4

//P



//Middle Image



//Service

//H4

//P



//Product

//H4

//P



//Vision

//H4

//P



//Contact



//Footer



//New Nav Items

//Login


//Sign Up
