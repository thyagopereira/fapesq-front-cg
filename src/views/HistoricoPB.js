import React, {useEffect} from 'react'
import context from '../utils/Context'
import {Form,OverlayTrigger,Tooltip,Button} from 'react-bootstrap'
import {Bar} from 'react-chartjs-2'

const data = {
	labels:[],
	datasets:[
		{ label: 'Casos na Paraíba',
	      type:'line',
	      fill: false,
	      lineTension: 0.3,
	      backgroundColor: 'rgba(40,91,220,0.6)',
	      borderColor: 'rgba(40,91,220,1)',
	      borderWidth: 2,
	      borderCapStyle: 'butt',
	      borderDash: [],
	      borderDashOffset: 0.0,
	      borderJoinStyle: 'miter',
	      pointBorderColor: 'rgba(40,91,220,1)',
	      pointBackgroundColor: '#fff',
	      hoverBackgroundColor: 'rgba(40,91,220,0.8)',
	      pointBorderWidth: 1,
	      pointHoverRadius: 4,
	      pointHoverBackgroundColor: 'rgba(40,91,220,1)',
	      pointHoverBorderColor: 'rgba(0,0,0,1)',
	      pointHoverBorderWidth: 2,
	      pointRadius: 2,
	      pointHitRadius: 6,
	      data:[]
		}
	]
}
const options =  {
        legend: {
            display: true,
            position: 'bottom',
            labels:{
            	boxWidth:20,
            	padding:10
            }
        },
        scales: {
            yAxes: [{
                ticks: {
                    suggestedMin: 0
                }
            }],
            xAxes: [{
	            barPercentage: 0.3,
	            categoryPercentage: 0.3,

	            gridLines: {
	                offsetGridLines: true
	            }
	        }]  
        }
    }
function HistoricoPB(){
	const { state } = React.useContext(context);
	const historico = state.historicoPB;
	const [repaint,setRepaint] = React.useState(true)

	useEffect(() => {
	    var dataInicial = document.getElementById('dataInicial').value
	    //console.log('Data inicial',dataInicial)
	    var dataFinal = document.getElementById('dataFinal').value
	    if(dataInicial === ''){
	    	document.getElementById('dataInicial').valueAsDate = new Date();
	    } 
	    if(dataFinal === ''){
	    	document.getElementById('dataFinal').valueAsDate = new Date();
	    }

	  }, [state.historicoPB,repaint]);
	
	function aplicarFiltros(){
		var dataInicial = document.getElementById('dataInicial').value
	    var dataFinal = document.getElementById('dataFinal').value
	    //console.log('Data inicial',dataInicial)

	    var ano = parseInt(dataInicial.substring(0,4));
	    var mes = parseInt(dataInicial.substring(5,7));
	    var dia= parseInt(dataInicial.substring(8,10));
	    //console.log('Registros filtrados', state.historicoPB)
	    
	    var filtro = state.historicoPB.filter( dq => 
	    		antesOuIgual(ano,mes,dia,dq.data)
	    	);
	   	//console.log('Filtrados antes',filtro)
	   	var anoFim = parseInt(dataFinal.substring(0,4));
	    var mesFim = parseInt(dataFinal.substring(5,7));
	    var diaFim = parseInt(dataFinal.substring(8,10));
		filtro = filtro.filter( dq => 
	    		depoisOuIgual(anoFim,mesFim,diaFim,dq.data)
	    	);
		//console.log('Filtrados depois',filtro)
		//console.log('Comparando',ano,'/',mes,'/',dia,' com ', '2020-07-01',':',antesOuIgual(ano,mes,dia,'2020-06-17') )
		//console.log('Comparando',ano,'/',mes,'/',dia,' com ', '2020-07-01',':',depoisOuIgual(ano,mes,dia,'2020-07-01') )
		var labels = capturarLabels(filtro)
		data.labels = [];
		labels.forEach( l => data.labels.push(l))
		//console.log('labels',data.labels)
		var serie = capturarSerie(filtro)
		data.datasets[0].data = serie
		//console.log('serie',data.datasets[0].data)
		var grafico = document.getElementById('graph')
		//console.log('Grafico',grafico)
		setRepaint(!repaint)
	}
	
	function depoisOuIgual(ano,mes,dia,dataStr){
		var ano2 = parseInt(dataStr.substring(0,4));
	    var mes2 = parseInt(dataStr.substring(5,7));
	    var dia2= parseInt(dataStr.substring(8,10));
	    var result = false;
	    //console.log('comparando ',ano,'/',mes,'/',dia,' com ', dataStr)
	    if(ano > ano2){
  			result = true;
  		} else if(ano === ano2){
  			//console.log('ano igual')
  			if(mes > mes2){
  				result = true;
  			} else if (mes === mes2){
  				//console.log('mes igual')
  				if (dia >= dia2){
  					result = true;
  				}
  			}
  		}
  		return result;
	}
	function antesOuIgual(ano,mes,dia,dataStr){	
  		//console.log('comparando antes ou igual')
  		var ano2 = parseInt(dataStr.substring(0,4));
	    var mes2 = parseInt(dataStr.substring(5,7));
	    var dia2= parseInt(dataStr.substring(8,10));
  		var result = false;
  		
  		if(ano < ano2){
  			result = true;
  		} else if(ano === ano2){
  			//console.log('ano igual')
  			if(mes < mes2){
  				result = true;
  			} else if (mes === mes2){
  				//console.log('mes igual')
  				if (dia <= dia2){
  					result = true;
  				}
  			}
  		}
  		
  		return result;
  	}

  	function capturarLabels(filtro){
  		var labelsX = []
  		filtro.forEach( r => labelsX.push(formatarData(r.data)) )
  		return labelsX
  	}
  	function capturarSerie(filtro){
  		var serie = []
  		filtro.forEach( r => serie.push(r.quantidade))
  		return serie
  	}
  	function formatarData(d){
  		var ano2 = d.substring(0,4);
	    var mes2 = d.substring(5,7);
	    var dia2= d.substring(8,10);
	    return dia2 + '/' + mes2 + '/' + ano2.substring(2,4)
  	}
	return(
		<div className='animated fadeIn'>
  			<div className='row'>
  				<div className='col-2 pt-4 f-s-14'>
  					Período desejado:
  				</div>
  				<div className='col-3 pt-3 f-s-13'>
  					<OverlayTrigger 
      						placement='bottom'
							overlay=
							<Tooltip id='tooltip-select-municipio'>
								Escolha uma data inicial
							</Tooltip>
						>
		  			<Form.Control id='dataInicial' className='f-s-13' type='date' placeholder='Data inicial'/>
		  			</OverlayTrigger>
		  		</div> 
		  		<div className='col-3 pt-3 f-s-13'>
		  			<OverlayTrigger 
      						placement='bottom'
							overlay=
							<Tooltip id='tooltip-select-municipio'>
								Escolha uma data final
							</Tooltip>
						>
		  			<Form.Control id='dataFinal' className='f-s-13' type='date' placeholder='Data final'/>
		  			</OverlayTrigger>
		  		</div>
		  		<div className='col-1 pt-3'>
		  			<Button className='mx-auto' size='sm' variant='outline-info' onClick={() => aplicarFiltros()}>
	  					Filtrar</Button>
		  		</div>
		  		<div className='col'>
		  		</div>
  			</div>
  			<div>
  				<Bar id='graph' key='1' data={data} options={options} height={100}/>
  			</div>
  		</div>
	);
}

export default HistoricoPB;