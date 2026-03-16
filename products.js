// Product data
const productsData = {
	1: {
		title: "Phong bì (Mang dấu ấn riêng)",
		description:
			"Giải pháp phong bì thân thiện cho môi trường, độc đáo cho ngành thiết kế in ấn, mùi hương dễ chịu gợi kí ức tuổi thơ.",
		image: "../img/food-packaging.png", // Placeholder, will replace with envelope image
		decompose: "Phân huỷ hoàn toàn trong môi trường tự nhiên.",
		size: "11*22 cm",
		weight: "10-12g",
		color: "Màu kem",
		features: [
			"Phân huỷ hoàn toàn trong môi trường tự nhiên.",
			"Có thể tái sử dụng",
			"Được tối ưu để vượt trội hơn gỗ và nhựa sinh học.",
			"Thân thiện với môi trường, lan toả lối sống xanh",
		],
	},
	2: {
		title: "Túi xách (độ bền cao)",
		description:
			"Trở thành phụ kiện thời trang độc lạ, giải pháp mới thay đổi thói quen tiêu dùng để môi trường thêm xanh.",
		image: "../img/shopping-bag.png", // Reusing this image
		decompose: "Phân huỷ hoàn toàn trong môi trường tự nhiên.",
		size: "Nhỏ: 15*25 cm, Trung: 20*30 cm",
		weight: "Nhỏ: 11-13g, Trung: 32-35g",
		color: "Màu kem",
		features: [
			"Phân huỷ hoàn toàn trong môi trường tự nhiên.",
			"Có thể tái sử dụng",
			"Được tối ưu để vượt trội hơn gỗ và nhựa sinh học.",
			"Thân thiện với môi trường.",
			"Lan toả lối sống xanh, an toàn khi đựng các thực phẩm khô",
			"Chịu lực, chịu nhiệt tốt.",
		],
	},
	3: {
		title: "Giấy A4",
		description:
			"Giải pháp giấy thân thiện cho môi trường, độc đáo trong trang trí, thiết kế, mùi hương dễ chịu gợi kí ức tuổi thơ.",
		image: "../img/industrial-packaging.png", // Placeholder, will replace with A4 paper image
		decompose: "Phân huỷ hoàn toàn trong môi trường tự nhiên.",
		size: "A4",
		weight: "7-9g",
		color: "Màu kem",
		features: [
			"Phân huỷ hoàn toàn trong môi trường tự nhiên.",
			"Có thể tái sử dụng",
			"Được tối ưu để vượt trội hơn gỗ và nhựa sinh học.",
			"Thân thiện với môi trường, lan toả lối sống xanh",
			"An toàn khi đựng các thực phẩm khô",
			"Chịu lực, chịu nhiệt tốt.",
		],
	},
	4: {
		title: "Tệp tài liệu",
		description:
			"Giải pháp tệp hồ sơ thân thiện cho môi trường, độc đáo cho học sinh, nhân viên văn phòng, mùi hương dễ chịu gợi kí ức tuổi thơ.",
		image: "../img/cosmetic-packaging.png", // Placeholder, will replace with folder image
		decompose: "Phân huỷ hoàn toàn trong môi trường tự nhiên.",
		size: "Size A4: 22*31 cm, Size A5: 15*22 cm",
		weight: "A4: 27-29g, A5: 18-20g",
		color: "Màu kem",
		features: [
			"Phân huỷ hoàn toàn trong môi trường tự nhiên.",
			"Có thể tái sử dụng",
			"Được tối ưu để vượt trội hơn gỗ và nhựa sinh học.",
			"Thân thiện với môi trường, lan toả lối sống xanh",
			"Chịu lực tốt.",
		],
	},
	5: {
		title: "Bao bì nghệ thuật (theo yêu cầu)",
		description:
			"Trở thành phụ kiện thời trang độc lạ mang dấu ấn cá nhân, giải pháp mới thay đổi thói quen tiêu dùng để môi trường thêm xanh.",
		image: "../img/pharmaceutical-packaging.jpg", // Placeholder, will replace with custom packaging image
		decompose: "Phân huỷ hoàn toàn trong môi trường tự nhiên.",
		size: "Nhỏ: 15*25 cm, Trung: 20*30 cm",
		weight: "Nhỏ: 11-13g, Trung: 32-35g",
		color: "Màu kem",
		features: [
			"In thiết kế hoặc vẽ mẫu mã theo yêu cầu.",
			"Phân huỷ hoàn toàn trong môi trường tự nhiên.",
			"Có thể tái sử dụng",
			"Được tối ưu để vượt trội hơn gỗ và nhựa sinh học.",
			"Thân thiện với môi trường, lan toả lối sống xanh",
			"An toàn khi đựng các thực phẩm khô",
			"Chịu lực, chịu nhiệt tốt.",
		],
	},
};

// Modal elements
const modal = document.getElementById("productModal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalDecompose = document.getElementById("modalDecompose");
const modalSize = document.getElementById("modalSize");
const modalWeight = document.getElementById("modalWeight");
const modalColor = document.getElementById("modalColor");
const modalFeatures = document.getElementById("modalFeatures");
const closeModal = document.querySelector(".close-modal");

// Open modal function
function openModal(productId) {
	const product = productsData[productId];
	if (!product) return;

	// Populate modal with product data
	modalImage.src = product.image;
	modalImage.alt = product.title;
	modalTitle.textContent = product.title;
	modalDescription.textContent = product.description;
	modalDecompose.textContent = product.decompose;
	modalSize.textContent = product.size;
	modalWeight.textContent = product.weight;
	modalColor.textContent = product.color;

	// Populate features list
	modalFeatures.innerHTML = "";
	product.features.forEach((feature) => {
		const li = document.createElement("li");
		li.textContent = feature;
		modalFeatures.appendChild(li);
	});

	// Show modal
	modal.style.display = "block";
	document.body.style.overflow = "hidden"; // Prevent background scrolling
}

// Close modal function
function closeModalFunc() {
	modal.style.display = "none";
	document.body.style.overflow = "auto"; // Restore scrolling
}

// Event listeners
document.addEventListener("DOMContentLoaded", function () {
	// Add click event to all product cards
	const productCards = document.querySelectorAll(".product-card");
	productCards.forEach((card) => {
		card.addEventListener("click", function () {
			const productId = this.getAttribute("data-product");
			openModal(productId);
		});
	});

	// Close modal when clicking close button
	closeModal.addEventListener("click", closeModalFunc);

	// Close modal when clicking outside
	modal.addEventListener("click", function (e) {
		if (e.target === modal) {
			closeModalFunc();
		}
	});

	// Close modal with Escape key
	document.addEventListener("keydown", function (e) {
		if (e.key === "Escape" && modal.style.display === "block") {
			closeModalFunc();
		}
	});
});
