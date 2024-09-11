import { useEffect, useState } from "react";
import styles from './Relogio.module.css';
function Relogio() {

//declarando função relógio

const [hora, setHora] = useState('');

//declarando hora como estado

useEffect(() => {
atualizaHorario();
const intervalo = setInterval(atualizaHorario,1000);
return()=>{
  clearInterval(intervalo);
}
},[]);


function atualizaHorario() {
const agora = new Date();
const horaMinutosSegundo = agora.toLocaleTimeString('pt-br',{hour: '2-digit', minute: '2-digit', second: '2-digit'});
setHora(horaMinutosSegundo);
}

return (
<div className={styles.relogio}>{hora}</div>
)

}

export default Relogio;