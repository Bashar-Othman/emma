const example1 = [
    "hello world",
    "this is a test",
    "this is an example"
];

function getCommonChars(arr) {
    let mainset = null;
    let mainarr = "";
    for (let entry of arr) {
        mainarr+=entry;

    }
    console.log(mainarr);
    mainset = new Set(mainarr);
    console.log(mainset);
}

getCommonChars(example1);

