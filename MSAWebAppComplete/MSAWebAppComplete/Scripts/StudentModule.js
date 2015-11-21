var StudentModule = (function () {

    //callback pushes information out 
    return {
        getStudents: function (callback) {
            // code to make api calls goes here
            console.log("this was called from studentmod");

            $.ajax({
                type: "GET",
                dataType: "json",
                url: "https://xizhemsaday2.azurewebsites.net/api/Students",
                success: function (data) {
                    callback(data);//so this is equivilent to setupStudentsTable(data)
                }
            });
        }
    }
}());