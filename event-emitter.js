const EventEmitter = require('events');
const customEmitter = new EventEmitter();

customEmitter.on('response',(name,id) =>{
    console.log(`data received Mr.${name} with id : ${id}`);
})
 customEmitter.emit('response','David',25);