
export const daysOfWeekSimplify = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

export function daysStringSlash(days:number[]):string
{ 
    var result:string = ""
    days.forEach((day, index) => {
        if (day >= 0 && day < 7) {
            if(index === 0)
                result += (daysOfWeekSimplify[day]) 
            else
                result += (`/${daysOfWeekSimplify[day]}`)
        }
    })
    return result
}