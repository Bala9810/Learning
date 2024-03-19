const os=require("os");

// abt crrent user
const user=os.userInfo();
console.log(user);

// system uptime in sec
console.log("system uptime",os.uptime());




const crrentOs={
    name:os.type(),
    version:os.version(),
    release:os.release(),
    memory:os.totalmem(),
    freememory:os.freemem()

}
console.log(crrentOs);

