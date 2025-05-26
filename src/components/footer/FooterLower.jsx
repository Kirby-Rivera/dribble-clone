import FooterLinks from './FooterLinks'
import Lists from "./List";

const FooterLower = () => {
    const date = new Date().getFullYear();

  return (
    <div className="footer-lower">
        <Lists>
            <FooterLinks title={`© ${date} Dribbble`}/>
            <FooterLinks title={'Terms'}/>
            <FooterLinks title={'Privacy'}/>
            <FooterLinks title={'Cookies'}/>
        </Lists>
        <Lists>
            <FooterLinks title={`Jobs`}/>
            <FooterLinks title={'Designers'}/>
            <FooterLinks title={'Freelancers'}/>
            <FooterLinks title={'Tags'}/>
            <FooterLinks title={'Places'}/>
            <FooterLinks title={'Resources'}/>
        </Lists>
    </div>
  )
}

export default FooterLower