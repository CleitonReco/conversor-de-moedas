//getElementByid é usado para buscar documentos com ID
const form = document.getElementById("converterForm");
const amount = document.getElementById("amount");
const fromCurrency = document.getElementById("fromCurrency");
const convertedAmount = document.getElementById("converterdAmount");
const toCurrency = document.getElementById("toCurrency");
//querySelector é usado para buscar documentos com class
const loading = document.querySelector(".loading");
const result = document.querySelector(".result");
const error = document.querySelector(".error");

const API_URL = "https://api.exchangerate-api.com/v4/latest/"

//async é utilizado quando irá acessar um servidor
async function convertMoney() {
  loading.style.display = "block";
  
  
  //tentar
  try{
    const response = await fetch(API_URL + fromCurrency.value)
    const data = await response.json()
    const rate = data.rates[toCurrency.value]
    const convertedRate = (amount.value * rate).toFixed(2)
    console.log(convertedRate)
  }catch
   (error){
    alert("Falha no servidor")
  }
}

form.addEventListener("submit", function (event) {
  //para nao reiniciar o formulario
  event.preventDefault();
  convertMoney();
});
