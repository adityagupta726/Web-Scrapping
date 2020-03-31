let request=require("request");
let cheerio=require("cheerio");
let fs=require("fs");
let seriesId=process.argv[2];
// let commentaryId=process.argv[3];
request(`https://www.espncricinfo.com/scores/series/${seriesId}/`,function(err,res,html){
if(err==null&&res.statusCode==200){
  //  fs.writeFileSync("abc.html",html);
  console.log("Received Html");
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
    fs.writeFileSync("score.html",html);
    // console.log("parsing html");
    let $=cheerio.load(html);
    // let cardsHtml=$(".item-wrapper .description")
    // fs.writeFileSync("commentary.html",cardsHtml);
    // let tableArr=$(".scorecard-section.bowling table tbody tr");
    // let table2html=$(".scorecard-section.batsmen").html();
    // fs.writeFileSync("table.html",tableArr);
    // fs.writeFileSync("table2.html",table2html);
    // console.log("file written to disk");

    // console.log(maxWicketTaker+" "+maxWicktes);
    let cardHtml=$(".cscore.cscore--final.cricket.cscore--away-winner.cscore--watchNotes");
    for(let i=0;i<cardHtml.length;i++){
            let format = $(cardHtml[i])
    }
}