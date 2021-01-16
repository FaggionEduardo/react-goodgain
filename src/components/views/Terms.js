import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import GilroyMedium from '../../assets/Gilroy-Medium.ttf';
var options={
  damping:0.05,
  syncCallbacks: true,
  continuousScrolling:true
}


const styles = (theme) => ({
  root: {
    backgroundColor:'#121212',
    zIndex: 1,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
  },
  container: {
    display: 'flex',
    position: 'relative',
    padding:0,
    paddingTop:100,
    paddingBottom:50,
    margin:0,
    maxWidth:'none',
    width:'100%',
    [theme.breakpoints.down("xs")]: {
      paddingBottom:0,
      paddingTop:160,
    },
  },
  container2: {
    maxWidth: 1440,
    width:"80%",
    display: 'flex',
    position: 'relative',
    padding:"2% 0",
    margin:'auto',
    flexDirection:'column',
    [theme.breakpoints.down("sm")]: {
      flexDirection:'column',
      padding:"30px 0!important",
    },
  },
  title:{
    fontFamily: "'Gilroy',Helvetica,Arial,Lucida,sans-serif",
    fontSize: 40,
    color: '#ffffff',
    textAlign: 'center',
    width:'100%'
  },
  paragraph:{
    color:'#fff',
    fontFamily: "'Gilroy-medium',Helvetica,Arial,Lucida,sans-serif",
    lineHeight:'1.7em',
    margin:0,
    padding:0,
    paddingBottom:'1em'
  },
  '@font-face': {
    fontFamily: 'Gilroy-medium',
    src: `url(${GilroyMedium})`,
  },
});

function Terms(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.container2}>
          <h2 className={classes.title}>Termos e condições</h2>
          <p className={classes.paragraph}>Este termo e condição de uso é um acordo celebrado entre você e a Good Gain International, empresa registrada na Austrália ABN 39206638722, que opera uma plataforma de esports que permite que usuários acessem a uma rede de jogadores, gerenciamento de torneios e partidas. A Good Gain tem seu registro, armazenamento, processamento e gerenciamento de informações na Austrália, bem como os servidores de terceiros utilizados pela empresa também na Austrália, mas podem não se limitar a Austrália. Coletivamente podemos nos referir a Good Gain neste termo como “nós”, “GG”, “GoodGain” e “empresa”. Podemos também nos referir a você neste termo como “usuário” ou “cliente”. </p>
          <p className={classes.paragraph}> Este termo rege o uso do aplicativo, dos conteúdos, produtos e serviços da Good Gain oferecidos dentro do aplicativo, incluindo, mas não se limitando aos serviços atualmente disponíveis. </p>
          <p className={classes.paragraph}> Por favor, leia atentamente este documento e note que ao baixar nosso aplicativo, usar ou acessar nossos produtos e serviços, você concorda que leu, entendeu e aceitou os termos de uso aqui descritos. Nós recomendamos que você leia este termo em conjunto com a nossa politica de privacidade disponível dentro do aplicativo ou em nosso site (<span><a style={{color:'#2ea3f2', textDecoration:'none'}} href="http://www.goodgain.gg">www.goodgain.gg</a></span>). Se você não concorda com estes termos, não deve usar nosso aplicativo ou acessar nenhum dos nossos serviços.</p>
          <p className={classes.paragraph}>Este aplicativo é de responsabilidade e propriedade da Good Gain International. Uma vez que você faz o download do aplicativo e utiliza os produtos e serviços da empresa, isto é, navega dentro do aplicativo ou consome diretamente os produtos e serviços através de alguma transação financeira para contratação dos mesmos, você reconhece e concorda que está contratando e consumindo um produto ou serviço de uma empresa Australiana, com registro e operação na Austrália do Sul, orientada pelas leis federais e estaduais da Austrália. &nbsp;Ao utilizar qualquer produto ou serviço da Good Gain International você estará se submetendo as leis da Austrália do Sul, onde a Good Gain hospeda, processa e gerencia seus serviços e dados. Nós &nbsp;encorajamos você fortemente a consultar as leis referentes a estes serviços no seu país de residência. Ressaltamos que alguns países podem ter um entendimento diferente referente ao segmento de esports ou referente aos nossos serviços oferecidos. É de sua inteira e irrestrita responsabilidade verificar e cumprir as leis locais do seu país de residência. A Good Gain não se responsabiliza, sob nenhuma hipótese, por qualquer infração legal que infrinja as leis do seu país de residência. Você reconhece também que a Good Gain não é, sob nenhum aspecto legal, comercial, operacional, técnico e financeiro, responsável pela qualidade dos serviços de terceiros prestados exclusivamente a você e que servem para que você consiga utilizar nossos serviços. Os serviços de terceiros por você contratado serão descritos mais abaixo neste termo.</p>
          <p className={classes.paragraph}>Estamos sempre atualizando, melhorando nossos serviços e revisando nossas politicas, deste modo, este termo poderá ser atualizado de tempos em tempos. A Good Gain reserva-se o direito de atualizar esses termos a qualquer momento. Consideraremos que a sua utilização continuada de nossos serviços representa sua aceitação de qualquer alteração deste acordo. Se você considerar qualquer alteração nestes termos ou em produtos e serviços oferecidos como inaceitáveis, sua única solução será parar de usar ou acessar nossos serviços. Por fim, a Good Gain declara que não oferece e nem nunca oferecerá nos seus serviços quaisquer jogos que tenham possibilidades de ganhos oriundos de sorte e que caracterizem qualquer, mesmo que minimamente, jogos de azar ou características similares. O único tipo de jogo para competição oferecido por nós é, e sempre será, os que o resultado acontece única e exclusivamente pela habilidade e capacidade do jogador e não por probabilidade ou sorte. Também não possibilitamos acesso de terceiros aos resultados da nossa plataforma e, portanto, garantimos que não haverá, em nenhuma hipótese, empresas oferecendo ganhos sobre o resultado das nossas competições.</p>
          <br/>
          <p className={classes.paragraph}>
          1. <strong>Direito de Uso, declarações do usuário e a autoridade da GoodGain sobre contas.<br/></strong>Ao aceitar estes termos e, sobretudo, antes de iniciar a utilização dos serviços, o usuário declara, concorda e reconhece que:
          </p>
          <ul style={{paddingLeft:23, lineHeight:'26px'}} className={classes.paragraph}>
          <li>Os produtos oferecidos e intitulados como PARTIDAS RAPIDAS, CAMPEONATOS/TORNEIOS e RANKING são tratados aqui sempre como ‘’serviços”.</li>
          <li>Ao baixar nosso aplicativo você admite que tenha 18 anos ou mais de idade, uma vez que os serviços são expressamente proibidos para menores de 18 anos. Você reconhece também que o uso deste aplicativo, bem como os serviços nele oferecidos, é para seu uso pessoal e que você consultou e está seguro de que o uso destes serviços é licito dentro da jurisdição do seu país de residência. E você isenta a Good Gain de qualquer responsabilidade na sua jurisdição local e, reconhece que a empresa não tem capacidade de verificar e analisar cada jurisdição e, portanto, essa é a sua responsabilidade pessoal e intrasferível.</li>
          <li>A Good Gain reserva-se o direito de solicitar, de forma repentina e ao nosso critério, comprovações de idade para assegurar que os serviços não estejam sendo utilizados por uma faixa etária inferior ao permitido por este termo. Reservamo-nos o direito de, se constatado irregularidade, qualquer tipo de falsificação na idade registrada ou até mesmo demora no envio das informações comprobatórias, a cancelar temporariamente ou permanentemente a conta de forma imediata e não mais permitir, se assim desejarmos, o acesso do usuário a nenhum tipo de serviço, saldo e solicitações de saque. Nós podemos solicitar qualquer documento oficial que comprove a veracidade das informações, bem como solicitar registros fotográficos “<em>selfies</em>” imediatas e aleatórias com submissão dentro do aplicativo. Essas solicitações podem ocorrer sem prazos ou frequências programadas e sem limite de pedidos. É critério total e irrestrito da Good Gain fazer solicitações que certifiquem que este termo está sendo respeitado e cumprido.</li>
          <li>Você declara que apenas você, irrevogavelmente, é o único responsável por todos e quaisquer custos, danos, despesas, perdas ou prejuízos que ocorram devido à conexão de internet ou qualquer serviço de terceiro como telefonia, energia, entre outros e que não tenham relação com os serviços oferecidos diretamente pela Good Gain.</li>
          <li>Você reconhece que, embora utilize nossos serviços no aplicativo, ainda assim, você não obtém direitos sobre o conteúdo vinculado no aplicativo ou sobre qualquer informação ali vinculada e, toda e qualquer informação de nossa propriedade, não pode ser utilizada sem aviso prévio por escrito e autorizada pela Good Gain. Por fim, você declara que não fará nada que possa prejudicar a imagem ou reputação da Good Gain.</li>
          <li>Você reconhece que a Good Gain não é uma desenvolvedora de jogos e, também, não possui vínculo com nenhum desenvolvedor de games e, consecutivamente, não arbitra sobre nenhum problema técnico em jogos ou qualquer situação que possa acarretar danos ou insatisfação a sua experiência em um determinado jogo. Você está ciente de que a Good Gain é, apenas um organizador de campeonatos amadores online, e que as partidas são realizadas, gerenciadas e processadas pelos desenvolvedores dos jogos em seus servidores e que nós não possuímos nenhum vínculo legal, responsabilidade ou relação comercial com tais empresas.</li>
          <li>O usuário declara-se consciente de que há risco de perder dinheiro ao utilizar os serviços ofertados e que a GG ou qualquer membro da empresa não tem qualquer responsabilidade com seu desempenho nos jogos de habilidade e, consecutivamente, com resultados negativos.</li>
          <li>Reconhece que a Good Gain é apenas um organizador de campeonatos amadores online e, portanto, não haverá nenhum pagamento de juros sob o dinheiro depositado na sua carteira digital.</li>
          <li>A utilização dos nossos serviços é opcional e todos e quaisquer riscos são exclusivamente do usuário pelo seu desempenho nos jogos de habilidade.</li>
          <li>Você reconhece ser o único responsável por se informar sobre questões fiscais e tributárias do seu país onde está domiciliado e, o único responsável pelo recolhimento de qualquer imposto, taxas ou tributos aplicados sobre prêmios ou valores monetários recebidos através da participação em nossos campeonatos ou partidas rápidas. Você isenta totalmente a Good Gain de recolher qualquer imposto na sua jurisdição sobre seus ganhos. Reconhece que a Good Gain não tem capacidade de fornecer nenhum tipo de auxílio ou conselho referente à tributação no seu país de residência, com exceção aos residentes e usuários Australianos. Você deverá pagar o imposto sobre vendas ou impostos sobre valor agregado relevante para sua jurisdição.</li>
          <li>O usuário reconhece e concorda que os adversários encontrados pela plataforma são feitos de formas aleatórias, utilizando algoritmos programados e sem nenhuma interferência humana no processo de sorteio de adversários ou chaveamento de campeonatos. Consecutivamente, o usuário reconhece não ter direito de reclamações sobre o nivelamento dos adversários em qualquer situação, ainda que essa possa ser adversa ou desfavorável.</li>
          <li>O usuário declara que qualquer serviço de telecomunicação, energia entre outras contratadas para seu uso, estão fora da responsabilidade da Good Gain. Por sua vez, o usuário afirma que a qualidade e a boa prestação de serviços dessas empresas são responsabilidades exclusivamente suas e, portanto, qualquer perda causada por problemas com empresas terceirizadas é de responsabilidade exclusiva do usuário. A Good Gain não indenizará ou reembolsará o usuário por qualquer perda oriunda de falhas nos serviços de sua responsabilidade e por ele contratado.</li>
          <li>Você afirma que todas suas informações pessoais informadas no seu cadastro na GG são precisas e verdadeiras.</li>
          <li>Você declara não estar proibido de utilizar nossos serviços ou receber os prêmios em produto ou dinheiro por conta da sua localização geográfica ou jurisdição.;</li>
          <li>Para casos de qualquer informação fornecida seja constatada como falsa, a Good Gain reserva-se o direito de, imediatamente e ao nosso critério, encerrar sua conta e não mais permitir qualquer acesso. A decisão da Good Gain referente à exclusão e banimento de usuários é definitiva e não está aberta a revisão ou recurso.</li>
          <li>O usuário reconhece como legítimo e concorda com os valores cobrados pela Good Gain referente à prestação dos serviços como organizador de campeonatos, suporte tecnológico, entre outras características que contemplam a prestação de serviços e contribuem na entrega do produto ao usuário.</li>
          <li>O usuário garante que, caso haja um erro de pagamento e um dinheiro seja creditado equivocadamente em sua carteira digital ou em sua conta bancária, ainda assim esse dinheiro não é de sua propriedade e direito. O usuário se responsabiliza a devolver o valor inteiro a GoodGain ao ser notificado. A não devolução será considerada quebra deste acordo e o usuário poder ser banido da plataforma, além de ser notificado legalmente na sua jurisdição.</li>
          </ul>
          <br/>
          <p className={classes.paragraph}>
          2. <strong>Declaração de não garantia da Good Gain.</strong>
          </p>
          <ul style={{paddingLeft:23, lineHeight:'26px'}} className={classes.paragraph}>
          <li>A GG se isenta de fornecer quaisquer garantias em relação ao resultado financeiro ou desempenho do usuário utilizando nossos serviços. Os serviços de organização de partidas e campeonatos são prestados por nós e o desempenho, positivo ou negativo depende <strong>exclusivamente das suas habilidades</strong> em vencer seus adversários nos jogos escolhidos.</li>
          <li>A GG se isenta da qualidade, velocidade e quaisquer problemas técnicos durante os jogos e declara que essa responsabilidade é inteiramente dos desenvolvedores dos jogos. O usuário, ao jogar um jogo online, aceitou os termos do desenvolvedor e por isso está habilitado a utilizar o jogo no modo online. Por fim, quaisquer perdas que sejam fora do controle dos nossos serviços prestados não oferecem garantias. Ter uma conexão de Internet estável é responsabilidade do usuário, a Good Gain não reembolsará usuários ou equipes que perderam partidas devido a problemas de Internet do usuário.</li>
          <li>A Good Gain não se responsabiliza por qualquer tipo de comunicação ofensiva, ameaçadora, difamatória, racista, homofóbica ou qualquer tipo de descriminação entre os usuários dentro ou fora da plataforma. Encorajamos nossos usuários a registar qualquer ato ofensivo e denunciar às autoridades do seu país de residência.</li>
          <li>A equipe da Good Gain está sempre melhorando seus serviços, entretanto, não podemos garantir que qualquer um dos nossos serviços funcione de forma ininterrupta ou que esteja isento de erros, defeitos, vírus e etc.</li>
          <li>A Good Gain não é responsável pela conduta do usuário ou do seu adversário enquanto utilizam nossos serviços, portanto, a empresa reserva-se o direito de não oferecer qualquer garantia sobre a conduta dos competidores.</li>
          <li>A GG pode, ao seu critério e tempo, suspender, cancelar, alterar ou adicionar melhorias ou atualizações aos serviços já oferecidos ou incluir novos serviços no aplicativo sem nenhuma obrigatoriedade de avisá-lo de forma prévia.</li>
          <li>Nada neste acordo cria ou promove qualquer parceria, acordos de confiança, relações fiduciárias ou empresariais entre a Good Gain International e o usuário.</li>
          </ul>
          <br/>
          <p className={classes.paragraph}>
          3. <strong>Politica de Depósitos e Politicas de Retiradas.</strong>
          </p>
          <ul style={{paddingLeft:23, lineHeight:'26px'}} className={classes.paragraph}>
          <li>Depósitos: O usuário pode, ao seu critério e tempo, realizar transferências monetárias para sua carteira digital dentro do aplicativo da Good Gain sem qualquer limitação de valor.</li>
          <li>O usuário pode encontrar as formas de realizar o pagamento e abastecer sua carteira digital no site ou dentro do aplicativo. As formas de pagamento podem variar de acordo com seu local de residência.</li>
          <li>As transferências bancárias devem ser realizadas dentro do ambiente seguro da instituição financeira que o usuário possui conta aberta e, portanto, o procedimento de envio de dinheiro não tem vínculos tecnológicos ou qualquer integração de sistema entre as tecnologias do banco e da Good Gain, o que isenta a GG de quaisquer problemas técnicos ou de segurança na plataforma bancária. Esta regra aplica-se a qualquer modalidade de pagamento via transferência, seja utilizando instituições bancárias ou empresas de pagamento eletrônico.</li>
          <li>As transferências financeiras podem ser feitas diretamente para a Good Gain ou através de Dealers autorizados por nós a receber remessas do exterior. A GG se reserva ao direito de, ao seu critério, não aceitar transferências provenientes de países onde sabemos que a jurisdição proíbe nossos serviços.</li>
          <li>O usuário reconhece que é de sua responsabilidade certificar-se referente à conta de destino e sua correta digitação. Após a transferência o usuário deve acessar sua carteira digital dentro do aplicativo ou na área de cliente no site (<span><a style={{color:'#2ea3f2', textDecoration:'none'}} href="http://www.goodgain.gg">goodgain.gg</a></span>) e seguir as instruções para reportar o valor transferido, anexando o comprovante da transação de forma que esteja visível o remetente, o destinatário e valor total da transação. Após o recebimento, a informação é processada e, se confirmada, a GoodGain creditará o valor recebido na conta do usuário.</li>
          <li>A única forma de utilizar seu cartão de crédito como meio de pagamento é diretamente no site da Good Gain (<span><a style={{color:'#2ea3f2', textDecoration:'none'}} href="http://www.goodgain.gg">goodgain.gg</a></span>) dentro da área exclusiva de clientes que pode ser acessado utilizando o mesmo login e senha do aplicativo. O usuário deve preencher o valor de depósito e fazer o procedimento de check-out dentro do site. A transação é realizada pela operadora do cartão de crédito e, uma vez autorizada, a Good Gain adicionará o crédito na carteira digital do usuário. O usuário reconhece que a operação via cartão de crédito pode não ser automática e que a GoodGain é apenas a destinatária do valor, sendo dependente dos prazos estipulados pelas operadoras de cartão de crédito.</li>
          <li><strong>Retiradas</strong> – Solicitação de Saque: o usuário é o único proprietário dos valores mantidos na sua carta digital na sua conta na Good Gain. O usuário pode, ao seu critério, resgatar os valores disponíveis na sua carteira digital solicitando a transferência dos valores para sua conta bancaria no seu país de residência, contanto, que haja saldo positivo disponível para resgate.</li>
          <li>O usuário concorda que o recebimento de toda e qualquer remessa financeira proveniente de seus ganhos nos serviços da Good Gain só podem, sem exceção, ser transferidos para uma conta bancaria em seu nome e propriedade. A Good Gain reserva-se o direito de, com o objetivo de se proteger e proteger ao usuário de fraudes ou erros, apenas acatar solicitações de saques que tenham como favorecido o mesmo usuário cadastrado e proprietário da conta na GG.</li>
          <li>O usuário aceita que pode solicitar o saque dos valores disponíveis na sua carteira digital não mais que 01 vez por semana. A considerar a semana com início a segunda-feira 00h00min e encerrando domingo 23h59min. A Good Gain processará o pedido dentro de um prazo de até 05 dias úteis. Somam-se ao tempo de processamento da Good Gain possíveis prazos exigidos pelas instituições bancárias ou empresas de pagamento eletrônico utilizadas pelo usuário.</li>
          <li>Não há restrição em relação a limites de valores de saque, portanto, o usuário pode solicitar o saque integral do saldo disponível na sua carteira digital. A exceção é referente aos valores adicionados à carteira a partir de vouchers promocionais, a menos que seja informado o contrário nas condições gerais da promoção dos vouchers de incentivo. Os vouchers são incentivos e, não poderão, salvo alguma exceção, serem sacados antes do usuário realizar um depósito de valor igual ou superior ao voucher utilizado. A Good Gain poderá debitar o valor do voucher utilizado quando o usuário solicitar o saque de valor igual ou superior ao voucher.</li>
          <li>A Good Gain reserva-se o direito de, uma vez comprovada fraude de informações, violações deste ou de qualquer termo e política vinculadas a nossa empresa, regulamentos de jogos ou má conduta, suspender ou cancelar o acesso do usuário de forma imediata e sem possibilidades de acesso aos saldos.</li>
          <li>A moeda utilizada por você será sempre a moeda do seu país de residência.</li>
          </ul>
          <br/>
          <p className={classes.paragraph}>
          4. <strong>Serviços – Definição Geral e Valores.</strong>
          </p>
          <ul style={{paddingLeft:23, lineHeight:'26px'}} className={classes.paragraph}>
          <li>A Good Gain é uma organizadora de campeonatos e partidas rápidas e trabalha para juntar usuários dispostos a jogarem o mesmo jogo, sob as mesmas regras e premiações que são estipuladas dentro de um ambiente seguro, tecnológico, e com normas sólidas que são oferecidos pelo aplicativo da Good Gain. A GG arbitra sobre as regras do confronto, encontra os jogadores, garante que as competições ocorram com lisura, transparência e segurança. E, por esses serviços de organização de partidas ou campeonatos, plataforma tecnológica para disputa, captação dos adversários para confrontos entre outros, que a Good Gain calcula e cobra seus serviços conforme descritos abaixo.</li>
          <li><strong>Partidas Rápidas</strong>
          <ul style={{paddingLeft:23}}>
          <li>As partidas rápidas são jogos realizados online entre jogadores ou entre times formados por um grupo de jogadores. As partidas rápidas não possuem nenhuma fase ou etapa sequencial para definição do vencedor. As partidas rápidas, salvo exceções, se definem em apenas 01 partida e o vencedor é conhecido após o termino deste único confronto. A informação oficial do resultado é fornecida pela desenvolvedora do jogo. Os usuários escolhem o jogo favorito, a sala de competição conforme o valor da premiação que gostaria de receber em caso de vitória e solicita à Good Gain que encontre um usuário disposto a enfrentá-lo. A GG por sua vez encontra o usuário, através do seu algoritmo que busca jogadores de forma randômica e automatizada, faz a organização do confronto, auxiliando ambos os jogadores na criação da partida rápida, bem como estipula e arbitra sobre as regras, regulamentos, possíveis conflitos, apura o resultado final e realiza o pagamento da premiação estipulada em caso de vitória. A partida ou o jogo é realizado nos consoles dos usuários e dentro dos servidores dos desenvolvedores dos jogos e, portanto, sem nenhuma interferência ou relação de afiliação da Good Gain com esses jogos.</li>
          <li>A GG é remunerada através de uma taxa percentual fixa cobrada em todas as partidas rápidas realizadas dentro da plataforma. O percentual cobrado pela prestação de serviços no produto ‘’partidas rápidas’’ é de 20% sobre o valor pago pelo usuário para participar das disputas e, consecutivamente, também utilizar-se dos serviços acima descritos. A Good Gain reserva-se o direito de modificar ao seu critério e tempo o valor das taxas sem necessidade de aviso prévio, apenas alterando este acordo.</li>
          </ul>
          </li>
          <li><strong>Campeonatos online</strong>
          <ul style={{paddingLeft:23}}>
          <li>Os campeonatos online, também mencionados aqui como torneios, são disputados em fases classificatórias e pode acontecer com no mínimo 02 e no máximo 16 participantes, salvo exceções. Os torneios começam a partir das oitavas de final ou diretamente na final, se houver o número mínimo de inscritos. Os participantes são distribuídos nas chaves de forma randômica e automatizada, portanto, não possuem interferências humanas na escolhe dos adversários.</li>
          <li>A remuneração da Good Gain pelos serviços prestados na organização e administração dos campeonatos online dentro do aplicativo é através de taxa percentual fixa cobrada sob o valor da inscrição do campeonato. O percentual cobrado é de 31,25%. Esse valor é calculado sob o valor de inscrição do campeonato que é pago pelo usuário para participar e utilizar os serviços acima descritos. A Good Gain reserva-se o direito de modificar, ao seu critério e tempo, o valor das taxas sem necessidade de aviso prévio, apenas alterando este acordo.</li>
          <li>Ao se inscrever em um dos torneios, você concorda com as regras do torneio publicadas sempre e sem exceção, na página dos torneios. É sua responsabilidade ler, interpretar e, em caso de duvidas procurar o suporte.</li>
          <li>Você concorda que a Good Gain e seus colaboradores reservam-se o direito de alterar as regras de um torneio antes de seu início a qualquer momento sem aviso prévio e é sua responsabilidade consultar as regras e regulamentos atualizados.</li>
          <li>Alguns torneios podem durar o dia inteiro.</li>
          <li>O usuário concorda que a Good Gain revisará todas as partidas disputadas e poderá anular quaisquer jogos, caso seja comprovado qualquer violação. É de exclusivo critério da Good Gain e seus colaboradores anular a partida, comunicar os participantes e arbitrar em relação ao prêmio. O usuário declara também que reconhece a autoridade da Good Gain na arbitragem e renuncia ao valor da inscrição e também do recebimento da premiação.</li>
          </ul>
          </li>
          <li><strong>Rankings e premiações</strong>
          <ul style={{paddingLeft:23}}>
          <li>Os rankings disponíveis na Good Gain não são produtos ou serviços pelos quais a empresa cobra qualquer taxa do usuário. O ranking tem caráter de concurso e a premiação aos usuários são gratificações aos que terminaram em 1º lugar nos rankings mensais, respeitando os critérios dos regulamentos disponíveis dentro do aplicativo. A premiação não tem caráter obrigatório e permanente e, portanto, a Good Gain reserva-se o direito de modificar, descontinuar ou cancelar a premiação ao seu critério e tempo. A GG também se reserva o direito de não se responsabilizar pela qualidade, possíveis problemas técnicos ou de garantia, falhas e atrasos nos serviços de entrega dos fornecedores responsáveis pelos produtos enviados como prêmio e também, não faz parte da obrigação da Good Gain prestar nenhum suporte entre usuário premiado e fornecedor. A nota fiscal será emitida em nome do usuário e não da Good Gain.</li>
          </ul>
          </li>
          </ul>
          <br/>
          <p className={classes.paragraph}>
          5. <strong>Comportamentos Proibidos</strong>
          </p>
          <ul style={{paddingLeft:23, lineHeight:'26px'}} className={classes.paragraph}>
          <li><strong>Uso Pessoal: </strong>o serviço serve apenas e exclusivamente para uso pessoal do usuário. Apenas o usuário está autorizado a utilizar os serviços dentro da sua conta de acesso e a Good Gain possui, através do seu departamento de fraude, mecanismos para identificar manobras para burlar nosso controle.</li>
          <li><strong>Conluio: </strong>é expressamente proibido conluio entre usuários para favorecimento ilícito em favor de interesses pessoais ou para tirar vantagem competitiva em relação ao usuário adversário ou o time adversário. Manipulação de resultado ou tentativas de manipulação, simulação de desempenho, entre outras formas de forjar situações que favoreçam um usuário em detrimento do seu adversário, será considerada quebra deste acordo e a Good Gain, ao seu total critério, poderá encerrar a conta e banir os usuários. Encorajamos os usuários a denunciar tentativas de fraude.</li>
          <li><strong>Fraude: </strong>a Good Gain declara neste termo que não tolera sob nenhuma hipótese e circunstâncias comportamento fraudulento, trapaça ou a tentativa de trapacear, desonestidade ou conduta imprópria ao usar nossos serviços. A Good Gain, através do seu departamento de fraude, agirá com rigor e energia na punição do usuário envolvido em qualquer ato ilícito ou sua mera tentativa. O êxito ou não da prática fraudulenta não justifica e nem depõe a favor do usuário. As práticas incluem, mas não se limitam ao ambiente de competição. Qualquer tentativa de pagamento com cartão de crédito roubado, indícios de lavam de dinheiro ou desvios de finalidade no uso da sua conta de usuário, serão punidos com as medidas adequadas dentro da plataforma e, fora dela. A Good Gain poderá denunciar às autoridades práticas ilegais, cooperar com investigações e fornecer todas as informações sob nossa responsabilidade e interpor, se assim desejarmos, uma ação legal contra o usuário.</li>
          </ul>
          <br/>
          <p className={classes.paragraph}>
          6. <strong>Violação do Acordo</strong>
          </p>
          <ul style={{paddingLeft:23, lineHeight:'26px'}} className={classes.paragraph}>
          <li>Será considerada como violação do acordo a quebra de qualquer parte deste termo ou a sua totalidade por parte do usuário. O usuário concorda em indenizar, defender e isentar de responsabilidade a Good Gain, seus acionistas, diretores e funcionários contra reinvindicações, responsabilidades, perdas, danos, custos e despesas, incluindo os gastos com honorários advocatícios e quaisquer outros encargos que possam surgir por:</li>
          </ul>
          <p className={classes.paragraph}>– Quebra ou violação por sua parte na totalidade ou em qualquer parte deste acordo;</p>
          <p className={classes.paragraph}>– Violação por sua parte de leis ou direitos de terceiros;</p>
          <p className={classes.paragraph}>– Violação por sua parte de leis dentro da jurisdição do seu país de residência.</p>
          <br/>
          <p className={classes.paragraph}>
          7. <strong>Segurança e Conta</strong>
          </p>
          <ul style={{paddingLeft:23, lineHeight:'26px'}} className={classes.paragraph}>
          <li>O usuário pode ter apenas uma conta na Good Gain para utilizar qualquer um dos nossos serviços. É proibida e será considerada violação deste acordo, a criação de contas adicionais e, caso a Good Gain tome conhecimento da abertura de outras contas, reservamo-nos o direito de excluir todas as contas, inclusive a principal e mais antiga, sem aviso prévio e confiscar quaisquer valores disponíveis nas contas.</li>
          <li>O usuário é o único responsável por escolher sua senha de acesso e compromete-se a fazer de forma segura, confidencial e que preserve a segurança da sua conta.</li>
          <li>É de responsabilidade irrestrita do usuário manter seus dados de acesso secretos e confidenciais e fazer o possível para proteger sua confidencialidade. Acessos não autorizados por terceiros é de inteira responsabilidade do usuário e o acesso de desconhecidos ou desautorizados serão considerados como seu uso pessoal e, portanto, sua responsabilidade.</li>
          <li>É responsabilidade do usuário se manter atualizado em relação aos prazos de pagamento definidos para cada forma de pagamento. O usuário deve entrar em contato com o suporte caso tenha duvidas sobre o tempo de pagamento para cada forma de pagamento disponível.</li>
          <li>A Good Gain reserva-se o direito de utilizar processadores eletrônicos de pagamentos e/ou instituições financeiras que são consideradas como terceiros com o objetivo de processar os pagamentos solicitados por você e para você.</li>
          <li>Tempo de conta ativa e inativa: uma conta será considera inativa após 12 meses sem uso e, a Good Gain se reserva o direito de entrar em contato com o usuário, caso haja saldo positivo na carteira digital para realizar o estorno do pagamento.</li>
          <li>A Good Gain se reserva o direito de fechar a conta do usuário por qualquer motivo, a qualquer momento e sem aviso prévio. Os saldos, se houver, serão creditados ao usuário no momento do fechamento nas contas bancárias ou cartões de credito cadastrados pelo usuário em nosso banco de dados.</li>
          <li>O usuário pode solicitar o fechamento da sua conta na Good Gain entrando em contato com o suporte a qualquer momento. A Good Gain fechará a conta e excluirá todas as informações relacionadas ao usuário.</li>
          </ul>
          <p className={classes.paragraph}>
          8. <strong>Legislação Aplicável</strong>
          </p>
          <p className={classes.paragraph}>Este termo, acordo ou quais quer assuntos relacionados a ele, são regulados e interpretados de acordo com as leis da Austrália do Sul. O usuário concorda irrevogavelmente que, referente a este acordo, os tribunais da Austrália do Sul terão jurisdição exclusiva em relação a qualquer reclamação, disputa ou divergência relativa a este acordo e qualquer assunto oriundo deste. O usuário renuncia irrevogavelmente a qualquer direito de se opor a uma ação intentada nos tribunais da Austrália. Esta cláusula não limita o direito da Good Gain International de adotar os procedimentos contra você em qualquer outro tribunal de jurisdição competente ou adotar procedimentos em uma ou mais jurisdição competente. A escolha de outra disposição legal não prejudica, afeta, ou isenta você dos direitos que podem ser concedidos a você como consumidor sob as leis da Austrália do Sul.</p>
          <ul style={{paddingLeft:23, lineHeight:'26px'}} className={classes.paragraph}>
          <li>A versão em inglês prevalecerá como oficial em caso de qualquer divergência ou ruídos relativos às versões traduzidas deste acordo.</li>
          </ul>
          <br/>
          <p className={classes.paragraph}>
          9. <strong>Contate-nos</strong>
          </p>
          <p className={classes.paragraph}>Para questões sobre este termo, por favor, contate-nos por e-mail <span><a style={{color:'#2ea3f2', textDecoration:'none'}} href="mailto:legal@goodgain.gg">legal@goodgain.gg</a></span><strong><br/> Obrigado por ler este termo. </strong></p>
          <p className={classes.paragraph}>Ultima atualização: 07 de novembro de 2020</p>
        </div>
      </div>
    </div>
  );
}



export default withStyles(styles)(Terms);
