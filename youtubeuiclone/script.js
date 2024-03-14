var menuIcon=document.querySelector(".menu-icon");
var sidebar=document.querySelector(".sidebar");
var container=document.querySelector(".container");

menuIcon.onclick=function(){
    sidebar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container");
}

function subscribed(){
    var check=document.getElementById("Sbtn").innerHTML;
    if(check=="subscribed"){
        document.getElementById("Sbtn").innerHTML="subscribe";
        document.getElementById("Sbtn").style.background="red";
    }
    else{
    document.getElementById("Sbtn").innerHTML="subscribed";
    document.getElementById("Sbtn").style.background="#5a5a5a";
    }
}



// JavaScript code for search functionality
document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.querySelector('input[type="text"]');
    const videoList = document.querySelectorAll('.vid-list');

    searchInput.addEventListener('input', function () {
        const searchTerm = searchInput.value.trim().toLowerCase();

        videoList.forEach(function (video) {
            const videoTitle = video.querySelector('.vid-info > a').textContent.trim().toLowerCase();
            const channelName = video.querySelector('.vid-info > p').textContent.trim().toLowerCase();

            if (videoTitle.includes(searchTerm) || channelName.includes(searchTerm)) {
                video.style.display = 'block';
            } else {
                video.style.display = 'none';
            }
        });
    });
});



// JavaScript code to show loading screen until page is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    const loadingScreen = document.querySelector('.loading-screen');
    loadingScreen.style.display = 'block';
    window.onload = function () {
        loadingScreen.style.display = 'none';
    };
});
