export const getRandomQuote = (data)=>{
    if(data.length>0){
        const randomIndex = Math.floor((Math.random()*data.length))
        return data[randomIndex]
    }
}