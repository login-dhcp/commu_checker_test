var configs = {};

configs.Imsize = [256, 256];

$(document).ready(function(e) {
    init();
});

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function init() {
    	text = `Mano_P_R_01,공통/W.I.N.G,公園の歌声,自信のありか,ありのままで,頑張りすぎ,自分を信じて,未来へ羽ばたく,これからも飛んでいきたい,
Mano_P_R_01,공통/감사제,あんをつつむあったかい気持ち,始まり、もう一度,『頑張りたい』,空が赤いから,雲なんて吹き飛ばして,/星たちは駆けて輝く,何度だって最高の晴れにしよう,きらめきを詰めてすすむしっぽ
Mano_P_R_01,공통/G.R.A.D,つづく空のはじまり,跳ねるように進む,足元、ぐるりとゆがんで,それでも……,跳ねるように進む,とまる歩みに,空はつづく,
Mano_P_SSR_01,P/SSR-1,포근포근 아이돌,마노라면 할 수 있어,성장의 증거,어느 때의 마음,True End: 계속 이어지는 꿈의 저편으로,,,
Mano_P_SR_01,P/SR-1,쇼핑하기 좋은 날,자연스레 흔들리는 마음,감사를 형태로,,,,,
Hiori_P_SSR_01,P/SSR-1,너를 알려주길 바라,지탱해 나가고 싶어,행복에 가득 차다,일찍이 꿈꿨던 눈부신 모습,True End: 나아가는 곳에 있는 이상적인 자신,,,
Hiori_P_SR_01,P/SR-1,철저한 자세,밸런스에 주의해서,역전되는 입장,,,,,


`
    buildHTMLWithDataset(text);

    // $.ajax({
    //     type: "GET",
    //     url: "./commu_list.csv?version=210815",
    //     dataType: "text",
    //     success: function(data) { buildHTMLWithDataset(data, ','); }
    // });

    await sleep(1000);

    getStateFromUrl();
}