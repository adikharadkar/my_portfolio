import { data } from "./data.js";

const skillList = document.getElementById("skill-list");

if (!skillList) {
  console.error("Skill list element not found!");
} else {
  data.skills.forEach((s) => {
    const li = document.createElement("li");
    li.textContent = s.name;
    li.setAttribute("id", "skill");
    skillList.appendChild(li);
  });
}

const downloadLink = document.createElement("a");

downloadLink.textContent = "Download Resume";

downloadLink.classList.add("profile-link");
downloadLink.style = "text-decoration: underline";
downloadLink.href =
  "Aditya Kharadkar_Frontend Developer_3 Years 6 Months_7028281198.pdf";
downloadLink.setAttribute("download", "aditya_kharadkar.pdf");

const downloadLinkSection = document.getElementById("download-link");
downloadLinkSection.appendChild(downloadLink);

// Nav Links
const navLinks = document.getElementById("nav-links");

if (navLinks) {
  const ul = document.createElement("ul");
  navLinks.appendChild(ul);
  ul.classList.add("nav-ul");
  ul.setAttribute("id", "nav-links-ul");

  data.navLinks.forEach((el) => {
    const li = document.createElement("li");
    li.setAttribute("id", "nav-link");
    li.classList.add("nav-links");
    li.textContent = el.name;

    li.addEventListener("click", () => {
      window.location.hash = el.id;
    });
    ul.appendChild(li);
  });
}

function handleMobileNavbar() {
  const mobileNavbar = document.getElementById("mobile-navbar");
  if (mobileNavbar.classList.contains("show-mobile-nav")) {
    mobileNavbar.classList.remove("show-mobile-nav");
    mobileNavbar.style = "display: none";
  } else {
    mobileNavbar.classList.add("show-mobile-nav");
    mobileNavbar.style = "display: contents";
  }
}

const navMenuIcon = document.getElementById("nav-menu-icon");
if (navMenuIcon) {
  navMenuIcon.addEventListener("click", handleMobileNavbar);
}

const mobileNavbar = document.getElementById("mobile-navbar");
if (mobileNavbar) {
  const mobileNavList = document.createElement("ul");
  mobileNavList.classList.add("mobile-nav-list");
  data.navLinks.forEach((navLink) => {
    const mobileNavLink = document.createElement("li");
    mobileNavLink.classList.add("mobile-nav-link");
    mobileNavLink.textContent = navLink.name;
    mobileNavLink.addEventListener("click", () => {
      window.location.hash = navLink.id;
    });
    mobileNavList.appendChild(mobileNavLink);
  });
  mobileNavbar.appendChild(mobileNavList);
}

// Certificates
const certificateList = document.getElementById("certificate-list");
if (certificateList) {
  data.certificates.forEach((el) => {
    const li = document.createElement("li");
    li.classList.add("certificate");
    const a = document.createElement("a");
    a.classList.add("certificate-link");
    a.textContent = `${el.courseName} - ${el.vendor}`;
    a.href = el.courseLink;
    a.target = "_blank";
    li.appendChild(a);
    certificateList.appendChild(li);
  });
}

// Education
const educationList = document.getElementById("education-list");
if (educationList) {
  data.education.forEach((el) => {
    const li = document.createElement("li");
    li.classList.add("list-item", "education-list-item");

    const degreeName = document.createElement("h3");
    degreeName.textContent = el.degreeName;

    const paraDurationDiv = document.createElement("div");
    paraDurationDiv.classList.add("para-duration-div");

    const duration = document.createElement("p");
    duration.textContent = `${el.start} - ${el.end}`;

    const universityName = document.createElement("h4");
    universityName.textContent = el.universityName;

    const percentage = document.createElement("span");
    percentage.textContent = el.percentage;

    paraDurationDiv.appendChild(degreeName);
    paraDurationDiv.appendChild(duration);
    li.appendChild(paraDurationDiv);
    li.appendChild(universityName);
    li.appendChild(percentage);
    educationList.appendChild(li);
  });
}

const experienceList = document.getElementById("experience-list");

if (experienceList) {
  data.experience.forEach((el) => {
    const li = document.createElement("li");
    li.classList.add("list-item");

    const position = document.createElement("h2");
    position.textContent = el.position;
    li.appendChild(position);

    const h3 = document.createElement("h3");
    h3.textContent = el.companyName;
    li.appendChild(h3);

    const durationLocationDiv = document.createElement("section");
    durationLocationDiv.setAttribute("id", "durationLocationDiv");

    const durationSpan = document.createElement("span");
    durationSpan.textContent = el.duration;

    const locationSpan = document.createElement("span");
    locationSpan.textContent = el.location;

    li.appendChild(durationLocationDiv);
    durationLocationDiv.appendChild(durationSpan);
    durationLocationDiv.appendChild(locationSpan);
    durationLocationDiv.classList.add("durationLocationDiv");

    const projectList = document.createElement("ul");

    el.projects.forEach((pro) => {
      const project = document.createElement("li");
      const projectName = document.createElement("h4");
      projectName.textContent = pro.name + " (" + pro.duration + ")";
      project.appendChild(projectName);
      projectList.appendChild(project);

      const descriptionList = document.createElement("ul");
      project.appendChild(descriptionList);

      pro.description.forEach((desc) => {
        const descLi = document.createElement("li");
        descLi.textContent = desc;
        descriptionList.appendChild(descLi);
      });
    });

    li.appendChild(projectList);

    experienceList.appendChild(li);
  });
}

const projectsList = document.getElementById("projects-list");
data.projects.forEach((pro) => {
  const projectListItem = document.createElement("li");
  projectListItem.classList.add("projectListItem");

  const projectNameDurationDiv = document.createElement("div");

  const projectName = document.createElement("h3");
  projectName.textContent = pro.name;
  projectName.classList.add("projectName");
  projectNameDurationDiv.appendChild(projectName);

  const projectDuration = document.createElement("span");
  projectDuration.textContent = pro.duration;

  projectNameDurationDiv.classList.add("projectNameDurationDiv");

  const projectDescription = document.createElement("p");
  projectDescription.textContent = pro.description;

  const projectTags = document.createElement("ul");
  projectTags.classList.add("projectTags");
  pro.tags.forEach((tag) => {
    const projectTagItem = document.createElement("li");
    projectTagItem.textContent = tag;
    projectTagItem.classList.add("projectTagItem");
    projectTags.appendChild(projectTagItem);
  });

  const githubButton = document.createElement("a");
  githubButton.textContent = "View on Github";
  githubButton.href = pro.link;
  githubButton.setAttribute("target", "_blank");
  githubButton.classList.add("githubButton");

  projectListItem.appendChild(projectNameDurationDiv);
  projectListItem.appendChild(projectDuration);
  projectListItem.appendChild(projectDescription);
  projectListItem.appendChild(projectTags);
  projectNameDurationDiv.appendChild(githubButton);
  projectsList.appendChild(projectListItem);
});

const sideNav = document.getElementById("side-nav");
const profilesList = document.createElement("ul");
profilesList.classList.add("profiles-list");
data.profiles.forEach((profile) => {
  const profileListItem = document.createElement("li");
  profileListItem.setAttribute("id", "profile-list-item");
  profileListItem.classList.add("profile-list-item");

  const profileLink = document.createElement("a");
  profileLink.classList.add("profile-link");

  const img = document.createElement("img");
  img.src = profile.src;
  profileLink.appendChild(img);

  img.classList.add("profile-img");
  // profileLink.textContent = profile.name;
  profileLink.href = profile.link;
  profileLink.setAttribute("target", "_blank");

  profileListItem.appendChild(profileLink);

  const linkName = document.createElement("span");
  profileListItem.appendChild(linkName);
  linkName.textContent = profile.name;
  linkName.style = "display: none";

  profileListItem.addEventListener("mouseenter", () => {
    linkName.style = "display: contents";
  });

  profileListItem.addEventListener("mouseleave", () => {
    linkName.style = "display: none";
  });
  profilesList.appendChild(profileListItem);
});

sideNav.appendChild(profilesList);
