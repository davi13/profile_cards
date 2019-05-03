const heading = 'Please Meet Our Team';
let i = 0;
console.log(heading.length)
const typing = () => {
    if (heading.length) {
        document.querySelector('.heading').innerHTML += heading.charAt(i);
        i++;
        setTimeout(typing, 150);
    }
}
typing()