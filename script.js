const resNav = document.querySelector(".resNav")
const imgClose = document.getElementById('imgClose')
const hamburgerMenu = document.querySelector('.hamburgerMenu')
console.log(hamburgerMenu)
imgClose.addEventListener("click",()=>{
    resNav.style.display = "none"
       hamburgerMenu.style.display = "flex"
})

function show(){
    
    resNav.style.display = 'flex'
        hamburgerMenu.style.display = "none"


}
document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.querySelector('.search input[type="text"]');
    const jobListings = document.querySelectorAll('.jobLysts');

    if (!searchInput) return;

    searchInput.addEventListener('input', function () {
        const searchTerm = this.value.trim().toLowerCase();
        let firstVisible = true;

        jobListings.forEach(jobListing => {
            const jobTitle = jobListing.querySelector('h3').textContent.toLowerCase();
            if (jobTitle.includes(searchTerm)) {
                jobListing.style.display = 'flex';
                jobListing.style.marginTop = firstVisible ? '5rem' : '0';
                firstVisible = false;
            } else {
                jobListing.style.display = 'none';
            }
        });

        // Reset margin-top if nothing is visible
        if (firstVisible) {
            jobListings.forEach(jobListing => {
                jobListing.style.marginTop = '5rem';
            });
        }
    });
});
