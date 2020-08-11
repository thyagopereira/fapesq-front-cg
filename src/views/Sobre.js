import React from 'react'
import Covid from '../img/coronavirus.jpg'
import './Sobre.css'
import Cards from './Cards.js'

function Sobre(){
	return(
		<div className='animated fadeIn'>

			<div className = 'conteudo'>
			<br/>
				<h3> Predição georreferenciada de surtos de Covid-19</h3>
				<img  src = {Covid} alt  = "covid-19"/>
					<p>
					Declarada oficialmente como pandemia pela OMS no dia  11 de março de 2020 , a COVID - 19, 
					termo técnico utilizado para designar a doença causada pelo Coronavírus (SARS-COV-2) - 
					se destaca pela sua alta taxa de contaminação , e já afetou diversos países ao redor  do globo.
					Devido às medidas de quarentena  recomendadas pela Organização Mundial da Saúde  
					e a enorme quantidade de casos da doença surgindo ao redor do mundo, 
					diversas áreas da sociedade encontram-se afetadas pelo distanciamento social.
					Os governos tomaram a iniciativa no monitoramento da doença e na definição dos protocolos de ação,
					porém , é fundamental compreender que a prevenção é  uma responsabilidade de todos. 
					</p>
					<p>
					È nessa situação que se enquadra nosso projeto, que  tem como proposta realizar predições georreferenciadas 
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

			<div className =  "about">
					<h3> Equipe e contatos</h3>
					<br></br>
					<div>
							<Cards />
					</div>

			</div>
  		</div>
	);
}

export default Sobre;