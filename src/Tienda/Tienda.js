import './Tienda.css'
import { Link } from 'react-router-dom';

export function Tienda(){

    function cambiarFoto2(evento){

        evento.preventDefault();
        evento.target.classList.add("sombra");

    }

    function cambiarFoto(evento){

        evento.preventDefault();
        evento.target.classList.remove("sombra");

    }

    let productos = [
        {
            nombre:"Logitech G903 Lightspeed",
            precio:560000,
            descripcion:"Mouse gamer de muy buena calidad",
            foto:"https://firebasestorage.googleapis.com/v0/b/negoziodivideogiochi-c4dbe.appspot.com/o/mousegamer.webp?alt=media&token=20eadfe6-3672-4927-b3bb-8a0f7ea21eda"
        },
        {
            nombre:"XPG battlecruiser [Negro]",
            precio:750000,
            descripcion:"Chasis de la marca XPG de excelente calidad, disponible para editar tu computador deseado",
            foto:"https://firebasestorage.googleapis.com/v0/b/negoziodivideogiochi-c4dbe.appspot.com/o/chasis.webp?alt=media&token=fe497190-de03-46b9-b23f-b49003727355"
        },
        {
            nombre:"Benq Zowie XL2746K",
            precio:3800000,
            descripcion:"Monitor premium con un una excelente imagen",
            foto:"https://firebasestorage.googleapis.com/v0/b/negoziodivideogiochi-c4dbe.appspot.com/o/monitor.webp?alt=media&token=3c956f9c-3301-415a-a45f-3e71d272c9c1"
        },
        {
            nombre:"ST Gaming Forza X20 [ROJA/RED]",
            precio:850000,
            descripcion:"Silla de cuero sintetico con espuma nueva de alta densidad trasera",
            foto:"https://firebasestorage.googleapis.com/v0/b/negoziodivideogiochi-c4dbe.appspot.com/o/silla.webp?alt=media&token=b0015a0d-90a0-4cec-a2d1-9792d28e03fe"
        },
        {
            nombre:"Redragon Kumara K555",
            precio:320000,
            descripcion:"Teclado mecanico con iluminacion con plástico ABS reforzado y placa de acero",
            foto:"https://firebasestorage.googleapis.com/v0/b/negoziodivideogiochi-c4dbe.appspot.com/o/teclado.webp?alt=media&token=c234f03f-9025-4803-96f1-5ab118ebcc3c"
        },
        {
            nombre:"Asus ROG Delta",
            precio:687300,
            descripcion:"USB-C cable: 1.5m; USB 2.0 cable: 1m, Headphones Frequency Response 20 ~ 40000 Hz",
            foto:"https://firebasestorage.googleapis.com/v0/b/negoziodivideogiochi-c4dbe.appspot.com/o/diadema.webp?alt=media&token=3bec0dcc-cf73-495f-bec6-371456e30c12"
        },
        {
            nombre:"HyperX ProCast",
            precio:1100000,
            descripcion:"micrófono de condensador profesional con una conexión XLR[1] que se ha diseñado para quienes se ganan la vida con la voz.",
            foto:"https://firebasestorage.googleapis.com/v0/b/negoziodivideogiochi-c4dbe.appspot.com/o/Microfono.webp?alt=media&token=f8d2665c-ef5a-4023-ae49-07d1f9a1a7fd"
        },
        {
            nombre:"Logitech Brio 4K",
            precio:880000,
            descripcion:"Un puerto USB 2 o USB 3 3La grabación y el streaming 4K requieren un puerto USB 3.0 y software de terceros compatible Compatible con Microsoft Directshow Funciona con plataformas de llamadas populares",
            foto:"https://firebasestorage.googleapis.com/v0/b/negoziodivideogiochi-c4dbe.appspot.com/o/webcam.webp?alt=media&token=c747fcbb-e529-4884-a88d-3317a35119e9"
        },
        {
            nombre:"Corsair Vengance RS 8GB GDDR4 3200mhz",
            precio:250000,
            descripcion:"Intel 300Series,Intel 400 Series,Intel 500 Series,Intel 600 Series,AMD 300 Series,AMD 400 Series,AMD 500 Series Heat Spreader",
            foto:"https://firebasestorage.googleapis.com/v0/b/negoziodivideogiochi-c4dbe.appspot.com/o/ram.webp?alt=media&token=f22387f0-6813-44b8-822b-1a3fb637c5c2"
        },
        {
            nombre:"Cooler Master MasterLiquid ML240 Ilusion",
            precio:750000,
            descripcion:"Product Number	MLX-D24M-A18P2-R1 Exterior Color Black CPU Socket LGA1700, LGA1200, LGA2066, LGA2011-v3, LGA2011, LGA1151, LGA1150, LGA1155, LGA1156, AM5, AM4, AM3+, AM3, AM2+, AM2, FM2+, FM2, FM1 Radiator Material	Aluminum",
            foto:"https://firebasestorage.googleapis.com/v0/b/negoziodivideogiochi-c4dbe.appspot.com/o/disipador.webp?alt=media&token=7b093273-300c-4d38-9473-d168c4667890"
        },
        {
            nombre:"XPG Pylon 650w 80p Bronze",
            precio:390000,
            descripcion:"Intel ATX 12V V2.4 (la sincronización cumple con las pautas específicas de Intel ATX12V para la versión 2.52), Protecciones OCP / OVP / UVP / OPP / SCP / OTP / NLO / SIP, Certificados CE / UKCA / CB / FCC (IC) / EAC / CCC / TUV / cTUVus / TUV S-Mark / RCM / NOM / BSMI / KC, PFC 0,99, Voltaje de entrada 100-240V, Corriente de entrada 750W：10A/5A 、650W：10A/5A 、550W：8A/4A 、450W：7A/3.5A, Frecuencia de entrada 50Hz - 60Hz, Temperatura de operación 50°C",
            foto:"https://firebasestorage.googleapis.com/v0/b/negoziodivideogiochi-c4dbe.appspot.com/o/fuente_de_poder.webp?alt=media&token=d6aab540-3c8d-458e-8859-b5834206b981"
        },
        {
            nombre:"Kingston A400 240GB",
            precio:190000,
            descripcion:"SATA Rev. 3.0, 500MB/s en lectura, 320MB/s en escritura, Software de clonación no incluido",
            foto:"https://firebasestorage.googleapis.com/v0/b/negoziodivideogiochi-c4dbe.appspot.com/o/almacenamiento.webp?alt=media&token=fdc7dce8-4014-445b-864c-303282e16bef"
        },
    ];

    return(

        <>
            <div class="row row-cols-1 row-cols-md-4 g-5 my-5">
                {
                    productos.map(function(producto){
                        return(
                        <Link class="col zoom texto" to="/compras">
                                <div class="card shadow h-100">
                                    <h2 class="text-light text-center fw-bold">{producto.nombre}</h2>
                                    <img 
                                        src={producto.foto} 
                                        alt="foto" 
                                        class="img-fluid sombra" 
                                        onMouseOver={cambiarFoto} 
                                        onMouseLeave={cambiarFoto2} 
                                    />
                                    <p class="text-light text-center">{producto.descripcion}</p>
                                    <h3 class="text-light text-center fw-bold">${producto.precio}.00 COP
                                        <span class="col-6 text-end">
                                            <i class="ms-5 bi bi-cart4 fs-1"></i>
                                        </span>
                                    </h3>
                                </div>
                        </Link>    
                        )
                    })
                }
            </div>
            <br/>
            <br/>
        </>

    );

}