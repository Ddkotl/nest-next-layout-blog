import Image from 'next/image'

export function Logo() {
	return <Image src="/logo.svg" priority alt="" width={40} height={40} />
}
