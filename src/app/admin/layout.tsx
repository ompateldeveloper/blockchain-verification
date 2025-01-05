import Navbar from "@/components/Navbar";

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Navbar />
            <div className="md:px-12">{children}</div>
        </>
    );
}
