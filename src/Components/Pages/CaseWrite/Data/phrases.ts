/*data model */
type phraseType = {
    single: string[]
    couple: string[]
    children: string[]
    benefits: string[]
    entitlement: string[] 
    disability: string[]

}




/* data object => object => strings[] */


const phrase: phraseType = {
    single: [
        "Claimant is single", "Claimant is a single Adult", 
        "Single Adult"
    ],
    couple: [
        "Joint claimant", "Household status: couple" , "Claimant forms part of a couple"
    ],
   children: [
    "They have ", "Household has "
   ],
   benefits: [
    "They are in receipt of ", "They currently receive ", "They are currently in receipt of ", 
    "They are currently receiving ", "Benfefits currently in payment: "
   ],
   entitlement: ["I estimated they would be better off by ", "Estimate financial gain "],
   disability: ["They are also receiving ", "Due to disabilty/ill health, they receive ", 
   "Because of disability they receive "]

}

export default phrase;