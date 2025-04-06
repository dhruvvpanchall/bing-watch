import React, { useState, useEffect, useRef } from 'react'; 
import { useParams } from 'react-router-dom';
import Slider from './Slider'; 

import axios from 'axios';

// Import all necessary images and data

import episodeclock from '../assets/images/episode.png'

// Cast
// import plusIcon from '../assets/images/plus.png';
import Kantara1 from '../assets/images/Cast Kantara/kantara (1).png';
import Kantara2 from '../assets/images/Cast Kantara/kantara (2).png';
import Kantara3 from '../assets/images/Cast Kantara/kantara (3).png';
import Kantara4 from '../assets/images/Cast Kantara/kantara (4).png';
import Kantara5 from '../assets/images/Cast Kantara/kantara (5).png';
import Kantara6 from '../assets/images/Cast Kantara/kantara (6).png';
import Kantara7 from '../assets/images/Cast Kantara/kantara (7).png';
import Kantara8 from '../assets/images/Cast Kantara/kantara (8).png';

import IronMan1 from '../assets/images/Cast IronMan/IronMan (1).jfif';
import IronMan2 from '../assets/images/Cast IronMan/IronMan (2).jfif';
import IronMan3 from '../assets/images/Cast IronMan/IronMan (3).jfif';
import IronMan4 from '../assets/images/Cast IronMan/IronMan (4).jfif';
import IronMan5 from '../assets/images/Cast IronMan/IronMan (5).jfif';
import IronMan6 from '../assets/images/Cast IronMan/IronMan (6).jfif';

import Stranger1 from '../assets/images/Cast Stranger/Stranger (1).jfif';
import Stranger2 from '../assets/images/Cast Stranger/Stranger (2).jfif';
import Stranger3 from '../assets/images/Cast Stranger/Stranger (3).jfif';
import Stranger4 from '../assets/images/Cast Stranger/Stranger (4).jfif';
import Stranger5 from '../assets/images/Cast Stranger/Stranger (5).jfif';
import Stranger6 from '../assets/images/Cast Stranger/Stranger (6).jfif';
import Stranger7 from '../assets/images/Cast Stranger/Stranger (7).jfif';
import Stranger8 from '../assets/images/Cast Stranger/Stranger (8).jfif';
import Stranger9 from '../assets/images/Cast Stranger/Stranger (9).jfif';
import Stranger10 from '../assets/images/Cast Stranger/Stranger (10).jfif';
import Stranger11 from '../assets/images/Cast Stranger/Stranger (11).jfif';
import Stranger12 from '../assets/images/Cast Stranger/Stranger (12).jfif';
import Stranger13 from '../assets/images/Cast Stranger/Stranger (13).jfif';

import Morbius1 from '../assets/images/Cast Morbius/Morbius (1).jfif';
import Morbius2 from '../assets/images/Cast Morbius/Morbius (2).jfif';
import Morbius3 from '../assets/images/Cast Morbius/Morbius (3).jfif';
import Morbius4 from '../assets/images/Cast Morbius/Morbius (4).jfif';
import Morbius5 from '../assets/images/Cast Morbius/Morbius (5).jfif';
import Morbius6 from '../assets/images/Cast Morbius/Morbius (6).jfif';

import BhaiJan1 from '../assets/images/Cast BhaiJan/BhaiJan (1).jfif';
import BhaiJan2 from '../assets/images/Cast BhaiJan/BhaiJan (2).jfif';
import BhaiJan3 from '../assets/images/Cast BhaiJan/BhaiJan (3).jfif';
import BhaiJan4 from '../assets/images/Cast BhaiJan/BhaiJan (4).jfif';
import BhaiJan5 from '../assets/images/Cast BhaiJan/BhaiJan (5).jfif';
import BhaiJan6 from '../assets/images/Cast BhaiJan/BhaiJan (6).jfif';
import BhaiJan7 from '../assets/images/Cast BhaiJan/BhaiJan (7).jfif';
import BhaiJan8 from '../assets/images/Cast BhaiJan/BhaiJan (8).jfif';
import BhaiJan9 from '../assets/images/Cast BhaiJan/BhaiJan (9).jfif';
import BhaiJan10 from '../assets/images/Cast BhaiJan/BhaiJan (10).jfif';

import Sooraj1 from '../assets/images/Cast Sooraj/Sooraj (1).jfif';
import Sooraj2 from '../assets/images/Cast Sooraj/Sooraj (2).jfif';
import Sooraj3 from '../assets/images/Cast Sooraj/Sooraj (3).jfif';
import Sooraj4 from '../assets/images/Cast Sooraj/Sooraj (4).jfif';
import Sooraj5 from '../assets/images/Cast Sooraj/Sooraj (5).jfif';
import Sooraj6 from '../assets/images/Cast Sooraj/Sooraj (6).jfif';
import Sooraj7 from '../assets/images/Cast Sooraj/Sooraj (7).jfif';
import Sooraj8 from '../assets/images/Cast Sooraj/Sooraj (8).jfif';

import Pathan1 from '../assets/images/Cast Pathan/Pathan (1).jfif';
import Pathan2 from '../assets/images/Cast Pathan/Pathan (2).jfif';
import Pathan3 from '../assets/images/Cast Pathan/Pathan (3).jfif';
import Pathan4 from '../assets/images/Cast Pathan/Pathan (4).jfif';
import Pathan5 from '../assets/images/Cast Pathan/Pathan (5).jfif';
import Pathan6 from '../assets/images/Cast Pathan/Pathan (6).jfif';
import Pathan7 from '../assets/images/Cast Pathan/Pathan (7).jfif';

import AntMan1 from '../assets/images/Cast AntMan/AntMan (1).jfif';
import AntMan2 from '../assets/images/Cast AntMan/AntMan (2).jfif';
import AntMan3 from '../assets/images/Cast AntMan/AntMan (3).jfif';
import AntMan4 from '../assets/images/Cast AntMan/AntMan (4).jfif';
import AntMan5 from '../assets/images/Cast AntMan/AntMan (5).jfif';
import AntMan6 from '../assets/images/Cast AntMan/AntMan (6).jfif';
import AntMan7 from '../assets/images/Cast AntMan/AntMan (7).jfif';
import AntMan8 from '../assets/images/Cast AntMan/AntMan (8).jfif';

import Adipurush1 from '../assets/images/Cast Adipurush/Adipurush (1).jfif';
import Adipurush2 from '../assets/images/Cast Adipurush/Adipurush (2).jfif';
import Adipurush3 from '../assets/images/Cast Adipurush/Adipurush (3).jfif';
import Adipurush4 from '../assets/images/Cast Adipurush/Adipurush (4).jfif';
import Adipurush5 from '../assets/images/Cast Adipurush/Adipurush (5).jfif';
import Adipurush6 from '../assets/images/Cast Adipurush/Adipurush (6).jfif';
import Adipurush7 from '../assets/images/Cast Adipurush/Adipurush (7).jfif';
import Adipurush8 from '../assets/images/Cast Adipurush/Adipurush (8).jfif';

import Forigner1 from '../assets/images/Cast-Forigner/Forigner (1).jfif';
import Forigner2 from '../assets/images/Cast-Forigner/Forigner (2).jfif';
import Forigner3 from '../assets/images/Cast-Forigner/Forigner (3).jfif';
import Forigner4 from '../assets/images/Cast-Forigner/Forigner (4).jfif';
import Forigner5 from '../assets/images/Cast-Forigner/Forigner (5).jfif';
import Forigner6 from '../assets/images/Cast-Forigner/Forigner (6).jfif';
import Forigner7 from '../assets/images/Cast-Forigner/Forigner (7).jfif';
import Forigner8 from '../assets/images/Cast-Forigner/Forigner (8).jfif';

import SunCity1 from '../assets/images/Cast Suncity/SunCity (1).jfif'
import SunCity2 from '../assets/images/Cast Suncity/SunCity (2).jfif'
import SunCity3 from '../assets/images/Cast Suncity/SunCity (3).jfif'
import SunCity4 from '../assets/images/Cast Suncity/SunCity (4).jfif'
import SunCity5 from '../assets/images/Cast Suncity/SunCity (5).jfif'
import SunCity6 from '../assets/images/Cast Suncity/SunCity (6).jfif'
import SunCity7 from '../assets/images/Cast Suncity/SunCity (7).jfif'
import SunCity8 from '../assets/images/Cast Suncity/SunCity (8).jfif'

import Tomoorow1 from '../assets/images/Cas Tomoorow/Tomoorow (1).jfif'
import Tomoorow2 from '../assets/images/Cas Tomoorow/Tomoorow (2).jfif'
import Tomoorow3 from '../assets/images/Cas Tomoorow/Tomoorow (3).jfif'
import Tomoorow4 from '../assets/images/Cas Tomoorow/Tomoorow (4).jfif'
import Tomoorow5 from '../assets/images/Cas Tomoorow/Tomoorow (5).jfif'
import Tomoorow6 from '../assets/images/Cas Tomoorow/Tomoorow (6).jfif'
import Tomoorow7 from '../assets/images/Cas Tomoorow/Tomoorow (7).jfif'
import Tomoorow8 from '../assets/images/Cas Tomoorow/Tomoorow (8).jfif'

import MissFire1 from '../assets/images/Cast MissFire/MissFire (1).jfif'
import MissFire2 from '../assets/images/Cast MissFire/MissFire (2).jfif'
import MissFire3 from '../assets/images/Cast MissFire/MissFire (3).jfif'
import MissFire4 from '../assets/images/Cast MissFire/MissFire (4).jfif'
import MissFire5 from '../assets/images/Cast MissFire/MissFire (5).jfif'
import MissFire6 from '../assets/images/Cast MissFire/MissFire (6).jfif'

import Pushpa1 from '../assets/images/Cast Pushpa/Pushpa (1).webp';
import Pushpa2 from '../assets/images/Cast Pushpa/Pushpa (2).webp';
import Pushpa3 from '../assets/images/Cast Pushpa/Pushpa (3).webp';
import Pushpa5 from '../assets/images/Cast Pushpa/Pushpa (5).webp';

import BladeRunner1 from '../assets/images/Cast BladeRunner/BladeRunner (1).jfif';
import BladeRunner2 from '../assets/images/Cast BladeRunner/BladeRunner (2).jfif';
import BladeRunner3 from '../assets/images/Cast BladeRunner/BladeRunner (3).jfif';
import BladeRunner4 from '../assets/images/Cast BladeRunner/BladeRunner (4).jfif';
import BladeRunner5 from '../assets/images/Cast BladeRunner/BladeRunner (5).jfif';
import BladeRunner6 from '../assets/images/Cast BladeRunner/BladeRunner (6).jfif';
import BladeRunner7 from '../assets/images/Cast BladeRunner/BladeRunner (7).jfif';
import BladeRunner8 from '../assets/images/Cast BladeRunner/BladeRunner (8).jfif';

import Money1 from '../assets/images/Cast Money/Money (1).jfif';
import Money2 from '../assets/images/Cast Money/Money (2).jfif';
import Money3 from '../assets/images/Cast Money/Money (3).jfif';
import Money4 from '../assets/images/Cast Money/Money (4).jfif';
import Money5 from '../assets/images/Cast Money/Money (5).jfif';
import Money6 from '../assets/images/Cast Money/Money (6).jfif';
import Money7 from '../assets/images/Cast Money/Money (7).jfif';
import Money8 from '../assets/images/Cast Money/Money (8).jfif';
import Money9 from '../assets/images/Cast Money/Money (9).jfif';
import Money10 from '../assets/images/Cast Money/Money (10).jfif';
import Money11 from '../assets/images/Cast Money/Money (11).jfif';
import Money12 from '../assets/images/Cast Money/Money (12).jfif';

import Lucifer1 from '../assets/images/Cast Lucifer/Lucifer (1).jfif';
import Lucifer2 from '../assets/images/Cast Lucifer/Lucifer (2).jfif';
import Lucifer3 from '../assets/images/Cast Lucifer/Lucifer (3).jfif';
import Lucifer4 from '../assets/images/Cast Lucifer/Lucifer (4).jfif';
import Lucifer5 from '../assets/images/Cast Lucifer/Lucifer (5).jfif';
import Lucifer6 from '../assets/images/Cast Lucifer/Lucifer (6).jfif';
import Lucifer7 from '../assets/images/Cast Lucifer/Lucifer (7).jfif';
import Lucifer8 from '../assets/images/Cast Lucifer/Lucifer (8).jfif';
import Lucifer9 from '../assets/images/Cast Lucifer/Lucifer (9).jfif';
import Lucifer10 from '../assets/images/Cast Lucifer/Lucifer (10).jfif';
import Lucifer11 from '../assets/images/Cast Lucifer/Lucifer (11).jfif';
import Lucifer12 from '../assets/images/Cast Lucifer/Lucifer (12).jfif';
// import Lucifer13 from '../assets/images/Cast Lucifer/Lucifer (13).jfif';

import T18991 from '../assets/images/Cast T1899/T1899 (1).jfif';
import T18992 from '../assets/images/Cast T1899/T1899 (2).jfif';
import T18993 from '../assets/images/Cast T1899/T1899 (3).jfif';
import T18994 from '../assets/images/Cast T1899/T1899 (4).jfif';
import T18995 from '../assets/images/Cast T1899/T1899 (5).jfif';
import T18996 from '../assets/images/Cast T1899/T1899 (6).jfif';
import T18997 from '../assets/images/Cast T1899/T1899 (7).jfif';
import T18998 from '../assets/images/Cast T1899/T1899 (8).jfif';
import T18999 from '../assets/images/Cast T1899/T1899 (9).jfif';
import T189910 from '../assets/images/Cast T1899/T1899 (10).jfif';
import T189911 from '../assets/images/Cast T1899/T1899 (11).jfif';
import T189912 from '../assets/images/Cast T1899/T1899 (12).jfif';
import T189913 from '../assets/images/Cast T1899/T1899 (13).jfif';

import DarkMatter1 from '../assets/images/Cast DarkMatter/DarkMatter (1).jfif';
import DarkMatter2 from '../assets/images/Cast DarkMatter/DarkMatter (2).jfif';
import DarkMatter3 from '../assets/images/Cast DarkMatter/DarkMatter (3).jfif';
import DarkMatter4 from '../assets/images/Cast DarkMatter/DarkMatter (4).jfif';
import DarkMatter5 from '../assets/images/Cast DarkMatter/DarkMatter (5).jfif';
import DarkMatter6 from '../assets/images/Cast DarkMatter/DarkMatter (6).jfif';

import A21 from '../assets/images/Cast A2/A2 (1).jfif';
import A22 from '../assets/images/Cast A2/A2 (2).jfif';
import A23 from '../assets/images/Cast A2/A2 (3).jfif';
import A24 from '../assets/images/Cast A2/A2 (4).jfif';
import A25 from '../assets/images/Cast A2/A2 (5).jfif';
import A26 from '../assets/images/Cast A2/A2 (6).jfif';
// import A27 from '../assets/images/Cast A2/A2 (7).jfif';
// 
import small_img2 from '../assets/images/watch.png';
import small_img3 from '../assets/images/Season.png';
import small_img1 from '../assets/images/duration.png';
import star4 from '../assets/images/star4.png';
import starhalf from '../assets/images/star4.5.png';
import star1 from '../assets/images/STAR1.png';
import star2 from '../assets/images/STAR2.png';
import star3 from '../assets/images/STAR3.png';
import star5 from '../assets/images/STAR5.png';


import slide10 from '../assets/images/slide10.png';
import slide11 from '../assets/images/slide11.png';
import slide12 from '../assets/images/slide12.png';
import slide13 from '../assets/images/slide13.png';
import slide14 from '../assets/images/slide14.png';
import slide15 from '../assets/images/slide15.png';
import slide16 from '../assets/images/slide16.png';
import slide17 from '../assets/images/slide17.png';
import slide18 from '../assets/images/slide18.png';
import slide19 from '../assets/images/slide19.png';
import slide20 from '../assets/images/must1.jpg';
import slide21 from '../assets/images/slide21.png';
import slide22 from '../assets/images/slide22.png';
import slide23 from '../assets/images/slide23.png';

import slide29 from '../assets/images/slide29.png';
import slide30 from '../assets/images/slide30.png';
import slide31 from '../assets/images/slide31.png';
import slide32 from '../assets/images/slide32.png';
import slide33 from '../assets/images/slide33.png';
import slide34 from '../assets/images/slide34.png';
import slide35 from '../assets/images/slide35.png';
import slide36 from '../assets/images/slide36.png';
import slide37 from '../assets/images/slide37.png';
import slide38 from '../assets/images/slide38.png';
import slide39 from '../assets/images/slide39.png';
import slide40 from '../assets/images/slide40.png';



// Cover
import DarkCover from '../assets/images/Cover/DarkCover.jpeg'
import T1899Cover from '../assets/images/Cover/T1899Cover.jpg'
import StrangerCover from '../assets/images/Cover/StrangerCover.jpg'
import MorbiusCover from '../assets/images/Cover/MorbiusCover.jpeg'
import BhaiJannCover from '../assets/images/Cover/BhaiJannCover.jpg'
import SoorajCover from '../assets/images/Cover/SoorajCover.jpg'
import PathanCover from '../assets/images/Cover/PathanCover.jpg'
import AntManCover from '../assets/images/Cover/AntManCover.jpg'
import A2Cover from '../assets/images/Cover/A2Cover.jpg'
import Munjya1 from '../assets/images/Cover/Munjya1 (1).png'
import IronMancover from '../assets/images/Cover/IronMan.jpg'

// Series
// import T1899EP1 from '../assets/images/T1899E/T1899-Ep1.mkv';
const Dark1 = 'http://bingewatchback.infinityfreeapp.com/wp-content/uploads/2025/01/Dark1.mp4';

// Movie Trailer
const IronMan = 'https://res.cloudinary.com/dbhqc7m0s/video/upload/v1736339324/Iron_Man_-_Trailer_HD_lnm7iu.mp4'
const video1 = 'https://res.cloudinary.com/dbhqc7m0s/video/upload/v1736339338/Trailer2_jpzncw.mp4'
const video2 = 'https://res.cloudinary.com/dbhqc7m0s/video/upload/v1736339335/Trailer1_ix59pm.mp4'
const slideCarousleVideo1 = 'https://res.cloudinary.com/dbhqc7m0s/video/upload/v1736339324/Iron_Man_-_Trailer_HD_lnm7iu.mp4'
const slideCarousleVideo2 = 'https://res.cloudinary.com/dbhqc7m0s/video/upload/v1736339338/Trailer2_jpzncw.mp4'
const slideCarousleVideo3 = 'https://res.cloudinary.com/dbhqc7m0s/video/upload/v1736339335/Trailer1_ix59pm.mp4'
const Pathan = 'https://res.cloudinary.com/dbhqc7m0s/video/upload/v1736339327/Pathan_bbgdpd.mp4'
const MORBIUS = 'https://res.cloudinary.com/dbhqc7m0s/video/upload/v1736339319/MORBIUS_b6icke.mp4'
const AntMan = 'https://res.cloudinary.com/dbhqc7m0s/video/upload/v1736337429/AntMan_ufbbrb.mp4'
const Sooraj = 'https://res.cloudinary.com/dbhqc7m0s/video/upload/v1736339328/Sooraj_fmcawv.mp4'
const BhaiJann = 'https://res.cloudinary.com/dbhqc7m0s/video/upload/v1736337428/BhaiJann_bpjeri.mp4'
const Adipurush = 'https://res.cloudinary.com/dbhqc7m0s/video/upload/v1736337428/Adipurush_tles5g.mp4'
const SunCity = 'https://res.cloudinary.com/dbhqc7m0s/video/upload/v1736339329/SunCity_gxvln5.mp4'
const Tomorrow = 'https://res.cloudinary.com/dbhqc7m0s/video/upload/v1736339333/Tomorrow_j5ocom.mp4'
const MissFire = 'https://res.cloudinary.com/dbhqc7m0s/video/upload/v1736339316/MissFire_h8is4x.mp4'
const BladeRunner = 'https://res.cloudinary.com/dbhqc7m0s/video/upload/v1736337428/BladeRunner_qechve.mp4'
const GrayMan = 'https://res.cloudinary.com/dbhqc7m0s/video/upload/v1736339331/T1899_ceh76s.mp4'
const MoneyHeist = 'https://res.cloudinary.com/dbhqc7m0s/video/upload/v1736339319/MoneyHeist_lev8dr.mp4'
const Lucifer = 'https://res.cloudinary.com/dbhqc7m0s/video/upload/v1736339314/Lucifer_ouztyy.mp4'
const PeakyBlinders = 'https://res.cloudinary.com/dbhqc7m0s/video/upload/v1736339328/PeakyBlinders_i0lsx0.mp4'
const HighTown = 'https://res.cloudinary.com/dbhqc7m0s/video/upload/v1736339310/HighTown_lqelac.mp4'
const Breath = 'https://res.cloudinary.com/dbhqc7m0s/video/upload/v1736337429/Breath_cnwfh7.mp4'
const Mirzapur = 'https://res.cloudinary.com/dbhqc7m0s/video/upload/v1736339317/Mirzapur_ualkpj.mp4'
const Duranga = 'https://res.cloudinary.com/dbhqc7m0s/video/upload/v1736339308/Duranga_ibvxav.mp4'
const Mai = 'https://res.cloudinary.com/dbhqc7m0s/video/upload/v1736339316/Mai_ydtnc8.mp4'
const Foreigner = 'https://res.cloudinary.com/dbhqc7m0s/video/upload/v1736339308/Forigner_xqcki6.mp4'
const Pushpa = 'https://res.cloudinary.com/dbhqc7m0s/video/upload/v1736339308/Forigner_xqcki6.mp4'

// Video
const DarkMatter = 'https://res.cloudinary.com/dbhqc7m0s/video/upload/v1736337442/DarkMatter_yko62j.mp4'
const A2 = 'https://res.cloudinary.com/dbhqc7m0s/video/upload/v1736337442/A2_hezzw8.mp4'
const Munjya = 'https://res.cloudinary.com/dbhqc7m0s/video/upload/v1736339375/Munjya_qykf4r.mp4'
const sliders = [
    {
        id: 3,
        title: 'Trending Now',
        sliderName: 'swiper-container3',
        slideNum: '5',
        slides: [
            { duration: '1h 30min', video:MORBIUS, Movie_Name:"Morbius", views : '2K', small_img1: small_img1, small_img2: small_img2, image: slide10, link: '#!' },
            { duration: '1h 57min', video:BhaiJann, Movie_Name:"Kisi Ka Bhai Kisi Ki Jaan", views : '1.8K', small_img1: small_img1, small_img2: small_img2, image: slide11, link: '#!' },
            { duration: '2h 10min', video:Sooraj, Movie_Name:"Sooraj Pe Mangal Bhari", views : '3K', small_img1: small_img1, small_img2: small_img2, image: slide12, link: '#!' },
            { duration: '2h 20min', video:Pathan, Movie_Name:"Pathan", views : '5K', small_img1: small_img1, small_img2: small_img2, image: slide13, link: '#!' },
            { duration: '1h 42min', video:AntMan, Movie_Name:"Ant-Man", views : '15K', small_img1: small_img1, small_img2: small_img2,  image: slide14, link: '#!' },
            { duration: '1h 30min', video:MORBIUS, Movie_Name:"Morbius", views : '2K', small_img1: small_img1, small_img2: small_img2, image: slide10, link: '#!' },
            { duration: '1h 57min', video:BhaiJann, Movie_Name:"Kisi Ka Bhai Kisi Ki Jaan", views : '1.8K', small_img1: small_img1, small_img2: small_img2, image: slide11, link: '#!' },
            { duration: '2h 10min', video:Sooraj, Movie_Name:"Sooraj Pe Mangal Bhari", views : '3K', small_img1: small_img1, small_img2: small_img2, image: slide12, link: '#!' },
            { duration: '2h 20min', video:Pathan, Movie_Name:"Pathan", views : '5K', small_img1: small_img1, small_img2: small_img2, image: slide13, link: '#!' },
            { duration: '1h 42min', video:AntMan, Movie_Name:"Ant-Man", views : '15K', small_img1: small_img1, small_img2: small_img2,  image: slide14, link: '#!' },
        ],
    },
    {
        id: 4,
        title: 'New Releases',
        sliderName: 'swiper-container4',
        slideNum: '5',
        slides: [
            { date: 'Released at 14 April 2023',  video:Adipurush, Movie_Name:"Adipurush",  image: slide15, link: '#!' },
            { date: 'Released at 22 April 2023', video:Foreigner, Movie_Name:"The Foreigner", image: slide16, link: '#!' },
            { date: 'Released at 13 April 2023', video:SunCity, Movie_Name:"Sun City", image: slide17, link: '#!' },
            { date: 'Released at 19 April 2023', video:Tomorrow, Movie_Name:"The Tomorrow War", image: slide18, link: '#!' },
            { date: 'Released at 11 April 2023', video:MissFire, Movie_Name:"MissFire", image: slide19, link: '#!' },
            { date: 'Released at 14 April 2023', video:Adipurush, Movie_Name:"Adipurush",  image: slide15, link: '#!' },
            { date: 'Released at 22 April 2023', video:Foreigner, Movie_Name:"The Foreigner", image: slide16, link: '#!' },
            { date: 'Released at 13 April 2023', video:SunCity, Movie_Name:"Sun City", image: slide17, link: '#!' },
            { date: 'Released at 19 April 2023', video:Tomorrow, Movie_Name:"The Tomorrow War", image: slide18, link: '#!' },
            { date: 'Released at 11 April 2023', video:MissFire, Movie_Name:"MissFire", image: slide19, link: '#!' },
        ],
    },
    {
        id: 5,
        title: 'Must - Watch Movies',
        sliderName: 'swiper-container5',
        slideNum: '4',
        slides: [
            { duration: '1h 57min', views : '20K', video:slideCarousleVideo3, Movie_Name:"Kantara", small_img1: small_img1, rate: starhalf, image: slide21, link: '#!' },
            { duration: '2h 30min', views : '20K', video:Pushpa, Movie_Name:"Munjya", small_img1: small_img1, rate: star4,  image: slide20, link: '#!' },
            { duration: '1h 42min', views : '5K', video:BladeRunner, Movie_Name:"Blade Runner 2049", small_img1: small_img1, rate: star4, image: slide22, link: '#!' },
            { duration: '2h 50min', views : '1K', video:Adipurush, Movie_Name:"Adipurush", small_img1: small_img1, rate: star4, image: slide23, link: '#!' },
            { duration: '1h 57min', views : '20K', video:slideCarousleVideo3, Movie_Name:"Kantara", small_img1: small_img1, rate: starhalf, image: slide21, link: '#!' },
            { duration: '2h 30min', views : '20K', video:Pushpa, Movie_Name:"Munjya", small_img1: small_img1, rate: star4,  image: slide20, link: '#!' },
            { duration: '1h 42min', views : '5K', video:BladeRunner, Movie_Name:"Blade Runner 2049", small_img1: small_img1, rate: star4, image: slide22, link: '#!' },
            { duration: '2h 50min', views : '1K',  video:Adipurush, Movie_Name:"Adipurush", small_img1: small_img1, rate: star4, image: slide23, link: '#!' },
        ],
    },
    {
        id: 8,
        title: 'Trending Shows Now',
        sliderName: 'swiper-container8',
        slideNum: '4',
        slides: [
            { duration: '8h 30min', views : '1 Season', video:DarkMatter, Movie_Name:"Dark Matter", small_img1: small_img1, small_img2: small_img3, image: slide40, link: '#!' },
            { duration: '12h 57min', views : '5 Season', video:MoneyHeist, Movie_Name:"Money Heist", small_img1: small_img1, small_img2: small_img3, image: slide29, link: '#!' },
            { duration: '14h 10min', views : '3 Season', video:Lucifer, Movie_Name:"Lucifer", small_img1: small_img1, small_img2: small_img3, image: slide30, link: '#!' },
            { duration: '7h 20min', views : '1 Season', video:GrayMan, Movie_Name:"1899", small_img1: small_img1, small_img2: small_img3, image: slide31, link: '#!' },
            { duration: '8h 30min', views : '1 Season', video:DarkMatter, Movie_Name:"Dark Matter", small_img1: small_img1, small_img2: small_img3, image: slide40, link: '#!' },            
            { duration: '12h 57min', views : '5 Season', video:MoneyHeist, Movie_Name:"Money Heist", small_img1: small_img1, small_img2: small_img3, image: slide29, link: '#!' },
            { duration: '14h 10min', views : '3 Season', video:Lucifer, Movie_Name:"Lucifer", small_img1: small_img1, small_img2: small_img3, image: slide30, link: '#!' },
            { duration: '7h 20min', views : '1 Season', video:GrayMan, Movie_Name:"1899", small_img1: small_img1, small_img2: small_img3, image: slide31, link: '#!' },
        ],
    },
    {
        id: 9,
        title: 'New Released Shows',
        sliderName: 'swiper-container9',
        slideNum: '4',
        slides: [
            { duration: '12h 30min', views : '4 Season',  video:HighTown, Movie_Name:"HighTown", small_img1: small_img1, small_img2: small_img3, image: slide32, link: '#!' },
            { duration: '7h 57min', views : '2 Season',   video:Mirzapur, Movie_Name:"Mirzapur", small_img1: small_img1, small_img2: small_img3, image: slide33, link: '#!' },
            { duration: '8h 10min', views : '4 Season',   video:Breath, Movie_Name:"Breath In to The Shadows", small_img1: small_img1, small_img2: small_img3, image: slide34, link: '#!' },
            { duration: '10h 20min', views : '3 Season',  video:PeakyBlinders, Movie_Name:"Peaky Blinders", small_img1: small_img1, small_img2: small_img3, image: slide35, link: '#!' },
            { duration: '12h 30min', views : '5 Season',  video:HighTown, Movie_Name:"HighTown", small_img1: small_img1, small_img2: small_img3, image: slide32, link: '#!' },
            { duration: '7h 57min', views : '2 Season',   video:Mirzapur, Movie_Name:"Mirzapur", small_img1: small_img1, small_img2: small_img3, image: slide33, link: '#!' },
            { duration: '8h 10min', views : '4 Season',   video:Breath, Movie_Name:"Breath In to The Shadows", small_img1: small_img1, small_img2: small_img3, image: slide34, link: '#!' },
            { duration: '10h 20min', views : '3 Season',  video:PeakyBlinders, Movie_Name:"Peaky Blinders", small_img1: small_img1, small_img2: small_img3, image: slide35, link: '#!' },
        ],
    },
    {
        id: 10,
        title: 'Must - Watch Shows',
        sliderName: 'swiper-container10',
        slideNum: '4',
        slides: [
            { duration: '11h 57min', views : '20K', video:Duranga, Movie_Name:"Duranga", small_img1: small_img1, rate: starhalf, image: slide36, link: '#!' },
            { duration: '12h 57min', views : '20K', video:MoneyHeist, Movie_Name:"Money Heist",  small_img1: small_img1, rate: star4,  image: slide37, link: '#!' },
            { duration: '8h 42min', views : '5K',   video:Mai, Movie_Name:"Mai",  small_img1: small_img1, rate: star4, image: slide38, link: '#!' },
            { duration: '8h 30min', views : '1K',   video:slideCarousleVideo2, Movie_Name:"Stranger Things", small_img1: small_img1, rate: star4, image: slide39, link: '#!' },
            { duration: '11h 57min', views : '20K', video:Duranga, Movie_Name:"Duranga", small_img1: small_img1, rate: starhalf, image: slide36, link: '#!' },
            { duration: '12h 57min', views : '20K', video:MoneyHeist, Movie_Name:"Money Heist",  small_img1: small_img1, rate: star4,  image: slide37, link: '#!' },
            { duration: '8h 42min', views : '5K',   video:Mai, Movie_Name:"Mai",  small_img1: small_img1, rate: star4, image: slide38, link: '#!' },
            { duration: '8h 30min', views : '1K',   video:slideCarousleVideo1, Movie_Name:"Stranger Things", small_img1: small_img1, rate: star4, image: slide39, link: '#!' },
        ],
    },
];

const MovieOpenPage = () => {

    const moviesSliders = sliders.filter(slider => slider.sliderName === 'swiper-container1' || slider.sliderName === 'swiper-container2' || slider.sliderName === 'swiper-container3' || slider.sliderName === 'swiper-container4' || slider.sliderName === 'swiper-container5');
    const showsSliders = sliders.filter(slider => slider.sliderName === 'swiper-container6' || slider.sliderName === 'swiper-container7');


    const { title , Movie_Name } = useParams();
    const videos = [
        // Movies Data
        { 
            img:IronMancover,
            src: IronMan, 
            title: 'Iron Man', 
            description: 'When Tony Stark, an industrialist, is captured, he constructs a high-tech armoured suit to escape. Once he manages to escape, he decides to use his suit to fight against evil forces to save the world.', 
            reviews: [
                { author: 'Aniket Roy', country: 'India', review: 'This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it.' },
                { author: 'Jhon Doe', country: 'USA', review: 'When it comes to ranking the Marvel superhero(live action) films, Iron Man is for me up there with the better ones. It looks fabulous, the whole film is very slickly made with top-notch special effects(which look like time and effort was really put into it), awesome-looking futuristic gadgets and Iron Man`s suit will be a guaranteed delight to anybody who is familiar or loves anything to do with the superhero. There is a pulsating soundtrack that adds much to the tension of the first half of the story and the enormously fun action sequences, which are exciting and tense with expertly choreography. ' }
            ],
            releasedYear: '2008',
            languages: ['English', 'Hindi'],
            ratings: { imdb: 8.0, BingeWatch: 4.5 },
            genres: ['Action', 'Marvel Universe'],
            director: 'Jon Favreau',
            music: 'Ramin Djawadi',
            castImages: [IronMan2, IronMan1, IronMan3, IronMan4, IronMan5, IronMan6],
            musicImage: IronMan6,
            directorImage: IronMan5,
            MovieOrShows : 'Movie',
            country : 'USA',
        },
        // 
        { 
            src: video2, 
            title: 'Kantara', 
            description: 'A fiery young man clashes with an unflinching forest officer in a south Indian village where spirituality, fate and folklore rule the lands.', 
            reviews: [
                { author: 'Aniket Roy', country: 'India', review: 'This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it.' },
                { author: 'Swaraj', country: 'India', review: 'A restless king promises his lands to the local tribals in exchange of a stone (Panjurli, a deity of Keradi Village) wherein he finds solace and peace of mind.' }
            ],
            releasedYear: '2022',
            languages: ['English', 'Hindi', 'Tamil','Telegu','Kannada'],
            ratings: { imdb: 8.5, BingeWatch: 4.8 },
            genres: ['Action', 'Adventure'],
            director: 'Rishbh Sheety',
            music: 'B. Ajaneesh Loknath',
            castImages: [Kantara1, Kantara2, Kantara3, Kantara4, Kantara5, Kantara6, Kantara7, Kantara8],
            musicImage: Kantara1,
            directorImage: Kantara3,
            MovieOrShows : 'Movie',
            country : 'India',
        },
        // 
        { 
            img:StrangerCover,
            src: video1, 
            title: 'Stranger Things', 
            description: 'When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.', 
            reviews: [
                { author: 'Sadqeu Bim', country: 'France', review: "Stranger Things absolutely lives up to all the hype!" },
                { author: 'Ron Ray', country: 'USA', review: "Stranger Things is absolutely as good as everyone says it is." }
            ],
            releasedYear: '2016',
            languages: ['English', 'Spanish', 'French','Hindi', 'Tamil','Telegu','Kannada'],
            ratings: { imdb: 9.0, BingeWatch: 5.0 },
            genres: ['Sci-Fi', 'Thriller'],
            director: 'The Duffer Brothers',
            music: 'Nat Fuller',
            castImages: [Stranger1, Stranger2, Stranger3, Stranger4, Stranger5, Stranger6, Stranger7, Stranger8, Stranger9 ,Stranger10, Stranger11],
            musicImage: Stranger13,
            directorImage: Stranger12,
            MovieOrShows : 'Show',
            country : 'USA',
            seasons: [
                {
                    name: 'Season 1',
                    episodes: [
                        { episodeNumber: 1, video:video1, title: 'Chapter One : The Vanishing of Will Byers', description: 'On his way from a friend’s house, young Will sees something terrifying . Nearby, a sinister secret lurks in the depths of a government lab.', length: '50 min' },
                        { episodeNumber: 2, video:video1, title: 'Chapter Two: The Weirdo on Maple Street', description: 'Lucas, Mike and Dustin try to talk to the girl they found in the woods. Hopper questions an anxious Joyce about an unsettling phone call.', length: '47 min' },
                        { episodeNumber: 3, video:video1, title: 'Chapter Three: Holly, Jolly', description: "An increasingly concerned Nancy looks for Barb and finds out what Jonathan's been up to. Joyce is convinced Will is trying to talk to her.", length: '52 min' },
                        { episodeNumber: 4, video:video1, title: 'Chapter Four: The Body', description: 'Refusing to believe Will is dead, Joyce tries to connect with her son. The boys give Eleven a makeover..', length: '51 min' },
                        { episodeNumber: 5, video:video1, title: 'Chapter Five: The Flea and the Acrobat', description: 'Hopper breaks into the lab while Nancy and Jonathan confront the force that took Will. The boys ask Mr. Clarke how to travel to another dimension.', length: '53 min' },
                        { episodeNumber: 6, video:video1, title: 'Chapter Six: The Monster', description: "Hopper and Joyce find the truth about the lab's experiments. After their fight, the boys look for the missing Eleven.", length: '42 min' },
                        { episodeNumber: 7, video:video1, title: 'Chapter Seven: The Bathtub', description: 'The government comes searching for Eleven. Eleven looks for Will and Barb in the Upside Down.', length: '42 min' },
                        { episodeNumber: 8, video:video1, title: 'Chapter Eight: The Upside Down', description: 'Joyce and Hopper are taken in for questioning. Nancy and Jonathan prepare to fight the monster and save Will.', length: '42 min' },
                    ]
                },
                {
                    name: 'Season 2',
                    episodes: [
                        { episodeNumber: 1, video:video1, title: 'Chapter One: MADMAX', description: 'As the town preps for Halloween, a high-scoring rival shakes things up at the arcade, and a skeptical Hopper inspects a field of rotting pumpkins.', length: '50 min' },
                        { episodeNumber: 2, video:video1, title: 'Chapter Two: Trick or Treat, Freak', description: "After Will sees something terrible on trick-or-treat night, Mike wonders whether Eleven's still out there. Nancy wrestles with the truth about Barb.", length: '47 min' },
                        { episodeNumber: 3, video:video1, title: 'Chapter Three: The Pollywog', description: "An increasingly concerned Nancy looks for Barb and finds out what Jonathan's been up to. Joyce is convinced Will is trying to talk to her.", length: '52 min' },
                        { episodeNumber: 4, video:video1, title: 'Chapter Four: Will the Wise', description: 'Refusing to believe Will is dead, Joyce tries to connect with her son. The boys give Eleven a makeover..', length: '51 min' },
                        { episodeNumber: 5, video:video1, title: ' Chapter Five: Dig Dug', description: 'Hopper breaks into the lab while Nancy and Jonathan confront the force that took Will. The boys ask Mr. Clarke how to travel to another dimension.', length: '53 min' },
                    ]
                },
                {
                    name: 'Season 3',
                    episodes: [
                        { episodeNumber: 1, video:video1, title: 'Chapter One : The Vanishing of Will Byers', description: 'On his way from a friend’s house, young Will sees something terrifying . Nearby, a sinister secret lurks in the depths of a government lab.', length: '50 min' },
                        { episodeNumber: 2, video:video1, title: 'Chapter Two: The Weirdo on Maple Street', description: 'Lucas, Mike and Dustin try to talk to the girl they found in the woods. Hopper questions an anxious Joyce about an unsettling phone call.', length: '47 min' },
                        { episodeNumber: 3, video:video1, title: 'Chapter Three: Holly, Jolly', description: "An increasingly concerned Nancy looks for Barb and finds out what Jonathan's been up to. Joyce is convinced Will is trying to talk to her.", length: '52 min' },
                        { episodeNumber: 4, video:video1, title: 'Chapter Four: The Body', description: 'Refusing to believe Will is dead, Joyce tries to connect with her son. The boys give Eleven a makeover..', length: '51 min' },
                        { episodeNumber: 5, video:video1, title: 'Chapter Five: The Flea and the Acrobat', description: 'Hopper breaks into the lab while Nancy and Jonathan confront the force that took Will. The boys ask Mr. Clarke how to travel to another dimension.', length: '53 min' },
                        { episodeNumber: 6, video:video1, title: 'Chapter Six: The Monster', description: "Hopper and Joyce find the truth about the lab's experiments. After their fight, the boys look for the missing Eleven.", length: '42 min' },
                        { episodeNumber: 7, video:video1, title: 'Chapter Seven: The Bathtub', description: 'The government comes searching for Eleven. Eleven looks for Will and Barb in the Upside Down.', length: '42 min' },
                        { episodeNumber: 8, video:video1, title: 'Chapter Eight: The Upside Down', description: 'Joyce and Hopper are taken in for questioning. Nancy and Jonathan prepare to fight the monster and save Will.', length: '42 min' },
                    ]
                },
                {
                    name: 'Season 4',
                    episodes: [
                        { episodeNumber: 1, video:video1, title: 'Chapter One : The Vanishing of Will Byers', description: 'On his way from a friend’s house, young Will sees something terrifying . Nearby, a sinister secret lurks in the depths of a government lab.', length: '50 min' },
                        { episodeNumber: 2, video:video1, title: 'Chapter Two: The Weirdo on Maple Street', description: 'Lucas, Mike and Dustin try to talk to the girl they found in the woods. Hopper questions an anxious Joyce about an unsettling phone call.', length: '47 min' },
                        { episodeNumber: 3, video:video1, title: 'Chapter Three: Holly, Jolly', description: "An increasingly concerned Nancy looks for Barb and finds out what Jonathan's been up to. Joyce is convinced Will is trying to talk to her.", length: '52 min' },
                        { episodeNumber: 4, video:video1, title: 'Chapter Four: The Body', description: 'Refusing to believe Will is dead, Joyce tries to connect with her son. The boys give Eleven a makeover..', length: '51 min' },
                        { episodeNumber: 5, video:video1, title: 'Chapter Five: The Flea and the Acrobat', description: 'Hopper breaks into the lab while Nancy and Jonathan confront the force that took Will. The boys ask Mr. Clarke how to travel to another dimension.', length: '53 min' },
                        { episodeNumber: 6, video:video1, title: 'Chapter Six: The Monster', description: "Hopper and Joyce find the truth about the lab's experiments. After their fight, the boys look for the missing Eleven.", length: '42 min' },
                        { episodeNumber: 7, video:video1, title: 'Chapter Seven: The Bathtub', description: 'The government comes searching for Eleven. Eleven looks for Will and Barb in the Upside Down.', length: '42 min' },
                        { episodeNumber: 8, video:video1, title: 'Chapter Eight: The Upside Down', description: 'Joyce and Hopper are taken in for questioning. Nancy and Jonathan prepare to fight the monster and save Will.', length: '42 min' },
                    ]
                },
            ]
        },
        // 
        { 
            img:MorbiusCover,
            src: MORBIUS, 
            title: 'Morbius', 
            description: 'Determined to cure the disease that has plagued him his entire life, Morbius conducts a drastic experiment, which bears unforeseen consequences.', 
            reviews: [
                { author: 'FeastMode', country: 'France', review: "I'm BEGGING you, please make Rated R movies" },
                { author: 'kokokiladze', country: 'USA', review: "Solid 6. Will be better if they make Rated R but not bad, leto was good." }
            ],
            releasedYear: '2022',
            languages: ['English', 'Spanish', 'French','Hindi', 'Tamil','Telegu','Kannada'],
            ratings: { imdb: 2.3, BingeWatch: 1.0 },
            genres: ['Sci-Fi', 'Thriller'],
            director: 'Daniel Espinosa',
            music: 'Pietro Scalia',
            castImages: [Morbius1, Morbius2, Morbius3, Morbius4, Morbius5, Morbius6,],
            musicImage: Morbius3,
            directorImage: Morbius2,
           MovieOrShows : 'Movie',
            country : 'USA',
        },
        // 
        { 
            img:BhaiJannCover,
            src: BhaiJann, 
            title: 'Kisi Ka Bhai Kisi Ki Jaan', 
            description: 'Bhaijaan, the eldest brother of three siblings, refuses to get married to maintain harmony in his family. However, complications arise after his brothers conspire for him to fall in love.', 
            reviews: [
                { author: 'Raj', country: 'India', review: "This is one of the best movies ever." },
                { author: 'Ajay Chunara', country: 'India', review: "This movie will give you headache in your liver and heartattack in your brain. Forget the logic, i want sefloon bhai to go back in time and slap Newton for discovering gravity, 'cause here he nothing but rock bed with it. And my god bhai's rabid fan base. They would watch such films 4-5 times and but won't donate that money to charity." }
            ],
            releasedYear: '2020',
            languages: ['Hindi'],
            ratings: { imdb: 2.3, BingeWatch: 1.0 },
            genres: ['Family', 'Drama'],
            director: 'Farhad Samji',
            music: 'Ravi Basrur',
            castImages: [BhaiJan1, BhaiJan2, BhaiJan3, BhaiJan4, BhaiJan5, BhaiJan6,BhaiJan7,BhaiJan8],
            musicImage: BhaiJan10,
            directorImage: BhaiJan9,
            MovieOrShows : 'Movie',
            country : 'India',
        },
        // 
        { 
            img:SoorajCover,
            src: Sooraj, 
            title: 'Sooraj Pe Mangal Bhari', 
            description: 'Suraj, an eligible bachelor, finds himself getting rejected by the families of many potential brides. Soon, he learns that a wedding detective named Madhu Mangal Rane is the reason.', 
            reviews: [
                { author: 'nadkarnisumeet', country: 'India', review: "Okey Dokey rom com" },
                { author: 'ridhambhuva007', country: 'India', review: "One Time Watch. Decent." }
            ],
            releasedYear: '2020',
            languages: ['Hindi'],
            ratings: { imdb: 2.3, BingeWatch: 1.0 },
            genres: ['Family', 'Rom-Com'],
            director: 'Abhishek Sharma',
            music: 'Javed-Mohsin,',
            castImages: [Sooraj1, Sooraj2, Sooraj3, Sooraj4, Sooraj5, Sooraj8],
            musicImage: Sooraj7,
            directorImage: Sooraj6,
            MovieOrShows : 'Movie',
            country : 'India',
            PaidOrFree: 'Free',
        },
        // 
        { 
            img:PathanCover,
            src: Pathan, 
            title: 'Pathan', 
            description: 'A Pakistani general hires a private terror outfit to conduct attacks in India while Pathaan, an Indian secret agent, is on a mission to form a special unit.', 
            reviews: [
                { author: 'Kulin33', country: 'India', review: "overhype" },
                { author: 'ReelShahid', country: 'India', review: "Flawed at times but mostly entertaining with some great action sequences" }
            ],
            releasedYear: '2023',
            languages: ['Hindi', 'Tamil' , 'Telegu'],
            ratings: { imdb: 2.3, BingeWatch: 1.0 },
            genres: ['Action', 'Spy-Thriller'],
            director: 'Siddharth Anand',
            music: 'Vishal-Shekhar,',
            castImages: [Pathan6, Pathan2, Pathan3, Pathan1, Pathan7],
            musicImage: Pathan5,
            directorImage: Pathan4,
           MovieOrShows : 'Movie',
            country : 'India',
        },
        // 
        { 
            img:AntManCover,
            src: AntMan, 
            title: 'Ant-Man', 
            description: 'Scott, a master thief, gains the ability to shrink in scale with the help of a futuristic suit. Now he must rise to the occasion of his superhero status and protect his secret from unsavoury elements.', 
            reviews: [
                { author: 'Dana_Sibilsky', country: 'USA', review: "Better than I thought it would be" },
                { author: 'TheLittleSongbird', country: 'USA', review: "Minor Marvel, but still good Marvel" }
            ],
            releasedYear: '2015',
            languages: ['English','Hindi'],
            ratings: { imdb: 2.3, BingeWatch: 1.0 },
            genres: ['SuperHero', 'Sci-Fi'],
            director: 'Peyton Reed',
            music: 'Christophe Beck',
            castImages: [AntMan6, AntMan2, AntMan3, AntMan4, AntMan5, AntMan1],
            musicImage: AntMan8,
            directorImage: AntMan7,
           MovieOrShows : 'Movie',
            country : 'USA',
        },
        // 
        { 
            src: Adipurush, 
            title: 'Adipurush', 
            description: 'Raghav, the prince of the Ikshvaku dynasty from Kosala, tries to rescue his wife, Janaki, from the demon king Lankesh.', 
            reviews: [
                { author: 'Biswas_', country: 'India', review: "Pathetic Ramayan parody" },
                { author: 'bhaichunglepcha-76894', country: 'India', review: "Absolutely Trash Except That 'Ram Siya Ram' Song" }
            ],
            releasedYear: '2023',
            languages: ['Hindi'],
            ratings: { imdb: 2.3, BingeWatch: 1.0 },
            genres: ['Mythology', 'Sci-Fi'],
            director: 'Om Raut',
            music: 'Ajay Atul',
            castImages: [Adipurush6, Adipurush2, Adipurush3, Adipurush8, Adipurush7, Adipurush1],
            musicImage: Adipurush5,
            directorImage: Adipurush4,
           MovieOrShows : 'Movie',
            country : 'India',
        },
        { 
            img:A2Cover,
            src: A2, 
            title: 'Aashiqui 2', 
            description: 'Rahul, a singing sensation, falls in love with Aarohi, a woman who sings in a bar. He helps her accomplish her dream of becoming a famous singer but his own shortcomings jeopardise their future.', 
            reviews: [
                { author: 'Biswas_', country: 'India', review: "" },
                { author: 'bhaichunglepcha-76894', country: 'India', review: "" }
            ],
            releasedYear: '2011',
            languages: ['Hindi'],
            ratings: { imdb: 2.3, BingeWatch: 1.0 },
            genres: ['LoveStory', 'Drama'],
            director: 'Mohit Suri',
            music: 'Mithoon',
            castImages: [A21, A22, A23, A24, A25],
            musicImage: A26,
            directorImage: A26,
           MovieOrShows : 'Movie',
            country : 'India',
        },
        // 
        { 
            src: Foreigner, 
            title: 'The Foreigner', 
            description: "Ngoc Minh Quan, a London restaurateur, is in search of the names of politically-motivated terrorists who are responsible for his daughter's death. He will stop at nothing to bring them to justice.", 
            reviews: [
                { author: 'TheBigSick', country: 'UK', review: "Exceeded Expectations" },
                { author: 'paul-allaer', country: 'UK', review: "Best Jackie Chan Movie in a Long Long Time" }
            ],
            releasedYear: '2017',
            languages: ['English','French'],
            ratings: { imdb: 2.3, BingeWatch: 1.0 },
            genres: ['Action', 'Sci-Fi'],
            director: 'Martin Campbell',
            music: 'Cliff Martinez',
            castImages: [Forigner8, Forigner2, Forigner3, Forigner4, Forigner5, Forigner1],
            musicImage: Forigner7,
            directorImage: Forigner6,
           MovieOrShows : 'Movie',
            country : 'UK',
        },
        // 
        { 
            src: SunCity, 
            title: 'Sun City', 
            description: "Ngoc Minh Quan, a London restaurateur, is in search of the names of politically-motivated terrorists who are responsible for his daughter's death. He will stop at nothing to bring them to justice.", 
            reviews: [
                { author: 'pyrocitor', country: 'USA', review: "Bold, Brilliant and Totally Badass" },
                { author: 'Imdbidia', country: 'USA', review: "In Sin City nobody is innocent, not even the Bishop, and they are going to pay for that." }
            ],
            releasedYear: '2005',
            languages: ['English','French'],
            ratings: { imdb: 2.3, BingeWatch: 1.0 },
            genres: ['Thriler', 'Crime'],
            director: 'Frank Miller',
            music: 'Robert Rodriguez',
            castImages: [SunCity1, SunCity2, SunCity6, SunCity7, SunCity5, SunCity8],
            musicImage: SunCity3,
            directorImage: SunCity4,
           MovieOrShows : 'Movie',
            country : 'USA',
        },
        // 
        { 
            src: Tomorrow, 
            title: 'The Tomorrow War', 
            description: "The world is stunned when a group of time travellers arrive from the year 2051 to deliver an urgent message: thirty years in the future, mankind is losing a global war against a deadly alien species.", 
            reviews: [
                { author: 'pyrocitor', country: 'USA', review: "Bold, Brilliant and Totally Badass" },
                { author: 'Imdbidia', country: 'USA', review: "In Sin City nobody is innocent, not even the Bishop, and they are going to pay for that." }
            ],
            releasedYear: '2021',
            languages: ['English','French','Hindi'],
            ratings: { imdb: 2.3, BingeWatch: 1.0 },
            genres: ['Thriler', 'Sci-Fi'],
            director: 'Chris McKay',
            music: 'Lorne Balfe',
            castImages: [Tomoorow6, Tomoorow2, Tomoorow1, Tomoorow7,Tomoorow3, Tomoorow8],
            musicImage: Tomoorow5,
            directorImage: Tomoorow4,
           MovieOrShows : 'Movie',
            country : 'USA',
        },
        // 
        { 
            src: MissFire, 
            title: 'MissFire', 
            description: "The world is stunned when a group of time travellers arrive from the year 2051 to deliver an urgent message: thirty years in the future, mankind is losing a global war against a deadly alien species.", 
            reviews: [
                { author: 'suhstayn', country: 'UK', review: "Low grade action move" },
                { author: 'jordondave-28085', country: 'UK', review: "It's very low budget and it shows" }
            ],
            releasedYear: '2014',
            languages: ['English','French'],
            ratings: { imdb: 2.3, BingeWatch: 1.0 },
            genres: ['Thriler', 'Sci-Fi'],
            director: 'R. Ellis Frazier',
            music: 'R. Ellis Frazier',
            castImages: [MissFire6, MissFire2, MissFire1, MissFire4, MissFire5],
            musicImage: MissFire3,
            directorImage: MissFire3,
           MovieOrShows : 'Movie',
            country : 'UK',
        },
        // 
        { 
            img:Munjya1,
            src: Munjya, 
            title: 'Munjya', 
            description: "A labourer named Pushpa makes enemies as he rises in the world of red sandalwood smuggling. However, violence erupts when the police attempt to bring down his illegal business.", 
            reviews: [
                { author: 'suhstayn', country: 'India', review: "Low grade Horror move" },
                { author: 'jordondave-28085', country: 'India', review: "It's very low budget and it shows" }
            ],
            releasedYear: '2024',
            languages: ['Hindi'],
            ratings: { imdb: 2.3, BingeWatch: 1.0 },
            genres: ['Thriler', 'Horror'],
            director: 'Aditya Sarpotdar',
            music: 'Sachin–Jigar',
            castImages: [Pushpa1, Pushpa2, Pushpa3, Pushpa5,],
            musicImage: null,
            directorImage: null,
           MovieOrShows : 'Movie',
            country : 'India',
        },
        // 
        { 
            src: BladeRunner, 
            title: 'Blade Runner 2049', 
            description: "K, an officer with the Los Angeles Police Department, unearths a secret that could create chaos. He goes in search of a former blade runner who has been missing for over three decades.", 
            reviews: [
                { author: 'kosmasp', country: 'USA', review: "Impressive visuals and imagery" },
                { author: 'TheLittleSongbird', country: 'USA', review: "Jaw dropping and richly rewarding...well worth running with" }
            ],
            releasedYear: '2017',
            languages: ['English'],
            ratings: { imdb: 2.3, BingeWatch: 1.0 },
            genres: ['Sci-Fi', 'Crime-Drama'],
            director: 'Denis Villeneuve',
            music: 'Hans Zimmer',
            castImages: [ BladeRunner2, BladeRunner6, BladeRunner4, BladeRunner5, BladeRunner7, BladeRunner3],
            musicImage: BladeRunner8,
            directorImage: BladeRunner1,
            MovieOrShows : 'Movie',
            country : 'USA',
        },
        
        // Shows Data
        { 
            src: MoneyHeist, 
            title: 'Money Heist', 
            description: 'When the national mint and a touring school group are held hostage by robbers, police believe that the thieves have no way out. Little do they know that the thieves have a bigger plan in store.', 
            reviews: [
                { author: 'aliahmadi72', country: 'France', review: "Do yourself a favor, don't watch season 3, 4 and 5" },
                { author: 'akhilsyngal', country: 'Spain', review: "The art of heist twist & turn" }
            ],
            releasedYear: '2017',
            languages: ['English', 'Spanish', 'French','Hindi', 'Tamil','Telegu','Kannada'],
            ratings: { imdb: 9.0, BingeWatch: 5.0 },
            genres: ['Crime', 'Thriller'],
            director: 'Álex Pina',
            music: 'Manel Santisteban',
            castImages: [Money1, Money2, Money3, Money4, Money6, Money7, Money8, Money9 ,Money10, Money11],
            musicImage: Money5,
            directorImage: Money12,
            MovieOrShows : 'Show',
            country : 'Spain',
            seasons: [
                {
                    name: 'Season 1',
                    episodes: [
                        { episodeNumber: 1, video:MoneyHeist, title: 'Efectuar lo acordado', description: 'The Professor recruits a young female robber and seven other criminals for a grand heist, targeting the Royal Mint of Spain.', length: '55 min' },
                        { episodeNumber: 2, video:MoneyHeist, title: 'Imprudencias letales', description: 'Description of Episode 2', length: '42 min' },
                        { episodeNumber: 3, video:MoneyHeist, title: 'Errar al disparar', description: 'Police grab an image of the face of one of the robbers. Raquel is suspicious of the gentleman she meets at a bar.', length: '32 min' },
                        { episodeNumber: 4, video:MoneyHeist, title: 'Caballo de Troya', description: 'Raquel is adversely affected by a personal crisis with her ex-husband. The hostages are afraid of the sound of gunshots they heard. Thieves argue among themselves.', length: '45 min' },
                        { episodeNumber: 5, video:MoneyHeist, title: 'El día de la marmota', description: 'A sudden development in the investigation and a mistake made by one of the thieves confronts the Professor with a serious risk that could lead to his identity being revealed.', length: '49 min' },
                        { episodeNumber: 6, video:MoneyHeist, title: 'La cálida Guerra Fría', description: 'The problems inside and outside the National Currency and Stamp Factory are growing. The biggest robbery in history does not allow any mistakes and each time, the tension and fear is rising. What opportunities are there for everything to go well?', length: '51 min' },
                        { episodeNumber: 7, video:MoneyHeist, title: 'Refrigerada inestabilidad', description: 'A new police plan will make Raquel enter the National Factory of Currency and Stamp, right at the peak of the biggest heist in history. Berlin will be responsible for being the most extravagant host that the inspector has ever seen. What is their plan', length: '54 min' },
                        { episodeNumber: 8, video:MoneyHeist, title: 'Tú lo has buscado', description: "Despite the setbacks and to keep more than 60 hours locked up, the mood of the robbers does not decline. The printing of tickets can not go better, surpassing the figures that had been marked and the construction of the tunnel initiates a new phase that will facilitate the perforation. In the police tent, however, the weather has become rare after the assault on the pharmacy. Suspicion begins to settle in Raquel and Angel, both distrust each other despite having been more than partners. Neither policemen nor robbers know that a leak is being planned among the hostages. The brain is Arturo, the director of the FNMT. Will he be able to convince his kidnapping companions to lose their fear and try to escape? Who will follow him on this mission that, if it fails, could cost them their life? Will they count on Rio's help now that Inspector Murillo has contacted him and offered to collaborate?", length: '50 min' },
                        { episodeNumber: 9, video:MoneyHeist, title: 'El que la sigue la consigue', description: "The professor talks with Raquel's mother on stressful conditions. Darphanede wants thieves to choose between money and freedom from the hostages.", length: '60 min' },   
                    ]
                },
                {
                    name: 'Season 2',
                    episodes: [
                        { episodeNumber: 1, video:MoneyHeist, title: 'Se acabaron las máscaras', description: 'The police finds the house where The Professor has planned everything. Tokyo and Berlin are fighting about how to proceed.', length: '50 min' },
                        { episodeNumber: 2, video:MoneyHeist, title: 'La cabeza del plan', description: "Tokyo is questioned by the police. The Professor and Raquel's ex-husband are getting into a fight.", length: '47 min' },
                        { episodeNumber: 3, video:MoneyHeist, title: 'Cuestión de eficacia', description: "The hostages are trying to execute an outbreak, while things are escalating between the robbers. Will The Professor make his call in time?", length: '52 min' },
                        { episodeNumber: 4, video:MoneyHeist, title: '¿Qué hemos hecho?', description: 'Raquel is discovering the identity of The Professor. The tension inside the House of national Stamp and Currency is rising.', length: '51 min' },
                        { episodeNumber: 5, video:MoneyHeist, title: ' A contrarreloj', description: 'The execution of the plan is in its final stages. Inspector Raquel is accused of working together with The Professor.', length: '53 min' },
                    ]
                },
                {
                    name: 'Season 3',
                    episodes: [
                        { episodeNumber: 1, video:MoneyHeist, title: 'Efectuar lo acordado', description: 'The Professor recruits a young female robber and seven other criminals for a grand heist, targeting the Royal Mint of Spain.', length: '55 min' },
                        { episodeNumber: 2, video:MoneyHeist, title: 'Imprudencias letales', description: 'Description of Episode 2', length: '42 min' },
                        { episodeNumber: 3, video:MoneyHeist, title: 'Errar al disparar', description: 'Police grab an image of the face of one of the robbers. Raquel is suspicious of the gentleman she meets at a bar.', length: '32 min' },
                        { episodeNumber: 4, video:MoneyHeist, title: 'Caballo de Troya', description: 'Raquel is adversely affected by a personal crisis with her ex-husband. The hostages are afraid of the sound of gunshots they heard. Thieves argue among themselves.', length: '45 min' },
                        { episodeNumber: 5, video:MoneyHeist, title: 'El día de la marmota', description: 'A sudden development in the investigation and a mistake made by one of the thieves confronts the Professor with a serious risk that could lead to his identity being revealed.', length: '49 min' },
                        { episodeNumber: 6, video:MoneyHeist, title: 'La cálida Guerra Fría', description: 'The problems inside and outside the National Currency and Stamp Factory are growing. The biggest robbery in history does not allow any mistakes and each time, the tension and fear is rising. What opportunities are there for everything to go well?', length: '51 min' },
                        { episodeNumber: 7, video:MoneyHeist, title: 'Refrigerada inestabilidad', description: 'A new police plan will make Raquel enter the National Factory of Currency and Stamp, right at the peak of the biggest heist in history. Berlin will be responsible for being the most extravagant host that the inspector has ever seen. What is their plan', length: '54 min' },
                        { episodeNumber: 8, video:MoneyHeist, title: 'Tú lo has buscado', description: "Despite the setbacks and to keep more than 60 hours locked up, the mood of the robbers does not decline. The printing of tickets can not go better, surpassing the figures that had been marked and the construction of the tunnel initiates a new phase that will facilitate the perforation. In the police tent, however, the weather has become rare after the assault on the pharmacy. Suspicion begins to settle in Raquel and Angel, both distrust each other despite having been more than partners. Neither policemen nor robbers know that a leak is being planned among the hostages. The brain is Arturo, the director of the FNMT. Will he be able to convince his kidnapping companions to lose their fear and try to escape? Who will follow him on this mission that, if it fails, could cost them their life? Will they count on Rio's help now that Inspector Murillo has contacted him and offered to collaborate?", length: '50 min' },
                        { episodeNumber: 9, video:MoneyHeist, title: 'El que la sigue la consigue', description: "The professor talks with Raquel's mother on stressful conditions. Darphanede wants thieves to choose between money and freedom from the hostages.", length: '60 min' },   
                    ]
                },
                {
                    name: 'Season 4',
                    episodes: [
                        { episodeNumber: 1, video:MoneyHeist, title: 'Efectuar lo acordado', description: 'The Professor recruits a young female robber and seven other criminals for a grand heist, targeting the Royal Mint of Spain.', length: '55 min' },
                        { episodeNumber: 2, video:MoneyHeist, title: 'Imprudencias letales', description: 'Description of Episode 2', length: '42 min' },
                        { episodeNumber: 3, video:MoneyHeist, title: 'Errar al disparar', description: 'Police grab an image of the face of one of the robbers. Raquel is suspicious of the gentleman she meets at a bar.', length: '32 min' },
                        { episodeNumber: 4, video:MoneyHeist, title: 'Caballo de Troya', description: 'Raquel is adversely affected by a personal crisis with her ex-husband. The hostages are afraid of the sound of gunshots they heard. Thieves argue among themselves.', length: '45 min' },
                        { episodeNumber: 5, video:MoneyHeist, title: 'El día de la marmota', description: 'A sudden development in the investigation and a mistake made by one of the thieves confronts the Professor with a serious risk that could lead to his identity being revealed.', length: '49 min' },
                        { episodeNumber: 6, video:MoneyHeist, title: 'La cálida Guerra Fría', description: 'The problems inside and outside the National Currency and Stamp Factory are growing. The biggest robbery in history does not allow any mistakes and each time, the tension and fear is rising. What opportunities are there for everything to go well?', length: '51 min' },
                        { episodeNumber: 7, video:MoneyHeist, title: 'Refrigerada inestabilidad', description: 'A new police plan will make Raquel enter the National Factory of Currency and Stamp, right at the peak of the biggest heist in history. Berlin will be responsible for being the most extravagant host that the inspector has ever seen. What is their plan', length: '54 min' },
                        { episodeNumber: 8, video:MoneyHeist, title: 'Tú lo has buscado', description: "Despite the setbacks and to keep more than 60 hours locked up, the mood of the robbers does not decline. The printing of tickets can not go better, surpassing the figures that had been marked and the construction of the tunnel initiates a new phase that will facilitate the perforation. In the police tent, however, the weather has become rare after the assault on the pharmacy. Suspicion begins to settle in Raquel and Angel, both distrust each other despite having been more than partners. Neither policemen nor robbers know that a leak is being planned among the hostages. The brain is Arturo, the director of the FNMT. Will he be able to convince his kidnapping companions to lose their fear and try to escape? Who will follow him on this mission that, if it fails, could cost them their life? Will they count on Rio's help now that Inspector Murillo has contacted him and offered to collaborate?", length: '50 min' },
                        { episodeNumber: 9, video:MoneyHeist, title: 'El que la sigue la consigue', description: "The professor talks with Raquel's mother on stressful conditions. Darphanede wants thieves to choose between money and freedom from the hostages.", length: '60 min' },   
                    ]
                },
                {
                    name: 'Season 5',
                    episodes: [
                        { episodeNumber: 1, video:MoneyHeist, title: 'Efectuar lo acordado', description: 'The Professor recruits a young female robber and seven other criminals for a grand heist, targeting the Royal Mint of Spain.', length: '55 min' },
                        { episodeNumber: 2, video:MoneyHeist, title: 'Imprudencias letales', description: 'Description of Episode 2', length: '42 min' },
                        { episodeNumber: 3, video:MoneyHeist, title: 'Errar al disparar', description: 'Police grab an image of the face of one of the robbers. Raquel is suspicious of the gentleman she meets at a bar.', length: '32 min' },
                        { episodeNumber: 4, video:MoneyHeist, title: 'Caballo de Troya', description: 'Raquel is adversely affected by a personal crisis with her ex-husband. The hostages are afraid of the sound of gunshots they heard. Thieves argue among themselves.', length: '45 min' },
                        { episodeNumber: 5, video:MoneyHeist, title: 'El día de la marmota', description: 'A sudden development in the investigation and a mistake made by one of the thieves confronts the Professor with a serious risk that could lead to his identity being revealed.', length: '49 min' },
                        { episodeNumber: 6, video:MoneyHeist, title: 'La cálida Guerra Fría', description: 'The problems inside and outside the National Currency and Stamp Factory are growing. The biggest robbery in history does not allow any mistakes and each time, the tension and fear is rising. What opportunities are there for everything to go well?', length: '51 min' },
                        { episodeNumber: 7, video:MoneyHeist, title: 'Refrigerada inestabilidad', description: 'A new police plan will make Raquel enter the National Factory of Currency and Stamp, right at the peak of the biggest heist in history. Berlin will be responsible for being the most extravagant host that the inspector has ever seen. What is their plan', length: '54 min' },
                        { episodeNumber: 8, video:MoneyHeist, title: 'Tú lo has buscado', description: "Despite the setbacks and to keep more than 60 hours locked up, the mood of the robbers does not decline. The printing of tickets can not go better, surpassing the figures that had been marked and the construction of the tunnel initiates a new phase that will facilitate the perforation. In the police tent, however, the weather has become rare after the assault on the pharmacy. Suspicion begins to settle in Raquel and Angel, both distrust each other despite having been more than partners. Neither policemen nor robbers know that a leak is being planned among the hostages. The brain is Arturo, the director of the FNMT. Will he be able to convince his kidnapping companions to lose their fear and try to escape? Who will follow him on this mission that, if it fails, could cost them their life? Will they count on Rio's help now that Inspector Murillo has contacted him and offered to collaborate?", length: '50 min' },
                        { episodeNumber: 9, video:MoneyHeist, title: 'El que la sigue la consigue', description: "The professor talks with Raquel's mother on stressful conditions. Darphanede wants thieves to choose between money and freedom from the hostages.", length: '60 min' },   
                    ]
                },
            ]
        },
        // 
        { 
            src: Lucifer, 
            title: 'Lucifer', 
            description: "Based on characters created by Neil Gaiman, Sam Kieth and Mike Dringenberg, this series follows Lucifer, the original fallen angel, who has become dissatisfied with his life in hell.", 
            reviews: [
                { author: 'aliahmadi72', country: 'France', review: "absolutely loved and love this Tv Series! It keeps you on the edge, and up all night! I’ve had countless late nights running into mornings with this series! I hope they continue to make more seasons. I’m looking forward to seeing “Luci” (Tom Ellis) more! Super pleasing to ..." },
                { author: 'akhilsyngal', country: 'Spain', review: "DEFINITELY RECOMMENDED, CAN BE WATCHED SEVERAL TIMES!!!!!! Very few shows make you feel this, and Lucifer is definitely on top of the list, and I had to write about it the moment I finished all the seasons. This is definitely recommended, and something ..." }
            ],
            releasedYear: '2016 - 2021',
            languages: ['English','Hindi', 'Tamil'],
            ratings: { imdb: 9.0, BingeWatch: 5.0 },
            genres: ['Detective Fiction', 'Crime Tv Genres', 'Thriler'],
            director: 'Len Wiseman.',
            music: 'Heavy Young Heathens',
            castImages: [Lucifer10, Lucifer2, Lucifer12, Lucifer4, Lucifer6, Lucifer7, Lucifer8, Lucifer5 ,Lucifer1, Lucifer11],
            musicImage: Lucifer9,
            directorImage: Lucifer3,
            MovieOrShows : 'Show',
            country : 'Spain',
            seasons: [
                {
                    name: 'Season 1',
                    episodes: [
                        { episodeNumber: 1, video:Lucifer, title: 'Pilot', description: 'Lucifer has left Hell to take up a life on Earth. When a friend of his is murdered Lucifer joins forces with the good side of the law to discover who the perpetrators are and to give them what they rightfully deserve.',  length: '45 min' },
                        { episodeNumber: 2, video:Lucifer, title: 'Lucifer, Stay. Good Devil.', description: "When a movie star's son is killed after being chased by the paparazzi, Chloe takes a deep look into the case with a little help from Lucifer. Meanwhile, Maze and Amenadiel continue to encourage Lucifer to go back to hell.", length: '42 min' },
                        { episodeNumber: 3, video:Lucifer, title: 'The Would-Be Prince of Darkness', description: 'An up-and-coming quarterback calls Lucifer after finding a corpse in his pool; Lucifer asks Chloe to help investigate, which leads them into the world of big-money sports.', length: '32 min' },
                        { episodeNumber: 4, video:Lucifer, title: 'Manly Whatnots', description: "Lucifer decides he's got to seduce Chloe to get over his infatuation with her. The pair team-up on a missing girl case and Amenadiel's concerns ove Lucifer h lead him to speak with Maze", length: '45 min' },
                        { episodeNumber: 5, video:Lucifer, title: 'Wingman', description: 'A sudden development in the investigation and a mistake made by one of the thieves confronts the Professor with a serious risk that could lead to his identity being revealed.', length: '49 min' },
                        { episodeNumber: 6, video:Lucifer, title: 'Et Tu, Doctor?', description: 'The problems inside and outside the National Currency and Stamp Factory are growing. The biggest robbery in history does not allow any mistakes and each time, the tension and fear is rising. What opportunities are there for everything to go well?', length: '51 min' },
                        { episodeNumber: 7, video:Lucifer, title: 'A Priest Walks Into a Bar', description: 'A new police plan will make Raquel enter the National Factory of Currency and Stamp, right at the peak of the biggest heist in history. Berlin will be responsible for being the most extravagant host that the inspector has ever seen. What is their plan', length: '54 min' },
                        { episodeNumber: 8, video:Lucifer, title: 'Pops', description: "Despite the setbacks and to keep more than 60 hours locked up, the mood of the robbers does not decline. The printing of tickets can not go better, surpassing the figures that had been marked and the construction of the tunnel initiates a new phase that will facilitate the perforation. In the police tent, however, the weather has become rare after the assault on the pharmacy. Suspicion begins to settle in Raquel and Angel, both distrust each other despite having been more than partners. Neither policemen nor robbers know that a leak is being planned among the hostages. The brain is Arturo, the director of the FNMT. Will he be able to convince his kidnapping companions to lose their fear and try to escape? Who will follow him on this mission that, if it fails, could cost them their life? Will they count on Rio's help now that Inspector Murillo has contacted him and offered to collaborate?", length: '50 min' },
                        { episodeNumber: 9, video:Lucifer, title: 'St. Lucifer', description: "The professor talks with Raquel's mother on stressful conditions. Darphanede wants thieves to choose between money and freedom from the hostages.", length: '60 min' },   
                    ]
                },
                {
                    name: 'Season 2',
                    episodes: [
                        { episodeNumber: 1, video:Lucifer, title: 'Pilot', description: 'Lucifer has left Hell to take up a life on Earth. When a friend of his is murdered Lucifer joins forces with the good side of the law to discover who the perpetrators are and to give them what they rightfully deserve.',  length: '45 min' },
                        { episodeNumber: 2, video:Lucifer, title: 'Lucifer, Stay. Good Devil.', description: "When a movie star's son is killed after being chased by the paparazzi, Chloe takes a deep look into the case with a little help from Lucifer. Meanwhile, Maze and Amenadiel continue to encourage Lucifer to go back to hell.", length: '42 min' },
                        { episodeNumber: 3, video:Lucifer, title: 'The Would-Be Prince of Darkness', description: 'An up-and-coming quarterback calls Lucifer after finding a corpse in his pool; Lucifer asks Chloe to help investigate, which leads them into the world of big-money sports.', length: '32 min' },
                        { episodeNumber: 4, video:Lucifer, title: 'Manly Whatnots', description: "Lucifer decides he's got to seduce Chloe to get over his infatuation with her. The pair team-up on a missing girl case and Amenadiel's concerns ove Lucifer h lead him to speak with Maze", length: '45 min' },
                        { episodeNumber: 5, video:Lucifer, title: 'Wingman', description: 'A sudden development in the investigation and a mistake made by one of the thieves confronts the Professor with a serious risk that could lead to his identity being revealed.', length: '49 min' },
                        { episodeNumber: 6, video:Lucifer, title: 'Et Tu, Doctor?', description: 'The problems inside and outside the National Currency and Stamp Factory are growing. The biggest robbery in history does not allow any mistakes and each time, the tension and fear is rising. What opportunities are there for everything to go well?', length: '51 min' },
                        { episodeNumber: 7, video:Lucifer, title: 'A Priest Walks Into a Bar', description: 'A new police plan will make Raquel enter the National Factory of Currency and Stamp, right at the peak of the biggest heist in history. Berlin will be responsible for being the most extravagant host that the inspector has ever seen. What is their plan', length: '54 min' },
                        { episodeNumber: 8, video:Lucifer, title: 'Pops', description: "Despite the setbacks and to keep more than 60 hours locked up, the mood of the robbers does not decline. The printing of tickets can not go better, surpassing the figures that had been marked and the construction of the tunnel initiates a new phase that will facilitate the perforation. In the police tent, however, the weather has become rare after the assault on the pharmacy. Suspicion begins to settle in Raquel and Angel, both distrust each other despite having been more than partners. Neither policemen nor robbers know that a leak is being planned among the hostages. The brain is Arturo, the director of the FNMT. Will he be able to convince his kidnapping companions to lose their fear and try to escape? Who will follow him on this mission that, if it fails, could cost them their life? Will they count on Rio's help now that Inspector Murillo has contacted him and offered to collaborate?", length: '50 min' },
                        { episodeNumber: 9, video:Lucifer, title: 'St. Lucifer', description: "The professor talks with Raquel's mother on stressful conditions. Darphanede wants thieves to choose between money and freedom from the hostages.", length: '60 min' },   
                    ]
                },
                {
                    name: 'Season 3',
                    episodes: [
                        { episodeNumber: 1, video:Lucifer, title: 'Pilot', description: 'Lucifer has left Hell to take up a life on Earth. When a friend of his is murdered Lucifer joins forces with the good side of the law to discover who the perpetrators are and to give them what they rightfully deserve.',  length: '45 min' },
                        { episodeNumber: 2, video:Lucifer, title: 'Lucifer, Stay. Good Devil.', description: "When a movie star's son is killed after being chased by the paparazzi, Chloe takes a deep look into the case with a little help from Lucifer. Meanwhile, Maze and Amenadiel continue to encourage Lucifer to go back to hell.", length: '42 min' },
                        { episodeNumber: 3, video:Lucifer, title: 'The Would-Be Prince of Darkness', description: 'An up-and-coming quarterback calls Lucifer after finding a corpse in his pool; Lucifer asks Chloe to help investigate, which leads them into the world of big-money sports.', length: '32 min' },
                        { episodeNumber: 4, video:Lucifer, title: 'Manly Whatnots', description: "Lucifer decides he's got to seduce Chloe to get over his infatuation with her. The pair team-up on a missing girl case and Amenadiel's concerns ove Lucifer h lead him to speak with Maze", length: '45 min' },
                        { episodeNumber: 5, video:Lucifer, title: 'Wingman', description: 'A sudden development in the investigation and a mistake made by one of the thieves confronts the Professor with a serious risk that could lead to his identity being revealed.', length: '49 min' },
                        { episodeNumber: 6, video:Lucifer, title: 'Et Tu, Doctor?', description: 'The problems inside and outside the National Currency and Stamp Factory are growing. The biggest robbery in history does not allow any mistakes and each time, the tension and fear is rising. What opportunities are there for everything to go well?', length: '51 min' },
                        { episodeNumber: 7, video:Lucifer, title: 'A Priest Walks Into a Bar', description: 'A new police plan will make Raquel enter the National Factory of Currency and Stamp, right at the peak of the biggest heist in history. Berlin will be responsible for being the most extravagant host that the inspector has ever seen. What is their plan', length: '54 min' },
                        { episodeNumber: 8, video:Lucifer, title: 'Pops', description: "Despite the setbacks and to keep more than 60 hours locked up, the mood of the robbers does not decline. The printing of tickets can not go better, surpassing the figures that had been marked and the construction of the tunnel initiates a new phase that will facilitate the perforation. In the police tent, however, the weather has become rare after the assault on the pharmacy. Suspicion begins to settle in Raquel and Angel, both distrust each other despite having been more than partners. Neither policemen nor robbers know that a leak is being planned among the hostages. The brain is Arturo, the director of the FNMT. Will he be able to convince his kidnapping companions to lose their fear and try to escape? Who will follow him on this mission that, if it fails, could cost them their life? Will they count on Rio's help now that Inspector Murillo has contacted him and offered to collaborate?", length: '50 min' },
                        { episodeNumber: 9, video:Lucifer, title: 'St. Lucifer', description: "The professor talks with Raquel's mother on stressful conditions. Darphanede wants thieves to choose between money and freedom from the hostages.", length: '60 min' },   
                    ]
                },
            ]
        },
        // 
        { 
            img:T1899Cover,
            // src: T1899EP1, 
            title: '1899', 
            description: "Immigrants on a steamship travelling from London to New York get caught up in a mysterious riddle after finding a second vessel adrift on the open sea.", 
            reviews: [
                { author: 'derbigpr', country: 'US', review: "Decent, but ultimately plagued by the Netflix Disease. Comparing it to Dark is purely a marketing move because that was a vastly superior and far more complete series." },
                { author: 'scottsideasare', country: 'India', review: "Great show ruined by Netflix cancellation hysteria" }
            ],
            releasedYear: '2022',
            languages: ['English','Hindi'],
            ratings: { imdb: 9.0, BingeWatch: 5.0 },
            genres: ['Mystry', 'Barmuda Tringle', 'Thriler'],
            director: 'Baran bo Odar',
            music: 'Ben Frost',
            castImages: [T18991, T18992, T18993, T18994, T18996, T18997, T18998, T18999 ,T189910, T189911, T189913],
            musicImage: T18995,
            directorImage: T189912,
            MovieOrShows : 'Show',
            country : 'UK',
            seasons: [
                {
                    name: 'Season 1',
                    episodes: [
                        { episodeNumber: 1, video:GrayMan, title: 'The Ship', description: 'Passengers on an immigrant ship traveling to the new continent get caught in a mysterious riddle when they find a second vessel adrift on the open sea.', length: '1hr 01min' },
                        { episodeNumber: 2, video:GrayMan, title: 'The Boy', description: 'The captain experiences inexplicable glimpses of the past. A strange man follows Maura to her cabin where a boy is hiding. An insect leads to a tragedy on deck.', length: '42 min' },
                        { episodeNumber: 3, video:GrayMan, title: 'The Fog', description: 'A girl and other passengers suffer a terrible fate. Olek frees Ling Yi from a box. The captain makes a discovery that challenges his trust in Maura.', length: '32 min' },
                        { episodeNumber: 4, video:GrayMan, title: 'The Fight', description: "Several crew members and passengers search the ship for the boy after locking up the captain, Olek, Jerome and Ramiro . Krester's secret is revealed.", length: '45 min' },
                        { episodeNumber: 5, video:GrayMan, title: 'The Calling', description: 'Maura has terrible flashbacks and makes a shocking move. A sound leads some passengers to jump overboard. Maura makes a discovery about her father.', length: '49 min' },
                        { episodeNumber: 6, video:GrayMan, title: 'The Pyramid', description: "Tove has scary flashbacks and wants to kill the boy. Daniel follows Maura and the captain into a strange place. Maura's father appears with a message.", length: '51 min' },
                        { episodeNumber: 7, video:GrayMan, title: 'The Storm', description: "Daniel asks Maura for something she doesn't understand. Olek and Ling Yi steer the ship before a tragedy occurs. Elliot's identity comes to light.", length: '54 min' },
                        { episodeNumber: 8, video:GrayMan, title: 'The Key', description: "Maura tells the passengers an unbelievable truth. Then, their memories shift and Daniel changes a code. Maura faces an unexpected reality.", length: '50 min' },
                    ]
                },
            ],
            PaidOrFree: 'Free',
        },
        // 
        { 
            img:DarkCover,
            src: Dark1, 
            title: 'Dark Matter', 
            description: "An expert in astrophysics sheds light on the topic of dark matter which has been one of the primary mysteries in modern physics.", 
            reviews: [
                { author: 'derbigpr', country: 'US', review: "Decent, but ultimately plagued by the Netflix Disease. Comparing it to Dark is purely a marketing move because that was a vastly superior and far more complete series." },
                { author: 'scottsideasare', country: 'India', review: "Great show ruined by Netflix cancellation hysteria" }
            ],
            releasedYear: '2024',
            languages: ['English'],
            ratings: { imdb: 9.0, BingeWatch: 5.0 },
            genres: ['Mystry', 'Thriler'],
            director: 'Apple TV+',
            music: 'Apple TV+',
            castImages: [DarkMatter1, DarkMatter2, DarkMatter3, DarkMatter4, DarkMatter6],
            musicImage: DarkMatter5,
            directorImage: DarkMatter5,
            MovieOrShows : 'Show',
            country : 'USA',
            seasons: [
                {
                    name: 'Season 1',
                    episodes: [
                        { episodeNumber: 1, video:Dark1, title: 'Are You Happy in Your Life?', description: 'Physics professor and family man Jason Dessen is abducted from everything he loves.', length: '46min' },
                        { episodeNumber: 2, video:DarkMatter, title: 'Trip of a Lifetime', description: "Jason wakes to a life that makes no sense - he doesn't have a family and he's created something extraordinary.", length: '42 min' },
                        { episodeNumber: 3, video:DarkMatter, title: 'The Box', description: 'A girl and other passengers suffer a terrible fate. Olek frees Ling Yi from a box. The captain makes a discovery that challenges his trust in Maura.', length: '32 min' },
                        { episodeNumber: 4, video:DarkMatter, title: ' The Corridor', description: "Several crew members and passengers search the ship for the boy after locking up the captain, Olek, Jerome and Ramiro . Krester's secret is revealed.", length: '45 min' },
                        { episodeNumber: 5, video:DarkMatter, title: 'Worldless', description: 'Maura has terrible flashbacks and makes a shocking move. A sound leads some passengers to jump overboard. Maura makes a discovery about her father.', length: '49 min' },
                        { episodeNumber: 6, video:DarkMatter, title: 'Superposition', description: "Tove has scary flashbacks and wants to kill the boy. Daniel follows Maura and the captain into a strange place. Maura's father appears with a message.", length: '51 min' },
                        { episodeNumber: 7, video:DarkMatter, title: ' In the Fires of Dead Stars', description: "Daniel asks Maura for something she doesn't understand. Olek and Ling Yi steer the ship before a tragedy occurs. Elliot's identity comes to light.", length: '54 min' },
                        { episodeNumber: 8, video:DarkMatter, title: 'Jupiter', description: "Maura tells the passengers an unbelievable truth. Then, their memories shift and Daniel changes a code. Maura faces an unexpected reality.", length: '50 min' },
                        { episodeNumber: 9, video:DarkMatter, title: 'Entanglement', description: "Maura tells the passengers an unbelievable truth. Then, their memories shift and Daniel changes a code. Maura faces an unexpected reality.", length: '50 min' },
                    ]
                },
            ],
            PaidOrFree: 'Free',
        },
    ];

    let selectedVideo = videos.find(video => video.title === title || video.title === Movie_Name);

    if (!selectedVideo) {
        selectedVideo = {
            src:'Under Development',
            title: 'Under Development',
            description: "Under Development",
            reviews: [
                { author: 'Under Development', country: 'Under Development', review: "Under Development" },
                { author: 'Under Development', country: 'Under Development', review: "Under Development" }
            ],
            releasedYear: 'Under Development',
            languages: ['Under Development'],
            ratings: { "Under Development": 2.3, "Under Development": 1.0 },
            genres: ['Under Development', 'Under Development'],
            director: 'Under Development',
            music: 'Under Development',
            castImages: [],
            musicImage: null,
            directorImage: null,
            MovieOrShows: 'Movie',
            country: 'Under Development',
            MovieOrShows: ' ',
        };
        
    }

    const renderLanguages = selectedVideo.languages.map((language, index) => (
        <h4 key={index} className="language">{language}</h4>
    ));

    const renderGenres = selectedVideo.genres.map((genre, index) => (
        <div key={index} className="rating">
            <h6>{genre}</h6>
        </div>
    ));

    const [data, setData] = useState([]);
    const [name, setName] = useState('');
    const [country, setCountry] = useState('');
    const [reviews, SetrReviews] = useState('');
    const [rate, SetrRate] = useState('');
    const [editReview, setEditReview] = useState(null);

    useEffect(() => {
        axios.get('https://server-r7k9.onrender.com/api/reviews')
            .then(response => {
                const reviewsData = response.data.myReviews;

                const updatedReviews = reviewsData.map(review => ({
                    ...review,
                    review: review.desc,
                    rate: review.rate,
                    country: review.country
                }));

                setData(updatedReviews);
            })
            .catch(error => {
                console.error('Error fetching reviews:', error);
            });
    }, []);

    const openUpdateForm = (review) => {
        setEditReview(review);  // Set the current review data for editing
        setName(review.name);
        setCountry(review.country);
        SetrReviews(review.review);
        SetrRate(review.rate);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();  // Prevent the default form submit behavior
    
        // Basic form validation
        if (!name || !reviews || !country || !rate) {
            alert('Fields cannot be empty.');
            return;
        }
    
        const reviewData = {
            name,
            reviews,
            country,
            rate,
        };
    
        try {
            let response;
            if (editReview) {
                // Update existing review
                response = await axios.put(`https://server-r7k9.onrender.com/api/reviews/${editReview._id}`, reviewData);
                console.log('Review updated:', response.data);
                // Update the review in state
                setData(data.map((item) => (item._id === editReview._id ? response.data : item)));
            } else {
                // Add new review
                response = await axios.post('https://server-r7k9.onrender.com/api/reviews', reviewData);
                console.log('Review added:', response.data);
                // Add new review to state
                setData([...data, response.data]);
            }
    
            // Reset the form and state after submission
            setName('');
            SetrReviews('');
            setCountry('');
            SetrRate('');
            setEditReview(null); // Reset the edit state
    
        } catch (error) {
            console.error('Error saving review:', error);
            alert('Please try again after some time.');
        }
    };
    

    // Function to handle deleting a review
    const handleDelete = async (reviewId) => {
        try {
            // Send DELETE request to backend
            const response = await axios.delete(`https://server-r7k9.onrender.com/api/reviews/${reviewId}`);
    
            console.log('Review deleted:', response.data);
    
            // Remove the deleted review from the state
            setData(data.filter(review => review._id !== reviewId));  // Assumes the review object has _id property
        } catch (error) {
            console.error('Error deleting review:', error);
            alert('Please delete try again after some time.');
        }
    };  

    const renderReviews = data.map((review, index) => (
        <div key={index} className="review_box">
            <div className="d-flex justify-content-between align-items-center flex-wrap mb-4">
                <div>
                    <h6>{review.name}</h6>
                    <p className="heading_text">From {review.country}</p>
                </div>
                <div>

                {review.rate === 1 ? (
                    <img src={star1} alt="Rating 1" />
                ) : review.rate === 2 ? (
                    <img src={star2} alt="Rating 2" />
                ) : review.rate === 3 ? (
                    <img src={star3} alt="Rating 3" />
                ) : review.rate === 4 ? (
                    <img src={star4} alt="Rating 4" />
                ) : review.rate === 5 ? (
                    <img src={star5} alt="Rating 5" />
                ) : (
                    <img src={star1} alt="Default Star" /> 
                )}
                   
                </div>
            </div>
            <div>
            <p className='heading_text'>{review.review}</p> {/* Assuming review text is in 'reviews' */}
            </div>
            <div className='trashbutton'>
                <button
                    onClick={() => openUpdateForm(review)} 
                    data-bs-toggle="tooltip" 
                    title="Update Review"
                    data-bs-toggle="modal" data-bs-target="#staticBackdrop"
                >
                    <i className="fa-solid fa-pen"></i> {/* Update icon */}
                </button>
                <button onClick={() => handleDelete(review._id)}><i className="fa-solid fa-trash"  data-bs-toggle="tooltip" 
                    title="Delete Review"></i></button> {/* Calling handleDelete with review ID */}
            </div>
        </div>
    ));
    

    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [isFullScreen, setIsFullScreen] = useState(false);
    const [videoSource, setVideoSource] = useState(selectedVideo.src);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [showVideo, setShowVideo] = useState(false); 
    const videoRef = useRef(null);
  
    useEffect(() => {
      const handleFullScreenChange = () => {
        setIsFullScreen(!!document.fullscreenElement);
      };
  
      document.addEventListener('fullscreenchange', handleFullScreenChange);
      document.addEventListener('mozfullscreenchange', handleFullScreenChange);
      document.addEventListener('webkitfullscreenchange', handleFullScreenChange);
      document.addEventListener('msfullscreenchange', handleFullScreenChange);
  
      return () => {
        document.removeEventListener('fullscreenchange', handleFullScreenChange);
        document.removeEventListener('mozfullscreenchange', handleFullScreenChange);
        document.removeEventListener('webkitfullscreenchange', handleFullScreenChange);
        document.removeEventListener('msfullscreenchange', handleFullScreenChange);
      };
    }, []);
  
    const handleImgClick = () => {
      setShowVideo(true); 
      setIsPlaying(true); 
      toggleFullScreen();
    };
  
    const togglePlay = () => {
      if (videoRef.current) {
        if (!isPlaying) {
          videoRef.current.play()
            .then(() => {
              setIsPlaying(true);
              toggleFullScreen();
            })
            .catch(error => {
              console.error('Error playing video:', error);
            });
        } else {
          videoRef.current.pause();
          setIsPlaying(false);
        }
      }
    };
  
    const toggleMute = () => {
      if (videoRef.current) {
        videoRef.current.muted = !videoRef.current.muted;
        setIsMuted(videoRef.current.muted);
      }
    };
  
    const toggleFullScreen = () => {
      if (!isFullScreen) {
        if (videoRef.current && videoRef.current.requestFullscreen) {
          videoRef.current.requestFullscreen();
        } else if (videoRef.current && videoRef.current.mozRequestFullScreen) {
          videoRef.current.mozRequestFullScreen();
        } else if (videoRef.current && videoRef.current.webkitRequestFullscreen) {
          videoRef.current.webkitRequestFullscreen();
        } else if (videoRef.current && videoRef.current.msRequestFullscreen) {
          videoRef.current.msRequestFullscreen();
        }
        setIsFullScreen(true);
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
        setIsFullScreen(false);
      }
    };
  
    const handleTimeUpdate = () => {
      setCurrentTime(videoRef.current.currentTime);
    };
  
    const handleLoadedData = () => {
      setDuration(videoRef.current.duration);
    };
  
    const handleVideoEnded = () => {
      setVideoSource(selectedVideo.src);
    };

    const renderSeasons = () => {
        if (selectedVideo.MovieOrShows === 'Show') {
            return selectedVideo.seasons.map((season, index) => (
                <div key={index} className="accordion-item">
                    <h2 className="accordion-header" id={`heading${index}`}>
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${index}`} aria-expanded="false" aria-controls={`collapse${index}`}>
                            <h3 className="season">{season.name}</h3>
                            <p className="heading_text">{season.episodes.length} Episodes</p>
                        </button>
                    </h2>
                    <div id={`collapse${index}`} className="accordion-collapse collapse" aria-labelledby={`heading${index}`} data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            {renderEpisodes(season.episodes)}
                        </div>
                    </div>
                </div>
            ));
        }
    };

    const handleVideoClick = (event) => {
        const videoElement = event.target;
    
        if (videoElement instanceof HTMLVideoElement) {
            videoElement.play().catch(error => {
                console.error('Error playing video:', error);
            });
    
            if (videoElement.requestFullscreen) {
                videoElement.requestFullscreen();
            } else if (videoElement.mozRequestFullScreen) {
                videoElement.mozRequestFullScreen();
            } else if (videoElement.webkitRequestFullscreen) {
                videoElement.webkitRequestFullscreen();
            } else if (videoElement.msRequestFullscreen) { 
                videoElement.msRequestFullscreen();
            } else if (videoElement.webkitEnterFullscreen) {
                videoElement.webkitEnterFullscreen();
            }
        } else {
            console.error('Clicked element is not a video:', videoElement);
        }
    };

    const handleFullscreenChange = () => {
        if (!document.fullscreenElement) { 
            const videoElements = document.querySelectorAll('video');
            videoElements.forEach(video => video.pause()); 
        }
    };

    useEffect(() => {
        document.addEventListener('fullscreenchange', handleFullscreenChange);
        document.addEventListener('webkitfullscreenchange', handleFullscreenChange); 
        document.addEventListener('mozfullscreenchange', handleFullscreenChange); 
        document.addEventListener('MSFullscreenChange', handleFullscreenChange); 

        return () => {
            document.removeEventListener('fullscreenchange', handleFullscreenChange);
            document.removeEventListener('webkitfullscreenchange', handleFullscreenChange); 
            document.removeEventListener('mozfullscreenchange', handleFullscreenChange); 
            document.removeEventListener('MSFullscreenChange', handleFullscreenChange); 
        };
    }, []);

    const renderEpisodes = (episodes) => {
        return episodes.map((episode, index) => (
            <div key={index} className="episode">
                <div className="episode-number">0{episode.episodeNumber}</div>
                <div className="episode-video">
                    <video onClick={index === 0 ? handleVideoClick : null}  >
                        <source src={episode.video} type='video/mp4'/>
                    </video>
                </div>
                <div className="episode-description">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                        <h2>{episode.title}</h2>
                        <div className="episode-length">
                            <img src={episodeclock} alt="" />
                            {episode.length}
                        </div>
                    </div>
                    <p className="heading_text">{episode.description}</p>
                </div>
            </div>
        ));
    };

   
    return (
        <>
            <section className="movipag_detail_sec">
                <div className="container">
                <div className="moviepag_car">
                    {!showVideo ? (
                    <img src={selectedVideo.img} alt="" className='d-block w-100 mb-5' onClick={handleImgClick} style={{cursor:'pointer'}} />) : (
                    <video
                        ref={videoRef}
                        className={`d-block w-100 ${isFullScreen ? 'fullscreen-video' : ''}`}
                        muted={isMuted}
                        loop
                        controls={false}
                        onTimeUpdate={handleTimeUpdate}
                        onLoadedData={handleLoadedData}
                        onEnded={handleVideoEnded}
                    >
                        <source src={videoSource} type='video/mp4'/>
                    </video>
                    )}
                    <div className="carousel-caption">
                    <h2 className="heading_title">{selectedVideo.title}</h2>
                    <p className="heading_text d-none d-lg-block">{selectedVideo.description}</p>
                    <div className="slider_btns">
                        <button className='play' onClick={togglePlay}>
                        <i className={`fa-solid ${isPlaying && !isFullScreen ? 'fa-pause' : 'fa-play'}`}></i>{' '}
                        {isPlaying && !isFullScreen? 'Pause' : 'Play Now'}
                        </button>
                        <button className='mute d-md-block d-none' onClick={toggleMute}>
                        <i className={`fa-solid ${isMuted ? 'fa-volume-mute' : 'fa-volume-high'}`}></i>
                        </button>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            
            <section className={selectedVideo.MovieOrShows === 'Movie' ? "movie_details" : "show_detail"}>        
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="row">
                                <div className="col-12">
                                    <div className="common_bg">
                                        <div className="row">
                                            <div className={selectedVideo.MovieOrShows === 'Show' ? "col-12" : "d-none"}>
                                                <div className="common_bg">
                                                    <div className={selectedVideo.PaidOrFree === 'Free' ? "d-block free" : 'd-none'} >
                                                            <h5 className={selectedVideo.MovieOrShows === 'Show' ? 'd-block' : 'd-none'}>First Episode "Free"🥳</h5>
                                                    </div>
                                                    <div className="seasons accordion" id="accordionExample">
                                                        {renderSeasons()}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="common_bg">
                                                    <div className={selectedVideo.MovieOrShows === 'Movie' ? "hello": "d-none"}>
                                                        <div className={selectedVideo.PaidOrFree === 'Free' ? "d-block free" : 'd-none'} >
                                                                <h5 className={selectedVideo.MovieOrShows === 'Movie' ? 'd-block' : 'd-none'}>Movie is "Free"🥳</h5>
                                                        </div>
                                                    </div>
                                                    <p className='heading_text mb-0'>Description</p>
                                                    <p className='heading_text text-white mt-3 mb-0'>{selectedVideo.description}</p>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="common_bg">
                                                    <p className='heading_text mb-4'>Cast</p>
                                                    <div className="cast">
                                                        {selectedVideo.castImages.map((image, index) => (
                                                            <img src={image} alt={`Cast Member ${index + 1}`} key={index} />
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="common_bg">
                                                    <div className='d-flex align-items-center justify-content-between mb-4'>
                                                        <p className='heading_text'>Reviews</p>
                                                        <button type="button" className="btn add_review text-white" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                                            + Add Reviews
                                                        </button>
                                                    </div>
                                                    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                                        <div className="modal-dialog modal-fullscreen-xxl-down">
                                                            <div className="modal-content">
                                                                <div className="modal-header">
                                                                    <h1 className="modal-title fs-5" id="staticBackdropLabel">Add Your Reviews</h1>
                                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                                </div>
                                                                <div className="modal-body">
                                                                    <form onSubmit={handleSubmit}>
                                                                        <div className="review_box1">
                                                                            <label htmlFor="name">First Name:
                                                                                <input
                                                                                    type="text"
                                                                                    id="name"
                                                                                    placeholder='Enter Name'
                                                                                    onChange={(e) => setName(e.target.value)}
                                                                                    value={name}
                                                                                    required
                                                                                />
                                                                            </label>
                                                                            <label htmlFor="country">Country:
                                                                                <input
                                                                                    type="text"
                                                                                    id="country"
                                                                                    placeholder='Enter Country'
                                                                                    onChange={(e) => setCountry(e.target.value)}
                                                                                    value={country}
                                                                                    required
                                                                                />
                                                                            </label>
                                                                            <label htmlFor="reviews">Your Review:
                                                                                <input
                                                                                    type="text"
                                                                                    id="reviews"
                                                                                    placeholder='Your Review'
                                                                                    onChange={(e) => SetrReviews(e.target.value)}
                                                                                    value={reviews}
                                                                                    required
                                                                                />
                                                                            </label>
                                                                            <label htmlFor="rate">Rate Out Of 5:
                                                                                <input
                                                                                    type="number"
                                                                                    id="rate"
                                                                                    placeholder='0'
                                                                                    onChange={(e) => SetrRate(e.target.value)}
                                                                                    value={rate}
                                                                                    required
                                                                                    min="1"
                                                                                    max="5"
                                                                                />
                                                                            </label>
                                                                        </div>
                                                                        <div className="modal-footer">
                                                                            <button type="submit" className='btn'>Submit</button>
                                                                        </div>
                                                                    </form>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>  
                                                    <div className="review_boxes">
                                                        {renderReviews}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="common_bg">
                                <div className="">
                                    <p className='heading_text mb-3 d-flex align-items-center gap-2'><i className="fa-regular fa-calendar"></i> Released Year</p>
                                    <h6>{selectedVideo.releasedYear}</h6>
                                </div>
                                <div className="mt-4">
                                    <p className='heading_text mb-3 d-flex align-items-center gap-2'><i className="fa-regular fa-language"></i> Languages</p>
                                    <div className="d-flex gap-3 flex-wrap">
                                        {renderLanguages}
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <p className='heading_text mb-3 d-flex align-items-center flex-wrap gap-2'><i className="fa-regular fa-star"></i> Genres</p>
                                    <div className="d-flex gap-3 flex-wrap">
                                        {renderGenres}
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <p className='heading_text mb-3 d-flex align-items-center gap-2'>Director</p>
                                    <div className="rating flex-row">
                                        <img src={selectedVideo.directorImage} alt="" width={'20%'} />
                                        <div className="">
                                            <h6 className='mb-0'>{selectedVideo.director}</h6><br />
                                            <p className='heading_text'>From {selectedVideo.country}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <p className='heading_text mb-3 d-flex align-items-center gap-2'>Music</p>
                                    <div className="rating flex-row">
                                        <img src={selectedVideo.musicImage} alt="" width={'20%'} />
                                        <div className="">
                                            <h6 className='mb-0'>{selectedVideo.music}</h6><br />
                                            <p className='heading_text'>From {selectedVideo.country}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
             
             {/* Movies-Show Section */}
            <section className="movie_sec p-0 pb-5">
                <div className="container">
                    <div className=''>
                        <div className={selectedVideo.MovieOrShows === 'Movie' || selectedVideo.MovieOrShows === ' '? "movie_box" : "d-none"} data-aos="fade-up" data-aos-duration="1500">
                            <div className="title_btn">
                                <a href="#!" className="play">More Movies</a>
                            </div>
                            <div>
                                {moviesSliders.map((slider, index) => (
                                    <Slider key={index} title={slider.title} sliderName={slider.sliderName} slideNum={slider.slideNum} slides={slider.slides} />
                                ))}
                            </div>
                        </div>
                        <div className={selectedVideo.MovieOrShows === 'Show' || selectedVideo.MovieOrShows === ' '? "movie_box mt-5" : "d-none"} id='shows' data-aos="fade-up" data-aos-duration="1500">
                            <div className="title_btn">
                                <a href="#!" className="play">More Shows</a>
                            </div>
                            <div>
                                {sliders.map((slider, index) => {
                                        if (slider.sliderName === 'swiper-container6' || slider.sliderName === 'swiper-container7' || slider.sliderName === 'swiper-container8' || slider.sliderName === 'swiper-container9' || slider.sliderName === 'swiper-container10') {
                                            return (
                                                <Slider key={index} title={slider.title} sliderName={slider.sliderName} slideNum={slider.slideNum} slides={slider.slides} />
                                            );
                                        }
                                        return null;
                                    })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Movies-Show Section */}

        </>
    );
};

export default MovieOpenPage;
