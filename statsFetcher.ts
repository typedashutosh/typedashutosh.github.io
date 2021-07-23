import { isServer } from './envCheck'

export const stats = async (): Promise<{ [key: string]: string | undefined } | null> => {
	if (isServer()) return null

	const resArr = (
		await (
			await fetch(
				'https://raw.githubusercontent.com/typedashutosh/github-readme-stats/master/generated/overview.svg'
			)
		).text()
	)
		.split('>')
		.flatMap(str => str.split('<'))

	return {
		[`${resArr[84]}`]: resArr[88],
		[`${resArr[104]}`]: resArr[108],
		[`${resArr[124]}`]: resArr[128],
		[`${resArr[144]}`]: resArr[148]
	}
}
