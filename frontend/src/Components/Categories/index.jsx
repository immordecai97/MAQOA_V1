

export const CategoriesUl = ({ categories }) => {
	return (
		<ul className="py-2 opacity-80 text-[12px] flex">
			{
				categories?.map((cat) => (
					<CategoriesLi key={cat._id} name={cat.name} />
				))
			}
		</ul>
	)
}

const CategoriesLi = ({ name }) => {
	return (
		<li className="bg-gray-400 rounded py-1 px-2 text-gray-300 text-xs">
			{name}
		</li>
	)
}