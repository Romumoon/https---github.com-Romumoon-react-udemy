import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';

export default _ =>
    <div id="app">
        <h1>Fundamentos React 2</h1>
        <Primeiro />
        <ComParametro
            titulo="Situação do Aluno"
            aluno="Rômulo"
            nota={5.5} />
    </div>