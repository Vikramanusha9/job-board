document.getElementById('jobForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const title = document.getElementById('title').value.trim();
  const company = document.getElementById('company').value.trim();
  const description = document.getElementById('description').value.trim();

  if (title && company && description) {
    const jobCard = document.createElement('div');
    jobCard.classList.add('job-card');

    jobCard.innerHTML = `
      <h3>${title}</h3>
      <strong>${company}</strong>
      <p>${description}</p>
    `;

    document.getElementById('jobList').prepend(jobCard);

    // Clear the form
    document.getElementById('jobForm').reset();
  }
});
