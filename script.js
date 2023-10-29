function randomGeometry() {
    var urlParams = new URLSearchParams(window.location.search);
    var currentIndex = parseInt(urlParams.get('index')) || 0;
    var pages = [
        'instancing-raycast.html',
        'interactive-points.html',
        'css3d-sprites.html',
        'marching-cubes.html',
        'physics-dropping.html',
        'platform-jump.html',
        'interactive-raycast-points.html',
    ];  // Adjust paths as needed

    currentIndex = (currentIndex + 1) % pages.length;  // Increment and wrap-around index
    window.location.href = pages[currentIndex] + "?index=" + currentIndex;
}


/* Add this code to your JavaScript file or within a <script> tag in each HTML file */
function refreshPage() {
    location.reload();
}

function goHome() {
    window.location.href = 'index.html';  // Replace 'index.html' with the URL of your homepage if it's different
}
