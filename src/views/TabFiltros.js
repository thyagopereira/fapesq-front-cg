import React from 'react'
import {Tabs,Tab} from 'react-bootstrap'
import Registros from './Registros'
import HistoricoPB from './HistoricoPB'


function TabFiltros(){

	return(
		<div className='animated fadeIn'>
  			<Tabs className='f-s-14' defaultActiveKey="tab-registros" id="tab-dados">
			  <Tab eventKey="tab-registros" title="Registros">
			    <div >
			    	<Registros />
			    </div>
			  </Tab>
			  <Tab eventKey="tab-historico-pb" title="Histórico (PB)">
			    <div>
			    	<HistoricoPB />
			    </div>
			  </Tab>
			</Tabs>
  		</div>
	);
}

export default TabFiltros;