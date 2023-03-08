//Require operating system

const os =  require('os');

// Obtainin UserInfo

const User =  os.userInfo();
console.log(User);

//method return system uptime in seconds

console.log(`The system uptime is ${os.uptime()} seconds`);

const currenOs = {
    name : os.type(),
    release : os.release(),
    totalMem : os.totalmem(),
    freeMem : os.freemem()
}

console.log(currenOs);