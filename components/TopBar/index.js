import Image from "next/image";
import Button from "../Button";

const TopBar = () => {
  return (
    <div>
      <style jsx>
        {`
          .topbar {
            // padding: 18px;
            border-bottom: 1px solid var(--border);
          }
          .topbar-content-cursor-pointer {
            cursor: pointer;
          }
          .topbar-content {
            display: flex;
            align-items: center;
            max-width: 1200px;
            margin: auto;
            padding: 12px 16px;
            justify-content: space-between;
          }
          .topbar-content-right {
            display: flex;
            align-items: center;
            gap: 25px;
          }
          .topbar-content-input {
            line-height: 2.5rem;
            padding: 0rem 1.5rem;
            width: 26rem;
            background-color: var(--bg-secondary);
            color: var(--text-secondary);
            border: none;
            border-radius: 30px;
          }

          .topbar-content-input:focus {
            outline: none;
          }
        `}
      </style>
      <div className="topbar">
        <div className="topbar-content">
          <Image
            className="cursor-pointer"
            src="/icons/logo.svg"
            alt="Uprise Logo"
            height={25}
            width={77.75}
          />
          <input
            className="topbar-content-input"
            type="text"
            placeholder="Search Anything"
          />
          <div className="topbar-content-right">
            <Button
              specs={{
                text: "Invite",
                height: 2.5,
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
              className="cursor-pointer"
              src="/icons/wallet.svg"
              alt="Wallet Icon"
              height={25}
              width={25}
            />
            <Image
              className="cursor-pointer"
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
