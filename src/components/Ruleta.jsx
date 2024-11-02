import React from "react";


function App() {
    const valores=[
        {color:"azul",alto:77},
        {color:"olive",alto:177},
        {color:"orange",alto:101}
    ]
    const[altura,setAltura]=useState(109);
    const aumentar =()=>{
        (altura>=225)
        ? setAltura(10)
        :setAltura(altura+25)
    }
    <>
        <div className="container  ">
           
            <div  className=" barra azul animar"
                style={{'--altura': `${altura}px `
            }}
            onClick={aumentar}
           ></div>
          
        </div>
    </>

}