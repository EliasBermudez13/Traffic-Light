import React, {useState} from "react";

//create your first component
const Home = () => {
	const [color1,setColor1]= useState("");
	const [color2,setColor2]= useState("");
	const [color3,setColor3]= useState("");
	
	function encenderRojo() {
		if(color1 === "0 0 10px 13px #f9e82c"){
			setColor1("");
		}else{
			setColor1("0 0 10px 13px #f9e82c");
			setColor2("");
			setColor3("");
		}
	}
	function encenderAmarillo() {
		if(color2 === "0 0 10px 13px #f9e82c"){
			setColor2("");
		}else{
			setColor2("0 0 10px 13px #f9e82c");
			setColor1("");
			setColor3("");
		}
	}
	function encenderVerde() {
		if(color3 === "0 0 10px 13px #f9e82c"){
			setColor3("");
		}else{
			setColor3("0 0 10px 13px #f9e82c");
			setColor1("");
			setColor2("");
		}
	}
	function alternarColor() {
		if(color1 === "0 0 10px 13px #f9e82c"){
			setColor1("");
			setColor2("0 0 10px 13px #f9e82c");
			setColor3("");
		}
		if(color2 === "0 0 10px 13px #f9e82c"){
			setColor1("");
			setColor2("");
			setColor3("0 0 10px 13px #f9e82c");
		}
		if(color3 === "0 0 10px 13px #f9e82c"){
			setColor2("");
			setColor3("");
			setColor1("0 0 10px 13px #f9e82c");
		}
		else if(color1 ==="" && color2 ==="" && color3 ===""){
			setColor1("0 0 10px 13px #f9e82c");
		}
	}
	return (
		<div className="text-center d-flex flex-column align-items-center" >
			<div className="bg-dark" style={{height: "200px", width: "10px"}}>
			
			</div>
			<div class="d-grid gap-0 col-1 mx-auto bg-dark rounded-4">
  				<button className={"btn mt-2 mx-2 rounded-circle btn-danger"} onClick={encenderRojo} style={{height: "100px", boxShadow: color1}}></button>
  				<button className={"btn mx-2 rounded-circle btn-warning"} onClick={encenderAmarillo} style={{height: "100px", boxShadow: color2}}></button>
				<button className={"btn mb-2 mx-2 rounded-circle btn-success"} onClick={encenderVerde} style={{height: "100px", boxShadow: color3}}></button>
			</div>
			<button type="button" className="btn btn-info m-5" onClick={alternarColor}>Click to change light</button>
		</div>
	);
};

export default Home;
