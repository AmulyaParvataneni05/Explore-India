import Hover from  '../hover/Hover'
import Hover1 from  '../hover/Hover1'
import Hover2 from  '../hover/Hover2'
import Hover3 from '../hover/Hover3'
import '../states/State.css'
function Meghalaya()
{
    return(
        <div>
            <a href='https://www.meghalayatourism.in/'><h1 className='heading'>Meghalaya</h1></a>
            <h2 className='capital'>Capital: Shillong</h2>
            <h1 className='sideheadings'>Places To Visit</h1>
            <div className='Places'>
                <Hover
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkAgRnpQQyXIR0gCc64f6KqtieBwtvR9vB_w&s"
                title="Ward's Lake"
                location="Shillong"
                bookUrl="https://www.trivago.in/en-IN/lm/hotels-shillong-india?search=200-64983;dr-20240907-20240908"
                locateUrl= "https://www.google.com/maps/place/Ward's+Lake/@25.5748417,91.885213,18z/data=!3m1!4b1!4m6!3m5!1s0x37507e94145b7c09:0x84366096de7b510a!8m2!3d25.5758074!4d91.8865737!16s%2Fg%2F1tsr1k7k?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
                <Hover
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTklNBGH9V0wkJQQgfcIafG0BWIqp8qpWE-lQ&s"
                title="Nohkalikai Falls"
                location="Cherrapunji"
                bookUrl="https://www.trivago.in/en-IN/lm/hotels-cherrapunji-india?search=200-323351;dr-20240907-20240908"
                locateUrl= "https://www.google.com/maps/place/NohKaLikai+Falls/@25.2754719,91.6835875,17z/data=!3m1!4b1!4m6!3m5!1s0x37508d4d52a66213:0x1e4a36d9696f9c41!8m2!3d25.2754203!4d91.6859562!16s%2Fm%2F03gwzx9?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
                <Hover
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvuCF7yrJJtcUINvkjSfjp-EhFVt7k71H4xg&s"
                title="Living Root Bridge"
                location="Mawlynnong"
                bookUrl="https://www.trivago.in/en-IN/lm/hotel-mawlynnong-guest-house-shillong?search=100-7050600;dr-20240907-20240908"
                locateUrl="https://www.google.com/maps/place/Living+Root+Bridge,+Riwai+Village/@25.2065372,91.8952636,17z/data=!3m1!4b1!4m6!3m5!1s0x37505c2240000001:0x9f091ee775313763!8m2!3d25.2065372!4d91.8978439!16s%2Fg%2F11f3y3tk57?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
                <Hover
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIxSJp39KFv_-wud1bRImi8rPjkBpbNpTO1WEAsdurbk06aVWeyed4zyirY8EBvoO_99g&usqp=CAU"
                title="Umngot River"
                location="Dawki"
                bookUrl="https://www.trivago.in/en-IN/lm/camping-site-dawki-riverside-camping-shillong?search=100-26586158;dr-20240907-20240908"
                locateUrl="https://www.google.com/maps/place/Wah+Umngot/@25.2487066,91.9478081,14z/data=!3m1!4b1!4m6!3m5!1s0x37505d4ae9128b43:0x14a355b132680d87!8m2!3d25.2465961!4d91.9849414!16s%2Fg%2F1hhjsmcdm?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
            </div>
            <h1 className='sideheadings'>Culture and Tradition</h1>
            <div className='CultureTradition'>
                <Hover3
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFnob26OIFSMDaREOslRs_pLsME-Hw-JCQ5g&s"
                title="Nongkrem Dance"
                location="A Khasi harvest dance during Nongkrem Festival to honor goddess Ka Blei Synshar."
                locateUrl='https://www.youtube.com/watch?v=7VVs737SSUY'
                />
                <Hover1
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiAciyONvx9u_SeA0kwKyT_N4lq0NExp2zMQ&s"
                title="Garo Attire"
                location="Garo women traditionally wear a wrap-around dress called Dakmanda, often accompanied by a blouse called Jainsem."
                />
                <Hover1
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd6l-sAfBpTYvQWlFprq3VFy2AvPTnC69kGg&s"
                title="Wangala Festival"
                location="A major festival of the Garo tribe, celebrating the harvest with traditional music, dance, and rituals."
                />
                <Hover1
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTajb1dNTgIZcEPqBWQG_wZxZPNCYRdhLT5PA&s"
                title="Garo Music"
                location="The Garo tribe's music features instruments like the Dama (drum), Adil (flute), and traditional horns, closely tied to their agricultural and social traditions."
                />
            </div>
            <h1 className='sideheadings'>Cuisine</h1>
            <div className='Cuisine'>
                <Hover1
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-tKupx3-U-8Vkw7GsU_YeGOJLtt1qQ2kt_A&s"
                title="Jadoh"
                location="A popular Khasi dish made with rice and meat, often served with spicy chutney."
                />
                <Hover1
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9vmiYPQ3mKN8mSitOwUhdDzu1EEuQ-GaQbw&s"
                title="Nakham Bitchi"
                location="A Garo soup made from dry fish, typically served before meals."
                />
                <Hover1
                imageSrc="https://i0.wp.com/atmykitchen.net/wp-content/uploads/2020/01/traditional_khasi_pork_dish156008097101519804.jpg?resize=640%2C853&ssl=1"
                title="Doh-Khlieh"
                location="A traditional salad made from minced pork, onions, and chili."
                />
                <Hover1
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ3wTZNxtH0UrOB9dma2AQCMIc6nCStMHojg&s"
                title="Pumaloi"
                location="Steamed rice flour cakes, a staple in Khasi households."
                />
            </div>
            <h1 className='sideheadings'>Wild Life and Nature</h1>
            <div className='WildLife'>
                <Hover2
                imageSrc="https://www.meghalayatourism.in/wp-content/uploads/2021/09/the-land-of-perpetual-winds-balpakram-national-park-experience1-600x400.jpg"
                title="Balpakram National Park"
                locateUrl = "https://www.google.com/maps/place/Balpakram+National+Park/@25.2626037,90.8618199,17z/data=!3m1!4b1!4m6!3m5!1s0x375713617099c511:0x91168f0c0c7494c1!8m2!3d25.2626037!4d90.8644002!16zL20vMDhfdzNo?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
                <Hover2
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOLfMOdP_Wyp7i8Ld54rQLbqLvr1_MWl7-ww&s"
                title="Nokrek National Park"
                locateUrl="https://www.google.com/maps/place/Nokrek+National+Park/@25.447504,90.1237222,11z/data=!4m10!1m2!2m1!1sNokrek+National+Park!3m6!1s0x3757fa533e52670b:0x425185bbb818dbff!8m2!3d25.447504!4d90.4285928!15sChROb2tyZWsgTmF0aW9uYWwgUGFya1oWIhRub2tyZWsgbmF0aW9uYWwgcGFya5IBDW5hdGlvbmFsX3BhcmuaASNDaFpEU1VoTk1HOW5TMFZKUTBGblNVTnNNSFkyYzFOQkVBReABAA!16zL20vMDhfdGNw?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
                <Hover2
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1MTYkRAxc1IyqJ31ExV3UxbpNeEn5kMrHQA&s"
                title="Mawphlang Sacred Forest"
                locateUrl= "https://www.google.com/maps/place/Mawphlang+Sacred+Forest/@25.4465177,91.7461074,17z/data=!4m10!1m2!2m1!1sMawphlang+Sacred+Forest!3m6!1s0x37508f4d08fb19cd:0x701f0a600ea4c6a!8m2!3d25.4452356!4d91.7488968!15sChdNYXdwaGxhbmcgU2FjcmVkIEZvcmVzdFoZIhdtYXdwaGxhbmcgc2FjcmVkIGZvcmVzdJIBE2hpc3RvcmljYWxfbGFuZG1hcmvgAQA!16s%2Fg%2F11c1vms0fp?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
                <Hover2
                imageSrc="https://content.jdmagicbox.com/comp/tura/p6/9999p3651.3651.141223184417.r8p6/catalogue/siju-bird-sanctuary-tura-ho-tura-tourist-attraction-2lmtfxm.jpg"
                title="Siju Bird Sanctuary"
                locateUrl="https://www.google.com/maps/place/Siju+Bird+Sanctuary/@25.3418586,90.6804938,17z/data=!3m1!4b1!4m6!3m5!1s0x37577350e9376a9d:0x718670485d5a7cd5!8m2!3d25.3418586!4d90.6830741!16s%2Fg%2F11h_v291z6?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
            </div>
            <h1 className='sideheadings'>Shopping Destinations</h1>
            <div className='Shopping'>
                <Hover2
                imageSrc="https://c8.alamy.com/zooms/9/572fb7fe958f467ca0a5370b1ec30542/jrn3ey.jpg"
                title="Police Bazaar"
                locateUrl="https://www.google.com/maps/place/Police+Bazar,+Shillong,+Meghalaya/@25.5767019,91.8816234,16z/data=!3m1!4b1!4m6!3m5!1s0x37507e92f63a5089:0x6c1444f2f7a93cd8!8m2!3d25.5779199!4d91.8837004!16s%2Fg%2F1wcxbfvy?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
                <Hover2
                imageSrc="https://c8.alamy.com/comp/2T6PXH3/a-shopkeeper-seen-selling-idols-of-lakshmi-and-ganesh-on-the-occasion-of-diwali-at-the-bara-bazar-market-shopkeepers-are-selling-idols-clay-lamps-decorative-items-on-the-occasion-of-diwali-in-kolkata-diwali-is-a-celebration-of-the-day-lord-ram-returned-to-his-kingdom-in-ayodhya-with-his-wife-sita-and-his-brother-lakshmana-after-defeating-the-demon-ravana-in-lanka-and-serving-14-years-of-exile-as-per-hindu-mythology-photo-by-dipayan-bose-sopa-imagessipa-usa-2T6PXH3.jpg"
                title="Bara Bazaar"
                locateUrl="https://www.google.com/maps/place/%C3%8Fewduh,+Bara+Bazar,+Shillong,+Meghalaya/@25.5736665,91.8701554,16z/data=!3m1!4b1!4m6!3m5!1s0x37507e8c8833b8ab:0x5a140e6d9abaa9aa!8m2!3d25.5724472!4d91.8745219!16s%2Fg%2F1jkz3k_ty?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
                <Hover2
                imageSrc="https://images.indianexpress.com/2019/11/Shillong001.jpg?w=350"
                title="Iewduh Market"
                locateUrl="https://www.google.com/maps/search/Iewduh+Market/@25.5808148,91.8819568,15z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
                <Hover2
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTETJdTQKvyNMQ4E4vXIx3iKe-AaRGIzMCHBQ&s"
                title="The Rynjah Mall"
                locateUrl="https://www.google.com/maps/place/Rynjah,+Shillong,+Meghalaya/@25.5714142,91.8942241,15z/data=!3m1!4b1!4m6!3m5!1s0x3750794c25f8448d:0x4085a799747c7139!8m2!3d25.5712123!4d91.9129771!16s%2Fg%2F1hcb1d096?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
            </div>
            <h1 className='sideheadings'>Historical Significance</h1>
            <div className='Historical'>
                <Hover1
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfGT8aTnX0vo2nFrGi-t9kc3DJ-JG64N5a-Q&s"
                title="Shillong Peak"
                location="Offers a panoramic view and holds cultural significance for the Khasi tribe."
                />
                <Hover1
                imageSrc="https://cdn1.tripoto.com/media/filter/nl/img/2380291/Image/1696515054_euvwegpucai04aw.jpg.webp"
                title="Mawsmai Caves"
                location="Natural limestone caves with historical and geological significance."
                />
                <Hover1
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT579rjxx_CjTlufAML8TVBLSzW0AcJU6YCDg&s"
                title="Riwai Village"
                location="Known for its ancient living root bridges, highlighting the unique architectural heritage of Meghalaya."
                />
                <Hover1
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo5uXqsrGMMeESKmCoh_9S63w06vlzoxol3A&s"
                title="Umiam Lake"
                location="An artificial reservoir created in the 1960s, serving as a key landmark and recreational spot."
                />
            </div>

            <h1 className='sideheadings'>Travel Tips</h1>
            <div className='Historical'>
                <Hover1
                imageSrc="https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2024/06/28120553/travel-abroad-tips-1600x900.jpeg"
                title = "Carry Warm Clothing"
                location="The weather can be cool and damp, especially in higher altitudes, so pack accordingly."
                />
                <Hover1
                imageSrc="https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2024/06/28120553/travel-abroad-tips-1600x900.jpeg"
                title = 'Respect Local Customs'
                location="Meghalaya is home to diverse tribes with unique traditions. Be mindful of local customs and etiquette."
                />
                <Hover1
                imageSrc="https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2024/06/28120553/travel-abroad-tips-1600x900.jpeg"
                title = "Plan for Rain"
                location="The region experiences heavy rainfall, especially during the monsoon season. Carry rain gear and check weather forecasts."
                />
                <Hover1
                imageSrc="https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2024/06/28120553/travel-abroad-tips-1600x900.jpeg"
                title = "Hire Local Guides"
                location="Consider hiring local guides to better understand the region’s culture and history."
                />
            </div>
        </div>
    )
}
export default Meghalaya;
