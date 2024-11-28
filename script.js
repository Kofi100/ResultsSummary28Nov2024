$(document).ready(function populate() {
    $.getJSON("data.json",function addData(data) {

        console.log(data)
    })
    
})