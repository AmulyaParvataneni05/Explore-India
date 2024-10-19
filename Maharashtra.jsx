import Hover from  '../hover/Hover'
import Hover1 from  '../hover/Hover1'
import Hover2 from  '../hover/Hover2'
import Hover3 from '../hover/Hover3'
import '../states/State.css'
function Maharashtra() {
  return(
    <div>
        <a href='https://maharashtratourism.gov.in/'><h1 className='heading'>Maharashtra</h1></a>
        <h2 className='capital'>Capital: Mumbai</h2>
        <h1 className='sideheadings'>Places To Visit</h1>
        <div className='Places'>
            <Hover
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7_dHSPJvU1XAFLZTQruINuSEM0lS7FjqQlg&s"
            title="Ellora Caves"
            location="Aurangabad"
            bookUrl="https://www.trivago.in/en-IN/lm/hotels-aurangabad-india?search=200-83185;dr-20241008-20241009"
            locateUrl= "https://www.google.com/maps/place/Ellora+Caves/@20.0257533,75.1677249,15z/data=!4m10!1m2!2m1!1sEllora+Caves!3m6!1s0x3bdb93bd138ae4bd:0x574c6482cf0b89cf!8m2!3d20.0267844!4d75.1770869!15sCgxFbGxvcmEgQ2F2ZXNaDiIMZWxsb3JhIGNhdmVzkgETaGlzdG9yaWNhbF9sYW5kbWFya-ABAA!16zL20vMDI0Nng3?entry=ttu&g_ep=EgoyMDI0MDkyOS4wIKXMDSoASAFQAw%3D%3D"
            />
            <Hover
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDvXm3pfo7mGYBPv4uqxqcv86a_pZVCOaA5A&s"
            title="Siddhivinayak Temple"
            location="Mumbai"
            bookUrl="https://www.trivago.in/en-IN/lm/hotels-mumbai-india?search=200-64981;dr-20241008-20241009"
            locateUrl= "https://www.google.com/maps/place/Siddhivinayak+Temple/@19.1673544,72.8394626,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7b650d04a6e4f:0xb30ef54a6065eee3!8m2!3d19.1673544!4d72.8420429!16s%2Fg%2F11cltlfk56?entry=ttu&g_ep=EgoyMDI0MDkyOS4wIKXMDSoASAFQAw%3D%3D"
            />
            <Hover
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM6qtoai9hvskPA36peg2sIkDz-xe1qDzqsA&s"
            title="Elephanta Caves"
            location="Mumbai"
            bookUrl="https://www.trivago.in/en-IN/lm/hotels-mumbai-india?search=200-64981;dr-20241008-20241009"
            locateUrl="https://www.google.com/maps/place/Elephanta+Caves/@18.9633474,72.9267228,17z/data=!4m10!1m2!2m1!1sElephanta+Caves!3m6!1s0x3be7c5307da3602f:0xf4ab181b1aaef53f!8m2!3d18.9633474!4d72.9314864!15sCg9FbGVwaGFudGEgQ2F2ZXNaESIPZWxlcGhhbnRhIGNhdmVzkgENaGlzdG9yaWNfc2l0ZeABAA!16zL20vMDIwcmI1?entry=ttu&g_ep=EgoyMDI0MDkyOS4wIKXMDSoASAFQAw%3D%3D"
            />
            <Hover
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR86Sau2fgqySwjbUiy5kKE7ijF_sZEhrxMfw&s"
            title="Lonavala"
            location="Lonavala"
            bookUrl="https://www.trivago.in/en-IN/lm/hotels-lonavala-india?search=200-82910;dr-20241008-20241009"
            locateUrl="https://www.google.com/maps/place/Lonavala,+Maharashtra/@18.7573613,73.3704374,13z/data=!3m1!4b1!4m6!3m5!1s0x3be801098bdf8145:0x696b4a60a5e28658!8m2!3d18.7557237!4d73.4090757!16zL20vMDM4ZDR6?entry=ttu&g_ep=EgoyMDI0MDkyOS4wIKXMDSoASAFQAw%3D%3D"
            />
        </div>
        <h1 className='sideheadings'>Culture and Tradition</h1>
        <div className='CultureTradition'>
            <Hover3
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTynLx-8LmdL7VkI_QatFH5g3ZfKP79ZoBnPw&s"
            title="Lavani"
            location="A popular folk dance performed by women to the beats of the dholki, known for its expressive, lively movements."
            locateUrl='https://www.youtube.com/watch?v=DowhhfP11UU'
            />
            <Hover1
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQWFRp83aoD7ZL9vGMY7ftrXaivrAl2JjDFw&s"
            title="Nauvari and Dhoti"
            location="Men traditionally wear dhotis and turbans, while women wear the 'Nauvari' saree, draped in a style resembling a trouser."
            />
            <Hover1
            imageSrc="https://www.drikpanchang.com/images/events/ganesh-chaturthi/xganesha_chaturthi_puja.jpg.pagespeed.ic.s_eCtxN3Ta.jpg"
            title="Ganesh Chaturthi"
            location="The most celebrated festival in Maharashtra, dedicated to Lord Ganesha with grand processions and decorations."
            />
            <Hover1
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXzDpQnNGjJ1UmoA2X_qFHhemOTzVvJJjxaA&s"
            title="Powada"
            location="A traditional form of Marathi ballad music, accompanied by instruments like the dhol and taal, narrating tales of valor."
            />
        </div>
        <h1 className='sideheadings'>Cuisine</h1>
        <div className='Cuisine'>
            <Hover1
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYPjqgA4mp3J-T5DBx6oucBYC5v_WligkX8w&s"
            title="Vada Pav"
            location="A popular street food, consisting of a spicy potato fritter served in a bun with chutneys."
            />
            <Hover1
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoV_EMcR6EFPTeIghQ5TNGOpoEIfzR5oZ-iQ&s"
            title="Puran Poli"
            location="A sweet flatbread stuffed with a mixture of jaggery and lentils, traditionally made during festivals."
            />
            <Hover1
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT35uD82jUXbac9TtlyfeHKdnOGE7TfuXxMBQ&s"
            title="Pav Bhaji"
            location="A spicy mashed vegetable curry served with buttered bread rolls, famous across Maharashtra."
            />
            <Hover1
            imageSrc="https://smithakalluraya.com/wp-content/uploads/2014/05/misal-pav-recipe-1.jpg"
            title="Misal Pav"
            location="A spicy curry made from sprouted lentils, served with bread and topped with farsan."
            />
        </div>
        <h1 className='sideheadings'>Wild Life and Nature</h1>
        <div className='WildLife'>
            <Hover2
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfu9XtvxOF00nfFz9Xhx-QOC9lrGSkIw5riA&s"
            title="Tadoba-Andhari Tiger Reserve"
            locateUrl ="https://www.google.com/maps/place/Tadoba-Andhari+Tiger+Reserve/@20.2717885,79.3849903,17z/data=!3m1!4b1!4m6!3m5!1s0x3a2ccd16b6538703:0x418b2e1575b004d1!8m2!3d20.2717885!4d79.3875706!16s%2Fm%2F03gslz2?entry=ttu&g_ep=EgoyMDI0MDkyOS4wIKXMDSoASAFQAw%3D%3D"
            />
            <Hover2
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRy1Z6fWFxbq7NKbMRXSZG4EYoNxNeFuqVAA&s"
            title="Sanjay Gandhi National Park"
            locateUrl="https://www.google.com/maps/place/Sanjay+Gandhi+National+Park/@19.2204535,72.9102619,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7b0c88b1d3d9f:0x3621dd69daa8e2cf!8m2!3d19.2204535!4d72.9128422!16zL20vMDNmYzBr?entry=ttu&g_ep=EgoyMDI0MDkyOS4wIKXMDSoASAFQAw%3D%3D"
            />
            <Hover2
            imageSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Koyna-Dam2.jpg/463px-Koyna-Dam2.jpg"
            title="Koyna Wildlife Sanctuary"
            locateUrl= "https://www.google.com/maps/place/Koyna+Wildlife+Sanctuary/@17.769133,73.7395215,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc26db900008b51:0xebf3979d1af2cb85!8m2!3d17.769133!4d73.7421018!16zL20vMGQ4eGZ0?entry=ttu&g_ep=EgoyMDI0MDkyOS4wIKXMDSoASAFQAw%3D%3D"
            />
            <Hover2
            imageSrc="https://res.cloudinary.com/roundglass/image/upload/w_1104,h_736,c_fill/q_auto:best,f_auto/v1590048917/roundglass/sustain/Bhigwan_Flamingo_Sandeep-Gore_Shutterstock-copy_dlasnx.jpg"
            title="Bhigwan Bird Sanctuary"
            locateUrl="https://www.google.com/maps/search/Bhigwan+Bird+Sanctuary/@18.2772437,74.7587176,14z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI0MDkyOS4wIKXMDSoASAFQAw%3D%3D"
            />
        </div>
        <h1 className='sideheadings'>Shopping Destinations</h1>
        <div className='Shopping'>
            <Hover2
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpUwNvl5EVXc7Oa9cvz7XF78U5aF0uAqF5Lw&s"
            title="Colaba Causeway"
            locateUrl="https://www.google.com/maps/place/Colaba+Causeway,+Mumbai,+Maharashtra/@18.9246447,72.8295512,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7d194218579c9:0xd9ae43411acdb561!8m2!3d18.9246447!4d72.8321315!16s%2Fm%2F026crl4?entry=ttu&g_ep=EgoyMDI0MDkyOS4wIKXMDSoASAFQAw%3D%3D"
            />
            <Hover2
            imageSrc="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/2a/98/15/phoenix-marketcity-mumbai.jpg?w=1200&h=-1&s=1"
            title="Phoenix Marketcity"
            locateUrl="https://www.google.com/maps/place/Phoenix+Marketcity/@19.0863795,72.2792362,10z/data=!3m1!5s0x3be7c8878a6ce00d:0x5d860d2b775b3318!4m10!1m2!2m1!1sPhoenix+Marketcity!3m6!1s0x3be7c887efb78b9f:0x9f9dc99c3119470a!8m2!3d19.0863795!4d72.8889774!15sChJQaG9lbml4IE1hcmtldGNpdHlaFCIScGhvZW5peCBtYXJrZXRjaXR5kgEPc2hvcHBpbmdfY2VudGVy4AEA!16s%2Fg%2F11bwnxxjkz?entry=ttu&g_ep=EgoyMDI0MDkyOS4wIKXMDSoASAFQAw%3D%3D"
            />
            <Hover2
            imageSrc="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/65/97/86/laxmi-road.jpg?w=1200&h=-1&s=1"
            title="Laxmi Road"
            locateUrl="https://www.google.com/maps/place/Nagarkar+Talim+Chowk,+Pune,+Maharashtra+411030/@18.5145406,73.8511985,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2c06e286bc8b3:0xde448c22164db5fb!8m2!3d18.5145406!4d73.8537788!16s%2Fg%2F11bz6mxbxs?entry=ttu&g_ep=EgoyMDI0MDkyOS4wIKXMDSoASAFQAw%3D%3D"
            />
            <Hover2
            imageSrc="https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/39/93/26.jpg"
            title="Fashion Street"
            locateUrl="https://www.google.com/maps/place/Fashion+Street+Pune/@18.5090065,73.8767599,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2c1596ef69475:0x5dc57395f3657fa1!8m2!3d18.5090065!4d73.8793402!16s%2Fg%2F1tdfg44l?entry=ttu&g_ep=EgoyMDI0MDkyOS4wIKXMDSoASAFQAw%3D%3D"
            />
        </div>
        <h1 className='sideheadings'>Historical Significance</h1>
        <div className='Historical'>
            <Hover1
            imageSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Ajanta_%2863%29.jpg/300px-Ajanta_%2863%29.jpg"
            title="Ajanta Caves"
            location="Ancient rock-cut caves featuring exquisite Buddhist art and sculptures, dating back to the 2nd century BCE."
            />
            <Hover1
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7_dHSPJvU1XAFLZTQruINuSEM0lS7FjqQlg&s"
            title="Ellora Caves"
            location="A UNESCO site with stunning rock-cut temples and monasteries representing Buddhist, Hindu, and Jain faiths."
            />
            <Hover1
            imageSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Mumbai_03-2016_30_Gateway_of_India.jpg/1200px-Mumbai_03-2016_30_Gateway_of_India.jpg"
            title="Gateway of India"
            location="A colonial-era monument built in 1924 to commemorate the landing of King George V and Queen Mary in Mumbai."
            />
            <Hover1
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0Wjc2V3NPr7O6m2U4Q5a0kHsixABtqh0KXw&s"
            title="Shaniwar Wada"
            location="A grand fort built by the Peshwas, known for its historical significance during the Maratha Empire."
            />
        </div>
        <h1 className='sideheadings'>Travel Tips</h1>
        <div className='Historical'>
            <Hover1
            imageSrc="https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2024/06/28120553/travel-abroad-tips-1600x900.jpeg"
            title = "Best Time to Visit"
            location="October to February offers cooler weather for exploring."
            />
            <Hover1
            imageSrc="https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2024/06/28120553/travel-abroad-tips-1600x900.jpeg"
            title = "City Traffic"
            location="In cities like Mumbai or Pune, plan for heavy traffic and use local trains or metros."
            />
            <Hover1
            imageSrc="https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2024/06/28120553/travel-abroad-tips-1600x900.jpeg"
            title = "Beach Caution"
            location="Follow safety guidelines at popular beaches like Juhu or Ganpatipule."
            />
            <Hover1
            imageSrc="https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2024/06/28120553/travel-abroad-tips-1600x900.jpeg"
            title = "Hill Stations"
            location="Carry warm clothing if visiting hill stations like Mahabaleshwar or Lonavala."
            />
        </div>
    </div>
)
}
export default Maharashtra;