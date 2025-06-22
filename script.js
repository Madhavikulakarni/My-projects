document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('.search input[type="text"]');
    const jobListings = document.querySelectorAll('.jobLysts');

    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        let firstVisible = true;

        jobListings.forEach(jobListing => {
            const jobTitle = jobListing.querySelector('h3').textContent.toLowerCase();
            if (jobTitle.includes(searchTerm)) {
                jobListing.style.display = 'flex'; // Ensure it's displayed as a flex container
                if (firstVisible) {
                    jobListing.style.marginTop = '5rem'; // Apply top margin to the first visible item
                    firstVisible = false;
                } else {
                    jobListing.style.marginTop = '0'; // Remove top margin for subsequent visible items
                }
            } else {
                jobListing.style.display = 'none';
            }
        });

        // If no items are visible, you might want to reset the margin
        if (firstVisible) {
            jobListings.forEach(jobListing => {
                jobListing.style.marginTop = '5rem';
            });
        }
    });
});