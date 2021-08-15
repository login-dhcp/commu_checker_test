var configs = {};

configs.Imsize = [256, 256];

$(document).ready(function(e) {
    init();
});

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function init() {
    // 	text = `Mano_P_R_01,WING: 0. 공원의 노랫소리,WING: 1. 자신감의 소재,WING: 2. 있는 그대로,WING: 3. 지나친 노력,WING: 4. 스스로를 믿고,감사제1,감사제2
    // Mano_P_SSR_01,포근포근 아이돌,마노라면 할 수 있어,성장의 증거,어느 때의 마음,계속 이어지는 꿈의 저편으로,,
    // Mano_P_SR_01,쇼핑하기 좋은 날,자연스레 흔들리는 마음,감사를 형태로,,,,
    // Hiori_P_SSR_01,너를 알려주길 바라,지탱해 나가고 싶어,행복에 가득 차다,일찍이 꿈꿨던 눈부신 모습,나아가는 곳에 있는 이상적인 자신,,
    // Hiori_P_SR_01,철저한 자세,밸런스에 주의해서,역전되는 입장,,,,`
    // buildHTMLWithDataset(text);

    $.ajax({
        type: "GET",
        url: "./commu_list.csv?version=210815",
        dataType: "text",
        success: function(data) { buildHTMLWithDataset(data, ','); }
    });

    await sleep(1000);

    getStateFromUrl();
}