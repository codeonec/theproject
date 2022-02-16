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
            <Button
              specs={{
                text: "Invite",
                icon: (
                  <Image
                    src="/icons/invite.svg"
                    alt="invite icon"
                    height={15}
                    width={15}
                  />
                ),
              }}
            />
            <Image
              src="/icons/wallet.svg"
              alt="Wallet Icon"
              height={25}
              width={25}
            />
            <Image
              src="/icons/user-profile.svg"
              alt="Account Icon"
              width={25}
              height={25}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default TopBar;
