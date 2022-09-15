import { UilFacebook, UilGithub, UilInstagram } from '@iconscout/react-unicons';
import css from '../styles/Footer.module.css';
import Logo from '../assets/Logo.png';
import Image from 'next/image';

export default function Footer() {
  return (
    <div className={css.container}>
      <span>ALL RIGHT RESERVED</span>
      <div clasName={css.social}>
        <UilFacebook size={45} />
        <UilGithub size={45} />
        <UilInstagram size={45} />
      </div>

      <div className={css.logo}>
        <Image src={Logo} alt="" width={50} height={50} />
        <span>Fudo</span>
      </div>
    </div>
  );
}
