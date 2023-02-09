const request = require ("request");
const cheerio = require("cheerio");
const getIssuesPageHtml = require("./issue");
function getReposPageHtml(url, topic){
    request(url, cb);
    function cb(err, response, html){
    if(err){
        console.log(err);
    }else{
        getReposLink(html);
    }    
    }
    function getReposLink(html){
        let $ = cheerio.load(html);
        let headingsArr = $(".f3.color-text-secondary.text-normal.lh-condensed")
        for (let i=0; i< 8;i++){
            let twoAnchors = $(headingsArr[i]).find("a");
            let link = $(twoAnchors[0]).attr("href");
            //console.log(link);
           // let fullLink = `https://github.com${link}/issues`;
           let repoName = link.split("/").pop();
            getIssuesHtml(fullLink, topic, repoName);
        }
        console.log("``````````````````````````");
    
    }

}
module.exports = getReposPageHtml;