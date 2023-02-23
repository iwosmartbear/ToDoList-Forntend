export const prioritiesArray = ["Will not do it", "I have Time", "Might even do it", "Do it now", "It BURNS!!!!"]
export const priorityToString= (priorityNumber: number): string=>{
    if(priorityNumber === 1) return "Will not do it";
    if(priorityNumber === 2) return "I have Time";
    if(priorityNumber === 3) return "Might even do it";
    if(priorityNumber === 4) return "Do it now";
    if(priorityNumber === 5) return "It BURNS!!!!";
    return "Do not cheat!";
}
export const stringToPriority= (stringFromInput: string): number | string=>{
    if(stringFromInput === "Will not do it") return 1;
    if(stringFromInput === "I have Time") return 2;
    if(stringFromInput === "Might even do it") return 3;
    if(stringFromInput === "Do it now") return 4;
    if(stringFromInput === "It BURNS!!!!") return 5;
    return "Do not cheat!";
}