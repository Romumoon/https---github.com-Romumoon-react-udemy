import { createRoot } from 'react-dom/client';
import './index.css'
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';

const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(
    <div>
        <Primeiro/>
        <ComParametro 
            titulo="Situação do Aluno" 
            aluno="Rômulo"
            nota={5.5}/>
    </div>
)