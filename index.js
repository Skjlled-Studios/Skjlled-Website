//index.js

document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("input")
    inputField.addEventListener("keydown", function(e) {
        if (e.code === "Enter") {
            let input = inputField.value;
            console.log(`I typed '${input}'`)
            inputField.value = "";
            output(input);
    }
  });
});

function pullskeywords() {

    //remove all characters except word characters, space, and digits
      let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");
    
    // 'i feel happy' -> 'happy'
      text = text
        .replace(/ a /g, " ")
        .replace(/i feel /g, "")
        .replace(/whats/g, "what is")
        .replace(/please /g, "")
        .replace(/ please/g, "");
    }

    const trigger = [
        //0 
        ["hi", "hey", "hello", "yo", "yoo", "uwu", "sup"],
        //1
        ["how are you", "how are things"],
        //2
        ["what is going on", "what is up", "sup"],
        //3
        ["happy", "good", "well", "fantastic", "cool", "epic", "amazing"],
        //4
        ["bad", "bored", "tired", "sad"],
        //6
        ["thanks", "thank you", "ty", "tysm"],
        //7
        ["bye", "good bye", "goodbye", "cya"]
        ];
        
        const reply = [
        //0 
        ["Hello!", "Hi!", "Hey!", "Hi there!", "Yoooooooooooo!"], 
        //1
        [
            "Doing great, playing games from Skjlled Studios",
            "Pretty well, how are you?",
            "Fantastic, how are you?"
          ],
        //2
        [
            "Nothing much",
            "Exciting things I just bought a game from Skjlled Studios!",
            "I'm programming a new game for Skjlled!"
          ],
        //3
        ["That's very epic, have you been playing skjlled games?"],
        //4
        ["Why?", "You should try a game from Skjlled"],
        //6
        ["You're welcome", "No problem", "Glad I could help!"],
        //7
        ["Goodbye", "See you later", "Cya"],
        ];
        
        const alternative = [
          "I couldn't quite get that, try again. The best way to let me know what you want is to use clear words. If I still can't help you, email Skjlled Support at Skjlled@Skjlled.com"
        ];