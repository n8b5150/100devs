// Make a program that filters a list of strings and returns a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

// i.e.

// friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
// Note: keep the original order of the names in the output.


function friendOrFoe(arr){
    let friends = []
    arr.forEach( e => {if (e.length == 4){
        friends.push(e)
            }
        })
    return friends
}


console.log(friendOrFoe(["Ryan", "Kieran", "Jason", "Yous"]), ["Ryan", "Yous"])

//best answer uses filter
// function friend(friends){
//     return friends.filter(n => n.length === 4)
// }