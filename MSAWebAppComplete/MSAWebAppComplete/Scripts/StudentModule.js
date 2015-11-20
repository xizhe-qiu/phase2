﻿var StudentModule = (function () {

    //callback pushes information out 
    return {
        getStudents: function (callback) {
            // code to make api calls goes here
            console.log("this was called from studentmod");

            $.ajax({
                type: "GET",
                dataType: "jsonp",
                url: "http://api.uinames.com/?amount=25",
                success: function (data) {
                    callback(data);//so this is equivilent to setupStudentsTable(data)
                }
            });
        }
    }
}());