import React from 'react'

function Sobre(){
	return(
		<div className='animated fadeIn'>
  			<div align='justify'>
  				<p> 
  				Nosso projeto tem como proposta realizar predições georreferenciadas 
  				de surtos de COVID19 em Campina Grande utilizando algoritmos de machine learning. 
  				Nossa equipe abrange uma equipe multidisciplinar  de pesquisadores e alunos de 
  				Engenharia Elétrica, Ciências da Computação e Medicina da Universidade Federal 
  				de Campina Grande (UFCG), Instituto Federal da Paraíba (IFPB) e do NUTES (UEPB). 
  				Através de inteligência artificial, tentaremos predizer possíveis surtos de 
  				COVID-19 e notificar Gestores com antecedências para que medidas de controle 
  				sejam realizadas.
  				</p>
  				<p> 
  				No momento atual, a ferramenta permite visualização dos registros do COVID-19, 
  				com possibilidades de filtros que propiciam um entendimento mais localizado 
  				sobre possíveis casos registrados (exames que podem ter sido confirmados ou não).
  				</p>
  			</div>
  		</div>
	);
}

export default Sobre;