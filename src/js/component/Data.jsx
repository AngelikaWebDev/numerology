import React from "react";

const Data = () => {


    return(
        <form>
            <div className="mb-3">
                <label className="form-label">Nombre</label>
                <input type="text" className="form-control" id="name" aria-describedby="name"/>
            </div>
            <div className="mb-3">
                <label className="form-label">Apellidos</label>
                <input type="text" className="form-control" id="lastname" aria-describedby="lastname"/>
            </div>
            <div className="mb-3">
            <label className="form-label">Fecha de Nacimiento</label>
                <div className="row">
                    <div className="col">
                        <label className="form-label">Día</label>
                        <input type="number" className="form-control" id="day" aria-describedby="day"/>
                    </div>
                    <div className="col">
                        <label className="form-label">Mes</label>
                        <input type="number" className="form-control" id="month" aria-describedby="day"/>
                    </div>
                    <div className="col">
                        <label className="form-label">Año</label>
                        <input type="number" className="form-control" id="year" aria-describedby="year"/>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Data;