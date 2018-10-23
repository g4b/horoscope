var ZODIACS = ["Capricorn", "Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra","Scorpio", "Sagittarius"];
var HOROSCOPES = ["You may feel more reserved than usual, Capricorn, especially when it comes to romantic relationships. You may be feeling apprehensive about expressing yourself fully, even in the most intimate situations. Be careful about sending messages that suggest that you don't want to be around others. People are apt to think they're to blame for your reluctance. It's fine to be a recluse, but don't completely alienate yourself in the process.",
    "Be careful about being too boisterous and chipper around people who don't exactly feel the same way, Aquarius. Be sensitive to other people's feelings, and don't make jokes that are too harsh for the occasion. No one appreciates a wise guy. There's a somber mood to the day that's likely to form a dark cloud by late afternoon. Do your best to be the ray of sunshine and not the bolt of lightning.",
    "Your mood should be quite good for the most part, Pisces, but there's apt to be some tension in your relationships. Romantic endeavors aren't exactly in your favor now, so don't force an issue that seems too difficult to resolve. Find comfort in your internal warmth. By taking the time to nurture yourself, you will inevitably have more love to give to the people around you.",
    "There's a deep longing to be comforted and reassured, Aries. You may want nothing more than for someone fix you some warm, homemade soup. If this is the case, feel free to call and ask a good friend to come over. Don't continue to play the part of the strong, independent one if this isn't the way you feel. If you aren't honest about your needs, it will be impossible for anyone to know how to fulfill them.",
    "You may feel like you desperately need something, Taurus, yet you're unsure as to what it is exactly. Someone close to you may be trying to fit the missing puzzle piece into place, but this may be next to impossible if it's unclear which piece is actually missing. This difficult situation may lead to frustration if you aren't careful. Feel free to admit that you feel powerless. Don't be ashamed to say so.",
    "You may want to remedy every situation by talking things out or taking some sort of action, Gemini. Be careful of making any sudden moves before you really understand what you're feeling. One minute you may be full of exuberance and ready to launch into a new project, but once you start moving forward, you're suddenly feeling insecure. Take this resistance as a sign that maybe this isn't the best time to move forward.",
    "Compliments are apt to feel like gold to you, Cancer. There's nothing you need more than love and affection on a day like this. Beware that you may end up as putty in the hands of whoever showers you with flattery. You may also resent this need for attention and not be willing to receive it graciously. This isn't the right attitude. Receive accolades with open arms and offer an equal amount of affection in return.",
    "If you find that there's tension in a close relationship, you may get the feeling that this isn't the right partner for you, Leo. Don't automatically assume that the problem lies in your partner. Difficult situations involving the need for love and affection are likely to emerge regardless of the situation or the company. Instead of running to the next person, take the time to work things out.",
    "When tension builds, your sense of security is likely to falter, Virgo. You may have a hard time dealing with other people. You could be tempted to turn to food or alcohol for inner nourishment. Curing emotional needs by indulging this way may temper your ailment for a while, but it isn't the solution to the overall problem. Work out the bugs with the people involved, and don't try to do it on an empty stomach.",
    "You might have difficulty expressing your needs, Libra. The bottom line is that there's no right or wrong way, although it may be difficult to see this on a day like today. Deep-seated insecurity may make expressing yourself difficult. At a time when you feel like you should politely take things in, you really may be feeling like you want to run from the people around you.",
    "Although you may find it hard to express yourself in some ways, Scorpio, the one avenue that's completely wide open today is art. Difficult tension is laced with emotional insecurity, making it hard for you to express your feelings. If you feel that this is the case, find some other means of expressing these emotions. A large canvas and some paints will work quite nicely.",
    "You might be feeling rather insecure when it comes to your peace of mind, Sagittarius. Because of the insecurity, it may seem like your relationships are on the rocks. At the same time, having problems in your relationships is making you less likely to trust these close partners with your insecure feelings. Talking about your emotions in an honest manner will help you break out of this difficult situation."];
var IMAGES = ["http://www.astrologyhub.com/wp-content/uploads/capricorn-810x810.png",
    "http://www.astrologyhub.com/wp-content/uploads/aquarius-810x810.png",
    "http://www.astrologyhub.com/wp-content/uploads/pisces-810x810.png",
    "http://www.astrologyhub.com/wp-content/uploads/aries-810x810.png",
    "http://www.astrologyhub.com/wp-content/uploads/taurus-810x810.png",
    "http://www.astrologyhub.com/wp-content/uploads/gemini-810x810.png",
    "http://www.astrologyhub.com/wp-content/uploads/cancer-810x810.png",
    "http://www.astrologyhub.com/wp-content/uploads/leo-810x810.png",
    "http://www.astrologyhub.com/wp-content/uploads/virgo-810x810.png",
    "http://www.astrologyhub.com/wp-content/uploads/libra-810x810.png",
    "http://www.astrologyhub.com/wp-content/uploads/scorpio-810x810.png",
    "http://www.astrologyhub.com/wp-content/uploads/sagittarius-810x810.png"];

function reset(){
    var month_selector = document.getElementById("month_selector");
    var inputDate = document.getElementById("inputDate");
    var clicker = document.getElementById("clicker");
    document.getElementById("signOutput").style.visibility = "none";
    document.getElementById("horo").style.visibility = "none";
    month_selector.style.visibility = "visible";
    inputDate.style.visibility = "visible";
    clicker.style.visibility = "visible";
    for (var i = 1; i < 32; i++){
        var option = document.createElement("option");
        option.setAttribute("value", i);
        option.innerHTML = i;
        inputDate.appendChild(option);
    }
}

function onSubmit(){
    document.getElementById("signOutput").style.visiblity = "visible";
    document.getElementById("horo").style.visiblity = "visible";
    var month = document.getElementById("month_selector").value;
    var day = document.getElementById("inputDate").value;
    determineHoroscope(determineSign(month, day));
}

function determineSign(month, day){
    var signNum;
    if ((month == "feb" || month == "apr"  || month == "jun" || month == "sep" || month == "nov") && (day == 30 || day == 31)) {
        alert("I'm sorry, that date didn't input correctly. Please try again.");
    } else {
        if (month == "dec" && isBetween(day, 21, 31) || month == "jan" && isBetween(day, 1, 21)) {
            signNum = 0;
        } else if (month == "jan" && isBetween(day, 21, 31) || month == "feb" && isBetween(day, 1, 19)) {
            signNum = 1;
        } else if (month == "feb" && isBetween(day, 19, 29) || month == "mar" && isBetween(day, 1, 20)) {
            signNum = 2;
        } else if (month == "mar" && isBetween(day, 20, 31) || month == "apr" && isBetween(day, 1, 20)) {
            signNum = 3;
        } else if (month == "apr" && isBetween(day, 20, 30) || month == "may" && isBetween(day, 1, 21)) {
            signNum = 4;
        } else if (month == "may" && isBetween(day, 21, 31) || month == "jun" && isBetween(day, 1, 22)) {
            signNum = 5;
        } else if (month == "jun" && isBetween(day, 22, 30) || month == "jul" && isBetween(day, 1, 22)) {
            signNum = 6;
        } else if (month == "jul" && isBetween(day, 22, 31) || month == "aug" && isBetween(day, 1, 23)) {
            signNum = 7;
        } else if (month == "aug" && isBetween(day, 23, 31) || month == "sep" && isBetween(day, 1, 24)) {
            signNum = 8;
        } else if (month == "sep" && isBetween(day, 24, 30) || month == "oct" && isBetween(day, 1, 24)) {
            signNum = 9;
        } else if (month == "oct" && isBetween(day, 24, 31) || month == "nov" && isBetween(day, 1, 23)) {
            signNum = 10;
        } else {
            signNum = 11;
        }
    }
    var today = new Date();
    if (signNum == today.getMonth() && day == today.getDate()){
        document.getElementById("bdaymsg").innerHTML = "Happy birthday! You can lay the groundwork for great progress and solve an important problem this year.";
    }
    return signNum;
}

function determineHoroscope(sign){
    var name = document.getElementById("name").value;
    document.getElementById("signOutput").innerHTML = "Hello " + name + ", your sign is: " + ZODIACS[sign];
    document.getElementById("horo").innerHTML = HOROSCOPES[sign];
    document.getElementById("horoImg").setAttribute("src", IMAGES[sign]);
}

function isBetween(day, start, end){
    return day >= start && day < end;
}

function changeBoxColor(){
    document.getElementById("name").style.backgroundColor = "#ffffff";
    document.getElementById("name").style.color = "#000000";
}

function resetBoxColor(){
    document.getElementById("name").style.backgroundColor = "#8A2BE2";
    document.getElementById("name").style.color = "#ffffff";
}

function changeButtonColor(){
    document.getElementById("clicker").style.backgroundColor = "#ffffff";
    document.getElementById("clicker").style.color = "#000000";
}

function resetButtonColor(){
    document.getElementById("clicker").style.backgroundColor = "#8A2BE2";
    document.getElementById("clicker").style.color = "#ffffff";
}

function changeMonthColor(){
    document.getElementById("month_selector").style.backgroundColor = "#ffffff";
    document.getElementById("month_selector").style.color = "#000000";
}

function resetMonthColor(){
    document.getElementById("month_selector").style.backgroundColor = "#8A2BE2";
    document.getElementById("month_selector").style.color = "#ffffff";
}

function changeDateColor(){
    document.getElementById("inputDate").style.backgroundColor = "#ffffff";
    document.getElementById("inputDate").style.color = "#000000";
}

function resetDateColor(){
    document.getElementById("inputDate").style.backgroundColor = "#8A2BE2";
    document.getElementById("inputDate").style.color = "#ffffff";
}

