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
