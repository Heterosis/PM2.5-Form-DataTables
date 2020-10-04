$(document).ready(
  $.get(
      "./json/pm25.json",
      function(data) {
          let table = "<thead><tr><th>縣市</th><th>觀測站名稱</th><th>PM2.5 濃度（μg/m<sup>3</sup>）</th><th>資料更新時間</th></tr></thead><tbody>";
          data.forEach((element) => {
              table += "<tr><td>" +
                  element.county +
                  "</td><td>" +
                  element.Site +
                  "</td><td>" +
                  element.PM25 +
                  "</td><td>" +
                  element.DataCreationDate +
                  "</td></tr>";
          });
          table += "</tbody>"
          $("#pm25Table").html(table);
          $("#pm25Table").DataTable({
              "order": [
                  [2, "desc"]
              ],
              "language": {
                  "lengthMenu": "每頁顯示 _MENU_ 筆資料",
                  "search": "搜尋：",
                  "zeroRecords": "查無資料",
                  "info": "顯示第 _PAGE_ 頁，共 _PAGES_ 頁",
                  "infoEmpty": "無符合資料",
                  "infoFiltered": "（篩選自 _MAX_ total 筆資料）",
                  "paginate": {
                      "first": "第一頁",
                      "last": "最後一頁",
                      "next": "下一頁",
                      "previous": "上一頁"
                  },
              },
              "lengthMenu": [
                  [10, 25, 50, -1],
                  [10, 25, 50, "全部"]
              ],
              "pageLength": 25
          });
      },
      "jsonp"
  )
);