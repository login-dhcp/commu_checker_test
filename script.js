function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


var replaceBlankTo = '_';
var idSeperator = '-';
const config = {
    'Icons': {
        '사쿠라기 마노': 'ManoIcon.webp',
        '카자노 히오리': 'HioriIcon.webp',
        '하치미야 메구루': 'MeguruIcon.webp',
        '츠키오카 코가네': 'KoganeIcon.webp',
        '타나카 마미미': 'MamimiIcon.webp',
        '시라세 사쿠야': 'SakuyaIcon.webp',
        '미츠미네 유이카': 'YuikaIcon.webp',
        '유코쿠 키리코': 'KirikoIcon.webp',
        '코미야 카호': 'KahoIcon.webp',
        '소노다 치요코': 'ChiyokoIcon.webp',
        '사이죠 쥬리': 'JuriIcon.webp',
        '모리노 린제': 'RinzeIcon.webp',
        '아리스가와 나츠하': 'NatsuhaIcon.webp',
        '오사키 아마나': 'AmanaIcon.webp',
        '오사키 텐카': 'TenkaIcon.webp',
        '쿠와야마 치유키': 'ChiyukiIcon.webp',
        '세리자와 아사히': 'AsahiIcon.webp',
        '마유즈미 후유코': 'FuyukoIcon.webp',
        '이즈미 메이': 'MeiIcon.webp',
        '아사쿠라 토오루': 'ToruIcon.webp',
        '히구치 마도카': 'MadokaIcon.webp',
        '후쿠마루 코이토': 'KoitoIcon.webp',
        '이치카와 히나나': 'HinanaIcon.webp',
        '나나쿠사 니치카': 'NichikaIcon.webp',
        '아케타 미코토': 'MikotoIcon.webp',
        'None': 'PIcon.webp',
        '시나리오': 'PIcon.webp',
    },
}

$(document).ready(function(e) {
    init();
});

async function init() {
    $.getJSON("commu_list.json", function(json) {
        datasetToHTML(parse_raw(json));
    });
    await sleep(1000);
    getStateFromUrl();

    await sleep(1000);
    console.log('finished');

}

function parse_raw(data) {
    var new_data = JSON.parse(JSON.stringify(data).replace(/\s+|\s+/g,`${replaceBlankTo}`));
    return new_data;
}

function commuItemToHTML(commudata) {
    var commuHTML = '';
    commuHTML += `<span class="commuItem">\n`;
    commuHTML += `<span class="commuIcon" id="div${idSeperator}${commudata['Title']}" data-visible=false>\n`;
    commuHTML += `<img id="icon${idSeperator}${commudata['Title']}" 
                    alt="${commudata['Icon']}" 
                    src="${commudata['Icon']}" height="96">`;
    commuHTML += `<span id="desc${idSeperator}${commudata['Title']}">0/0</span>`
    commuHTML += `<dialog id="dialog${idSeperator}${commudata['Title']}" class="commudialog">`;
    commuHTML += `<a href="${commudata['Link']}" target="_blank">${commudata['Title']}<br></a>`;
    for (var commu of commudata['Commus']) {
        commuHTML += `<label><input type="checkbox" id="btn${idSeperator}${commudata['Title']}${idSeperator}${commu['NameJP']}">${commu['NameJP']}</label>`;
        commuHTML += `&nbsp;<a href="${commu['Link']}" target="_blank">링크<br></a>`
    }
    commuHTML += `</dialog>`;
    commuHTML += `</span>`;
    commuHTML += `</span>`;

    return commuHTML;
}

function datasetToHTML(data) {
    // 1. build commutype dialogs
    // 1.1. get commutype keys
    var commuTypes = new Set();
    for (var commu of data) {
        var commuType = commu['Type'];
        commuTypes.add(commuType);
    }
    commuTypes = new Set(Array.from(commuTypes).sort());

    // 1.2. make button & dialog
    for (var commuType of commuTypes) {
        var buttonID = `btn${idSeperator}${commuType}`;
        var dialogID = `dialog${idSeperator}${commuType}`;
        var dialogIconPath = `./src/Type_${commuType}.png`;
        var dialogHTML = '';
        dialogHTML += `<input type="image" id="${buttonID}" value="${commuType}" src="${dialogIconPath}" height="40">`;
        dialogHTML += `<br>`;
        dialogHTML += `<dialog id="${dialogID}" class="customDialog">`;
        dialogHTML += `<span>CommuType: ${commuType}<br></span>`;
        dialogHTML += `</dialog>`;
        document.getElementById('commu_list').insertAdjacentHTML('beforeend', dialogHTML);
        document.getElementById(buttonID).addEventListener('click', function(e) {
            document.getElementById(this.id.replace('btn', 'dialog')).showModal();
        });
    }

    // 2. build commuCategory dialogs
    // 2.1. get commuCategory keys
    var commuCategories = new Set();
    for (var commu of data) {
        var item = `${commu['Type']}|||${commu['Category']}`;
        commuCategories.add(item);
    }
    commuCategories = new Set(Array.from(commuCategories).sort());

    // 2.2. make button & dialog
    for (var item of commuCategories) {
        var item_parse = item.split('|||');
        var commuType = item_parse[0];
        var commuCategory = item_parse[1];
        var buttonID = `btn${idSeperator}${commuType}${idSeperator}${commuCategory}`;
        var dialogID = `dialog${idSeperator}${commuType}${idSeperator}${commuCategory}`;
        var dialogIconPath = `./src/Category_${commuCategory}.png`;
        var dialogHTML = ``;

        dialogHTML += `<input type="image" id="${buttonID}" value="${commuCategory}" src="${dialogIconPath}" height="96">`;
        dialogHTML += `<br>`;
        dialogHTML += `${commuCategory}`;
        dialogHTML += `<br>`;
        dialogHTML += `<dialog id="${dialogID}" class="customDialog">`;
        dialogHTML += `<span>Category: ${commuCategory}<br></span>`;
        dialogHTML += `</dialog>`;
        document.getElementById(`dialog${idSeperator}${commuType}`).insertAdjacentHTML('beforeend', dialogHTML);
        document.getElementById(buttonID).addEventListener('click', function(e) {
            document.getElementById(this.id.replace('btn', 'dialog')).showModal();
        });
    }

    // 3. add Commus
    for (var commu of data) {
        var dialogID = `dialog${idSeperator}${commu['Type']}${idSeperator}${commu['Category']}`;
        document.getElementById(dialogID).insertAdjacentHTML('beforeend', commuItemToHTML(commu));
        document.getElementById(`icon-${commu['Title']}`).addEventListener('click', function(e) {
            document.getElementById(this.id.replace('icon', 'dialog')).showModal();
        });

        // 3.1. 각 commu checkbox에 parent dialog icon opacity 설정 + count checkbox checked num
        for (var smallCommu of commu['Commus']) {
            var smallCommuID = `btn${idSeperator}${commu['Title']}${idSeperator}${smallCommu['NameJP']}`;
            document.getElementById(smallCommuID).addEventListener('change', function() {
                var commuTitle = this.id.split(`${idSeperator}`)[1]; // 0 for btn, 1 for title
                var divID = `div${idSeperator}${commuTitle}`;

                var all = document.querySelectorAll(`input[id^=btn${idSeperator}${commuTitle}]`).length;
                var checked = document.querySelectorAll(`input[id^=btn${idSeperator}${commuTitle}]:checked`).length;

                if (checked === all) {
                    document.getElementById(divID).dataset.visible = true;
                } else {
                    document.getElementById(divID).dataset.visible = false;
                }

                var span_ID = `desc${idSeperator}${commuTitle}`;
                document.getElementById(span_ID).innerHTML = `${checked}/${all}`;
            })
        }

    }

    // 3.1. Split Commus with cardType, rarity 
    // TODO
}

function generateUrl() {
    // 1. 쿼리 파라미터를 제외한 현재 URL만 취득
    var url = document.location.href;
    if (url.indexOf("?") != -1) {
        url = url.substring(0, url.indexOf("?"));
    }

    // 2. 파라미터를 URL에 추가
    url += `?state=`
    var selected = document.querySelectorAll('input[type="checkbox"]:checked');
    for (let i = 0; i < selected.length; i++) {
        var key = selected[i].getAttribute('id');
        url += `${key}&`
    }
    // 4. URL의 마지막에 「&」가 있는 경우 마지막의 「&」를 삭제
    if (url.slice(-1) == "&") {
        url = url.substr(0, url.length - 1);
    }
    // 5. URL을 표시
    // $(labelId).text(url);
    console.log(url);
    alert(url);
}

function getStateFromUrl() {
    var url = document.location.href;
    if (url.includes('?state=')) {
        var states = url.split('?state=')[1];
        states = states.split('?')[0];
        if (states.length > 0) {
            var checkboxesToCheck = states.split('&');
            for (var i = 0; i < checkboxesToCheck.length; i++) {
                var key = checkboxesToCheck[i];
                key = decodeURIComponent(key);
                var val = document.getElementById(key);
                console.log(i,key, val);
                $(val).prop('checked', false).click();
            }
        }
    }
}