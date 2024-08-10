import React from "react";
function Card (props) {
    return(
        <div className="col-sm-3 pb-4">
            <div className="card">
                <img src="https://picsum.photos/500/325" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title"><strong>{props.titulo}</strong></h5>
                    <p className="card-text">{props.descripcion}</p>
                </div>
                <div className="card-footer bg-white">
                    <a href="#" className="btn btn-primary"><b>Find Out More!</b></a>
                </div>
            </div>
        </div>
    );
};
export default Card