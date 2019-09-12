const standard_input = process.stdin;
standard_input.setEncoding('utf-8');

console.log('please enter percentage');

standard_input.on('data', function (data) {

    // User input exit.
    if(data === 'exit\n'){
        // Program exit.
        console.log("User input complete, program exit.");
        process.exit();
    }else
    {
        const percentage = +data;
        const decimal = Math.round(percentage*255/100);
        const hex_val = decimal.toString(16);

        // Print user input in console.
        console.log('Hex value is : ' + hex_val);
    }
});