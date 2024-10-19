import Hover from  '../hover/Hover'
import Hover1 from  '../hover/Hover1'
import Hover2 from  '../hover/Hover2'
import Hover3 from '../hover/Hover3'
import '../states/State.css'
import '../../data/states.js'
function State(stateName)
{

    let stateName="";
    let capital="";
    let places =[]; //Query to get all the places with the given state name and containing "places" as the tag

    return(
        <div>
            <h1 className='heading'>Andhra Pradesh </h1>
            <h2 className='capital'>Capital: Amaravati</h2>
            <h1 className='sideheadings'>Places To Visit</h1>
            <div className='Places'>
                //for loop over places array
            </div>
            <h1 className='sideheadings'>Culture and Tradition</h1>
            <div className='CultureTradition'>
                <Hover1
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQJR_LdAhbXl7fYlMi6hJucUEUDluthJzrCfECHVADeNYCPTNm3C-ocH8wwmlE8XzpSxU&usqp=CAU"
                title="Kuchipudi"
                location="This dance form is known for its quick moves, lively eye expressions, and hand gestures."
                />
                <Hover1
                imageSrc="https://textilevaluechain.in/wp-content/uploads/2020/03/image-10.png"
                title="Saree and Dhoti"
                location="The traditional dress for women is the Saree, which is draped and worn with a blouse.
                Men wear the Dhoti and Kurta, which is a long tunic worn over the Dhoti."
                />
                <Hover1
                imageSrc="https://womenewera.wordpress.com/wp-content/uploads/2018/01/d5138-sankranti2b.jpg"
                title="Makar Sankranti"
                location="Makar Sankranti marks the Sun's transition into Capricorn, celebrating the end of winter."
                />
                <Hover1
                imageSrc="https://traveladda.wordpress.com/wp-content/uploads/2011/07/music2.jpg"
                title="Carnatic Music"
                location="Carnatic music is a classical music tradition of South India, known for its intricate melodies and rhythms."
                />
            </div>
            <h1 className='sideheadings'>Cuisine</h1>
            <div className='Cuisine'>
                <Hover1
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0UUZWUa8H85JTUDut96V3zxqi03bZ_oKc8A&s"
                title="Pulihora"
                location="This dish is considered a popular festival food traditionally served as Prasadam in most of the Andhra and south Indian temples."
                />
                <Hover1
                imageSrc="https://yummyindiankitchen.com/wp-content/uploads/2021/04/gongura-pickle.jpg"
                title="Gongura Pickle"
                location="These leaves taste sour can help in alleviating symptoms of cold, cough and fever too.
                It also increases appetite since it is high in vitamin C."
                />
                <Hover1
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPqHj6wzCPPq9Iquk15Uu8jMKRIUL4AOX_0g&s"
                title="Pesarattu Upma"
                location="Pesarattu Upma is a protein packed healthy breakfast made using whole green gram and spices.
                It is one of the most commonly eaten Breakfasts."
                />
                <Hover1
                imageSrc="https://i.ytimg.com/vi/DWxsO34BSVY/sddefault.jpg"
                title="Punugulu"
                location="Punugulu, a popular South Indian snack, traces its origins to Andhra Pradesh."
                />
            </div>
            <h1 className='sideheadings'>Wild Life and Nature</h1>
            <div className='WildLife'>
                <Hover2
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3rWFuE4VGnXXa-d2XmpxTu7Eo0aqm4qWVKQ&s"
                title="Coringa Wildlife Sanctuary"
                locateUrl = "https://www.google.com/maps/place/Coringa+Wildlife+Sanctuary/@16.8212486,82.2957217,17z/data=!3m1!4b1!4m6!3m5!1s0x3a38217bd22d6729:0xb7aa2d2d4f89f46a!8m2!3d16.8212486!4d82.2982966!16zL20vMDl5NnN3?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
                <Hover2
                imageSrc="https://cdn1.tripoto.com/media/filter/tst/img/1633963/Image/1686285189_kambalakonda4.jpg.webp"
                title="Kambalakonda Wildlife Sanctuary"
                locateUrl="https://www.google.com/maps/place/Kambalakonda+Wildlife+Sanctuary/@17.7783843,83.3323167,17z/data=!3m1!4b1!4m6!3m5!1s0x3a395c3aaaacd46b:0x569ff813fc544485!8m2!3d17.7783843!4d83.3348916!16s%2Fm%2F03gvs93?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
                <Hover2
                imageSrc="https://media-cdn.tripadvisor.com/media/photo-s/0d/32/d2/81/herd-of-deers-and-blacbucks.jpg"
                title="Rollapadu Wildlife Sanctuary"
                locateUrl= "https://www.google.com/maps/place/Rollapadu+Bird+Sanctuary/@15.7389773,78.3625227,17z/data=!3m1!4b1!4m6!3m5!1s0x3bb5b920d4865123:0xc246addbcba10492!8m2!3d15.7389773!4d78.3650976!16s%2Fm%2F0vxd6p4?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
                <Hover2
                imageSrc="https://3.bp.blogspot.com/_Va40yjzpBrs/SNfqIqVPVjI/AAAAAAAAD8s/A-1RlJsepnU/w1200-h630-p-k-no-nu/Krishna+Sanctuary.jpg"
                title="Krishna Wildlife Sanctuary"
                locateUrl="https://www.google.com/maps/place/Krishna+Wildlife+Sanctuary/@15.7710648,80.9148194,14z/data=!3m1!4b1!4m6!3m5!1s0x3a49857af2d16085:0xd9fc2af9c25601e1!8m2!3d15.7710679!4d80.9517289!16s%2Fm%2F064pprz?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
            </div>
            <h1 className='sideheadings'>Shopping Destinations</h1>
            <div className='Shopping'>
                <Hover2
                imageSrc="https://content.jdmagicbox.com/comp/visakhapatnam/q5/0891px891.x891.180119215056.v3q5/catalogue/vizag-central-jagadamba-junction-visakhapatnam-yupnn9tfyk.jpg"
                title="Jagadamba Center"
                locateUrl="https://www.google.com/maps/place/Jagadamba+Centre,+Jagadamba+Junction,+Visakhapatnam,+Andhra+Pradesh/@17.7125195,83.3004177,17z/data=!3m1!4b1!4m6!3m5!1s0x3a39431a65e6a5cd:0xe52fe5cc0e41e5c8!8m2!3d17.7121748!4d83.3031033!16s%2Fg%2F11gjw_8_f2?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
                <Hover2
                imageSrc="https://mgbfelicitymall.com/wp-content/uploads/2023/01/home-shopping-1-1024x576.jpg"
                title="MGB Felicity Mall"
                locateUrl="https://www.google.com/maps/place/MGB+Felicity+Mall/@14.4321736,79.9641249,17z/data=!3m1!4b1!4m6!3m5!1s0x3a4cf3275d36ddeb:0xaaacfe8c80f45ed1!8m2!3d14.4321736!4d79.9666998!16s%2Fg%2F1hc17dlgw?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
                <Hover2
                imageSrc="https://andhra.mallsmarket.com/sites/default/files/photos/malls/CMRCentralShoppingMall-Visakhapatnam-0.JPG"
                title="CMR Central Mall"
                locateUrl="https://www.google.com/maps/search/CMR+Shopping+Mall/@14.4321727,79.9461,14z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
                <Hover2
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK668FlfZ01QyOHZHVyjoRYS6oUePjhj_APg&s"
                title="Coastal City Center"
                locateUrl="https://www.google.com/maps/place/Coastal+City+center/@16.5466602,81.5149792,17z/data=!3m1!4b1!4m6!3m5!1s0x3a37d2ab114d7d47:0xb6c22ae065402b92!8m2!3d16.5466602!4d81.5175541!16s%2Fg%2F11h6yqj6yy?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
            </div>
            <h1 className='sideheadings'>Historical Significance</h1>
            <div className='Historical'>
                <Hover1
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQsM1IdOqQPqtFUhWok_LWGZnZ_rzWWS2RWm20I6N7gCILABPeesYCQbOsGCdKwQh2EPo&usqp=CAU"
                title="Amaravati"
                location="Amaravati is an ancient city in Andhra Pradesh, known for its historic Buddhist stupa."
                />
                <Hover1
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJphh7k5ROHEEVDEI_gXNgE4hkQmXm1TVm758jzKV4I4lcgM4Jfzbm8TzhRkNDsEVx5K4&usqp=CAU"
                title="Lepakshi Temple"
                location="Lepakshi is a historic village in Andhra Pradesh, famed for its ancient temple with intricate Vijayanagara-era carvings."
                />
                <Hover1
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRZR1ZoU4G9kYYWt9ciFE-OKbzBLpL1RnRpQ&s"
                title="Papikondalu"
                location="Papikondalu is a scenic mountain range in Andhra Pradesh, known for its lush greenery and picturesque river views."
                />
                <Hover1
                imageSrc="https://www.hyderabadtourism.travel/images/visiting-places/headers/shilparamam-hyderabad-tourism-entry-fee-timings-holidays-reviews-header.jpg"
                title="Shilpa Ramam"
                location="Shilparamam is an arts and crafts village in Hyderabad, Andhra Pradesh, showcasing traditional Indian crafts, dance, and culture."
                />
            </div>

            <h1 className='sideheadings'>Travel Tips</h1>
            <div className='Historical'>
                <Hover1
                imageSrc="https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2024/06/28120553/travel-abroad-tips-1600x900.jpeg"
                title = "Respect Local Customs"
                location="When visiting temples and religious sites, dress modestly and follow local customs and practices."
                />
                <Hover1
                imageSrc="https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2024/06/28120553/travel-abroad-tips-1600x900.jpeg"
                title = 'Stay Hydrated'
                location="The climate can be quite hot, especially during summer, so drink plenty of water and carry a water bottle."
                />
                <Hover1
                imageSrc="https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2024/06/28120553/travel-abroad-tips-1600x900.jpeg"
                title = "Try Local Cuisine"
                location="Don’t miss out on regional specialties like Andhra biryani, gongura pachadi, and spicy curries."
                />
                <Hover1
                imageSrc="https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2024/06/28120553/travel-abroad-tips-1600x900.jpeg"
                title = "Plan Your Itinerary"
                location="Andhra Pradesh has diverse attractions, so plan your itinerary to include a mix of historical sites, natural wonders, and cultural experiences."
                />
            </div>
        </div>
    )
}
export default AndhraPradesh;
