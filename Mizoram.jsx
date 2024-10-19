import Hover from  '../hover/Hover'
import Hover1 from  '../hover/Hover1'
import Hover2 from  '../hover/Hover2'
import Hover3 from '../hover/Hover3'
import '../states/State.css'
function Mizoram()
{
    return(
        <div>
            <a href='https://www.mizoramtourism.com/'><h1 className='heading'>Mizoram</h1></a>
            <h2 className='capital'>Capital: Aizawl</h2>
            <h1 className='sideheadings'>Places To Visit</h1>
            <div className='Places'>
                <Hover
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKfN303n1srWAMj1WGXwH2R8xcS1kSSeZ3-g&s"
                title="Durtlang Hills"
                location="Aizawl"
                bookUrl="https://www.trivago.in/en-IN/lm/hotels-aizawl-india?search=200-64984;dr-20240907-20240908"
                locateUrl= "https://www.google.com/maps/search/Durtlang+Hills/@23.7930681,92.7060768,14z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
                <Hover
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVq40cQvQiZVzU0a1qrC7Ehc2C8JG9yYpXRg&s"
                title="Phawngpui Peak"
                location="Phawngpui National Park"
                bookUrl="https://www.trivago.in/en-IN/lm/hotels-aizawl-india?search=200-64984;dr-20240907-20240908"
                locateUrl= "https://www.google.com/maps/place/Phawngpui+National+Park,+Mizoram+796810/@22.654558,92.9930868,13z/data=!3m1!4b1!4m6!3m5!1s0x374d2b96f406dc33:0x98eadf0ccc63fb17!8m2!3d22.6510013!4d93.0275802!16s%2Fm%2F0w3222n?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
                <Hover
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUFeLCx4WJC0e1oRj4FYiM-QVfQXwdbckMzQ&s"
                title="Rih Dil Lake"
                location="Chin State"
                bookUrl="https://www.trivago.in/en-IN/lm/hotels-aizawl-india?search=200-64984;dr-20240907-20240908"
                locateUrl="https://www.google.com/maps/place/Rih+Dil/@23.3400541,93.3823514,17z/data=!4m6!3m5!1s0x374cf57c08115e29:0x7299e9da26683f75!8m2!3d23.3407299!4d93.3848775!16s%2Fm%2F0jwzw76?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
                <Hover
                imageSrc="https://www.seawatersports.com/images/places/lunglei-bridge.png"
                title="Lunglei Bridge"
                location="Lunglei"
                bookUrl="https://www.trivago.in/en-IN/lm/hotel-elite-lunglei-aizawl?search=100-36657996;dr-20240907-20240908"
                locateUrl="https://www.google.com/maps/place/Lunglei+stone+bridge+trail/@22.8898786,92.7501129,16z/data=!4m10!1m2!2m1!1sLunglei+Bridge!3m6!1s0x374d4167ba838971:0x1a5e0acb0b902263!8m2!3d22.8887298!4d92.766367!15sCg5MdW5nbGVpIEJyaWRnZZIBEnRvdXJpc3RfYXR0cmFjdGlvbuABAA!16s%2Fg%2F11p4_twcb2?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
            </div>
            <h1 className='sideheadings'>Culture and Tradition</h1>
            <div className='CultureTradition'>
                <Hover3
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEeLGUijR0o0tA1bZ05TaCb3Ip4GWfJmleGg&s"
                title="Cheraw Dance"
                location="Bamboo dance with rhythmic pole patterns."
                locateUrl='https://www.youtube.com/watch?v=uwCH_WEYFTo'
                />
                <Hover1
                imageSrc="https://as2.ftcdn.net/v2/jpg/01/89/44/01/1000_F_189440116_NPAlCGp4aAJRqVo2uS2T6yCufvkfbnGo.jpg"
                title="Traditional Mizo Attire"
                location="Women wear 'Puan' and men wear 'Kawt'."
                />
                <Hover1
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmcTE0ltUiJrqTiQ945iUOmsz_7szBprN-6Q&s"
                title="Chapchar Kut"
                location="Spring festival with dancing and feasting."
                />
                <Hover1
                imageSrc="https://i.ytimg.com/vi/b0iZX6iBEaw/maxresdefault.jpg"
                title="Mizo Folk Songs"
                location="Traditional songs with drum and bamboo pipe."
                />
            </div>
            <h1 className='sideheadings'>Cuisine</h1>
            <div className='Cuisine'>
                <Hover1
                imageSrc="https://images.slurrp.com/prod/rich_article/kwxhjwjlwoe.webp?impolicy=slurrp-20210601&width=1200&height=675"
                title="Bai"
                location="A vegetable stew made with local greens and fermented bamboo shoots."
                />
                <Hover1
                imageSrc="https://images.news18.com/ibnlive/uploads/2023/05/wp-image-243-16832883983x2.jpg"
                title="Mizo Pork with Bamboo Shoot"
                location="Savory pork dish cooked with tender bamboo shoots."
                />
                <Hover1
                imageSrc="https://i.ytimg.com/vi/qWP0eSfKiDs/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDgFGt8V3LCydSvQDRMMpYyqjo8UA"
                title="Vawksa Rep"
                location="Smoked pork curry with herbs and spices."
                />
                <Hover1
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSir2hXB912BqLwkn3BcBbxCT-8cGJvBf3N5oMZOinvfyAHl4U4esY1YMFxy_hHToGucdM&usqp=CAU"
                title="Zu"
                location="Mizo tea, often served with local snacks."
                />
            </div>
            <h1 className='sideheadings'>Wild Life and Nature</h1>
            <div className='WildLife'>
                <Hover2
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlmIBk9xeGOZ4_7DK23K4Q60yFKg7NIeQvTg&s"
                title="Murlen National Park"
                locateUrl = "https://www.google.com/maps/place/Murlen+National+Park/@23.6573654,93.2759022,17z/data=!3m1!4b1!4m6!3m5!1s0x374c46212a3d021d:0xe5ed85bddeb7565c!8m2!3d23.6573654!4d93.2784825!16zL20vMDhfcWJz?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
                <Hover2
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDMZe14ikLB_aYpLaeNTeZEBMUDJnXF2fxOA&s"
                title="Lunglei Wildlife Sanctuary"
                locateUrl="https://www.google.com/maps/search/Lunglei+Wildlife+Sanctuary/@22.9190799,92.1874512,9z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
                <Hover2
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS47oknLFMNdR0qIuql9eP_IwK3QK9TdwHZ4A&s"
                title="Dampa Tiger Reserve"
                locateUrl= "https://www.google.com/maps/place/Dampa+Tiger+Reserve+%26+Sanctuary/@23.5034329,92.4153922,17z/data=!3m1!4b1!4m6!3m5!1s0x375279010251cb95:0x10b31efc9f63e9b!8m2!3d23.5034329!4d92.4179725!16s%2Fm%2F02qc_zr?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
                <Hover2
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR89YJIh74onEVyND5gSdOSo9vXkaeuWc9Ibg&s"
                title="Phawngpui National Park"
                locateUrl="https://www.google.com/maps/place/Phawngpui+National+Park,+Mizoram+796810/@22.654558,92.9930868,13z/data=!3m1!4b1!4m6!3m5!1s0x374d2b96f406dc33:0x98eadf0ccc63fb17!8m2!3d22.6510013!4d93.0275802!16s%2Fm%2F0w3222n?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
            </div>
            <h1 className='sideheadings'>Shopping Destinations</h1>
            <div className='Shopping'>
                <Hover2
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS64H12wFLp0ezbToZcyiExC19A27UeRR8OAg&s"
                title="Mizoram State Emporium"
                locateUrl="https://www.google.com/maps/place/Sales+Emporium,+Mizoram+KVI+Board/@23.7285482,92.7059632,17z/data=!3m1!4b1!4m6!3m5!1s0x374d95706d85c4a7:0xc54ff349156f9dd8!8m2!3d23.7285482!4d92.7085435!16s%2Fg%2F11y1sn33zl?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
                <Hover2
                imageSrc="https://sc0.blr1.digitaloceanspaces.com/inline/19-onrtzonwyo-1479126332.jpg"
                title="Aizawl Bazar"
                locateUrl="https://www.google.com/maps/search/Aizawl+Bazar/@23.7285478,92.6982116,15z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
                <Hover2
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwU0yD1DviZ1SpVDRmLkUxyZWhLkE7zWGxQg&s"
                title="Bara Bazar"
                locateUrl="https://www.google.com/maps/place/Bara+Bazar,+Dawrpui,+Aizawl,+Mizoram/@23.7326791,92.7145695,17z/data=!3m1!4b1!4m6!3m5!1s0x374d94b614064b9d:0x1784ca954bcacc2c!8m2!3d23.7326791!4d92.7171498!16s%2Fg%2F11h0dq9_r?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
                <Hover2
                imageSrc="https://www.nativeplanet.com/photos/412x309x100/2018/12/photo-91-142432-1.jpg"
                title="Durtlang Hill Market"
                locateUrl="https://www.google.com/maps/search/Durtlang+Hill+Market/@23.732679,92.7145588,17z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
            </div>
            <h1 className='sideheadings'>Historical Significance</h1>
            <div className='Historical'>
                <Hover1
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsQSQxQ1XIOLdiwAnOiRZOE0dLhNTaXJhosA&s"
                title="Vantawng Falls"
                location="This picturesque waterfall is named after a Mizo legend, symbolizing the region's rich folklore and cultural heritage."
                />
                <Hover1
                imageSrc="https://indiano.travel/wp-content/uploads/2022/09/Website-Feature-Image-Size-26.jpg"
                title="Chhingpuii Memorial"
                location="A monument in Aizawl dedicated to Chhingpuii, a legendary Mizo heroine known for her bravery and sacrifice."
                />
                <Hover1
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRVDVzIg_Fl99cqMLP0Q4DrngR0gtmIv4Y_Q&s"
                title="Reiek Village"
                location="Known for its traditional Mizo houses and heritage, Reiek Village offers insights into the historical way of life of the Mizo people."
                />
                <Hover1
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSByVofeO4vwwUEIYBaOZrpAUS5AaB5FNIVNA&s"
                title="Kolasib"
                location="The town has historical importance due to its involvement in the Mizo National Front's struggle for statehood."
                />
            </div>

            <h1 className='sideheadings'>Travel Tips</h1>
            <div className='Historical'>
                <Hover1
                imageSrc="https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2024/06/28120553/travel-abroad-tips-1600x900.jpeg"
                title = "Permits Required"
                location="Ensure you obtain the necessary Inner Line Permit (ILP) for Mizoram, as it is required for non-residents."
                />
                <Hover1
                imageSrc="https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2024/06/28120553/travel-abroad-tips-1600x900.jpeg"
                title = 'Weather Preparedness'
                location="Pack warm clothing as temperatures can drop significantly, especially in higher altitudes."
                />
                <Hover1
                imageSrc="https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2024/06/28120553/travel-abroad-tips-1600x900.jpeg"
                title = "Local Cuisine"
                location="Try local dishes like Bamboo Shoot and Mizo Kitchen, but be cautious with street food to avoid any digestive issues."
                />
                <Hover1
                imageSrc="https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2024/06/28120553/travel-abroad-tips-1600x900.jpeg"
                title = "Safety"
                location="While Mizoram is generally safe, it's always wise to stay informed about local safety guidelines and travel advisories."
                />
            </div>
        </div>
    )
}
export default Mizoram;
