const template = document.getElementById("alert-card-template");

async function fetchServiceAlerts() {
    const response = await fetch('https://api-endpoint.mta.info/Dataservice/mtagtfsfeeds/camsys%2Fmnr-alerts.json');
    const data = await response.json();
    
    const updateTime = new Date(data.header.timestamp * 1000);
    document.getElementById("update-time").textContent = updateTime.toLocaleString();

    for (const item of data.entity) {
        console.log(`Alert: ${item.alert.header_text.translation[0].text}`);

        const clone = template.content.cloneNode(true);
        clone.querySelector(".alert-content").textContent = item.alert.header_text.translation[0].text;

        if (item.alert.header_text.translation[0].text.includes("New Haven") || item.alert.header_text.translation[0].text.includes("New Rochelle")) {
            clone.querySelector(".alert-card").classList.add("new-haven-alert");
        }

        if (item.alert.header_text.translation[0].text.includes("Poughkeepsie") || item.alert.header_text.translation[0].text.includes("Hudson")) {
            clone.querySelector(".alert-card").classList.add("hudson-alert");
        }

        document.querySelector(".alert-container").appendChild(clone);
    }
}
fetchServiceAlerts();