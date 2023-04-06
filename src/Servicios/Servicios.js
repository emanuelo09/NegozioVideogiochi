import './Servicios.css'

export function Servicios() {

    return (

        <>

            <div class="wrapper1">
                <h1>Información</h1>
                <div class="cols">
                    <div class="col" onTouchStart="this.classList.toggle('hover');">
                        <div class="container">
                            <div class="front" >
                                <div class="inner">
                                    <p>Metodos de Pago</p>

                                </div>
                            </div>
                            <div class="back">
                                <div class="inner">
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col" onTouchStart="this.classList.toggle('hover');">
                        <div class="container">
                            <div class="front">
                                <div class="inner">
                                    <p>Reparaciones Y Garantias</p>

                                </div>
                            </div>
                            <div class="back">
                                <div class="inner">
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col" onTouchStart="this.classList.toggle('hover');">
                        <div class="container">
                            <div class="front">
                                <div class="inner">
                                    <p>Productos</p>
                                </div>
                            </div>
                            <div class="back">
                                <div class="inner">
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>

    );

}