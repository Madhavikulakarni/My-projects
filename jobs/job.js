// Fetch the company parameter from the URL
const urlParams = new URLSearchParams(window.location.search);
const companyKey = urlParams.get('company');

// Hardcoded jobsData object
const jobsData = {
  paytm: {
    logo: "../icons/paytm.png",
    name: "Paytm",
    location: "USA",
    vacancy: "01",
    position: "Web Developer",
    hours: "50h/week",
    salary: "6LPA - 8LPA",
    description: "We are looking for a passionate and skilled Web Developer to join our team. You will design and build responsive websites and work closely with designers…",
    employment: "Full Time",
    workplace: "On-site (Bangalore, India)",
    education: "Bachelor degree in Computer Science",
    experience: "0-2 years",
    applyLink: "https://paytm.com/careers"
  },
  accenture: {
    logo: "../icons/Accenture.png",
    name: "Accenture",
    location: "India",
    vacancy: "02",
    position: "App Developer",
    hours: "45h/week",
    salary: "7LPA",
    description: "Join Accenture as an App Developer to create innovative mobile applications…",
    employment: "Full Time",
    workplace: "On-site (Mumbai, India)",
    education: "Bachelor degree in IT or related field",
    experience: "1-3 years",
    applyLink: "https://www.accenture.com/in-en/careers"
  },
  capgemini: {
    logo: "../icons/cap.png",
    name: "Capgemini",
    location: "India",
    vacancy: "03",
    position: "Network Engineer",
    hours: "40h/week",
    salary: "6LPA",
    description: "Capgemini is hiring a Network Engineer to maintain and improve its enterprise network…",
    employment: "Full Time",
    workplace: "On-site (Chennai, India)",
    education: "Bachelor degree in Networking or related field",
    experience: "1-2 years",
    applyLink: "https://www.capgemini.com/careers/"
  },
  cognizant: {
    logo: "../icons/cognizant.png",
    name: "Cognizant",
    location: "India",
    vacancy: "04",
    position: "Web Developer",
    hours: "48h/week",
    salary: "5LPA",
    description: "Cognizant seeks a talented Web Developer to create user-friendly web applications…",
    employment: "Full Time",
    workplace: "On-site (Hyderabad, India)",
    education: "Bachelor degree in Computer Science",
    experience: "1-3 years",
    applyLink: "https://www.cognizant.com/careers"
  },
  random: {
    logo: "../icons/download.png",
    name: "Wipro",
    location: "India",
    vacancy: "01",
    position: "Tester",
    hours: "40h/week",
    salary: "3LPA",
    description: "Wipro Ltd. is looking for a software tester to join its QA team…",
    employment: "Full Time",
    workplace: "On-site (Pune, India)",
    education: "Bachelor degree in Computer Science or IT",
    experience: "0-1 years",
    applyLink: "https://careers.wipro.com/"
  },
  infosys: {
    logo: "../icons/infosys.png",
    name: "Infosys",
    location: "India",
    vacancy: "03",
    position: "System Engineer",
    hours: "42h/week",
    salary: "4LPA",
    description: "Infosys is hiring System Engineers to manage software systems and troubleshoot…",
    employment: "Full Time",
    workplace: "On-site (Bangalore, India)",
    education: "Bachelor degree in Computer Science or Electronics",
    experience: "1-2 years",
    applyLink: "https://careers.in.infosys.com/"
  },
  khatabook: {
    logo: "../icons/khatabook.png",
    name: "Khatabook",
    location: "India",
    vacancy: "02",
    position: "Data Analyst",
    hours: "45h/week",
    salary: "6LPA",
    description: "Khatabook is looking for a Data Analyst to interpret data and generate actionable insights…",
    employment: "Full Time",
    workplace: "On-site (Bangalore, India)",
    education: "Bachelor degree in Statistics, Math, or related",
    experience: "1-3 years",
    applyLink: "https://khatabook.com/careers"
  },
  tcs: {
    logo: "../icons/tcs.jfif",
    name: "TCS",
    location: "India",
    vacancy: "04",
    position: "Tester",
    hours: "40h/week",
    salary: "3LPA",
    description: "TCS is seeking software testers to conduct functional, regression, and performance testing…",
    employment: "Full Time",
    workplace: "On-site (Chennai, India)",
    education: "Bachelor degree in IT or Computer Science",
    experience: "0-1 years",
    applyLink: "https://www.tcs.com/careers"
  },
  upstock: {
    logo: "../icons/upstock.png",
    name: "Upstox",
    location: "India",
    vacancy: "01",
    position: "Web Developer",
    hours: "50h/week",
    salary: "8LPA",
    description: "Upstox is hiring a Web Developer to develop cutting-edge financial web applications…",
    employment: "Full Time",
    workplace: "On-site (Chennai, India)",
    education: "Bachelor degree in IT or Computer Science",
    experience: "0-1 years",
    applyLink: "https://upstox.com/careers"
  }
};


// Render job details in the page
function renderJobDetails(job) {
  document.getElementById("company-logo").src = job.logo || "../icons/default.png";
  document.getElementById("company-logo").alt = job.name || "Company Logo";
  document.getElementById("company-name").textContent = job.name || "Company Name";
  document.getElementById("company-location").textContent = job.location || "Location";
  document.getElementById("vacancy-count").textContent = job.vacancy || "N/A";
  document.getElementById("job-position").textContent = job.title || "N/A";
  document.getElementById("job-hours").textContent = job.hours || "N/A";
  document.getElementById("job-salary").textContent = job.salary || "N/A";
  document.getElementById("job-description").textContent = job.description || "No Description";
  document.getElementById("employment-status").textContent = job.employment || "N/A";
  document.getElementById("workplace").textContent = job.workplace || "N/A";
  document.getElementById("education").textContent = job.education || "N/A";
  document.getElementById("experience").textContent = job.experience || "N/A";
  document.getElementById("experience").textContent = job.experience || "N/A";

  const applyBtn = document.getElementById("apply-button");
  if (job.applyLink) {
    applyBtn.href = job.applyLink;
    applyBtn.style.display = "inline-block";
  } else {
    applyBtn.href = "#";
    applyBtn.style.display = "none";
  }
}
// Get job data from localStorage (admin posted jobs)
const storedJobsJSON = localStorage.getItem("jobData");
let storedJobs = storedJobsJSON ? JSON.parse(storedJobsJSON) : [];

// Find job in admin posted jobs matching companyKey (case-insensitive)
const adminJob = storedJobs.find(
  job => job.company && job.company.toLowerCase() === companyKey?.toLowerCase()
);

// Display job details from admin jobs if available, else fallback to hardcoded jobsData
if (companyKey && adminJob) {
  renderJobDetails(adminJob);
} else if (companyKey && jobsData[companyKey]) {
  renderJobDetails(jobsData[companyKey]);
} else {
  document.querySelector(".detailSection").innerHTML = "<h2>Job details not found.</h2>";
}
