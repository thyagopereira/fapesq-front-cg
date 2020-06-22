// export const BACK_END_URL = "http://localhost:8080";
export const BACK_END_URL = "http://150.165.15.44:8081";

export function unique (array) {
	   var unique = new Set(array) ;
	   return [...unique];
}

export function extrairEstados(registros){
	
	var estados = [];
	registros.forEach( r => estados.push(r.estadoResidencia))
	var unique = new Set(estados) ;
	return [...unique].sort();	
}

//ja recebe os registros de determinado estado
export function extrairMunicipios(registros){
	
	var municipios = [];
	registros.forEach( r => municipios.push(r.municipio))
	var unique = new Set(municipios) ;
	
	return [...unique].sort();	
}

//ja recebe os registros de determinado municipio
export function extrairBairros(registros){
	
	var bairros = [];
	registros.forEach( r => bairros.push(r.bairro))
	var unique = new Set(bairros) ;
	
	return [...unique].sort();	
}

export function extrairTiposTeste(registros){
	
	var tipos = [];
	registros.forEach( r => tipos.push(r.tipoTeste))
	var unique = new Set(tipos) ;
	return [...unique];	
}
export function extrairResultados(registros){
	var resultados = [];
	registros.forEach( r => resultados.push(r.resultadoTeste))
	var unique = new Set(resultados) ;
	return [...unique];	
}

//data vem no formato; 2020-05-13T03:00:00.000+00:00
export function formatData(data){
  	var dataStr = ''
  	if(data){
	  	var dataPart = data.split('T');
	  	//console.log('Data field',dataField)
	  	var dataFields = dataPart[0].split('-')
	  	var ano = dataFields[0]
	  	var mes = dataFields[1]
	  	var dia = dataFields[2]
	  	dataStr = dia + '/' + mes + '/' + ano
	}
  	return dataStr
}

export function removerEspacosBrancos(string){
	return string.replace('','').replace('','')
}