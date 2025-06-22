const display = document.querySelector('.display input');
const tombol = document.querySelectorAll('.tombol input');

tombol.forEach(function(button){
    button.addEventListener('click', function(){
        const value = button.value;

        if ( value === 'AC' ) {
            display.value = '';
        } else if ( value === 'DEL' ) {
            display.value = display.value.slice(0,-1);
        } else if ( value === '=' ) {
            let result = display.value
                .replace ( /÷/g, '/' )
                .replace ( /×/g, '*' )
                .replace ( /,/g, '.' );
            display.value = eval(result);
        } else {
            display.value += value;
        }
    });
});













































// const display = document.querySelector('.display input');
// const tombol = document.querySelectorAll('.tombol input');

// tombol.forEach(function(button){
//     button.addEventListener('click', function(){
//         const value = button.value;

//         if ( value === 'AC' ) {
//             display.value = '';
//         } else if ( value === 'DEL' ) {
//             display.value = display.value.slice(0, -1);
//         } else if ( value === '=' ) {
//             try {
//                 let result = display.value
//                     .replace ( /÷/g, '/' )
//                     .replace ( /×/g, '*' )
//                     .replace ( /,/g, '.' );
//                 display.value = eval(result);
//             } catch {
//                 display.value = 'error';
//             }
//         } else {
//             display.value += value;
//         }
//     });
// });