const slides = [
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjsz3NFL4hVPxMBSc806PaPzZALba8faaziZAqZzJ3gCTnrYLWDpa5B3JFed5Hz_oeOrn8VEWvaUu6EJ8nYHMDp9elmPz6tAbGR9OtP0KZ2_iIqsKm4plK6Dz7zMfXm0svCS2yiT_CAFlrtpTbO6pROcxieM0i-3W3Lwf-0alA1V4I91PxYT-1s39rcXZ0w/s1847/ChatGPT%20Image%20Jul%201,%202026,%2005_14_50%20PM.png",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgrtGMWppfKZQ3XBd0YGLhjLykFyysCwMZ44-TnBz1UQWZpuNDXjppiKDhsAspMrK1cdo-239M8Ibg19S4hbRr6sNq9zDd4lM1E_fJzNpV577tGxnbFmEzsh4sSDuvHfw7PYFB0pZyt3qJWfuRO3X96coF1qhYeANXl2srMC47MOI-2C5_8fJk3FMCuCvPV/s1846/ChatGPT%20Image%20Jul%201,%202026,%2005_15_04%20PM.png",
    "https://blogger.googleusercontent.com/img/a/AVvXsEjcMsPtVLcHh86ZSA79AprDTO2m-1ZoenycF76OTBDBx22UapEvr0PM2wVBgYAzzHhSr5lgjHiabcYGoOY78c7T6awSA-kbMrI_FPbLH9pBgpBFdBtkgZzlW1-thyQgDU0BrbF4lGvimmkTpCPIRqyXhLKTvir5IlV9soV_3ZXmvrMvZ0cyYNPySvG7Lem7",
    "https://blogger.googleusercontent.com/img/a/AVvXsEhZ9UK8rzdlhcFP5GsIeO85xgH3mh4fx4LQO2lWHgPnEttFO70VOHz43XqfuLIGsnsr0cjcXywMZu9OJSdQHXnqV2N9VtQ4CSuDgcEZIvg9Ee1go6jBc8kIQUCojIYeJTRAk-R9iaddLuniJCyYLjecwNlxOfkwcttNdYBSUPA9JqvPP_KUK1HSBdJu6jic",
    "https://blogger.googleusercontent.com/img/a/AVvXsEgEGxipgO1fna9PGBkDNI1M7pRDeQaqeUmFtboITKqhmEFFKnIVJmQlyb1Pxi2HtOLj-5suwj7fdZ1qr2xtSDgg_sgUj_6TpCiS8wIBvvfk61uXTgLayyESdUIjccM3cOV6K2ApKFmIjHcMPFKnCLCR8jwMJTLkWfYi5mAd5fPBbKWb4-KymieaL_FNv9rA"
];

let currentSlide = 0;
const slideImg = document.getElementById("slide");

function showSlide() {
    slideImg.style.opacity = "0";
    setTimeout(() => {
        slideImg.src = slides[currentSlide];
        slideImg.style.opacity = "1";
        currentSlide = (currentSlide + 1) % slides.length;
    }, 400);
}

showSlide();
setInterval(showSlide, 4000);

const banks = ["BCA", "BRI", "SEABANK", "BANK JAGO", "DANA", "GOPAY"];
const banksContainer = document.getElementById("banks");

banksContainer.innerHTML = banks.map(bank => `
    <details>
        <summary>${bank}</summary>
        <p><strong>Nama Rekening:</strong> **********<br>
           <strong>Nomor Rekening:</strong> **********</p>
    </details>
`).join('');

function openLivechat() {
    alert("🔴 Live Chat dibuka! (Mode Demo)");
}

function showMenu() {
    alert("Menu lengkap akan muncul di versi lengkap.");
}

function showSection(type) {
    alert(`Halaman ${type === 'daftar' ? 'Daftar' : 'Login'} dibuka! (Demo)`);
}
