import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

type PlaceHolderProps = { placeholder: string }
const Search = (
	{ placeholder }: PlaceHolderProps) => {
	const handleSearch = (term: string) => {
		console.log(term)
	}
	return (
		<div>
			<label htmlFor="search" className="sr-only">
				Search
			</label>
			<input
				className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
				type="text"
				onChange={(e) => { handleSearch(e.target.value) }}
				placeholder={placeholder}
			/>
			<MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
		</div>
	);
};

export default Search;
