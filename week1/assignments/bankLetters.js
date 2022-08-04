var bankName = 'CashMoney Bank'

const customers = [ 
    { fname: 'Brianna', balance: -54.99, rate: 2.7 },
    { fname: 'Dillon', balance: 1014.94, rate: 5.1 },
    { fname: 'Dmitri', balance: 0, rate: 7.2 },
    { fname: 'Hazel', balance: 0, rate: 7.2 },
    { fname: 'Isaiah', balance: 224.99, rate: 5.1 },
    { fname: 'Laura', balance: -213.40, rate: 2.5 },
    { fname: 'Matias', balance: -12.06, rate: 3.1 },
    { fname: 'Monique', balance: 2220.54, rate: 7.2 },
    { fname: 'Petra', balance: 500.35, rate: 4.9 },
    { fname: 'Reggie', balance: 0, rate: 7.2 }
]
let letterText =document.querySelector ('customersInfo')

for (let i=0; i<balance.length; i++){
    letterText.options[i]=new Option('balance[i],i')
}