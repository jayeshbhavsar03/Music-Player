$(document).ready(function(){

    $(window).scroll(function(){

        if(this.scrollY > 20){

            $('nav').addClass('sticky');
        }else{

            $('nav').removeClass('sticky');
        }

        if (this.scrollY > 300) {

            $('.scroll-up-btn').addClass('show');
        }else{

            $('.scroll-up-btn').removeClass('show');
        }
    });

    $('.menu-btn').click(function(){
        $('nav .nav__list').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0})
    })

});

const svcBtn = document.querySelector('.service__btn');

svcBtn.addEventListener('click', function(e){

    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;
    
    let ripples = document.createElement('span');
    ripples.style.left = x + 'px';
    // ripples.style.top = y + 'px';
    
    this.appendChild(ripples);
    
    setTimeout(() => {
        ripples.remove()
    },500);
});

const ap = new APlayer({

    container: document.getElementById('aplayer'),
    listFolded: true,
    theme: '#ff7300',
    listMaxHeight: 120,

    audio: [
    {
        name: 'Dhokha',
        artist: 'Arijit Singh',
        url: 'music/_Dhokha_Song__Arijit_Singh__Khushalii_Kumar,_Parth,_Nishant,_Manan_B,_Mohan_S_V,_Bhushan_K(256k).mp3',
        cover: 'img/arijit.jpg'
    },
    {
        name: 'Main Rahoon Ya Na Rahoon',
        artist: 'Armaan Malik',
        url: 'music/Main_Rahoon_Ya_Na_Rahoon_Full_Video__Emraan_Hashmi,_Esha_Gupta__Amaal_Mallik,_Armaan_Malik(256k).mp3',
        cover: 'img/arman-malik.webp'
    },
    {
        name: 'Jugnu',
        artist: 'Badshah',
        url: 'music/Badshah_-_Jugnu_(Official_Video)__Nikhita_Gandhi__Akanksha_Sharma(256k).mp3',
        cover: 'img/badshaa.webp'
    },
    {
        name: 'Subha Hone Na De',
        artist: 'Mikka Sing',
        url: 'music/subha_hone_na_de_#desiboyz(256k).mp3',
        cover: 'img/mika-sing.webp'
    },
    {
        name: 'Asalaam-e-Ishqum',
        artist: 'Neha Bhasin',
        url: 'music/Asalaam-e-Ishqum_Song__Gunday__Ranveer_Singh,_Arjun_Kapoor,_Priyanka__Neha_Bhasin,_Bappi_Lahiri(256k).mp3',
        cover: 'img/neha-bhasin.jpg'
    },
    {
        name: 'Khairiyat',
        artist: 'Pritam',
        url: 'music/_KHAIRIYAT_(BONUS_TRACK)__CHHICHHORE__Sushant,_Shraddha__Pritam,_Amitabh_BArijit_Singh(256k).mp3',
        cover: 'img/pritam'
    },
    {
        name: 'Mere Paas Tum Ho',
        artist: 'Rahat Fathe Ali Khan',
        url: 'music/Meray_Paas_Tum_Ho(256k).mp3',
        cover: 'img/rahat-fathe-ali-khan.jpg'
    },
    {
        name: 'Uff teri Adaa',
        artist: 'Shankar Madhavan',
        url: 'music/UFF_TERI_ADAA_(BY_SHANKAR_MAHADEVAN_&_ALYSSA_MENDONSA)(256k).mp3',
        cover: 'img/shankar-madhavan.jpg'
    },
    {
        name: 'Pal',
        artist: 'Shreya Ghoshal',
        url: 'music/Pal_Full_Video_-_JalebiArijit_SinghShreya_GhoshalRhea_&_VarunJaved_-_Mohsin(256k).mp3',
        cover: 'img/shreya-ghoshal.jpg'
    },
    {
        name: 'Kal Ho Naa Ho',
        artist: 'Sonu Nigam',
        url: 'music/Kal_Ho_Naa_Ho_Full_Video_-_Title_TrackShah_Rukh_Khan,Saif_Ali,PreitySonu_NigamKaran_J(256k).mp3',
        cover: 'img/sonu-nigam.jpg'
    },
    {
        name: 'Raat Zara Si',
        artist: 'A R Rahman',
        url: 'music/_Rait_Zara_Si_Full_Video_@A._R._RahmanAkshay,_Dhanush,Sara,Arijit,_Shashaa__Bhushan_K(256k).mp3',
        cover: 'img/a-r-raheman.jpg'
    },
    {
        name: 'Oo Bolege Ya Oo Oo Bolega',
        artist: 'Kanika Kappor',
        url: 'music/Oo_Bolega_ya_Oo_Oo_Bolega_Ft_Samantha_(_Full_Video)_Pushpa__Allu_A,_RashmikaKanika_K,_DSP,_Sukumar(256k).mp3',
        cover: 'img/kanika-kapoor.jpg'
    },
    {
        name: 'Dil Ko Karaar Aaya',
        artist: 'Neha Kakkar',
        url: 'music/Dil_Ko_Karaar_Aaya_-_Sidharth_Shukla_&_Neha_Sharma__Neha_Kakkar_&_YasserDesai__Rajat_Nagpal__Rana(256k).mp3',
        cover: 'img/neha.jpg'
    },
    {
        name: 'Kiti Sangaychay Mala',
        artist: 'Pandit Jasraj',
        url: 'music/Kiti_Sangaychay_Mala__Video_Song__Double_Seat__Mukta_Barve__Ankush_Chaudhari__Marathi_Movie(256k).mp3',
        cover: 'img/pandit-jasraj.jpg'
    },
    {
        name: 'Chandaniya Lori Lori',
        artist: 'Sajid-Wajid',
        url: 'music/Chandaniya_Lori_Lori_-_Official_Full_Song__Rowdy_Rathore__Akshay_Kumar,_Sonakshi_Sinha,_Prabhudeva(256k).mp3',
        cover: 'img/sajid.jpg'
    },
    {
        name: 'Chand Sifarish',
        artist: 'Shaan',
        url: 'music/Chand_Sifarish__Full_Song__Fanaa__Aamir_Khan,_Kajol__Shaan,_Kailash_Kher__Jatin-Lalit__Prasoon(256k).mp3',
        cover: 'img/shaan.jpg'
    },
    ]
})

// aplayer click

$('.card').on('click', function(e){

    var dataSwitchId = $(this).attr('data-switch');

    ap.list.switch(dataSwitchId);

    ap.play();
    $('#aplayer').addClass('show');

    $('.scroll-up-btn').addClass('showTop');
});
$('.aplayer-icon.aplayer-icon-menu').click(function(){

    $('.scroll-up-btn').toggleClass('showTp')
});

var type = new Typed(".logo__text", {
    strings: ["Music site"],
    typeSpeed: 60,
    backSpeed: 30,
    loop: true 
});

const boxes = document.querySelectorAll('.box');
let width = window.screen.availWidth

boxes.forEach(box => {

    box.classList.remove('carousel-item');
    
    if (width <= 768) {
        
        box.classList.add('carousel-item');
        console.log(width);
    }
});