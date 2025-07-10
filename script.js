import {personalInfo, testimonials, services, works} from './constants.js';

const themeToggle = document.querySelector("#theme-toggle")
const themeToggleIcon = document.querySelector(".moon-icon")

let theme = "lightMode"

function themeChanger(mode) {
    if (mode == "lightMode") {
        document.body.className = "light-mode"
        themeToggleIcon.className = "fas fa-moon moon-icon"
    } else {
        document.body.className = "dark-mode"
        themeToggleIcon.className = "fa-solid fa-sun moon-icon"
    }
}

themeToggle.addEventListener("change", (ev) => {
    if (ev.target.checked) {
        theme = "darkMode"
    } else {
        theme = "lightMode"
    }

    themeChanger(theme)
})

const header = document.querySelector("header")

window.addEventListener("scroll", (ev) => {
    if (window.innerWidth > 769) {
        if (window.pageYOffset >= 800) {
            header.style.display = "flex"
        } else {
            header.style.display = "none"
        }
    }
});

const technologies = document.querySelector("#about-me-section .technologies")

personalInfo.skills.forEach((technology) => {
    let tech = document.createElement("i")
    tech.className = technology.icon;

    technologies.append(tech)
})


const servicesContainer = document.querySelector(".services-grid");

// Create and append each service card
services.forEach(service => {
    // Create the card
    const serviceCard = document.createElement("div");
    serviceCard.className = "service-card";

    // Create and populate the header with a star icon
    const serviceCardHeader = document.createElement("div");
    serviceCardHeader.className = "card-header";
    serviceCardHeader.textContent = service.serviceName;

    const headerStar = document.createElement("i");
    headerStar.className = "fas fa-star";
    serviceCardHeader.prepend(headerStar);

    // Create and populate the description
    const serviceCardDescription = document.createElement("p");
    serviceCardDescription.textContent = service.serviceDescription;

    // Create and populate the tags
    const serviceCardTags = document.createElement("div");
    serviceCardTags.className = "card-tags";

    service.tags.forEach(tag => {
        const tagSpan = document.createElement("span");
        tagSpan.className = "tag";
        tagSpan.textContent = tag;
        serviceCardTags.appendChild(tagSpan);
    });

    // Append all parts to the card
    serviceCard.append(serviceCardHeader, serviceCardDescription, serviceCardTags);

    // Append the card to the container
    servicesContainer.appendChild(serviceCard);
});

const testimonialsContainer = document.querySelector(".testimonials-grid");

// Loop over each testimonial in the testimonials array
testimonials.forEach(testimonial => {
    // Create the main testimonial card div
    const testimonialCard = document.createElement("div");
    testimonialCard.classList.add("testimonial-card");

    // Optional featured icon at the top (star icon)
    const testimonialIcon = document.createElement("i");
    testimonialIcon.className = "fas fa-star";

    // Create the container for client information
    const clientInfo = document.createElement("div");
    clientInfo.classList.add("client-info");

    // Create the client's image element
    const clientImage = document.createElement("img");
    clientImage.src = testimonial.clientImage; // Set image source
    clientImage.alt = `Image of ${testimonial.clientName}`; 

    // Container for client name and title (stacked)
    const nameTitleContainer = document.createElement("div");

    // Create and set the client's name
    const clientName = document.createElement("span");
    clientName.textContent = testimonial.clientName;

    // Create and set the client's title (e.g., "CEO at Company")
    const clientTitle = document.createElement("small");
    clientTitle.textContent = testimonial.clientTitle;

    // Append the name and title inside the name-title container
    nameTitleContainer.append(clientName, clientTitle);

    // Append the client image and the name-title container inside the client info container
    clientInfo.append(clientImage, nameTitleContainer);

    // Create the testimonial content paragraph
    const testimonialContent = document.createElement("p");
    testimonialContent.textContent = testimonial.content;

    // Create the rating container for stars
    const rating = document.createElement("div");
    rating.classList.add("stars");

    // Create star icons based on the testimonial rating
    for (let i = 0; i < testimonial.rating; i++) {
        const starIcon = document.createElement("i");
        starIcon.className = "fas fa-star";
        rating.appendChild(starIcon);
    };

    for (let i = 0; i < 5 - testimonial.rating; i++) {
        const starIcon = document.createElement("i");
        starIcon.className = "fa-regular fa-star";
        rating.appendChild(starIcon);
    };

    // Append all elements to the testimonial card in order
    testimonialCard.append(
        testimonialIcon,
        clientInfo,
        testimonialContent,
        rating
    );

    testimonialsContainer.append(testimonialCard);
});

const clientsImagesContainer = document.querySelector(".clients-pictures")

testimonials.forEach((testimonial, index) => {
    let pic = document.createElement("img")
    pic.src = testimonial.clientImage;
    pic.className = `client-${index + 1}`
    pic.alt = `Image Of ${testimonial.clientName}`
    clientsImagesContainer.append(pic)
})

const workContainer = document.querySelector(".work-grid");

works.forEach(work => {
    let workCard = document.createElement("div")
    workCard.className = "work-card"

    let workImage = document.createElement("img")
    workImage.src = work.workImage
    workImage.alt = `${work.workTitle} Image`

    let projectInfo = document.createElement("div")
    projectInfo.className = "project-info"

    let projectTitle = document.createElement("h2")
    projectTitle.textContent = work.workTitle
    projectInfo.append(projectTitle)

    let projectDesc = document.createElement("p")
    projectDesc.textContent = work.workDescription
    projectInfo.append(projectDesc)

    let projectLinks = document.createElement("div")
    projectLinks.className = "project-links"

    let githubLink = document.createElement("a")
    githubLink.href = work.githubLink
    githubLink.target = "_blank"
    let githubIcon = document.createElement("i")
    githubIcon.className = "fa-brands fa-github"
    githubLink.append(githubIcon)

    projectLinks.append(githubLink)

    if (work.behanceLink != "") {
        let behanceLink = document.createElement("a")
        behanceLink.href = work.behanceLink
        behanceLink.target = "_blank"
        let behanceIcon = document.createElement("i")
        behanceIcon.className = "fa-brands fa-behance"
        behanceLink.append(behanceIcon)

        projectLinks.append(behanceLink)
    }

    workCard.append(workImage, projectInfo, projectLinks)
    workContainer.append(workCard)
})

let githubLinks = document.getElementsByClassName("github-link")
Array.from(githubLinks).forEach(githubLink => {
    githubLink.href = personalInfo.socials.github
    githubLink.target = "_blank"
})

let igLinks = document.getElementsByClassName("ig-link")
Array.from(igLinks).forEach(igLink => {
    igLink.href = personalInfo.socials.ig
    igLink.target = "_blank"
})

let behanceLinks = document.getElementsByClassName("behance-link")
Array.from(behanceLinks).forEach(behanceLink => {
    behanceLink.href = personalInfo.socials.behance
    behanceLink.target = "_blank"
})
