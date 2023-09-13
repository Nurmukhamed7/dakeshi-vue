<template>
	<div class="footer">
		<div class="up_part">
			<div>
				<h3 class="text1">ЧТОБЫ ВОПЛОТИТЬ ВАШУ ИДЕЮ</h3>
				<h2 class="text2">ВАМ НУЖНО СОВЕРШИТЬ ОДНО ДЕЙСТВИЕ.</h2>
			</div>

			<div class="content">
				<img
					class="footer__img"
					src="/public/images/footerImg.png"
					alt="footerImg"
				/>

				<RouterLink to="#" class="footer-link">СВЯЗАТЬСЯ С НАМИ</RouterLink>
			</div>
		</div>
	</div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style lang="scss" scoped>
@import '@/styles/layout/layout';
.footer {
	font-family: 'Finlandica', sans-serif;

	h3,
	h2 {
		color: white;
	}
	h3 {
		font-size: 40px;
	}
	h2 {
		font-size: 75px;
	}
}
.content {
	display: flex;
	justify-content: center;
	align-items: start;
	gap: 60px;
}
.footer__img {
}
.footer-link {
	color: $black;
	font-size: 32px;
	font-weight: 600;
	position: relative;
	&::after {
		content: '';
		position: absolute;
		bottom: -2px;
		left: 0;
		width: 100%;
		height: 5px;
		background: $black;
		transition: background-color 0.5s ease, color 0.5s ease;
	}
	&:hover {
		color: white;
		&::after {
			background: white;
		}
	}
}

@media (max-width: 768px) {
	.footer {
		h3 {
			font-size: 28px;
		}
		h2 {
			font-size: 56px;
		}
	}

	.footer__img {
		width: 400px;
	}

	.footer-link {
		font-size: 28px;
	}
}

@media (max-width: 428px) {
	.footer {
		h3 {
			font-size: 16px;
		}
		h2 {
			font-size: 28px;
		}
	}

	.content {
		gap: 30px;
	}
	.footer__img {
		width: 200px;
	}

	.footer-link {
		font-size: 16px;
	}
}

@media (max-width: 428px) {
	.content {
		gap: 10px;
	}

	.footer-link {
		&::after {
			height: 3px;
		}
	}
}
</style>
