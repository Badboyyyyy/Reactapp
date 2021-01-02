import React from 'react';
import im from './1.png';
import am from './2.png';
import bm from './3.png';
import cm from './logo.png';
const ds={
	width: "50vw",
	float: "right",
	overflow: "hidden"
};
function Para1(){
	return(<>
	<div style={ds}>
	<img src={cm} style={{width: "20vw", marginLeft:"10vw"}}/>
	<ul>
	<li> C.R.I. energy efficient products are will recoginzed by various Government Institutions, as trustworthy products for various project accross the globe to save energy.</li>
	<li>C.R.I. is the highest contributor in the country for the projects of EESI(Energy Efficiency Service Limited) to replace the old inefficient promps with 5 star rated energy efficient with IOT enabled control panel </li>
	</ul>
	<img src={am} style={{width:"50vw"}}/>
	<p>Government of India has awarded the <h5 style={{display:"inline"}}> National Energy ConServation award 2018 </h5> Mr. J Shivraj Joint managing director of C.R.I. group received the award form smt Sumitra Mahajan, Speaker of Lok Sabha to Shri Raj Kumar Singh Honerable Minister of State.</p>

	 </div></>);
	}
function Para2(){
   return(
   <>
	<img src={bm} style={{width:"100vw"}}/>
	<h3 style={{textAlign:"center"}}>C.R.I. FLUID SYSTEM PRODUCTS CATER TO DIVERSE SEGMENTS </h3>
	<p>CHEMICALS & PROCESS | POWER WATER & WASTE WATER | OILS & GAS | PHARMA | SUGAR & DISTILLERIES | PAPER & PULP| MARINE & DEFENCE |METAL & MINING | FOOD BEVERAGE | PETROCHEMICALS & REFINERIES | SOLAR | BUILDING| HVAC |FIRE FIGHTING | AGRICULTURE & RESIDENTIAL </p>
	</>
	);
}

function Para3(){
	return(
	<img src={im} style={{height: "100vh"}}/>);
}
export default Para1;
export { Para2 , Para3 };
