import '../css/dr-medrano.css'
import '../css/normalize.css'


const Contactanos = (props) =>{
    return(
        <main class="holder contacto">
        <div>
            <h2 class="contac">Contacto rapido</h2>
            <form action="" method="" class="formulario">
                <p>
                    <label for="nom">Nombre</label>
                    <input type="text"/>
                </p>
                <p>
                    <label for="ema">Email</label>
                    <input type="email"/>
                </p>
                <p>
                    <label for="tel">Telefono</label>
                    <input type="text"/>

                </p>
                <p class="mensajuli">
                    <label for="men">Mensaje</label>
                    <textarea name="Mensaje" id="men"></textarea>

                </p>
                <p>
                    <input type="submit" value="Enviar"/>
                </p>

            </form>
        </div>
        <div class="datos">
            <h2>Escribinos</h2>
            <p>contactanos por aca:</p>
            <ul>
                <li>Whatsapp: +54 9 11 5501-1990</li>
                <li>Mail: Dr.MedranoAllende@gmail.com</li>
                <li>Telefono: 1155011990</li>
            </ul>
            <img src="img/dienteynombre.png" alt="drmedrano"/>

        </div>


    </main>
    )
}

export default Contactanos;