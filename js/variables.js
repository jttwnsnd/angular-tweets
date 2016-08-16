var samplesTrump = [];
var samplesClinton = [];

function Tweets(handle, message) {
	this.handle = handle,
	this.message = message
}

samplesTrump.push(new Tweets('@callingBS', '@notTrump no.'))
samplesTrump.push(new Tweets('@notTrump', '@notClinton BURN! You tell \'em @callingBS high five!'))
samplesTrump.push(new Tweets('@hobojoe', 'Not surprised that #trump has done it again...'));
samplesTrump.push(new Tweets('@notTrump', 'Im not asking you to think I am the best. I am saying I am the best.'));
samplesTrump.push(new Tweets('@notTrump', 'Immigrants are ruining America. Who ever let them in?'));
samplesClinton.push(new Tweets('@callingBS', '@notClinton - mistakes are one thing. coverig up your mess and denying are another. #bs'))
samplesClinton.push(new Tweets('@notClinton', 'America needs to understand that mistakes are human nature. Forgive and forget.'))

console.log(samplesClinton);
console.log(samplesTrump);