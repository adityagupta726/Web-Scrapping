let request=require("request");
let cheerio=require("cheerio");
let fs=require("fs");
request("https://www.espncricinfo.com/series/19322/scorecard/1187679",function(err,res,html){
if(err==null&&res.statusCode==200){
  //  fs.writeFileSync("abc.html",html);
parsehtml(html);
}
else if(res.statusCode==404){
    console.log("Page not Found");
}
else{
    console.log(err);
    console.log(res.statusCode);
}


});
function parsehtml(html){
    console.log("parsing start");
    let $=cheerio.load(html);
    let tableArr=$(".scorecard-section.bowling table tbody tr");
    // let table2html=$(".scorecard-section.batsmen").html();
    // fs.writeFileSync("table.html",tableArr);
    // fs.writeFileSync("table2.html",table2html);
    // console.log("file written to disk");

    let maxWicktes=0;
    let maxWicketTaker="";
    for(let i=0;i<tableArr.length;i++){
        let tdArr=$(tableArr[i]).find("td");
        let wicket=$(tdArr[5]).html();
        let bowlerName=$(tableArr[i]).find("td a").html();
        if(wicket>maxWicktes){
            maxWicktes=wicket;
            maxWicketTaker=bowlerName;
        }
    }
    console.log(maxWicketTaker+" "+maxWicktes);
}