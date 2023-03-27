const button = document.querySelector("button")


button.addEventListener('click' , () =>{
    navigator.geolocation.getCurrentPosition(position => {
        const {latitude , longitude} = position.coords
        const contain = document.querySelector('.contain')
        let url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
        fetch(url)
            .then(response => response.json())
            .then((data) => (contain.innerHTML =
                `<div>
                    <ul class="ul">
                        <li class="li"><h4>country:</h4> ${data.address.country}</li>
                        <li class="li"><h4>city_district</h4>: ${data.address.city_district}</li>
                        <li class="li"><h4>country_code</h4>:${data.address.country_code}</li>
                        <li class="li"><h4>city</h4>:${data.address.city}</li>
                        <li class="li"><h4>road</h4>:${data.address.road}</li>
                    </ul>
                  </div>`
            ))
            .catch(() =>{
                console.log('error')
            })
    },)
})
