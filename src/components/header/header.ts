import classes from "./header.module.css";
export default function Header() {

    const headerHTML = `
        <header class="${classes.header}">
            <svg width="188" height="44" viewBox="0 0 188 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1_9331)">
                    <path d="M20.4847 3.57164C19.7784 5.28283 18.5989 6.43632 17.9468 6.22733C17.2901 6.01719 17.3709 4.42492 18.0772 2.71604C18.7835 1.00716 19.9608 -0.14865 20.6163 0.0614962C21.2707 0.270488 21.1911 1.86044 20.4847 3.57048" fill="#070B0B"/>
                    <path d="M20.052 3.47578C19.4588 4.84635 18.6163 5.77584 18.1062 5.61997C17.5995 5.46409 17.7057 4.20205 18.3047 2.89614C18.9037 1.59023 19.7404 0.596079 20.2494 0.751957C20.7584 0.907835 20.6453 2.10521 20.052 3.47578Z" fill="#EA5B0C"/>
                    <path d="M34.9357 41.0228C34.8965 40.8704 34.7557 40.7711 34.5987 40.7792C33.7689 40.8185 32.8917 40.7515 32.07 40.5771C32.0515 40.5737 32.0342 40.5679 32.0157 40.561C31.022 40.1753 28.5649 39.7435 26.3581 33.5026C24.8404 29.1507 22.4433 27.7316 21.5789 27.473C21.4023 27.4199 21.3111 27.2328 21.3619 27.0562C21.7993 25.5239 21.6954 23.8462 21.0479 22.336C20.3508 20.843 19.0986 19.8061 18.7501 19.0925C18.4027 18.3778 18.0426 18.006 18.3323 16.6909C18.7039 15.0397 22.8646 7.74232 21.7381 5.51384C19.6214 1.30399 6.42847 6.50223 7.83767 10.1209C8.75637 12.6207 16.87 10.2514 16.87 10.2514C16.4533 12.0549 15.4965 13.6691 14.13 14.9081L14.1185 14.9046C14.0758 14.945 14.0342 14.9854 13.9915 15.0259C13.7422 15.2025 13.4895 15.3769 13.2333 15.5466L13.2483 15.5501C12.2742 16.2013 10.1159 17.2128 10.1079 17.2162C7.74419 18.3824 5.01811 20.0116 3.62968 23.2504C3.14264 24.4836 2.93374 25.7826 3.14264 27.0804C3.49003 29.4151 4.55184 31.2279 6.70892 32.5257C7.3714 32.9553 8.09505 33.3282 8.82215 33.6435C8.89602 33.6758 8.95488 33.7347 8.98835 33.8086C9.67968 35.3316 10.9908 36.5543 12.6839 37.0866C12.7889 37.119 12.8697 37.1986 12.9032 37.3037C13.0971 37.9099 12.9771 40.0171 8.29125 40.3751C6.52426 40.5102 5.2651 39.9767 4.34756 39.6684C3.93091 39.5287 3.47734 39.561 3.08493 39.7573C1.70112 40.4467 0.709711 41.7006 0.1211 42.6336C-0.203213 43.1474 0.161495 43.6381 0.768572 43.6381L20.0069 43.9637C21.1357 43.9637 21.8397 42.6463 19.6757 41.6117C18.7628 41.1752 15.9663 39.7285 15.8959 36.7425C15.8266 35.91 16.0978 35.0764 16.6414 34.3663C16.6541 34.3489 16.6691 34.3328 16.6841 34.3178C17.4505 33.558 18.6208 33.3075 19.723 33.6931C20.7663 34.0834 21.6712 34.73 22.3671 35.5094C24.8739 38.4941 27.4477 44.0099 31.9026 43.7513C35.1273 43.4926 35.1088 41.7006 34.9357 41.024V41.0228Z" fill="black"/>
                    <path d="M33.8347 41.8737C33.208 41.1301 31.5991 41.1555 30.625 40.7653C29.6498 40.375 28.049 38.9467 25.8227 33.4321C23.736 28.175 20.8114 27.8493 20.8114 27.8493C21.0895 26.0989 20.951 24.218 20.2551 22.5299C19.6284 21.1016 18.4466 19.9331 16.9854 19.2841L18.8644 19.9977C18.0299 19.156 17.6814 18.0521 17.8903 16.9494C17.9064 16.7993 18.0138 16.4656 18.3866 15.5119C18.7593 14.5582 22.2437 7.72608 21.3608 5.82206C19.5972 1.87547 7.39222 7.26884 8.51982 9.83563C9.57816 12.138 17.7622 9.83563 17.7622 9.83563C17.7622 9.83563 17.1978 13.0594 15.0107 14.9657C14.9472 15.02 13.68 16.0927 11.9038 16.9483C9.67742 18.051 6.25078 19.6802 4.37184 23.0541C2.70065 26.1024 3.48316 29.4612 5.6414 31.2117C6.47584 31.8629 7.65998 32.4564 8.63408 32.9771C8.56483 32.7162 8.56483 32.3929 8.56483 32.1331V31.7428C8.56483 31.5477 8.63408 31.289 8.63408 31.0939V31.1597C8.70333 30.7036 8.84298 30.2499 8.98147 29.8619C8.70333 31.4842 9.12112 33.1053 10.0248 34.4678C10.79 35.507 11.9211 36.3672 13.1064 36.8856C13.1064 36.8856 13.7654 37.9745 12.7197 39.2365C11.9638 40.1487 11.4086 40.6244 8.34093 40.8923C6.7009 41.0355 6.18961 40.9223 4.21603 40.2942C3.97136 40.2168 3.38159 40.2284 3.1473 40.3323C2.15359 40.7745 1.38839 41.5273 0.920968 42.4615C0.834408 42.6335 0.957901 42.8379 1.14949 42.8379C1.14949 42.8379 19.8742 43.1635 20.0093 43.1635C20.2574 43.1635 21.5073 43.1369 18.7709 41.5643C16.5619 40.2872 15.5208 38.3601 15.4516 36.4792C15.4516 34.5336 16.1475 33.4944 17.2601 32.9102C18.165 32.5211 19.139 32.5211 20.0427 32.9102C24.4273 35.1167 25.5641 42.8621 32.2224 43.6196C33.7112 43.7893 34.3506 42.488 33.8324 41.8726L33.8347 41.8737Z" fill="#EA5B0C"/>
                    <path d="M16.376 6.30352C16.376 5.84281 16.7995 5.51489 17.222 5.51489C17.7159 5.51489 18.0679 5.84281 18.0679 6.30352C18.0679 6.76423 17.7148 7.09215 17.222 7.09215C16.7291 7.09215 16.376 6.76423 16.376 6.30352Z" fill="#070B0B"/>
                    <path d="M10.0039 24.964C5.54891 23.9918 4.21011 22.9584 4.21011 22.9584L4.35207 22.7413C4.35207 22.7413 3.45069 22.119 3.16677 22.4388C2.79398 22.8579 0.872342 26.3923 3.12984 29.4799C4.17087 30.9047 6.03711 31.8423 7.98761 31.7765C7.98761 31.7765 7.18548 29.8863 7.71408 28.0666C8.03954 26.9454 8.9617 25.8716 10.005 24.9629" fill="#1D1D1B"/>
                    <path d="M15.0383 25.5077C15.0383 25.5077 17.4839 19.1156 15.0983 18.8858C12.8351 18.6953 13.0624 24.3669 13.0624 24.3669C13.0093 23.8624 11.9175 17.7612 15.096 18.2704C18.428 18.8027 15.0383 25.5089 15.0383 25.5089" fill="#1D1D1B"/>
                    <path d="M7.48801 31.0986C7.48801 31.0986 3.42775 31.2118 2.47789 26.9026C2.07856 25.091 2.85645 23.5149 3.11382 23.0265C3.16461 22.9295 3.28694 22.8983 3.37812 22.9583C3.9575 23.3371 6.36965 24.5275 9.52853 25.0864C9.52853 25.0864 7.89888 25.9558 7.35067 27.6647C6.80476 29.3678 7.48686 31.0975 7.48686 31.0975L7.48801 31.0986Z" fill="#FFE9C0"/>
                    <path d="M31.7191 43.7651C34.5372 43.7651 36.8216 41.4796 36.8216 38.6604C36.8216 35.8411 34.5372 33.5557 31.7191 33.5557C28.9011 33.5557 26.6167 35.8411 26.6167 38.6604C26.6167 41.4796 28.9011 43.7651 31.7191 43.7651Z" fill="#1D1D1B"/>
                    <path d="M31.7191 41.6913C33.3923 41.6913 34.7487 40.3343 34.7487 38.6604C34.7487 36.9864 33.3923 35.6294 31.7191 35.6294C30.0459 35.6294 28.6895 36.9864 28.6895 38.6604C28.6895 40.3343 30.0459 41.6913 31.7191 41.6913Z" fill="#EA5B0C"/>
                    <path d="M30.5349 37.1328H31.7975C32.0999 37.1328 32.3458 37.2229 32.5339 37.4042C32.722 37.5854 32.8155 37.821 32.8155 38.112C32.8155 38.2921 32.7693 38.4607 32.6781 38.6165C32.587 38.7724 32.43 38.8867 32.2084 38.9595L32.894 40.218H32.235L31.6279 39.0726H31.1085V40.218H30.5361V37.1328H30.5349ZM31.1074 37.6305V38.5923H31.5529C32.0041 38.5923 32.2303 38.4306 32.2303 38.1073C32.2303 37.784 32.0307 37.6316 31.6325 37.6316H31.1085L31.1074 37.6305Z" fill="#1D1D1B"/>
                    <path d="M14.2675 26.2051C12.9644 26.4822 10.7173 25.2444 11.1905 25.1324C11.1905 25.1324 9.40507 25.0135 8.0755 25.4742C7.42457 25.6994 6.8902 26.1439 6.71477 26.6531C6.47818 27.317 6.72401 28.1253 7.51575 28.4151C8.30749 28.7049 8.94919 28.3539 9.42816 27.9163C9.8021 27.5745 10.1218 27.3101 10.6562 27.1438C11.9592 26.9776 13.2022 26.6473 14.2686 26.2051" fill="#EA5B0C"/>
                    <path d="M14.5905 26.4095C13.1074 26.7155 11.824 26.6532 10.2717 26.7767C8.85554 27.4476 8.31656 28.4255 7.40363 27.9417C6.17794 27.2928 6.92928 26.0689 8.12151 25.6093C9.19024 25.1983 10.8741 25.0239 11.4131 24.9015C11.4131 24.9015 9.37952 24.7711 7.86644 25.278C7.12549 25.5262 6.51725 26.0169 6.31759 26.5781C6.04752 27.3101 6.32797 28.2015 7.22936 28.5214C8.13074 28.8412 8.86131 28.4544 9.40606 27.9718C9.83194 27.5953 10.1955 27.3032 10.8037 27.1196C12.2868 26.9372 13.3763 26.8979 14.5905 26.4095Z" fill="#1D1D1B"/>
                    <path d="M22.8669 4.3951C21.8789 6.1721 20.539 7.35562 19.7634 7.0277C18.9878 6.69747 19.199 4.92277 20.1166 3.14461C21.0341 1.36991 22.4445 0.186392 23.2201 0.514313C23.9956 0.909204 23.8548 2.61924 22.8669 4.39625" fill="#070B0B"/>
                    <path d="M22.7262 4.00116C21.9506 5.51491 20.8218 6.50098 20.2575 6.30354C19.6919 6.10609 19.9043 4.65931 20.681 3.14557C21.4566 1.63297 22.5854 0.645746 23.1497 0.843191C23.7141 1.04064 23.5029 2.55323 22.7262 4.00116Z" fill="#EA5B0C"/>
                    <path d="M38.8657 27.6912L23.1244 25.4558C23.0817 25.8265 23.0113 26.1936 22.9097 26.5527C22.882 26.6486 22.9005 26.7467 22.9478 26.8252L38.8657 27.6912Z" fill="#1D1D1B"/>
                    <path d="M34.2896 24.0957L22.717 22.1836C22.8902 22.6466 23.0194 23.1223 23.0921 23.6038L34.2896 24.0957Z" fill="#1D1D1B"/>
                    <path d="M20.3175 18.6516C20.4837 18.9934 20.8599 19.4102 21.2823 19.9171L36.697 21.1803L20.2217 18.4333C20.2517 18.5072 20.2828 18.58 20.3175 18.6516Z" fill="#1D1D1B"/>
                    <path d="M44.6433 23.7217L48.31 21.6179C49.0867 23.5993 50.6091 24.8786 53.3132 24.8786C56.0173 24.8786 56.7941 23.8117 56.7941 22.6236C56.7941 21.0382 55.3341 20.4286 52.1014 19.5141C48.7763 18.5696 45.5447 17.1979 45.5447 13.1439C45.5447 9.08992 48.9633 6.80371 52.6923 6.80371C56.4213 6.80371 59.0008 8.60266 60.4608 11.5886L56.8564 13.6312C56.0797 12.0158 54.899 10.8877 52.6923 10.8877C50.8895 10.8877 49.8335 11.8022 49.8335 13.0215C49.8335 14.332 50.6725 15.0329 53.9664 16.0086C57.415 17.0755 61.0829 18.2036 61.0829 22.5612C61.0829 26.554 57.8201 28.9926 53.1897 28.9926C48.5593 28.9926 45.8251 26.89 44.6445 23.7193L44.6433 23.7217Z" fill="#353535"/>
                    <path d="M64.1287 17.9C64.1287 11.6522 69.1319 6.80493 75.4081 6.80493C81.6843 6.80493 86.7198 11.651 86.7198 17.9C86.7198 24.1489 81.6854 28.995 75.4081 28.995C69.1307 28.995 64.1287 24.1178 64.1287 17.9ZM82.4321 17.9C82.4321 13.7848 79.3552 10.8901 75.4092 10.8901C71.4632 10.8901 68.3863 13.786 68.3863 17.9C68.3863 22.014 71.4621 24.8798 75.4092 24.8798C79.3564 24.8798 82.4321 21.984 82.4321 17.9Z" fill="#353535"/>
                    <path d="M104.279 11.255H98.4054V28.5678H94.1167V11.255H88.2744V7.23218H104.278V11.255H104.279Z" fill="#353535"/>
                    <path d="M115.622 21.1619H112.359V28.5678H108.07V7.23218H116.771C120.779 7.23218 124.011 10.4017 124.011 14.3033C124.011 16.9855 122.302 19.393 119.816 20.5211L124.632 28.5678H120.002L115.62 21.1619H115.622ZM112.359 17.4739H116.771C118.387 17.4739 119.723 16.0722 119.723 14.3044C119.723 12.5366 118.387 11.1649 116.771 11.1649H112.359V17.4739Z" fill="#353535"/>
                    <path d="M141.229 24.7274H132.559L131.253 28.5678H126.623L134.236 7.23218H139.549L147.193 28.5678H142.532L141.226 24.7274H141.229ZM139.892 20.7959L136.909 12.0782L133.925 20.7959H139.891H139.892Z" fill="#353535"/>
                    <path d="M167.582 7.23218V28.5678H164.319L154.998 15.5226V28.5678H150.709V7.23218H153.971L163.293 20.2462V7.23218H167.582Z" fill="#353535"/>
                    <path d="M171.562 23.7217L175.228 21.6179C176.005 23.5993 177.528 24.8786 180.232 24.8786C182.936 24.8786 183.713 23.8117 183.713 22.6236C183.713 21.0382 182.253 20.4286 179.02 19.5141C175.695 18.5696 172.463 17.1979 172.463 13.1439C172.463 9.08992 175.882 6.80371 179.611 6.80371C183.34 6.80371 185.919 8.60266 187.379 11.5886L183.775 13.6312C182.998 12.0158 181.817 10.8877 179.611 10.8877C177.808 10.8877 176.752 11.8022 176.752 13.0215C176.752 14.332 177.591 15.0329 180.885 16.0086C184.333 17.0755 188.001 18.2036 188.001 22.5612C188.001 26.554 184.739 28.9926 180.108 28.9926C175.478 28.9926 172.744 26.89 171.563 23.7193L171.562 23.7217Z" fill="#353535"/>
                    <path d="M45.8574 39.1351C45.8574 36.5533 47.8183 34.4634 50.5917 34.4634C52.2687 34.4634 53.7529 35.3409 54.5008 36.6838L53.701 37.1479C53.1458 36.0637 51.9467 35.3409 50.5917 35.3409C48.3088 35.3409 46.76 37.0313 46.76 39.1351C46.76 41.2389 48.3077 42.9293 50.5917 42.9293C51.9467 42.9293 53.1458 42.2065 53.701 41.1223L54.5008 41.5737C53.7656 42.9154 52.2814 43.8068 50.5917 43.8068C47.8183 43.8068 45.8574 41.7157 45.8574 39.1351Z" fill="#353535"/>
                    <path d="M60.6292 39.1351C60.6292 36.5533 62.6674 34.4634 65.2988 34.4634C67.9302 34.4634 69.9684 36.5545 69.9684 39.1351C69.9684 41.7157 67.9302 43.8068 65.2988 43.8068C62.6674 43.8068 60.6292 41.7157 60.6292 39.1351ZM69.0659 39.1351C69.0659 37.0313 67.4409 35.3409 65.2988 35.3409C63.1567 35.3409 61.5317 37.0313 61.5317 39.1351C61.5317 41.2389 63.1567 42.9293 65.2988 42.9293C67.4409 42.9293 69.0659 41.2389 69.0659 39.1351Z" fill="#353535"/>
                    <path d="M80.11 40.0391H77.5812V43.6531H76.6787V34.6191H80.2912C81.7881 34.6191 82.9999 35.8327 82.9999 37.3291C82.9999 38.5553 82.1747 39.6003 81.0517 39.9236L83.2573 43.6531H82.2255L80.11 40.0391ZM77.5812 39.1869H80.29C81.2837 39.1869 82.0962 38.3475 82.0962 37.328C82.0962 36.3084 81.2837 35.469 80.29 35.469H77.5812V39.1858V39.1869Z" fill="#353535"/>
                    <path d="M96.2875 37.4575C96.2875 39.0705 95.0745 40.2967 93.4495 40.2967H91.1274V43.6522H90.2249V34.6182H93.4495C95.0745 34.6182 96.2875 35.8317 96.2875 37.4575ZM95.385 37.4575C95.385 36.2959 94.5725 35.4703 93.4495 35.4703H91.1274V39.4458H93.4495C94.5713 39.4458 95.385 38.6063 95.385 37.4586V37.4575Z" fill="#353535"/>
                    <path d="M102.159 39.1351C102.159 36.5533 104.197 34.4634 106.828 34.4634C109.46 34.4634 111.498 36.5545 111.498 39.1351C111.498 41.7157 109.46 43.8068 106.828 43.8068C104.197 43.8068 102.159 41.7157 102.159 39.1351ZM110.595 39.1351C110.595 37.0313 108.97 35.3409 106.828 35.3409C104.686 35.3409 103.061 37.0313 103.061 39.1351C103.061 41.2389 104.686 42.9293 106.828 42.9293C108.97 42.9293 110.595 41.2389 110.595 39.1351Z" fill="#353535"/>
                    <path d="M121.639 40.0391H119.111V43.6531H118.208V34.6191H121.82C123.317 34.6191 124.529 35.8327 124.529 37.3291C124.529 38.5553 123.704 39.6003 122.581 39.9236L124.787 43.6531H123.755L121.639 40.0391ZM119.111 39.1869H121.819C122.813 39.1869 123.626 38.3475 123.626 37.328C123.626 36.3084 122.813 35.469 121.819 35.469H119.111V39.1858V39.1869Z" fill="#353535"/>
                    <path d="M136.411 41.4327H132.128L131.289 43.6531H130.335L133.805 34.6191H134.734L138.205 43.6531H137.25L136.411 41.4327ZM136.089 40.5806L134.27 35.7403L132.451 40.5806H136.089Z" fill="#353535"/>
                    <path d="M149.557 35.4703H146.783V43.6533H145.881V35.4703H143.107V34.6182H149.558V35.4703H149.557Z" fill="#353535"/>
                    <path d="M156.911 34.6182V43.6522H156.008V34.6182H156.911Z" fill="#353535"/>
                    <path d="M163.62 39.1351C163.62 36.5533 165.658 34.4634 168.29 34.4634C170.921 34.4634 172.959 36.5545 172.959 39.1351C172.959 41.7157 170.921 43.8068 168.29 43.8068C165.658 43.8068 163.62 41.7157 163.62 39.1351ZM172.057 39.1351C172.057 37.0313 170.432 35.3409 168.29 35.3409C166.148 35.3409 164.523 37.0313 164.523 39.1351C164.523 41.2389 166.148 42.9293 168.29 42.9293C170.432 42.9293 172.057 41.2389 172.057 39.1351Z" fill="#353535"/>
                    <path d="M186.119 34.6182V43.6522H185.344L180.313 36.2959V43.6522H179.411V34.6182H180.185L185.216 41.9744V34.6182H186.119Z" fill="#353535"/>
                </g>
                <defs>
                    <clipPath id="clip0_1_9331">
                        <rect width="188" height="43.9252" fill="white" transform="translate(0 0.0373535)"/>
                    </clipPath>
                </defs>
            </svg>
            <button class="${classes.hamburgerBtn}" id="hamburgerBtn">
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_23_12697)">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.1499 7.56274C3.1499 7.14853 3.48569 6.81274 3.8999 6.81274H20.0999C20.5141 6.81274 20.8499 7.14853 20.8499 7.56274C20.8499 7.97696 20.5141 8.31274 20.0999 8.31274H3.8999C3.48569 8.31274 3.1499 7.97696 3.1499 7.56274ZM3.1499 12.9627C3.1499 12.5485 3.48569 12.2127 3.8999 12.2127H20.0999C20.5141 12.2127 20.8499 12.5485 20.8499 12.9627C20.8499 13.377 20.5141 13.7127 20.0999 13.7127H3.8999C3.48569 13.7127 3.1499 13.377 3.1499 12.9627ZM8.5499 18.3627C8.5499 17.9485 8.88569 17.6127 9.2999 17.6127H20.0999C20.5141 17.6127 20.8499 17.9485 20.8499 18.3627C20.8499 18.777 20.5141 19.1127 20.0999 19.1127H9.2999C8.88569 19.1127 8.5499 18.777 8.5499 18.3627Z" fill="#555555"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_23_12697">
                            <rect width="24" height="24" fill="white" transform="translate(0 0.962646)"/>
                        </clipPath>
                    </defs>
                </svg>
            </button>
            <nav class="${classes.nav}" id="navLinks">
                <button id="btnProduction">
                    Продукция
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_59_686)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.05806 7.30781C5.30214 7.06374 5.69786 7.06374 5.94194 7.30781L10 11.3659L14.0581 7.30781C14.3021 7.06374 14.6979 7.06374 14.9419 7.30781C15.186 7.55189 15.186 7.94762 14.9419 8.1917L10.4419 12.6917C10.1979 12.9358 9.80214 12.9358 9.55806 12.6917L5.05806 8.1917C4.81398 7.94762 4.81398 7.55189 5.05806 7.30781Z" fill="#555555"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_59_686">
                                <rect width="20" height="20" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                </button>
                <button id="btnService">
                    Услуги и сервис
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_59_686)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.05806 7.30781C5.30214 7.06374 5.69786 7.06374 5.94194 7.30781L10 11.3659L14.0581 7.30781C14.3021 7.06374 14.6979 7.06374 14.9419 7.30781C15.186 7.55189 15.186 7.94762 14.9419 8.1917L10.4419 12.6917C10.1979 12.9358 9.80214 12.9358 9.55806 12.6917L5.05806 8.1917C4.81398 7.94762 4.81398 7.55189 5.05806 7.30781Z" fill="#555555"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_59_686">
                                <rect width="20" height="20" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                </button>
                <button id="btnAbout">
                    О заводе
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_59_686)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.05806 7.30781C5.30214 7.06374 5.69786 7.06374 5.94194 7.30781L10 11.3659L14.0581 7.30781C14.3021 7.06374 14.6979 7.06374 14.9419 7.30781C15.186 7.55189 15.186 7.94762 14.9419 8.1917L10.4419 12.6917C10.1979 12.9358 9.80214 12.9358 9.55806 12.6917L5.05806 8.1917C4.81398 7.94762 4.81398 7.55189 5.05806 7.30781Z" fill="#555555"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_59_686">
                                <rect width="20" height="20" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                </button>
                <button>
                    Контакты
                </button>
            </nav>
            <div class="${classes.ctaSection}" id="ctaSection">
                <button class="cta-btn">Заказать звонок</button>
                <div class="${classes.ctaContacts}">
                    <p>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_59_749)">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.07362 3.37476L6.10005 3.37476H13.9001L13.9265 3.37476C14.5341 3.37475 15.028 3.37474 15.4287 3.40749C15.8426 3.4413 16.2118 3.51312 16.5553 3.68811C17.0962 3.96375 17.5361 4.40357 17.8117 4.94453C17.9827 5.28012 18.0552 5.64035 18.0899 6.04274C18.1287 6.15313 18.135 6.27064 18.1109 6.38185C18.1251 6.71999 18.1251 7.11418 18.1251 7.57331V7.59976V12.3998V12.4262C18.1251 13.0338 18.1251 13.5277 18.0923 13.9284C18.0585 14.3423 17.9867 14.7115 17.8117 15.055C17.5361 15.5959 17.0962 16.0358 16.5553 16.3114C16.2118 16.4864 15.8426 16.5582 15.4287 16.592C15.028 16.6248 14.5341 16.6248 13.9265 16.6248H13.9001H6.10005H6.0736C5.46599 16.6248 4.97211 16.6248 4.57136 16.592C4.15752 16.5582 3.78827 16.4864 3.44483 16.3114C2.90387 16.0358 2.46405 15.5959 2.18841 15.055C2.01342 14.7115 1.9416 14.3423 1.90778 13.9284C1.87504 13.5277 1.87505 13.0338 1.87505 12.4262L1.87505 12.3998V7.59976L1.87505 7.57332C1.87505 7.11419 1.87504 6.71999 1.88917 6.38185C1.86515 6.27064 1.87136 6.15313 1.91016 6.04274C1.94493 5.64035 2.01742 5.28012 2.18841 4.94453C2.46405 4.40357 2.90386 3.96375 3.44483 3.68811C3.78827 3.51312 4.15752 3.4413 4.57136 3.40749C4.97211 3.37474 5.466 3.37475 6.07362 3.37476ZM3.12508 7.45018C3.12506 7.49882 3.12505 7.54866 3.12505 7.59976V12.3998C3.12505 13.0401 3.12554 13.4828 3.15363 13.8267C3.18113 14.1632 3.23193 14.3496 3.30217 14.4875C3.45796 14.7933 3.70656 15.0418 4.01232 15.1976C4.15018 15.2679 4.33661 15.3187 4.67315 15.3462C5.01699 15.3743 5.45968 15.3748 6.10005 15.3748H13.9001C14.5404 15.3748 14.9831 15.3743 15.327 15.3462C15.6635 15.3187 15.8499 15.2679 15.9878 15.1976C16.2936 15.0418 16.5421 14.7933 16.6979 14.4875C16.7682 14.3496 16.819 14.1632 16.8465 13.8267C16.8746 13.4828 16.8751 13.0401 16.8751 12.3998V7.59976C16.8751 7.54866 16.8751 7.49881 16.875 7.45018L11.7348 11.0484C11.7079 11.0672 11.6814 11.0858 11.6552 11.1042C11.2387 11.3964 10.899 11.6347 10.514 11.7307C10.1765 11.8148 9.82357 11.8148 9.48608 11.7307C9.10112 11.6347 8.76144 11.3964 8.34493 11.1042C8.31871 11.0858 8.29219 11.0672 8.26533 11.0484L3.12508 7.45018ZM16.8235 5.96046L11.0179 10.0243C10.4797 10.4011 10.3419 10.4853 10.2117 10.5178C10.0727 10.5524 9.92738 10.5524 9.78842 10.5178C9.65824 10.4853 9.52039 10.4011 8.98216 10.0243L3.17664 5.96046C3.2059 5.75194 3.24832 5.61771 3.30217 5.51202C3.45796 5.20626 3.70656 4.95766 4.01232 4.80187C4.15018 4.73163 4.33661 4.68083 4.67315 4.65334C5.01699 4.62524 5.45968 4.62476 6.10005 4.62476H13.9001C14.5404 4.62476 14.9831 4.62524 15.327 4.65334C15.6635 4.68083 15.8499 4.73163 15.9878 4.80187C16.2936 4.95767 16.5421 5.20626 16.6979 5.51202C16.7518 5.61771 16.7942 5.75194 16.8235 5.96046Z" fill="#555555"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_59_749">
                                    <rect width="20" height="20" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                        mz@sotrans.ru
                    </p>
                    <p>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_59_762)">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.16667 3.95825C3.8904 3.95825 3.62545 4.068 3.4301 4.26335C3.23875 4.45469 3.12954 4.71281 3.12514 4.98294C3.31806 8.07341 4.63275 10.9874 6.82263 13.1773C9.01252 15.3672 11.9265 16.6819 15.017 16.8748C15.2871 16.8704 15.5452 16.7612 15.7366 16.5698C15.9319 16.3745 16.0417 16.1095 16.0417 15.8333V12.9231L12.7621 11.6112L11.7859 13.2381C11.6186 13.5171 11.2653 13.621 10.9736 13.4771C9.04056 12.5238 7.47611 10.9594 6.5228 9.02637C6.37892 8.73464 6.48286 8.38134 6.76177 8.21399L8.38869 7.23784L7.07685 3.95825H4.16667ZM2.54621 3.37947C2.97598 2.94969 3.55888 2.70825 4.16667 2.70825H7.5C7.75557 2.70825 7.98538 2.86385 8.0803 3.10113L9.74696 7.2678C9.86089 7.55262 9.75127 7.87802 9.48823 8.03585L7.91508 8.97974C8.66174 10.2676 9.73232 11.3382 11.0202 12.0848L11.9641 10.5117C12.1219 10.2486 12.4473 10.139 12.7321 10.253L16.8988 11.9196C17.1361 12.0145 17.2917 12.2444 17.2917 12.4999V15.8333C17.2917 16.441 17.0502 17.0239 16.6205 17.4537C16.1907 17.8835 15.6078 18.1249 15 18.1249C14.9874 18.1249 14.9747 18.1245 14.9621 18.1238C11.5591 17.917 8.34946 16.4719 5.93875 14.0612C3.52804 11.6505 2.08295 8.44082 1.87615 5.03783C1.87538 5.02521 1.875 5.01256 1.875 4.99992C1.875 4.39213 2.11644 3.80924 2.54621 3.37947Z" fill="#555555"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_59_762">
                                    <rect width="20" height="20" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                        +7 (812) 495-42-02
                    </p>
                </div>
            </div>
          </div>
        </header>
        <div id="hamburgerLinks" style="display: none" class="${classes.nav}">
            <button id="btnProduction">
                    Продукция
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_59_686)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.05806 7.30781C5.30214 7.06374 5.69786 7.06374 5.94194 7.30781L10 11.3659L14.0581 7.30781C14.3021 7.06374 14.6979 7.06374 14.9419 7.30781C15.186 7.55189 15.186 7.94762 14.9419 8.1917L10.4419 12.6917C10.1979 12.9358 9.80214 12.9358 9.55806 12.6917L5.05806 8.1917C4.81398 7.94762 4.81398 7.55189 5.05806 7.30781Z" fill="#555555"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_59_686">
                                <rect width="20" height="20" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                </button>
                <button id="btnService">
                    Услуги и сервис
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_59_686)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.05806 7.30781C5.30214 7.06374 5.69786 7.06374 5.94194 7.30781L10 11.3659L14.0581 7.30781C14.3021 7.06374 14.6979 7.06374 14.9419 7.30781C15.186 7.55189 15.186 7.94762 14.9419 8.1917L10.4419 12.6917C10.1979 12.9358 9.80214 12.9358 9.55806 12.6917L5.05806 8.1917C4.81398 7.94762 4.81398 7.55189 5.05806 7.30781Z" fill="#555555"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_59_686">
                                <rect width="20" height="20" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                </button>
                <button id="btnAbout">
                    О заводе
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_59_686)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.05806 7.30781C5.30214 7.06374 5.69786 7.06374 5.94194 7.30781L10 11.3659L14.0581 7.30781C14.3021 7.06374 14.6979 7.06374 14.9419 7.30781C15.186 7.55189 15.186 7.94762 14.9419 8.1917L10.4419 12.6917C10.1979 12.9358 9.80214 12.9358 9.55806 12.6917L5.05806 8.1917C4.81398 7.94762 4.81398 7.55189 5.05806 7.30781Z" fill="#555555"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_59_686">
                                <rect width="20" height="20" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                </button>
                <button>
                    Контакты
                </button>
        </div>
        <div id="popupContainer" style="position: absolute; z-index: 20;"></div>
    `;
    return headerHTML;
}