
process.stdout.write('wanessa\n');

const arr = ["Dog", "Cat", "Rabbit"];

const output = (val= 0) => {
    process.stdout.write(`${arr[val]}\n`);
}

const num = Math.floor(Math.random()*2);
output(num);

process.stdin.on('data', data => {
    process.stdout.write(`You wrote ${data}
    \n`);
    process.exit();
})

process.on('exit', data => {
    console.log("you exited");
}) 