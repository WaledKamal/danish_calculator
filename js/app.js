function getNetSalary() {
  // Strings
  var AlertFaildMsg = 0;

  //Variables
  const Curreny = "DKK";
  let Salary = parseInt(document.querySelector(".salary").value);
  let Tax = parseInt(document.querySelector(".Tax").value);
  let Taking = parseInt(document.querySelector(".Taking").value);
  let BeforeTax = parseInt(document.querySelector(".Before").value);

  // Arthimatic Opreation
  _Totoal_1 = Salary - (Salary * Taking) / 100;
  _Totoal_2 = _Totoal_1 - (_Totoal_1 * Tax) / 100;

  if (isNaN(_Totoal_2)) {
    document.querySelector(".display-salary").innerHTML = AlertFaildMsg;
  } else {
    document.querySelector(".display-salary").innerHTML =
      _Totoal_2 + " " + Curreny;
  }
}

// Danish Translator Object
var da_DK = {
  welcome_msg: "Velkommen til Dainsh Tax Calculator",
  dec_msg: "det er et gratis værktøj, der hjælper dig med at beregne din skat!",
  salary_msg: "Din løn :",
  TOT_msg: "Optagelse af skat (%) :",
  Tax_msg: "Skatteværdi (%) :",
  BF_msg: "Før du tager :",
  c_Button: "Beregn beløbet",
  Total_msg: "Din nettoløn er :",
  // inputs placeholders
  first: "F.eks. 15.000 (kun tal)",
  second: "F.eks. 8 (uden %)",
  third: "F.eks. 36 (uden %)",
  forth: "F.eks. 8000 (kun numre)",
  copyright: "Okay vendt af",
};

var en_UK = {
  welcome_msg: "Welcome to Dainsh Taxes Caluclator",
  dec_msg: "it's a free tool help you to calculate your taxs !",
  salary_msg: "Your Salary :  :",
  TOT_msg: "Taking of Tax(%) :",
  Tax_msg: "Tax value(%):",
  BF_msg: "Before Taking:",
  c_Button: "Calculation",
  Total_msg: "Your NetSalary is :",
  // inputs placeholders
  first: "For example. 15,000 (numbers only)",
  second: "For example. 8 (without%)",
  third: "For example. 36 (without%)",
  forth: "For example. 8000 (numbers only)",

  copyright: "All right reversed by ",
};

function ChangeLanguage() {
  if (localStorage.getItem("Lang") === "en_UK") {
    document.querySelector(".languages li span").innerText = "English";
    document
      .querySelector(".languages li img")
      .setAttribute("src", "img/en_UK.png");
    localStorage.setItem("Lang", "da_DK");
    document.querySelector("h3").innerText = da_DK.welcome_msg;
    document.querySelector("h4").innerText = da_DK.dec_msg;
    document.querySelector("label[for=salary]").innerText = da_DK.salary_msg;
    document.querySelector("label[for=Taking]").innerText = da_DK.TOT_msg;
    document.querySelector("label[for=Tax]").innerText = da_DK.Tax_msg;
    document.querySelector("label[for=Before]").innerText = da_DK.BF_msg;
    document.querySelector(".calc_button").innerText = da_DK.c_Button;
    document.querySelector(".note").innerText = da_DK.Total_msg;
    document.querySelector(".salary").setAttribute("placeholder", da_DK.first);
    document.querySelector(".Taking").setAttribute("placeholder", da_DK.second);
    document.querySelector(".Tax").setAttribute("placeholder", da_DK.third);
    document.querySelector(".Before").setAttribute("placeholder", da_DK.forth);
    document.querySelector(".copyright i").innerText = da_DK.copyright;
  } else {
    document.querySelector(".languages li span").innerText = "Danish";
    document
      .querySelector(".languages li img")
      .setAttribute("src", "img/da_DK.png");
    localStorage.setItem("Lang", "en_UK");
    document.querySelector("h3").innerText = en_UK.welcome_msg;
    document.querySelector("h4").innerText = en_UK.dec_msg;
    document.querySelector("label[for=salary]").innerText = en_UK.salary_msg;
    document.querySelector("label[for=Taking]").innerText = en_UK.TOT_msg;
    document.querySelector("label[for=Tax]").innerText = en_UK.Tax_msg;
    document.querySelector("label[for=Before]").innerText = en_UK.BF_msg;
    document.querySelector(".calc_button").innerText = en_UK.c_Button;
    document.querySelector(".note").innerText = en_UK.Total_msg;
    document.querySelector(".salary").setAttribute("placeholder", en_UK.first);
    document.querySelector(".Taking").setAttribute("placeholder", en_UK.second);
    document.querySelector(".Tax").setAttribute("placeholder", en_UK.third);
    document.querySelector(".Before").setAttribute("placeholder", en_UK.forth);
    document.querySelector(".copyright i").innerText = en_UK.copyright;
  }
}

window.onload = LanguageLoad;

function LanguageLoad() {
  if (localStorage.getItem("Lang") === "da_DK") {
    document.querySelector(".languages li span").innerText = "English";
    document
      .querySelector(".languages li img")
      .setAttribute("src", "img/en_UK.png");
    document.querySelector("h3").innerText = da_DK.welcome_msg;
    document.querySelector("h4").innerText = da_DK.dec_msg;
    document.querySelector("label[for=salary]").innerText = da_DK.salary_msg;
    document.querySelector("label[for=Taking]").innerText = da_DK.TOT_msg;
    document.querySelector("label[for=Tax]").innerText = da_DK.Tax_msg;
    document.querySelector("label[for=Before]").innerText = da_DK.BF_msg;
    document.querySelector(".calc_button").innerText = da_DK.c_Button;
    document.querySelector(".note").innerText = da_DK.Total_msg;
    document.querySelector(".salary").setAttribute("placeholder", da_DK.first);
    document.querySelector(".Taking").setAttribute("placeholder", da_DK.second);
    document.querySelector(".Tax").setAttribute("placeholder", da_DK.third);
    document.querySelector(".Before").setAttribute("placeholder", da_DK.forth);
    document.querySelector(".copyright i").innerText = da_DK.copyright;
  } else {
    document.querySelector(".languages li span").innerText = "Danish";
    document
      .querySelector(".languages li img")
      .setAttribute("src", "img/da_DK.png");
    document.querySelector("h3").innerText = en_UK.welcome_msg;
    document.querySelector("h4").innerText = en_UK.dec_msg;
    document.querySelector("label[for=salary]").innerText = en_UK.salary_msg;
    document.querySelector("label[for=Taking]").innerText = en_UK.TOT_msg;
    document.querySelector("label[for=Tax]").innerText = en_UK.Tax_msg;
    document.querySelector("label[for=Before]").innerText = en_UK.BF_msg;
    document.querySelector(".calc_button").innerText = en_UK.c_Button;
    document.querySelector(".note").innerText = en_UK.Total_msg;
    document.querySelector(".salary").setAttribute("placeholder", en_UK.first);
    document.querySelector(".Taking").setAttribute("placeholder", en_UK.second);
    document.querySelector(".Tax").setAttribute("placeholder", en_UK.third);
    document.querySelector(".Before").setAttribute("placeholder", en_UK.forth);
    document.querySelector(".copyright i").innerText = en_UK.copyright;
  }
}
