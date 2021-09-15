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
    var raw_data;
    // $.ajax({
    //     type: "GET",
    //     async: false,
    //     url: "./commu_list.json",
    //     dataType: "json",
    //     success: function(data) { 
    //         raw_data = data;
    //     }
    // });

    raw_data = [{
        "Type": "Event",
        "Category": "Scenario",
        "Title": "Light up the illumination",
        "Icon": "https://shinycolors.info/w/images/b/be/Light up the illumination_Banner.png",
        "Link": "https://shinycolors.info/wiki/Light up the illumination",
        "Commus": [
            {
                "NameJP": "輝きの始まり",
                "Link": "https://shinycolors.info/wiki/Light up the illumination/輝きの始まり"
            },
            {
                "NameJP": "チカチカ、小さく瞬くみたいな",
                "Link": "https://shinycolors.info/wiki/Light up the illumination/チカチカ、小さく瞬くみたいな"
            },
            {
                "NameJP": "翳る前に、曇る前に",
                "Link": "https://shinycolors.info/wiki/Light up the illumination/翳る前に、曇る前に"
            },
            {
                "NameJP": "もう１度、ここから",
                "Link": "https://shinycolors.info/wiki/Light up the illumination/もう１度、ここから"
            },
            {
                "NameJP": "１番輝く、そのために",
                "Link": "https://shinycolors.info/wiki/Light up the illumination/１番輝く、そのために"
            }
        ]
    },
    {
        "Type": "Event",
        "Category": "Scenario",
        "Title": "廻る歯車、運命の瞬間",
        "Icon": "https://shinycolors.info/w/images/8/84/廻る歯車、運命の瞬間_Banner.png",
        "Link": "https://shinycolors.info/wiki/廻る歯車、運命の瞬間",
        "Commus": [
            {
                "NameJP": "走り続けるために",
                "Link": "https://shinycolors.info/wiki/廻る歯車、運命の瞬間/走り続けるために"
            },
            {
                "NameJP": "別腹☆カラオケタイムばい！",
                "Link": "https://shinycolors.info/wiki/廻る歯車、運命の瞬間/別腹☆カラオケタイムばい！"
            },
            {
                "NameJP": "凛と咲く、そのために",
                "Link": "https://shinycolors.info/wiki/廻る歯車、運命の瞬間/凛と咲く、そのために"
            },
            {
                "NameJP": "you/i/we",
                "Link": "https://shinycolors.info/wiki/廻る歯車、運命の瞬間/you/i/we"
            },
            {
                "NameJP": "心、揃えたいから……",
                "Link": "https://shinycolors.info/wiki/廻る歯車、運命の瞬間/心、揃えたいから……"
            },
            {
                "NameJP": "『L'Antica』",
                "Link": "https://shinycolors.info/wiki/廻る歯車、運命の瞬間/『L'Antica』"
            },
            {
                "NameJP": "運命の鍵・シンフォニー",
                "Link": "https://shinycolors.info/wiki/廻る歯車、運命の瞬間/運命の鍵・シンフォニー"
            }
        ]
    },
    {
        "Type": "Event",
        "Category": "Scenario",
        "Title": "五色 爆発！合宿クライマッス！",
        "Icon": "https://shinycolors.info/w/images/9/94/五色 爆発！合宿クライマッス！_Banner.png",
        "Link": "https://shinycolors.info/wiki/五色 爆発！合宿クライマッス！",
        "Commus": [
            {
                "NameJP": "特訓！？レッスン合宿は学校で",
                "Link": "https://shinycolors.info/wiki/五色 爆発！合宿クライマッス！/特訓！？レッスン合宿は学校で"
            },
            {
                "NameJP": "SCHOOL COOL SCHOOL",
                "Link": "https://shinycolors.info/wiki/五色 爆発！合宿クライマッス！/SCHOOL COOL SCHOOL"
            },
            {
                "NameJP": "ちょこ先輩のユウシ",
                "Link": "https://shinycolors.info/wiki/五色 爆発！合宿クライマッス！/ちょこ先輩のユウシ"
            },
            {
                "NameJP": "白熱★枕投げ大会！！",
                "Link": "https://shinycolors.info/wiki/五色 爆発！合宿クライマッス！/白熱★枕投げ大会！！"
            },
            {
                "NameJP": "座禅ってすごいのよ",
                "Link": "https://shinycolors.info/wiki/五色 爆発！合宿クライマッス！/座禅ってすごいのよ"
            },
            {
                "NameJP": "肝試し★6人一緒なら怖くない！",
                "Link": "https://shinycolors.info/wiki/五色 爆発！合宿クライマッス！/肝試し★6人一緒なら怖くない！"
            },
            {
                "NameJP": "灯る想いは写真の中に",
                "Link": "https://shinycolors.info/wiki/五色 爆発！合宿クライマッス！/灯る想いは写真の中に"
            },
            {
                "NameJP": "クライマックスは終わらない！",
                "Link": "https://shinycolors.info/wiki/五色 爆発！合宿クライマッス！/クライマックスは終わらない！"
            }
        ]
    },
    {
        "Type": "Event",
        "Category": "Scenario",
        "Title": "満開、アルストロメリア流幸福論─つなぐ・まごころ・みっつ─",
        "Icon": "https://shinycolors.info/w/images/7/7d/満開、アルストロメリア流幸福論─つなぐ・まごころ・みっつ─_Banner.png",
        "Link": "https://shinycolors.info/wiki/満開、アルストロメリア流幸福論─つなぐ・まごころ・みっつ─",
        "Commus": [
            {
                "NameJP": "私たちの目的地",
                "Link": "https://shinycolors.info/wiki/満開、アルストロメリア流幸福論─つなぐ・まごころ・みっつ─/私たちの目的地"
            },
            {
                "NameJP": "パールホワイト",
                "Link": "https://shinycolors.info/wiki/満開、アルストロメリア流幸福論─つなぐ・まごころ・みっつ─/パールホワイト"
            },
            {
                "NameJP": "天と地、屈折",
                "Link": "https://shinycolors.info/wiki/満開、アルストロメリア流幸福論─つなぐ・まごころ・みっつ─/天と地、屈折"
            },
            {
                "NameJP": "甜花の敵じゃない",
                "Link": "https://shinycolors.info/wiki/満開、アルストロメリア流幸福論─つなぐ・まごころ・みっつ─/甜花の敵じゃない"
            },
            {
                "NameJP": "私をもっと知りたくて",
                "Link": "https://shinycolors.info/wiki/満開、アルストロメリア流幸福論─つなぐ・まごころ・みっつ─/私をもっと知りたくて"
            },
            {
                "NameJP": "まごころ・みっつ重ねて",
                "Link": "https://shinycolors.info/wiki/満開、アルストロメリア流幸福論─つなぐ・まごころ・みっつ─/まごころ・みっつ重ねて"
            },
            {
                "NameJP": "私達の幸福論",
                "Link": "https://shinycolors.info/wiki/満開、アルストロメリア流幸福論─つなぐ・まごころ・みっつ─/私達の幸福論"
            },
            {
                "NameJP": "花ざかり、これからも。",
                "Link": "https://shinycolors.info/wiki/満開、アルストロメリア流幸福論─つなぐ・まごころ・みっつ─/花ざかり、これからも。"
            }
        ]
    },
    {
        "Type": "Event",
        "Category": "Scenario",
        "Title": "夏は短し海でしょ！乙女たち～お待ち遠サマ★ごちそうSUMMER!!～",
        "Icon": "https://shinycolors.info/w/images/0/0c/夏は短し海でしょ！乙女たち～お待ち遠サマ★ごちそうSUMMER!!～_Banner.png",
        "Link": "https://shinycolors.info/wiki/夏は短し海でしょ！乙女たち～お待ち遠サマ★ごちそうSUMMER!!～",
        "Commus": [
            {
                "NameJP": "夏の依頼は突然に",
                "Link": "https://shinycolors.info/wiki/夏は短し海でしょ！乙女たち～お待ち遠サマ★ごちそうSUMMER!!～/夏の依頼は突然に"
            },
            {
                "NameJP": "ヤキソバ・プロテイン・藁人形",
                "Link": "https://shinycolors.info/wiki/夏は短し海でしょ！乙女たち～お待ち遠サマ★ごちそうSUMMER!!～/ヤキソバ・プロテイン・藁人形"
            },
            {
                "NameJP": "Mission:Break",
                "Link": "https://shinycolors.info/wiki/夏は短し海でしょ！乙女たち～お待ち遠サマ★ごちそうSUMMER!!～/Mission:Break"
            },
            {
                "NameJP": "放課後、想いは置手紙に込めて",
                "Link": "https://shinycolors.info/wiki/夏は短し海でしょ！乙女たち～お待ち遠サマ★ごちそうSUMMER!!～/放課後、想いは置手紙に込めて"
            },
            {
                "NameJP": "いつもよりサイコー",
                "Link": "https://shinycolors.info/wiki/夏は短し海でしょ！乙女たち～お待ち遠サマ★ごちそうSUMMER!!～/いつもよりサイコー"
            },
            {
                "NameJP": "ハプニングはピーヒョロロ",
                "Link": "https://shinycolors.info/wiki/夏は短し海でしょ！乙女たち～お待ち遠サマ★ごちそうSUMMER!!～/ハプニングはピーヒョロロ"
            },
            {
                "NameJP": "トリ戻す大作戦！",
                "Link": "https://shinycolors.info/wiki/夏は短し海でしょ！乙女たち～お待ち遠サマ★ごちそうSUMMER!!～/トリ戻す大作戦！"
            },
            {
                "NameJP": "きっと忘れない夏の光",
                "Link": "https://shinycolors.info/wiki/夏は短し海でしょ！乙女たち～お待ち遠サマ★ごちそうSUMMER!!～/きっと忘れない夏の光"
            }
        ]
    },
    {
        "Type": "Event",
        "Category": "Scenario",
        "Title": "真夜中発、ハロウィンワールドの旅人",
        "Icon": "https://shinycolors.info/w/images/6/66/真夜中発、ハロウィンワールドの旅人_Banner.png",
        "Link": "https://shinycolors.info/wiki/真夜中発、ハロウィンワールドの旅人",
        "Commus": [
            {
                "NameJP": "ようこそL'Antica WORLD",
                "Link": "https://shinycolors.info/wiki/真夜中発、ハロウィンワールドの旅人/ようこそL'Antica WORLD"
            },
            {
                "NameJP": "イタズラ or Trick",
                "Link": "https://shinycolors.info/wiki/真夜中発、ハロウィンワールドの旅人/イタズラ or Trick"
            },
            {
                "NameJP": "運命の鍵・捜索中……",
                "Link": "https://shinycolors.info/wiki/真夜中発、ハロウィンワールドの旅人/運命の鍵・捜索中……"
            },
            {
                "NameJP": "送出大作戦☆君に会えてよかった",
                "Link": "https://shinycolors.info/wiki/真夜中発、ハロウィンワールドの旅人/送出大作戦☆君に会えてよかった"
            },
            {
                "NameJP": "いらっしゃいませ、いただきます",
                "Link": "https://shinycolors.info/wiki/真夜中発、ハロウィンワールドの旅人/いらっしゃいませ、いただきます"
            },
            {
                "NameJP": "絵画迷宮・解き明かさないで",
                "Link": "https://shinycolors.info/wiki/真夜中発、ハロウィンワールドの旅人/絵画迷宮・解き明かさないで"
            },
            {
                "NameJP": "救出大作戦☆信じるのは、君",
                "Link": "https://shinycolors.info/wiki/真夜中発、ハロウィンワールドの旅人/救出大作戦☆信じるのは、君"
            },
            {
                "NameJP": "私の大切な人",
                "Link": "https://shinycolors.info/wiki/真夜中発、ハロウィンワールドの旅人/私の大切な人"
            }
        ]
    },
    {
        "Type": "Event",
        "Category": "Scenario",
        "Title": "オペレーション・サンタ！～包囲せよ２８３プロ～",
        "Icon": "https://shinycolors.info/w/images/8/8b/オペレーション・サンタ！～包囲せよ２８３プロ～_Banner.png",
        "Link": "https://shinycolors.info/wiki/オペレーション・サンタ！～包囲せよ２８３プロ～",
        "Commus": [
            {
                "NameJP": "パーティー・チューニング",
                "Link": "https://shinycolors.info/wiki/オペレーション・サンタ！～包囲せよ２８３プロ～/パーティー・チューニング"
            },
            {
                "NameJP": "泥棒！？",
                "Link": "https://shinycolors.info/wiki/オペレーション・サンタ！～包囲せよ２８３プロ～/泥棒！？"
            },
            {
                "NameJP": "危険なクリスマスイブ",
                "Link": "https://shinycolors.info/wiki/オペレーション・サンタ！～包囲せよ２８３プロ～/危険なクリスマスイブ"
            },
            {
                "NameJP": "キラキラノンシュガートラップ",
                "Link": "https://shinycolors.info/wiki/オペレーション・サンタ！～包囲せよ２８３プロ～/キラキラノンシュガートラップ"
            },
            {
                "NameJP": "この味を飲み干して……",
                "Link": "https://shinycolors.info/wiki/オペレーション・サンタ！～包囲せよ２８３プロ～/この味を飲み干して……"
            },
            {
                "NameJP": "くいあらためてください",
                "Link": "https://shinycolors.info/wiki/オペレーション・サンタ！～包囲せよ２８３プロ～/くいあらためてください"
            },
            {
                "NameJP": "観念せよ！トナカイ",
                "Link": "https://shinycolors.info/wiki/オペレーション・サンタ！～包囲せよ２８３プロ～/観念せよ！トナカイ"
            },
            {
                "NameJP": "サンタさんつかまえた",
                "Link": "https://shinycolors.info/wiki/オペレーション・サンタ！～包囲せよ２８３プロ～/サンタさんつかまえた"
            }
        ]
    },
    {
        "Type": "Idol",
        "Category": "사쿠라기 마노",
        "Title": "【ほわっとスマイル】櫻木真乃",
        "Icon": "https://shinycolors.info/w/images/a/af/Icon_Mano_P_SSR_01.png",
        "Link": "https://shinycolors.info/wiki/【ほわっとスマイル】櫻木真乃",
        "Commus": [
            {
                "NameJP": "ほわほわアイドル",
                "Link": "https://shinycolors.info/wiki/커뮤니케이션:사쿠라기 마노/P/SSR-1/ほわほわアイドル"
            },
            {
                "NameJP": "真乃ならできる",
                "Link": "https://shinycolors.info/wiki/커뮤니케이션:사쿠라기 마노/P/SSR-1/真乃ならできる"
            },
            {
                "NameJP": "成長の証",
                "Link": "https://shinycolors.info/wiki/커뮤니케이션:사쿠라기 마노/P/SSR-1/成長の証"
            },
            {
                "NameJP": "いつかの気持ち",
                "Link": "https://shinycolors.info/wiki/커뮤니케이션:사쿠라기 마노/P/SSR-1/いつかの気持ち"
            },
            {
                "NameJP": "ずっと続く夢の先へ",
                "Link": "https://shinycolors.info/wiki/커뮤니케이션:사쿠라기 마노/P/SSR-1/ずっと続く夢の先へ"
            }
        ]
    },
    {
        "Type": "Idol",
        "Category": "사쿠라기 마노",
        "Title": "【ハ♡トフェルトゥギフト】櫻木真乃",
        "Icon": "",
        "Link": "https://shinycolors.info/wiki/【ハ♡トフェルトゥギフト】櫻木真乃",
        "Commus": [
            {
                "NameJP": "ぽかぽか陽気に誘われて",
                "Link": "https://shinycolors.info/wiki/커뮤니케이션:사쿠라기 마노/P/SSR-2/ぽかぽか陽気に誘われて"
            },
            {
                "NameJP": "旅のお供に",
                "Link": "https://shinycolors.info/wiki/커뮤니케이션:사쿠라기 마노/P/SSR-2/旅のお供に"
            },
            {
                "NameJP": "春の足音",
                "Link": "https://shinycolors.info/wiki/커뮤니케이션:사쿠라기 마노/P/SSR-2/春の足音"
            },
            {
                "NameJP": "あなたへ贈り物",
                "Link": "https://shinycolors.info/wiki/커뮤니케이션:사쿠라기 마노/P/SSR-2/あなたへ贈り物"
            },
            {
                "NameJP": "ゆるりと流れる時間の中で",
                "Link": "https://shinycolors.info/wiki/커뮤니케이션:사쿠라기 마노/P/SSR-2/ゆるりと流れる時間の中で"
            }
        ]
    },
]

    var dataset = parse_raw(raw_data);
    datasetToHTML(dataset);

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