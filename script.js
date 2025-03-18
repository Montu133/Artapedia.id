document.addEventListener("DOMContentLoaded", () => {
    const members = ["SENDI", "SRI", "NIA", "BAPAK", "MEMEK", "DINDA", "IWE DIKE", "DIKA", "PUJI", "RISKI"];
    const membersContainer = document.getElementById("members");
    
    members.forEach(member => {
        const btn = document.createElement("button");
        btn.textContent = `Cek ${member}`;
        btn.addEventListener("click", () => cekKuota(member));
        membersContainer.appendChild(btn);
    });
});

function cekKuota(member) {
    alert(`Kuota untuk ${member} sedang diproses...`);
}