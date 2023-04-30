/*data model */
type phraseType = {
    single: string[]
    couple: string[]
    children: string[]
    benefits: string[]
    disability: string[]
    entitlement: string[] 
    betterOff: string[]

    

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
    "They are currently receiving ", "Benefits currently in payment: "
   ],
   
   disability: ["They are also receiving ", "Due to disabilty/ill health, they receive ", 
   "Because of disability they receive "],

   entitlement: [" Based on information provided claimant may be entitled to: ", "Based on info provided found entitlement to: ", 
   "Based on information provided they could be entitled to:  " ],

   betterOff: [
    "They could be better off by ", "They may be better of by ", "The could be entitled to an additional award of "
   ]



}

export default phrase;