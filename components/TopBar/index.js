import Image from "next/image";
import Button from "../Button";
import styles from "../../styles/TopBar.module.css"

const TopBar = () => {
  return (
    <div>
      <div className={styles.topbar}>
        <div className={styles.topbarContent}>
          <Image
            className={styles.cursorPointer}
            src="/Icons/logo.svg"
            alt="Uprise Logo"
            height={25}
            width={77.75}
          />
          <input
            className={styles.topbarContentInput}
            type="text"
            placeholder="Search Anything"
          />
          <div className={styles.topbarContentRight}>
            <Button
              specs={{
                text: "Invite",
                height: 2.5,
                icon: (
                  <Image
                    src="/Icons/Invite.svg"
                    alt="invite icon"
                    height={15}
                    width={15}
                  />
                ),
              }}
            />
            <Image
              className={styles.cursorPointer}
              src="/Icons/wallet.svg"
              alt="Wallet Icon"
              height={25}
              width={25}
            />
            <Image
              className={styles.cursorPointer}
              src="/Icons/user-profile.svg"
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
