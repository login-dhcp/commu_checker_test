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
        for (var j = 0; j < item.length; j++) {
            table += '<td style="text-align: center">';
            table += `<label style="cursor:pointer" for="checkbox_${i}_${j}">`;
            var IdolName = item[0].split('_')[0];
            if (item[j] !== "") {
                table += `<input type="checkbox" id="checkbox_${i}_${j}">`;
                if (j === 0) {
                    table += `<img src="https://shinycolors.info/wiki/특수:넘겨주기/file/Icon_${item[j]}.png" class='selectibleIcon'>`;
                    table += `<span><br>${item[j]}</span>`;
                } else {
                    table += `<img src="https://shinycolors.info/wiki/특수:넘겨주기/file/${IdolName}Icon.webp?width=96px" class='commuIcon'>`;
                    table += `<span><br>${item[j]}</span>`;
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