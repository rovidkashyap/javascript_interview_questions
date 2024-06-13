/*
    JSON stands for JavaScript Object Notation. It is a lighweight
    data-interchange format. It is easy for humans to read and write.
    It is easy for machines to parse and generate.

    example of JSON object:
    {
        "name": "Rovid Kashyap",
        "age": 30,
        "city": "New Delhi"
    }

    Now Let see how to parse JSON data to JavaScript using a method
    called JSON.parse().
*/

let text = '{ "var1": "Rovid", "gender": "male" }';

let obj = JSON.parse(text, function (key, value) {
    if (value == 'male') {
        return ("female");
    } else {
        return value;
    }
});
console.log(obj.var1 + ", " + obj.gender);