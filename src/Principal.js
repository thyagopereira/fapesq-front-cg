import React from 'react'

import {Route,Switch,Link} from 'react-router-dom'
import {Button} from 'react-bootstrap'
import Registros from './views/Registros'
import Base from './views/Base'
import Sobre from './views/Sobre'

function Principal() {
  return (
  		<div id='principal' className='animated fadeIn'>
			<div className='row h-100'>
				<div className='col d-flex'>
				    <div className='col-2 flex-column'>
						<div className='pt-5'/>
						<Link to='/registros' className='text-decoration-none'><Button className='my-1' size="xl" block variant='light'>Registros</Button></Link>
						<Link to='/base' className='text-decoration-none'><Button className='my-1' size="xl" block variant='light'>Base de Dados</Button></Link>
						<Link to='/sobre' className='text-decoration-none'><Button className='my-1' size="xl" block variant='light'>Sobre</Button></Link>
					</div>
					<div className='pt-5 mr-4 px-2 w-100'>
					    <Switch>
				          	<Route path='/' component={Registros} exact />
				          	<Route path='/registros' component={Registros}/>
				          	<Route path='/base' component={Base}/>
				          	<Route path='/sobre' component={Sobre}/>
				        </Switch>
			        </div>
				</div>
			</div>
  		</div>
  );
}

export default Principal;