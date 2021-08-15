var configs = {};

configs.Imsize = [256, 256];

///////////////////////////////
// $(document).ready(function() {
//     $.ajax({
//         type: "GET",
//         url: "./commu_list.csv",
//         dataType: "text",
//         success: function(data) { buildHTMLWithDataset(data, ','); }
//     });
// });

text=`【白いツバサ】櫻木真乃,wing0,wing1,wing2,wing3,wing4,감사제1,감사제2
【ほわっとスマイル】櫻木真乃,1,2,3,4,,,
【ナチュラルモード】櫻木真乃,1,2,3,,,,
【柔らかな微笑み】風野灯織,1,2,3,,,,
【金色の元気いっぱいガール】八宮めぐる,1,2,,,,,
`

buildHTMLWithDataset(text);