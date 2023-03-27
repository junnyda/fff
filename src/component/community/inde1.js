// import { useState } from "react";
// import { useEffect } from "react";
// import "../../assets/css/component/community/Community.css";
// import Layout from "../../layout/Layout";

// function Community() {
//   const [weather, setWeather] = useState(null);

//   const getCurrentLocation = () => {
//     // 현재 위치 가져오기
//     navigator.geolocation.getCurrentPosition((position) => {
//       let lat = position.coords.latitude; // 위도
//       let lon = position.coords.longitude; // 경도

//       console.log("현재 위치", lat, lon);
//       getWeatherByCurrentLocation(lat, lon);
//     });
//   };

//   // 현재 위치 날씨 API 가져오기
//   const getWeatherByCurrentLocation = async (lat, lon) => {
//     // &units=metric => 섭씨 사용
//     let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=658d847ef1d28e72e047ab0c5a476d54&units=metric`;
//     // url에 데이터를 가져올 때까지 기다려 주세요
//     let response = await fetch(url);
//     let data = await response.json();
//     // weather에 데이터 담기
//     setWeather(data);
//   };

//   useEffect(() => {
//     getCurrentLocation();
//   }, []);

//   return (
//     <Layout>
// {/* <body> */}

//     <div class="dropdown position-fixed bottom-0 end-0 mb-3 me-3 bd-mode-toggle">
//       <button class="btn btn-bd-primary py-2 dropdown-toggle d-flex align-items-center"
//               id="bd-theme"
//               type="button"
//               aria-expanded="false"
//               data-bs-toggle="dropdown"
//               aria-label="Toggle theme (auto)">
//         <svg class="bi my-1 theme-icon-active" width="1em" height="1em"><use href="#circle-half"></use></svg>
//         <span class="visually-hidden" id="bd-theme-text">Toggle theme</span>
//       </button>
//       <ul class="dropdown-menu dropdown-menu-end shadow" aria-labelledby="bd-theme-text">
//         <li>
//           <button type="button" class="dropdown-item d-flex align-items-center" data-bs-theme-value="light" aria-pressed="false">
//             <svg class="bi me-2 opacity-50 theme-icon" width="1em" height="1em"><use href="#sun-fill"></use></svg>
//             Light
//             <svg class="bi ms-auto d-none" width="1em" height="1em"><use href="#check2"></use></svg>
//           </button>
//         </li>
//         <li>
//           <button type="button" class="dropdown-item d-flex align-items-center" data-bs-theme-value="dark" aria-pressed="false">
//             <svg class="bi me-2 opacity-50 theme-icon" width="1em" height="1em"><use href="#moon-stars-fill"></use></svg>
//             Dark
//             <svg class="bi ms-auto d-none" width="1em" height="1em"><use href="#check2"></use></svg>
//           </button>
//         </li>
//         <li>
//           <button type="button" class="dropdown-item d-flex align-items-center active" data-bs-theme-value="auto" aria-pressed="true">
//             <svg class="bi me-2 opacity-50 theme-icon" width="1em" height="1em"><use href="#circle-half"></use></svg>
//             Auto
//             <svg class="bi ms-auto d-none" width="1em" height="1em"><use href="#check2"></use></svg>
//           </button>
//         </li>
//       </ul>
//     </div>

    
// <header data-bs-theme="dark">
//   <div class="collapse text-bg-dark" id="navbarHeader">
//     <div class="container">
//       <div class="row">
//         <div class="col-sm-8 col-md-7 py-4">
//           <h4>About</h4>
//           <p class="text-body-secondary">Add some information about the album below, the author, or any other background context. Make it a few sentences long so folks can pick up some informative tidbits. Then, link them off to some social networking sites or contact information.</p>
//         </div>
//         <div class="col-sm-4 offset-md-1 py-4">
//           <h4>Contact</h4>
//           <ul class="list-unstyled">
//             <li><a href="#" class="text-white">Follow on Twitter</a></li>
//             <li><a href="#" class="text-white">Like on Facebook</a></li>
//             <li><a href="#" class="text-white">Email me</a></li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   </div>
//   {/* <div class="navbar navbar-dark bg-dark shadow-sm">
//     <div class="container">
//       <a href="#" class="navbar-brand d-flex align-items-center">
//         <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" aria-hidden="true" class="me-2" viewBox="0 0 24 24"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
//         <strong>Album</strong>
//       </a>
//       <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
//         <span class="navbar-toggler-icon"></span>
//       </button>
//     </div>
//   </div> */}
// </header>

// <main>

//   <section class="py-5 text-center container">
//     <div class="row py-lg-5">
//       <div class="col-lg-6 col-md-8 mx-auto">
//         <h1 class="fw-light">날짜 들어가는칸?</h1>
//         <p class="lead text-body-secondary">날짜 들어가는칸?</p>
//         <p>
//           <a href="#" class="btn btn-primary my-2">날짜 들어가는칸?(활용 가능)</a>
//           <a href="#" class="btn btn-secondary my-2">날짜 들어가는칸?(활용가능)</a>
//         </p>
//       </div>
//     </div>
//   </section>

//   <div class="album py-5 bg-body-tertiary">
//     <div class="container">

//       <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
//         <div class="col">
//           <div class="card shadow-sm">
//             <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#f4e7e7 "/><text x="50%" y="50%" fill="#eceeef" dy=".3em">모임들의 사진</text></svg>
//             <div class="card-body">
//               <p class="card-text">파이썬 모임입니다.</p>
//               <div class="d-flex justify-content-between align-items-center">
//                 <div class="btn-group">
//                   <button type="button" class="btn btn-sm btn-outline-secondary">들거가기</button>
//                   <button type="button" class="btn btn-sm btn-outline-secondary">탈퇴하기</button>
//                 </div>
//                 <small class="text-body-secondary">9 mins</small>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div class="col">
//           <div class="card shadow-sm">
//             <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#f4e7e7 "/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
//             <div class="card-body">
//               <p class="card-text">react 모입입니다</p>
//               <div class="d-flex justify-content-between align-items-center">
//                 <div class="btn-group">
//                  <button type="button" class="btn btn-sm btn-outline-secondary">들거가기</button>
//                   <button type="button" class="btn btn-sm btn-outline-secondary">탈퇴하기</button>
//                 </div>
//                 <small class="text-body-secondary">9 mins</small>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div class="col">
//           <div class="card shadow-sm">
//             <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#f4e7e7"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
//             <div class="card-body">
//               <p class="card-text">모임1의 정보입니다 </p>
//               <div class="d-flex justify-content-between align-items-center">
//                 <div class="btn-group">
//                   <button type="button" class="btn btn-sm btn-outline-secondary">들거가기</button>
//                   <button type="button" class="btn btn-sm btn-outline-secondary">탈퇴하기</button>
//                 </div>
//                 <small class="text-body-secondary">9 mins</small>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div class="col">
//           <div class="crad shadow-sm">
//             <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#f4e7e7"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
//             <div class="card-body">
//               <p class="card-text">스프링 모임입니다</p>
//               <div class="d-flex justify-content-between align-items-center">
//                 <div class="btn-group">
//                 <button type="button" class="btn btn-sm btn-outline-secondary">들거가기</button>
//                   <button type="button" class="btn btn-sm btn-outline-secondary">탈퇴하기</button>
//                 </div>
//                 <small class="text-body-secondary">9 mins</small>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div class="col">
//           <div class="card shadow-sm">
//             <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#f4e7e7"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
//             <div class="card-body">
//               <p class="card-text">거북왕 모임입니다.</p>
//               <div class="d-flex justify-content-between align-items-center">
//                 <div class="btn-group">
//                   <button type="button" class="btn btn-sm btn-outline-secondary">들거가기</button>
//                   <button type="button" class="btn btn-sm btn-outline-secondary">탈퇴하기</button>
//                 </div>
//                 <small class="text-body-secondary">9 mins</small>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div class="col">
//           <div class="card shadow-sm">
//             <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#f4e7e7"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
//             <div class="card-body">
//               <p class="card-text">이누야샤 모입니다.</p>
//               <div class="d-flex justify-content-between align-items-center">
//                 <div class="btn-group">
//                   <button type="button" class="btn btn-sm btn-outline-secondary">들거가기</button>
//                   <button type="button" class="btn btn-sm btn-outline-secondary">탈퇴하기</button>
//                 </div>
//                 <small class="text-body-secondary">9 mins</small>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div class="col">
//           <div class="card shadow-sm">
//             <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#f4e7e7"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
//             <div class="card-body">
//               <p class="card-text">여러분 모임입니다</p>
//               <div class="d-flex justify-content-between align-items-center">
//                 <div class="btn-group">
//                   <button type="button" class="btn btn-sm btn-outline-secondary">들거가기</button>
//                   <button type="button" class="btn btn-sm btn-outline-secondary">탈퇴하기</button>
//                 </div>
//                 <small class="text-body-secondary">9 mins</small>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div class="col">
//           <div class="card shadow-sm">
//             <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#f4e7e7"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
//             <div class="card-body">
//               <p class="card-text">둘리 모입입니다</p>
//               <div class="d-flex justify-content-between align-items-center">
//                 <div class="btn-group">
//                   <button type="button" class="btn btn-sm btn-outline-secondary">들거가기</button>
//                   <button type="button" class="btn btn-sm btn-outline-secondary">탈퇴하기</button>
//                 </div>
//                 <small class="text-body-secondary">9 mins</small>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div class="col">
//           <div class="card shadow-sm">
//             <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#f4e7e7"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
//             <div class="card-body">
//               <p class="card-text">마이콜 모임입니다</p>
//               <div class="d-flex justify-content-between align-items-center">
//                 <div class="btn-group">
//                  <button type="button" class="btn btn-sm btn-outline-secondary">들거가기</button>
//                   <button type="button" class="btn btn-sm btn-outline-secondary">탈퇴하기</button>
//                 </div>
//                 <small class="text-body-secondary">9 mins</small>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>

// </main>      
// {/* </body> */}

//     </Layout>
//   );
// }

// export default Community;
