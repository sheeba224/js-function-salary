function netSalary(salary) {
    let netSal;
    if (salary <= 50000) {
        netSal = salary;
    } else {
        const tax = salary * 2.5 / 100;
        netSal = salary - tax;
    }
    return netSal;
}

const salary = parseInt(prompt('Enter your salary:'));
const netSal = netSalary(salary);
console.log(netSal);