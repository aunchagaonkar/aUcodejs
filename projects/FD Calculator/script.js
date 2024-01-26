function calculateamt(){
    let principle = parseFloat(document.getElementById('principle').value);
    let interest = parseFloat(document.getElementById('interest').value);
    let time = parseFloat(document.getElementById('time').value);
    let calc = (principle * interest * time )/100;
    let ans = (principle +calc);
    document.getElementById('result').innerHTML = `Maturity Amount : ${ans.toFixed(2)}`
}
document.getElementById('btn').addEventListener('click', calculateamt);