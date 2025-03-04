// Stack(primitive) , Heap(non-primitive)

let myYoutubename = "sahilnegi.com "

let anothername = myYoutubename
anothername = "anything"

console.log(myYoutubename);
console.log(anothername);

let user = {
    email: "user@google.com",
    upi:"user@byl"
}

let user2 = user

user2.email = "sahil@google.com"

console.log(user.email);
console.log(user2.email);

