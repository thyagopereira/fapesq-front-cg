import React from 'react'
import {Modal,Button,Table} from 'react-bootstrap'
import {removerEspacosBrancos,formatData} from '../utils/Utils' 

function ModalViewRegistro(props) {
	const registro = props.registro

	function dismissAlert(){
		props.handleClose()
	}
	
	return(
		<div className='animated fadeIn'>
		    <Modal
		      show={props.show}
		      size="md"
		      aria-labelledby="contained-modal-title-vcenter"
		      centered
		      onHide={props.handleClose}
		    >
		      <Modal.Header closeButton className='py-0 my-1'>
		      <div>Detalhes do registro selecionado</div>
		      </Modal.Header>
		      <Modal.Body>   
		        <div className='f-s-14 scroll-y h-450'>
		        	<Table bordered striped hover>
		        		<tbody className='py-0 f-s-12'>
							<tr >
								<td className='py-0'>Identificador</td>
								<td className='py-0'>{registro?registro.id:''}</td>
							</tr>
							<tr>
								<td className='py-0'>Número da notificação</td>
								<td className='py-0'>{registro?registro.numeroNotificacao:''}</td>
							</tr>
							<tr>
								<td className='py-0'>Tipo de teste</td>
								<td className='py-0'>{registro?removerEspacosBrancos(registro.tipoTeste):''}</td>
							</tr>
							<tr>
								<td className='py-0'>Estado de residência</td>
								<td className='py-0'>{registro?registro.estadoResidencia:''}</td>
							</tr>
							<tr>
								<td className='py-0'>Município</td>
								<td className='py-0'>{registro?registro.municipio:''}</td>
							</tr>
							<tr>
								<td className='py-0'>Bairro</td>
								<td className='py-0'>{registro?registro.bairro:''}</td>
							</tr>
							<tr>
								<td className='py-0'>CEP</td>
								<td className='py-0'>{registro?registro.cep:''}</td>
							</tr>
							<tr>
								<td className='py-0'>Resultado do teste</td>
								<td className='py-0 font-weight-bold'>{registro?registro.resultadoTeste?'Positivo':'Negativo':''}</td>
							</tr>
							<tr>
								<td className='py-0'>Estado do teste</td>
								<td className='py-0'>{registro?registro.estadoTeste:''}</td>
							</tr>
							<tr>
								<td className='py-0'>Sexo</td>
								<td className='py-0'>{registro?registro.sexo:''}</td>
							</tr>
							<tr>
								<td className='py-0'>Profissional da área de saúde?</td>
								<td className='py-0'>{registro?registro.profissionalAreaSaude?'Sim':'Não':''}</td>
							</tr>
							<tr>
								<td className='py-0'>Febre?</td>
								<td className='py-0'>{registro?registro.febre?'Sim':'Não':''}</td>
							</tr>
							<tr>
								<td className='py-0'>Tosse?</td>
								<td className='py-0'>{registro?registro.tosse?'Sim':'Não':''}</td>
							</tr>
							<tr>
								<td className='py-0'>Dor de garganta?</td>
								<td className='py-0'>{registro?registro.dorGarganta?'Sim':'Não':''}</td>
							</tr>
							<tr>
								<td className='py-0'>Dispnéia?</td>
								<td className='py-0'>{registro?registro.dispneia?'Sim':'Não':''}</td>
							</tr>
							<tr>
								<td className='py-0'>Outros sintomas?</td>
								<td className='py-0'>{registro?registro.outros?'Sim':'Não':''}</td>
							</tr>
							<tr>
								<td className='py-0'>Doença respiratória descompensada?</td>
								<td className='py-0'>{registro?registro.doencaRespiratoriaDescompensada?'Sim':'Não':''}</td>
							</tr>
							<tr>
								<td className='py-0'>Doença renal avançada?</td>
								<td className='py-0'>{registro?registro.doencaRenalAvancada?'Sim':'Não':''}</td>
							</tr>
							<tr>
								<td className='py-0'>Doença cromossômica imunológica?</td>
								<td className='py-0'>{registro?registro.doencaCromossomicaImunologica?'Sim':'Não':''}</td>
							</tr>
							<tr>
								<td className='py-0'>Diabetes?</td>
								<td className='py-0'>{registro?registro.diabetes?'Sim':'Não':''}</td>
							</tr>
							<tr>
								<td className='py-0'>Imunossupressão?</td>
								<td className='py-0'>{registro?registro.imunossupressao?'Sim':'Não':''}</td>
							</tr>
							<tr>
								<td className='py-0'>Doença cardíaca crônica?</td>
								<td className='py-0'>{registro?registro.doencaCardiacaCronica?'Sim':'Não':''}</td>
							</tr>
							<tr>
								<td className='py-0'>Gestante de alto risco?</td>
								<td className='py-0'>{registro?registro.gestanteAltoRisco?'Sim':'Não':''}</td>
							</tr>
							<tr>
								<td className='py-0'>Data da notificação</td>
								<td className='py-0'>{registro?formatData(registro.dataNotificacao):''}</td>
							</tr>
							<tr>
								<td className='py-0'>Data de coleta do teste</td>
								<td className='py-0'>{registro?formatData(registro.dataColetaTeste):''}</td>
							</tr>
							<tr>
								<td className='py-0'>Data de nascimento</td>
								<td className='py-0'>{registro?formatData(registro.dataNascimento):''}</td>
							</tr>
							<tr>
								<td className='py-0'>Data de encerramento</td>
								<td className='py-0'>{registro?formatData(registro.dataEncerramento):''}</td>
							</tr>
							<tr>
								<td className='py-0'>Data de início dos sintomas</td>
								<td className='py-0'>{registro?formatData(registro.dataInicioSintomas):''}</td>
							</tr>
							<tr>
								<td className='py-0'>Descrição dos sintomas</td>
								<td className='py-0'>{registro?registro.descricaoSintoma:''}</td>
							</tr>
						</tbody>
		        	</Table>
		        </div>
		      </Modal.Body>
		      <Modal.Footer className='py-0 my-1'>
		        <Button variant='outline-info' size='sm' className='shadow-none' onClick={() => dismissAlert()}>Fechar</Button>
		      </Modal.Footer>
		    </Modal>
		</div>

		);
}
export default ModalViewRegistro;