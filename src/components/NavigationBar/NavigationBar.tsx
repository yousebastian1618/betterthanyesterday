import Logo from "../../../public/BetterThanYesterdayLogo.png";
import './style.scss';
import Image from "next/image";

export default function NavigationBar() {
  return (
    <div className={'navigation-bar-container'}>
      <div className={'navigation-bar-logo-container'}>
        <Image
          src={Logo}
          alt={"Better Than Yesterday logo"}
          width={100}
          height={100}
          className="navigation-bar-logo-img"
        />
      </div>
    </div>
  )
}
