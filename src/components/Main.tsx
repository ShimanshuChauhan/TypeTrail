function Main({ children }: { children: React.ReactNode }): JSX.Element {
    return (
        <main className="flex flex-col space-y-10 items-center justify-center bg-green-400 h-[70vh] p-5">
            {children}
        </main>
    )
}

export default Main
