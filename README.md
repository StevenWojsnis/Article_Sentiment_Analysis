# Article_Sentiment_Analysis
Proof-of-concept news article sentiment analysis

Basic sentiment analysis project written in NodeJS.

Takes an RSS Feed URL and performs sentiment analysis on articles contained within the feed. The sentiment analysis score is then
written to a .txt file.

This mainly acted as a learning project for me, in an attempt to learn more about NodeJS. Ideally, the project wouldn't rely on
RSS feeds, but instead scrape news articles from the web. I explored various ways of scraping (other than building a scraper for each
individual news site, which would be impractical) and am considering implementing some of these methods to see how it works.

The idea behind this project was to help reveal biases within news organizations by performing sentiment analysis on a large number of
their articles, and trying to identify trends in the way they report on various topics. Again, though, this project is unfinished and
in its current state acts only as a proof-of-concept.

The code currently contains a few test URLs that were used to see if the article extraction and sentiment analysis worked. More URLs can
be added by calling the function with the appropriate URL.
