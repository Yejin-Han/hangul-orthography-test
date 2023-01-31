/* randomize answers to the questions */
export const shuffleArray=(array: any[])=>{
  return [...array].sort(()=>(Math.random()-0.5)); //quick fix for randomizer function 
}