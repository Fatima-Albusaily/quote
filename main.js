var quotes = ['"Be yourself; everyone else is already taken. \n   ― Oscar Wilde"' , '“So many books, so little time.” \n ― Frank Zappa' , '“A room without books is like a body without a soul.” \n ― Marcus Tullius Cicero' , '“You only live once, but if you do it right, once is enough.”\n ― Mae West' , '“Be the change that you wish to see in the world.” \n ― Mahatma Gandhi' , '“In three words I can sum up everything I have learned about life: it goes on” \n ― Robert Frost']

function randomquote() {
    var i = Math.round(Math.random() * 10 - 4)
    if (i < 0) {
        i = i * -1
    }
    document.getElementById('quote').innerHTML = quotes[i]
}