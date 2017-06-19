var FeedParser = require('feedparser');
var request = require('request'); // for fetching the feed 
var Boilerpipe = require('boilerpipe');
var sentiment = require('sentiment');
var fs = require("fs");



function getFeed(URL) { 

    var feedparser = new FeedParser();
    var urlList = new Array();

    var req = request(URL);

    req.on('response', function(res) {
        res.pipe(feedparser);
    });

    feedparser.on('readable', function(){
        var stream = this;
        var item;


        while(item = stream.read()){

            var tempArticle = {title: item.title, link: item.link};
            urlList.push(tempArticle);
        }
    });

    feedparser.on('end', function(){
        if(urlList.length != 0){
         for(var i = 0; i<urlList.length; i++){

            var boilerpipe = new Boilerpipe({
                extractor: Boilerpipe.Extractor.Article,
                url:urlList[i].link
            });

            
            function parse(title){

                boilerpipe.getText(function(err, text){
                    var sent = sentiment(text);
                    fs.appendFileSync('result.txt','Title: ' + title + ' \nScore: ' + sent.comparative);
                    fs.appendFileSync('result.txt','\n\n\n');
                });
            
            }

            parse(urlList[i].title);

         }
        }
    });
}



getFeed('http://www.npr.org/rss/rss.php?id=1001');

getFeed('http://feeds.feedburner.com/breitbart');

getFeed('http://rss.cnn.com/rss/cnn_allpolitics.rss');

getFeed('https://www.buzzfeed.com/politics.xml');
