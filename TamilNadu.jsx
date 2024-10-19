import Hover from  '../hover/Hover'
import Hover1 from  '../hover/Hover1'
import Hover2 from  '../hover/Hover2'
import Hover3 from '../hover/Hover3'
import '../states/State.css'
function TamilNadu()
{
    return(
        <div>
            <a href='https://www.tamilnadutourism.tn.gov.in/'><h1 className='heading'>Tamil Nadu</h1></a>
            <h2 className='capital'>Capital: Chennai</h2>
            <h1 className='sideheadings'>Places To Visit</h1>
            <div className='Places'>
                <Hover
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfO5vH4kCM0oPr1VAXwzL4HndtOJ3tgo9LNQ&s"
                title="Marina Beach"
                location="Chennai"
                bookUrl="https://www.trivago.in/en-IN/lm/hotels-chennai-india?search=200-64991;dr-20240907-20240908"
                locateUrl= "https://www.google.com/maps/place/Marina+Beach/@13.0437221,80.263211,14z/data=!3m1!4b1!4m6!3m5!1s0x3a52689bb60132bb:0x549cf8edf62b60a!8m2!3d13.0499526!4d80.2824026!16zL20vMDFrcmd4?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
                <Hover
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTho-sv2lu_TckIJTA5b5Z0c_k5inJlTsPeA&s"
                title="Ooty Botanical Gardens"
                location="Ooty"
                bookUrl="https://www.trivago.in/en-IN/lm/hotels-udhagamandalam-india?search=200-101331;dr-20240907-20240908"
                locateUrl= "https://www.google.com/maps/place/Government+Botanical+Garden/@11.4188751,76.7088075,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba8bdeb5bbccb7d:0x7d64a04cc485b38f!8m2!3d11.4188751!4d76.7113878!16zL20vMDYxajc0?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
                <Hover
                imageSrc="https://www.go2india.in/tamilnadu/images/kodaikanal-lake2.JPG"
                title="Kodaikanal Lake"
                location="Kodaikanal"
                bookUrl="https://www.trivago.in/en-IN/lm/hotels-kodaikanal-india?search=200-345028;dr-20240907-20240908"
                locateUrl="https://www.google.com/maps/place/Kodaikanal+Lake/@10.2339342,77.4840704,17z/data=!3m1!4b1!4m6!3m5!1s0x3b0766641729466f:0xedbba44636cb040a!8m2!3d10.2343586!4d77.4863295!16s%2Fm%2F04n50f2?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
                <Hover
                imageSrc="https://www.justahotels.com/wp-content/uploads/2024/02/Ramanathaswamy-Temple.jpg"
                title="Ramanathaswamy Temple"
                location="Rameswaram"
                bookUrl="https://www.trivago.in/en-IN/lm/hotels-rameswaram-india?search=200-74042;dr-20240907-20240908"
                locateUrl="https://www.google.com/maps/place/Sri+Arulmigu+Ramanathaswamy+Temple/@9.2881136,79.3148116,17z/data=!3m1!4b1!4m6!3m5!1s0x3b01e3dc4949ac6d:0x9ffdab70cc4aa4ba!8m2!3d9.2881136!4d79.3173919!16s%2Fm%2F026lcs2?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
            </div>
            <h1 className='sideheadings'>Culture and Tradition</h1>
            <div className='CultureTradition'>
                <Hover3
                imageSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Murugashankari_Leo.jpg/640px-Murugashankari_Leo.jpg"
                title="Bharatanatyam"
                location="A classical dance form originating from Tamil Nadu, known for its intricate footwork and expressive storytelling."
                locateUrl='https://www.youtube.com/watch?v=NRuOxNLC_Lw'
                />
                <Hover1
                imageSrc="https://static.vecteezy.com/system/resources/previews/024/144/085/original/south-indian-wedding-couple-greeting-namaste-in-traditional-dress-of-tamil-nadu-vector.jpg"
                title="Silk Saree and Dhoti"
                location="Women wear silk sarees with jewelry, while men don dhotis with shirts or kurtas."
                />
                <Hover1
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQclyXMSztx4MwYiRV5Nkjf-DxxmRWIZenERw&s"
                title="Pongal"
                location="A major harvest festival celebrated with cooking a special dish called Pongal, featuring family gatherings and cultural performances."
                />
                <Hover1
                imageSrc="https://s.saregama.tech/image/c/m/2/6f/e4/26095-19493-19404-23327-25711-19434-30441-19406-31460-42005_1426578655.jpg"
                title="Carnatic Music"
                location="Carnatic music, a classical tradition of Tamil Nadu, features composers like Tyagaraja and instruments such as the veena and mridangam."
                />
            </div>
            <h1 className='sideheadings'>Cuisine</h1>
            <div className='Cuisine'>
                <Hover1
                imageSrc="https://shwetainthekitchen.com/wp-content/uploads/2022/01/Idli-Sambar.jpg"
                title="Idli"
                location="Steamed rice cakes, often served with sambar and chutney, are a staple breakfast dish in Tamil Nadu."
                />
                <Hover1
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJVrC2Z7OCjmZQ1vrNmWWaJRrMaJ9HzFn2kg&s"
                title="Dosa"
                location="A crispy, thin pancake made from fermented rice and lentil batter, commonly enjoyed with various chutneys and sambar."
                />
                <Hover1
                imageSrc="https://www.indianhealthyrecipes.com/wp-content/uploads/2021/05/sambar.jpg"
                title="Sambar"
                location="A tangy and spicy lentil stew with vegetables, typically served with rice, idli, or dosa."
                />
                <Hover1
                imageSrc="https://www.rakshaskitchen.com/wp-content/uploads/2015/06/Chettinad-Chicken.jpg"
                title="Chettinad Chicken Curry"
                location="A spicy chicken curry with roasted spices and herbs, showcasing Chettinad flavors."
                />
            </div>
            <h1 className='sideheadings'>Wild Life and Nature</h1>
            <div className='WildLife'>
                <Hover2
                imageSrc="https://www.tamilnadutourism.tn.gov.in/img/pages/large-desktop/the-mudumalai-national-park-1654765717_d22e0b942953b6a4357f.webp"
                title="Mudumalai National Park"
                locateUrl ="https://www.google.com/maps/place/Mudumalai+Tiger+Reserve/@11.5999313,76.4888259,13z/data=!4m10!1m2!2m1!1sMudumalai+National+Park!3m6!1s0x3ba8a883ad22006b:0x95719e71c7f9c63!8m2!3d11.5622767!4d76.5345221!15sChdNdWR1bWFsYWkgTmF0aW9uYWwgUGFya1oZIhdtdWR1bWFsYWkgbmF0aW9uYWwgcGFya5IBDW5hdGlvbmFsX3BhcmvgAQA!16zL20vMDhna2Rm?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
                <Hover2
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYf5BVL_LQe2X5MvY9_b0nl1Z55_1C2dt1Jw&s"
                title="Kalakkad Mundanthurai Tiger Reserve"
                locateUrl="https://www.google.com/maps/place/Kalakad+Mundanthurai+Tiger+Reserve/@8.5966251,77.3053834,12z/data=!4m10!1m2!2m1!1sKalakkad+Mundanthurai+Tiger+Reserve!3m6!1s0x3b04447ecd102c63:0xd08b53b34553890a!8m2!3d8.5049278!4d77.466445!15sCiNLYWxha2thZCBNdW5kYW50aHVyYWkgVGlnZXIgUmVzZXJ2ZZIBEG5hdGlvbmFsX3Jlc2VydmXgAQA!16s%2Fg%2F1tdsh66n?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
                <Hover2
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsmcqkSZBRZ9aXhibGkUfK8MXwq2LZ3q2J2Q&s"
                title="Annamalai Tiger Reserve"
                locateUrl= "https://www.google.com/maps/place/Aanamalai+Tiger+Reserve/@10.4059862,77.126913,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba82a57e32f330b:0x837528b15369b92e!8m2!3d10.4059862!4d77.1294933!16zL20vMDdiZDB0?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
                <Hover2
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVgNinK6UE--SK717xRGOKeSHIXRApI-xuIA&s"
                title="Vedanthangal Bird Sanctuary"
                locateUrl="https://www.google.com/maps/place/Vedanthangal+Bird+Sanctuary/@12.5454597,79.8534891,17z/data=!3m1!4b1!4m6!3m5!1s0x3a531c41b9d3652d:0x61e0072c7991c53d!8m2!3d12.5454597!4d79.8560694!16s%2Fm%2F051y0t1?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
            </div>
            <h1 className='sideheadings'>Shopping Destinations</h1>
            <div className='Shopping'>
                <Hover2
                imageSrc="https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/2018/03/08221022/TNagar.jpg"
                title="T. Nagar"
                locateUrl="https://www.google.com/maps/place/T.+Nagar,+Chennai,+Tamil+Nadu/@13.0425936,80.2283327,15z/data=!3m1!4b1!4m6!3m5!1s0x3a526655a5da2371:0x4954f49743f04af0!8m2!3d13.0417591!4d80.2340761!16zL20vMDU5M2dx?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
                <Hover2
                imageSrc="https://vivaciousanushri.wordpress.com/wp-content/uploads/2014/11/pondy-bazaar-chennai.jpg"
                title="Pondy Bazaar"
                locateUrl="https://www.google.com/maps/place/Pondy+Bazaar,+T.+Nagar,+Chennai,+Tamil+Nadu+600017/@13.0400132,80.2347089,18z/data=!3m1!4b1!4m6!3m5!1s0x3a526655cd52d36b:0xd50c3122ba1c4313!8m2!3d13.0398891!4d80.2368745!16s%2Fm%2F026qhg7?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
                <Hover2
                imageSrc="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/91/c3/38/inside-view-ea-mall.jpg?w=1200&h=1200&s=1"
                title="Express Avenue Mall"
                locateUrl="https://www.google.com/maps/place/Express+Avenue/@13.0584546,80.2616041,17z/data=!3m1!4b1!4m6!3m5!1s0x3a525d9a9c244571:0x8795a1a0b7a4534b!8m2!3d13.0584546!4d80.2641844!16s%2Fm%2F09gm09g?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
                <Hover2
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBXmyxqkKPbcuS0I0-t2FmJkMSu_fuFzVRZw&s"
                title="Phoenix MarketCity"
                locateUrl="https://www.google.com/maps/place/Phoenix+Marketcity/@12.991524,80.2166046,18z/data=!4m10!1m2!2m1!1sPhoenix+MarketCity!3m6!1s0x3a526763b48e60eb:0xdb3a29009036c251!8m2!3d12.9929399!4d80.2178681!15sChJQaG9lbml4IE1hcmtldENpdHlaFCIScGhvZW5peCBtYXJrZXRjaXR5kgEPc2hvcHBpbmdfY2VudGVy4AEA!16s%2Fg%2F1q54w6krf?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
            </div>
            <h1 className='sideheadings'>Historical Significance</h1>
            <div className='Historical'>
                <Hover1
                imageSrc="https://www.abhibus.com/blog/wp-content/uploads/2023/04/Madurai-Meenakshi-Temple-History-Timings-How-to-Reach.jpg"
                title="Meenakshi Temple"
                location="A historic temple in Madurai known for its elaborate Dravidian architecture."
                />
                <Hover1
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQVZIleTT2pV4ou25n5iTmjTVACImuiOHmKg&s"
                title="Brihadeeswarar Temple"
                location="A UNESCO World Heritage Site in Thanjavur, famous for its Chola dynasty architecture."
                />
                <Hover1
                imageSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Fort_St._George%2C_Chennai_2.jpg/640px-Fort_St._George%2C_Chennai_2.jpg"
                title="Fort St. George"
                location="The first English fort in India, marking the start of British colonial rule."
                />
                <Hover1
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKSRZtydxf1iWPlt_X_MXoBD8tZC-cSgOGwQ&s"
                title="Kanchipuram"
                location="Known for its numerous temples and historical significance during the Pallava and Chola dynasties."
                />
            </div>
            <h1 className='sideheadings'>Travel Tips</h1>
            <div className='Historical'>
                <Hover1
                imageSrc="https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2024/06/28120553/travel-abroad-tips-1600x900.jpeg"
                title = "Hydration"
                location="Drink bottled water to avoid stomach issues, and stay hydrated due to the hot and humid climate."
                />
                <Hover1
                imageSrc="https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2024/06/28120553/travel-abroad-tips-1600x900.jpeg"
                title = "Food"
                location="Tamil Nadu's cuisine is spicy. Be cautious with street food if sensitive, and try local delicacies at reputable places."
                />
                <Hover1
                imageSrc="https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2024/06/28120553/travel-abroad-tips-1600x900.jpeg"
                title = "Permits"
                location="Some areas near border regions may require special permits. Check in advance and ensure you have necessary permissions."
                />
                <Hover1
                imageSrc="https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2024/06/28120553/travel-abroad-tips-1600x900.jpeg"
                title = "Respect Local Customs"
                location="Participate in local festivals and traditions with respect, and follow local customs and etiquette."
                />
            </div>
        </div>
    )
}
export default TamilNadu;
