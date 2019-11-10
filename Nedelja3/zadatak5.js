function test() {
    const orderButtonClass = 'btn-order';
    const orderNowButtonClass = 'btn-order-now';
    const counterId = 'counter';

    let orderButtons = document.getElementsByClassName(orderButtonClass);


    for (let orderButton of orderButtons) {     
        orderButton.addEventListener('click', function () {
            let count = document.getElementById(counterId);
            let countValue = parseInt(count.innerText) + 1;
            
            count.innerHTML = countValue;
        });
    }


    let orderNowButtons = document.getElementsByClassName(orderNowButtonClass);

    for (let orderNowButton of orderNowButtons) {
        orderNowButton.addEventListener('click', function () {
            let count = document.getElementById(counterId);

            let countValue = count.innerText;
            console.log(typeof countValue);
         
            if (countValue != '0') {
                let date= new Date();

                alert(`Narucili ste: ${countValue} nasih proizvoda. ${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}.`);
                count.innerText = '0';
            }
            else {
                alert('Niste porucili nas proizvod.');
            }
        });
    }
}
document.addEventListener('DOMContentLoaded', () => {
    test();
});