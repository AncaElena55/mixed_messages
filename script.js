const messageComponents = {
    actions: ["win a big prize", "become a dancer", "fight in a street", "eat the best pizza ever"],
    personas: ["your soulmate", "a puppy", "a stranger", "a poor child"],
    places: ["a new Caffe", "beach", "music store", "a new country", "ex"]
}

// Random number generator
const randomNumber = num => Math.floor(Math.random() * num);

//Function that makes fortune teller random messages
const randomMessage = () => {
  for (let option in messageComponents) {
    let index = randomNumber(messageComponents[option].length);
    switch (option) {
        case 'actions':
            console.log('You will ' + messageComponents[option][index] + ' soon.');
            break;
        case 'personas':
            console.log('You will meet ' + messageComponents[option][index] + ' tomorrow.');
            break;
        case 'places':
            console.log('You will go to the ' + messageComponents[option][index] + ' next week.');
            break;
    }
  }
}

randomMessage();
