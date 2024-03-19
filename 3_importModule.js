
const info=require("./2_exportModule");
const {items,person}=require('./4_alternateModuleExport');

const sayHi=()=>{
    console.log(`Hello ${info.firstName} ${info.lastName} from ${info.city}`);
}
console.log(`${person.name} bought ${items}`);

sayHi(info);


