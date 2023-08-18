export class Log{
    
    static success(msg:string){
        console.log(`%c${msg}`, 'color: green; font-weight: bold')
    }
    static danger(msg:string){
        console.log(`%c${msg}`, 'color: red; font-weight: bold')
    }
    static info(msg:string){
        console.log(`%c${msg}`, 'color: black; font-weight: bold','background: yellow')
    }
        
} 