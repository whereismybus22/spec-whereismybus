document.addEventListener("DOMContentLoaded", function () {
    const incharges = [
        { name: "Incharge 1", description: "Bus Route 1", phone: "tel:1234567801", whatsapp: "https://wa.me/1234567801" },
        { name: "Incharge 2", description: "Bus Route 2", phone: "tel:1234567802", whatsapp: "https://wa.me/1234567802" },
        { name: "Incharge 3", description: "Bus Route 3", phone: "tel:1234567803", whatsapp: "https://wa.me/1234567803" },
        { name: "Incharge 4", description: "Bus Route 4", phone: "tel:1234567804", whatsapp: "https://wa.me/1234567804" },
        { name: "Incharge 5", description: "Bus Route 5", phone: "tel:1234567805", whatsapp: "https://wa.me/1234567805" },
        { name: "Incharge 6", description: "Bus Route 6", phone: "tel:1234567806", whatsapp: "https://wa.me/1234567806" },
        { name: "Incharge 7", description: "Bus Route 7", phone: "tel:1234567807", whatsapp: "https://wa.me/1234567807" },
        { name: "Incharge 8", description: "Bus Route 8", phone: "tel:1234567808", whatsapp: "https://wa.me/1234567808" },
        { name: "Incharge 9", description: "Bus Route 9", phone: "tel:1234567809", whatsapp: "https://wa.me/1234567809" },
        { name: "Incharge 10", description: "Bus Route 10", phone: "tel:1234567810", whatsapp: "https://wa.me/1234567810" },
        { name: "Incharge 11", description: "Bus Route 11", phone: "tel:1234567811", whatsapp: "https://wa.me/1234567811" },
        { name: "Incharge 12", description: "Bus Route 12", phone: "tel:1234567812", whatsapp: "https://wa.me/1234567812" },
        { name: "Incharge 13", description: "Bus Route 13", phone: "tel:1234567813", whatsapp: "https://wa.me/1234567813" },
        { name: "Incharge 14", description: "Bus Route 14", phone: "tel:1234567814", whatsapp: "https://wa.me/1234567814" },
        { name: "Incharge 15", description: "Bus Route 15", phone: "tel:1234567815", whatsapp: "https://wa.me/1234567815" },
        { name: "Incharge 16", description: "Bus Route 16", phone: "tel:1234567816", whatsapp: "https://wa.me/1234567816" },
        { name: "Incharge 17", description: "Bus Route 17", phone: "tel:1234567817", whatsapp: "https://wa.me/1234567817" },
        { name: "Incharge 18", description: "Bus Route 18", phone: "tel:1234567818", whatsapp: "https://wa.me/1234567818" },
        { name: "Incharge 19", description: "Bus Route 19", phone: "tel:1234567819", whatsapp: "https://wa.me/1234567819" },
        { name: "Incharge 20", description: "Bus Route 20", phone: "tel:1234567820", whatsapp: "https://wa.me/1234567820" },
        { name: "Incharge 21", description: "Bus Route 21", phone: "tel:1234567821", whatsapp: "https://wa.me/1234567821" },
        { name: "Incharge 22", description: "Bus Route 22", phone: "tel:1234567822", whatsapp: "https://wa.me/1234567822" },
        { name: "Incharge 23", description: "Bus Route 23", phone: "tel:1234567823", whatsapp: "https://wa.me/1234567823" }
    ];

    const drivers = [
        { name: "Route 1", description: "Name 1", phone: "tel:1234567801", whatsapp: "https://wa.me/1234567801" },
        { name: "Route 2", description: "Name 2", phone: "tel:1234567802", whatsapp: "https://wa.me/1234567802" },
        { name: "Route 3", description: "Name 3", phone: "tel:1234567803", whatsapp: "https://wa.me/1234567803" },
        { name: "Route 4", description: "Name 4", phone: "tel:1234567804", whatsapp: "https://wa.me/1234567804" },
        { name: "Route 5", description: "Name 5", phone: "tel:1234567805", whatsapp: "https://wa.me/1234567805" },
        { name: "Route 6", description: "Name 6", phone: "tel:1234567806", whatsapp: "https://wa.me/1234567806" },
        { name: "Route 7", description: "Name 7", phone: "tel:1234567807", whatsapp: "https://wa.me/1234567807" },
        { name: "Route 8", description: "Name 8", phone: "tel:1234567808", whatsapp: "https://wa.me/1234567808" },
        { name: "Route 9", description: "Name 9", phone: "tel:1234567809", whatsapp: "https://wa.me/1234567809" },
        { name: "Route 10", description: "Name 10", phone: "tel:1234567810", whatsapp: "https://wa.me/1234567810" },
        { name: "Route 11", description: "Name 11", phone: "tel:1234567811", whatsapp: "https://wa.me/1234567811" },
        { name: "Route 12", description: "Name 12", phone: "tel:1234567812", whatsapp: "https://wa.me/1234567812" },
        { name: "Route 13", description: "Name 13", phone: "tel:1234567813", whatsapp: "https://wa.me/1234567813" },
        { name: "Route 14", description: "Name 14", phone: "tel:1234567814", whatsapp: "https://wa.me/1234567814" },
        { name: "Route 15", description: "Name 15", phone: "tel:1234567815", whatsapp: "https://wa.me/1234567815" },
        { name: "Route 16", description: "Name 16", phone: "tel:1234567816", whatsapp: "https://wa.me/1234567816" },
        { name: "Route 17", description: "Name 17", phone: "tel:1234567817", whatsapp: "https://wa.me/1234567817" },
        { name: "Route 18", description: "Name 18", phone: "tel:1234567818", whatsapp: "https://wa.me/1234567818" },
        { name: "Route 19", description: "Name 19", phone: "tel:1234567819", whatsapp: "https://wa.me/1234567819" },
        { name: "Route 20", description: "Name 20", phone: "tel:1234567820", whatsapp: "https://wa.me/1234567820" },
        { name: "Route 21", description: "Name 21", phone: "tel:1234567821", whatsapp: "https://wa.me/1234567821" },
        { name: "Route 22", description: "Name 22", phone: "tel:1234567822", whatsapp: "https://wa.me/1234567822" },
        { name: "Route 23", description: "Name 23", phone: "tel:1234567823", whatsapp: "https://wa.me/1234567823" }
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
