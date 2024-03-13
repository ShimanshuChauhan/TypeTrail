function Footer({ children }: { children: React.ReactNode }): JSX.Element {
    return (
        <footer className="flex items-center bg-red-500 p-5">{children}</footer>
    )
}
export default Footer
