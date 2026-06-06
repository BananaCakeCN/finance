function svgGraph(width, height, data) {
    const n = data.length;
    const minX = 1;
    const maxX = n;
    let minY = Math.min(...data.flat());
    let maxY = Math.max(...data.flat());
    const pad = 50;
    const mapX = x => pad + (x - minX) / (maxX - minX) * (width - 2 * pad);
    const mapY = y => height - pad - (y - minY) / (maxY - minY) * (height - 2 * pad);
    let path1 = "";
    let path2 = "";
    let path3 = "";
    for (let i = 0; i < n; i++) {
        const x = mapX(i + 1);
        path1 += (i === 0 ? "M" : "L") + x + " " + mapY(data[i][0]) + " ";
        path2 += (i === 0 ? "M" : "L") + x + " " + mapY(data[i][1]) + " ";
        path3 += (i === 0 ? "M" : "L") + x + " " + mapY(data[i][2]) + " ";
    }
    let xLabels = "";
    const xSteps = Math.min(10, n - 1);
    for (let i = 0; i <= xSteps; i++) {
        const idx = Math.round(i * (n - 1) / xSteps);
        const x = mapX(idx + 1);
        xLabels += `
            <text x="${x}" y="${height - pad + 20}" font-size="10" text-anchor="middle">
                ${idx + 1}
            </text>
        `;
        if(i == 10){
            xLabels += `
                <text x="${x}" y="${height - pad + 35}" font-size="14" text-anchor="middle">
                    Month
                </text>
            `
        }
    }
    let legend = `
        <g font-size="12">
            <line x1="55" y1="40" x2="75" y2="40" stroke="blue" stroke-width="3"/>
            <text x="80" y="44" fill="blue">
                Interest
            </text>
            <line x1="135" y1="40" x2="155" y2="40" stroke="red" stroke-width="3"/>
            <text x="160" y="44" fill="red">
                Principal
            </text>
            <line x1="220" y1="40" x2="240" y2="40" stroke="green" stroke-width="3"/>
            <text x="245" y="44" fill="green">
                Monthly Payment
            </text>
        </g>
    `;
    let yLabels = "";
    for (let i = 0; i <= 10; i++) {
        const v = minY + (maxY - minY) * i / 10;
        const y = mapY(v);
        yLabels += `
            <text x="${pad - 10}" y="${y + 4}" font-size="10" text-anchor="end">
                ${Math.round(v)}
            </text>
        `;
        if(i == 10){
            yLabels += `
                <text x="${pad - 10}" y="${y - 10}" font-size="14" text-anchor="end">
                    Paid
                </text>
            `
        }
    }
    let tooltip = "";
    tooltip = `
    <g id="tip" visibility="hidden">
        <rect id="tipBox" fill="white" stroke="black" opacity="0.9"></rect>
        <text id="tipText" font-size="12"></text>
    </g>
    `;
    return `
    <svg id="chart" xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
        <rect x="${pad}" y="${pad}"
            width="${width - 2 * pad}" height="${height - 2 * pad}"
            fill="none" stroke="#000"/>
        <path d="${path1}" fill="none" stroke="blue" stroke-width="2"/>
        <path d="${path2}" fill="none" stroke="red" stroke-width="2"/>
        <path d="${path3}" fill="none" stroke="green" stroke-width="2"/>
        ${legend}
        ${xLabels}
        ${yLabels}
        ${tooltip}
        <rect x="${pad}" y="${pad}" width="${width - 2 * pad}" height="${height - 2 * pad}" fill="transparent"
            onmousemove="(function(evt){
                const svg = document.getElementById('chart');
                const x = evt.offsetX;
                const y = evt.offsetY;
                const pad = ${pad};
                const innerW = ${width - 2 * pad};
                let i = Math.round(
                    (${n - 1}) * (x - pad) / innerW
                );
                i = Math.max(0, Math.min(${n - 1}, i));
                const y1 = ${JSON.stringify(data)}[i][0];
                const y2 = ${JSON.stringify(data)}[i][1];
                const y3 = ${JSON.stringify(data)}[i][2];
                const tip = document.getElementById('tip');
                const text = document.getElementById('tipText');
                const box = document.getElementById('tipBox');
                let tx = x + 10;
                let ty = y + 10;
                const boxW = 420;
                const boxH = 30;
                const svgW = ${width};
                const svgH = ${height};
                if (tx + boxW > svgW) tx = svgW - boxW - 5;
                if (ty + boxH > svgH) ty = svgH - boxH - 5;
                if (tx < 0) tx = 5;
                if (ty < 0) ty = 5;
                text.innerHTML = 'Month: ' + (i + 1) + ' Interest: $' + y1 + ' Principal: $' + y2 + ' Total Payment: $' + y3;
                text.setAttribute('x', tx);
                text.setAttribute('y', ty + 15);
                box.setAttribute('x', tx - 5);
                box.setAttribute('y', ty - 5);
                box.setAttribute('width', boxW);
                box.setAttribute('height', boxH);
                tip.setAttribute('visibility','visible');
            })(event)"
            onmouseout="document.getElementById('tip').setAttribute('visibility','hidden')"
        />
    </svg>
    `;
}
let data = [];
var pv = 415920;
var total = 0;
var interest = Math.pow((1 + 0.0464/2), 1/6) - 1;
var pmt = pv * ((interest * Math.pow(1 + interest, 300)) / (Math.pow(1 + interest, 300) - 1));
for(var i = 0; i < 300; i++){
    data.push([Math.round(pv * interest * 100) / 100, Math.round((pmt - pv * interest) * 100) / 100, Math.round(pmt * 100) / 100]);
    total += pv * interest;
    pv -= pmt - pv * interest;
}
document.getElementById('chart').innerHTML = svgGraph(800, 500, data);
document.getElementById('total').innerText = '$' + Math.round(total * 100) / 100;
var map = L.map('map').setView([62.448, -114.360], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
map.attributionControl.setPrefix('');
map.scrollWheelZoom.disable();
var marker = L.marker([62.44808, -114.35995]).addTo(map);
document.getElementById('incr').oninput = function(){
    if(this.value < 0){
        this.value = 0;
    }
    if(this.value > 10){
        this.value = 10;
    }
}
document.getElementById('calc').onclick = function(){
    pv = 415920;
    total = 0;
    interest = Math.pow((1 + 0.0464/2), 1/6) - 1;
    pmt = pv * ((interest * Math.pow(1 + interest, 300)) / (Math.pow(1 + interest, 300) - 1));
    data = [];
    for(var i = 0; i < 300; i++){
        if(i == 36){
            interest = Math.pow((1 + (parseFloat(document.getElementById('incr').value)/100 + 0.0464)/2), 1/6) - 1;
            pmt = pv * ((interest * Math.pow(1 + interest, 264)) / (Math.pow(1 + interest, 264) - 1));
        }
        data.push([Math.round(pv * interest * 100) / 100, Math.round((pmt - pv * interest) * 100) / 100, Math.round(pmt * 100) / 100]);
        total += pv * interest;
        pv -= pmt - pv * interest;
    }
    document.getElementById('chart').innerHTML = svgGraph(800, 500, data);
    document.getElementById('re').innerHTML = '<p>New Monthly Payment: <b>$' + data[299][2] + '</b></p>New Total Interest Paid: <b>$' + Math.round(total * 100) / 100 + '</b></p>';
    document.getElementById('renew').innerText = Math.round((data[299][2] / 12089.48) * 100) + '%';
}
document.getElementById('appr').oninput = function(){
    if(this.value < 0){
        this.value = 0;
    }
    if(this.value > 50){
        this.value = 50;
    }
}
document.getElementById('yrs').oninput = function(){
    if(this.value < 2){
        this.value = 2;
    }
    if(this.value > 20){
        this.value = 20;
    }
    this.value = parseInt(this.value);
    document.getElementById('yrf').innerText = this.value;
}
document.getElementById('calc2').onclick = function(){
    var need = 0;
    data = [];
    pv = 415920;
    total = 0;
    interest = Math.pow((1 + 0.0464/2), 1/6) - 1;
    pmt = pv * ((interest * Math.pow(1 + interest, 300)) / (Math.pow(1 + interest, 300) - 1));
    for(var i = 0; i < 300; i++){
        if(i == 12 * parseInt(document.getElementById('yrs').value)){
            need = pv;
        }
        data.push([Math.round(pv * interest * 100) / 100, Math.round((pmt - pv * interest) * 100) / 100, Math.round(pmt * 100) / 100]);
        total += pv * interest;
        pv -= pmt - pv * interest;
    }
    document.getElementById('chart').innerHTML = svgGraph(800, 500, data);
    document.getElementById('re2').innerHTML = '<p>Current value of the property: <b>$' + Math.round(519900 * (1 + parseFloat(document.getElementById('appr').value) / 100) * 100) / 100 + '</b></p><p>Amount of money that has already paid to the bank for the first ' + document.getElementById('yrs').value + ' years: <b>$' + 2334.49 * 12 * parseInt(document.getElementById('yrs').value) + '</b></p><p>Amount of money remaining that needs to be paid: <b>$' + Math.round(need * 100) / 100 + '</b></p><p>Down payment: <b>$103,980.00</b></p><p>Total profit / cost (shown as a negative number): <b>$' + Math.round((519900 * (1 + parseFloat(document.getElementById('appr').value) / 100) - 103980 - 2334.49 * 12 * parseInt(document.getElementById('yrs').value) - Math.round(need * 100) / 100) * 100) / 100 + '</b></p>';
    document.getElementById('re').innerHTML = '';
    document.getElementById('content').scrollBy(0, 200)
}