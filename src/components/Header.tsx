function Header({ children }: { children: React.ReactNode }): JSX.Element {
    return (
        <header className=" p-5 flex items-center space-x-8 h-[10vh] w-[80vw]">
            <img src="/img/logo.png" alt="logo" width={120} height={30} />
            {children}
        </header>
    )
}

export default Header
