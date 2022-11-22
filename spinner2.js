const spinnerChars = '|/-\\|/-\\|';
let timeout = 0;
for (const char of spinnerChars) {
  setTimeout(() => {
    process.stdout.write(`\r${char}   `);
  }, timeout);
  timeout += 200;
}