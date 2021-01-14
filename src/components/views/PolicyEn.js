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
          <h2 className={classes.title}>Privacy Policy</h2>
          <p className={classes.paragraph}><strong>Privacy Statement</strong></p>
          <p className={classes.paragraph}>Good Gain is governed by the Australian Privacy Principles (APPs) under the Privacy Act 1988 (Cth). These terms provide you with an explanation of what practices Good Gain International, a company registered in Australia, follow. This group operates an esports platform that enables users to access a competitive player network and manages tournaments as well as quick matches. These terms cover the privacy practices and policies current on our website (<span><a style={{textDecoration:'none', color:'#e6007e'}} href="http://www.goodgain.gg">www.goodgain.gg</a></span>), and in our mobile application, which is available to download on the Apple Store or Google Play. </p>
          <p className={classes.paragraph}>In these terms, we inform what personal data we will or may collect from our users, how we will use this data, who can access it, and how these data will be shared. We also explain the security procedures we utilize to protect your data and how you can help improve, correct, and update information. GoodGain will often revise these policies and may update it from time to time. We encourage users to check our website or our app frequently for possible changes. </p>
          <p className={classes.paragraph}><strong>Data we collect, use, and share </strong></p>
          <p className={classes.paragraph}>GoodGain is the exclusive user of the data collected by our app and website. Consequently, GoodGain is entirely liable for committing to the Australian Law regarding the data security issue. We only collect data provided by you voluntarily through direct interactions by emails or contact forms throughout our website. In case you are an active customer, i.e., someone who owns an account and uses our services or access the area restricted to clients named "client zone" or our app, we may collect extra data from you depending on what services and actions you are performing or demanding. GoodGain commits not to sell any data collected on our media and channels. We collected necessary data to provide services and commit to the terms and agreements you are part of. </p>
          <p className={classes.paragraph}>Personal data we may collect, require, or process can be described as, but not solely: </p>
          <p className={classes.paragraph}> <strong>a.</strong> Account Information: username, password, profile picture;<br/> <strong>b.</strong> Contact Information: email, phone number;<br/> <strong>c.</strong> Location Information: address, timezone;<br/> <strong>d.</strong> Identification Information: full name, identity documentation;<br/> <strong>e.</strong> Financial Information: credit card details, bank account, online payment platforms receipts;<br/> <strong>f.</strong> General Data Content: message content sent by contact forms, attachments;<br/> <strong>g. </strong>Screenshots of match result screens.</p>
          <p className={classes.paragraph}><strong>Usage Data:</strong> </p>
          <p className={classes.paragraph}>Usage data we collect, require, or process can be described as, but not solely: </p>
          <p className={classes.paragraph}> 
          <strong>a.</strong> Usage data: IP address, computer, connectivity information, cookies, language settings, localization, timezone. 
          <br/>
          <strong>b.</strong> Device information: console, computer or cellphone type, hardware capabilities, or operational system.
          <br/> 
          <strong>c.</strong> Actions: pages viewed, buttons clicked, time spent viewing, search keywords, etc.
          </p>
          <p className={classes.paragraph}>We can also contact you by email, phone calls, or text messages to inform you about vouchers and discounts, new products and services, or changes in this policy description unless you request us not to.</p>
          <p className={classes.paragraph}><strong>Control data we hold</strong></p>
          <p className={classes.paragraph}>It is one of our users' prerogative to question, alter, update, or cancel any relation with us. For that, they need to contact us by email (<span><a style={{textDecoration:'none', color:'#e6007e'}}  href="mailto:privacy@goodgain.gg">privacy@goodgain.gg</a></span>) and question what data we hold about them, inform us about any changes or corrections regarding outdated or incorrect data, or even request for complete data deletion (this last option requires the users to stop using our services).</p>
          <p className={classes.paragraph}><strong>Data Security</strong></p>
          <p className={classes.paragraph}>We pride ourselves to commit to maintaining the confidentiality and security of your data. We endeavor to follow generally accepted standards to protect the Personal Data submitted to us both during transmission and storage. These data are encrypted and authenticated in rigorous levels of security. We restrict our collaborators from accessing these data, which means only people who contact you directly to provide support are able to access your data in our database. Additionally, even when providing support to users, collaborators in charge of providing customer service are monitored and documented while assisting.</p>
          <p className={classes.paragraph}><strong>Data Usage</strong></p>
          <p className={classes.paragraph}>We may collect your information, including Personal Data, through the use of cookies, forms, and other manners, as described previously in these terms. These data may be collected automatedly when you use our website or app or voluntarily when you fill a form. All technology, such as cookies, we utilize in our website (from our own control or third-party services offered throughout our website and app) aims to solely identify features that our services need to adapt to in order to provide satisfactory services as it is expected from our users. In case you request we do not collect data automatedly from you, the website might work inappropriately, or our services may become inaccurate in agreement with your expectations. The users are solely responsible for data shared with third-parties and with us, even when data is collected automatedly. Besides collecting data to provide appropriate services to the users, GoodGain also collects data to produce sales analysis. GoodGain intentions towards data usage can be described as, yet not solely:</p>
          <p className={classes.paragraph}> 
          <strong>a. </strong>Enables GoodGain to provide and operate good service to the users;
          <br/>
          <strong>b. </strong>Inform the users about services, discounts, events, terms update, and anything else we judge useful or pertinent for our users;
          <br/>
          <strong>c.</strong> Security Control: with our data, we are able to recognize if a user is not allowed to use our services due to a previous ban in our platform and so prevent him from using our website again, identify if a user has committed any illicit activity in our website or app;
          <br/> 
          <strong>d.</strong> Offer, sell, or produce products and services to our users;
          <br/>
          <strong>e.</strong> Comply with liability or regulations regarding our legal agreement and terms of use.
          </p>
          <p className={classes.paragraph}>We intend to facilitate your ways to participate in fair competitions and create a space where you can benefit from esports opportunities through our website and app.</p>
          <p className={classes.paragraph}><strong>Retention time and data storage method</strong></p>
          <p className={classes.paragraph}>GoodGain retains the data collected from its website and mobile application for as long as users maintain an open and active account, i.e., users that utilize any product or service offered by GoodGain and continue to access their login with a reasonable frequency. "Inactive accounts" refer to accounts in which a user did not play any match or did not use any service for 12 months or longer. Thus, after this period, GoodGain reserves the right to delete all data retained regarding those users automatically. For those who aren't GoodGain clients yet, i.e., someone who doesn't own an account in GoodGain, we only collect data sent directly to us. We keep these data stored for as long as necessary to clarify possible questions and doubts related to our services or products that have led the user to contact us, excluding all data collected through Cookies. Personal information will only be retained for as long as necessary to fulfill the purposes set out in these Policies, including other financial, legal, statutory purposes, etc.</p>
          <p className={classes.paragraph}>GoodGain, as a data controller, retains and processes data according to appropriate security measures to prevent unauthorized access, disclosure, or use of the collected data. Its content can only be used by professionals who provide services in our company departments. The departments that can access data are: fraud, information technology, sales, marketing, legal, finances, and technical support departments. GoodGain service providers who may have access to our database are: transport service (to deliver prizes), mail carriers, hosting providers, sales and marketing intelligence agencies, and technical service providers. The users can always request a list with all third-parties' providers who may access their data.</p>
          <p className={classes.paragraph}>We store and process all data in Australia, but not limited to this country. Some service providers may not be located in Australia, and, by using our services, you agree that your data may be processed outside of Australia as well, under our responsibility. A user can always request a data update location by email (<span><a style={{textDecoration:'none', color:'#e6007e'}} href="mailto:privacy@goodgain.gg">privacy@goodgain.gg</a></span>).</p>
          <p className={classes.paragraph}><strong>Data Process</strong></p>
          <p className={classes.paragraph}>Good Gain, as a data controller, uses the information to analyze web traffic as well as monitor and keep track of user behavior. This way, our company can improve its products, as well as its service functionality and performance, on the user's behalf.</p>
          <p className={classes.paragraph}>The services used to monitor and analyze Cookies and data are: Google Analytics and Google Tag Manager, which has database storage in the USA. The user can also access Google Inc. privacy policies on their official website. </p>
          <p className={classes.paragraph}><strong>Legal bases for data processing: </strong>We only collect and use personal data in case we have one or more legitimate purpose for doing it.  </p>
          <p className={classes.paragraph}><strong>Legal references and Terms</strong></p>
          <p className={classes.paragraph}><strong>Cookies:</strong> Cookies are files with a small piece of data and stored in your device. In these files, there are many types of information that can be stored, including visited webpages as well as data and preferences offered voluntarily to the website.</p>
          <p className={classes.paragraph}><strong>User:</strong> An individual who browses or uses our services, content, or any information available on our website or mobile application. </p>
          <p className={classes.paragraph}><strong>Active client:</strong> An individual who owns a GoodGain open account and benefit from one or more products or services from our company. </p>
          <p className={classes.paragraph}><strong>Website/Site:</strong> Referring to the website operated by Good Gain, <span><a style={{textDecoration:'none', color:'#e6007e'}}  href="http://www.goodgain.gg">www.goodgain.gg</a></span></p>
          <p className={classes.paragraph}><strong>Data controller:</strong> The owner of this website and its products, mobile applications, and services offered. It is also responsible for collecting, storing, and managing personal data.</p>
          <p className={classes.paragraph}><strong>Client Zone:</strong> Our website feature, which was developed to provide access to digital account information to any active client. Having access to this feature requires an open account with a <em>login</em> and password.</p>
          <p className={classes.paragraph}><strong>Google Analytics and Tag Manager:</strong> Technological products provided and processed by Google to analyze and control cookies and data usage. </p>
          <p className={classes.paragraph}><strong>Personal Information:</strong> Any piece of information that may identify a person. </p>
          <p className={classes.paragraph}><strong>Confidential Data:</strong> Private data, such as identification numbers and bank account information. </p>
          <p className={classes.paragraph}><strong>Usage Data:</strong> Piece of information collected automatically referring to the user's access or use of this website or application, which may include: IP address, time and date of visit, URLs used, browser platforms and versions, device's operations, country of origin, frequency and preferences. </p>
          <p className={classes.paragraph}><strong>Legal bases for data processing:</strong> We only collect and use personal data if we have one or more legitimate purposes. These purposes may change depending on where our users are located. </p>
          <p className={classes.paragraph}>Our services are not taken for minors under the age of 18. Only users who can prove to be 18 years or older can be authorized to subscribe to our website or application.</p>
          <p className={classes.paragraph}><strong>Contact Us</strong></p>
          <p className={classes.paragraph}>If you have any questions or complaints about the way we handle or process data, or if you believe we are not following these terms, and you seek to exercise your privacy rights concerning the data we hold about you, you may contact our Privacy Officer responsible for data security by the following email: <span><a style={{textDecoration:'none', color:'#e6007e'}} href="mailto:privacy@goodgain.gg">privacy@goodgain.gg</a></span></p>
          <p className={classes.paragraph}>If we fail to solve your privacy complaint satisfactorily, you may present a formal complaint to OAIC (Office of the Australian Information Commissioner) by the number 1300 363 991 or online by their website <span><a style={{textDecoration:'none', color:'#e6007e'}} href="http://www.oaic.gov.au">www.oaic.gov.au</a></span>.</p>
          <p className={classes.paragraph}>GoodGain is thankful for the time you took to read this Privacy policy. <br/> Last updated November 2nd, 2020 </p>
        </div>
      </div>
    </div>
  );
}



export default withStyles(styles)(Terms);
