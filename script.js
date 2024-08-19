function search() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const videos = document.querySelectorAll('.video-item');
    
    videos.forEach(video => {
        if (video.textContent.toLowerCase().includes(query)) {
            video.style.display = 'block';
        } else {
            video.style.display = 'none';
        }
    });
}