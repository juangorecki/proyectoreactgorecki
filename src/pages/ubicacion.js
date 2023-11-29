import '../css/dr-medrano.css'
import '../css/normalize.css'

const Ubicacion = (props) =>{
    return(
        <main>
        <div class="caballito">
            <h2>Zona Caballito</h2>
        </div>
        <div class="mapa">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7809.099840505001!2d-58.440260042515!3d-34.62130149932938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sar!4v1654075347926!5m2!1ses!2sar"
               style={{width: 600, height: 450, border: 0}}></iframe>
        </div>
        <hr />
        <div class="cubo">
            <div class="datostexto">
                <h3>Datos Contacto-Ubicación :</h3>
                <ul>
                    <li>Calle
                        Calasanz(Ubicacion consultar al wpp)</li>
                    <li>Whatsapp: +54 9 11 5501-1990</li>
                </ul>
                <p></p>

            </div>
        </div>



    </main>
    )
}

export default Ubicacion;