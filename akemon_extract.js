// https://pokemondb.net/move/all

/*
{
    "name": "",
    "description":"",
    "elementId":"",
    "successRate":"",
}
*/
var obj = {"id":16,"name":"화염방사","animationId":78,     "damage":{"formula":"(2 + 20 * (2 * a.luk + 10)/250 * (a.atk / b.def))","critical":true,"elementId":4,"type":1,"variance":15},"description":"","effects":[],"hitType":2,"iconIndex":66,"message1":" used %1!","message2":"","mpCost":1,"note":"","occasion":1,"repeats":1,"requiredWtypeId1":0,"requiredWtypeId2":0,"scope":2,"speed":0,"stypeId":1,"successRate":100,"tpCost":0,"tpGain":10};
var list = [];

$("tr").each(function(td) {
    var moveObj = Object.assign(obj);

    $td = $(td);
    moveObj["name"] = $td.eq(0); // name
    $td.eq(1) // type
    $td.eq(2) // cat
    moveObj["damage"]["formula"] = `"(2 + ${$td.eq(3).text()} * (2 * a.luk + 10)/250 * (a.atk / b.def))"` // power
    moveObj["successRate"] = $td.eq(4).text() // acc
    $td.eq(5) // pp
    $td.eq(7) // description
    $td.eq(8) // successRate
});

list;


//https://pokemon.fandom.com/ko/wiki/%EA%B8%B0%EC%88%A0_%EB%AA%A9%EB%A1%9D
var obj = {"id":16,"name":"","animationId":78,     "damage":{"formula":"(2 + 20 * (2 * a.luk + 10)/250 * (a.atk / b.def))","critical":true,"elementId":4,"type":1,"variance":15},"description":"","effects":[],"hitType":2,"iconIndex":66,"message1":" used %1!","message2":"","mpCost":1,"note":"","occasion":1,"repeats":1,"requiredWtypeId1":0,"requiredWtypeId2":0,"scope":2,"speed":0,"stypeId":1,"successRate":100,"tpCost":0,"tpGain":10};
var list = [];

var $moveList = $("tr").eq(0).children("td").children("table").children("tbody").children("tr")
var index = 17;

$moveList.each(function(idx, tr) {
    var moveObj = $.extend(true, {}, obj);

    $td = $(tr).children("td");
    moveObj["id"] = index++;
    moveObj["name"] = $td.eq(1).text().trim(); // name
    moveObj["elementId"] = $td.eq(2).text().trim(); // type
    moveObj["hitType"] = $td.eq(3).text().trim(); // category
    moveObj["damage"]["formula"] = `"(2 + ${$td.eq(4).text().trim()} * (2 * a.luk + 10)/250 * (a.atk / b.def))"` // power
    moveObj["successRate"] = $td.eq(5).text().trim() // acc
    moveObj["tpGain"] = $td.eq(6).text().trim(); // pp

    list.push(moveObj);
});

function downloadString(text, fileType, fileName) {
    var blob = new Blob([text], { type: fileType });
  
    var a = document.createElement('a');
    a.download = fileName;
    a.href = URL.createObjectURL(blob);
    a.dataset.downloadurl = [fileType, a.download, a.href].join(':');
    a.style.display = "none";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(function() { URL.revokeObjectURL(a.href); }, 1500);
  }

  downloadString(JSON.stringify(list), "application/json", "moveList.json");