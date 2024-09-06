const xhr = new XMLHttpRequest(); //creates a message

xhr.addEventListener('load', () => {
    console.log(xhr.response);
});

xhr.open('GET', 'https://supersimplebackend.dev/images/apple.jpg'); //sets it up
xhr.send(); //sends it to the other computer's url
