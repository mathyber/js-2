// ✓ 10. Написать функцию, которая суммирует все простые числа до n (аргумент функции)

function sumPrimeNumbers(n){
    function isPrime(num) {
        for(let i = 2; i < num; i++)
            if(num % i === 0) return false;
        return true;
    }
    let sum = 0;
    for (let i=2; i<=n; i++)
        if(isPrime(i))
            sum+=i;
    return sum;
}