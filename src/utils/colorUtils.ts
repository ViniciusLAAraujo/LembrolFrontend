
export function hexToRgbA(hex: string, opacity: number = 1): string {
    const errorDefault = 'rgba(255,255,255,' + opacity + ')'
    let c: number[] | null = null

    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {

        const hexDigits = hex.substring(1).split('')
        
        if (hexDigits.length === 3) {
            hexDigits.splice(1, 0, hexDigits[0], hexDigits[1], hexDigits[2], hexDigits[2])
        }

        c = hexDigits.reduce<number[]>((acc, _val, index) => {
            if (index % 2 === 0) {
                acc.push(parseInt(hexDigits[index] + hexDigits[index + 1], 16))
            }
            return acc
        }, [])

        if (c.length === 3) {
            return 'rgba(' + c.join(',') + ',' + opacity + ')'
        }
    }

    return errorDefault
}
