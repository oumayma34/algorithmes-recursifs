// vérificateur d'année bissextile :
// fonction pour vérifier si une année est bissextile
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
}

// exemple
const year = 2024;
if (isLeapYear(year)) {
    console.log(`${year} est une année bissextile.`);
} else {
    console.log(`${year} n'est pas une année bissextile.`);
}


/*
ALGORITHM isLeapYear(year)
    VAR
        leapYear : boolean
        year : integer
    BEGIN
        IF (year MOD 4 = 0 AND year MOD 100 ≠ 0) OR year MOD 400 = 0 THEN
            leapYear := TRUE
        ELSE
            leapYear := FALSE
        END IF
        
        RETURN leapYear
    END

*/

//-----------------------------------------------

// tarification des billets :
// fonction pour déterminer le prix du billet en fonction de l'âge
function ticketPrice(age) {
    if (age <= 12) {
        return 10;
    } else if (age >= 13 && age <= 17) {
        return 15;
    } else {
        return 20;
    }
}
const userAge = prompt("Veuillez entrer votre âge :");
const age = parseInt(userAge);

// vérifier si l'entrée est un nombre valide
if (!isNaN(age)) {
    // calculer le prix du billet en fonction de l'âge de l'utilisateur
    const price = ticketPrice(age);
    // afficher le prix du billet en utilisant une alerte
    alert(`Prix du billet pour l'âge de ${age} ans : $${price}.`);
} else {
    // gérer le cas où l'entrée n'est pas un nombre valide
    alert("Veuillez entrer un âge valide.");
}

/*
ALGORITHM ticketPrice(age)
    VAR
        price : integer
        age : integer
    BEGIN
        IF age <= 12 THEN
            price := 10
        ELSE IF age >= 13 AND age <= 17 THEN
            price := 15
        ELSE
            price := 20
        END IF
        
        RETURN price
    END

BEGIN
    VAR
        userAge : string
        age : integer
        price : integer
        
    BEGIN
        userAge := INPUT("Veuillez entrer votre âge :")
        age := PARSE_INT(userAge)
        
        IF NOT IS_NUMBER(age) THEN
            OUTPUT("Veuillez entrer un âge valide.")
        ELSE
            price := ticketPrice(age)
            
            OUTPUT("Prix du billet pour l'âge de " + age + " ans : $" + price + ".")
        END IF
    END
END

*/
//-----------------------------------------------
//-----------------------------------------------
//-----------------------------------------------

/* récursivité
tâche 1: Séquence Fibonacci */
// fonction récursive pour calculer le nième nombre de Fibonacci
function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

// exemple d'utilisation :
const fibonacciIndex = 6;
console.log(`Le nombre de Fibonacci à l'index ${fibonacciIndex} est : ${fibonacci(fibonacciIndex)}`);

/*
ALGORITHM fibonacci(n)
    VAR
        result : integer
        n : integer
    BEGIN
        IF n <= 1 THEN
            result := n
        ELSE
            result := fibonacci(n - 1) + fibonacci(n - 2)
        END IF
        
        RETURN result
    END ALGORITHM

*/
//-----------------------------------------------

// tâche 3: Fonction de puissance

// fonction récursive pour calculer la puissance d'un nombre
function power(base, exponent) {
    if (exponent === 0) {
        return 1;
    } else if (exponent > 0) {
        return base * power(base, exponent - 1);
    } else {
        // gérer les exposants négatifs (optionnel)
        return 1 / power(base, -exponent);
    }
}

/*
ALGORITHM power(base, exponent)
    VAR
        result : float
        b : float
        e : integer
        
    BEGIN
        b := base 
        e := exponent  
        
        IF e = 0 THEN
            result := 1
        ELSE IF e > 0 THEN
            result := b * power(b, e - 1)
        ELSE
            result := 1 / power(b, -e)
        END IF
        
        RETURN result
    END

*/

// exemple d'utilisation :
const baseNumber = 2;
const exponentNumber = 5;
console.log(`${baseNumber} élevé à la puissance de ${exponentNumber} est : ${power(baseNumber, exponentNumber)}`);