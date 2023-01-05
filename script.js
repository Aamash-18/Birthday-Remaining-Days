function myFunction() {
    if (document.getElementById("birthdate").value.length != 0) {
        var birthdayDate = new Date(document.getElementById("birthdate").value);
        var currenDate = new Date();

        var birthdayMillisecond = birthdayDate.getTime();
        var currentMillisecond = currenDate.getTime();

        var myAgeMillisecond = currentMillisecond - birthdayMillisecond;
        var myAge = myAgeMillisecond / 1000 / 60 / 60 / 24 / 365;

        var nextBirthdayYear = currenDate.getFullYear();

        if (currenDate.getMonth() > birthdayDate.getMonth()) {
            nextBirthdayYear = nextBirthdayYear + 1;
        }

        var nextBirthday = new Date();
        nextBirthday.setDate(birthdayDate.getDate());
        nextBirthday.setMonth(birthdayDate.getMonth());
        nextBirthday.setFullYear(nextBirthdayYear);

        var nextBirthdayMillisecond = nextBirthday.getTime();

        var nextBirthdayRemainingMillisecond =
            nextBirthdayMillisecond - currentMillisecond;

        var nextBirthdayRemainingDays =
            nextBirthdayRemainingMillisecond / 1000 / 60 / 60 / 24;

        document.getElementById("result").innerHTML =
            "Congretulation in advance 🎉!🎉!🎉. After " +
            nextBirthdayRemainingDays +
            " Days you will be of " +
            Math.trunc(myAge + 1) +
            " years...";
    } else {
        document.getElementById("result").innerHTML =
            "<h4 style='color:red'>Please Enter Date first</h4>";
    }
}
