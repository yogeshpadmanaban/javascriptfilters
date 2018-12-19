var UserList = {name:"saran", age:"70", gender:"male", location:"madurai", doj:"11/01/2012", vehicle:"yes", city:"metropolitan",experience:"5"};
var userdata = [{
    name: "raj",
    age: "30",
    gmail: "a@gmail.com",
    location:"chennai",
    doj:"March 12, 2017",
    vehicle:"yes",
    city:"metropolitan",
    experience:"2"

}, {
    name: "sarath",
    age: "34",
    gmail: "a@gmail.com",
    location:"coimbatore",
    doj:"june 12, 2016",
    vehicle:"yes",
    city:"metropolitan",
    experience:"2"
}, {
    name: "barath",
    age: "60",
    gmail: "b@gmail.com",
    location:"chennai",
    doj:"December 12, 2018",
    vehicle:"no",
    city:"no",
    experience:"5"
},
{
    name: "sai",
    age: "45",
    gmail: "ss@gmail.com",
    location:"chennai",
    doj:"December 18, 2017",
    vehicle:"no",
    city:"no",
    experience:"5"
},{
    name: "saruk",
    age: "58",
    gmail: "a@gmail.com",
    location:"bangalore",
    doj:"Sarath 22, 2018",
    vehicle:"yes",
    city:"metropolitan",
    experience:"5"

},{
    name: "chandru",
    age: "33",
    gmail: "ch@gmail.com",
    location:"coimbatore",
    doj:"April 12, 2018",
    vehicle:"yes",
    city:"metropolitan",
    experience:"7"

},
];

ageLimit();
userList();
dateJoining();
experienceStatus();
userLocation();
userVehicle();
userFilterByName();
userSortByDoj();
userSortByage();
metropolitan();


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
        //const userage=userdata[i].filter(userdata[i].age = userdata[i].age<=35)
                if((userdata[i].age<=35)&&(userdata[i].age>30)){
            console.log(userdata[i].name+" "+userdata[i].age);
        }
       //console.log(userage)
        
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

function userFilterByName(){
    var user= userdata.filter(function(data){
        return data.name == "sarath";
        
    });
    console.log(user);
}
function userSortByDoj(){
    var d=userdata.sort(function(a, b){
        var date1=new Date(a.doj), date2=new Date(b.doj)
        return date1-date2 //sort by date ascending
    })
    console.log(d);

}
function userSortByage(){
    var age=userdata.sort(function(a, b){
        var age1=a.age, age2=b.age
        return age1-age2
    })
    console.log(age);
}
function metropolitan(){
    var metro=userdata.filter(function(data){
        return data.city=="metropolitan"

    })
    console.log("User in metropolitan city"+metro);
}


