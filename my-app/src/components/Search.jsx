import Link from 'next/link';
import React from 'react';
import { FaMicrophone, FaSearch } from 'react-icons/fa';

function Search(props) {
	return (
		<div {...props}>
			<div className="flex gap-2 items-center justify-center px-4 py-3 rounded-lg bg-slate-200">
				<Link href="/busqueda" title="busqueda">
					<FaSearch size={14} />
				</Link>
				<input type="text" placeholder="Búsqueda con LLM..." className="bg-transparent grow outline-none text-xl" />
				<button title="microphone">
					<FaMicrophone size={18} />
				</button>
			</div>
		</div>
	);
}

export default Search;
