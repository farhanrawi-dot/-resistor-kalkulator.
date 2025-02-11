const colors = [
    { name: "Hitam", value: 0, multiplier: 1 },
    { name: "Cokelat", value: 1, multiplier: 10 },
    { name: "Merah", value: 2, multiplier: 100 },
    { name: "Oranye", value: 3, multiplier: 1000 },
    { name: "Kuning", value: 4, multiplier: 10000 },
    { name: "Hijau", value: 5, multiplier: 100000 },
    { name: "Biru", value: 6, multiplier: 1000000 },
    { name: "Ungu", value: 7, multiplier: 10000000 },
    { name: "Abu-abu", value: 8, multiplier: 100000000 },
    { name: "Putih", value: 9, multiplier: 1000000000 }
];

// Mengisi dropdown dengan warna resistor
function populateDropdown(id) {
    let dropdown = document.getElementById(id);
    colors.forEach(color => {
        let option = document.createElement("option");
        option.value = color.name;
        option.textContent = color.name;
        dropdown.appendChild(option);
    });
}

// Mengisi dropdown saat halaman dimuat
window.onload = function() {
    populateDropdown("band1");
    populateDropdown("band2");
    populateDropdown("multiplier");
};

// Menghitung nilai resistor dan menyesuaikan satuan
function calculateResistance() {
    let band1 = document.getElementById("band1").value;
    let band2 = document.getElementById("band2").value;
    let multiplier = document.getElementById("multiplier").value;

    let firstValue = colors.find(color => color.name === band1).value;
    let secondValue = colors.find(color => color.name === band2).value;
    let multiplierValue = colors.find(color => color.name === multiplier).multiplier;

    let resistance = (firstValue * 10 + secondValue) * multiplierValue;
    
    let formattedResistance;
    if (resistance >= 1000000) {
        formattedResistance = (resistance / 1000000) + " MΩ";  // Mega Ohm
    } else if (resistance >= 1000) {
        formattedResistance = (resistance / 1000) + " KΩ";  // Kilo Ohm
    } else {
        formattedResistance = resistance + " Ω";  // Ohm
    }

    document.getElementById("result").textContent = formattedResistance;
}
