import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import Header from "@/components/Header";
import { Toaster } from "@/components/ui/sonner";
import ButtonUp from "@/components/ButtonUp";

const fontSans = FontSans({
	subsets: ["latin"],
	variable: "--font-sans",
});

export const metadata: Metadata = {
	title: "Donet Clinica",
	description: "Donet Clinica",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang='en'
			className='scroll-smooth overflow-x-hidden'
			suppressHydrationWarning
		>
			<link
				rel='apple-touch-icon'
				sizes='180x180'
				href='/favicon/apple-touch-icon.png'
			/>
			<link
				rel='icon'
				type='image/png'
				sizes='32x32'
				href='/favicon/favicon-32x32.png'
			/>
			<link
				rel='icon'
				type='image/png'
				sizes='16x16'
				href='/favicon/favicon-16x16.png'
			/>
			<link rel='manifest' href='/favicon/site.webmanifest'></link>
			<body
				className={cn(
					"min-h-screen bg-background font-sans antialiased",
					fontSans.variable
				)}
			>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange
				>
					<Header />
					<ButtonUp />
					{children}
					<Toaster />
				</ThemeProvider>
			</body>
		</html>
	);
}
