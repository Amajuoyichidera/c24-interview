let input = document.getElementById('input');
let submit = document.getElementById('btn');


submit.onclick= () => {
    alert(`thanks ${input.value}`);
    input.value = '';
};


// api url
const api_url = 
      "http://gemini.yesmfbank.com/yesmobile/NIP.svc/api/financialinst";
  
// Defining async function
async function getBanks() {
    
    // Storing response
    const response = await fetch("http://gemini.yesmfbank.com/yesmobile/NIP.svc/api/financialinst");
    
    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    if (response) {
        hideloader();
    }
    show(data);
}
// Calling that async function
getBanks(api_url);

// async function getBanks() {
//     let response = await
//     fetch()
//     let data = await response.json()
//     display(data);
//     getBanks();
// }
    

function display(banks) {
    let option = `<option value="banks">institution</option>`;
    for(let bank of banks) {
        option += `<option value="${bank.InstitutionCode}">${bank.InstitutionName}</option>`;
    }
    document.getElementById('banks').innerHTML = option;
}
