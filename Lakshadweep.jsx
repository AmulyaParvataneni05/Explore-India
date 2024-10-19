import Hover from  '../hover/Hover'
import Hover1 from  '../hover/Hover1'
import Hover2 from  '../hover/Hover2'
import Hover3 from '../hover/Hover3'
import '../states/State.css'
function Lakshadweep() {
  return(
    <div>
        <a href='https://lakshadweep.gov.in/tourism/tourist-packages/'><h1 className='heading'>Lakshadweep</h1></a>
        <h2 className='capital'>Capital: Kavaratti</h2>
        <h1 className='sideheadings'>Places To Visit</h1>
        <div className='Places'>
            <Hover
            imageSrc="https://dr7f10k1l6bnm.cloudfront.net/wp-content/uploads/2024/04/minicoy-atoll-resort-min.jpg"
            title="Minicoy Island"
            location="Minicoy"
            bookUrl="https://www.trivago.in/en-IN/lm/hotels-minicoy-india?search=200-64979;dr-20241008-20241009"
            locateUrl= "https://www.google.com/maps/place/Minicoy+Island/@8.2953739,73.0276423,14z/data=!3m1!4b1!4m6!3m5!1s0x3b7317843bf8e925:0x995bdf9c37ba2156!8m2!3d8.273962!4d73.049586!16s%2Fm%2F025s2z2?entry=ttu&g_ep=EgoyMDI0MDkzMC4wIKXMDSoASAFQAw%3D%3D"
            />
            <Hover
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1j4QNUZUDMZ1BZx2HWO2VqZNBq7chjIYJ4A&s"
            title="Bangaram Island"
            location="Bangaram"
            bookUrl="https://www.trivago.in/en-IN/lm/bangaram-island-beach-resort?search=100-523476;dr-20241008-20241009"
            locateUrl= "https://www.google.com/maps/place/Bangaram+Atoll/@10.9405913,72.2827972,16z/data=!3m1!4b1!4m6!3m5!1s0x3b9e8cf90a6bd555:0xe47d88c9eb469dfc!8m2!3d10.9364592!4d72.2881907!16s%2Fm%2F05zpppk?entry=ttu&g_ep=EgoyMDI0MDkzMC4wIKXMDSoASAFQAw%3D%3D"
            />
            <Hover
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRpcHjdtGsyhkC7Rs1XHfDElA5dVEd0zGb-A&s"
            title="Kalpeni Island"
            location="Kalpeni"
            bookUrl="https://www.trivago.in/en-IN/lm/hotels-kavaratti-india?search=200-64978;dr-20241008-20241009"
            locateUrl="https://www.google.com/maps/place/Kalpeni/@10.0805111,73.6185426,14z/data=!3m1!4b1!4m6!3m5!1s0x3b0aaf6fcb6b55ef:0x3e96ba62f73f58a7!8m2!3d10.0665104!4d73.6447908!16zL20vMDkwbm1i?entry=ttu&g_ep=EgoyMDI0MDkzMC4wIKXMDSoASAFQAw%3D%3D"
            />
            <Hover
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfdy4Oqaa0xqwDgjRRoz_aMuNUl0nNDaJn7w&s"
            title="Viringili Island"
            location="Viringili"
            bookUrl="https://www.trivago.in/en-IN/lm/hotels-kavaratti-india?search=200-64978;dr-20241008-20241009"
            locateUrl="https://www.google.com/maps/place/Viringili+Island/@8.2781139,73.009147,17z/data=!3m1!4b1!4m6!3m5!1s0x3b7319e60cfe5467:0x1df7f0f09932448!8m2!3d8.2781441!4d73.0115631!16s%2Fg%2F1216fntv?entry=ttu&g_ep=EgoyMDI0MDkzMC4wIKXMDSoASAFQAw%3D%3D"
            />
        </div>
        <h1 className='sideheadings'>Culture and Tradition</h1>
        <div className='CultureTradition'>
            <Hover3
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3Asw9d2AnFqCKWMo5rFvxdQm9S6iliYfqFw&s"
            title="Lava Dance"
            location="The Lava Dance is a traditional energetic performance, often done during local festivals and community celebrations."
            locateUrl='https://www.youtube.com/watch?v=iKbqDZFUbGE'
            />
            <Hover1
            imageSrc="https://i.pinimg.com/736x/df/0c/91/df0c918b5d7a90c1012e105316036d5a.jpg"
            title="Lungi"
            location="Men typically wear the Lungi, a simple, comfortable garment that reflects the island’s tropical climate."
            />
            <Hover1
            imageSrc="https://i0.wp.com/www.opindia.com/wp-content/uploads/2021/12/JummaNamaz.jpg?w=1200&ssl=1"
            title="Eid"
            location="Eid is celebrated with great joy, featuring communal prayers, feasts, and cultural gatherings."
            />
            <Hover1
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvksW3N7-AH17qS7t5fr6LxSOzokAk3wX64Q&s"
            title="Chenda"
            location="The Chenda drum is central to Lakshadweep’s music, used during festivals and important ceremonies."
            />
        </div>
        <h1 className='sideheadings'>Cuisine</h1>
        <div className='Cuisine'>
            <Hover1
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFX-6kd5ZIjx_Btbdeq1SUhFpIbuuj_aEi6Q&s"
            title="Seafood Curry"
            location="Fresh fish and seafood cooked in coconut milk and local spices, showcasing the region’s coastal flavors."
            />
            <Hover1
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS3NdGuV1Hefg_SS_09VAIMQfaz4hjaHGVgg&s"
            title="Puttu"
            location="A steamed rice cake layered with grated coconut, commonly enjoyed for breakfast."
            />
            <Hover1
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRykPzubz3sdysGuR0q8Em2134C_S_aZHZ2Hg&s"
            title="Fish Molee"
            location="A mild and flavorful fish curry cooked with coconut milk and spices, typical in coastal cuisine."
            />
            <Hover1
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9MfFLG9jatMj59GyyhYjvb_oqCpc9MSaSYw&s"
            title="Neichoru"
            location="Flavored rice cooked with coconut oil, often served with curries and side dishes."
            />
        </div>
        <h1 className='sideheadings'>Wild Life and Nature</h1>
        <div className='WildLife'>
            <Hover2
            imageSrc="https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/04/iStock-1170804921-1024x683.jpg?w=1155&h=2969"
            title="Marine Life"
            locateUrl ="https://www.google.com/maps/place/Marine+Aquarium+and+Museum/@9.695515,71.2952479,8z/data=!4m10!1m2!2m1!1sMarine+Lifes+lakshadweep!3m6!1s0x3b9e4b8ae7c00d4b:0x6fb934516913e128!8m2!3d10.5764549!4d72.6402671!15sChdNYXJpbmUgTGlmZSBsYWtzaGFkd2VlcFoZIhdtYXJpbmUgbGlmZSBsYWtzaGFkd2VlcJIBBm11c2V1bZoBJENoZERTVWhOTUc5blMwVkpRMEZuU1VNMk1EbEVValpCUlJBQuABAA!16s%2Fg%2F11c0rm3b1r?entry=ttu&g_ep=EgoyMDI0MDkzMC4wIKXMDSoASAFQAw%3D%3D"
            />
            <Hover2
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIkoAUY127Z7L8eMDTFA-swy6NNJsg8bhwoA&s"
            title="Pitti Island"
            locateUrl="https://www.google.com/maps/place/Pitti+Island/@10.8333333,72.0730306,10z/data=!4m10!1m2!2m1!1sPitti+Island!3m6!1s0x3b9e55f406e8927f:0xbbc4dfa1417c64bb!8m2!3d10.8333333!4d72.6333333!15sCgxQaXR0aSBJc2xhbmSSAQZpc2xhbmTgAQA!16s%2Fg%2F11c1pd0yrs?entry=ttu&g_ep=EgoyMDI0MDkzMC4wIKXMDSoASAFQAw%3D%3D"
            />
            <Hover2
            imageSrc="https://dr7f10k1l6bnm.cloudfront.net/wp-content/uploads/2024/04/minicoy-atoll-resort-min.jpg"
            title="Minicoy Island"
            locateUrl= "https://www.google.com/maps/place/Minicoy+Island/@8.2953739,73.0276423,14z/data=!3m1!4b1!4m6!3m5!1s0x3b7317843bf8e925:0x995bdf9c37ba2156!8m2!3d8.273962!4d73.049586!16s%2Fm%2F025s2z2?entry=ttu&g_ep=EgoyMDI0MDkzMC4wIKXMDSoASAFQAw%3D%3D"
            />
            <Hover2
            imageSrc="https://lakshadweepvoyage.com/wp-content/uploads/2017/08/kavaratti.jpg"
            title="Kavaratti Lagoon"
            locateUrl="https://www.google.com/maps/place/Kavaratti+Island/@10.7094734,72.2606613,11z/data=!4m10!1m2!2m1!1sKavaratti+Lagoon!3m6!1s0x3b9e4b38b0d5c83b:0x90b65af980a6f083!8m2!3d10.56507!4d72.6417265!15sChBLYXZhcmF0dGkgTGFnb29uWhIiEGthdmFyYXR0aSBsYWdvb26SARJ0b3VyaXN0X2F0dHJhY3Rpb26aASNDaFpEU1VoTk1HOW5TMFZKUTBGblNVUjROMTlmYjB0M0VBReABAA!16s%2Fg%2F11rwm17dbt?entry=ttu&g_ep=EgoyMDI0MDkzMC4wIKXMDSoASAFQAw%3D%3D"
            />
        </div>
        <h1 className='sideheadings'>Shopping Destinations</h1>
        <div className='Shopping'>
            <Hover2
            imageSrc="https://static.wanderon.in/wp-content/uploads/2024/04/shopping-experience-source-sea-water-sports-min.jpg"
            title="Minicoy Island Market"
            locateUrl="https://www.google.com/maps/search/Minicoy+Island+Market/@8.2953729,73.0275564,14z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI0MDkzMC4wIKXMDSoASAFQAw%3D%3D"
            />
            <Hover2
            imageSrc="https://swastikholiday.com/blogs/img/shopping-places-in-lakshadweep.jpg"
            title="Agatti Island Local Market"
            locateUrl="https://www.google.com/maps/search/Agatti+Island+Local+Market/@10.8446868,72.6070532,10z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI0MDkzMC4wIKXMDSoASAFQAw%3D%3D"
            />
            <Hover2
            imageSrc="https://swastikholiday.com/blogs/img/lakshadweep-shopping-places.jpg"
            title="Kavaratti Island Market"
            locateUrl="https://www.google.com/maps/search/Kavaratti+Island+Market/@10.5591019,72.6119401,14z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI0MDkzMC4wIKXMDSoASAFQAw%3D%3D"
            />
            <Hover2
            imageSrc="https://dr7f10k1l6bnm.cloudfront.net/wp-content/uploads/2024/05/craft-market-min.jpeg"
            title="Kalpeni Island Market"
            locateUrl="https://www.google.com/maps/place/PNP+Super+Market/@10.0720587,73.6445387,17z/data=!3m1!4b1!4m6!3m5!1s0x3b0aaf1b4a5f764b:0xbce9f4f5bc0afaca!8m2!3d10.0720587!4d73.647119!16s%2Fg%2F11kc3f27f7?entry=ttu&g_ep=EgoyMDI0MDkzMC4wIKXMDSoASAFQAw%3D%3D"
            />
        </div>
        <h1 className='sideheadings'>Historical Significance</h1>
        <div className='Historical'>
            <Hover1
            imageSrc="https://img.staticmb.com/mbcontent/images/crop/uploads/2022/7/jama-masjid-delhi_0_1200.jpg"
            title="Juma Masjid"
            location="A centuries-old mosque known for its intricate woodwork and Islamic architecture, reflecting the island's history."
            />
            <Hover1
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRviSGnClwT6HxQ5wlc1v12fBIXMUGi6hSE6g&s"
            title="Lighthouse"
            location="Built in 1885 by the British, the lighthouse offers a panoramic view and highlights the maritime history of Lakshadweep."
            />
            <Hover1
            imageSrc="https://a.travel-assets.com/findyours-php/viewfinder/images/res70/121000/121330-Ahu-Tongariki.jpg"
            title="Amini Island Stone Carving"
            location="The island is famous for ancient stone carvings, representing Lakshadweep’s unique craft and historical trade."
            />
            <Hover1
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0nG13jBMsUCwPBBdXHeIr-awywg-WcNIWWQ&s"
            title="Agatti Island"
            location="Historically significant as a trade route in the Arabian Sea, reflecting Lakshadweep’s ancient maritime connections."
            />
        </div>
        <h1 className='sideheadings'>Travel Tips</h1>
        <div className='Historical'>
            <Hover1
            imageSrc="https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2024/06/28120553/travel-abroad-tips-1600x900.jpeg"
            title = "Best Time to Visit"
            location="The ideal time is from October to March when the weather is pleasant and dry."
            />
            <Hover1
            imageSrc="https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2024/06/28120553/travel-abroad-tips-1600x900.jpeg"
            title = "Permits Required"
            location="Obtain the necessary permits in advance as Lakshadweep is a protected area."
            />
            <Hover1
            imageSrc="https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2024/06/28120553/travel-abroad-tips-1600x900.jpeg"
            title = "Local Cuisine"
            location="Savor the seafood delicacies and coconut-infused dishes unique to the islands."
            />
            <Hover1
            imageSrc="https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2024/06/28120553/travel-abroad-tips-1600x900.jpeg"
            title = "Respect Marine Life"
            location="Follow guidelines when snorkeling or diving to protect coral reefs and marine ecosystems."
            />
        </div>
    </div>
)
}
export default Lakshadweep;