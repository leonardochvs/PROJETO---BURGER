const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-all')
const buttonMapAll = document.querySelector('.map-all')
const buttonSumAll = document.querySelector('.sum-all')
const buttonFilterAll = document.querySelector('.filter-all') 


function formatCurrency(value) {
    const newValue = value.toLocaleString('pt-br',{
        style : 'currency',
        currency : 'BRL',
})

    return newValue
}



function showAll(productsArray) {
    let myLi = ''


    productsArray.forEach((product) => {
        myLi += `
    <li>
        <img src=${product.src}>
        <p>${product.name}</p>
        <p class="item-price"> ${formatCurrency(product.price)}</p>
    </li>
        `
    })

    list.innerHTML = myLi

}

function mapAllItens(){
    const newPrices = menuOptions.map((product) => ({
    ...product,
    price: product.price * 0.9,
    
    }))

    showAll(newPrices)
   
}

function sumAllitens(){
    const totalValue = menuOptions.reduce((acc,curr) => acc + curr.price, 0)

    list.innerHTML = `
    <li>
   <p>O valor total é de ${formatCurrency(totalValue)}</p>
    </li>
    `
}

function filterAllItens(){
    const productVegan = menuOptions.filter((product) => product.vegan)


    showAll(productVegan)
}


buttonShowAll.addEventListener('click', () => showAll (menuOptions))
buttonMapAll.addEventListener('click', mapAllItens)
buttonSumAll.addEventListener('click', sumAllitens )
buttonFilterAll.addEventListener('click', filterAllItens) 






