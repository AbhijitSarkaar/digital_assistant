export const response = (text) => {
    text = text.toLowerCase().split(' ').filter(word => word.length).join(' ');
    switch(text) {

        //Greetings 
        case "hi": return "Hi There. How are you doing today?"
        case "hey": return "Hey There. How are you doing today?"
        case "how are you": return "I'm Great! Thanks"
        case "how are you doing today": return "I'm Great! Thanks"
        case "how is the weather today": return "It's Bengalore! So raining as usual!"

        //Handling User Responses
        case "thanks": return "You're welcome!"
        case "thank you": return "You're welcome!"
        case "thanks a lot": return "You're welcome!"
        case "you are great": return "Thank you so much!"
        case "you are awesome": return "Thank you so much!"
        case "i am doing fine": return "Awesome!"
        case "i am fine": return "Awesome!"
        case "i am doing good": return "Awesome!"
        case "i am good": return "Awesome!"
        case "i am doing great": return "Awesome!"
        case "i am great": return "Awesome!"
        case "fine": return "Awesome!"
        case "good": return "Awesome!"
        case "very good": return "Awesome!"
        case "awesome": return "Awesome!"
        case "great": return "Awesome!"
        case "okay": return "Yeah"
        case "ok": return "Yeah"
        case "cool": return "Cool"
        case "by": return "Bye Bye!"

        //Questions from User
        case "what is your name": return "I am Digital Assistant"
        case "who are you": return "I am your digital assistant!"
        case "what's your name": return "I am Digital Assistant"
        case "who is siri": return "She is a digital assistant developed by Apple"
        case "who is cortana": return "She is a digital assistant developed by Microsoft"
        case "who is billy": return "She is a digital assistant developed by Yellow Messenger"
        case "what do you do": return "I can help you with everything"
        case "what is 2 + 2": return "Sorry! I am weak at maths. Ask me anything except maths"
        case "what is the capital of india": return "It's New Delhi"


        default: return "I could not understand! Can you please repeat?"
    }
}