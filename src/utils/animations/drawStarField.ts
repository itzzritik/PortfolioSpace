import { EStartFieldSpeed } from '#data/types/common.d';

export default function DrawStarField () {
	const canvas = <HTMLCanvasElement> document.getElementById('starfieldCanvas');
	if (!canvas) return;

	const pen = canvas.getContext('2d');
	if (!pen) return;

	let width: number;
	let height: number;
	let prevTime: number;

	const starCount = 1000;
	const starSize = 1.5;

	const setCanvasExtents = () => {
		width = window.innerWidth;
		height = window.innerHeight;
		canvas.width = width;
		canvas.height = height;
	};
	const makeStars = (count: number) => {
		const out = [];
		for (let i = 0; i < count; i++) {
			const s = {
				x: Math.random() * 1600 - 800,
				y: Math.random() * 900 - 450,
				z: Math.random() * 1000,
			};
			out.push(s);
		}
		return out;
	};
	const stars = makeStars(starCount);
	const clear = () => {
		pen.fillStyle = 'black';
		pen.fillRect(0, 0, canvas.width, canvas.height);
	};
	const putPixel = (x: number, y: number, brightness: number) => {
		const intensity = brightness * 255;
		const rgb = 'rgb(' + intensity + ',' + intensity + ',' + intensity + ')';

		pen.beginPath();
		pen.fillStyle = rgb;
		pen.arc(x, y, starSize, 0, 2 * Math.PI);
		pen.fill();
		pen.closePath();
	};
	const moveStars = (distance: number) => {
		const count = stars.length;
		for (let i = 0; i < count; i++) {
			const star = stars[i];
			star.z -= distance;
			while (star.z <= 1) {
				star.z += 1000;
			}
		}
	};
	const init = (time: number) => {
		prevTime = time;
		requestAnimationFrame(tick);
	};
	const tick = (time: number) => {
		const elapsed = time - prevTime;
		const speed = window.starFieldSpeed ?? EStartFieldSpeed?.SLOW;
		prevTime = time;

		moveStars(elapsed * speed);
		clear();

		const cx = width / 2;
		const cy = height / 2;
		const count = stars.length;

		for (let i = 0; i < count; i++) {
			const star = stars[i];
			const x = cx + star.x / (star.z * 0.001);
			const y = cy + star.y / (star.z * 0.001);

			if (x < 0 || x >= width || y < 0 || y >= height) continue;

			const brightness = 1 - (star.z / 1000.0) ** 2;
			putPixel(x, y, brightness);
		}

		requestAnimationFrame(tick);
	};

	window.onresize = setCanvasExtents;
	setCanvasExtents();
	requestAnimationFrame(init);
}
