"use client";

import { usePathname } from "next/navigation";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";

export function LayoutWrapper({ children }) {
    const pathname = usePathname();
    const hiddentPaths = pathname.startsWith("/dashboard") || pathname.startsWith("/auth");
    console.log("Current Path:", pathname);
    return (
        <div>
            {
                !hiddentPaths && (
                    <>
                        <Navbar />
                    </>
                )
            }
            {children}

            {
                !hiddentPaths && (
                    <Footer />
                )
            }
        </div>
    );
}