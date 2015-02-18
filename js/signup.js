function focusStart()
{
    var name=document.reg.username.focus();
    return true;
}

function name_validate()
{
    var name=document.reg.username;
    var name_len=name.value.length;
    if(name_len == 0 || name_len >= 30 || name_len <= 5)
    {
        alert("Name should  be between 5 characters to 30 characters");
        name.focus();
        return false;
    }
    document.reg.roll.focus();
    return true;
}

function roll_validate()
{
    var roll=document.reg.roll;
    var roll_len=roll.value.length;
    var num_check="^[0-9]*$"
    if(roll_len <= 8 && roll_len >= 3 && roll.value.match(num_check))
    {
        document.reg.mailid.focus();
        return true;
    }
    alert("Roll number format is incorrect.");
    roll.focus();
    return false;
}

function mail_validate()
{
    var mail=document.reg.mailid;
    var num_check="[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}"
    if(mail.value.match(num_check))
    {
        document.reg.mailid.focus();
        return true;
    }
    alert("Email ID format is incorrect.");
    mailid.focus();
    return false;
}

function pass_validate()
{
  var passid = document.reg.pwd;
  var passid_len = passid.value.length;
  var my=12
  var mx=7
  if (passid_len == 0 ||passid_len >= my || passid_len < mx)
  {
    alert("Password should not be empty / length be between "+mx+" to "+my);
    pwd.focus();
    return false;
  }
  document.registration.pwd2.focus();
  return true;
  }
}

function pass2_validate()
{
  var pass2 = document.reg.pwd2;
  var pass  = document.reg.pwd;
  if (pass != pass2)
  {
    alert("Password should not be empty / length be between "+mx+" to "+my);
    pwd.focus();
    return false;
  }
  document.registration.subButton.focus();
  return true;
  }
}
