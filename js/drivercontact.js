document.addEventListener("DOMContentLoaded", function () {
    const incharges = [
        { name: "Incharge 1", description: "Administrative Officer", phone: "tel:9959222269", whatsapp: "https://wa.me/+919959222269" }
    ];

    const drivers = [
        { name: "Route 1", description: "G.V Reddy", phone: "tel:9000252535", whatsapp: "https://wa.me/+919000252535" },
        { name: "Route 2", description: "Subash Rao", phone: "tel:7036864220", whatsapp: "https://wa.me/+917036864220" },
        { name: "Route 3", description: "T.N Rao", phone: "tel:9963120818", whatsapp: "https://wa.me/+919963120818" },
        { name: "Route 4", description: "Unknown", phone: "tel:", whatsapp: "https://wa.me/" },
        { name: "Route 5", description: "Esu Padham", phone: "tel:9182265556", whatsapp: "https://wa.me/+919182265556" },
        { name: "Route 6", description: "Siddi Ramulu", phone: "tel:8466850500", whatsapp: "https://wa.me/+918466850500" },
        { name: "Route 7", description: "M.N Reddy", phone: "tel:9494444468", whatsapp: "https://wa.me/+919494444468" },
        { name: "Route 8", description: "Dasharatham", phone: "tel:7382817805", whatsapp: "https://wa.me/+917382817805" },
        { name: "Route 9", description: "P Kantaiah", phone: "tel:8074017988", whatsapp: "https://wa.me/+918074017988" },
        { name: "Route 10", description: "SD. Zafeer", phone: "tel:9948056679", whatsapp: "https://wa.me/+919948056679" },
        { name: "Route 11", description: "B. Ram Reddy", phone: "tel:8332022569", whatsapp: "https://wa.me/+918332022569" }
    ];


    const inchargeContainer = document.getElementById("busIncharge");
    const driversContainer = document.getElementById("busDrivers");
    const btnIncharges = document.getElementById("showIncharges");
    const btnDrivers = document.getElementById("showDrivers");
    const sectionIncharges = document.getElementById("busInchargesDisplay");
    const sectionDrivers = document.getElementById("busDriversDisplay");
    const allCards = document.querySelectorAll(".incharge-card");

    function populateCards(data, container) {
        container.innerHTML = "";
        if (data.length > 0) {
            data.forEach(item => {
                const card = document.createElement("div");
                card.className = "incharge-card";
                card.innerHTML = `
                    <div class="left">
                        <i class="bi bi-person-fill person-icon"></i>
                        <div class="text-left ml-1">
                            <div class="incharge-name">${item.name}</div>
                            <div class="incharge-desc">${item.description}</div>
                        </div>
                    </div>
                    <div class="right">
                        <a href="${item.phone}" class="icon-link"><i class="bi bi-telephone-fill"></i></a>
                        <a href="${item.whatsapp}" class="icon-link" target="_blank"><i class="bi bi-whatsapp"></i></a>
                    </div>
                `;
                container.appendChild(card);
            });
        }
    }

    populateCards(incharges, inchargeContainer);
    populateCards(drivers, driversContainer);
    function filterCards(query) {
        const lowerCaseQuery = query.toLowerCase();
        const allCards = document.querySelectorAll(".incharge-card");
        allCards.forEach(card => {
            const nameElement = card.querySelector(".incharge-name");
            const descElement = card.querySelector(".incharge-desc");
            const name = nameElement ? nameElement.textContent.toLowerCase() : "";
            const desc = descElement ? descElement.textContent.toLowerCase() : "";
            card.style.display = (name.includes(lowerCaseQuery) || desc.includes(lowerCaseQuery)) ? "flex" : "none";
        });
    }

    document.getElementById("search").addEventListener("input", function () {
        filterCards(this.value);
    });

    document.getElementById("clearSearch").addEventListener("click", function () {
        document.getElementById("search").value = "";
        filterCards("");
    });

    btnIncharges.addEventListener("click", function () {
        inchargeContainer.style.display = "block";
        driversContainer.style.display = "none";
        sectionIncharges.style.display = "block";
        sectionDrivers.style.display = "none";
        btnIncharges.classList.add("active");
        btnDrivers.classList.remove("active");
        filterCards(document.getElementById("search").value);
    });

    btnDrivers.addEventListener("click", function () {
        inchargeContainer.style.display = "none";
        driversContainer.style.display = "block";
        sectionIncharges.style.display = "none";
        sectionDrivers.style.display = "block";
        btnIncharges.classList.remove("active");
        btnDrivers.classList.add("active");
        filterCards(document.getElementById("search").value);
    });
    inchargeContainer.style.display = "block";
    driversContainer.style.display = "none";
    sectionIncharges.style.display = "block";
    sectionDrivers.style.display = "none";
    btnIncharges.classList.add("active");
});
document.getElementById('contactdriverBtn').addEventListener('click', function () {
    window.location.href = '../pages/drivercontact.html';
});
