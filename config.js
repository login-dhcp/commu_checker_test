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

text=`Mano_P_R_01,wing0,wing1,wing2,wing3,wing4,감사제1,감사제2
Mano_P_SSR_01,1,2,3,4,,,
Mano_P_SSR_02,1,2,3,,,,
Mano_P_SR_01,1,2,3,,,,
Mano_S_SSR_01,1,2,,,,,
`

buildHTMLWithDataset(text);
getStateFromUrl();