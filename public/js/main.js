document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function(event) {
            const url = this.getAttribute('href');

            if (!url.startsWith('#')) {
                event.preventDefault(); 
                loadContent(url); 
            }
        });
    });
});

function loadContent(url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(data, 'text/html');
            const newContent = doc.querySelector('.container').innerHTML;
            document.querySelector('.container').innerHTML = newContent;
            window.history.pushState({}, '', url); 
        })
        .catch(error => console.error('Error loading content:', error));
}

window.addEventListener('popstate', function () {
    loadContent(location.pathname);
});