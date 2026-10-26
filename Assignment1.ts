type alphaNumeric = number | string

function combine(...args:alphaNumeric[]) : [number ,string ]{
    let sum=0
     let result :string []=[]

     for(let arg of args){
        if (typeof(arg) == 'number'){
            sum += arg
        }
        else{
            result.push(arg)
        }
     }
     return [sum,result.join(' ')]
  
}
const [total,text] =combine(1,2,3,'hello','world',4,'typescript')
console.log(`Total: ${total}, Text: ${text}`)
