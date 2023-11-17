import { Header } from '@/components/layout/layoutAdmin/Header/Header'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.scss'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Блог',
	description: 'Блог',
	icons: '/logo.svg'
}

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="ru">
			<body className={inter.className}>
				<Header />
				<main>{children}</main>
			</body>
		</html>
	)
}
