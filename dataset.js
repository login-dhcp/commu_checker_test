///////////////////
function csvToArray(data) {
    var textLines = data.split(/\r\n|\n/);
    var lines = [];

    for (var i = 0; i < textLines.length; i++) {
        var data = textLines[i].split(',');
        lines.push(data);
    }
    return lines
}

function datasetToCheckboxesTable(data) {
    var table = '<table id=commu_list_table>';

    // add items
    for (var i = 0; i < data.length; i++) {
        var item = data[i];
        table += '<tr>';
        for (var j = 1; j < item.length; j++) {
            table += '<td style="text-align: center; vertical-align: top;" width="100px" >';
            table += `<label style="cursor:pointer" for="checkbox_${i}_${j}">`;
            var IdolName = item[0].split('_')[0];
            if (item[j] !== "") {
                table += `<input type="checkbox" id="checkbox_${i}_${j}">`;
                if (j === 1) {
                    table += `<img src="https://shinycolors.info/wiki/특수:넘겨주기/file/Icon_${item[0]}.png" class='selectibleIcon'>`;
                    `<a href="https://github.com/login-dhcp">github</a>`
                    table += `<span><br>${item[j]}</span>`;
                } else {
                    table += `<img src="https://shinycolors.info/wiki/특수:넘겨주기/file/${IdolName}Icon.webp?width=96px" class='commuIcon'>`;
                    table += `<span><a href="https://shinycolors.info/wiki/커뮤니케이션:${item[1].replace(' ', '_')}/${item[j].replace(' ', '_')}">`;
                    table += `<br>${item[j]}</a></span>`;
                }
            }
            table += '</label>';
            table += '</td>';
        }
        table += '</tr>';
    }
    table += '</table>';
    return table
}

function buildHTMLWithDataset(text) {
    var parsed_data = csvToArray(text);
    console.log(parsed_data);

    var table = datasetToCheckboxesTable(parsed_data);
    document.getElementById("commu_list").insertAdjacentHTML('beforeend', table);
}