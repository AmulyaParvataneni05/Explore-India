import Hover from  '../hover/Hover'
import Hover1 from  '../hover/Hover1'
import Hover2 from  '../hover/Hover2'
import Hover3 from '../hover/Hover3'
import '../states/State.css'
function MadhyaPradesh() {
  return(
    <div>
        <a href='https://www.mptourism.com/'><h1 className='heading'>Madhya Pradesh</h1></a>
        <h2 className='capital'>Capital: Bhopal</h2>
        <h1 className='sideheadings'>Places To Visit</h1>
        <div className='Places'>
            <Hover
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPqmq816VfcOQY3obxl6HPhlirFDb7u0ZJKg&s"
            title="Khajuraho Temples"
            location="Khajuraho"
            bookUrl="https://www.trivago.in/en-IN/lm/hotels-khajuraho-india?search=200-74261;dr-20241008-20241009"
            locateUrl= "https://www.google.com/maps/place/Khajuraho,+Madhya+Pradesh+471606/@24.8299587,79.8705403,13z/data=!3m1!4b1!4m6!3m5!1s0x3982e5f63138c3c5:0xaa20ea639a4572c!8m2!3d24.8318452!4d79.9198549!16zL20vMDFweDFr?entry=ttu&g_ep=EgoyMDI0MDkyOS4wIKXMDSoASAFQAw%3D%3D"
            />
            <Hover
            imageSrc="https://cdn.britannica.com/36/155836-050-89E7AA9E/Great-Stupa-Sanchi-India.jpg"
            title="Sanchi Stupa"
            location="Sanchi"
            bookUrl="https://www.trivago.in/en-IN/lm/hotels-sanchi-india?search=200-388042;dr-20241008-20241009"
            locateUrl= "https://www.google.com/maps/place/Sanchi+Stupa+No.+1/@23.4832569,77.7364761,17z/data=!4m10!1m2!2m1!1sSanchi+Stupa!3m6!1s0x397c0f0187f0b81b:0xf7cb87fbbf090027!8m2!3d23.479375!4d77.7396595!15sCgxTYW5jaGkgU3R1cGFaDiIMc2FuY2hpIHN0dXBhkgETaGlzdG9yaWNhbF9sYW5kbWFya-ABAA!16s%2Fg%2F11j3ty9h42?entry=ttu&g_ep=EgoyMDI0MDkyOS4wIKXMDSoASAFQAw%3D%3D"
            />
            <Hover
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6LaAxP-cuNlJrEn5JF5gQaxmH4eHGgbblxA&s"
            title="Bhimbetka Rock Shelters"
            location="Raisen"
            bookUrl="https://www.trivago.in/en-IN/lm/hotel-amogh-raisen-bhopal?search=100-31598848;dr-20241008-20241009"
            locateUrl="https://www.google.com/maps/place/Bhimbetka+rock+shelters/@22.9395461,77.6098528,17z/data=!3m1!4b1!4m6!3m5!1s0x397c357473b13b3f:0xb8823ee0ae5de8e6!8m2!3d22.9395461!4d77.6124331!16zL20vMDNkcTlz?entry=ttu&g_ep=EgoyMDI0MDkyOS4wIKXMDSoASAFQAw%3D%3D"
            />
            <Hover
            imageSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Mahakal_Temple_Ujjain.JPG/1200px-Mahakal_Temple_Ujjain.JPG"
            title="Ujjain Mahakaleshwar Temple"
            location="Ujjain"
            bookUrl="https://www.trivago.in/en-IN/lm/hotels-ujjain-india?search=200-345253;dr-20241008-20241009"
            locateUrl="https://www.google.com/maps/place/Shri+Mahakaleshwar+Jyotirlinga+Temple/@23.1828903,75.7657249,17z/data=!4m10!1m2!2m1!1sUjjain+Mahakaleshwar+Temple!3m6!1s0x3963743638ffffff:0x3024e4d1bd13cc22!8m2!3d23.1829019!4d75.7682392!15sChtVamphaW4gTWFoYWthbGVzaHdhciBUZW1wbGVaHSIbdWpqYWluIG1haGFrYWxlc2h3YXIgdGVtcGxlkgEMaGluZHVfdGVtcGxl4AEA!16zL20vMDZzaDBu?entry=ttu&g_ep=EgoyMDI0MDkyOS4wIKXMDSoASAFQAw%3D%3D"
            />
        </div>
        <h1 className='sideheadings'>Culture and Tradition</h1>
        <div className='CultureTradition'>
            <Hover3
            imageSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Gaur_Maria_dance.jpg/640px-Gaur_Maria_dance.jpg"
            title="Gaur Dance"
            location="A traditional tribal dance of the Gond community, symbolizing hunting and war scenes."
            locateUrl='https://www.youtube.com/watch?v=w-mEPTsedvI'
            />
            <Hover1
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9KlsUpdVTo9p-wyw1EQZCaXCM9koimP4tLQ&s"
            title="Sarees and Jackets"
            location="Men wear dhotis with bandis, while women drape sarees in the Lugda style with silver jewelry."
            />
            <Hover1
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNHz3bEODMNZNsjuxtn8VTOLrn-hjH2uVtVQ&s"
            title="Khajuraho Dance Festival"
            location="A week-long festival celebrating classical Indian dances against the backdrop of the Khajuraho Temples."
            />
            <Hover1
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQje6esWcy5lVGAD9fErmXZS0HnoIgDqMwyA&s"
            title="Tribal Folk Music"
            location="Uses instruments like dholak, bansuri, and mandar, blending traditional tunes with nature themes."
            />
        </div>
        <h1 className='sideheadings'>Cuisine</h1>
        <div className='Cuisine'>
            <Hover1
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7ZT3IUVI1Iks3cMZ2oqCpommFsho4uQMLcg&s"
            title="Poha"
            location="A light and popular breakfast dish made with flattened rice, often garnished with onions and sev."
            />
            <Hover1
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKCJGOJ98r32VJedwT3aKu6uqv5sHKQ95c2g&s"
            title="Dal Bafla"
            location="A traditional dish similar to Dal Bati, with wheat balls served with spiced lentils and ghee."
            />
            <Hover1
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbxuAYMYJ3BJNnpUa6s7CubGSCq7VT4Z4ZSQ&s"
            title="Bhutte Ka Kees"
            location="A unique dish made from grated corn cooked with spices and milk, popular in Indore."
            />
            <Hover1
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3FdXDUPaB5FHokWF62-3kQgQzVr_b2UpJOg&s"
            title="Chakki Ki Shaak"
            location="A spicy gravy-based dish made from steamed wheat dough, often served with rice or roti."
            />
        </div>
        <h1 className='sideheadings'>Wild Life and Nature</h1>
        <div className='WildLife'>
            <Hover2
            imageSrc="https://upload.wikimedia.org/wikipedia/commons/1/1f/Tiger_Kanha_National_Park.jpg"
            title="Kanha National Park"
            locateUrl ="https://www.google.com/maps/place/Kanha+Tiger+Reserve/@22.2428259,80.4835575,12z/data=!4m10!1m2!2m1!1sKanha+National+Park!3m6!1s0x3a2a085bc4dd23f3:0x59131aabc7236a4c!8m2!3d22.2994956!4d80.5864278!15sChNLYW5oYSBOYXRpb25hbCBQYXJrWhUiE2thbmhhIG5hdGlvbmFsIHBhcmuSAQ1uYXRpb25hbF9wYXJr4AEA!16zL20vMDZmNHRn?entry=ttu&g_ep=EgoyMDI0MDkyOS4wIKXMDSoASAFQAw%3D%3D"
            />
            <Hover2
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaMpb20RvosBmtO34Gd2uN8iO1MjJ9Y9u6fg&s"
            title="Bandhavgarh National Park"
            locateUrl="https://www.google.com/maps/place/Bandhavgarh+National+Park/@23.5282697,80.6780956,12z/data=!4m10!1m2!2m1!1sBandhavgarh+National+Park!3m6!1s0x39847e5855555555:0x2687c84ef7dacbd6!8m2!3d23.5282697!4d80.8305309!15sChlCYW5kaGF2Z2FyaCBOYXRpb25hbCBQYXJrWhsiGWJhbmRoYXZnYXJoIG5hdGlvbmFsIHBhcmuSAQ1uYXRpb25hbF9wYXJrmgEjQ2haRFNVaE5NRzluUzBWSlEwRm5TVVI0TWt3dFdraG5FQUXgAQA!16s%2Fg%2F11my1wn0gp?entry=ttu&g_ep=EgoyMDI0MDkyOS4wIKXMDSoASAFQAw%3D%3D"
            />
            <Hover2
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQNo6w54IDd9suiGfH_MP4wZInJSLd7rnoEQ&s"
            title="Pench National Park"
            locateUrl= "https://www.google.com/maps/place/Pench+National+Park/@21.6636117,79.0594918,11z/data=!3m1!4b1!4m6!3m5!1s0x3bd531813bfc958b:0xea7eb748bbe32925!8m2!3d21.6495224!4d79.2451149!16s%2Fm%2F025rs4q?entry=ttu&g_ep=EgoyMDI0MDkyOS4wIKXMDSoASAFQAw%3D%3D"
            />
            <Hover2
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTno34m4HmpxO9eec-413BkIa_SQ3DTFI2MzQ&s"
            title="Satpura National Park"
            locateUrl="https://www.google.com/maps/place/Satpura+National+Park/@22.4838736,78.3816424,17z/data=!3m1!4b1!4m6!3m5!1s0x397e3e217caca0e9:0x65213d6f9ba1a318!8m2!3d22.4838736!4d78.3842227!16zL20vMDY4NnZr?entry=ttu&g_ep=EgoyMDI0MDkyOS4wIKXMDSoASAFQAw%3D%3D"
            />
        </div>
        <h1 className='sideheadings'>Shopping Destinations</h1>
        <div className='Shopping'>
            <Hover2
            imageSrc="https://a.travel-assets.com/findyours-php/viewfinder/images/res70/68000/68264-New-Market.jpg"
            title="New Market"
            locateUrl="https://www.google.com/maps/place/New+Market,+STT+Nagar,+TT+Nagar,+Bhopal,+Madhya+Pradesh+462003/@23.235846,77.3989358,18z/data=!3m1!4b1!4m6!3m5!1s0x397c42bde8f02dcf:0x3cf286d10ba239be!8m2!3d23.2356359!4d77.4006229!16s%2Fg%2F11fy54z0pj?entry=ttu&g_ep=EgoyMDI0MDkyOS4wIKXMDSoASAFQAw%3D%3D"
            />
            <Hover2
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg6AkJzoSckmBWi6Y4aMdc_RZpyqarDd0lLA&s"
            title="Sarafa Bazaar"
            locateUrl="https://www.google.com/maps/place/Sarafa+Bazar,+Indore,+Madhya+Pradesh+452002/@22.7177054,75.8503015,18z/data=!3m1!4b1!4m6!3m5!1s0x3962fda0c01c3295:0xe1004ef7a4cbe1c7!8m2!3d22.7175144!4d75.852306!16s%2Fg%2F11c5m3gwhm?entry=ttu&g_ep=EgoyMDI0MDkyOS4wIKXMDSoASAFQAw%3D%3D"
            />
            <Hover2
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTISi_roP1IaWVBadnaFLGind9Bo89hKfVCPQ&s"
            title="DB City Mall"
            locateUrl="https://www.google.com/maps/place/DB+City,+Thatipur,+Gwalior,+Madhya+Pradesh/@23.2326928,77.4275912,17z/data=!4m10!1m2!2m1!1sDB+City+Mall!3m6!1s0x3976c3ef09b505db:0x2888287fb8743e67!8m2!3d26.2028921!4d78.215215!15sCgxEQiBDaXR5IE1hbGxaDiIMZGIgY2l0eSBtYWxskgEPc2hvcHBpbmdfY2VudGVy4AEA!16s%2Fg%2F1hfbwd4_l?entry=ttu&g_ep=EgoyMDI0MDkyOS4wIKXMDSoASAFQAw%3D%3D"
            />
            <Hover2
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXocIVztD79EOjhdfc7OCHK0lh7JN-zcgb8A&s"
            title="Rajwada Market"
            locateUrl="https://www.google.com/maps/place/Rajwada+shopping+area/@22.7179453,74.6356922,9z/data=!4m10!1m2!2m1!1sRajwada+Market!3m6!1s0x3962fd5861bbf303:0xe865457571b9f5cd!8m2!3d22.7179453!4d75.8551746!15sCg5SYWp3YWRhIE1hcmtldFoQIg5yYWp3YWRhIG1hcmtldJIBDWdyb2Nlcnlfc3RvcmWaASRDaGREU1VoTk1HOW5TMFZKUTBGblNVUkNhUzFxUnpWUlJSQULgAQA!16s%2Fg%2F11m396vyv1?entry=ttu&g_ep=EgoyMDI0MDkyOS4wIKXMDSoASAFQAw%3D%3D"
            />
        </div>
        <h1 className='sideheadings'>Historical Significance</h1>
        <div className='Historical'>
            <Hover1
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThXgLSz7JBi1Tjpl_u0Ni-ub0CbdezYe8lOA&s"
            title="Khajuraho"
            location="Famous for its UNESCO-listed temples adorned with intricate erotic sculptures from the Chandela dynasty."
            />
            <Hover1
            imageSrc="https://cdn.britannica.com/36/155836-050-89E7AA9E/Great-Stupa-Sanchi-India.jpg"
            title="Sanchi Stupa"
            location="An ancient Buddhist monument built by Emperor Ashoka, known for its beautiful gateways and relics of Buddha."
            />
            <Hover1
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSld84k3Bec3B2xAIFv5XbkuK40yjTpyd-fkQ&s"
            title="Gwalior Fort"
            location="A massive hilltop fort with a history dating back over a thousand years, showcasing Mughal and Rajput architecture."
            />
            <Hover1
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJcvxnMsBPcVCCALLEmdgro3TCqZh49PC8_Q&s"
            title="Bhimbetka Rock Shelters"
            location="A UNESCO site with prehistoric cave paintings, offering insight into early human life in India."
            />
        </div>
        <h1 className='sideheadings'>Travel Tips</h1>
        <div className='Historical'>
            <Hover1
            imageSrc="https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2024/06/28120553/travel-abroad-tips-1600x900.jpeg"
            title = "Best Time to Visit"
            location="Visit between October and March for pleasant weather and wildlife safaris."
            />
            <Hover1
            imageSrc="https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2024/06/28120553/travel-abroad-tips-1600x900.jpeg"
            title = "Stay Hydrated"
            location="Carry water when exploring historical sites like Khajuraho or Gwalior Fort."
            />
            <Hover1
            imageSrc="https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2024/06/28120553/travel-abroad-tips-1600x900.jpeg"
            title = "Wildlife Safaris"
            location="Book safaris in advance for popular spots like Kanha and Bandhavgarh National Parks."
            />
            <Hover1
            imageSrc="https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2024/06/28120553/travel-abroad-tips-1600x900.jpeg"
            title = "Local Transport"
            location="Opt for local buses or cabs to navigate cities like Bhopal or Indore."
            />
        </div>
    </div>
)
}
export default MadhyaPradesh;