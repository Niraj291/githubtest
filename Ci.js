let principle = 3000, rate = 5, time = 10;
    let a = principle * (Math.pow((1 + rate / 100), time));
    let Ci = a - principle;
 
    document.write(" interest is " + Ci)
