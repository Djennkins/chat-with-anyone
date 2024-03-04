import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/ThemeProvider";
import ClientProviders from "@/components/ClientProviders";
import FirebaseAuthProvider from "@/components/FirebaseAuthProvider";
import SubscriptionProvider from "@/components/SubscriptionProvider";

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<ClientProviders>
				<body className={" flex flex-col min-h-screen"}>
					<FirebaseAuthProvider>
						<SubscriptionProvider>
							<ThemeProvider
								attribute="class"
								defaultTheme="system"
								enableSystem
								disableTransitionOnChange
							>
								<Header />
								{children}
							</ThemeProvider>
						</SubscriptionProvider>
					</FirebaseAuthProvider>
				</body>
			</ClientProviders>
		</html>
	);
}
