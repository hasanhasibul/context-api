import React from 'react';
import CategoryDetails from '../CategoryDetails/CategoryDetails';
import { useContext } from 'react';
import { categoryContext } from '../../App';
import { useState } from 'react';
import { useEffect } from 'react';
 
const allProducts = [
    {name : 'Dell',category:'laptop',dis:'this is sort discribtion',img:'https://scontent.fdac4-1.fna.fbcdn.net/v/t1.0-9/101751388_673162456863858_6500010622527209472_n.jpg?_nc_cat=108&_nc_sid=8024bb&_nc_eui2=AeH5kbeISosyBZZcGZmaLppGKLzIMiUKR3UovMgyJQpHde5KQLRHsNUPiEMu-wPBCNa9uBPYt8qgJ5ANQkUNMJkr&_nc_ohc=3RuHtPHLU7IAX-oPfK9&_nc_ht=scontent.fdac4-1.fna&oh=93efee9570ab0452cc41bc892e7787dd&oe=5F1A7023'},
     {name:'asus',category:'laptop',dis:'this is sort discribtion',img:'https://scontent.fdac4-1.fna.fbcdn.net/v/t1.0-9/101946889_673162523530518_4523971726702280704_n.jpg?_nc_cat=107&_nc_sid=8024bb&_nc_eui2=AeH2SChatLJYHYBhSK0easz_-ASuN2m7zzn4BK43abvPORVUVjyu0BqxqveUl84elyWDDIW9SUg1MOJJ7mr6SFZM&_nc_ohc=zkbDDvKzlI4AX8AahyQ&_nc_ht=scontent.fdac4-1.fna&oh=045afec4097f19e534e5c5ba0036a055&oe=5F1BD1E2'},
     {name:'Lanovo',category:'laptop',dis:'this is sort discribtion',img:'https://scontent.fdac4-1.fna.fbcdn.net/v/t1.0-9/s960x960/101003718_673162463530524_5311554882090565632_o.jpg?_nc_cat=100&_nc_sid=8024bb&_nc_eui2=AeGbWHt3k0eGyT7TwRlYd1VbqkhQG3-p3_aqSFAbf6nf9m14Zcdt3-nR8gm0JKKrppnfxlc_LFOrJnMSHgAwayHG&_nc_ohc=EAZDQD8TLk4AX_1F9M2&_nc_ht=scontent.fdac4-1.fna&_nc_tp=7&oh=18f3d7d8131d4b49c376e38cc8aed897&oe=5F1A731A'},
    {name : 'samsang',category:'mobile',dis:'this is sort discribtion',img:'https://scontent.fdac4-1.fna.fbcdn.net/v/t1.0-9/101805482_673162753530495_149321942569058304_n.jpg?_nc_cat=104&_nc_sid=8024bb&_nc_eui2=AeFkfRQUXqInQQcVF_hCDm9wSjg5aQgA-_BKODlpCAD78G7Pww5jvyFeGWUHjL06O0lsjEbbZLgxMI00yg28gCxC&_nc_ohc=N2cI9k2C1BsAX-8FgTR&_nc_ht=scontent.fdac4-1.fna&oh=30511a59cb7266a326fc53d9425247ae&oe=5F1931C8'},
     {name:'nokia',category:'mobile',dis:'this is sort discribtion',img:'https://scontent.fdac4-1.fna.fbcdn.net/v/t1.0-9/p960x960/100899130_673162880197149_1449659433582854144_o.jpg?_nc_cat=103&_nc_sid=8024bb&_nc_eui2=AeFB1auJpJJayl-rJ-M4bivOLjnnX1YzkQouOedfVjORCk2BONCbjGjFmoDKfrS2k_N3RUuqe_W7d5vuDM5FwBbw&_nc_ohc=EP8xs1d2ScoAX_E6Ybq&_nc_ht=scontent.fdac4-1.fna&_nc_tp=6&oh=111ac3af12863542daff4ade1bd8f562&oe=5F1BCE39'}, 
     {name:'apple',category:'mobile',dis:'this is sort discribtion',img:'https://scontent.fdac4-1.fna.fbcdn.net/v/t1.0-9/s960x960/83311553_673163053530465_131168928285065216_o.jpg?_nc_cat=105&_nc_sid=8024bb&_nc_eui2=AeEK1pH-McahAeSPEJ_r22Y_5ZBbl03DGcHlkFuXTcMZwfEE9RFN-6Ctp6X_8f2EYPBBi9npv-fOs_JESpd-jrdX&_nc_ohc=MeU9Jcv9NZ0AX-wimWH&_nc_ht=scontent.fdac4-1.fna&_nc_tp=7&oh=53215a8e470363fae6bb1b46c95c0e24&oe=5F1B897E'},
    {name : 'canon',category:'camera',dis:'this is sort discribtion',img:'https://scontent.fdac4-1.fna.fbcdn.net/v/t1.0-9/s960x960/101866558_673163296863774_4184206183994753024_o.jpg?_nc_cat=101&_nc_sid=8024bb&_nc_eui2=AeEvGjbrJfJ0ceE0FYxzlQhOq7_d9hMs7wurv932EyzvCy6nFClpThzOLYtY1hxwtZ2iKPNOQcOpiIFNFQ54VvpQ&_nc_ohc=vG7XewpUyA0AX-WIWZs&_nc_ht=scontent.fdac4-1.fna&_nc_tp=7&oh=1ac28112c24ca2bf83a9ba27c78bb998&oe=5F1B684E'},
     {name:'nikkon',category:'camera',dis:'this is sort discribtion',img:'https://scontent.fdac4-1.fna.fbcdn.net/v/t1.0-9/s960x960/82641247_673163336863770_3285844440379293696_o.jpg?_nc_cat=109&_nc_sid=8024bb&_nc_eui2=AeFWeQTv3bOSQBlAuVyTeid2yUqOCU0gGvbJSo4JTSAa9jsUO9puIOb394sukEC-VHN41pkIjnny_6SJW6pj0MPE&_nc_ohc=mPOSywbpEo0AX_dEH6q&_nc_ht=scontent.fdac4-1.fna&_nc_tp=7&oh=2abc457458b07ce6be63f4e6ec49201a&oe=5F1AC265'},
      {name:'sony',category:'camera',dis:'this is sort discribtion',img:'https://scontent.fdac4-1.fna.fbcdn.net/v/t1.0-9/s960x960/78482973_673163423530428_3675665013718122496_o.jpg?_nc_cat=102&_nc_sid=8024bb&_nc_eui2=AeG9w_xaKtbAflDU8pcTD_wdua7i1vbieK25ruLW9uJ4reKSbiMRSF7sL0zf7MiQbyE7mhOH-ePho0KnrYjR0BdC&_nc_ohc=ddCz6top2OQAX9vsgz3&_nc_ht=scontent.fdac4-1.fna&_nc_tp=7&oh=3d6917298104ca655541ef956330898c&oe=5F197E7F'}
]
const Category = () => {

    const [category] = useContext(categoryContext);
    
    const [products,setProducts]=useState([]);

    useEffect(()=>{

    const matchProduct = allProducts.filter(pd=>pd.category === category);
    setProducts(matchProduct)
    },[category])

    return (
        <div>
            <h1>present Category is {category} </h1>
            {
                products.map(pd => <CategoryDetails product={pd}></CategoryDetails>)
            }
        </div>
    );
};

export default Category;