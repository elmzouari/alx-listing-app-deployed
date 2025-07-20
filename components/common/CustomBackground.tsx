import { ReactNode } from "react";

type LayoutProps = { children?: ReactNode }
const CustomBackground = (props: LayoutProps) =>
(
	<div className="min-h-screen bg-gradient-to-r from-green-200  to-amber-100 ">
		{props.children}
	</div>
)

export default CustomBackground;
