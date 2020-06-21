import React, {useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {Form,Table,Button} from 'react-bootstrap'
import { MdVisibility } from "react-icons/md";
import {extrairEstados,extrairTiposTeste,extrairResultados,formatData,extrairMunicipios,extrairBairros,removerEspacosBrancos} from '../utils/Utils'
import ModalViewRegistro from './ModalViewRegistro'

function Registros(){
	
	const [registros,setRegistros] = React.useState(undefined);
	const [registrosFiltrados, setRegistrosFiltrados] = React.useState([]);
	const [estados,setEstados] = React.useState([]);
	const [municipiosFiltrados,setMunicipiosFiltrados] = React.useState([]);
	const [bairrosFiltrados,setBairrosFiltrados] = React.useState([]);
	const [tiposTeste,setTiposTeste] = React.useState([]);
	const [estadoSelected,setEstadoSelected] = React.useState(undefined);
	const [municipioSelected,setMunicipioSelected] = React.useState(undefined);

	const [show, setShow] = React.useState(false);
	const [registroSelecionado, setRegistroSelecionado] = React.useState(undefined);

  	const handleClose = () => {
  		setShow(false)
  		setRegistroSelecionado(undefined)
  	}
  	const handleShow = () => setShow(true);


	//const [resultados,setResultados] = React.useState([]);
	function openModalRegistro(r){
		setRegistroSelecionado(r)
		setShow(true)
	}

    useEffect(() => {
        const fetchData = async () => {
          const registrosBuscados = 
            await axios.get('http://localhost:8080/registros');
            setRegistros(registrosBuscados.data);
            setRegistrosFiltrados(registrosBuscados.data.records)
            setEstados(extrairEstados(registrosBuscados.data.records))
            setTiposTeste(extrairTiposTeste(registrosBuscados.data.records))
            //setResultados(extrairResultados(registrosBuscados.data.records))
            console.log('Registros',registrosBuscados.data)
            //console.log('Resultados',resultados)
        };
        fetchData();     
      },[] );

    function aplicarFiltros(){
    	var estado = document.getElementById('estado').value;
    	var filtro = registros.records
    	//console.log('Por estados',filtro)
    	if(estadoSelected){
    		filtro = filtrarPorEstado(estado);
    		//console.log('Por estado', filtro.length)
    		if(municipioSelected){
    			filtro = filtrarPorMunicipio(filtro,municipioSelected);
    			//console.log('Por municipio',filtro.length)
    			var bairro = document.getElementById('bairro').value;
    			//console.log('Bairro',bairro)
    			if(bairro !== '' && bairro !== 'Bairro'){
    				filtro = filtrarPorBairro(filtro,bairro)
    				//console.log('Por bairro',filtro.length)
    			}
    		}
    	}
    	var tipoTeste = document.getElementById('tipoTeste').value;
    	filtro = filtrarPorTipoTeste(filtro,tipoTeste)
    	var resultado = document.getElementById('resultado').value;
    	filtro = filtrarPorResultado(filtro,resultado)
    	setRegistrosFiltrados(filtro)


	}
	function filtrarPorEstado(estado){
		return registros.records.filter( r =>
	    		estado === "" || estado=== 'Estado'? true: r.estadoResidencia === estado
	    	);
	}
	function filtrarPorMunicipio(regs,municipio){
		return regs.filter( r =>
	    		r.municipio === municipio
	    	);
	}
	function filtrarPorBairro(regs,bairro){
		return regs.filter( r =>
	    		r.bairro === bairro
	    	);
	}
	function filtrarPorTipoTeste(regs,tipoTeste){
		return regs.filter( r =>
	    		tipoTeste === "" || tipoTeste=== 'TipoTeste'? true: r.tipoTeste === tipoTeste
	    	);
	}
	function filtrarPorResultado(regs,resultado){
		return regs.filter( r =>
	    		resultado === "" || resultado=== 'Resultado'? true: (resultado === 'Positivo'?(r.resultadoTeste === true):(r.resultadoTeste === false))
	    	);
	}
	function selectEstado(){
		var estado = document.getElementById('estado').value;
		var municipios = [];
		if (estado !== "" && estado !== 'Estado'){
			setEstadoSelected(estado);
			var filtro = filtrarPorEstado(estado);
			municipios = extrairMunicipios(filtro);
		}else{
			setEstadoSelected(undefined)
		}
		setMunicipiosFiltrados(municipios)
	}
	function selectMunicipio(){
		var estado = document.getElementById('estado').value;
		var bairros = [];
		if (estado !== "" && estado !== 'Estado'){
			setEstadoSelected(estado);
			var filtro = filtrarPorEstado(estado);
			var municipio = document.getElementById('municipio').value;
			
			if (municipio !== "" && municipio !== 'Municipio'){
				setMunicipioSelected(municipio)
				filtro = filtrarPorMunicipio(filtro,municipio);
				bairros = extrairBairros(filtro);
				//console.log('Bairros',bairros)
			}else{
				setMunicipioSelected(undefined)
			}
		}else{
			setEstadoSelected(undefined)
		}
		setBairrosFiltrados(bairros)
	}

	return(
		<div className='animated fadeIn'>
			<ModalViewRegistro show={show} handleClose={handleClose} registro={registroSelecionado}/>
  			<div align='justify'>
	  			<div className='row'>
	  				<div className='col-2 mr-0'>
	  					<Form.Control id='estado' as='select' className='f-s-13' onChange={()=>selectEstado()}>
					    	<option hidden value='Estado'>Estado</option>
					    	<option value=''>Todos</option>
					    	{estados.map( e => 
					    		<option key={e} value={e}>{e}</option>
					    		)}
						</Form.Control>
	  				</div>
	  				<div className='col-2 mr-0'>
	  					<Form.Control id='municipio' as='select' className='f-s-13' disabled={estadoSelected === undefined} onChange={()=>selectMunicipio()}>
					    	<option hidden value='Municipio'>Município</option>
					    	<option value=''>Todos</option>
					    	{municipiosFiltrados.map( m => 
					    		<option key={m} value={m}>{m}</option>
					    		)}
						</Form.Control>
	  				</div>
	  				<div className='col-2 mr-0'>
	  					<Form.Control id='bairro' as='select' className='f-s-13' disabled={municipioSelected === undefined}>
					    	<option hidden value='Bairro'>Bairro</option>
					    	<option value=''>Todos</option>
					    	{bairrosFiltrados.map( b => 
					    		<option key={b} value={b}>{b}</option>
					    		)}
						</Form.Control>
	  				</div>
	  				<div className='col-2 ml-0 pl-0'>
	  					<Form.Control id='tipoTeste' as='select' className='f-s-13'>
					    	<option hidden value='TipoTeste'>Tipo de Teste</option>
					    	<option value=''>Todos</option>
					    	{tiposTeste.map( e => 
					    		<option key={e} value={e}>{e}</option>
					    		)}
						</Form.Control>
	  				</div>
	  				<div className='col-2 ml-0 pl-0'>
	  					<Form.Control id='resultado' as='select' className='f-s-13'>
					    	<option hidden value='Resultado'>Resultado</option>
					    	<option value=''>Todos</option>
					    	<option value='Positivo'>Positivo</option>
					    	<option value='Negativo'>Negativo</option>
						</Form.Control>
	  				</div>
	  				<div className='col'>
	  				</div>
	  				<div className='col-1 px-0'>
	  					<Button className='mx-auto' size='sm' variant='outline-info' onClick={() => aplicarFiltros()}>
	  					Filtrar</Button>
	  				</div>
	  			</div>
	  			<div className='py-2 f-s-14 font-weight-bold'>
  					Registros encontrados: {registrosFiltrados.length}
  				</div>
  				<div className='scroll-y h-600 mt-2'>
  					<Table hover striped bordered responsive>
  						<thead>
						    <tr className='f-s-13 text-center align-middle'>
						      <th className='py-1 col-width-20 align-middle'>View</th>
						      <th className='py-1 col-width-50 align-middle'>Data Notificação</th>
						      <th className='py-1 align-middle'>Tipo de teste</th>
						      <th className='py-1 align-middle'>Estado</th>
						      <th className='py-1 align-middle'>Município</th>
						      <th className='py-1 align-middle'>Bairro</th>
						      <th className='py-1 align-middle'>Resultado</th>
						      <th className='py-1 align-middle'>CEP</th>
						    </tr>
						</thead>
						<tbody>
							{registrosFiltrados.map( r => 
									<tr key={r.id}>
										<td className='py-0 f-s-12 text-center'><Link onClick={()=> openModalRegistro(r)}><MdVisibility /></Link></td>
										<td className='py-0 f-s-12'>{formatData(r.dataNotificacao)}</td>
										<td className='py-0 f-s-12'>{removerEspacosBrancos(r.tipoTeste)}</td>
										<td className='py-0 f-s-12'>{r.estadoResidencia}</td>
										<td className='py-0 f-s-12'>{r.municipio}</td>
										<td className='py-0 f-s-12'>{r.bairro}</td>
										<td className='py-0 f-s-12'>{r.resultadoTeste?'Positivo':'Negativo'}</td>
										<td className='py-0 f-s-12'>{r.cep}</td>
									</tr>
								)}
						</tbody>
  					</Table>
  				</div>

  			</div>
  		</div>
	);
}

export default Registros;