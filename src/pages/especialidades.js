import '../css/dr-medrano.css'
import '../css/normalize.css'

const Especialidades = (props) =>{
    return(
        <main class="holder">
        <section class="especialidades">
            <div class="especialidad">
                <h2>Odonotología general</h2>
                <p>Solucionar los problemas primarios que tienen que ver con la boca, dientes y otras estructuras
                    relacionadas, contacto inicial del paciente con el profesional de la Odontología</p>

            </div>
            <div class="especialidad">
                <h2>Protesis Dentales</h2>
                <p>Elemento artificial destinado a restaurar la anatomía de una o varias piezas dentarias, restaurando
                    también la relación entre los maxilares, a la vez que devuelve la dimensión vertical, y repone los
                    dientes.</p>

            </div>
            <div class="especialidad">
                <h2>Implantología Oral</h2>
                <p>Por medio de implantes dentales logramos el reemplazo de una o varias piezas dentales faltantes.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

            </div>
            <div class="especialidad">
                <h2>Estética Dental</h2>
                <p>Devolvemos una apariencia natural a tus elementos dentarios, cuidando cada aspecto estético de tu
                    boca. Lorem ipsum, dolor sit amet consectetur adipisicing elit. .</p>
            </div>
        </section>
        <section>
            <div>
                <img src="img/especialidadimagen.jpg" alt="especialidad" width="970"/>
            </div>
        </section>

    </main>
    )
}

export default Especialidades;