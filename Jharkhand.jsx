import Hover from  '../hover/Hover'
import Hover1 from  '../hover/Hover1'
import Hover2 from  '../hover/Hover2'
import Hover3 from '../hover/Hover3'
import '../states/State.css'
function Jharkhand() {
  return(
    <div>
        <a href='https://tourism.jharkhand.gov.in/'><h1 className='heading'>Jharkhand</h1></a>
        <h2 className='capital'>Capital: Ranchi</h2>
        <h1 className='sideheadings'>Places To Visit</h1>
        <div className='Places'>
            <Hover
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnPIpeKYb0D96CQxBI_auqrPleye1fbN5yMw&s"
            title="Hundru Falls"
            location="Ranchi"
            bookUrl="https://www.trivago.in/en-IN/lm/hotels-ranchi-india?search=200-64974;dr-20241008-20241009"
            locateUrl= "https://www.google.com/maps/search/Hundru+Falls/@23.4484918,85.6564774,15z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI0MDkyOS4wIKXMDSoASAFQAw%3D%3D"
            />
            <Hover
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOG2P5ysGsII9f9Kyu9r0K77WwAHufOwfbIQ&s"
            title="Maithon Dam"
            location="Dhanbad"
            bookUrl="https://www.trivago.in/en-IN/lm/hotels-dhanbad-india?search=200-424274;dr-20241008-20241009"
            locateUrl= "https://www.google.com/maps/place/QQFX%2BC27+Maithon+Dam,+Dist,+Amtalla,+Maithon,+Jharkhand+828207/@23.7734998,86.7949474,17z/data=!3m1!4b1!4m6!3m5!1s0x39f6ddb4728540f3:0x6760fc41375362e0!8m2!3d23.7734998!4d86.7975277!16s%2Fm%2F0403r53?entry=ttu&g_ep=EgoyMDI0MDkyOS4wIKXMDSoASAFQAw%3D%3D"
            />
            <Hover
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv0UOErB7fE7D7rujz_zZ5YjYh888jHwB8BQ&s"
            title="Netarhat Hills"
            location="Netarhat"
            bookUrl="https://www.trivago.in/en-IN/lm/guesthouse-hotel-sunrise-netarhat-ranchi?search=100-19382268;dr-20241008-20241009"
            locateUrl="https://www.google.com/maps/search/Netarhat+Hills/@23.5804351,84.1998123,11z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI0MDkyOS4wIKXMDSoASAFQAw%3D%3D"
            />
            <Hover
            imageSrc="https://upload.wikimedia.org/wikipedia/commons/1/1d/Palamau_Fort.jpg"
            title="Palamu Fort"
            location="Palamu"
            bookUrl="https://www.trivago.in/en-IN/lm/hotels-ranchi-india?search=200-64974;dr-20241008-20241009"
            locateUrl="https://www.google.com/maps/place/Palamu+Fort/@23.8949232,84.2271105,17z/data=!3m1!4b1!4m6!3m5!1s0x398b825513aaaaab:0x3de79986a9e2ca85!8m2!3d23.8949232!4d84.2296908!16s%2Fm%2F05h5d9t?entry=ttu&g_ep=EgoyMDI0MDkyOS4wIKXMDSoASAFQAw%3D%3D"
            />
        </div>
        <h1 className='sideheadings'>Culture and Tradition</h1>
        <div className='CultureTradition'>
            <Hover3
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyofKYksJ5Q4JgrgmOTHedMUafqzDQ4wCbNw&s"
            title="Chhau"
            location="A tribal martial dance that blends storytelling, music, and masked performances, particularly popular during festivals."
            locateUrl='https://www.youtube.com/watch?v=p1LVv1mNUQQ&t=1s'
            />
            <Hover1
            imageSrc="https://www.utsavpedia.com/wp-content/uploads/2013/07/Traditional-Costume-of-Jharkhand3.jpg"
            title="Panchi and Parhan"
            location="Traditional attire for women, consisting of a long skirt and a dupatta , often worn by tribal communities."
            />
            <Hover1
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFJbof2rbGQbrx_Qo58kmhtHbEjP8D3UeSuw&s"
            title="Sarhul"
            location="A major tribal festival marking the beginning of the new year, celebrated with nature worship and tribal dances."
            />
            <Hover1
            imageSrc="https://source.boomplaymusic.com/group10/M00/08/09/4103ec9449274196b800316bd4117c27_464_464.jpg"
            title="Nagpuri Songs"
            location="Traditional folk music accompanied by instruments like the dhol and nagada, popular in tribal ceremonies and festivals."
            />
        </div>
        <h1 className='sideheadings'>Cuisine</h1>
        <div className='Cuisine'>
            <Hover1
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAUWakFsA0RV3HUUOqvKmdUxdYHScCQJGYDA&s"
            title="Litti Chokha"
            location="A staple dish made of wheat dough balls (Litti) stuffed with roasted gram flour and served with mashed vegetables."
            />
            <Hover1
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwowbGj7fJ2qrnyyTdMm8CitcJ0mhZkelNMA&s"
            title="Dhuska"
            location="A deep-fried rice flour snack, often served with spicy chutney or curry, popular during festivals."
            />
            <Hover1
            imageSrc="https://www.villagesquare.in/wp-content/uploads/2023/11/WhatsApp-Image-2023-11-24-at-10.37.35-AM-1.jpeg"
            title="Thekua"
            location="A sweet snack made from wheat flour, jaggery, and coconut, typically prepared during Chhath Puja."
            />
            <Hover1
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQESfPw6W5zbv5PCmLTgZFmKmkjFNcLEB7dNQ&s"
            title="Rugra"
            location="A seasonal mushroom-like dish, cooked with spices and often considered a delicacy among Jharkhand’s tribal communities."
            />
        </div>
        <h1 className='sideheadings'>Wild Life and Nature</h1>
        <div className='WildLife'>
            <Hover2
            imageSrc="https://images.nativeplanet.com/img/2013/09/25-elephants.jpg"
            title="Betla National Park"
            locateUrl ="https://www.google.com/maps/place/Betla+National+Park/@23.8856486,84.1898179,17z/data=!3m1!4b1!4m6!3m5!1s0x398b837be6d19761:0xb1a90adf2189a235!8m2!3d23.8856486!4d84.1923982!16zL20vMDhfcWts?entry=ttu&g_ep=EgoyMDI0MDkyOS4wIKXMDSoASAFQAw%3D%3D"
            />
            <Hover2
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqhKthHpEAuFVD1IvCnyLwxndhCDs0yn_0Gg&s"
            title="Dalma Wildlife Sanctuary"
            locateUrl="https://www.google.com/maps/place/Dalma+Wildlife+Sanctuary/@22.8965883,86.2035224,17z/data=!3m1!4b1!4m6!3m5!1s0x39f5e05456f688c9:0x2dfa7d14fef4da3e!8m2!3d22.8965883!4d86.2061027!16s%2Fm%2F0jl0y7q?entry=ttu&g_ep=EgoyMDI0MDkyOS4wIKXMDSoASAFQAw%3D%3D"
            />
            <Hover2
            imageSrc="https://www.indovacations.net/india-wildlife-safari/Images/Hazaribagh_Wildlife.jpg"
            title="Hazaribagh Wildlife Sanctuary "
            locateUrl= "https://www.google.com/maps/place/Hazaribagh+Wildlife+Sanctuary/@24.142977,85.3796224,17z/data=!3m1!4b1!4m6!3m5!1s0x39f363bdb5c8055d:0x2d35637ceb4c54f0!8m2!3d24.142977!4d85.3822027!16zL20vMDdmYzls?entry=ttu&g_ep=EgoyMDI0MDkyOS4wIKXMDSoASAFQAw%3D%3D"
            />
            <Hover2
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSot7iQWOXGyYHAIHOPHN2kr0szMT_uWnuBCA&s"
            title="Palamau Tiger Reserve"
            locateUrl="https://www.google.com/maps/place/Palamau+Tiger+Reserve/@23.6849645,84.2326919,17z/data=!3m1!4b1!4m6!3m5!1s0x398b9fa39a4a1227:0x88694db2aeee532a!8m2!3d23.6849645!4d84.2352722!16s%2Fm%2F04n4xmd?entry=ttu&g_ep=EgoyMDI0MDkyOS4wIKXMDSoASAFQAw%3D%3D"
            />
        </div>
        <h1 className='sideheadings'>Shopping Destinations</h1>
        <div className='Shopping'>
            <Hover2
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuM_b7CTHYEEiousd-g9TXhz-BQUr2MnSsqg&s"
            title="Jamshedpur Market "
            locateUrl="https://www.google.com/maps/place/Sakchi+Market/@22.7884856,86.1895826,14z/data=!4m10!1m2!2m1!1sJamshedpur+Market+!3m6!1s0x39f5e30f707f839b:0x529561df5fb702eb!8m2!3d22.8046735!4d86.2049027!15sChFKYW1zaGVkcHVyIE1hcmtldFoTIhFqYW1zaGVkcHVyIG1hcmtldJIBBm1hcmtldOABAA!16s%2Fg%2F11hbbyk1h1?entry=ttu&g_ep=EgoyMDI0MDkyOS4wIKXMDSoASAFQAw%3D%3D"
            />
            <Hover2
            imageSrc="https://pbs.twimg.com/media/D3xAQ79XkAAyY96.jpg"
            title="Firayalal Chowk"
            locateUrl="https://www.google.com/maps/place/Albert+Ekka+Chowk,+Ahirtoli,+Ranchi,+Jharkhand+834001/@23.3701213,85.3223769,17z/data=!3m1!4b1!4m6!3m5!1s0x39f4e10f974ecd45:0x4f001d2580aad6d5!8m2!3d23.3701213!4d85.3249572!16s%2Fg%2F11cmzd3hcy?entry=ttu&g_ep=EgoyMDI0MDkyOS4wIKXMDSoASAFQAw%3D%3D"
            />
            <Hover2
            imageSrc="https://www.imagesbof.in/wp-content/uploads/2022/03/Nucleus-Mall-Ranchi.jpg"
            title="Nucleus Mall"
            locateUrl="https://www.google.com/maps/place/98GJ%2BVHW+Nucleus+Mall,+Circular+Rd,+Lalpur,+Ranchi,+Jharkhand+834001/@23.3773969,85.3290576,17z/data=!3m1!4b1!4m6!3m5!1s0x39f4e1139dee9ad9:0x5057c86f2d34ec48!8m2!3d23.3773969!4d85.3316325!16s%2Fg%2F11g079xn98?entry=ttu&g_ep=EgoyMDI0MDkyOS4wIKXMDSoASAFQAw%3D%3D"
            />
            <Hover2
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT3TRwy92ZGwYWsZUdZd5gq68mZ0Wsa8k1xA&s"
            title="Hazaribagh Market"
            locateUrl="https://www.google.com/maps/place/BM+Market+Hazaribag/@23.997006,85.3481102,14z/data=!4m10!1m2!2m1!1sHazaribagh+Market!3m6!1s0x39f49ea782fe385b:0x5a1da5070c59945b!8m2!3d23.9933689!4d85.3544676!15sChFIYXphcmliYWdoIE1hcmtldFoTIhFoYXphcmliYWdoIG1hcmtldJIBBm1hcmtldOABAA!16s%2Fg%2F1hm56t8fv?entry=ttu&g_ep=EgoyMDI0MDkyOS4wIKXMDSoASAFQAw%3D%3D"
            />
        </div>
        <h1 className='sideheadings'>Historical Significance</h1>
        <div className='Historical'>
            <Hover1
            imageSrc="https://upload.wikimedia.org/wikipedia/commons/1/1d/Palamau_Fort.jpg"
            title="Palamu Fort"
            location="An ancient fort from the Chero dynasty, known for its unique architecture and historical significance in Jharkhand’s tribal history."
            />
            <Hover1
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwABHpMCyLO12rAWu-sXCKsKQWfWRj0uzwgQ&s"
            title="Ranchi Hill"
            location="An important landmark with a temple dedicated to Lord Shiva, offering panoramic views and historical relevance."
            />
            <Hover1
            imageSrc="https://upload.wikimedia.org/wikipedia/commons/9/95/17th_century_Jagannath_temple_Ranchi_Jharkhand_-_9.jpg"
            title="Jagannath Temple"
            location="A 17th-century temple, similar to the famous Puri Jagannath Temple, and a pilgrimage site with historical importance."
            />
            <Hover1
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDD9hhUpGtSQrX2AkVEygXp5j0dxM7MukkFQ&s"
            title="Maluti Temples"
            location="A group of over 70 terracotta temples built in the 17th century, representing the cultural heritage of Jharkhand."
            />
        </div>
        <h1 className='sideheadings'>Travel Tips</h1>
        <div className='Historical'>
            <Hover1
            imageSrc="https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2024/06/28120553/travel-abroad-tips-1600x900.jpeg"
            title = "Best Time to Visit"
            location="Plan your trip between October and March for comfortable weather and outdoor activities."
            />
            <Hover1
            imageSrc="https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2024/06/28120553/travel-abroad-tips-1600x900.jpeg"
            title = "Trekking Gear"
            location="If visiting places like Netarhat or Betla National Park, carry sturdy shoes and trekking essentials."
            />
            <Hover1
            imageSrc="https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2024/06/28120553/travel-abroad-tips-1600x900.jpeg"
            title = "Health Precautions"
            location="Carry mosquito repellent and basic medical supplies when traveling to rural or forested areas."
            />
            <Hover1
            imageSrc="https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2024/06/28120553/travel-abroad-tips-1600x900.jpeg"
            title = "Local Transport"
            location="Use local cabs or auto-rickshaws for short distances and ensure safety at night."
            />
        </div>
    </div>
)
}
export default Jharkhand;