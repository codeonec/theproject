import Image from "next/image"
import Button from "../Button"

const TopBar = () => {
    return(
        <div>
            <style jsx>
                {`
                    .topbar{
                        padding: 18px;
                        border-bottom: 1px solid var(--border);
                    }
                `}
            </style>
            <div className="topbar">
                <div className="topbar-content">
                    <Image src={} alt="Uprise Logo"/>
                    <input type="text" placeholder="Search Anything" />
                    <div className="topbar-content-right">
                        <Button/>
                        <Image src={} alt="Wallet Icon"/>
                        <Image src={} alt="Account Icon"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TopBar