"use strict";

function nadolig() {
    const nadoligEl = document.getElementById('nadolig');
    const canghennau = cynhyrchuCanghennau();
    const boncyff = cynhyrchuBoncyff();

    canghennau.forEach(c => nadoligEl.appendChild(c));
    boncyff.forEach(c => nadoligEl.appendChild(c));
}

function cynhyrchuCanghennau() {
    const uchder = 20;
    const lledUchaf = Math.round(uchder / 1);

    const lliwiau = [ 'red', 'lightGreen' , 'blue', 'cyan', 'purple', 'magenta', 'gold', 'silver' ];
    let idxLliw = 0;
    const gwyrdd = () => 'green';
    const arHap = () => {
        const idx = idxLliw;
        idxLliw = (idxLliw + 1) % lliwiau.length;
        return lliwiau[idx];
    };

    const rhannau = [
        { nod: '<', lliw: gwyrdd },
        { nod: '>', lliw: gwyrdd },
        { nod: 'X', lliw: gwyrdd },
        { nod: '/', lliw: gwyrdd },
        { nod: '\\', lliw: gwyrdd },
        { nod: 'o', lliw: arHap },
        { nod: '+', lliw: arHap }
    ];

    const nolIdxRhanNesaf = (idxDiwethaf) => {
        while (true) {
            const idx = Math.floor(Math.random()*rhannau.length);
            if (idx != idxDiwethaf) return idx;
        }
    };

    const elements = [];
    for (let u = 0 ; u<uchder ; u++) {
        const lled = Math.round(lledUchaf*(u/uchder));
        let idxDiwethaf = -1;
        for (let ll = 0 ; ll <= lled ; ll++) {
            const el = document.createElement('span');
            if (u==0) {
                el.setAttribute('style', 'color: gold; font-weight: bold;');
                el.textContent = '*';
            } else {
                idxDiwethaf = nolIdxRhanNesaf(idxDiwethaf);
                const rhan = rhannau[idxDiwethaf];
                el.textContent = rhan.nod;
                el.setAttribute('style', `color: ${rhan.lliw()};`);
            }
            elements.push(el);
        }
        elements.push(document.createElement('br'));
    }
    return elements;
}

function cynhyrchuBoncyff() {
    const elements = [];
    for (let n = 0; n < 1 ; n++) {
        const el = document.createElement('span');
        el.setAttribute('style', 'color: brown;');
        el.textContent = '| |';
        elements.push(el);
        elements.push(document.createElement('br'));
    }
    return elements;
}


document.addEventListener('DOMContentLoaded', nadolig);