const quote_text = document.querySelector('#text');
const quote_author = document.querySelector('#author');
const new_quote = document.querySelector('#new-quote');
const body = document.body;
const tweet_quote = document.querySelector('#tweet-quote');
const tumblr_quote = document.querySelector('#tumblr-quote');

const quote = [
    {text: 'Kırıldığını belli etmeyen insanları üzmeyin. Çünkü onlar sizi kaybetmemek için susar, aptal oldukları için değil.', author: 'T.S Eliot'},
    {text: 'İnsanı; farklı yapan affettikleri, güçlü yapan sabrettikleri, kendisi yapan ise vazgeçtikleridir.', author: 'La Edri'},
    {text: 'Eğer bir gün benim sözlerim bilimle ters düşerse bilimi seçin.', author: 'Mustafa Kemal Atatürk'},
    {text: 'Geri gelmesi mümkün olmayan hatırlanmamalı...', author: 'Nazım Hikmet',},
    {text: 'Hadi ben kırıldım... Peki senin toparlamak gelmedi mi aklına!', author: 'Muhsin Ünlü'},
    {text: 'Mutlu bir hayat yaşamak istiyorsanız, hayatınızı amaca bağlayan kişilere veya eşyalara değil.', author: 'Albert Einstein'},
    {text: 'Güzel hayat isteyen güzel insan biriktirsin.', author: 'Cemal Süreyya'},
    {text: 'Yurtta sulh, cihanda sulh…', author: 'Mustafa Kemal Atatürk'},
    {text: 'Beklemesini bilenin her şey ayağına gelir.', author: 'Honore de Balzac'},
    {text: 'Güzel olan sevgili değildir, sevgili olan güzeldir.', author: 'Tolstoy'},
    {text: 'En haksız barışı, en adil savaşa tercih ederim.', author: 'Cicero'},
    {text: 'Kelimelerin gücünü anlamadan, insanların gücünü anlayamazsın.', author: 'Konfüçyüs'},
    {text: 'Uyuyan milletler ya ölür, ya da köle olarak uyanır.', author: 'Mustafa Kemal Atatürk'},
];

const color = [
    '#333',
    '#E74C3C',
    '#73A857',
    '#16A085',
    '#FB6964',
    '#472E32',
    '#9B59B6',
    '#342224',
]

window.addEventListener('DOMContentLoaded', () => {
    let index = Math.floor(Math.random() * (quote.length - 1));
    quote_text.innerText = quote[index].text
    quote_author.innerText = quote[index].author
});

new_quote.addEventListener('click', () => {
    let index = Math.floor(Math.random() * (quote.length - 1));
    quote_text.innerText = quote[index].text
    quote_author.innerText = quote[index].author

    let randomColor = Math.floor(Math.random() * (color.length - 1));
    body.style.backgroundColor = color[randomColor];
    new_quote.style.backgroundColor = color[randomColor];
    tweet_quote.style.backgroundColor = color[randomColor];
    tumblr_quote.style.backgroundColor = color[randomColor];
});
