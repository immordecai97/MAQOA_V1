
const ModalCart = () => {

	const closeModal = () => {
		setShowModal(!showModal);
	};

	return showModal ? (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
			<div className="bg-white p-6 rounded-lg">
				<h2 className="text-xl font-semibold mb-4">Carrito de Compras</h2>
				<ul>
					{productsList.map((product) => (
						<li key={product._id} className="flex justify-between mb-2">
							<span>{product.name}</span>
							<span>Cantidad: {product.quantity}</span>
							<span>Subtotal: ${product.subtotal}</span>
						</li>
					))}
				</ul>
				<p className="mt-4">
					Total de Productos: {quantity}, Subtotal: ${subtotal}
				</p>
				<button onClick={closeModal} className="mt-4 bg-gray-200 hover:bg-gray-300 py-2 px-4 rounded-lg">
					Cerrar
				</button>
			</div>
		</div>
	) : null;
};

export default ModalCart;
