import React from 'react'
import { useHistory } from 'react-router-dom'

const Space = () => {
    const history = useHistory()
    const { pathname } = history.location

    return (
        <svg width="24px"
            height="24px"
            viewBox="0 0 24 24">
            <g
                stroke="none"
                className="icon_svg-fill_as_stroke"
                fill={pathname === '/spaces' ? "#A82723" : "#666"}
                fillRule="nonzero">
                <path d="M12,11.375 C14.2762055,11.375 16.125,13.1977519 16.125,15.450698 L16.125,15.450698 L16.125,22.5 C16.125,22.845178 15.845178,23.125 15.5,23.125 L15.5,23.125 L8.5,23.125 C8.15482203,23.125 7.875,22.845178 7.875,22.5 L7.875,22.5 L7.875,15.450698 C7.875,13.1977519 9.72379452,11.375 12,11.375 Z M5,9.375 C6.37563518,9.375 7.63839931,10.0460944 8.40286139,11.1464052 C8.59981157,11.4298808 8.5296688,11.8193429 8.24619313,12.0162931 C7.96271746,12.2132433 7.57325535,12.1431005 7.37630517,11.8596248 C6.84370333,11.0930368 5.96302243,10.625 5,10.625 C3.46699034,10.625 2.21718936,11.8032168 2.12987323,13.2848661 L2.125,13.450698 L2.124,21.875 L6.25106349,21.875 C6.56486164,21.875 6.82464662,22.1062579 6.86928688,22.4076421 L6.87606349,22.5 C6.87606349,22.8137982 6.64480561,23.0735831 6.34342141,23.1182234 L6.25106349,23.125 L1.5,23.125 C1.18620185,23.125 0.926416865,22.8937421 0.881776605,22.5923579 L0.875,22.5 L0.875,13.450698 C0.875,11.1977519 2.72379452,9.375 5,9.375 Z M19.0006879,9.375 C21.2768934,9.375 23.1256879,11.1977519 23.1256879,13.450698 L23.1256879,13.450698 L23.1256879,22.5 L23.1189113,22.5923579 C23.0742711,22.8937421 22.8144861,23.125 22.5006879,23.125 L22.5006879,23.125 L17.7500557,23.125 L17.6576978,23.1182234 C17.3563136,23.0735831 17.1250557,22.8137982 17.1250557,22.5 L17.1250557,22.5 L17.1318323,22.4076421 C17.1764726,22.1062579 17.4362575,21.875 17.7500557,21.875 L17.7500557,21.875 L21.8763452,21.875 L21.8756879,13.450698 L21.8708147,13.2848661 C21.7834986,11.8032168 20.5336976,10.625 19.0006879,10.625 C18.0374641,10.625 17.1566215,11.0932345 16.6240619,11.8600869 C16.427168,12.1436017 16.0377199,12.2138218 15.7542051,12.0169279 C15.4706903,11.8200341 15.4004702,11.4305859 15.597364,11.1470711 C16.3617677,10.046378 17.6247636,9.375 19.0006879,9.375 Z M12,12.625 C10.4102122,12.625 9.125,13.8921083 9.125,15.450698 L9.125,15.450698 L9.125,21.875 L14.875,21.875 L14.875,15.450698 C14.875,13.9477722 13.6799494,12.7158795 12.1691243,12.6298042 L12.1691243,12.6298042 Z M12,2.625 C13.0205123,2.625 13.9488855,3.01949413 14.6409411,3.6643038 C15.383777,4.31637846 15.875,5.20579853 15.875,6.125 L15.875,6.125 L15.875,6.75 C15.7378709,8.77392042 14.0559115,10.375 12,10.375 C9.94408848,10.375 8.26212913,8.77392042 8.13297405,6.75061335 L8.125,6.75 L8.125,6.125 C8.125,5.20579853 8.61622303,4.31637846 9.35884765,3.66415428 C10.0511145,3.01949413 10.9794877,2.625 12,2.625 Z M14.613202,6.7505079 L9.38679802,6.7505079 C9.51292504,8.08274798 10.634747,9.125 12,9.125 C13.365253,9.125 14.487075,8.08274798 14.613202,6.7505079 Z M19.1915548,0.625284171 C19.233493,0.624721283 19.2755151,0.624841261 19.3176064,0.625651391 L19.3497737,0.626323405 L19.3497737,0.626323405 L19.4315607,0.62952845 C19.4558853,0.630715721 19.4802286,0.632134433 19.5045877,0.633785981 L19.5524546,0.636928482 L19.6633443,0.647839291 C19.6743389,0.649041015 19.6853355,0.650290571 19.6963339,0.651588088 L19.5524546,0.636928482 C21.1782655,0.764490681 22.5502131,1.89632567 22.9844389,3.46826118 C23.0977152,3.87833132 23.1408518,4.29545442 23.1191266,4.70480317 L23.1169737,6.88117797 L23.1386876,7.06882726 L23.1636366,7.22043869 L23.176,7.28 L23.2348778,7.29191543 C23.6109274,7.38818605 23.8896413,7.84056171 23.6268314,8.23902716 L23.6268314,8.23902716 L23.5711001,8.31300757 C23.4810363,8.41876433 23.3371058,8.55687345 23.1421498,8.69385521 C22.2937818,9.28994336 21.2821702,9.27149975 20.4474812,8.25072209 C20.4333043,8.23338453 20.4191992,8.2157741 20.4051657,8.19788993 C19.28659,8.54839559 18.0432243,8.37814694 17.0433456,7.68576771 C16.7595636,7.48925913 16.6888146,7.09990671 16.8853231,6.81612473 C17.0818317,6.53234276 17.4711841,6.4615937 17.7549661,6.65810227 C18.5526484,7.21046791 19.5790932,7.27227792 20.4274498,6.84590857 C21.066481,6.39268349 21.2614465,5.51817868 20.8424065,4.79958569 C20.793182,4.70236723 20.6459709,4.53688166 20.4232423,4.34146901 C20.2632745,4.2011201 20.0712281,4.05046934 19.8544331,3.89363257 C19.5951828,3.70608224 19.3152872,3.5200814 19.0351507,3.34492002 L19.0351507,3.34492002 L18.993,3.318 L17.1183973,4.55468583 C16.8409455,4.73762111 16.4752286,4.66952355 16.2793241,4.41461272 L16.2793241,4.41461272 L16.2259051,4.3325993 L15.7739595,3.50945662 C15.7093788,3.4147915 15.6716823,3.30360429 15.6656917,3.18873261 L15.6653877,3.16852632 C15.6620064,3.07256798 15.6807216,2.97583104 15.7218098,2.88616162 C16.2328389,1.77090949 17.2203674,0.996979693 18.3541493,0.728753811 C18.3685346,0.726236201 18.3824733,0.723008194 18.3964351,0.719856467 C18.4462769,0.707792172 18.4967342,0.697496676 18.5474399,0.688203683 C18.5574159,0.687082564 18.5674063,0.685283255 18.5774071,0.683522779 C18.6937788,0.662448426 18.811519,0.647330621 18.9301938,0.637666184 C18.9505364,0.636372331 18.9704882,0.63488701 18.9904686,0.633555616 C19.0392473,0.630025919 19.0883717,0.627735216 19.1376209,0.626385249 C19.1410501,0.626462565 19.144727,0.626362841 19.1484047,0.626268338 Z M4.68663029,0.625479966 C4.71766366,0.624959882 4.74865856,0.624814825 4.77960913,0.625041867 C4.81386026,0.625338075 4.8481405,0.626041743 4.88234663,0.627196851 C4.9109956,0.628137059 4.93967335,0.629432423 4.96830229,0.63104524 C5.00793672,0.63328202 5.04700311,0.636073724 5.085952,0.639450474 C5.12011133,0.642446813 5.15488693,0.645945958 5.18957112,0.649911276 C5.21385668,0.652610516 5.2377702,0.655563871 5.26163223,0.658737325 C5.30285982,0.664337403 5.34397218,0.670501087 5.38493091,0.677317537 C5.4121544,0.681679446 5.43975838,0.686567734 5.46728143,0.69175063 C5.49097922,0.696416314 5.51402769,0.700988411 5.53702086,0.705767404 C5.64280656,0.727484641 5.74757,0.753856544 5.85081824,0.784467423 C5.86495313,0.788993655 5.87895893,0.793236942 5.89293758,0.797558474 C6.12362285,0.868470682 6.3465321,0.960968522 6.55884724,1.07305189 C6.70723999,1.15174527 6.85059541,1.23968171 6.98792408,1.33674502 C7.22449467,1.50379404 7.44247573,1.69757869 7.63736066,1.91521172 C7.67565379,1.95814783 7.71327231,2.00209958 7.74996282,2.04698065 C7.85240041,2.17230321 7.94524221,2.3013868 8.03033502,2.43676818 C8.04956609,2.4678072 8.06859851,2.49907452 8.08722298,2.53067464 L8.09268977,2.53947801 C8.16033194,2.65489644 8.22246033,2.7746101 8.2786331,2.89835824 C8.30202001,2.9498794 8.31783488,3.00290923 8.32654738,3.0561972 C8.37609004,3.27265752 8.36845944,3.49668979 8.30838876,3.69003893 C8.17426088,4.19301849 7.77777457,4.63834731 7.22014438,4.63834731 C6.84772866,4.63834731 6.54252868,4.43488066 6.18622233,4.0785743 C6.07074179,3.96309376 5.95247848,3.83169009 5.83185446,3.68694126 L5.83185446,3.68694126 L5.674,3.489 L5.36464564,3.7417515 C5.0675081,3.97221952 4.75245776,4.18817949 4.41610529,4.3908989 L4.41610529,4.3908989 L4.07252658,4.58925174 C3.47092521,4.84290111 2.83703048,5.00806456 2.190569,5.08065646 C2.33023852,5.69736953 2.69145736,6.2577154 3.2306752,6.64049928 C4.13150673,7.27998812 5.33631583,7.28702497 6.24455569,6.65810227 C6.52833766,6.4615937 6.91769009,6.53234276 7.11419866,6.81612473 C7.31070724,7.09990671 7.23995818,7.48925913 6.9561762,7.68576771 C5.61543655,8.61418061 3.8369027,8.60379283 2.50709919,7.65978225 C1.38370711,6.86230051 0.783683872,5.54273484 0.886265805,4.20461384 C0.915365388,3.82129311 1.00052362,3.45201765 1.13431225,3.10550223 C1.14302759,3.08395194 1.15149423,3.06255004 1.16014067,3.04124947 C1.17505183,3.0037111 1.1909373,2.96635758 1.20739074,2.92929586 C1.22066426,2.89991568 1.2339882,2.87082507 1.24765163,2.84194317 C1.25524809,2.82554894 1.26309111,2.80929865 1.27104457,2.79310929 L1.30717328,2.72158038 C1.31541191,2.70562433 1.32375609,2.68973673 1.33220483,2.67391839 C1.35089312,2.63894763 1.36991102,2.60466802 1.38943369,2.57070097 C1.39925968,2.55348195 1.40940201,2.53612607 1.41967245,2.51886124 C1.4405235,2.48400288 1.46184054,2.44945257 1.48368569,2.41525675 C1.49955977,2.39015513 1.51573312,2.36545167 1.53217428,2.34095504 C1.5525713,2.31084588 1.57338883,2.28076605 1.59462294,2.25099095 C1.61235609,2.22583621 1.63039873,2.20115969 1.64871916,2.17671549 C1.6672932,2.15221242 1.68602568,2.12782502 1.70504422,2.10366389 C1.72763472,2.07470254 1.75117525,2.04567026 1.77511619,2.017001 C1.79306139,1.99572099 1.81101502,1.97467357 1.82919277,1.95381843 C1.84997682,1.92980992 1.87116785,1.90610772 1.8926389,1.88267811 C1.91473703,1.85866586 1.93734516,1.83459508 1.96026183,1.810811 C1.98296627,1.78720409 2.00587689,1.76403956 2.0290698,1.74117242 C2.05135808,1.71917229 2.07450698,1.69687896 2.09793763,1.67486887 C2.11855841,1.65556735 2.13958472,1.63626225 2.16081917,1.61719312 C2.19268191,1.58845425 2.2248728,1.56046933 2.25753929,1.53300536 C2.27337939,1.51987058 2.28908604,1.50688662 2.30489409,1.49402693 C2.33283931,1.47107492 2.36151267,1.4483943 2.39052293,1.4261087 C2.41525475,1.40735884 2.44001744,1.38881405 2.46500201,1.37056516 C2.49495051,1.34842323 2.52523884,1.32695382 2.55585896,1.3059064 C2.57782355,1.29108457 2.59987441,1.27626043 2.62208055,1.26166093 C2.65456802,1.24002797 2.68756329,1.21904378 2.72090972,1.1985425 C2.74167915,1.18602584 2.76272131,1.17335652 2.78388893,1.16088435 C2.81816375,1.1404669 2.85238442,1.12101805 2.88694397,1.1020721 C2.91061832,1.08927488 2.93467711,1.07639967 2.95888124,1.06377417 C2.98751036,1.0487011 3.01646451,1.03407435 3.04563792,1.01979696 C3.07716745,1.00444426 3.1088867,0.989429985 3.14083038,0.974838877 C3.17045882,0.961301144 3.20004395,0.948257843 3.22983465,0.935569697 C3.26074777,0.922335549 3.29211553,0.909432199 3.32367816,0.896932665 C3.34771577,0.887550084 3.37169835,0.878347709 3.39580378,0.869373355 C3.43408455,0.854915964 3.47285756,0.841147624 3.51189553,0.827985322 C3.53285095,0.821194837 3.55352902,0.814431959 3.57429,0.807835193 C3.62386313,0.791748899 3.67429085,0.776811288 3.72511203,0.762883402 C3.79149779,0.745089784 3.85805408,0.728738166 3.92533957,0.714083481 L3.73609484,0.759890873 C3.79558579,0.743775222 3.85561226,0.729042139 3.91613438,0.715724501 C3.93133095,0.712778565 3.93732268,0.71148829 3.9433147,0.710212634 C3.993365,0.699205376 4.04401978,0.689485 4.09498872,0.680760415 C4.12254877,0.676302349 4.14994535,0.671895291 4.17733689,0.667788072 C4.21441764,0.662040045 4.25210049,0.656978367 4.28993602,0.652462139 C4.31274101,0.64984802 4.33474116,0.647400298 4.3567325,0.645143642 C4.38612171,0.642071168 4.41654975,0.639322904 4.44706724,0.636928482 L4.50517351,0.632791374 C4.52121252,0.631767145 4.53724436,0.630843782 4.55326823,0.630020887 L4.64974813,0.626323405 L4.64974813,0.626323405 Z"></path></g></svg>
    )
}

export default Space
