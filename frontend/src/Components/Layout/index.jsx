const Layout = ({ children, title }) => {
	return (
		<div className='flex flex-col items-center mt-20'>
			<h1 className="text-5xl font-extrabold mb-8">
				{title}
			</h1>
			{children}
		</div>
	)
}

export default Layout