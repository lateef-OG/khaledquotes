window.onload = function () {};

var quotes = [];

quotes[0] = "\"When I turn in my list, obviously every record was important to me. I didn’t just put records on there to put records on there. I was excited that “All I Do Is Win” could go on there because you hear it at the end of the game and that represents victory. That’s undeniable. You can’t hate on that, it’s impossible\""

quotes[1] = "\"God has blessed me because I think. No I know that I’ve been put on this Earth to make people happy, to inspire people and to uplift people. That’s a beautiful thing. But the only downfall about it is that I really don’t have nobody to do that for me. But it makes me super strong because I do know that if I’m having a bad day, I can come up here and make Ebro and y’all laugh and smile.\""

quotes[2] = "\"I didn’t want to be an artist in the same place I worked. You could always have people that might feel like you would do something more for yourself.\""

quotes[3] = "\"That’s what we provide you know what I’m saying. When you get DJ Khaled you sound bites. You get documentaries. My interviews will play ten years from now. I ain’t regular like these other people. This is DJ Khaled, this is special cloth alert.\""

quotes[4] = "\"Them doors that was always closed, I ripped the doors off, took the hinges off. And when I took the hinges off, I put the hinges on the f**kboys’ hands\""

quotes[5] = "\"They don’t want you to win. They don’t want you to have the No. 1 record in the country. They don’t want you get healthy. They don’t want you to exercise. And they don’t want you to have that view.\""

quotes[6] = "\"We go hard. In everything we do we’re going to accomplish our victory and our goal. If it takes a day, a year, or 20 years, we’re going to win. I haven’t taken a loss because everything I’ve done has been a working process to win. From being a kid on them turntables to becoming where I am is not a loss. It’s a blessing.\""

quotes[7] = "\"You want my advice? Don’t play yourself.\""

quotes[8] = "\"I can deal with everything. I got the answer for anything. This DJ Khaled.\""

quotes[9] = "\"Another one, no. Another two, drop two singles at a time.\""


function getQuotes(id) {
    var input= document.getElementById('no').value,
        rand = 0,
        randText = "";
        document.getElementById(id).innerHTML = "";

    if (isNaN(input)|| input == "") {
		alert("INPUT IS NOT VALID");
    }else{
		this.show('demo');
		this.showButton('test');
	}

    for (var i = 0; i < input; i++) {
        rand = randomNum(quotes.length);
        randText += quotes[rand] + "<br><br>";
        document.getElementById(id).innerHTML = randText;
        document.getElementById(id).style.fontStyle = "italic";
	}
}

document.getElementById('demo').style.display = "none";
function show(target) {
	document.getElementById('demo').style.display = "block";
}
document.getElementById('test').style.display = "none";
function showButton(target) {
	document.getElementById('test').style.display = "block";
}

// Helper functions
function randomNum (length) {
    return Math.floor(Math.random() * length);
}
