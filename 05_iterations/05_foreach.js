const coding = ["js", "rb", "py", "java", "cpp"]

//coding.forEach( function (item) {
//    console.log(item);
    
//} )

//coding.forEach( (item) => {
//    console.log(item);
//})

//function printMe(item){
//    console.log(item);
    
//}

//coding.forEach(printMe)

//coding.forEach( (item, index, arr ) => {
//    console.log(item, index, arr);
//})

const bleh = [
    {
    languageName: "javascript",
    languageFileName: "js"
    },

    {
    languageName: "java",
    languageFileName: "java"
    },

    {
    languageName: "python",
    languageFileName: "py"
    }
]

bleh.forEach( (item) => {
    console.log(item.languageName);
    console.log(item.languageFileName);
    
    
});