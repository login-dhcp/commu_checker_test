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
    var table = '<table id=sort_list_table>';

    // add items
    for (var i = 0; i < data.length; i++) {
        var item = data[i];
        table += '<tr>';
        for (var j = 0; j < item.length; j++) {
            table += '<td>';
            table += `<label style="cursor:pointer" for="checkbox_${i}_${j}">`;
            if (item[j] !== "") {
                table += `<input type="checkbox" data-checkbox-id="${i}_${j}" id="checkbox_${i}_${j}" class="select_one">`;
                if (j === 0) {
                    table += `<img src="https://shinycolors.info/wiki/특수:넘겨주기/file/${item[j]}.png" width=200px>`;
                } else {
                    table += `${item[j]}`;
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