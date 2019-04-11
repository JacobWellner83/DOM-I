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
//h1
let ctaH1 = document.getElementsByTagName('h1')[0];
ctagH1.innerText = siteContent['cta']['h1'];

//Button
let ctaBtn = document.getElementsByTagName('button')[0];
ctaBtn.innerText = siteContent['cta']['button'];

//Image
let ctaImg = document.getElementsByTagName('img')[1];
ctaImg.setAttribute('src', siteContent["cta"]["img-src"])


//Features
//h4
let featH4 = document.getElementsByTagName('h4')[0];
featH4.innerText = siteContent['main-content']['features-h4'];

//P
let featP = document.getElementsByTagName('p')[0];
featP.innerText = siteContent['main-content']['features-content'];


//About
//h4
let aboutH4 = document.getElementsByTagName('h4')[1];
aboutH4.innerText = siteContent['main-content']['features-h4'];

//P
let aboutP = document.getElementsByTagName('p')[1];
aboutP.innerText = siteContent['main-content']['about-content'];


//Middle Image
let middleImg = document.getElementsByTagName('img')[2];
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])


//Service
//h4
let servicesH4 = document.getElementsByTagName('h4')[2];
servicesH4.innerText = siteContent['main-content']['services-h4'];

//P
let servicesP = document.getElementsByTagName('p')[2];
servicesP.innerText = siteContent['main-content']['services-content'];


//Product
//h4
let productH4 = document.getElementsByTagName('h4')[3];
productH4.innerText = siteContent['main-content']['product-h4'];

//P
let productP = document.getElementsByTagName('p')[3];
productP.innerText = siteContent['main-content']['product-content'];


//Vision
//h4
let visionH4 = document.getElementsByTagName('h4')[4];
visionH4.innerText = siteContent['main-content']['vision-h4'];

//P
let visionP = document.getElementsByTagName('p')[4];
visionP.innerText = siteContent['main-content']['vision-content'];


//Contact
let contactH4 = document.getElementsByTagName('h4')[5];
contactH4.innerText = siteContent['contact']['contact-h4'];

let address = document.getElementsByTagName('p')[5];
address.innerText = siteContent['contact']['address'];

let phone = document.getElementsByTagName('p')[6];
phone.innerText = siteContent['contact']['phone'];

let email = document.getElementsByTagName('p')[7];
email.innerText = siteContent['contact']['email'];


//Footer
let copyright = document.getElementsByTagName('p')[8];
copyright.innerText = siteContent['footer']['copyright'];


//New Nav Items
let nav = document.querySelector('nav')

//Login
let login = document.createElement('a');
login.innerText = "Login";
login.style.color = 'green';
login.setAttribute('href', '#')
nav.appendChild(login);

//Sign Up
let signUp = document.createElement('a');
signUp.innerText = "Login";
signUp.style.color = 'green';
signUp.setAttribute('href', '#')
nav.prependChild(signUp);