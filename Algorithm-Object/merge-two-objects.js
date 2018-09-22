var a = { foo: true, count:1 };
var b = { bar: false };

function extend(arr1,arr2){
    var output = {};
    var array = [arr1, arr2];

    array.forEach(function(value){
        for(var key in value){
            if(!output.hasOwnProperty(key)){
                output[key] = value[key];
            }
        }
    });
    return output;
}
console.log(extend(a,b));