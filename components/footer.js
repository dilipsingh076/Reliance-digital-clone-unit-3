function footerPart() {
    return `   <div id="footer">
    <div id="footer-left-div">
        <div id="title_name">
            <h3>PRODUCT CATEGORIES</h3>
        </div>
        <div id="list">
            <ul>
                <li><a href="#" alt="_blank">Smartphones</a></li>
                <li><a href="#" alt="_blank">Laptops</a></li>
                <li><a href="#" alt="_blank">DSLR Cameras</a></li>
                <li><a href="#" alt="_blank">Televisions</a></li>
                <li><a href="#" alt="_blank">Air Conditions</a></li>
                <li><a href="#" alt="_blank">Refrigerators</a></li>
                <li><a href="#" alt="_blank">Kitchen Appliances</a></li>
                <li><a href="#" alt="_blank">Accessories</a></li>
                <li><a href="#" alt="_blank">Personal Care & Grooming</a></li>
            </ul>
        </div>
        <div id="logo_images">
            <h3 id="title_name">FOLLOW US</h3>
            <img src="https://s.yimg.com/fz/api/res/1.2/SBnTtvtkyJXCCDtTnKcQUw--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTI0MDtxPTgwO3c9MjQw/https://s.yimg.com/zb/imgv1/c165dc31-f7f7-35c4-8df4-cdd842798724/t_500x300" alt="">
            <img src="https://img.icons8.com/ios/2x/twitter.png" alt="" style="filter: brightness(0) invert(1); margin-left: 10px;">
            <img src="https://img.icons8.com/ios-filled/2x/youtube.png" alt="" style="filter: brightness(0) invert(1); margin-left: 10px;">
        </div>
    </div>
    <div id="footer-middle-div">
        <div id="middle-1">
            <div>
                <div id="title_name">
                    <h3>SITE INFO</h3>
                </div>
                <div id="list">
                    <ul>
                        <ul>
                            <li><a href="#" alt="_blank">About Reliance Digital</a></li>
                            <li><a href="#" alt="_blank">resQ Services</a></li>
                            <li><a href="#" alt="_blank">Site Map</a></li>
                            <li><a href="#" alt="_blank">Gift Cards</a></li>
                            <li><a href="#" alt="_blank">Corporate Enquires</a></li>
                            <li><a href="#" alt="_blank">Contact Us</a></li>
                        </ul>
                    </ul>
                </div>
            </div>
            <div>
                <div id="title_name">
                    <h3>RESOURCE CENTER</h3>
                </div>
                <div id="list">
                    <ul>
                        <ul>
                            <li><a href="#" alt="_blank">Product Reviews</a></li>
                            <li><a href="#" alt="_blank">Buying Guides</a></li>
                            <li><a href="#" alt="_blank">How Tos</a></li>
                            <li><a href="#" alt="_blank">Featured Stories</a></li>
                            <li><a href="#" alt="_blank">Events & Happenings</a></li>
                            <li><a href="#" alt="_blank">How Tos</a></li>
                        </ul>
                    </ul>
                </div>
            </div>
        </div>
        <div id="playstore-logo">
            <h3 id="title_name">EXPERIENCE RELIANCE DIGITAL APP ON MOBILE</h3>
            <img src="https://www.reliancedigital.in/build/client/images/google_play_store.png" alt="">
            <img src="https://www.reliancedigital.in/build/client/images/ios_app_store_icon.png" alt="">
        </div>
    </div>
    <div id="footer-right-div">
        <div id="title_name">
            <h3>POLICIES</h3>
        </div>
        <div id="list">
            <ul>
                <li><a href="#" alt="_blank">Terms of Use</a></li>
                <li><a href="#" alt="_blank">FAQs</a></li>
                <li><a href="#" alt="_blank">Cancellation and Return Policy</a></li>
                <li><a href="#" alt="_blank">Privacy Pokicy</a></li>
                <li><a href="#" alt="_blank">Shipping and Delivery Policy</a></li>
                <li><a href="#" alt="_blank">E-waste Policy</a></li>
                <li><a href="#" alt="_blank">EMI Terms & Conditions</a></li>
                <li><a href="#" alt="_blank">Pricing and Payments Policy</a></li>
                <li><a href="#" alt="_blank">RelianceOne Loyalty T & C</a></li>
            </ul>
        </div>
    </div>
</div>
<div id="footer-copyright"></div>
<div id="footer-copyright">
    <p> © 2022 Reliance Digital. All Rights Reserved.</p>
</div>`
}

export default footerPart;

/*
for import footer in other pages simply do... 
<script type="module">
    import footerPart from "footer.js";
    //console.log(footerPart);
    document.getElementById("footer-part").innerHTML = footerPart()
</script>
like this
*/