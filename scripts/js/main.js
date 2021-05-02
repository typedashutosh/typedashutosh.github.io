"use strict";
// ;(() => {
// 	//- SECTION 1
// 	const section = document.querySelectorAll(`section`) as NodeListOf<HTMLDivElement>
// 	//get section height
// 	const sect_h = (n: number) => section[n].clientHeight
// 	const svg_right = document.querySelector(`.section-1 .background .main .right`) as HTMLDivElement
// 	const svg_left = document.querySelector(`.section-1 .background .main .left`) as HTMLDivElement
// 	addEventListener(`scroll`, e => {
// 		svg_right.style.transform = `translateX(${scrollY / 2}px)`
// 		svg_left.style.transform = `translateX(-${scrollY / 2}px)`
// 		svg_right.style.opacity = `${(sect_h(0) - scrollY * 2) / sect_h(0)}`
// 		svg_left.style.opacity = `${(sect_h(0) - scrollY * 2) / sect_h(0)}`
// 		// console.log(`${(outerHeight - scrollY)/(outerHeight*2)}`)
// 		// console.log(section[0].clientHeight)
// 	})
// 	//- SECTION 2
// 	const section_2_background = document.querySelector(`.section-2 .background`) as HTMLDivElement
// 	const bubbles = document.querySelectorAll(
// 		`.section-2 .background .bubbles`
// 	) as NodeListOf<HTMLDivElement>
// 	addEventListener(`scroll`, e => {
// 		if (
// 			scrollY >= sect_h(0) / 2 &&
// 			scrollY <= sect_h(0)
// 		) {
// 			section_2_background.style.opacity = `${
// 				(scrollY - sect_h(0) / 2) / (sect_h(1)/2)
// 			}`
// 		}
// // 		if(
// // 		scrollY >= sect_h(0) &&
// // scrollY <= 
// // 		){
// // 			section_2_background.style.opacity = `${
// // 			}`
// // 		}
// 	})
// 	bubbles.forEach(bubble => {
// 		const random_dimension = Math.random() * 6 + 10
// 		bubble.style.height = `${random_dimension}vw`
// 		bubble.style.width = `${random_dimension}vw`
// 		bubble.style.opacity = `${Math.random() / 2 + 0.25}`
// 		bubble.style.top = `${Math.random() * 100}%`
// 		bubble.style.left = `${Math.random() * 100}%`
// 	})
// })()
