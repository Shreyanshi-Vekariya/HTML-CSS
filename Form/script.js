function validation(){
    var application = document.getElementById("anum").value;
    var cnum = document.getElementById("cnum").value;
    var adnum = document.getElementById("adharnum").value;
    var cat = document.getElementById("category").value;
    var studentname = document.getElementById("stuname").value;
    var dob = document.getElementById("bdate").value;
    var fname = document.getElementById("faname").value;
    var religion = document.getElementById("Religion").value;
    var emailid = document.getElementById("email").value;

    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var mname = document.getElementById("mname").value;
    var nationality = document.getElementById("nat").value;
    var add = document.getElementById("address").value
    var city = document.getElementById("city").value
    var state = document.getElementById("state").value
    if(application == ""){
        document.getElementById('aid').innerHTML="please fill these field";
        application.focus();
        return false;
    }
    if(!application.match(/^\d+/)){
        document.getElementById('aid').innerHTML="please enter only numeric character";
        application.focus();
        return false;
    }
    if(cnum == ""){
        document.getElementById('connum').innerHTML="please fill these field";
        cnum.focus();
        return false;
    }
    if(isNaN(cnum)){
        document.getElementById('connum').innerHTML = "enter only number";
        cnum.focus();
        return false;
    }
    if(cnum.length != 10){
        document.getElementById('connum').innerHTML = "contact number must be 10 digits";
        cnum.focus();
        return false;
    }
    if(adnum == ""){
        document.getElementById('adhar').innerHTML = "please fill the field";
        adnum.focus();
        return false;
    }
    if(isNaN(adnum)){
        document.getElementById('adhar').innerHTML = "enter only number";
        adnum.focus();
        return false;
    }
    if(adnum.length != 12){
        document.getElementById('adhar').innerHTML = "contact number must be 10 digits";
        adnum.focus();
        return false;
    }
    if(cat == "Default"){
        document.getElementById('cat').innerHTML = "plese select category";
        cat.focus();
        return false;
    }
    if(studentname == ""){
        document.getElementById('studentname').innerHTML = "please fill the field";
        studentname.focus();
        return false;
    }
    if(!isNaN(studentname)){
        document.getElementById('studentname').innerHTML = "enter only character";
        studentname.focus();
        return false;
    }
    if(studentname.length < 3){
        document.getElementById('studentname').innerHTML = "enter valid name";
        studentname.focus();
        return false;
    }
    if(dob == ""){
        document.getElementById('dob').innerHTML="please fill these field";
        dob.focus();
        return false;
    }
    if(fname == ""){
        document.getElementById('fathername').innerHTML = "please fill the field";
        studentname.focus();
        return false;
    }
    if(!isNaN(fname)){
        document.getElementById('fathername').innerHTML = "enter only character";
        studentname.focus();
        return false;
    }
    if(fname.length < 3){
        document.getElementById('fathername').innerHTML = "enter valid name";
        studentname.focus();
        return false;
    }
    if(cat == "Default"){
        document.getElementById('reg').innerHTML = "plese select category";
        cat.focus();
        return false;
    }
    if(emailid == ""){
        document.getElementById('mail').innerHTML = "please fill the field";
        emailid.focus();
        return false;
    }
    if(!(emailid.match(mailformat))){
        document.getElementById('mail').innerHTML = "You have entered an invalid email address!";
        emailid.focus();
        return false;
        
    }
    if(mname == ""){
        document.getElementById('mothername').innerHTML = "please fill the field";
        mname.focus();
        return false;
    }
    if(!isNaN(mname)){
        document.getElementById('mothername').innerHTML = "enter only character";
        mname.focus();
        return false;
    }
    if(mname.length < 3){
        document.getElementById('mothername').innerHTML = "enter valid name";
        mname.focus();
        return false;
    }
    if(nationality == ""){
        document.getElementById('nationality').innerHTML = "please fill the field";
        nationality.focus();
        return false;
    }
    if(!isNaN(nationality)){
        document.getElementById('nationality').innerHTML = "enter only character";
        nationality.focus();
        return false;
    }
    if(nationality.length < 3){
        document.getElementById('nationality').innerHTML = "enter valid name";
        nationality.focus();
        return false;
    }
    if(add == ""){
        document.getElementById('add').innerHTML = "please fill the field";
        add.focus();
        return false;
    }
    if(!isNaN(add)){
        document.getElementById('add').innerHTML = "enter only character";
        add.focus();
        return false;
    }
    if(add.length < 3){
        document.getElementById('add').innerHTML = "enter valid name";
        add.focus();
        return false;
    }
    if(city == ""){
        document.getElementById('cities').innerHTML = "please fill the field";
        city.focus();
        return false;
    }
    if(!isNaN(city)){
        document.getElementById('cities').innerHTML = "enter only character";
        city.focus();
        return false;
    }
    if(city.length < 3){
        document.getElementById('cities').innerHTML = "enter valid name";
        city.focus();
        return false;
    }
    if(state == "Default"){
        document.getElementById('states').innerHTML = "plese select category";
        state.focus();
        return false;
    }


}

