import Image from "next/image";
import logo from "../../../../public/se-shield.png";
import Link from "next/link";

export default function Logo() {
	return (
		<Link href="/">
			<Image src={logo} alt="SE TEAM APP" width={48} height={48} />
		</Link>
	);
}
