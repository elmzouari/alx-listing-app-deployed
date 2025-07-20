//const Pill: React.FC<{ label: string; active?: boolean }> = ({
//	label, active = false
//}) => {
//	return (
//		<button className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${active ? 'bg-blue-600 text-white' : 'bg-gray-100 hover:bg-grat-200'}`} >
//			{label}
//		</button >
//	)
//};

import { PillProps } from "@/interfaces";
const Pill: React.FC<PillProps> = ({ title }) => {
	return (
		<div className="flex justify-center items-center bg[#F9F9F9] px-3 w-auto h-[27px] rounded-full">
			<p className="text-sm ">{title}</p>
		</div>
	)
}

export default Pill;
