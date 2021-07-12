// Quelle fonction utilisée 
// encore transformation lettre en une autre lettre 
// Une fontion qui lit tout le message et qui transcris chaque lettre en son équivalence ASCII
const algo = {
encode:((letter, shift)=>{ 
    /**
     * encode une lettre en fonction du shift(chiffre choisis)
     * @param letter --> la lettre a encodé
     * @param shift --> la clé/chiffre choisis pour encoder la lettre
     * @return --> Retourner la lettre encoder en fonction du shift 
     */

    
    // je déclare une variable pour récuperer le 
    let letterNumber = letter.charCodeAt();

    if  (letterNumber < 'A'.charCodeAt()|| letterNumber> 'Z'.charCodeAt() && letterNumber < 'a'.charCodeAt() || letterNumber > 'z'.charCodeAt())
        return letter;

    let encodedLetterNumber = letterNumber + shift;

    if (encodedLetterNumber > 122 || (encodedLetterNumber >90 && encodedLetterNumber<97))
        encodedLetterNumber -= 26 // encodedLetterNumber = encodedLetterNumber -26
   
        return String.fromCharCode(encodedLetterNumber);
    
}),

 shiftEncoding:((message, shift)=>{

    if (shift > 25)
        shift = shift%26 
        // équivalence shift %=26

    // declaration d'une nouvelle variable qui contiendra notre message encodé via function encode
    let encodedMessage = ''
    // J'itère sur chaque lettre de mon message afin de récuperer TOUTES les lettres encodé via functio encode
    for (i=0; i<message.length; i++){

        // mon message encodé est = message + nouvelle lettre qu'on vient d'encoder via boucle FOR 
        encodedMessage=encodedMessage + encode(message[i], shift)
    };

    
    // Je retourne mon encodedMessage 
    return encodedMessage;
}),

getIndexFromLetter:(letter)=>{
    /**
    * @param letter: a letter of the alphabet
    * @return the index of letter in the alphabet or -1 if it is not a correct letter
    */
    let index = -1
    let letterNumber = letter.charCodeAt()
    if(letterNumber >= 65 && letterNumber <= 90)
        index = letterNumber - 65
    else if(letterNumber >= 97 && letterNumber <= 122)
        index = letterNumber - 97

    return index;
},

vigenereEncoding:((message, key)=>{
    let encodedMessage = ''
    let encodedLetter = ''
    let keyIndex = 0;

    for (i=0; i<message.length; i++){
        // how many letter should we shift the message letter with ?
        shift = algo.getIndexFromLetter(key[keyIndex])
        // we shift the letter
        encodedLetter = algo.encode(message[i], shift)
        // if the letter is the same than the one in the message and the shift is not a (i.e no shift)
        // it means we can increase the index of the key
        if(encodedLetter != message[i] && shift != 0)
            keyIndex = (keyIndex + 1) % key.length
        // when this is not the case, it means the letter is not a correct letter in the first place and we should
        // still use the current key[index]
        encodedMessage += encodedLetter
    };
    console.log(message, key)
    return encodedMessage;

}),

}

module.exports = algo;
   
