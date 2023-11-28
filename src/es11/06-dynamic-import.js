import { hello } from "./module.js";

const button = document.getElementById('btn');

button.addEventListener('click', async function(){
    const module = await hello();
    console.log(module);
    console.log(hello);
});