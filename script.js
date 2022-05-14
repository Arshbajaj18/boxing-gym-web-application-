//---------------------------------------------------DARK LIGHT MODE TOGGLE-----------------------------------------------------------------
let counter = 1
let counter2 = 1
let toggleswitch = document.getElementById('bulb-button')
let aboutimgswitch = document.querySelector('.aboutimg')
let sourceheadervideo = document.querySelector(".hdr-vdo")
let logoswitch = document.getElementsByClassName('logo-light-dark')
toggleswitch.addEventListener('click',togglebulb)
toggleswitch.addEventListener('click',toggleaboutsection)
var emailconsultancydiv = document.querySelector(".consultancy-content")
function togglebulb(event){
  if(counter%2==0){
      
      toggleswitch.src = 'bulb-on.png';
      counter = counter+1;
      sourceheadervideo.src = 'vdo5.mp4';
      logoswitch.src = 'logoimg-dark.png';
      sourceheadervideo.defaultPlaybackRate = 5.0;
      var styles = `
        .header-options li{

          color: aliceblue;
        }
        .bmi-calc{
          background: rgba(255, 0, 0, .3);
        }
        .pricing-table-button{
          background-color: skyblue;
        }
        .subscription-block{
          background-color: #AFEEEE;
        }
        .monthly-sub , .yearly-sub{
          color:black;
        }

        .get-free-consultance{
          background-color: skyblue;
        }
        .consultancy-content{
          background-color: skyblue;
        }
        
      `
      
      var styleSheet = document.createElement("style")
      styleSheet.innerText = styles
      document.head.appendChild(styleSheet)
      console.log('hello1')

      
      
      
    }
    else{
      toggleswitch.src = 'bulb-off.png';
      counter=counter+1;
      sourceheadervideo.defaultPlaybackRate = 1.0;
      sourceheadervideo.src = 'vdo4.mp4';
      
      logoswitch.src = 'logoimg-light.png';
      var styles = `
        .header-options li{

          color: aliceblue;
        }
        .bmi-calc{
          background: rgba(0, 0, 255, .3);
        }
        .pricing-table-button{
          background-color: red;
        }
        .subscription-block{
          background-color: darkgrey;
        }
        .monthly-sub , .yearly-sub{
          color:aliceblue;
        }
        .get-free-consultance{
          background-color: red;
        }
        .consultancy-content{
          background-color: red;
        }


      `

      var styleSheet = document.createElement("style")
      styleSheet.innerText = styles
      document.head.appendChild(styleSheet)
      console.log('hello2')
    } 

    // if(consultanceinput.background-Img.src==url("bluephone.png")){
    //   consultanceinput.background-Img.src==url("redphone.png")
    // }


}
function toggleaboutsection(ev){
  if(counter2%2==0){
    aboutimgswitch.src = 'img12.png'
    console.log('case1')
    console.log(aboutimgswitch.src)
    counter2=counter2+1
    var aboutstyles = `
      .about-section{
        background-color: aliceblue;
      }
      .about-list li,.subhead, .pre-heading{
        color: rgba(0, 0, 0, 0.76);
      }
      
    `
    var aboutstyleSheet = document.createElement("style")
    aboutstyleSheet.innerText = aboutstyles
    document.head.append(aboutstyleSheet)
  }
  else{
    aboutimgswitch.src = 'img10.png'
    console.log('case2')
    console.log(aboutimgswitch.src)
    counter2=counter2+1
    var aboutstyles = `
      .about-section{
        background-color: rgba(0, 0, 0, 0.76) ;
      }
      
      
      
    `
    var aboutstyleSheet = document.createElement("style")
    aboutstyleSheet.innerText = aboutstyles
    document.head.append(aboutstyleSheet)
  }
}

//---------------------------------------------------------------------------BMI CALCULATOR---------------------------------------------------
let bmitab1 = document.getElementById('tab1')
let bmitab2 = document.getElementById('tab2')
bmitab1.addEventListener('click',standardcbmitab)
bmitab2.addEventListener('click',metricbmitab)
let calccounter = 1;
var calvalue = 1;
function metricbmitab(e){
  var bmistyles = `
    .tab-panel1{
      display: none;
    }
    .tab-panel2{
      display: block;
    }
    
  `
  calvalue =0
  var bmistyleSheet = document.createElement("style")
  bmistyleSheet.innerText = bmistyles
  document.head.appendChild(bmistyleSheet)
  calccounter = 0;
}

function standardcbmitab(e){
  var bmistyles = `
    .tab-panel1{
      display: block;
    }
    .tab-panel2{
      display: none;
    }
    

  `
  calvalue = 1
  var bmistyleSheet = document.createElement("style")
  bmistyleSheet.innerText = bmistyles
  document.head.appendChild(bmistyleSheet)
  calccounter =1;
}
// ---------------------------------------------BMI CALCULATE VALUE-------------------------------------------
// METRIC
var calculatebmibutton = document.querySelector(".calc-bmi-button")
var standardheightfootinput = document.querySelector(".foot")
var standardheightinchinput = document.querySelector(".inch")
var standardweightinput = document.querySelector(".pounds")
var bmidisplaydiv = document.querySelector(".bmi-display")
var metricheightinput = document.querySelector(".centimeter")
var metricweightinput = document.querySelector(".kilograms")

var bmiremcounter =1
// calculatebmibutton.addEventListener('click',calccounterupdate)

calculatebmibutton.addEventListener('click',calculatebmi)
function calculatebmi(e){
  
  if(calvalue == 1){
    //STANDARD
    var heightininches = (12* +standardheightfootinput.value) + (+standardheightinchinput.value)
    var bmivalue = (703*(+standardweightinput.value /(heightininches*heightininches))).toFixed(2)
    console.log(bmivalue)
    console.log('standard')
  }
  else{
  // METRIC
    var bmivalue = (10000*(+metricweightinput.value/((+metricheightinput.value)*(+metricheightinput.value)))).toFixed(2)
    console.log(bmivalue)
    console.log('metric')
  }
  if(bmiremcounter>1){
    document.querySelectorAll(".bmi-display-div")[0].remove()
  }
  var bmidisplay = document.createElement("div")
  bmidisplay.className +="bmi-display-div"
  bmidisplay.innerText = `YOUR BMI IS ${bmivalue}`
  bmidisplaydiv.appendChild(bmidisplay)
  bmiremcounter++;
}


// --------------------------------------------------------------------- PRICING CHANGE ---------------------------------------
let pricecounter = 1;
let pricechange = document.querySelector(".slider")
let pricing1 = document.querySelector(".pricing1")
let pricing2 = document.querySelector(".pricing2")
let pricing3 = document.querySelector(".pricing3")
pricechange.addEventListener('click',changeprice)
function changeprice(e){
  if(pricecounter%2==0){
    
    pricing1.innerHTML = "£580<span>700</span>" 
    pricing2.innerHTML = "£760<span>960</span>" 
    pricing3.innerHTML = "£1250<span>1560</span>" 
    pricecounter++
  }
  else{
    pricing1.innerHTML = "£50"
    pricing2.innerHTML = "£80"
    pricing3.innerHTML = "£130"
    pricecounter++
  }
}
//----------------------------------------------------------CSS CHANGE ON SCROLL-------------------------------------
let headnavbar = document.querySelector(".logo-heading")
document.addEventListener('scroll',scrolleffects)
function scrolleffects(e){
var headeroptionsscroll = document.querySelector(".header-options")
var button64scroll = document.querySelector(".button-64")

var logoscroll = document.querySelector(".logo")
var bmicalcscroll = document.querySelector(".bmi-calc")
var logindivscroll = document.querySelector(".login-div")
if(window.scrollY>0){
  if(headeroptionsscroll.classList.contains("header-options-scroll") == false){
    headeroptionsscroll.classList += " header-options-scroll";
  }
  if(headnavbar.classList.contains("logo-heading-scroll") == false){
    headnavbar.classList += " logo-heading-scroll";
  }
  if(button64scroll.classList.contains("button-64-scroll") == false){
    button64scroll.classList += " button-64-scroll";
  }
  if(logoscroll.classList.contains("logo-scroll") == false){
    logoscroll.classList += " logo-scroll";
  }
  if(bmicalcscroll.classList.contains("bmi-calc-scroll") == false){
    bmicalcscroll.classList += " bmi-calc-scroll";
  }
  if(logindivscroll.classList.contains("login-div-scroll") == false){
    logindivscroll.classList += " login-div-scroll";
  }
}
else{
  headeroptionsscroll.classList.remove("header-options-scroll")
  headnavbar.classList.remove("logo-heading-scroll")
  button64scroll.classList.remove("button-64-scroll")
  logoscroll.classList.remove("logo-scroll")
  bmicalcscroll.classList.remove('bmi-calc-scroll')
  logindivscroll.classList.remove('login-div-scroll')
}

}
//----------------------------------------------------LOGIN POPUP------------------------------------------
var becomeamember = document.querySelector(".button-64")
var button642 = document.querySelector(".button-64-2")
button642.addEventListener('click',becomeamemberpopup)
becomeamember.addEventListener('click',becomeamemberpopup)
function becomeamemberpopup(e){
  var displayloginpagecss = `
  .login-page{
    display: block;
  }
  ` 
  var displayloginpage = document.createElement('style')
  displayloginpage.innerText = displayloginpagecss
  document.head.appendChild(displayloginpage)
}
var crossloginbutton = document.querySelector('.cross-button')
crossloginbutton.addEventListener('click',crossloginpage)
function crossloginpage(e){
  let displayloginpagecss = `
  .login-page{
    display: none;
  }
  ` 
  let displayloginpage = document.createElement('style')
  displayloginpage.innerText = displayloginpagecss
  document.head.appendChild(displayloginpage)
}
// --------------------------------------------------------GET FREE CONSULTANCY-------------------------------------------------
var togglephoneemail = document.querySelector(".toggle-phone-email")
togglephoneemail.addEventListener('click',togglephoneemailinput)
var consultanceinput = document.querySelector(".email-consultance-input")
var consultancycounter = 2
function togglephoneemailinput(e){
  if(consultancycounter%2==0){
    if(counter%2!=0){
      var consultancestyle = `
      .get-free-consultance input{
        background-image: url("bluephoneimg.png") ;
        background-size: 80px;
      }
      `
    }
    else{
      var consultancestyle = `
      .get-free-consultance input{
        background-image: url("redphoneimg.png") ;
        background-size: 80px;
      }
      `
    }
    var newconsultancystyle = document.createElement("style")
    newconsultancystyle.innerText = consultancestyle 
    document.head.appendChild(newconsultancystyle)
    consultanceinput.placeholder = "Eg - +91 62804-20432"
    togglephoneemail.innerHTML = `
      <img class="signinphone" src="email-logo.png">
      <span>Use Email ID instead !</span>
    `
    consultancycounter++
  }
  else{
    var consultancestyle = `
      .get-free-consultance input{
        background-image: url("mail-logo.png") ;
        background-size: 90px;
      }
      `
      

      var newconsultancystyle = document.createElement("style")
      newconsultancystyle.innerText = consultancestyle 
      document.head.appendChild(newconsultancystyle)
      consultanceinput.placeholder = "Eg - iamarshbajaj@gmail.com"
      togglephoneemail.innerHTML = `
      <img class="signinphone" src="phonepngimg.png">
      <span>Use Phone Number instead !</span>
    `
    consultancycounter++
  }
}
//--------------------------TOGGLE PHONE COLOR----------------------------------------
toggleswitch.addEventListener('click',togglephonecolor)
function togglephonecolor(e){
  if(consultancycounter%2!=0){
    if(counter%2==0){
      var togglephonestyle = `
      .get-free-consultance input{
        background-image: url("redphone.png") ;
        background-size: 80px;
      }
      `
      

      var newphonestyle = document.createElement("style")
      newphonestyle.innerText = togglephonestyle 
      document.head.appendChild(newphonestyle)
    }
    else{
      var togglephonestyle = `
      .get-free-consultance input{
        background-image: url("bluephone.png") ;
        background-size: 80px;
      }
      `
      

      var newphonestyle = document.createElement("style")
      newphonestyle.innerText = togglephonestyle 
      document.head.appendChild(newphonestyle)
    }
  }
}


//------------------------------------------------ON FORM SUBMISSION------------------------------------------
window.addEventListener("load", function() {
  const form = document.getElementById('my-form');
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const data = new FormData(form);
    const action = e.target.action;
    fetch(action, {
      method: 'POST',
      body: data,
    })
    .then(() => {
      alert("We will contact you soon!");
    })
  });
});

//-------------------------------------------------------RESPONSIVE HEADER OPTIONS-----------------------------------------------
function openNav() {
  document.getElementById("mySidenav").style.width = "300px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

//---------------------------------------------------------SIGNUP-SIGNIN TOGGLE----------------------------------------------------
var signupbutton = document.querySelector(".signup-tab")
var signinbutton = document.querySelector(".signin-tab")
signinbutton.addEventListener('click',signindetails)
signupbutton.addEventListener('click',signupdetails)
function signindetails(e){
  var signinstyle = `
  .signup-member-details{
    display: none;
  }
  .signin-member-details{
    display: block;
  }
  .memsignupbutton{
    margin-top: 50px;
  }
  `
var signinstyles = document.createElement('style')
signinstyles.innerText = signinstyle
document.head.appendChild(signinstyles)
}
function signupdetails(e){
  var signupstyle = `
  .signup-member-details{
    display: block;
  }
  .signin-member-details{
    display: none;
  }
  .memsignupbutton{
    margin-top: 30px;
  }
  `
var signupstyles = document.createElement('style')
signupstyles.innerText = signupstyle
document.head.appendChild(signupstyles)
}
