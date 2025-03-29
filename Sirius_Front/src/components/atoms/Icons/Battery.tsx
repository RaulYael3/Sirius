export default function Battery({color,sx}:{color:string, sx:number}){
    return(

        <svg 
        viewBox="0 -960 960 960" 
        fill={color}
        width={sx}
        height={sx}  
        >
        <path d="M320-80q-17 0-28.5-11.5T280-120v-640q0-17 11.5-28.5T320-800h80v-80h160v80h80q17 0 28.5 11.5T680-760v640q0 17-11.5 28.5T640-80H320Zm40-560h240v-80H360v80Z"/></svg>
) 
}