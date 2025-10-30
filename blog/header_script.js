
const header = `
        <div id='rajesh'>RAJESH SHAH</div>
        <div class='nav'>
            <div>
                <a href='../index.html'>HOME</a>
            </div>
            <div id='active'>
                <a href='../blog.html'>BLOGS</a>
            </div>
            <div>
                <a href='../project.html'>PROJECTS</a>
            </div>
        </div>`;

document.addEventListener("DOMContentLoaded", () => {
    const headerElement = document.querySelector("header");
    if (headerElement) {
        headerElement.innerHTML = header;
    } else {
        console.warn("No <header> element found on this page.");
    }
});