import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import GilroyMedium from '../../assets/Gilroy-Medium.ttf';


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
          <h2 className={classes.title}>Política Privacidade</h2>
          <p className={classes.paragraph}><strong>Declaração de Privacidade e Práticas de Privacidade</strong></p>
          <p className={classes.paragraph}>Esta política de privacidade é regida pelo Australian Privacy Principles (APPs) sob o Privacy Act 1988 (Cth). Este termo explica a política de privacidade seguida pela Good Gain International, empresa registrada na Austrália, que opera uma plataforma de esports que permite que usuários acessem a uma rede de jogadores, gerenciamento de torneios e partidas rápidas. Este termo de privacidade trata-se das práticas e políticas de privacidade utilizadas em nosso site (<span><a style={{textDecoration:'none', color:'#e6007e'}} href="http://www.goodgain.gg">www.goodgain.gg</a></span>) e em nosso aplicativo, disponível para download na Apple Store e Google Play.</p>
          <p className={classes.paragraph}>Neste termo informaremos quais as informações pessoais e de uso dos usuários podem ou são coletadas por nós, como são usadas, quem pode ter acesso e se podem ou não ser compartilhadas. Também apresentamos os procedimentos de segurança que utilizamos para proteger suas informações e como você pode ajudar-nos corrigindo quaisquer informações imprecisas. Nós vamos revisar esta política regularmente e podemos atualizá-la de tempos em tempos. Encorajamos os usuários a visitar o site ou o aplicativo periodicamente para verificar possíveis alterações. </p>
          <p className={classes.paragraph}><strong>O que coletamos, utilizamos e compartilhamos de informações?</strong></p>
          <p className={classes.paragraph}>Os dados aqui coletados são para uso restrito da Good Gain e, consecutivamente, de responsabilidade pelo seu uso adequado dentro dos limites legais regidos pelas leis de proteção de dados da Austrália. Dentro do nosso site apenas coletamos informações que você nos fornece de forma voluntária através de interações diretas por e-mail ou via formulário de contato disponível no site. Se você é um cliente ativo, ou seja, possui uma conta registrada e utiliza nossos serviços através do nosso aplicativo e/ou está navegando no site dentro da área restrita aos clientes, denominada como “área do cliente” e disponível no canto superior direito do site, nós podemos coletar dados extras de acordo com os serviços e ações que você está consumindo ou demandando. A Good Gain firma neste termo o compromisso de não vender qualquer informação coletada a partir dos nossos canais. Nós apenas coletamos os dados que são necessários para a entrega dos nossos serviços e para a execução do acordo do qual você é parte. </p>
          <p className={classes.paragraph}>As informações de dados pessoais que podemos requerer, coletar ou processar podem incluir, mas não se limitam a: </p>
          <p className={classes.paragraph}> <strong>a.</strong> Detalhes da conta: username, senha, foto de perfil;<br/> <strong>b.</strong> Detalhes do contato: e-mail, número de telefone;<br/> <strong>c.</strong> Detalhes da localização: endereço físico, fuso horário;<br/> <strong>d.</strong> Detalhes de identificação: nome completo, documento de identidade (carteira nacional de habilitação, por exemplo);<br/> <strong>e.</strong> Informações financeiras: detalhes do cartão de crédito, conta bancária, contas em plataformas de pagamento eletrônico;<br/> <strong>f.</strong> Detalhes Gerais de conteúdo: mensagens enviadas através do formulário de contato, anexos;<br/> <strong>g. </strong>Capturas de telas dos resultados de partidas.</p>
          <p className={classes.paragraph}><strong>Referente a dados de uso:</strong> </p>
          <p className={classes.paragraph}> <strong>a.</strong> Dados de uso: endereço de IP, computador, informações de conexão, cookies, configurações de preferência de idioma, localização, fuso horário. <br/> <strong>b.</strong> Informações de aparelho eletrônico: modelo, sistema operacional<br/> <strong>c.</strong> Ações: páginas visitadas, botões clicados, tempo gasto dentro do site e busca por palavras chaves, etc.</p>
          <p className={classes.paragraph}>Por fim, a menos que você nos solicite o oposto, podemos contatá-lo por e-mail, telefone ou mensagem de texto, para informá-lo sobre promoções, novos produtos e serviços ou alterações deste termo de privacidade.</p>
          <p className={classes.paragraph}><strong>Como você pode controlar o acesso as suas informações?</strong></p>
          <p className={classes.paragraph}>Nossos usuários tem a prerrogativa de, a qualquer momento e ao seu critério, questionar, alterar/atualizar ou cancelar qualquer contato conosco. Para tal, os usuários devem contatar-nos via e-mail (<span><a style={{textDecoration:'none', color:'#e6007e'}}  href="mailto:privacy@goodgain.gg">privacy@goodgain.gg</a></span>) e questionar quais dados temos dele, atualizar possíveis dados incorretos ou desatualizados ou até mesmo solicitar a exclusão desses dados.</p>
          <p className={classes.paragraph}><strong>Sobre a segurança</strong></p>
          <p className={classes.paragraph}>Orgulhosamente colocamos sua segurança em primeiro lugar. É nossa responsabilidade tomar precauções para proteger suas informações. Todas suas informações são protegidas e, quando você compartilha informações confidenciais como dados do seu cartão de crédito, essas informações são criptografadas e autenticadas em níveis rigorosos de segurança. Restringimos o acesso dos nossos colaboradores por nível de autonomia e, portanto, apenas as pessoas envolvidas diretamente para atender suas solicitações possuem acesso aos seus dados. E, mesmo assim, esse acesso é monitorado, autorizado e documentado por nós.</p>
          <p className={classes.paragraph}><strong>Usando os dados coletados </strong></p>
          <p className={classes.paragraph}>Nós coletamos os dados acima informados e cookies dos nossos usuários. Ao usar o site e/ou nosso aplicativo, os dados podem ser coletados automaticamente ou enviados de forma voluntária pelo usuário. Todo e qualquer dados de uso ou Cookies capturados por este site ou através de ferramentas de outras empresas terceirizadas contratadas por este site, servem exclusivamente para que nós identifiquemos nossos usuários e forneçamos os serviços adequados de acordo com o solicitado ou o esperado. Caso você nos solicite o contrário, pode se tornar impossível ou impreciso para a Good Gain fornecer as informações e serviços necessários. Os usuários são os únicos responsáveis pelos dados compartilhados, sejam dados pessoais ou de terceiros, disponibilizados nas capturas automáticas de informações.</p>
          <p className={classes.paragraph}>Os dados relativos ao usuário são coletados para que a Good Gain possa fornecer os serviços pelos quais o usuário está demandando e, também, para fins de análise ou inteligência de vendas. Os dados pessoais ou confidenciais, se coletados, são descritos neste termo de privacidade. O uso dos seus dados inclui, mas pode não se limitar a:</p>
          <p className={classes.paragraph}>
          1. <strong>Permitir que a Good Gain possa operar um serviço e fornece-lo a você;</strong>
          </p>
          <p className={classes.paragraph}> <strong>a. </strong>Informa-lo referente aos serviços, ofertas, eventos, atualizações de termos e o que mais entendermos como útil para nosso usuário;<br/> <strong>b. </strong>Controle de segurança: com seus dados conseguimos identificar se você está impedido de utilizar nossos serviços por ter sido banido anteriormente da nossa plataforma, identificar se você tentou ou cometeu qualquer ato ilícito dentro do nosso site ou aplicativo;<br/> <strong>c.</strong> Oferecer, vender e operar produtos e serviços para você;<br/> <strong>d.</strong> Cumprir obrigações legais ou regulamentares referente aos termos legais dos acordos de serviço.</p>
          <p className={classes.paragraph}>Nosso objetivo é tornar mais fácil sua inclusão no cenário competitivo e facilitar a forma como você aproveita oportunidades relacionadas ao segmento de esports em nosso site e aplicativo.</p>
          <p className={classes.paragraph}><strong>Tempo de retenção, local e modo de armazenagem</strong></p>
          <p className={classes.paragraph}>A Good Gain mantém os dados retidos neste site e em nosso aplicativo, em caso de clientes ativos, durante o tempo em que o usuário mantiver sua conta ativa, isto é, consumindo qualquer produto ou serviço da empresa e manter-se acessando seu <em>login</em> com frequência razoável. A inatividade da conta significa não realizar qualquer partida ou utilizar nenhum serviço no prazo de 12 meses. E, portanto, após esse período de inatividade, a Good Gain se reserva ao direito de excluir automaticamente os dados salvos referentes àqueles usuários. Aos usuários que não são clientes ativos, isto é, não possuem uma conta na Good Gain, nós mantemos apenas as informações que você nos encaminhar via contato direto e mantemos isso apenas pelo tempo necessário para suprir as dúvidas referentes a qualquer produto e serviço pelo qual o usuário nos procurou, com exceção feita pelos dados de navegação por Cookies. Apenas são retidas as informações pessoais pelo tempo necessário para honrar os propósitos pelos quais foram coletados e/ou incluindo também propósitos contábeis, legais, estatuários e etc.</p>
          <p className={classes.paragraph}>A Good Gain, como controladora dos dados, armazena e processa dentro dos padrões adequados de segurança para impedir qualquer tipo de invasão, divulgação ou uso não autorizado dos dados retidos. O conteúdo é manipulado apenas pelos profissionais necessários na prestação dos serviços dentro de cada departamento. Os departamentos que podem ter acesso aos dados são: fraude, tecnologia da informação, vendas, marketing, financeiro, jurídico e suporte técnico.&nbsp; Prestadores de serviços da Good Gain que podem ter acesso aos dados são: serviços de transporte para entrega de premiações, correios, provedores de hospedagem, agências de inteligência de vendas e marketing e empresas de tecnologia. O usuário pode solicitar se assim desejar, a lista dos fornecedores da Good Gain que possuem algum acesso aos seus dados.</p>
          <p className={classes.paragraph}>Os dados são processados na Austrália, mas podem não se limitar a este país. Alguns fornecedores podem não estar localizados dentro da Austrália e, ao usar nossos serviços, você concorda que esses dados podem, sob nossa responsabilidade, ser processados também fora da Austrália. O usuário pode solicitar os locais atualizados diretamente por e-mail (<span><a style={{textDecoration:'none', color:'#e6007e'}} href="mailto:privacy@goodgain.gg">privacy@goodgain.gg</a></span>).</p>
          <p className={classes.paragraph}><strong>Processamento de Dados </strong></p>
          <p className={classes.paragraph}>A GoodGain, como controladora dos dados retidos dos seus usuários, utiliza essas informações como análise de trafego web e, também, como forma de rastrear e compreender o comportamento do usuário na web. Desta forma, a empresa se torna mais assertiva na configuração e calibragem dos seus produtos e serviços ao próprio usuário.</p>
          <p className={classes.paragraph}>As ferramentas utilizadas para análise de Cookies e dados de uso são: Google Analytics e Google Tag Manager, com local de armazenamento nos EUA. O usuário pode acessar também as políticas de privacidade do Google Inc. através do site oficial da empresa.</p>
          <p className={classes.paragraph}>Base legal para processamento: Nós apenas coletamos e usamos dados pessoais se tivermos um ou mais motivos legítimos para fazê-lo.</p>
          <p className={classes.paragraph}><strong>Referência Legal, definições dos termos e regulamentação seguida por este termo</strong></p>
          <p className={classes.paragraph}>Cookies: Cookie é um pequeno arquivo de texto armazenado no seu dispositivo. Neste arquivo, várias informações podem ser armazenadas, desde as páginas visitadas até os dados fornecidos voluntariamente ao site.</p>
          <p className={classes.paragraph}>Usuário: Pessoas que navegam e/ou utilizam nossos serviços, conteúdos ou qualquer informação em nosso site ou aplicativo.</p>
          <p className={classes.paragraph}>Cliente Ativo: Pessoas que possuem conta aberta na Good Gain e utilizam um ou mais produtos ou serviços da empresa.</p>
          <p className={classes.paragraph}>Website/Site: Significa o site operado pela Good Gain <span><a style={{textDecoration:'none', color:'#e6007e'}}  href="http://www.goodgain.gg">www.goodgain.gg</a></span></p>
          <p className={classes.paragraph}>Controlador dos Dados: A empresa proprietária deste canal e todos seus produtos e serviços aqui ofertado e também responsável pela coleta, armazenagem e uso dos dados.</p>
          <p className={classes.paragraph}>Área do cliente: Espaço dedicado neste site para acesso às informações da conta digital dos clientes ativos. Para acessar está área é preciso ter conta aberta com <em>login</em> e senha.</p>
          <p className={classes.paragraph}>Google Analytics e Tag Manager: Produtos de tecnologia oferecidos e prestados pelo Google Inc. para analise e controle de Cookies e dados de uso.</p>
          <p className={classes.paragraph}>Dados Pessoais: Qualquer informação que seja possível identificar uma pessoa física através desta informação</p>
          <p className={classes.paragraph}>Dados Sigilosos: Informações privadas como números de identidade e informações bancárias de qualquer natureza.</p>
          <p className={classes.paragraph}>Dados de Uso: Informações coletadas automaticamente referentes à navegação do usuário ou cliente ativo dentro deste canal, podendo incluir: IP, horários, URLs digitadas, plataforma utilizada para navegação, sistema operacional do dispositivo, país de origem, caminhos de navegação dentro deste canal, frequência e preferências.</p>
          <p className={classes.paragraph}><strong>Base legal para processamento:</strong> Nós apenas coletamos e usamos dados pessoais se tivermos um ou mais motivos legítimos para fazê-lo. Esses motivos podem variar dependendo de onde nossos usuários estão localizados.</p>
          <p className={classes.paragraph}>Os serviços não são destinados a menores de 18 anos. Estão autorizados a se cadastrar apenas usuários que comprovem idade igual ou superior a 18 anos.</p>
          <p className={classes.paragraph}><strong>Contate-nos</strong></p>
          <p className={classes.paragraph}>Se você tiver perguntas ou reclamação sobre a maneira como lidamos com suas informações pessoais ou se você não concorda e entende que não estamos cumprindo este termo e quer exercer seu direito de privacidade em relação a suas informações pessoais, você pode entrar em contato com nosso diretor responsável pela proteção dos dados da seguinte forma:</p>
          <p className={classes.paragraph}><strong>Por e-mail: <br/> </strong><span><a style={{textDecoration:'none', color:'#e6007e'}} href="mailto:privacy@goodgain.gg">privacy@goodgain.gg</a></span></p>
          <p className={classes.paragraph}>Se não resolvermos sua reclamação de forma satisfatória, você pode apresentar uma reclamação ao OAIC (Office of the Australian Information Commisioner) pelo telefone 1300 363 992 ou online através do site <span><a style={{textDecoration:'none', color:'#e6007e'}} href="http://www.oaic.gov.au">www.oaic.gov.au</a></span>.</p>
          <p className={classes.paragraph}>Obrigado por ler este termo. <br/> Ultima atualização: 02 de novembro de 2020</p>
        </div>
      </div>
    </div>
  );
}



export default withStyles(styles)(Terms);
