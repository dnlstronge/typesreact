/*data model */
type phraseType = {
    single: string[]
    couple: string[]
    children: string[]
    benefit: string[]
    entitlement: string[] 
    disability: string[]

}




/* data object => object => strings[] */


const phrase = {
    single: [
        "Claimant is single", "Claimant is a single Adult", 
        "Single Adult"
    ],
    couple: [
        "Joint claimant", "Household is a couple" , "Claimant forms part of a couple"
    ],
   children: [
    "They have ", "Household has "
   ],
   benefits: [
    "They are in receipt of ", "They currently receive ", "They are currently in receipt of ", 
    "They are currently receiving ", "Benfefits currently in payment: "
   ],
   disability: ["They are also receiving ", " due to disabilty/ill health, they receive "]
}

export default phrase;