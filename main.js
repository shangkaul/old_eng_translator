var btn=document.querySelector("#translate_btn")
var inp=document.querySelector("#input_txt")
var otp=document.querySelector("#output_txt")


var btnHandler=btn.addEventListener('click',()=>{

var base_uri="https://api.funtranslations.com/translate/oldenglish.json?text=";

var uri_arg=base_uri+encodeURI(inp.value)

console.log("Api call to: " +uri_arg)


fetch(uri_arg)
.then(res=>res.json())
.then(json=>{
    console.log(json.contents)
    otp.value=json.contents.translated
})
.catch(err=>{
     console.log("Error raised: " +err)
    });

});