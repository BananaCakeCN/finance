const tripData = [
    {
        date: "2026/10/26-2026/11/01",
        center: [22.4199, 113.9406],
        zoom: 12,
        activities: [
            {
                transportation: false,
                time: "2026/10/26 - 2026/11/01",
                description: "Greater Bay Area",
                cost: "Total $CAD 3936.13",
                transport: "Plane, ferry, metro, railway",
                coord: [22.4, 114]
            }
        ]
    },{
        date: "2026/10/26",
        center: [49.192, -123.180],
        zoom: 12,
        activities: [
            {
                transportation: false,
                time: "01:05",
                description: "Vancouver (YVR) -> Hong Kong (HKG) Flight ",
                cost: "$CAD 853.40",
                transport: "N/A Start point",
                coord: [49.192, -123.180]
            }
        ]
    }, {
        date: "2026/10/27",
        center: [22.4199, 113.9406],
        zoom: 11,
        activities: [
            {
                transportation: false,
                time: "06:35",
                description: "Landing at Hong Kong",
                cost: "N/A",
                transport: "Plane",
                coord: [22.314, 113.919]
            }, {
                transportation: true,
                time: "08:15",
                description: "Sky Pier Port (HKG) -> Shekou Port (ZYK) Ferry",
                cost: "¥CNY 198.00",
                start: [22.318, 113.944],
                end: [22.472, 113.908]
            }, {
                transportation: false,
                time: "09:00",
                description: "China (Mainland) Immigration Clearance",
                cost: "N/A",
                transport: "Ferry",
                coord: [22.472, 113.908]
            }, {
                transportation: false,
                time: "09:30",
                description: "Breakfast - KFC",
                cost: "¥37.50",
                transport: "Walk (within the ferry terminal)",
                coord: [22.472, 113.908]
            }, {
                transportation: true,
                time: "10:10",
                description: "Taiziwan -> Huaqiang South (Metro Line 12 -> Line 11)",
                cost: "¥CNY 6.00",
                start: [22.476, 113.907],
                end: [22.540, 114.082]
            }, {
                transportation: false,
                time: "11:20",
                description: "Huaqiangbei electronics retail area",
                cost: "N/A",
                transport: "Metro",
                coord: [22.547, 114.081]
            }, {
                transportation: false,
                time: "12:00",
                description: "Lunch - Yitianwu Fantuan (Maoye Tiandi Store)",
                cost: "¥CNY 25.80",
                transport: "Walk",
                coord: [22.549, 114.081]
            }, {
                transportation: false,
                time: "14:00",
                description: "Hotel Check-in (Hampton by Hilton Shenzhen Futian Huaqiangbei) ",
                cost: "¥CNY 849.00 (Oct. 27th - Nov. 1st)",
                transport: "Walk",
                coord: [22.547, 114.087]
            }, {
                transportation: true,
                time: "14:10",
                description: "Huaqiang South -> Window of the World (Metro Line 11 -> Line 1)",
                cost: "¥CNY 4.00",
                start: [22.540, 114.082],
                end: [22.539, 113.969]
            }, {
                transportation: false,
                time: "14:40",
                description: "Window of the World",
                cost: "¥CNY 220.00",
                transport: "Metro",
                coord: [22.537, 113.969]
            }, {
                transportation: false,
                time: "18:30",
                description: "Theme Park Cafeteria",
                cost: "¥CNY 22.00",
                transport: "Walk",
                coord: [22.538, 113.968]
            }, {
                transportation: true,
                time: "21:00",
                description: "Window of the World -> Huaqiang South (Metro Line 1 -> Line 11) ",
                cost: "¥CNY 4.00",
                start: [22.539, 113.969],
                end: [22.540, 114.082]
            }, {
                transportation: false,
                time: "21:30",
                description: "Return to the hotel",
                cost: "N/A",
                transport: "Metro",
                coord: [22.547, 114.087]
            }
        ]
    }, {
        date: "2026/10/28",
        center: [22.5744, 114.1323],
        zoom: 13,
        activities: [
            {
                transportation: false,
                time: "08:20",
                description: "Breakfast - Puning Lao Jiang Guotiao Soup (Huaqiang South Branch)",
                cost: "¥CNY 10.30",
                transport: "Walk",
                coord: [22.539, 114.084]
            }, {
                transportation: true,
                time: "09:00",
                description: "Huaqiang South -> Shaibu -> Wutongshan Bus Depot (Metro Line 7 -> Metro Line 3 -> Bus 211 -> Bus B699",
                cost: "¥CNY 6.00",
                start: [22.540, 114.082],
                end: [22.592, 114.191]
            }, {
                transportation: false,
                time: "10:30",
                description: "Wutong Mountain Uphill",
                cost: "N/A",
                transport: "Metro",
                coord: [22.592, 114.191]
            }, {
                transportation: false,
                time: "13:00",
                description: "Haohanpo Square",
                cost: "N/A",
                transport: "Walk",
                coord: [22.578, 114.211]
            }, {
                transportation: false,
                time: "13:10",
                description: "Lunch - instant noodles from the convenience store",
                cost: "¥CNY 5.00",
                transport: "Walk",
                coord: [22.577, 114.210]
            }, {
                transportation: false,
                time: "14:00",
                description: "Xiaowutong",
                cost: "N/A",
                transport: "Walk",
                coord: [22.571, 114.189]
            }, {
                transportation: true,
                time: "16:00",
                description: "Wutongshan South -> Civic Center (Metro Line 2/8)",
                cost: "¥CNY 5.00",
                start: [22.561, 114.178],
                end: [22.543, 114.057]
            }, {
                transportation: false,
                time: "16:30",
                description: "Shenzhen Museum",
                cost: "N/A",
                transport: "Metro",
                coord: [22.547, 114.057]
            }, {
                transportation: false,
                time: "17:30",
                description: "Shenzhen Book City",
                cost: "N/A",
                transport: "Walk",
                coord: [22.549, 114.054]
            }, {
                transportation: false,
                time: "18:00",
                description: "Dinner - KFC",
                cost: "¥CNY 19.90",
                transport: "Walk",
                coord: [22.550, 114.055]
            }, {
                transportation: false,
                time: "18:20",
                description: "Lianhuashan Park",
                cost: "N/A",
                transport: "Walk",
                coord: [22.556, 114.054]
            }, {
                transportation: true,
                time: "19:00",
                description: "Children's Palace -> Huaqiang South (Metro Line 3 -> Line 7) ",
                cost: "¥CNY 4.00",
                start: [22.551, 114.056],
                end: [22.540, 114.082]
            }, {
                transportation: false,
                time: "17:20",
                description: "Return to the hotel",
                cost: "N/A",
                transport: "Metro",
                coord: [22.547, 114.087]
            }
        ]
    }, {
        date: "2026/10/29",
        center: [22.420, 114.198],
        zoom: 11,
        activities: [
            {
                transportation: false,
                time: "08:20",
                description: "Breakfast – Lamb Rice Noodles",
                cost: "¥CNY 13.80",
                transport: "Walk",
                coord: [22.539, 114.084]
            }, {
                transportation: true,
                time: "09:00",
                description: "Huaqiang Road -> Luohu (Metro Line 1)",
                cost: "¥CNY 3.00",
                start: [22.543, 114.080],
                end: [22.533, 114.113]
            }, {
                transportation: false,
                time: "09:15",
                description: "China (Mainland) Immigration Exit, Hong Kong Immigration Entry",
                cost: "N/A",
                transport: "Metro",
                coord: [22.530, 114.114]
            }, {
                transportation: true,
                time: "09:40",
                description: "Lok Wu -> Admiralty (East Rail Line)",
                cost: "$HKD 55.50",
                start: [22.528, 114.113],
                end: [22.280, 114.166]
            }, {
                transportation: true,
                time: "10:40",
                description: "Kennedy Road -> The Peak (Peak Tram)",
                cost: "$HKD 182.00/2",
                start: [22.277, 114.159],
                end: [22.271, 114.150]
            }, {
                transportation: false,
                time: "11:00",
                description: "Victoria Peak",
                cost: "N/A",
                transport: "Peak Tram",
                coord: [22.275, 114.144]
            }, {
                transportation: true,
                time: "11:30",
                description: "The Peak -> Kennedy Road (Peak Tram)",
                cost: "$HKD 182.00/2",
                start: [22.271, 114.150],
                end: [22.277, 114.159]
            }, {
                transportation: true,
                time: "11:50",
                description: "Murrary Road -> Causeway Bay (Tramways)",
                cost: "$HKD 3.30",
                start: [22.280, 114.162],
                end: [22.279, 114.183]
            }, {
                transportation: false,
                time: "12:05",
                description: "Causeway Bay",
                cost: "N/A",
                transport: "Tramways",
                coord: [22.279, 114.183]
            }, {
                transportation: false,
                time: "12:10",
                description: "Lunch - Ho Hung Kee (1946) Congee & Noodle Shop",
                cost: "$HKD 169.00",
                transport: "Walk",
                coord: [22.280, 114.184]
            }, {
                transportation: true,
                time: "14:00",
                description: "Exhibition Centre -> Tsim Sha Tsui (East Rail line -> Tsuen Wan Line)",
                cost: "$HKD 12.50",
                start: [22.282, 114.176],
                end: [22.297, 114.172]
            }, {
                transportation: false,
                time: "14:20",
                description: "Avenue of Stars",
                cost: "N/A",
                transport: "Walk",
                coord: [22.293, 114.173]
            }, {
                transportation: false,
                time: "14:40",
                description: "Hong Kong Museum of History",
                cost: "N/A",
                transport: "Walk",
                coord: [22.302, 114.177]
            }, {
                transportation: true,
                time: "16:00",
                description: "Hung Hom -> Tai Wo (East Rail Line)",
                cost: "$HKD 12.50",
                start: [22.302, 114.182],
                end: [22.451, 114.161]
            }, {
                transportation: false,
                time: "17:00",
                description: "Hong Kong Railway Museum",
                cost: "N/A",
                transport: "MTR",
                coord: [22.447, 114.165]
            }, {
                transportation: true,
                time: "17:30",
                description: "Tai Wo -> Lok Ma Chau (East Rail Line)",
                cost: "$HKD 30.00",
                start: [22.451, 114.161],
                end: [22.515, 114.066]
            }, {
                transportation: false,
                time: "17:50",
                description: "Hong Kong Immigration Exit, China (Mainland) Immigration Entry",
                cost: "N/A",
                transport: "MTR",
                coord: [22.517, 114.066]
            }, {
                transportation: false,
                time: "18:10",
                description: "Dinner - Hampton Restaurant Shenzhen Futian Port",
                cost: "¥CNY 46.00",
                transport: "Walk",
                coord: [22.519, 114.067]
            }, {
                transportation: true,
                time: "18:50",
                description: "Futian Checkpoint -> Huaqiang Road (Metro Line 10 -> Line 1) ",
                cost: "¥CNY 2.00",
                start: [22.518, 114.068],
                end: [22.540, 114.082]
            }, {
                transportation: false,
                time: "19:10",
                description: "Return to the hotel",
                cost: "N/A",
                transport: "Metro",
                coord: [22.547, 114.087]
            }
        ]
    }, {
        date: "2026/10/30",
        center: [22.420, 114.198],
        zoom: 11,
        activities: [
            {
                transportation: true,
                time: "08:25",
                description: "Huaqiang South -> Futian (Metro Line 11)",
                cost: "¥CNY 2.00",
                start: [22.540, 114.082],
                end: [22.543, 114.048]
            }, {
                transportation: false,
                time: "09:45",
                description: "Sanliang Rice Noodles",
                cost: "¥13.60",
                transport: "Metro",
                coord: [22.543, 114.048]
            }, {
                transportation: true,
                time: "09:25",
                description: "Futian -> Hong Kong West Kowloon (High Speed Rail First Class)",
                cost: "¥CNY 204.00",
                start: [22.541, 114.051],
                end: [22.304, 114.165]
            }, {
                transportation: false,
                time: "09:40",
                description: "China (Mainland) Immigration Exit, Hong Kong Immigration Entry",
                cost: "N/A",
                transport: "High Speed Rail",
                coord: [22.304, 114.165]
            }, {
                transportation: false,
                time: "10:00",
                description: "Hong Kong Palace Museum",
                cost: "$HKD 70.00",
                transport: "Walk",
                coord: [22.302, 114.155]
            }, {
                transportation: false,
                time: "11:30",
                description: "Mong Kok",
                cost: "N/A",
                transport: "Walk",
                coord: [22.320, 114.170]
            }, {
                transportation: false,
                time: "12:00",
                description: "Lunch – Tong Kee Noodles",
                cost: "$HKD 40.00",
                transport: "Walk",
                coord: [22.319, 114.170]
            }, {
                transportation: true,
                time: "12:30",
                description: "Grand Plaza -> Shing Fung Road (Citybus 20A)",
                cost: "$HKD 7.50",
                start: [22.318, 114.170],
                end: [22.311, 114.208]
            }, {
                transportation: false,
                time: "13:10",
                description: "Kai Tak Greenway",
                cost: "N/A",
                transport: "Bus",
                coord: [22.314, 114.205]
            }, {
                transportation: true,
                time: "14:00",
                description: "One Victoria -> Kai Tak Station (Citybus 22X)",
                cost: "$HKD 7.30",
                start: [22.313, 114.207],
                end: [22.330, 114.199]
            }, {
                transportation: true,
                time: "14:20",
                description: "Kai Tak -> Ma On Shan (Tuen Ma Line)",
                cost: "$HKD 14.00",
                start: [22.330, 114.199],
                end: [22.425, 114.231]
            }, {
                transportation: false,
                time: "14:30",
                description: "Marine Square",
                cost: "N/A",
                transport: "MTR",
                coord: [22.428, 114.231]
            }, {
                transportation: false,
                time: "15:30",
                description: "Penfold Park",
                cost: "N/A",
                transport: "Walk",
                coord: [22.399, 114.207]
            }, {
                transportation: false,
                time: "16:00",
                description: "Kau To Village",
                cost: "N/A",
                transport: "Walk",
                coord: [22.41, 114.2]
            }, {
                transportation: true,
                time: "17:00",
                description: "University -> Lok Wu (East Rail Line)",
                cost: "$HKD 31.00",
                start: [22.414, 114.21],
                end: [22.528, 114.113]
            }, {
                transportation: false,
                time: "17:30",
                description: "Hong Kong Immigration Exit, China (Mainland) Immigration Entry",
                cost: "N/A",
                transport: "MTR",
                coord: [22.530, 114.114]
            }, {
                transportation: true,
                time: "17:50",
                description: "Luohu -> Huaqiang Road (Metro Line 1)",
                cost: "¥CNY 3.00",
                start: [22.533, 114.113],
                end: [22.543, 114.080]
            }, {
                transportation: false,
                time: "18:20",
                description: "Dinner – Jiaojiwang",
                cost: "¥CNY 34.90",
                transport: "Walk",
                coord: [22.549, 114.078]
            }, {
                transportation: false,
                time: "19:10",
                description: "Return to the hotel",
                cost: "N/A",
                transport: "Metro",
                coord: [22.547, 114.087]
            }
        ]
    }, {
        date: "2026/10/31",
        center: [22.573, 114.186],
        zoom: 12,
        activities: [
            {
                transportation: false,
                time: "08:20",
                description: "Breakfast - Changhong No. 1 Puning Rice Noodle Roll (Chiwei Branch)",
                cost: "¥14.00",
                transport: "Walk",
                coord: [22.537, 114.076]
            }, {
                transportation: true,
                time: "09:00",
                description: "Huaqiang South -> Shatoujiao (Metro Line 7 -> Line 2/8)",
                cost: "¥CNY 5.00",
                start: [22.540, 114.082],
                end: [22.557, 114.218]
            }, {
                transportation: false,
                time: "09:50",
                description: "Zhong-Ying Street Historical Museum",
                cost: "N/A",
                transport: "Walk",
                coord: [22.544, 114.226]
            }, {
                transportation: false,
                time: "11:00",
                description: "Chung Ying Street",
                cost: "N/A",
                transport: "Walk",
                coord: [22.547, 114.226]
            }, {
                transportation: false,
                time: "11:20",
                description: "Lunch - Yipin Claypot Rice",
                cost: "~¥CNY 25.00",
                transport: "Walk",
                coord: [22.547, 114.227]
            }, {
                transportation: false,
                time: "12:00",
                description: "Yantian Central Park",
                cost: "N/A",
                transport: "Walk",
                coord: [22.555, 114.235]
            }, {
                transportation: true,
                time: "12:30",
                description: "Haishan -> Dameisha (Line 2/8)",
                cost: "¥CNY 4.00",
                start: [22.558, 114.233],
                end: [22.597, 114.303]
            }, {
                transportation: false,
                time: "13:10",
                description: "OCT East Knight Valley",
                cost: "¥CNY 40.00",
                transport: "Walk",
                coord: [22.613, 114.298]
            }, {
                transportation: false,
                time: "18:00",
                description: "Dinner – Hefu Noodles",
                cost: "~¥CNY 45.00",
                transport: "Walk",
                coord: [22.6, 114.303]
            }, {
                transportation: true,
                time: "18:40",
                description: "Dameisha -> Huaqiang South (Metro Line 2/8 -> Line 7)",
                cost: "¥CNY 7.00",
                start: [22.597, 114.303],
                end: [22.540, 114.082]
            }, {
                transportation: false,
                time: "19:10",
                description: "Return to the hotel",
                cost: "N/A",
                transport: "Metro",
                coord: [22.547, 114.087]
            }
        ]
    }, {
        date: "2026/11/01",
        center: [22.4199, 113.9406],
        zoom: 11,
        activities: [
            {
                transportation: true,
                time: "08:30",
                description: "Huaqiang South -> Shenzhen Bay Checkpoint (Metro Line 11 -> Line 13)",
                cost: "¥CNY 5.00",
                start: [22.540, 114.082],
                end: [22.506, 113.946]
            }, {
                transportation: false,
                time: "09:00",
                description: "Breakfast - Old Duck Vermicelli Soup & Handmade Potstickers",
                cost: "¥12.90",
                transport: "Metro",
                coord: [22.498, 113.934]
            }, {
                transportation: false,
                time: "09:30",
                description: "China (Mainland) Immigration Exit, Hong Kong Immigration Entry",
                cost: "N/A",
                transport: "Walk",
                coord: [22.504, 113.944]
            }, {
                transportation: true,
                time: "09:50",
                description: "Shenzhen Bay Port -> Tuen Mun Town Centre (Citybus B3X)",
                cost: "$HKD 16.50",
                start: [22.504, 113.944],
                end: []
            }, {
                transportation: false,
                time: "10:30",
                description: "Tuen Mun Park",
                cost: "N/A",
                transport: "Walk",
                coord: [22.391, 113.976]
            }, {
                transportation: false,
                time: "11:30",
                description: "Watergate Chicken Rice (Tuen Mun)",
                cost: "$HKD 66.00",
                transport: "Walk",
                coord: [22.392, 113.976]
            }, {
                transportation: true,
                time: "12:45",
                description: "Tuen Mun -> Tung Chung (Ferry)",
                cost: "$HKD 19.50",
                start: [22.372, 113.966],
                end: [22.294, 113.94]
            }, {
                transportation: false,
                time: "13:15",
                description: "Tung Chung",
                cost: "N/A",
                transport: "Walk",
                coord: [22.29, 113.941]
            }, {
                transportation: true,
                time: "14:00",
                description: "Tung Chung -> Ngongping -> Tung Chung(Cable Car)",
                cost: "$HKD 420.00",
                start: [22.29, 113.939],
                end: [22.256, 113.902]
            }, {
                transportation: false,
                time: "16:00",
                description: "Canton House",
                cost: "~$HKD 200.00",
                transport: "Walk",
                coord: [22.29, 113.94]
            }, {
                transportation: true,
                time: "20:00",
                description: "Tung Chung Crescent -> Airport (Citybus N11)",
                cost: "$HKD 5.30",
                start: [22.287, 113.94],
                end: [22.316, 113.936]
            }, {
                transportation: false,
                time: "23:05",
                description: "Hong Kong (HKG) -> Vancouver (YVR) Flight",
                cost: "N/A",
                transport: "Flight",
                coord: [22.315, 113.934]
            }
        ]
    }
];
const map = L.map("map");
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {attribution: "OpenStreetMap | Coby Qiu"}).addTo(map);
let markers = [];
let line;
let currentDay = 0;
function clearMap() {
    markers.forEach(marker => map.removeLayer(marker));
    if(line != undefined){
        map.removeLayer(line);
    }
    markers = [];
}
function renderDay(index) {
    clearMap();
    const data = tripData[index];
    document.getElementById("dayTitle").innerText = (index == 0 ? 'Trip overview' : 'Day ' + index + ' (' + data.date + ')');
    const activityList = document.getElementById("activityList");
    activityList.innerHTML = "";
    map.setView(data.center, data.zoom);
    data.activities.forEach(activity => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
        <div class="card-item">
            <span class="highlight">Time：</span>${activity.time}
        </div>
        <div class="card-item">
            <span class="highlight">Event：</span>${activity.description}
        </div>
        <div class="card-item">
            <span class="highlight">Cost：</span>${activity.cost}
        </div>
        `;
        if(!activity.transportation){
            card.innerHTML += `
            <div class="card-item">
                <span class="highlight">Transportation Method：</span>${activity.transport}
            </div>
            `
        }
        activityList.appendChild(card);
        if(activity.transportation){
            const linea = L.polyline([activity.start, activity.end], {weight: 5});
            card.onmouseover = function(){
                if(line != undefined){
                    map.removeLayer(line);
                }
                linea.addTo(map);
                line = linea;
            }
        }else{
            const marker = L.marker(activity.coord).addTo(map)
            .bindPopup(`
                <b>${activity.description}</b><br>
                Time: ${activity.time}
            `);
            markers.push(marker);
            card.onmouseover = function(){
                marker.openPopup();
            }
        }
    });
}
document.addEventListener("keydown", e => {
    if (e.key === "ArrowRight") {
        currentDay++;

        if (currentDay >= tripData.length) {
        currentDay = 0;
        }

        renderDay(currentDay);
    }

    if (e.key === "ArrowLeft") {
        currentDay--;

        if (currentDay < 0) {
        currentDay = tripData.length - 1;
        }

        renderDay(currentDay);
    }
});
renderDay(currentDay);