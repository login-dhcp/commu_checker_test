function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

$(document).ready(function(e) {
    init();
});

async function init() {
    text = `아이돌,사쿠라기 마노,Icon Mano P SSR 01.png,【ほわっとスマイル】櫻木真乃,커뮤니케이션:사쿠라기 마노/P/SSR-1,ほわほわアイドル,真乃ならできる,成長の証,いつかの気持ち,ずっと続く夢の先へ
이벤트,,Light up the illumination.jpg,Light up the illumination,커뮤니케이션:Light up the illumination,輝きの始まり,チカチカ、小さく瞬くみたいな,翳る前に、曇る前に,もう１度、ここから,１番輝く、そのために
스페셜,,Light up the illumination.jpg,스페셜,커뮤니케이션:Light up the illumination,輝きの始まり,チカチカ、小さく瞬くみたいな,翳る前に、曇る前に,もう１度、ここから,１番輝く、そのために
아이돌,카자노 히오리,Icon Hiori S SR 01.png,【克服の特訓】風野灯織,커뮤니케이션카자노 히오리/P/SR-1,困難だって超えられる,めぐるのダンス教室,にぎやかな日常,,
`
    // $.ajax({
    //     type: "GET",
    //     url: "./commu_list2.csv?version=210815",
    //     dataType: "text",
    //     success: function(data) { buildHTMLWithDataset(data, ','); }
    // });

    var parsed_data = csvToArray(text);
    datasetToHTML(parsed_data);

    await sleep(1000);
    // getStateFromUrl();
}

function csvToArray(data) {
    // csv Description:
    // 0열: 커뮤 대분류
    // 1열: 커뮤 소분류
    // 2열: 커뮤 아이콘
    // 3열: 아이콘 하단 텍스트(=위키 문서 제목)
    // 4열: 위키 커뮤 데이터 구분자
    // 5열~: 커뮤 이름
    var textLines = data.split(/\r\n|\n/);
    var lines = [];
    var categories = {};
    var SubCategories = {};

    for (var i = 0; i < textLines.length; i++) {
        var data = textLines[i].split(',');
        if (data[0].length > 0) {
            lines.push(data);

            var commuCategory = data[0];
            if (!(commuCategory in categories)) {
                categories[commuCategory] = [];
            }
            categories[commuCategory].push(i);

            var commuSubCategory = data[1];
            if (commuSubCategory.length > 0) {
                if (!(commuSubCategory in SubCategories)) {
                    SubCategories[commuSubCategory] = [];
                }
                SubCategories[commuSubCategory].push(i);
            }
        }
    }

    var returnData = {
        'lines': lines,
        'categories': categories,
    }
    return returnData;
}

function commuItemToHTML(item) {
    var category = item[0];
    var subcategory = item[1];
    var iconPath = item[2];
    iconPath = iconPath.replaceAll(' ', '_');
    var commuName = item[3];
    var header = item[4];
    var commus = [];
    for (var i = 5; i < item.length; i++) {
        commus.push(item[i]);
    }
    var commuHTML = '';
    commuHTML += `<div class="commuItem">\n`;
    commuHTML += `<div class="commuIcon" id="div_${commuName}" data-visible=false>\n`;
    commuHTML += `<img id="icon_${commuName}" alt="${iconPath}" src="https://shinycolors.info/wiki/특수:넘겨주기/file/${iconPath}" height="96"><br>`;
    commuHTML += `<span id="desc_${commuName}">0/n</span>`
    commuHTML += `<dialog id="dialog_${commuName}" class="commudialog">`;
    commuHTML += `<a href="https://shinycolors.info/wiki/${commuName}" target="_blank">${commuName}<br></a>`;
    for (commu of commus) {
        if (commu.length > 0) {
            commuHTML += `<label><input type="checkbox" id="btn_${commuName}_${commu}">${commu}</label>`;
            commuHTML += `&nbsp;<a href="https://shinycolors.info/wiki/${header}/${commu}" target="_blank">링크<br></a>`
        }
    }

    commuHTML += `</dialog>`;
    commuHTML += `</div>`;
    commuHTML += `</div>`;

    return commuHTML;

}

function datasetToHTML(data) {
    // 1. build Categories Icons first
    const categoryKeys = Object.keys(data['categories']);
    for (var i = 0; i < categoryKeys.length; i++) {
        // 1.1. make button
        var category = categoryKeys[i];
        var buttonHTML = '';
        var buttonID = `btn_${category}`;
        buttonHTML += `<input type="button" id="${buttonID}" value="${category}">`;
        buttonHTML += `<br>`;
        document.getElementById("commu_list").insertAdjacentHTML('beforeend', buttonHTML);

        // 1.2. make dialog
        var categoryDialogHTML = '';
        var dialogID = `dialog_${category}`;
        categoryDialogHTML += `<dialog id="${dialogID}" class="categoryWindow">`;
        categoryDialogHTML += `<span>category: ${category}<br></span>`;
        var commuList = data['categories'][category];
        for (commuID of commuList) {
            categoryDialogHTML += commuItemToHTML(data['lines'][commuID]);
        }
        categoryDialogHTML += `</dialog>`;
        document.getElementById(buttonID).insertAdjacentHTML('afterend', categoryDialogHTML);
        document.getElementById(buttonID).addEventListener('click', function(e) {
            document.getElementById(this.id.replace('btn', 'dialog')).showModal();
        });

    }

    // 2. add click event listener manually...
    for (var i = 0; i < data['lines'].length; i++) {
        var commuName = `${data['lines'][i][3]}`;
        var imgID = `icon_${commuName}`;

        // 2.1. 각 icon에 commulist dialog를 보여주기
        document.getElementById(imgID).addEventListener('click', function(e) {
            document.getElementById(this.id.replace('icon', 'dialog')).showModal();
        });

        var commus = [];
        for (var j = 5; j < data['lines'][i].length; j++) {
            commus.push(data['lines'][i][j]);
        }

        // 2.2. 각 icon commulist dialog관련 설정
        for (commu of commus) {
            if (commu.length > 0) {
                document.getElementById(`btn_${commuName}_${commu}`).addEventListener('click', function() {
                    var commuName_ = this.id.split('_')[1];
                    var commu_ = this.id.split('_')[2];
                    var divID_ = `div_${commuName_}`;

                    // 2.2.1. 각 commu checkbox에 img opacity 설정
                    var checked = document.querySelectorAll(`input[id^=btn_${commuName_}]:checked`).length;
                    var all = document.querySelectorAll(`input[id^=btn_${commuName_}]`).length;
                    if (checked === all) {
                        document.getElementById(divID_).dataset.visible = true;
                    } else {
                        document.getElementById(divID_).dataset.visible = false;
                    }

                    // 2.2.2. 각 icon에 selected된 commu 수 체크, visualize
                    var span_ID_ = `desc_${commuName_}`;
                    document.getElementById(span_ID_).innerHTML = `${checked}/${all}`;
                })
            }
        }

    }

    // 3. add Idols in dialog_Idol


}