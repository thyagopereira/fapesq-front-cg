import React from 'react'

import {Route,Switch,Link} from 'react-router-dom'
import {Button,Card,OverlayTrigger,Tooltip,Popover} from 'react-bootstrap'
import Registros from './views/Registros'
import Base from './views/Base'
import Sobre from './views/Sobre'
import Tutorial from './views/Tutorial'
import MapaCG from './views/MapaCG'
import MapaPB from './views/MapaPB'
import { BsListUl,BsCloudUpload,BsQuestionCircle,BsBook } from "react-icons/bs"
import { GrMapLocation,GrMap } from "react-icons/gr";

function MainPanel() {
  return (
  		<div id='principal' className='animated fadeIn'>
			<div className='row w-100 h-120px'>
				<div className='col-1 d-flex pr-0 h-120px'>
					<Card className='w-100 gray-100 px-0 mx-0'>
						<Card.Body className='pl-2 mx-0 pt-2'>
						    <div className='row'>
						      	<div className='col-4 px-0 mx-auto'>
						      		<Link to='/registros' className='text-decoration-none'>
						      			<OverlayTrigger 
      										placement='bottom'
										    overlay=
										      <Tooltip id='tooltip-records'>
										          Registros e filtros
										      </Tooltip>
										>
						      				<Button className='pl-2 my-auto' size="md" block variant='light'><BsListUl /></Button>
						      			</OverlayTrigger>
						      		</Link>
						      	</div>
						      	<div className='col-4 px-0 mx-auto'>
						      		<Link to='/base' className='text-decoration-none'>
						      			<OverlayTrigger 
      										placement='bottom'
										    overlay=
										      <Tooltip id='tooltip-database'>
										          Atualizar base de dados
										      </Tooltip>
										>
						      				<Button className='pl-2 my-auto mx-auto' size="md" block variant='light'><BsCloudUpload /></Button>
						      			</OverlayTrigger>
						      			
						      		</Link>
						      	</div>
						      	<div className='col-4 px-0'>
						      		<Link to='/mapapb' className='text-decoration-none'>
						      			<OverlayTrigger 
      										placement='right'
										    overlay=
										      <Tooltip id='tooltip-mapapb'>
										          Mapa da Paraíba
										      </Tooltip>
										>
						      				<Button className='pl-2 my-auto mx-auto' size="md" block variant='light'><GrMapLocation /></Button>
						      			</OverlayTrigger>

						      		</Link>
						      	</div>
						    </div>
						    <div className='row'>
						      	<div className='col-4 px-0 mx-auto'>
						      		<Link to='/mapacg' className='text-decoration-none'>
						      			<OverlayTrigger 
      										placement='bottom'
										    overlay=
										      <Tooltip id='tooltip-mapacg'>
										          Mapa de Campina Grande
										      </Tooltip>
										>
						      				<Button className='pl-2 my-auto' size="md" block variant='light'><GrMap /></Button>
						      			</OverlayTrigger>
						      		</Link>
						      	</div>
						      	<div className='col-4 px-0 mx-auto'>
						      		<Link to='/help' className='text-decoration-none'>
						      			<OverlayTrigger 
      										placement='bottom'
										    overlay=
										      <Tooltip id='tooltip-help'>
										          Tutorial
										      </Tooltip>
										>
						      				<Button className='pl-2 my-auto mx-auto' size="md" block variant='light'><BsBook /></Button>
						      			</OverlayTrigger>
						      			
						      		</Link>
						      	</div>
						      	<div className='col-4 px-0'>
						      		<Link to='/sobre' className='text-decoration-none'>
						      			<OverlayTrigger 
      										placement='right'
										    overlay=
										      <Tooltip id='tooltip-sobre'>
										          Sobre
										      </Tooltip>
										>
						      				<Button className='pl-2 my-auto mx-auto' size="md" block variant='light'><BsQuestionCircle /></Button>
						      			</OverlayTrigger>

						      		</Link>
						      	</div>
						    </div>
						  </Card.Body>
					</Card>
				</div>
				<div className='col pl-0 pr-0'>
				    <Card className='gray-100'>
							<Card.Body className='h-120px'>
								Advertisement
							</Card.Body>
						</Card>
					
				</div>

			</div>
			<div className='row mt-2 mr-4 pl-4 w-100'>
				<div className='col-9'>
					    <Switch>
				          	<Route path='/' component={Registros} exact />
				          	<Route path='/registros' component={Registros}/>
				          	<Route path='/base' component={Base}/>
				          	<Route path='/mapapb' component={MapaPB}/>
				          	<Route path='/mapacg' component={MapaCG}/>
				          	<Route path='/help' component={Tutorial}/>
				          	<Route path='/sobre' component={Sobre}/>
				        </Switch>
				</div>
				<div className='col bg-light'>
					Espaco reservado para informacoes e gráficos adicionais 
				</div>
			</div>
			
  		</div>
  );
}

export default MainPanel;