const oblicz_btn = document.querySelector("button")

oblicz_btn.addEventListener("click", () =>{
    e.preventdefault()
    const miejsce = document.querySelector("#miejsca").value
    const liczba_dorosli = document.querySelector("#dorosli").value
    const Liczba_dzieci = document.querySelector("#dzieci").value
    const termin = document.querySelector("#termin").value
    const ulga = document.querySelector("input[name='ulga']:checked").value

    const koszta_wycieczki = document.querySelector('#koszta_span')
    const dzien_wycieczki = document.querySelector('#dzien_span')

    dzien_wycieczki.textContent = termin

    koszta_wycieczki.textContent = 10000 * (ulga*0.01) + "zł"

})