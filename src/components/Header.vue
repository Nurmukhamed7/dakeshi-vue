<template>
	<div class="header-row">
		<div class="header-content">
			<h1 class="header-heading">МЫ МАСШТАБИРУЕМ<br />ВАШИ ИДЕИ</h1>
		</div>
		<div class="header-img">
			<div class="header-gradient__1"></div>
			<div class="header-gradient__2"></div>
			<div class="header-illustration">
				<img src="/images/Illustration.png" alt="Illustration" />
			</div>
		</div>
	</div>
</template>

<script setup></script>

<style lang="scss" scoped>
@import '@/styles/layout/layout';

.header-row {
	display: flex;
	justify-content: space-between;
}
.header-content {
	margin-top: 70px;
	z-index: 1;
}
.header-heading {
	margin: 0;
	font-weight: 700;
	font-size: 80px;
	font-family: $font-header;
}

.header-img {
	/* background: green; */
	position: relative;
}

.header-gradient__1 {
	position: absolute;
	width: 500px;
	height: 500px;
	left: 420px;
	top: 450px;
	transform: rotate(170deg);
	transform-origin: 0 0;
	background: linear-gradient(
		180deg,
		rgba(254.63, 255, 236.3, 0.62) 10%,
		rgba(240, 77, 55, 0.54) 0%
	);
	filter: blur(70px);
}
.header-gradient__2 {
	position: absolute;
	width: 500px;
	height: 500px;
	left: 100px;
	top: 50px;
	background: linear-gradient(
		217deg,
		rgba(43, 226, 240, 0.5) 0%,
		rgba(48, 58, 255, 0.53) 100%
	);
	filter: blur(70px);
}

.header-illustration {
	position: relative;
}

@media (max-width: 1200px) {
	.header-heading {
		margin: 0;
		font-weight: 700;
		font-size: 70px;
		font-family: $font-header;
	}
}

@media (max-width: 1024px) {
	.header-gradient__2 {
		width: 380px;
	}
}

@media (max-width: 1000px) {
	.header-row {
		flex-direction: column;
		align-items: center;
		text-align: center;
	}

	.header-content {
		margin-top: 0;
	}

	.header-heading {
		font-size: 50px;
	}

	.header-img {
		text-align: center;
	}

	.header-gradient__1 {
		left: 420px;
	}

	.header-gradient__2 {
		left: 200px;
	}
}

@media (max-width: 768px) {
	.header-row {
		justify-content: end;
	}

	.header-illustration {
		img {
			width: 590px;
		}
	}

	.header-gradient__2 {
		width: 500px;
		left: 170px;
	}
}

@media (max-width: 480px) {
	.heroSection {
		/* overflow-x: hidden; */
	}

	.header-row {
		gap: 100px;
	}

	.header-heading {
		font-size: 34px;
	}

	.header-illustration {
		img {
			width: 500px;
		}
	}

	.header-gradient__1 {
		width: 360px;
		left: 350px;
		height: 360px;
		top: 350px;
	}

	.header-gradient__2 {
		width: 350px;
		left: 20px;
		height: 360px;
		top: 0;
	}
}
</style>
