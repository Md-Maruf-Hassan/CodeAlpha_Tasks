let btn = document.querySelector('button')

function calculateAge() {
    const birthdate = document.getElementById("birthdate").value;
    const resultDiv = document.getElementById("result");

    if (!birthdate) {
      resultDiv.textContent = "Please enter a valid birthdate.";
      return;
    }

    const birth = new Date(birthdate);
    const today = new Date();

    if (birth > today) {
      resultDiv.textContent = "Birthdate cannot be in the future.";
      return;
    }

    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    let days = today.getDate() - birth.getDate();

    if (days < 0) {
      months--;
      days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
      console.log('day2 : ',days)
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    resultDiv.textContent = `You are ${years} years, ${months} months, and ${days} days old.`;
}

btn.addEventListener('click', ()=>{
    calculateAge()
})