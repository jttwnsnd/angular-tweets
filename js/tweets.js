var tweets = [];

function Tweet (title, userName, postContent, postTime, img){
	this.title = title,
	this.userName = userName,
	this.postContent = postContent,
	this.postTime = postTime,
	this.img = img
	
}
//protoypes are something that is shared among everybody.
Tweet.prototype.getTimeSince = function(theDate){
	var timeSince = Math.floor((theDate - this.postTime) / 1000);
		// if(timeSince > secondsInAYear){

		// }
		return Math.floor((theDate - this.postTime) / 1000);
};

Tweet.prototype.company = 'Twitter';
var recentSearch = [];
if(recentSearch.length > 5){
	var howMany = recentSearch.length - 4;
	recentSearch.splice(recentSearch.length - 1, howMany);			
}
// var tweet1 = new Tweet('Title Stuff', 'dc4life', 'aflsjfslfjslfjlsfjslkjf', '1471351423825', 'https://pbs.twimg.com/profile_banners/30318720/1398951622/1500x500');
// var tweet2 = new Tweet('Title Stuff', 'dc4life', 'afkklofdolol', '1471351023825', 'https://pbs.twimg.com/profile_banners/30318720/1398951622/1500x500');
// console.log(tweet1.getTimeSince(Date.now()));
// console.log(tweet2.getTimeSince(Date.now()));
// tweets = [tweet1, tweet2];
// console.log(tweets);
