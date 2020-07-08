import React, { useEffect } from "react";
import * as vega from 'vega'
import spec from "./cg-spec.json";

function MapaCG(){

	useEffect(() => {
		const script = document.createElement("script");

    	script.src = "https://vega.github.io/vega/vega.min.js";
        script.type = "text/javascript";
    	script.async = true;
    	document.head.appendChild(script);

		//console.log('Adicionado script',document)

        render(spec)

            function render(specif) {
              var novoView = new vega.View(vega.parse(specif), {
                renderer:  'canvas',  // renderer (canvas or svg)
                container: '#view',   // parent DOM container
                hover:     true       // enable hover processing
                })
                //console.log('View prenchido', novoView)
            }

    },[])

    return (
      <div className="Chart">
        <div id="view"></div>
      </div>
    );
}

export default MapaCG;