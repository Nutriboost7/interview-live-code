const test = [
    "The quick brown fox jumps over the lazy dog",
    "abcdefghijklmnopqrstuvwxy",
    "abcdefghijklmnopqrstuvwxyz",
    "1234 abc def!@# ghijk LMNOP qrs TUV wxyz",
    "",
    "Hello World",
    "Pack my box with five dozen liquor jugs",
]

const checkReverseCode = (t) => {
let alphabetic = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    const mergeText = t.toUpperCase().split(" ").join("").split("")
    for (const text of mergeText) {
        alphabetic = alphabetic.filter(v => v !== text)
    }
    if (alphabetic.length > 0) {
        return false
    } else {
        return true
    }
}
for (const t of test) {
    console.log(checkReverseCode(t))
}