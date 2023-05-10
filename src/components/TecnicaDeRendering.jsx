import { useState } from "react"


const TecnicaDeRendering = () => {
    const [muestraTexto, setMuestraTexto] = useState(false)

    function disparo() {
        setMuestraTexto(!muestraTexto)
    }

    return (
        <div>
            <button onClick={disparo}>Mostrar/Ocultar texto</button>
            {muestraTexto && <p>Hola, este texto se muestra y se oculta si haces clic en el botón</p>}
        </div>
    )
}

export default TecnicaDeRendering