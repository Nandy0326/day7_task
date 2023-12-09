/*
let XMLHttpRequest = require('xhr2');

let xhr = new XMLHttpRequest();

// open the connection
xhr.open('GET', 'https://restcountries.com/v3.1/all');


// function to handle the response from the web server
xhr.onload = function () {
    let countrydata=JSON.parse(xhr.responseText)
    let value1=countrydata.filter(value=>{

        if(value.region=='Asia')
        {
            return true;
        }
    });
    console.log(value1);
}
xhr.send();
*/
/*
let XMLHttpRequest = require('xhr2');

let xhr = new XMLHttpRequest();

// open the connection
xhr.open('GET', 'https://restcountries.com/v3.1/all');


// function to handle the response from the web server
xhr.onload = function () {
    let countrydata=JSON.parse(xhr.responseText)
    let value1=countrydata.filter(value=>{
      if(value.population<200000)
      {
        return true;
      }
    });
    console.log(value1);
}
xhr.send();
*/
/*

let XMLHttpRequest = require('xhr2');

var request=new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all');

request.onload=function (){
    var countryData=JSON.parse(request.responseText);
    const population=countryData.reduce((acc)=>{
        return acc.population;
    })
    console.log(population);}

request.send();
*/
let XMLHttpRequest = require('xhr2');

var request = new XMLHttpRequest();
request.open('Get', 'https://restcountries.eu/rest/v2/all', true)
request.onload = function () {
        var data = JSON.parse(request.responseText);
        var cur=[];
        for(i=0;i<data.length;i++){
            if(data[i].currencies=="USD")
            {
                console.log("name:",data[i].name,"==>",data[i].currencies);
            }
        }
    }
    request.send();
            