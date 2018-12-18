var UserList = {name:"saran", age:"70", gender:"male", location:"madurai", doj:"11/01/2012", vehicle:"yes", city:"metropolitan",experience:"5"};
var userdata = [{
    name: "raj",
    age: "30",
    gmail: "a@gmail.com",
    location:"chennai",
    doj:"15/01/2017",
    vehicle:"yes",
    city:"metrpolitan",
    experience:"2"

}, {
    name: "sarath",
    age: "34",
    gmail: "a@gmail.com",
    location:"coimbatore",
    doj:"11/08/2017",
    vehicle:"yes",
    city:"metrpolitan",
    experience:"2"
}, {
    name: "barath",
    age: "60",
    gmail: "b@gmail.com",
    location:"chennai",
    doj:"23/01/2017",
    vehicle:"no",
    city:"no",
    experience:"5"
},
{
    name: "sai",
    age: "45",
    gmail: "ss@gmail.com",
    location:"chennai",
    doj:"23/01/2017",
    vehicle:"no",
    city:"no",
    experience:"5"
},{
    name: "saruk",
    age: "58",
    gmail: "a@gmail.com",
    location:"bangalore",
    doj:"15/01/2017",
    vehicle:"yes",
    city:"metrpolitan",
    experience:"5"

},{
    name: "chandru",
    age: "33",
    gmail: "ch@gmail.com",
    location:"coimbatore",
    doj:"27/01/2017",
    vehicle:"yes",
    city:"metrpolitan",
    experience:"7"

}];
ageLimit();
userList();
dateJoining();
experienceStatus();
userLocation();
userVehicle();


function userList() {
    for (var i = 0; i < userdata.length; i++) {
        console.log(userdata[i].name+" "+userdata[i].age+" "+userdata[i].gmail+" "+userdata[i].location+" "+userdata[i].doj+" "+userdata[i].vehicle+" "+userdata[i].city);
	}
}

function dateJoining(){
    for (var i = 0; i < userdata.length; i++) {
        console.log(userdata[i].name+" "+userdata[i].doj);
	}

}

function experienceStatus(){
    for (var i = 0; i < userdata.length; i++) {
        if((userdata[i].experience<=2)){
            console.log("Developer"," "+userdata[i].name);
        }
        else if(userdata[i].experience<=5){
            console.log("Team leader"," "+userdata[i].name);
        }
        else if(userdata[i].experience<=7){
            console.log("Project Manager"," "+userdata[i].name);
        }
        
	}

}

function ageLimit(){
    for (var i = 0; i < userdata.length; i++) {
        if((userdata[i].age<=35)&&(userdata[i].age>30)){
            console.log(userdata[i].name+" "+userdata[i].age);
        }
        
    }

}

function userLocation(){
    for (var i = 0; i < userdata.length; i++) {
        console.log(userdata[i].name+" "+"visited in "+userdata[i].location);
	}

}
function userVehicle(){
    for (var i = 0; i < userdata.length; i++) {
        if(userdata[i].vehicle=="yes"){
            console.log(userdata[i].name+" "+"has vehicle");
        }
        
	}

}
