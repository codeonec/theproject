const SideBar = () => {
    return(
        <div>
            <style jsx>
                {`
                    .sidebar{
                        padding: 30px;
                        border-right: 1px solid var(--border);
                        min-height: 100%;
                    }
                `}
            </style>
            <div className="sidebar">This is sidebar</div>
        </div>
    )
}
export default SideBar