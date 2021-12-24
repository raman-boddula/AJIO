let steone = setTimeout(() => {
  let product_data = [
    {
      display_img:
        "https://assets.ajio.com/medias/sys_master/root/20210824/qnyN/6124089d7cdb8cb824031048/performax_navy_blue_running_zip-front_dobby_jacket.jpg",
      img2: "https://assets.ajio.com/medias/sys_master/root/20210824/Tmuz/6123f3797cdb8cb824028358/-473Wx593H-441128864-darkblue-MODEL3.jpg",
      img3: "https://assets.ajio.com/medias/sys_master/root/20210824/RhpY/6123fa05f997ddce89a878b3/-473Wx593H-441128864-darkblue-MODEL2.jpg",
      img4: "",
      brand: "PERFORMAX",
      name: "Running Zip-Front Dobby Jacket",
      price: 899,
      MRP: 999,
      discount: 10,
      offer_price: 849,
      color: "Dark-Blue",
      size: "",
    },
    {
      display_img:
        "https://assets.ajio.com/medias/sys_master/root/20210824/qnyN/6124089d7cdb8cb824031048/performax_navy_blue_running_zip-front_dobby_jacket.jpg",
      img2: "https://assets.ajio.com/medias/sys_master/root/20210824/Tmuz/6123f3797cdb8cb824028358/-473Wx593H-441128864-darkblue-MODEL3.jpg",
      img3: "https://assets.ajio.com/medias/sys_master/root/20210824/RhpY/6123fa05f997ddce89a878b3/-473Wx593H-441128864-darkblue-MODEL2.jpg",
      img4: "",
      brand: "PERFORMAX",
      name: "Running Zip-Front Dobby Jacket",
      price: 899,
      MRP: 999,
      discount: 10,
      offer_price: 849,
      color: "Dark-Blue",
      size: "",
    },
    {
      display_img:
        "https://assets.ajio.com/medias/sys_master/root/20210824/qnyN/6124089d7cdb8cb824031048/performax_navy_blue_running_zip-front_dobby_jacket.jpg",
      img2: "https://assets.ajio.com/medias/sys_master/root/20210824/Tmuz/6123f3797cdb8cb824028358/-473Wx593H-441128864-darkblue-MODEL3.jpg",
      img3: "https://assets.ajio.com/medias/sys_master/root/20210824/RhpY/6123fa05f997ddce89a878b3/-473Wx593H-441128864-darkblue-MODEL2.jpg",
      img4: "",
      brand: "PERFORMAX",
      name: "Running Zip-Front Dobby Jacket",
      price: 899,
      MRP: 999,
      discount: 10,
      offer_price: 849,
      color: "Dark-Blue",
      size: "",
    },
    {
      display_img:
        "https://assets.ajio.com/medias/sys_master/root/20210824/qnyN/6124089d7cdb8cb824031048/performax_navy_blue_running_zip-front_dobby_jacket.jpg",
      img2: "https://assets.ajio.com/medias/sys_master/root/20210824/Tmuz/6123f3797cdb8cb824028358/-473Wx593H-441128864-darkblue-MODEL3.jpg",
      img3: "https://assets.ajio.com/medias/sys_master/root/20210824/RhpY/6123fa05f997ddce89a878b3/-473Wx593H-441128864-darkblue-MODEL2.jpg",
      img4: "",
      brand: "PERFORMAX",
      name: "Running Zip-Front Dobby Jacket",
      price: 899,
      MRP: 999,
      discount: 10,
      offer_price: 849,
      color: "Dark-Blue",
      size: "",
    },
  ];
  if (localStorage.getItem("Cart_AJIO") == null) {
    localStorage.setItem("Cart_AJIO", JSON.stringify([]));
  }
  // let one=JSON.parse(localStorage.getItem("Cart_AJIO"));
  // for(let i=0; i<product_data.length; i++) {
  //     one.push(product_data[i]);
  // }
  // localStorage.setItem("Cart_AJIO",JSON.stringify(one));
  let new_username=window.location.href;
  console.log('new_username:', new_username);

  let name2=new_username.split("=");
  console.log('name2:', name2);

  if(name2[1]!=null && name2[0]=="http://localhost:2345/?user_name") {
    localStorage.setItem("username_AJIO", JSON.stringify({ username: name2[1] }));
  }

  if (localStorage.getItem("username_AJIO") == null) {
    localStorage.setItem("username_AJIO", JSON.stringify({ username: null }));
  }
  let username = JSON.parse(localStorage.getItem("username_AJIO"));
  let name1 = username.username;
  if (name1 != null) {
    change_info();
  }

  function change_info() {
    let info = document.getElementById("navbar_info");
    info.innerHTML = null;

    let div1 = document.createElement("div");
    let p1 = document.createElement("p");
    p1.innerText = "Hi " + name1;
    div1.append(p1);

    let div2 = document.createElement("div");
    let p2 = document.createElement("p");
    p2.innerText = "My Account";
    div2.append(p2);

    let div3 = document.createElement("div");
    let p3 = document.createElement("p");
    p3.innerText = "Sign Out";
    p3.id="sign_out_btn";
    div3.append(p3);

    let div4 = document.createElement("div");
    let p4 = document.createElement("p");
    p4.innerText = "Customer Care";
    div4.append(p4);

    info.append(div4, div3, div2, div1);
  }

  // to display the flying container on webpage and make background mask
  let mask = document.getElementById("layer_mask");
  let flycontainer = document.getElementById("flying_container");
  function displayNavContainer() {
    mask.style.visibility = "visible";
    flycontainer.style.visibility = "visible";
    mask.style.animationName="animate1";
    mask.style.animationDuration="0.6s";
  }
  function hideNavContainer() {
    mask.style.visibility = "hidden";
    flycontainer.style.visibility = "hidden";
    mask.style.animationName="";
    mask.style.animationDuration="";
  }
  let menu_options = document.getElementsByClassName("one");
  for (let i = 0; i < menu_options.length; i++) {
    menu_options[i].addEventListener("mouseenter", displayNavContainer);
    menu_options[i].addEventListener("mouseleave", hideNavContainer);
  }
  flycontainer.addEventListener("mouseenter", displayNavContainer);
  flycontainer.addEventListener("mouseleave", hideNavContainer);

  // to display the search results by default static
  let search_list = document.getElementById("search_list");
  let search = document.getElementById("search_box");

  function display_searchList() {
    search_list.style.visibility = "visible";
  }
  function hide_searchList() {
    search_list.style.visibility = "hidden";
  }
  search.addEventListener("click", display_searchList);
  search_list.addEventListener("mouseleave", hide_searchList);

  // to switch between the singin model /popup div
  let close = document.getElementById("close");
  let navbarSignIn = document.getElementById("navbar_signin_btn");
  let login_popup = document.getElementById("login_signup");

  function displaySigninPopup() {
    login_popup.style.visibility = "visible";
    mask.style.zIndex = 11;
    mask.style.visibility = "visible";
    mask.style.animationName="animate1";
    mask.style.animationDuration="0.6s";
  }

  function hideSigninPopup() {
    login_popup.style.visibility = "hidden";
    mask.style.zIndex = 9;
    mask.style.visibility = "hidden";
    mask.style.animationName="";
    mask.style.animationDuration="";
  }
  if (name1 == null) {
    navbarSignIn.addEventListener("click", displaySigninPopup);
  }
  close.addEventListener("click", hideSigninPopup);

  //display login form on click;
  let parent_div = document.getElementById("change_form");
  let popupLogin = document.getElementById("popup_login");

  function changeToLoginForm() {
    parent_div.innerHTML = null;
    let form = document.createElement("form");
    form.id = "form";

    let p1 = document.createElement("p");
    p1.innerText = "Email";

    let input1 = document.createElement("input");
    input1.id = "email";
    input1.type = "text";

    let p2 = document.createElement("p");
    p2.innerText = "Password";

    let input2 = document.createElement("input");
    input2.id = "password";
    input2.type = "password";

    let p3 = document.createElement("p");
    p3.id = "login_signup_alert";

    let div = document.createElement("div");
    let login_btn = document.createElement("button");
    login_btn.id = "login";
    login_btn.innerText = "Login";

    let p4 = document.createElement("p");
    p4.innerHTML = `Do not have an Account,<span id="popup_signup">Sign Up</span>`;
    p4.id = "login_disclamer";

    div.append(login_btn);

    form.append(p1, input1, p2, input2, p3, div, p4);

    parent_div.append(form);

    //login functionality
    let login_btn1 = document.getElementById("login");
    function login(e) {
      e.preventDefault();
      let form = document.getElementById("form");
      let alert_mes = document.getElementById("login_signup_alert");
      if (form.email.value == "") {
        alert_mes.innerText = "Please Enter Valid Email";
      } else if (form.password.value == "") {
        alert_mes.innerText = "Please Enter Password";
      } else {
        let user_data = {
          email: form.email.value,
          password: form.password.value,
        };

        let data_to_send = JSON.stringify(user_data);
        console.log("data_to_send:", data_to_send);

        fetch("/login", {
          method: "POST",

          body: data_to_send,

          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => {
            return res.json();
          })
          .then((res) => {
            console.log("res:", res);

            if (!res.error) {
              alert_mes.innerText = "Login Successful";
        
              let datastorage = JSON.parse(
                localStorage.getItem("username_AJIO")
              );
              datastorage.username = res.user.username;
              localStorage.setItem(
                "username_AJIO",
                JSON.stringify(datastorage)
              );
              let timeout = setTimeout(() => {
                window.location.reload();
              }, 2000);
            } else {
              alert_mes.innerText = res.message;
            }
          })
          .catch((err) => {
            console.log("err:", err);
          });
      }
    }
    login_btn1.addEventListener("click", login);

    //change to signup functionlity
    let popupSignIn = document.getElementById("popup_signup");
    function changeToSignUpForm() {
      parent_div.innerHTML = null;
      parent_div.innerHTML = ` <form id="form">
                <p>Name</p>
                <input type="text" id="name">
        
                <p>Email</p>
                <input type="text" id="email">

                <p>Username</p>
                <input type="text" id="username">
        
                <p>Password</p>
                <input type="password" id="password">
        
                <p>Mobile Number</p>
                <input type="number" id="mobile">
                <p id=login_signup_alert></p>
                <div>
                    <button id="signup">Sign Up</button>
                </div>
                <p id="disclamer">By Signing In, I agree to <span>Terms and Conditions</span></p>
                <p id="login_disclamer">Already have an account? <span id="popup_login">Login</span></p>  
            </form>`;
    }
    popupSignIn.addEventListener("click", changeToSignUpForm);
  }
  popupLogin.addEventListener("click", changeToLoginForm);

  //Sign up functionality
  let signup_btn = document.getElementById("signup");
  function signup(e) {
    e.preventDefault();
    let form = document.getElementById("form");
    let alert_mes = document.getElementById("login_signup_alert");
  
    if (form.name.value == "") {
      alert_mes.innerText = "Please Enter Name";
    } else if (form.email.value == "") {
      alert_mes.innerText = "Please Enter Email";
    } else if (form.username.value == "") {
      alert_mes.innerText = "Please Enter Valid Username";
    } else if (form.password.value == "") {
      alert_mes.innerText = "Please Enter Password";
    } else if (form.mobile.value.length < 10 || form.mobile.value.length > 10) {
      alert_mes.innerText = "Please Enter Valid Mobile No";
    } else {
      let user_data = {
        name: form.name.value,
        email: form.email.value,
        username: form.username.value,
        password: form.password.value,
        mobile: form.mobile.value
      };

      user_data = JSON.stringify(user_data);

      fetch("/register", {
        method: "POST",

        body: user_data,

        headers: {
          "Content-type": "application/json",
        },
      })
        .then((res) => {
          return res.json();
        })

        .then((res) => {
          console.log("res:", res);
          alert_mes.innerText = res.message;
          if (!res.error) {
            let timeout = setTimeout(function () {
              changeToLoginForm();
            }, 2000);
            // window.location.href = "/";
          }
        })
        .catch((err) => {
          console.log("err:", err);
          alert("User already registered!");
        });
    }
  }
  signup_btn.addEventListener("click", signup);









  function getCartData(){
    fetch('http://localhost:2345/cart')
    .then(response => response.json())
    .then(data=>{
      console.log(data.cart);
      displayCartItems(data.cart)
    })
  }

  getCartData()

  function displayCartItems(items) {
    let parent = document.getElementById("cart_contents");
    parent.innerHTML = null;
   
    items.forEach((el) => {
      el=el.product;
      let div = document.createElement("div");

      let div1 = document.createElement("div");
      let img = document.createElement("img");
      img.src = el.display_img;
      div1.append(img);

      let div2 = document.createElement("div");
      let price = document.createElement("h4");
      price.innerText =
        "Rs. " + el.offer_price + " (" + el.discount + "%" + "off)";
      div2.append(price);

      let price_off = document.createElement("p");
      price_off.innerText = "Rs. " + el.MRP;
      price_off.className = "overline_off";
      div2.append(price_off);

      let product_name = document.createElement("p");
      product_name.innerText = el.name;
      product_name.className = "itm_nme";
      div2.append(product_name);

      div.append(div1, div2);

      parent.append(div);
    });
  }

  let cart_container = document.getElementById("cart_hover");
  let cart_btn = document.getElementById("cart_icon");
  let timeout1;
  function displayCartContainer() {
    cart_container.style.visibility = "visible";
    if (timeout1) {
      clearTimeout(timeout1);
    }
    if (items.length != 0) {
      displayCartItems();
    }
  }

  function hideCartContainer() {
    timeout1 = setTimeout(() => {
      cart_container.style.visibility = "hidden";
    }, 500);
  }
  function cartOnClick() {
    console.log("yes")
    window.location.href="cart.html";
  }
  cart_btn.addEventListener("click",cartOnClick);
  cart_btn.addEventListener("mouseenter", displayCartContainer);
  cart_btn.addEventListener("mouseleave", hideCartContainer);
  cart_container.addEventListener("mouseenter", displayCartContainer);
  cart_container.addEventListener("mouseleave", hideCartContainer);

  //signout 
  let signout_btn=document.getElementById("sign_out_btn");

  function signout() {
      localStorage.removeItem("username_AJIO");
      window.location.href="/";
  }
  if(signout_btn!=null) {
    signout_btn.addEventListener("click", signout);
  }
  let logo_navbar = document.getElementById("navbar_ajio_logo");
  function logo_navbar_link() {
    window.location.href = "/";
  }
  logo_navbar.addEventListener("click",logo_navbar_link);

  let men_link = document.getElementById("men_link");
  let women_link = document.getElementById("women_link");
  let kids_link = document.getElementById("kids_link");
  let indie_link = document.getElementById("indie_link");
  let home_link = document.getElementById("home_link");

  function menHref() {
    window.location.href = "productsPage.html";
  }
  function womenHref() {
    window.location.href = "womensDressesPage.html"
  }
  function kidsHref() {
    window.location.href = "kidsToysPage.html";
  }
  function indieHref() {
    window.location.href = "productsPage.html";
  }
  function homeHref() {
    window.location.href = "productsPage.html";
  }
  men_link.addEventListener("click",menHref);
  women_link.addEventListener("click",womenHref);
  kids_link.addEventListener("click",kidsHref);
  indie_link.addEventListener("click",indieHref);
  home_link.addEventListener("click",homeHref);


  //googleOauth

  let googleOauth = document.getElementById("googleOauth");
  googleOauth.addEventListener("click",google)

  function google() {
    window.location.href="/auth/google";
  }


}, 500);
