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
          <h2 className={classes.title}>Terms of Service and Use</h2>
          <p className={classes.paragraph}>These Terms of Use and Service constitute an agreement made between you and Good Gain International company, registered in Australia ABN 39206638722, who runs an esports platform that allows users to access a players' network, tournaments, and match management. Good Gain retains your registration, data, and the processing and management of your personal information in Australia, as well as third-parties that supply services to the company, also in Australia, but not only. We also might refer to Good Gain as "we," "GG," GoodGain," and "company" or "group." We may also refer to you in these Terms, such as "user", "users", "they", "customer" or "customers".  </p>
          <p className={classes.paragraph}>These Terms apply to our mobile app's usage and all of its content, products, and services, including, but not only, all the available services at the present moment.</p>
          <p className={classes.paragraph}>Please read this documentation with care and note that by downloading our app, using, or accessing any of our products and services, you agree that you have read, understood, and consented to the terms here described. We also recommend you to read these Terms as well as our Policy Privacy available on the app or our website (<span><a style={{color:'#2ea3f2', textDecoration:'none'}} href="http://www.goodgain.gg">www.goodgain.gg</a></span>). If you do not agree with these Terms and Conditions, you should not use our mobile app or any of our services.</p>
          <p className={classes.paragraph}>This app is owned and operated by Good Gain International. By downloading the mobile application or accessing our company's products or services, i.e., browse the app or directly make use of its products and services that require financial transactions, you acknowledge and agree that you are purchasing and using a product or service of an Australian company, which is registered and operated in South Australia and governed by federal and state laws. By using any GoodGain product or service, you are under South Australia Legislation, where GoodGain processes and manages its services and data. We strongly encourage you to consult the laws referring to these services in your country of residence. Please, note that some countries might have a different understanding of the esports industry or its services. It is your entire and sole responsibility to check and obey your country's jurisdiction. GoodGain does not hold responsibility, under any circumstance, for any legal infraction that breaks the law of your country of residence. By agreeing to these Terms, you also acknowledge that our group is not under any legal, commercial, operational, technological, and financial aspect responsible for the quality of any services provided by third parties directly to yourself to make use of our services. Third-party services hired by you will be approached further on in these Terms. </p>
          <p className={classes.paragraph}>We are continually updating and improving our services and reviewing our policy, i.e., these Terms may be updated from time to time. GoodGain retains the right to revise these Terms at any time. We understand that you have agreed and consented to the altered terms by continuing to use our services. If you find unacceptable any possible changes in these Terms or our products and services, your only option is to stop utilizing or accessing our services. Finally, we declare that we do not offer, and never will, any game that relies on luck or is even slightly similar to gambling games or their characteristics. The only type of competition game offered by us depends and will always depend on players' skills and capability, but not on luck or probability. We also do not allow third-parties to access results on our platform; therefore, we guarantee there will not be any companies offering profit over our competitions' results under any circumstances.</p>
          <br/>
          <p className={classes.paragraph}>
          1. <strong>Usage Rights, user's agreement, and Good Gain's authority on accounts<br/></strong>By accepting these terms, and mostly before using GG services, the user declares, agrees, and acknowledges that:
          </p>
          <ul style={{paddingLeft:23, lineHeight:'26px'}} className={classes.paragraph}>
          <li>Any references to "services" in these Terms mean the products offered by us and named as QUICK MATCH, TOURNAMENTS/CHAMPIONSHIPS and RANKING. </li>
          <li>By downloading our mobile application, you represent and warrant you are at least 18 years of age or older, once our services are expressly prohibited for minors under 18 years old. You acknowledge the usage of this mobile application, as well as its services, for your private personal use only. Moreover, you have consulted and assured that the use of these services is not restricted or prohibited in any way by the law of your country of residence. You also agree that we are not responsible for the laws applicable to you, and acknowledge we cannot verify and analyze if our services are appropriate or usable in all countries; therefore, this is entirely your responsibility. </li>
          <li>GoodGain retains the right to require, without notice and on behalf of our best interest, evidence supporting your age or identification to assure our services are not being used by any individuals under 18, as stated in these Terms. We also retain the rights to suspend and cancel, permanently or temporarily, your account, or no longer authorize the user's access to any services, funds, and withdrawal requests if noticed any irregularity or unsatisfactory proof of age, or even if required documentation is sent after the proposed deadline. We may ask you to provide official documentation that proves information eligibility and request a photographic record, also known as "selfie," unnoticed to be submitted through the app. These requests may occur without a settled deadline or frequency and also without limit of requests. It is in our sole and absolute discretion to request them to ensure these Terms are being respected and abode. </li>
          <li>You agree that only you will be solely liable for all and any cost, damage, expenses, loss, or prejudice caused by the internet connection or any services provided by third-parties such as telecommunications, electric power, among others, and they are not related at any way with the services offered by GoodGain.</li>
          <li>You hereby acknowledge that, even if you use the services provided in our app, you do not obtain or reserve the rights over its content or any information provided there. Besides, all intellectual property cannot be used without previous notice and GG's written consent. By all means, you warrant you will not act in a way that compromises or prejudices GoodGain's image or reputation.</li>
          <li>Hereby, you understand that GoodGain is not a game developer and does not have any legal binding with any game developer; therefore, it does not hold responsibility for the game's technological issues or possible situations that may damage or prejudice your game experience. You are fully aware that GG is an online game-tournament manager, and all matches available are promoted, organized, and processed by game developers and held on their servers, and we do not have any legal binding, liability, or commercial relation with such companies. </li>
          <li>The user agrees that there are risks of losing money when using the services offered, and neither GG nor any other member of the company has any responsibility to you or your performance on skill-based games. It means they are not liable for any negative results on your games.</li>
          <li>The user acknowledges that GG is only an online amateur tournament manager, and therefore, GoodGain will not pay any interest on any amount credited to a user’s digital wallet.</li>
          <li>Your use of our services is at your sole option and any possible risks while using GG services are entitled to the user's performance on the skill-based games.</li>
          <li>You agree to be solely liable for legal matters, as well as possible fees and taxes, in your country of residence, and therefore the only responsible for paying any taxes, fees, or tributes on prizes or cash awarded to you through subscription in one of our tournaments or quick matches. You fully exempt GoodGain from paying any tribute or tax required on your earnings in the jurisdiction in which you are domiciled. You acknowledge that GG cannot provide any advice or offer help regarding taxes and fees required in your country of residence, except for Australian residents or users. That means you are solely responsible for any taxes applicable to sales or regarding the aggregate value of a purchase or award. </li>
          <li>The user acknowledges and agrees that opponents found through our platform are selected randomly by our automated algorithm. Not even GoodGain's team has the right or possibility to interfere in the bracket creation process for tournaments and championships. Accordingly, the user declares to have no right to make complaints regarding balance and match-making under any circumstances, regardless of how adverse and unfavorable they might be.</li>
          <li>The users declare that any service they hire for personal use, such as electricity and internet provision, is not part of GoodGain's remit. It means the users understand and declare that third party companies' quality of service provision is solely part of the users' responsibility. GoodGain will not refund any user for possible losses due to third-party services' flaws or impossibilities to function correctly. </li>
          <li>The user declares that all information provided in his registration for the GoodGain account is accurate and correct. </li>
          <li>The users understand and declare they are not unable or hindered by a local jurisdiction or geographical location to receive our prizes in the format of products or money as a reward for their performances in GoodGain competitions. </li>
          <li>In case any information the users have provided is confirmed as false, GoodGain reserves the right to end their accounts immediately and permanently prevent them from registering again or trying to access their accounts. Any account exclusion and banishment cannot be contested and is not open for a re-evaluation. </li>
          <li>The user declares and agrees that expenses regarding GoodGain service provision, such as tournament management, customer service, etc., are legitimate since they contribute to our platform to provide proper services back to the users.</li>
          <li>Our users understand and agree that any mistakenly deposited credit in their digital wallets or bank accounts do not belong to them, and they have no right to spend, transfer, or withdraw it. The users also commit themselves to transfer back the entire amount to GoodGain once our team has finished contacting them. Not transferring it back will be considered a breach of these terms, and the users who refuse to follow the agreement can be banned from our platform and notified by law on their jurisdiction.</li>
          </ul>
          <br/>
          <p className={classes.paragraph}>
          2. <strong>No warranties.</strong>
          </p>
          <ul style={{paddingLeft:23, lineHeight:'26px'}} className={classes.paragraph}>
          <li>GoodGain disclaims any warranties in connection with financial profitability or user performances once using our services. Our team is in charge of providing tournaments and other competition formats, but users' performances, regardless of their results, relies exclusively and solely on them.</li>
          <li>GoodGain makes no warranty that games will run appropriately during its competitions and disclaims all responsibility for any technical complication. The responsibility lies entirely on game developers and users who play their games and have agreed to their terms and policies. That means any losses occasioned by connection loss or game defects can't be associated with GoodGain since they are out of our range. Consequently, our team disclaims any warranties regarding the internet or game running defects or failures.</li>
          <li>GoodGain disclaims all responsibility for users that utter or behave offensively, threateningly, defamatorily, racistly, homophobically, or present any other prejudicial or discriminatory behavior towards other users within our platform. On the other hand, we encourage and solicit our users to report such attitudes to the local authorities of their place of residence. </li>
          <li>GoodGain is committed to improving its services continuously. Still, we make no warranties that our services work properly full-time or contain no defects, errors, viruses, etc.</li>
          <li>GoodGain disclaims responsibility regarding its competitors when they use the platform. We reserve the right not to make any warranties towards players' conduct. </li>
          <li>GoodGain reserves the right to add new features or change some aspects of the platform or its services without notice, by its criteria and time limit.</li>
          <li>Nothing in this agreement associates or establishes a partnership, trust arrangement, fiduciary relationship, or joint venture between a user and GoodGain.</li>
          </ul>
          <br/>
          <p className={classes.paragraph}>
          3. <strong>Account Activity Policies</strong>
          </p>
          <ul style={{paddingLeft:23, lineHeight:'26px'}} className={classes.paragraph}>
          <li>Deposits: The user can make any transactions to its digital wallet in the GoodGain platform app, without limitations of credit value.  </li>
          <li>The users can access the payment and deposit methods to add credit to their digital wallets within the app or on our website. Payment methods are dependent on their country of residence. </li>
          <li>Each transaction must be done in the secure environment provided by the financial institution in which the user runs a bank account. It means GoodGain has no responsibility for technical problems that may occur in transactions through the bank platform. This rule applies to every transfer you perform on our platform.</li>
          <li>The users can make transfers directly through their bank accounts or through dealers authorized by us to receive remittances from abroad. GoodGain reserves the right not to accept transfers from countries of which jurisdiction forbids our services. </li>
          <li>The users agree it is their responsibility to confirm the destination account and correct typing when moving credit. After transferring successfully, a user should verify his digital wallet on the app or website and follow the instructions to report the transferred amount with the transfer invoice attached to our team. In the invoice, the sender and recipient must be clearly visible, as well as the transfer amount. When GoodGain receives a report, we process the information, and if all data is correct, the credit will be available in the user's digital wallet.</li>
          <li>The only way to use your credit card as a payment method is through GoodGain's website (<span><a style={{color:'#2ea3f2', textDecoration:'none'}} href="http://www.goodgain.gg">goodgain.gg</a></span>) from the customer's exclusive area, which can be accessed by the app login and password. The user must fill in the payment amount and perform the check-out while on the website. The credit card operator is in charge of the transfer process, and once authorized, GoodGain will add the credit value to the user's digital wallet. The user acknowledges and accepts the credit card operation may not be automated and that GoodGain is just the credit value recipient. It means GoodGain relies on time limits proposed by credit card operators. </li>
          <li><strong>Withdrawals</strong> – Withdrawal request: The user is the only one who owns the credit value, deposited or acquired, in the digital wallet of his GoodGain account. The users can request transfers to their bank account once they are opened in their country of residence as long as they own a positive balance available to be requested.</li>
          <li>The users agree that any amount of credit available in their digital wallet can only be transferred to a bank account under their legal name and property, and no other means. GoodGain reserves the right only to accept withdrawal and transfer requests from those who have their bank accounts corresponded to their registration data in their GoodGain accounts.</li>
          <li>The users agree they can only request transferals or withdrawals from their digital wallets once a week, based on the assumption that the week starts on Monday at 00:00 AM and finishes on Sunday at 11:59 PM. GoodGain will generally process the request within five business days. Due to some time limit required by payment processor companies and bank institutions, some days can be added to the process.</li>
          <li>There isn't a limit value for credit activity as long as the amount informed is available in the user's digital wallet. There is the exception of gift vouchers, which only allow you to add credit to your digital wallet, respecting its value. Gift values offered by vouchers may be increased in certain events as an "incentive voucher", and these changes will be informed. Vouchers are incentives for users to benefit from adding credit to their wallets with discounts, which means no voucher value can be withdrawn before the user deposits the same or upper value of the voucher utilized.</li>
          <li>GoodGain reserves the right to temporarily or permanently suspend any users' account access in case of violation of any terms of service, use, or policies proposed and described in our terms. Proven fraud or disrespectful actions towards games' rules and regulations are reasons for your account to be suspended temporarily or permanently. In case an account is suspended, no user has the means to access the credit in it, which means permanently suspended users won't be able to withdraw the credit value in their digital wallets.</li>
          <li>Any payment must be accomplished with the currency of the user's country of residence.</li>
          </ul>
          <br/>
          <p className={classes.paragraph}>
          4. <strong>Services – General Definitions and Values</strong>
          </p>
          <ul style={{paddingLeft:23, lineHeight:'26px'}} className={classes.paragraph}>
          <li>GoodGain organizes tournaments and quick matches and works to gather users willing to play the same game under the same rules and award conditions. These terms are specified in a safe environment protected by technologies and reliable standards provided by the GoodGain app. GoodGain is in charge of demanding compliance from its users towards its rules, finding players who have agreed to the terms, and guaranteeing the competitions to happen transparently and securely. Based on these services (organizing matches and tournaments, managing a technological platform proper to competitions, finding players to compete, and much more.), GoodGain calculates and establishes fees that pay for their efforts towards the gamer community.</li>
          <li><strong>Quick Matches</strong>
          <ul style={{paddingLeft:23}}>
          <li>Quick matches are performed between two players or teams. Only one game is its proposition, requiring no other stage or match to proclaim the winner unless there are events that require more than one game. The games happen quickly, and the winner is confirmed once the game is over. Then, the game developer company will make the official announcement. The users select the game they'll play, the value for a room (the amount of credit they want to receive in case of victory) and submit to GoodGain, so we can try to find a user playing by the same conditions. With our algorithm, we search for a random user who complies with the requirements, promote the match, and give both players the support to create a quick match. We also guarantee the rules are being followed by both players, interfere in personal confrontation, estimate the final result, and generate the credit activity with the amount established to the winner's wallet. The games are played by the users' consoles and within the game developers' servers. That means GoodGain has no means to interfere with the game results.</li>
          <li>A percentage fee is charged every quick match to pay for GoodGain services. The price for quick matches costs 20% of each user's amount to participate in the competition and utilize GoodGain services. GG reserves the right to modify its criterion and match duration, as well as the cost of service fees. Any changes will be updated in this agreement.</li>
          </ul>
          </li>
          <li><strong>Online Tournaments</strong>
          <ul style={{paddingLeft:23}}>
          <li>Online tournaments, described simply as "tournaments", usually occur in a single-elimination format and involve from 2 to 16 teams or participants. The tournaments may start from the round of 16, quarter-finals, semi-finals, or even finals if the number of players/teams is lesser than the maximum limit. The bracket is created randomly and automatically which means GoodGain has no power to interfere in the competition.</li>
          <li>GoodGain is paid for its organization and management services by a percentage tax that costs 31,25% of the enrollment fee. This value is estimated based on the cost to enroll in a tournament and benefit from the management services. GoodGain reserves the right to change its criterion and duration and alter the tax value without notice. Any change will be described in this agreement.</li>
          <li>Subscribing yourself or your team in a tournament implies that you and your teammates agree to the tournament rules published on the tournament overview page, with no exceptions. It's your responsibility to read, interpret, and contact the user's support if needed further information</li>
          <li>You and your possible teammates accept that GoodGain reserves the right to change and modify any rules of a tournament at any time before its official start without notice. You also agree it's your own responsibility to check for the rules and regulations updated before each tournament you take part in starts.</li>
          <li>There can be tournaments that long a whole day.</li>
          <li>The user is aware that GoodGain will revise all matches contested and nullify any game if there is any proven violation of these terms or the tournament rules. It relies entirely on GoodGain and its collaborators to invalidate a competition or a match, communicate the participants, and arbitrate the prize. The user declares to recognize Good Gain's authority over the prize issue and accepts a possible refusal to deliver the rewards, as well as the inscription fee, in case of violation of terms.</li>
          </ul>
          </li>
          <li><strong>Ranking and Awards</strong>
          <ul style={{paddingLeft:23}}>
          <li>The ranking feature we provide isn't charged, which means the users do not need to pay in order to participate or use the service. This system is another competition resource we provide to our users, who receive awards if they are on the top of the ranking by the end of the monthly ranking cycle. The awards are not mandatory and permanent, which means GoodGain reserves the right to make changes, discontinue or even cancel the award for a particular month or period. Besides, GoodGain reserves the right not to take responsibility for the quality or delays related to the shipping and delivery process of products we send as a form of awards. It is neither GoodGain's responsibility to provide any support between the award-winning user and the provider company. An invoice will be sent in the user's name so they can deal with any problems in the process on their own.</li>
          </ul>
          </li>
          </ul>
          <br/>
          <p className={classes.paragraph}>
          5. <strong>Unacceptable Behavior</strong>
          </p>
          <ul style={{paddingLeft:23, lineHeight:'26px'}} className={classes.paragraph}>
          <li><strong>Personal Use:  </strong>GoodGain's services are only provided to those who create their accounts, which means the users accept to benefit from it as for personal use, and not share it with anyone else. GoodGain owns mechanisms to identify attempts to break the rules and infringe the system standards.</li>
          <li><strong>Collusion:  </strong>it is strictly forbidden to act in collusions, especially between users. An attempt to get advantages in exchange for favors is considered illicit behavior against acceptable competitive practices. Any attempt to manipulate results, simulate performance, and any other possible forged situation to benefit a single user or team and fraud an official result will be considered a violation of these terms. It means GoodGain can banish any user involved in this kind of scheme. To avoid such a situation, we encourage and solicit users to denounce and report when they notice such a thing.</li>
          <li><strong>Fraud: </strong>GoodGain declares in these terms that the company does not tolerate any fraudulent act, cheat (or attempt to), dishonesty, or improper conduct towards our systems and services. We will take action and deposit efforts to punish any user involved with illicit acts or schemes through our fraud department. Not only strict to a competitive environment, but we will take action in other areas too. Any attempt to use stolen credit cards, laundered money, or even utilize your GoodGain account not to compete in compliance with our systems will be rigorously penalized within our platform, and most probably out of it as well. We may report any illegal activity to authorities, cooperate with investigations, and provide all support to litigations towards any user.</li>
          </ul>
          <br/>
          <p className={classes.paragraph}>
          6. <strong>Breach</strong>
          </p>
          <ul style={{paddingLeft:23, lineHeight:'26px'}} className={classes.paragraph}>
          <li>Any action from the user that lacks compliance with any part of these terms is considered a breach of our agreement. The user agrees to indemnify, defend, and exempt GoodGain and their shareholders, directors, and employees from claims, liability, losses, damages, and expenses, including the costs of advocate hours and any other charges that might arise from the following situations:</li>
          </ul>
          <p className={classes.paragraph}>– A breach from the user regarding these terms of use and services.</p>
          <p className={classes.paragraph}>– Violation from the user regarding laws or third-party rights.</p>
          <p className={classes.paragraph}>– Violation from the user regarding the local jurisdiction of the user's country of residence.</p>
          <br/>
          <p className={classes.paragraph}>
          7. <strong>Account Management and Security</strong>
          </p>
          <ul style={{paddingLeft:23, lineHeight:'26px'}} className={classes.paragraph}>
          <li>To benefit from our services, any user can only own a single account, which means it's strictly forbidden to create new accounts. In case the user violates this part of the agreement, and GoodGain's team becomes aware of the breach, the user's account can be instantly deleted, and the user will have no access to any credit kept in the digital wallet.</li>
          <li>The user is the only person in charge of creating his password and managing his account securely. To comply with good practices, the user should maintain it <strong>safe and confidential.</strong></li>
          <li>It is the users' responsibility to keep their login and password safe and confidential. There cannot be a single third-party logging into your account without our team's permission. Any third-party login will be considered an unauthorized login for personal use and benefit, which means the user breaches this agreement by allowing a third-party to use his account. </li>
          <li>It is the users' responsibility to meet the payment deadlines defined in the payment terms. The users are in charge of contacting our customer service if they are unsure about the payment deadlines or any other payment term.</li>
          <li>GoodGain reserves the right to utilize electronic payment processors or third-party financial institutions to process any payment from you or to you.</li>
          <li>Inactive accounts: If an account keeps being not used after 12 months, GoodGain reserves the right to contact the user who owns it to credit any value available back to his account. </li>
          <li>If an account is inactive, GoodGain reserves the right to end it at any time without notice. Any balance available will be credited back to the owner's registered bank account in our database.</li>
          <li>A user can require his account to be closed by accessing GoodGain customer support at any time. GoodGain will end the account and delete all data related to the user from the database.</li>
          </ul>
          <p className={classes.paragraph}>
          8. <strong>Governing Law</strong>
          </p>
          <p className={classes.paragraph}>The laws of South Australia shall govern these terms and agreements. The users irrevocably agree that South Australian courts shall judge any claim, dispute, or divergence regarding these terms of use and service, and the users abdicate any right to object to an action being brought to an Australian court. Nothing in this clause limits the rights of GoodGain to take proceedings against you in any other court or jurisdiction. This choice to bring actions to a different court or jurisdiction impairs in nothing the rights that will be granted to you, neither denies your liabilities under the laws of South Australia.</p>
          <ul style={{paddingLeft:23, lineHeight:'26px'}} className={classes.paragraph}>
          <li>This version will be considered the official if any divergence or misinterpretation regarding the translated versions of this agreement.</li>
          </ul>
          <br/>
          <p className={classes.paragraph}>
          9. <strong>Contact Us</strong>
          </p>
          <p className={classes.paragraph}>For the avoidance of any doubts, please, contact us by the following email address: <span><a style={{color:'#2ea3f2', textDecoration:'none'}} href="mailto:legal@goodgain.gg">legal@goodgain.gg</a></span><strong><br/> With gratitude to all users that accomplished to read this agreement.  </strong></p>
          <p className={classes.paragraph}>Latest updated on November 7th, 2020.</p>
        </div>
      </div>
    </div>
  );
}



export default withStyles(styles)(Terms);
