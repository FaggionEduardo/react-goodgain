import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '80%',
    maxWidth: 1440,
    margin:'auto',
    paddingTop:170,
    [theme.breakpoints.down("sm")]: {
        width: '95%',
    },
  },
  heading: {
    fontSize:'1vw',
    fontWeight:600,
    WebkitBackgroundClip:'text',
    WebkitTextFillColor: 'transparent',
    backgroundImage: "linear-gradient(180deg,rgba(230,0,126,100) 0%,rgba(233,72,52,100) 100%)",
    [theme.breakpoints.down("sm")]: {
        fontSize:'2vw',
    },
    [theme.breakpoints.down("xs")]: {
        fontSize:'4vw',
    },
  },
  title:{
    fontFamily: "'Gilroy',Helvetica,Arial,Lucida,sans-serif",
    fontSize: 40,
    color: '#ffffff',
    textAlign: 'center',
    width:'100%'
  },
  accordion:{
      backgroundColor:'#212121',
      borderRadius:4,
      color:'#fff',
      margin:'1% 0',
      '& > div':{
        padding:'0 1%',
        [theme.breakpoints.down("xs")]: {
            padding:'0 2%',
        },
      },
  },
  text:{
    paddingLeft:0,
    paddingRight:0,
    '& > p':{
    display:'flex',
    flexDirection:'column',
    fontSize:'0.9vw',
    [theme.breakpoints.down("sm")]: {
        fontSize:'2.2vw',
    },
    [theme.breakpoints.down("xs")]: {
        fontSize:'4vw',
    },
},
    '& > p > span':{
        fontSize:'0.8vw',
        [theme.breakpoints.down("sm")]: {
            fontSize:'2vw',
        },
        [theme.breakpoints.down("xs")]: {
            fontSize:'3.8vw',
        },
    }
   
}
}));

export default function SimpleAccordion() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <h2 className={classes.title}>FAQ</h2>
      <Accordion className={classes.accordion}>
        <AccordionSummary 
          expandIcon={<ExpandMoreIcon style={{color:'#e6007e'}} />}
        >
          <Typography className={classes.heading}>Informações gerais</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.text}>
          <Typography >
            <strong>1. O que é a GoodGain?</strong><br/>
            <span>Nosso app conecta jogadores apaixonados por games, permitindo que eles participem de competições premiações em dinheiro. Na GoodGain é incluir todos os jogadores no cenário competitivo, independente do nível de jogo. Nós temos premiações para todos os níveis de jogadores.</span> <br/>
            <strong>2. Como abro minha conta na GG? </strong><br/>
            <span>É completamente grátis abrir sua conta na GoodGain. Você só precisa ter 18 anos ou mais para participar da nossa comunidade e começar a lucrar com seu jogo favorito. Você pode abrir sua conta através do nosso site ou baixando nosso app. </span><br/>
            <strong>3. A GoodGain é legal?</strong><br/>
            <span>Sim. A GoodGain é uma empresa sediada na Austrália do Sul e toda sua operação é regido pelas leis locais.  As competições em nossa plataforma são legais, pois, absolutamente todos os nossos jogos tem como fator exclusivo a habilidade. Não colocamos e nem colocaremos, sob nenhuma hipótese, jogos de azar ou jogos que tenham a sorte como fator preponderante para o resultado do jogo. Aqui você só vai encontrar jogos de videogame, computador e mobile que dependam exclusivamente do seu desempenho e da sua habilidade para que você saia vencedor e receba os prêmios. Consulte também as leis do seu país de residência para eSports.</span> <br/>
            <strong>4. Quais plataformas estão disponíveis?</strong><br/>
            <span>Os jogos disponíveis são para PS4, Xbox One e PC. Em breve incluiremos outros consoles como PS5, Xbox X e Celular. </span><br/>

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color:'#e6007e'}} />}
          
        >
          <Typography className={classes.heading}>Informações sobre conta</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.text}>
          <Typography >
            <strong>1. Como me cadastrar na GoodGain?</strong><br/>
            <span>O cadastro é fácil, rápido e seguro. Você precisa ter 18 anos ou mais para participar. Além de informações básicas, existem duas informações importantes que você precisa informar: CPF e o ID do seu console de jogo. O CPF garante que você receba na sua conta bancária as premiações e o ID é necessário para que a gente informe seu adversário na hora dos jogos.</span><br/>
            <strong>2. Como recuperar minha senha?</strong><br/>
            <span>Na etapa inicial do app clique em esqueci minha senha que nosso sistema encaminhará um link de recuperação de senha para seu e-mail cadastrado. </span><br/>
            <strong>3. Posso ter mais de uma conta?</strong><br/>
            <span>Não! É permitida apenas uma conta por CPF.</span><br/>
            <strong>4. Posso cadastrar mais de 01 console de jogo?</strong><br/>
            <span>Sim. Se você joga em mais de um console, poderá cadastrar outros no seu perfil.</span><br/>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color:'#e6007e'}} />}
          
        >
          <Typography className={classes.heading}>Informações sobre competições</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.text}>
          <Typography>
            <strong>1. O que é a partida rápida? </strong><br/>
            <span>Partidas rápidas são jogos amistosos, ou seja, jogo único. Venceu, recebeu! É o caminho mais rápido para as premiações, bastando apenas uma vitória. </span><br/>
            <strong>2. Como faço para jogar uma partida rápida? </strong><br/>
            <span>•	Faça seu cadastro</span>
            <span>•	Transfira algum valor para sua conta digital</span>
            <span>•	Escolha seu jogo favorito</span>
            <span>•	Escolha uma sala de acordo com o valor que deseja receber em caso de vitória</span>
            <span>•	Encontre um adversário e envie o desafio dentro do app</span>
            <span>•	Crie as conexões de amizade com seu adversário </span>
            <span>•	Crie a partida dentro do jogo escolhido </span>
            <span>•	Jogue a partida e, ao final do jogo, reporte o resultado dentro do app.</span><br/>
            <strong>3. Como faço para participar de um campeonato?</strong><br/>
            <span>•	Faça seu cadastro</span>
            <span>•	Transfira algum valor para sua conta digital</span>
            <span>•	Escolha seu jogo favorito</span>
            <span>•	Escolha um torneio de acordo com o valor que deseja receber em caso de vitória</span>
            <span>•	Faça o check-in no horário com pelo menos 10 minutos de antecedência do horário de inicio. </span>
            <span>•	Enfrente seus adversários que são direcionados pela plataforma para cada fase do torneio.</span>
            <span>•	O campeão receberá a premiação. </span>
            <span>•	Jogue as partidas e reporte os resultados ao final de cada um delas. </span><br/>
            <strong>4. Como reportar o resultado final do jogo? </strong><br/>
            <span>Os dois jogadores devem reportar o resultado final dentro do app imediatamente ao término da partida. O vencedor deve apontar a opção vitória e anexar a foto do resultado oficial do confronto. Essa foto deve contar o placar final, bem como o ID dos dois adversários. É obrigatório que a foto apresenta as provas do confronto e da vitória.  Nosso time de suporte irá validar o resultado e creditar o valor da premiação ao vencedor. Se, por algum motivo, algum jogador descumprir o regulamento, o adversário pode contestar a vitória enviando as devidas provas e a partida ficará em analise até o suporte arbitrar na disputa. </span><br/>
            <strong>5. O que fazer se meu adversário descumprir o regulamento?</strong><br/>
            <span>Nossos regulamentos são claros e cobrem todos os pontos. Os jogadores são obrigados a ler e aceitar os termos do regulamento antes de iniciar as competições. Caso algum jogador descumpra qualquer item do regulamento, o oponente que se sentir lesado deve relatar os problemas dentro dos prazos estipulados também no regulamento, reportando quais itens foram infringidos e fornecendo provas suficientes para que nosso time de suporte possa analisar a solicitação. Reclamações sem procedência ou com intuito de reverter resultados negativos serão punidas. O não cumprimento do regulamento ou atos de má fé pode ocasionar o encerramento da conta do usuário. </span><br/>
            <strong>6. O que acontece se houver queda de conexão?</strong><br/>
            <span>Verifique os termos do regulamento do jogo que você está disputando. Cada regulamento tem sua particularidade e todos informam sobre queda de conexão, procedimentos e consequências. </span><br/>
            <strong>7. O ID do meu adversário está diferente do ID que aparece no app. O que fazer? </strong><br/>
            <span>Nossa recomendação é que você não jogue a partida e entre em contato por mensagem com seu adversário e registre a troca de mensagens. Solicite ao oponente que ele crie a conexão com o ID informado pelo nosso aplicativo. Caso a situação não se resolva, recomendamos que você não realize a partida. Anexe todas as provas e mensagens trocadas com seu adversário e envie para nosso suporte. Se você aceitar jogar a partida mesmo sabendo que o ID está errado e perder, sua reinvindicação não será aceita.</span><br/>
            <strong>8. Como funcionam os campeonatos?</strong><br/>
            <span>Os campeonatos funcionam no sistema mata-mata em partidas eliminatórias. O campeonato pode ocorrer com número mínimo de 02 jogadores (direto na fase final) até um número máximo de 16 competidores (a partir das oitavas-de-final).  Os campeonatos iniciam e encerram no mesmo dia, com data e horário de inicio pré-definido com antecedência e check-in disponível 30 minutos antes do inicio agendado. As partidas ocorrem de forma sequencial, ou seja, sem intervalo de tempo entre uma fase e outra. O usuário passou de fase, a próxima inicia na sequencia assim que o adversário for definido. </span><br/>
            <strong>9. Quantos jogadores participam dos campeonatos?</strong><br/>
            <span>Os campeonatos podem começar com um número mínimo de 02 e máximo de 16 jogadores. A plataforma faz o sorteio aleatório dos jogadores e os distribui nas chaves do playoff. Campeonatos com número impar de participantes, terá um dos participantes aleatoriamente escolhidos pela plataforma para se classificado automaticamente para a fase seguinte. </span><br/>
            <strong>10. Não fiz o check-in e o campeonato já iniciou. O que fazer?</strong><br/>
            <span>Infelizmente não há nada que possamos fazer. A premiação total do campeonato é calculada com base no número de participantes inscritos no campeonato. Encorajamos nossos usuários a sempre verificarem as notificações enviadas por nós e também a registrar o horário do campeonato na agenda do seu aparelho móvel celular.</span><br/>
            <strong>11. Qual a premiação final de cada campeonato? </strong><br/>
            <span>A informação do valor final da premiação é divulgada após o final das inscrições com o número total de participantes definido. A divulgação acontece dentro do app na tela que antecede o sorteio dos jogadores no chaveamento.  O valor máximo da premiação é divulgado previamente com base no número máximo de participantes (16 jogadores). Competições com números inferiores a 16 jogadores, terão premiações proporcionais. </span><br/>
            <strong>12. Não tenho adversário em alguma fase do campeonato. O que fazer?</strong><br/>
            <span>Você foi aleatoriamente escolhido pelo algoritmo para se classificar para a próxima fase, isso pode acontecer nas oitavas de final ou nas quartas de final quando o campeonato tem número impar de participantes nas oitavas ou quartas de final. Você será redirecionado automaticamente para a próxima fase assim que seu adversário for definido. Não feche o aplicativo e fique de olho nas notificações. </span><br/>
            <strong>13. Posso me inscrever em campeonatos com antecedência? </strong><br/>
            <span>Sim. Temos poucos campeonatos diários e apenas 16 participantes são aptos a jogar, então você pode garantir sua vaga para um campeonato no final de semana, por exemplo. Procure campeonatos para a data deseja através do calendário disponível na área de campeonatos, escolhe seu dia preferido e garanta sua vaga. </span><br/>
       
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color:'#e6007e'}} />}
          
        >
          <Typography className={classes.heading}>Informações sobre carteira digital</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.text}>
          <Typography>
            <strong>1.Como faço uma transferência pra minha conta na GoodGain e quais formas de pagamento?</strong><br/>
            <span>Você pode transferir dinheiro da sua conta bancária para sua carteira digital através de transferências bancárias, PicPay, PIX e cartão de crédito. Dentro do app você encontra as informações das contas de destino da GoodGain. A transferência entre sua conta e sua carteira digital é feita através da plataforma do seu banco escolhido. Dentro do app você apenas informar o valor e anexa o comprovante para que nós possamos adicionar o valor na sua carteira digital. Caso você queira abastecer sua carteira utilizando seu cartão de crédito, você deve fazê-lo dentro do nosso site (<span><a style={{color:'#2ea3f2', textDecoration:'none'}} href="http://www.goodgain.gg">goodgain.gg</a></span>). </span><br/>
            <strong>2. Posso carregar minha conta com cartão de crédito?</strong><br/>
            <span>Sim! Essa opção está disponível apenas através do nosso site (<span><a style={{color:'#2ea3f2', textDecoration:'none'}} href="http://www.goodgain.gg">goodgain.gg</a></span>). Acesse o site, faça o login utilizando os mesmos dados que utiliza no app e faça o abastecimento da sua carteira digital com seu cartão de crédito. Nós utilizamos a plataforma PAGSEGURO para realizar a transação, portanto, é extremamente seguro e confiável. </span><br/>
            <strong>3. Como solicitar saque do saldo da minha carteira digital? </strong><br/>
            <span>Você pode solicitar qualquer valor do seu saldo disponível 1 (uma) vez por semana. Acesse sua carteira digital no app ou através do nosso site, informe o valor que deseja resgatar e forneça seus dados bancários. Por questões de segurança, os dados bancários precisam ter, obrigatoriamente, o jogador como destinatário final da conta informada. A GoodGain processará sua solicitação dentro de um prazo de até 05 dias uteis, mas nosso time sempre se esforçará para faze-lo no menor tempo possível. </span><br/>
            <strong>4. Qual prazo para receber a transferência na minha conta? </strong><br/>
            <span>Nosso time tem como meta fazer as transferências o mais rápido possível. Nosso prazo de processamento é estimado em até 05 dias uteis. Após nosso prazo de processamento, você deve considerar os prazos bancários. </span><br/>
            <strong>5. Recebi um voucher para utilizar na GoodGain, posso sacar esse valor? </strong><br/>
            <span>Não. Os vouchers não tem valor monetário real. Os vouchers são apenas promocionais e validos como crédito para realização de partidas e não possuem valor financeiro disponível para saque. Você poderá sacar apenas os lucros que fizer a partir desse voucher promocional.  Os vouchers são incentivos para que você conheça e aproveite nossos serviços, portanto, não possuem valor monetário.  </span><br/>
            
       
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color:'#e6007e'}} />}
          
        >
          <Typography className={classes.heading}>Ranking e Premiações</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.text}>
          <Typography>
            <strong>1. Como funciona o ranking geral?</strong><br/>
            <span>Você pode checar os termos e condições do ranking geral no regulamento dentro do app. O ranking geral é mensal e a premiação é destinada apenas para o primeiro colocado do ranking de cada mês. Todos os jogadores estão aptos a participarem. O ranking geral contempla todos os consoles e jogos da plataforma. A participação é gratuita e automática para todos os usuários. </span><br/>
            <span>A pontuação do ranking é atribuída em todas as partidas realizadas dentro da plataforma. A cada vitória, o vencedor receberá 02 pontos e o jogador derrotado receberá 01 ponto no ranking geral. </span><br/>
            <span>Ao final do mês, o primeiro colocado do ranking, ou seja, o maior pontuador do mês, será o vencedor. O ranking inicia todo dia 01 de as 10h00min e se encerra as 22h00min do último dia do mês. </span><br/>
            <strong>2. Quando as premiações são divulgadas?</strong><br/>
            <span>As premiações do mês serão divulgadas todo dia 05 através das nossas redes sociais, site  (<span><a style={{color:'#2ea3f2', textDecoration:'none'}} href="http://www.goodgain.gg">goodgain.gg</a></span>) e também dentro do app na central de notificações. </span><br/>
            <strong>3. Posso trocar a premiação por dinheiro?</strong><br/>
            <span>Não. As premiações não podem ser trocadas por valor monetário. </span><br/>
          </Typography>
        </AccordionDetails>
      </Accordion>
      
      
    </div>
  );
}
