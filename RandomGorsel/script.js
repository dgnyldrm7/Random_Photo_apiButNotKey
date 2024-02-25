const apiUrl = "https://picsum.photos/v2/list?page=1";
const option = {
    method : 'GET',
    url : apiUrl,

    //api key istenirse bu satırı aktifleştir.
    // headers: {
    //   'X-Api-Key' : apiUrl,
    // },
};


const button = document.querySelector(".btn");
const upText = document.querySelector(".card-header")


button.addEventListener("click" , async ()=>{
    try
    {
        upText.innerHTML = "Yeni görsel yükleniyor!";
        document.querySelector(".tikla").innerHTML = "";
        const response = await fetch(apiUrl , option); //önce url, sonra option kavramı olacaktır.
        const datas = await response.json();
        const fotoVeriSayisi = Math.floor(Math.random() * 30);
        const cekilecekPhoto = datas[fotoVeriSayisi].download_url;
        console.log(cekilecekPhoto);
        document.querySelector(".imageField").src=cekilecekPhoto;
        upText.innerHTML = "Yeni Görsel için butona tıkla!";
    }
    catch (e)
    {
        upText.innerHTML = "Malesef internet yok. Daha sonra dene!";
        document.querySelector(".imageField").src = " NOT FOUND :(" ;

    }





});

