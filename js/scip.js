//Chapter1

const add = x => y => x + y;
const minus = x => y => x - y;

const a_plus_abs_b = a => b => {
    if(b > 0) return add(a)(b);
    else return minus(a)(b)
}

const square = x => x*x;

const average = (x, y) => (x+y)/2;

const improve = (guess, x) => {
    return average(guess, x/guess)
};

const good_enough = (guess, x) => (Math.abs(square(guess) - x) < 0.001);

const sqrt_iter = (guess, x) => {
    if( good_enough(guess, x)) return guess;
    else return sqrt_iter( improve(guess, x), x);
};
const sqrt = x => sqrt_iter(1.0, x);

console.log(sqrt( 0.0004));