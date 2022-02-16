import Link from "next/link"
import { useRouter } from "next/router";

const SideBar = () => {
    const router = useRouter()
    console.log(router.pathname)
    return(
        <div className="sidebar">
            <style jsx>
                {`
                    .sidebar{
                        padding: 18px 0;
                        border-right: 1px solid var(--border);
                        min-height: 100%;
                        width: 240px;
                    }
                    .links{
                        display: flex;
                        flex-direction: column;
                    }
                    .links .link{
                        padding: 12px 16px;
                        transition: 0.35s;
                        font-size: 15px;
                        color: var(--text-secondary);
                    }
                    .links .link:hover{
                        background: rgba(255,255,255, 0.1);
                    }
                    .links .link.active{
                        background: rgba(255,255,255, 0.1);
                        border-right: 4px solid var(--green-text);
                    }
                `}
            </style>
            <div className="links">
                <Link href="/"><a className={router.pathname == "/" ? "active link" : "link"}>Home</a></Link>
                <Link href="/explore"><a className={router.pathname == "/sign_in" ? "active link" : "link"}>Explore</a></Link>
                <Link href="/trending"><a className={router.pathname == "/trending" ? "active link" : "link"}>Trending</a></Link>
                <Link href="/about"><a className={router.pathname == "/about" ? "active link" : "link"}>About</a></Link>
            </div>
        </div>
    )
}
export default SideBar