# Berkeley Innovation

Instructions to manage the website at [innovation.berkeley.edu](http://innovation.berkeley.edu) and other services.

### Introduction

Berkeley Innovation's website is designed to be mostly managed via other web services, such as Facebook and Twitter for news, Flickr for photos, Behance for portfolio, and Bitly for links and resources. 

Therefore, little actual site maintenance is required; content is updated dynamically to the site via these services' APIs.

### Facebook & Twitter

Berkeley Innovation's [Facebook Page][BI-Facebook] is linked to its [Twitter profile][BI-Twitter], so that any time you post to the Page, a tweet is generated from **@binnov** as well.

Tweets, in turn, are automatically posted to Berkeley Innovation's website via an API call using [jQuery.getJSON()](http://api.jquery.com/jQuery.getJSON/) in the JavaScript file **home.js**.

### Flickr photos

Berkeley Innovation has a [Flickr group][BI-Flickr-group] (to which any member of the group and can post photos) and a [Flickr account][BI-Flickr] (an actual Flickr account).

Photos from the group photostream are shared to Berkeley Innovation's website in the same way tweets are posted, also in **home.js**. Anybody can add photos to the group (provided they're a member of the group) under their own Flickr account. 

To have it share from the group photostream to the website, the photo must be set to publically viewable ("Anybody can see this photo"). Optionally, can choose to add photos to the group photostream from BI's own photostream.

Additionally, BI's Flickr is linked to Twitter, so you can share any photo to **@binnov** by clicking the Twitter icon.

### Behance portfolio

BI uses Behance to catalog its projects. Projects from the Berkeley Innovation [Behance portfolio][BI-Behance] are displayed on the BI website Projects page. The API call is in **projects.js**.

You can either create a new project under the BI Behance account, or make Berkeley Innovation a **co-owner** on an existing or new Behance project. Instructions to add co-owner to projects [here](http://www.behance.net/faq/question?id=217).

### Bitly resources

Bitly [bundles][BI-Bitly-bundles], or collections of links, are displayed to the website from BI's [Bitly page][BI-Bitly] under Resources with the bundle title and bundle description.

Bitmarks (links) can be added while logged into BI's Bitly account, and filed under the appropriate bundle. You can also create a new bundle if appropriate.

[Facebook]: https://www.facebook.com/ "Facebook" 
[Twitter]: https://twitter.com/ "Twitter"
[Flickr]: http://www.flickr.com/ "Flickr"
[Behance]: http://www.behance.net/ "Behance"
[Bitly]: https://bitly.com/ "Bitly"
[BI-Facebook]: https://www.facebook.com/berkeleyinnovation "Berkeley Innovation's "Facebook"
[BI-Twitter]: https://twitter.com/binnov "Berkeley Innovation's "Twitter"
[BI-Flickr-group]: http://www.flickr.com/groups/berkeleyinnovation/ "Berkeley Innovation's Flickr group"
[BI-Flickr]: http://www.flickr.com/photos/berkeleyinnovation/ "Berkeley Innovation's Flickr page"
[BI-Behance]: http://www.behance.net/berkeleyinnovation "Berkeley Innovation's Behance"
[BI-Bitly]: https://bitly.com/u/berkeleyinnovation "Berkeley Innovation's Bitly"
[BI-Bitly-bundles]: https://bitly.com/u/berkeleyinnovation/bundles "Berkeley Innovation's Bitly bundles"