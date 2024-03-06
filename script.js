document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('expandProjects');
    const projectsSection = document.getElementById('projects');

    button.addEventListener('click', function () {
        projectsSection.classList.toggle('expanded');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const printButton = document.getElementById('printButton');

    printButton.addEventListener('click', function () {
        printResume();
    });
});

function printResume() {
    window.print();
}

document.addEventListener('DOMContentLoaded', function () {
    // Your existing code...

    // New JavaScript functionality
    const submitButton = document.getElementById('submitForm');
    const submittedInfoDiv = document.getElementById('submittedInfo');
    const contactForm = document.getElementById('contactForm');

    submitButton.addEventListener('click', function () {
        submitForm();
    });

    function submitForm() {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            const submittedInfo = `<p>Submitted Information:</p>
                                   <p>Name: ${name}</p>
                                   <p>Email: ${email}</p>
                                   <p>Message: ${message}</p>`;

            submittedInfoDiv.innerHTML = submittedInfo;
            contactForm.reset();
        } else {
            alert('Please fill in all fields before submitting.');
        }
    }
});
