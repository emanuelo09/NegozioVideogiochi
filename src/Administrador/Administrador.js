import './Administrador.css'

export function Administrador() {

    return (

        <>

            <br />
            <br />
            <div class="container-fluid my-5">
                <div class="row">
                    <div class="col-6">
                        <img src="https://firebasestorage.googleapis.com/v0/b/negoziodivideogiochi-c4dbe.appspot.com/o/istockphoto-1313854295-612x612.jpg?alt=media&token=1b8f62a7-909b-44bb-90e7-2e23f973b638" alt="foto" class="img-fluid" />
                    </div>
                    <div class="col-4 card">
                        <h2 class="text-light text-center">Registro de mercancia</h2>
                        <form>
                            
                            <div class="row">
                                <div class="col-6">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1">
                                            <i class="bi bi-shop"></i>
                                        </span>
                                        <input type="text" class="form-control" placeholder="Nombre" />
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1">
                                            <i class="bi bi-images"></i>
                                        </span>
                                        <input type="text" class="form-control" placeholder="Foto" />
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-6">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1">
                                            <i class="bi bi-archive-fill"></i>
                                        </span>
                                        <input type="number" class="form-control" placeholder="Cantidad" />
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1">
                                            <i class="bi bi-unity"></i>
                                        </span>
                                        <input type="text" class="form-control" placeholder="Marca" />
                                    </div>
                                </div>
                            </div>

                            <div class="form-floating">
                                <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                                <label for="floatingTextarea">Descripción</label>
                            </div>

                            <div class="row mt-3">
                                <div class="col-6">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1">
                                            <i class="bi bi-currency-dollar"></i>
                                        </span>
                                        <input type="number" class="form-control" placeholder="Precio" />
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1">
                                            <i class="bi bi-columns-gap"></i>
                                        </span>
                                        <input type="text" class="form-control" placeholder="Clasificacion" />
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-6">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1">
                                            <i class="bi bi-clipboard2-plus-fill"></i>
                                        </span>
                                        <input type="text" class="form-control" placeholder="Proveedor" />
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1">
                                            <i class="bi bi-box-seam"></i>
                                        </span>
                                        <input type="text" class="form-control" placeholder="Presentación" />
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-6">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1">
                                            <i class="bi bi-download"></i>
                                        </span>
                                        <input type="number" class="form-control" placeholder="Peso" />
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1">
                                            <i class="bi bi-arrows-fullscreen"></i>
                                        </span>
                                        <input type="number" class="form-control" placeholder="Volumen" />
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-6">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1">
                                            <i class="bi bi-calendar3"></i>
                                        </span>
                                        <input type="date" class="form-control" placeholder="Fecha Ingreso" />
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1">
                                            <i class="bi bi-bag-check-fill"></i>
                                        </span>
                                        <input type="text" class="form-control" placeholder="Garantía" />
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-6">
                                    <div class="input-group mb-3">
                                        <div class="input-group-text">
                                            <input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input"/>
                                        </div>
                                        <input type="number" placeholder="Aplica descuento" class="form-control" aria-label="Text input with checkbox"/>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <button type="button" class="btn btn-primary">Enviar</button>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>

        </>

    );

}