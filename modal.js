const signUpData = document.querySelectorAll(".sign-up-modal");
const modalContent = document.querySelector(".modal-content");
const modalDialog = document.querySelector(".modal-dialog");
const signUp = document.getElementById("sign-up");
const logIn = document.getElementById("log-in");
const loginBtn = document.getElementById("login-btn");
const footerPass = document.querySelector(".modal-footer-password");
const footerLogin = document.querySelector(".modal-footer-login");
const forgetPass = document.getElementById("forget-password");
const modalImg = document.getElementById("modal-img");
const buttons = document.querySelectorAll(".trigger");
const navigate = document.querySelector(".navigate-btn");
const closeBtn = document.querySelector(".close");
const closeWelcome = document.getElementById("close-welcome");
const closePurchase = document.getElementById("close-purchase");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const tickets = document.getElementById("tickets");
const price = document.getElementById("price");
const taxes = document.getElementById("taxes");
const total = document.getElementById("total");
const purchase = document.getElementById("purchase-btn");
const welcome = document.getElementById("welcome");
const buy = document.getElementById("buy");
const modalData = document.getElementById("modal-data");
const controls = document.getElementById("controls");
const description = document.getElementById("top-description");
const mainContent = document.getElementById("modal-main-content");
const modal = document.querySelector(".modal");
const endPurchase = document.getElementById("end-purchase");
const payment= document.querySelector(".modal-payment");
const confirmPurchase=document.getElementById("confirm-purchase")




signUp.addEventListener("click", (e) => {
  e.preventDefault();

 

  //modalDialog.style.height = "100%";

  modalContent.style.height = "100%";

  signUp.classList.add("modal-hidden");

  loginBtn.classList.add("modal-hidden");

  footerPass.classList.add("modal-hidden");

  footerLogin.classList.remove("modal-hidden");

  signUpData.forEach((data) => {
    data.classList.remove("modal-hidden");
  });
});

logIn.addEventListener("click", (e) => {
  e.preventDefault();

  modalContent.style.height = "100vh";

  signUp.classList.remove("modal-hidden");

  loginBtn.classList.remove("modal-hidden");

  footerLogin.classList.add("modal-hidden");

  forgetPass.classList.remove("modal-hidden");

  signUpData.forEach((data) => {
    data.classList.add("modal-hidden");
  });
});

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();

    // Capturar el thumbnail y mostrarlo en el modal
    const imgSrc = button.parentNode.parentNode.childNodes[1].src;
    modalImg.src = imgSrc;

    //modalDialog.style.height = "100vh";

    modalContent.style.height = "100vh";
    
    tickets.value = 1;
    total.innerText = Number(price.textContent) + Number(taxes.textContent);

    buy.classList.remove("modal-hidden");

    modalImg.classList.remove("modal-hidden");

    modalData.classList.remove("modal-hidden");

    controls.classList.remove("modal-hidden");

    //Ocultar elementos pertenecientes a Login y Register
  });
});

closeWelcome.addEventListener("click", (e) => {
  e.preventDefault();
  
  welcome.classList.add("modal-hidden");
  description.classList.add("modal-hidden");
  mainContent.classList.add("modal-hidden");
  endPurchase.classList.add("modal-hidden");
  payment.classList.add("modal-hidden");
  logIn.click();
});

closePurchase.addEventListener("click", (e) => {
  e.preventDefault();
  
  endPurchase.classList.add("modal-hidden");
  payment.classList.add("modal-hidden");
  logIn.click();
});

navigate.addEventListener("click", (e) => {
  e.preventDefault();

  Swal.fire({
    position: "center",
    icon: "success",
    title: "Tu carrito se ha actualizado",
    showConfirmButton: false,
    timer: 1500,
  });

  closeBtn.click();

  tickets.innerText = 1;
});

minus.addEventListener("click", () => {
  if (tickets.value > 1) {
    tickets.value = Number(tickets.value) - 1;

    total.innerText =
      Number(tickets.value) * Number(price.textContent) +
      Number(taxes.textContent);
  }
});

plus.addEventListener("click", (e) => {
  e.preventDefault();
  tickets.value = Number(tickets.value) + 1;

  total.innerText =
    Number(tickets.value) * Number(price.textContent) +
    Number(taxes.textContent);
});

purchase.addEventListener("click", (e) => {
  //Acá debería comprobar si la persona esta loggeada o no. En caso
  //de no estar, ejecutar lo que sigue

  e.preventDefault();

  welcome.classList.remove("modal-hidden");

  buy.classList.add("modal-hidden");

  modalImg.classList.add("modal-hidden");

  modalData.classList.add("modal-hidden");

  controls.classList.add("modal-hidden");

  //modalContent.style.height = "100vh";

  description.classList.remove("modal-hidden");

  mainContent.classList.remove("modal-hidden");
});

document.addEventListener('keydown', (e) => {
  const keyValue = e.which;
  if (keyValue == 27) {
    closeBtn.click();
    welcome.classList.add("modal-hidden");
    description.classList.add("modal-hidden");
    mainContent.classList.add("modal-hidden");
    endPurchase.classList.add("modal-hidden");
  payment.classList.add("modal-hidden");
    logIn.click();
  }
})

let observer = new MutationObserver( () => {
  welcome.classList.add("modal-hidden");
  description.classList.add("modal-hidden");
  mainContent.classList.add("modal-hidden");
  endPurchase.classList.add("modal-hidden");
  payment.classList.add("modal-hidden");
  logIn.click(); 
  //modalContent.style.height = "100%"
});

observer.observe(modal, {attributes:true});

loginBtn.addEventListener("click" , ()=> {
  endPurchase.classList.remove("modal-hidden");
  welcome.classList.add("modal-hidden");
  description.classList.add("modal-hidden");
  mainContent.classList.add("modal-hidden");
  payment.classList.remove("modal-hidden");
})


