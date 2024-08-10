import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";

//create your first component
const Home = () => {
	let titulos = [{titulo:"Card title 1",descripcion:"Lorem1, ipsum dolor sit amet consectetur adipisicing elit. Sit, culpa."},{titulo:"Card title 2",descripcion:"Lorem2, ipsum dolor sit amet consectetur adipisicing elit. Sit, culpa."},{titulo:"Card title 3",descripcion:"Lorem3, ipsum dolor sit amet consectetur adipisicing elit. Sit, culpa."},{titulo:"Card title 4",descripcion:"Lorem4, ipsum dolor sit amet consectetur adipisicing elit. Sit, culpa."}];
	return (
		<div className="container-fluid p-0">
			<Navbar/>
			<div className="p-4">
				<Jumbotron/>
			</div>
			<div className="container-fluid text-center px-4">
				<div className="row">
					{titulos.map((item,index)=>(<Card key={index} titulo={item.titulo} descripcion={item.descripcion}/>))}
				</div>
			</div>
			<Footer/>
		</div>
	);
};

export default Home;
