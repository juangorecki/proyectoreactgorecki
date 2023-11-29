import '../css/dr-medrano.css'
import '../css/normalize.css'

const Trabajos = (props) =>{
    return(
        <main class="holder">
        <h2 class="works">Trabajos Odontologicos</h2>
        <h1 class="Coronas">Coronas De Porcelana Libres De Metal</h1>
        <div class="dientes">
            <div class="boca">
                <h2>Antes</h2>
                <img src="img/antes.png" alt="antesboca"/>
            </div>
            <div class="boca">
                <h2>Despues</h2>
                <img src="img/despues.png" alt="despuesboca"/>
            </div>
        </div>
        <hr />
        <h1 class="Coronas">Implante</h1>
        <div class="implante">
            <img src="img/implante.png" alt="implante"/>
            <div class="info">
                <h3>¿Que es un implante?</h3>
                <p>Un implante dental es un perno metálico que reemplaza la parte de la raíz de un diente faltante. Un
                    diente artificial (corona) se coloca en una extensión del perno (pilar) en el implante dental, lo
                    que brinda el aspecto de un diente real</p>
            </div>

        </div>
        <hr />
        <h1 class="Coronas">Protesis</h1>
        <div class="implante">
            <img src="img/protesis.png" alt="implante"/>
            <div class="info">
                <h3 class="protesis">¿Que es una Protesis?</h3>
                <p> Una prótesis dental es un elemento artificial destinado a restaurar uno o varios dientes. Gracias a
                    ellas es posible volver a masticar, hablar correctamente y recuperar la estética facial. hay
                    dsitintos tipos: Prótesis Dentales Removibles Las prótesis removibles son las que el propio paciente
                    puede retirar y volver a poner en la boca. Están fabricadas con resina, metal u otros materiales.
                    Prótesis Dentales fijas: Las prótesis fijas están sujetas mediante un atornillado o cementado y solo
                    las puede poner y quitar el dentista</p>
            </div>

        </div>

    </main>
    )
}

export default Trabajos;