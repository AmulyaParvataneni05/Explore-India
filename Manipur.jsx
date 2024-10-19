import Hover from  '../hover/Hover'
import Hover1 from  '../hover/Hover1'
import Hover2 from  '../hover/Hover2'
import Hover3 from '../hover/Hover3'
import '../states/State.css'
function Manipur() {
  return(
    <div>
        <a href='https://manipurtourism.gov.in/'><h1 className='heading'>Manipur</h1></a>
        <h2 className='capital'>Capital: Imphal</h2>
        <h1 className='sideheadings'>Places To Visit</h1>
        <div className='Places'>
            <Hover
            imageSrc="https://ifp-bucket.s3.amazonaws.com/feature_image/Tharon_Cave_Explore_the_less_exploredTharon_Cave_Explore_the_less_explored_LpTZ9of.jpg"
            title="Tharon Cave"
            location="Tamenglong"
            bookUrl="https://www.trivago.in/en-IN/lm/hotel-apollo-inn-tamenglong-imphal?search=100-9076304;dr-20241008-20241009"
            locateUrl= "https://www.google.com/maps/place/Tharon+cave/@25.065846,93.5429996,17z/data=!3m1!4b1!4m6!3m5!1s0x374f3be611031d05:0x18321dba3e96f93b!8m2!3d25.065846!4d93.5455799!16s%2Fg%2F11h84ldy8w?entry=ttu&g_ep=EgoyMDI0MDkyOS4wIKXMDSoASAFQAw%3D%3D"
            />
            <Hover
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyipq_dj6XsCQ9BXNmq67EvwmpKCo07HLoug&s"
            title="Andro Village"
            location="Imphal East"
            bookUrl="https://www.trivago.in/en-IN/lm/hotels-imphal-india?search=200-106361;dr-20241008-20241009"
            locateUrl= "https://www.google.com/maps/place/Andro,+Manipur+795149/@24.7481614,94.0286166,15z/data=!3m1!4b1!4m6!3m5!1s0x374922465d1d1da7:0xce9286c40b850e9!8m2!3d24.7479739!4d94.0419657!16s%2Fm%2F02q2zfy?entry=ttu&g_ep=EgoyMDI0MDkyOS4wIKXMDSoASAFQAw%3D%3D"
            />
            <Hover
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBMdGqMEXIrLHPosSUSTw2RfhTJ36Svbk9CQ&s"
            title="Leimaram Waterfall"
            location="Bishnupur"
            bookUrl="https://www.trivago.in/en-IN/lm/hotel-bishnupur-bankura?search=100-5076744;dr-20241008-20241009"
            locateUrl="https://www.google.com/maps/place/LEIMARAM+WATER+FALL/@24.7408104,93.728959,15z/data=!4m10!1m2!2m1!1sLeimaram+Waterfall!3m6!1s0x37492cb5a69cdd03:0x2f4dd001e623a25f!8m2!3d24.7408104!4d93.7464685!15sChJMZWltYXJhbSBXYXRlcmZhbGxaFCISbGVpbWFyYW0gd2F0ZXJmYWxskgESdG91cmlzdF9hdHRyYWN0aW9umgEkQ2hkRFNVaE5NRzluUzBWSlEwRm5TVVIxTUhCVGQxOW5SUkFC4AEA!16s%2Fg%2F11c2q0kzyx?entry=ttu&g_ep=EgoyMDI0MDkyOS4wIKXMDSoASAFQAw%3D%3D"
            />
            <Hover
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZiNu0OGssiedHKnCZu-4tiEKOufazTlFEoA&s"
            title="Buning Meadow"
            location="Tamenglong"
            bookUrl="https://www.trivago.in/en-IN/lm/hotel-apollo-inn-tamenglong-imphal?search=100-9076304;dr-20241008-20241009"
            locateUrl="https://www.google.com/maps/place/Buning+Meadow/@25.1387042,93.6013424,17z/data=!3m1!4b1!4m6!3m5!1s0x374f316dedc18619:0xd79b2ece0511bcfc!8m2!3d25.1387042!4d93.6039227!16s%2Fg%2F11qrbcp78d?entry=ttu&g_ep=EgoyMDI0MDkyOS4wIKXMDSoASAFQAw%3D%3D"
            />
        </div>
        <h1 className='sideheadings'>Culture and Tradition</h1>
        <div className='CultureTradition'>
            <Hover3
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBAWGoL8rWM0AHW6nGw4vNtznb4KvnTDv1qw&s"
            title="Ras Leela"
            location="Ras Leela and Lai Haraoba are the two most prominent classical dance forms in Manipuri culture."
            locateUrl='https://www.youtube.com/watch?v=k9E5B0IuaYI'
            />
            <Hover1
            imageSrc="https://infinitylearn.com/surge/wp-content/uploads/2024/01/manipuri-traditional-dress-female-1-e1704710279920.jpg"
            title="Phanek and Dhoti"
            location="Traditional Manipuri attire includes the Phanek and Innaphi for women and Dhoti for men."
            />
            <Hover1
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9kDJcNe3ElKBMYeQESTnUSbxF_9PvlVMvYQ&s"
            title="Yaoshang"
            location="Yaoshang, Cheiraoba, and Kang are some of the major festivals celebrated with cultural and religious fervor."
            />
            <Hover1
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsKmYLpZZW9u6t5322ZH99eXUe_gk8YYZ8yg&s"
            title="Pena"
            location="The Pena, Pung, and Kartal are traditional musical instruments that play a vital role in Manipuri music."
            />
        </div>
        <h1 className='sideheadings'>Cuisine</h1>
        <div className='Cuisine'>
            <Hover1
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNnMfcf4LuX5RmX025Nk2mc6CxWGShZWNIWw&s"
            title="Eromba"
            location="A spicy mash of boiled vegetables and fermented fish, seasoned with chilies and aromatic herbs."
            />
            <Hover1
            imageSrc="https://upload.wikimedia.org/wikipedia/commons/6/6d/Yongchaak_Singju_with_Hawai_Maton.jpg"
            title="Singju"
            location="A traditional salad made with raw vegetables, herbs, and ngari (fermented fish), known for its refreshing crunch."
            />
            <Hover1
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAoOkxFsSsy_FmURshUobXX07JPvSe9Ij5aQ&s"
            title="Chak-hao Kheer"
            location="A sweet rice pudding made from black rice, rich in flavor and served during festivals."
            />
            <Hover1
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzYMV0cpPxvkpyfOmKEbTXxaytg2J5EJaLFA&s"
            title="Nga-Thongba"
            location="A delicious fish curry prepared with local spices and herbs, often served with rice."
            />
        </div>
        <h1 className='sideheadings'>Wild Life and Nature</h1>
        <div className='WildLife'>
            <Hover2
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSabiUESt4wkYQCQWDdbyNi7OcAEvBFQVeI0A&s"
            title="Keibul Lamjao National Park"
            locateUrl ="https://www.google.com/maps/place/Keibul+Lamjao+National+Park/@24.4587981,93.7835738,14z/data=!4m10!1m2!2m1!1sKeibul+Lamjao+National+Park!3m6!1s0x37494b3456b0038d:0xd92d2f94be4d2136!8m2!3d24.478798!4d93.8395226!15sChtLZWlidWwgTGFtamFvIE5hdGlvbmFsIFBhcmtaHSIba2VpYnVsIGxhbWphbyBuYXRpb25hbCBwYXJrkgENbmF0aW9uYWxfcGFya-ABAA!16zL20vMDM2Y2x2?entry=ttu&g_ep=EgoyMDI0MDkyOS4wIKXMDSoASAFQAw%3D%3D"
            />
            <Hover2
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsfsix6HZnYEXUO6Cw0bLWg7-8y3AHKcSxDA&s"
            title="Shirui Hill"
            locateUrl="https://www.google.com/maps/place/Shirui,+Manipur+795142/@25.1294622,94.4090472,16z/data=!3m1!4b1!4m10!1m2!2m1!1sShirui+Hill!3m6!1s0x37485f36063f310b:0xa989b816267f2112!8m2!3d25.1299438!4d94.4188519!15sCgtTaGlydWkgSGlsbJIBCGxvY2FsaXR54AEA!16s%2Fg%2F11bw5631c5?entry=ttu&g_ep=EgoyMDI0MDkyOS4wIKXMDSoASAFQAw%3D%3D"
            />
            <Hover2
            imageSrc="https://cdn.britannica.com/44/149744-050-2491680E/Entrance-Leipzig-Zoological-Garden-Ger.jpg"
            title="Zoological Garden"
            locateUrl= "https://www.google.com/maps/place/Manipur+Zoological+Garden+(Sangai+Dancing+Deer+Habitat)-+Imphal+West+District,+Manipur,+India/@24.8175275,93.8882841,17z/data=!3m1!4b1!4m6!3m5!1s0x374929f90ac337d1:0x8d6da1571dbe85ad!8m2!3d24.8175275!4d93.8908644!16s%2Fg%2F11s4_f80d8?entry=ttu&g_ep=EgoyMDI0MDkyOS4wIKXMDSoASAFQAw%3D%3D"
            />
            <Hover2
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ94EFWrezAxkxWpJn0lXyUVgBlZhM79Lk9iQ&s"
            title="Dzukou Valley"
            locateUrl="https://www.google.com/maps/place/Dz%C3%BCko+Valley/@25.5553627,94.0626984,17z/data=!3m1!4b1!4m6!3m5!1s0x37489f5930712773:0xcff1a7f40e50782c!8m2!3d25.5553627!4d94.0652787!16s%2Fg%2F11fkf4w59s?entry=ttu&g_ep=EgoyMDI0MDkyOS4wIKXMDSoASAFQAw%3D%3D"
            />
        </div>
        <h1 className='sideheadings'>Shopping Destinations</h1>
        <div className='Shopping'>
            <Hover2
            imageSrc="https://kalingatv.com/wp-content/uploads/2021/03/ima-keithel.jpg"
            title="Ima Keithel"
            locateUrl="https://www.google.com/maps/place/Ima+Market/@24.8040565,93.9080977,15z/data=!4m10!1m2!2m1!1sIma+Keithel!3m6!1s0x374927b2fe5493f1:0xc8ebf6c0df5d56f6!8m2!3d24.8078205!4d93.933837!15sCgtJbWEgS2VpdGhlbFoNIgtpbWEga2VpdGhlbJIBBm1hcmtldOABAA!16s%2Fg%2F11j7vnrs_5?entry=ttu&g_ep=EgoyMDI0MDkyOS4wIKXMDSoASAFQAw%3D%3D"
            />
            <Hover2
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqXvS8iCSUJTul8eGNbrehVXzMH5qM8NOeQQ&s"
            title="Khwairamband Bazaar"
            locateUrl="https://www.google.com/maps/place/CSC+KHWAIRAMBAND/@24.8016145,93.9328274,17z/data=!3m1!4b1!4m6!3m5!1s0x374927b25e52a75b:0xe9879fc066721619!8m2!3d24.8016145!4d93.9354077!16s%2Fm%2F026pm98?entry=ttu&g_ep=EgoyMDI0MDkyOS4wIKXMDSoASAFQAw%3D%3D"
            />
            <Hover2
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1bDpQ004sxPBd6cvOE2sedOZZciC53dRfNA&s"
            title="Paona Bazaar"
            locateUrl="https://www.google.com/maps/place/Paona+Bazar,+Imphal,+Manipur/@24.8036058,93.9324722,17z/data=!3m1!4b1!4m6!3m5!1s0x3749264d3fb51d5b:0xfe08164e0485cfd2!8m2!3d24.8048485!4d93.9346138!16s%2Fg%2F1w110k3r?entry=ttu&g_ep=EgoyMDI0MDkyOS4wIKXMDSoASAFQAw%3D%3D"
            />
            <Hover2
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYniHuCRDbWyp3HZMNUeBc-HMp4bh9HGCLWg&s"
            title="Tera Bazaar"
            locateUrl="https://www.google.com/maps/place/Tera+Bazaar-Nouramthong+Road,+Imphal,+Manipur+795004/@24.8035278,93.9144792,17z/data=!3m1!4b1!4m6!3m5!1s0x3749263283a910cb:0xccfbf63e2fa9c54!8m2!3d24.8035278!4d93.9170595!16s%2Fg%2F1tfsr76w?entry=ttu&g_ep=EgoyMDI0MDkyOS4wIKXMDSoASAFQAw%3D%3D"
            />
        </div>
        <h1 className='sideheadings'>Historical Significance</h1>
        <div className='Historical'>
            <Hover1
            imageSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/The_Kangla_Gate.JPG/152px-The_Kangla_Gate.JPG"
            title="Kangla Fort"
            location="The ancient seat of the Manipur kings, Kangla Fort is a symbol of the state's rich history and culture."
            />
            <Hover1
            imageSrc="https://upload.wikimedia.org/wikipedia/commons/e/e9/The_Loktak_Lake.jpg"
            title="Loktak Lake"
            location="Known as the largest freshwater lake in the Northeast, it was once a strategic site for royal settlements."
            />
            <Hover1
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9WsnuP9sFqIYiYLbgFgGjEAJzBMNmz4LEPQ&s"
            title="Khongjom War Memorial"
            location="A tribute to the brave Manipuri soldiers who fought against British forces in the Anglo-Manipuri War of 1891."
            />
            <Hover1
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpNr4RKEgw6m5tEJgo3CP8rDydBNIMzRda9Q&s"
            title="INA Memorial"
            location="Commemorates the Indian National Army’s hoisting of the Indian flag for the first time on Indian soil during WWII."
            />
        </div>
        <h1 className='sideheadings'>Travel Tips</h1>
        <div className='Historical'>
            <Hover1
            imageSrc="https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2024/06/28120553/travel-abroad-tips-1600x900.jpeg"
            title = "Best Time to Visit"
            location="Visit Manipur between October and March to enjoy pleasant weather and festivals."
            />
            <Hover1
            imageSrc="https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2024/06/28120553/travel-abroad-tips-1600x900.jpeg"
            title = "Local Cuisine"
            location="Don’t miss trying traditional Manipuri dishes like Eromba, Chak-hao Kheer, and Singju."
            />
            <Hover1
            imageSrc="https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2024/06/28120553/travel-abroad-tips-1600x900.jpeg"
            title = "Cultural Etiquette"
            location="Respect local customs and dress modestly when visiting temples or villages."
            />
            <Hover1
            imageSrc="https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2024/06/28120553/travel-abroad-tips-1600x900.jpeg"
            title = "Language Tips"
            location="Learning a few words in Manipuri, like 'Khunung' for hello, can help you connect with locals."
            />
        </div>
    </div>
)
}
export default Manipur;