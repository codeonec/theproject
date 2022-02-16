import Image from "next/image";
import Button from "../Button";

const TopBar = () => {
  return (
    <div>
      <style jsx>
        {`
          .topbar {
            padding: 18px;
            border-bottom: 1px solid var(--border);
          }
        `}
      </style>
      <div className="topbar">
        <div className="topbar-content">
          <Image
            src="/icons/logo.svg"
            alt="Uprise Logo"
            height={25}
            width={77.75}
          />
          <input type="text" placeholder="Search Anything" />
          <div className="topbar-content-right">
            {/* <Button /> */}
            <Image
              src="/icons/public/wallet.svg"
              alt="Wallet Icon"
              layout="fill"
            />
            <Image
              src="/icons/user-profile.svg"
              alt="Account Icon"
              layout="fill"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default TopBar;
