document.addEventListener("DOMContentLoaded", function () {
    // header.html 불러오기
    fetch("header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header").innerHTML = data;

            // header가 로딩된 직후에 active 클래스 부여
            let currentPage = window.location.pathname.split("/").pop();
            let navItems = document.querySelectorAll("nav ul li a");

            navItems.forEach(link => {
                if (link.getAttribute("href") === currentPage) {
                    link.parentElement.classList.add("active");
                }
            });
        })
        .catch(error => console.error("Error loading header:", error));

    fetch("contact.html")
        .then(response => {
            if (!response.ok) throw new Error("Network response was not ok");
            return response.text();
        })
        .then(data => {
            document.getElementById("contact").innerHTML = data;
        })
        .catch(error => {
            console.error("Error loading contact.html:", error);
        });

    // footer.html 불러오기
    fetch("footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer").innerHTML = data;
        })
        .catch(error => console.error("Error loading footer:", error));
});