function Main({ children }: { children: React.ReactNode }): JSX.Element {
    return (
        <main className="flex flex-col space-y-10 items-center justify-center h-[70vh] p-5">
            {children}
        </main>
    )
}

export default Main
