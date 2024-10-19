import Hover from  '../hover/Hover'
import Hover1 from  '../hover/Hover1'
import Hover2 from  '../hover/Hover2'
import Hover3 from '../hover/Hover3'
import '../states/State.css'
function Karnataka() {
  return(
    <div>
        <a href='https://www.karnatakaecotourism.com/'><h1 className='heading'>Karnataka</h1></a>
        <h2 className='capital'>Capital: Bengaluru</h2>
        <h1 className='sideheadings'>Places To Visit</h1>
        <div className='Places'>
            <Hover
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQhUFxGWQmMCYh1mIrGNOO9cY1xsgNQ_erLA&s"
            title="Cubbon Park"
            location="Bengaluru"
            bookUrl="https://www.trivago.in/en-IN/lm/hotels-bengaluru-india?search=200-64975;dr-20241008-20241009"
            locateUrl= "https://www.google.com/maps/place/Shri+Ch%C4%81marajendra+(Cubbon)+Park/@12.9760969,77.5931783,16z/data=!4m10!1m2!2m1!1sCubbon+Park!3m6!1s0x3bae1673e7d0672f:0xc62ca5a6e943dfb8!8m2!3d12.9779291!4d77.5951549!15sCgtDdWJib24gUGFya1oNIgtjdWJib24gcGFya5IBBHBhcmvgAQA!16zL20vMGJtN2Q1?entry=ttu&g_ep=EgoyMDI0MDkyOS4wIKXMDSoASAFQAw%3D%3D"
            />
            <Hover
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc792lJdiGrUSZCIP78_5eBHj42Y8WE0jKHA&s"
            title=" Abbey Falls"
            location="Coorg"
            bookUrl="https://www.trivago.in/en-IN/lm/hotels-bengaluru-india?search=200-64975;dr-20241008-20241009"
            locateUrl= "https://www.google.com/maps/place/Abbey+Waterfall/@12.4582625,75.7169353,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba5010ed0b5e627:0xad38db4e99b4e610!8m2!3d12.4582625!4d75.7195156!16s%2Fm%2F026hxr2?entry=ttu&g_ep=EgoyMDI0MDkyOS4wIKXMDSoASAFQAw%3D%3D"
            />
            <Hover
            imageSrc="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/03/53/5e/7f/om-beach.jpg?w=1200&h=-1&s=1"
            title="Om Beach"
            location="Gokarna"
            bookUrl="https://www.trivago.in/en-IN/lm/hotels-gokarna-india?search=200-344928;dr-20241008-20241009"
            locateUrl="https://www.google.com/maps/place/Om+Beach/@14.5188271,74.3203077,17z/data=!3m1!4b1!4m6!3m5!1s0x3bbe8218126fad05:0x294f4f7ab4235873!8m2!3d14.5192405!4d74.3230039!16s%2Fg%2F1vlqnnmz?entry=ttu&g_ep=EgoyMDI0MDkyOS4wIKXMDSoASAFQAw%3D%3D"
            />
            <Hover
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdj8UNevbZ7-oXuaSSFHU5lQ4QLRDBVMxGyQ&s"
            title="Mullayanagiri"
            location="Chikmagalur"
            bookUrl="https://www.trivago.in/en-IN/lm/hotels-chikkamagaluru-india?search=200-344863;dr-20241008-20241009"
            locateUrl="https://www.google.com/maps/place/Mullayanagiri+Peak/@13.390885,75.7110083,15z/data=!3m1!4b1!4m6!3m5!1s0x3bbad8a3b446124d:0x69e33a7e47e4081e!8m2!3d13.3908855!4d75.7213295!16s%2Fg%2F11bc5lxmvk?entry=ttu&g_ep=EgoyMDI0MDkyOS4wIKXMDSoASAFQAw%3D%3D"
            />
        </div>
        <h1 className='sideheadings'>Culture and Tradition</h1>
        <div className='CultureTradition'>
            <Hover3
            imageSrc="https://i.pinimg.com/originals/8a/7f/27/8a7f27bd48fcc0f4aa5b525d5bd2b9be.jpg"
            title="Yakshagana"
            location="A vibrant dance-drama that combines music, dance, and elaborate costumes to tell stories from Hindu mythology."
            locateUrl='https://www.youtube.com/watch?v=qUYWZXHL8JU'
            />
            <Hover1
            imageSrc="https://www.incredibleindia.net.in/wp-content/uploads/2023/01/Wedding-Dress-of-Sikkim-300x300.jpg"
            title="Sarees and Kurta"
            location="Women typically wear colorful silk sarees, while men wear dhotis or kurta-pajamas, often adorned with intricate designs."
            />
            <Hover1
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2obB2BMZNDRaV1pmZq1_WiHFH0YQlu5Fi5Q&s"
            title="Dasara"
            location="A major festival celebrated with grandeur in Mysuru, featuring a royal procession, cultural performances, and the decoration of the Mysore Palace."
            />
            <Hover1
            imageSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Saraswati.jpg/200px-Saraswati.jpg"
            title="Carnatic Music"
            location="A classical music tradition characterized by intricate compositions and improvisation, often accompanied by instruments like the veena, mridangam."
            />
        </div>
        <h1 className='sideheadings'>Cuisine</h1>
        <div className='Cuisine'>
            <Hover1
            imageSrc="https://www.indianveggiedelight.com/wp-content/uploads/2020/06/bisibelebath.jpg"
            title="Bisi Bele Bath"
            location="A spicy rice dish cooked with lentils and vegetables, flavored with a special spice mix."
            />
            <Hover1
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRaO9IwYeapIXQO-Awx7rSp_tVaqaBZo7qpA&s"
            title="Mysore Pak"
            location="A rich and sweet gram flour dessert made with ghee, originating from Mysore."
            />
            <Hover1
            imageSrc="https://www.ruchikrandhap.com/wp-content/uploads/2010/03/IMG_5080-scaled.jpg"
            title="Mangalore Buns"
            location="Sweet and fluffy banana-flavored deep-fried buns, popular in coastal Karnataka."
            />
            <Hover1
            imageSrc="https://static.toiimg.com/thumb/53541904.cms?imgsize=168967&width=800&height=800"
            title="Neer Dosa"
            location="A soft, thin rice crepe served with coconut chutney or chicken curry, famous in Mangalore."
            />
        </div>
        <h1 className='sideheadings'>Wild Life and Nature</h1>
        <div className='WildLife'>
            <Hover2
            imageSrc="https://karnatakatourism.org/wp-content/uploads/2020/11/bandipur-national-park.jpg"
            title="Bandipur National Park"
            locateUrl ="https://www.google.com/maps/place/Bandipur+National+Park/@11.7787611,76.4621003,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba8aaa8dde6363b:0x120624bbcf55937b!8m2!3d11.7787611!4d76.4646806!16zL20vMDNodzIx?entry=ttu&g_ep=EgoyMDI0MDkyOS4wIKXMDSoASAFQAw%3D%3D"
            />
            <Hover2
            imageSrc="https://karnatakatourism.org/wp-content/uploads/2020/10/Nagarhole.jpg"
            title="Nagarhole National Park"
            locateUrl="https://www.google.com/maps/place/Nagarahole+Tiger+Reserve/@12.0734366,76.1485012,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba5ea8fc89ad29b:0xec955245948111ec!8m2!3d12.0734366!4d76.1510815!16zL20vMDk2enpz?entry=ttu&g_ep=EgoyMDI0MDkyOS4wIKXMDSoASAFQAw%3D%3D"
            />
            <Hover2
            imageSrc="https://www.karnataka.com/wp-content/uploads/2008/10/Bannerghatta-National-Park-Tiger-1280x720.jpg"
            title="Bannerghatta National Park"
            locateUrl= "https://www.google.com/maps/place/Bannerghatta+Biological+Park/@12.8008483,77.574769,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae6ba87f09fc55:0x96b24101b2a3dcd9!8m2!3d12.8008483!4d77.5773493!16s%2Fg%2F11rsr_xg8f?entry=ttu&g_ep=EgoyMDI0MDkyOS4wIKXMDSoASAFQAw%3D%3D"
            />
            <Hover2
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-iE1pPtFqQTechwhO9BQCZhWIOCViWJQetg&s"
            title="Kudremukh National Park"
            locateUrl="https://www.google.com/maps/place/Kudremukh/@13.1360291,75.2467561,15z/data=!3m1!4b1!4m6!3m5!1s0x3bbb4b67873a525f:0x9f5f990cec9a202a!8m2!3d13.1413316!4d75.2537397!16s%2Fg%2F1q5bmx7qb?entry=ttu&g_ep=EgoyMDI0MDkyOS4wIKXMDSoASAFQAw%3D%3D"
            />
        </div>
        <h1 className='sideheadings'>Shopping Destinations</h1>
        <div className='Shopping'>
            <Hover2
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUOgssXBjC7MgZBnbgQ29pcYgsBdUuwt_Ggw&s"
            title="Brigade Road"
            locateUrl="https://www.google.com/maps/place/Brigade+Rd,+Ashok+Nagar,+Bengaluru,+Karnataka/@12.9710328,77.6043502,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae15d55cf36715:0x67c9c68d327b80dd!8m2!3d12.9710328!4d77.6069305!16s%2Fm%2F03nsqmb?entry=ttu&g_ep=EgoyMDI0MDkyOS4wIKXMDSoASAFQAw%3D%3D"
            />
            <Hover2
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmOaiI819XDVokw6WoJ5wmBtWaAftJ4l-3BQ&s"
            title="Commercial Street"
            locateUrl="https://www.google.com/maps/place/Commercial+Street,+Tasker+Town,+Shivaji+Nagar,+Bengaluru,+Karnataka+560001/@12.9822268,77.6057874,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae1689d24ec16d:0xb95d15d2169a107d!8m2!3d12.9822268!4d77.6083677!16s%2Fg%2F11bxfz11gp?entry=ttu&g_ep=EgoyMDI0MDkyOS4wIKXMDSoASAFQAw%3D%3D"
            />
            <Hover2
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuL8OgwPsyywo_QzPDJTsh_TZ375c_qq4nfg&s"
            title="Forum Mall"
            locateUrl="https://www.google.com/maps/place/Forum+South+Bengaluru/@12.888352,77.4870961,13z/data=!4m10!1m2!2m1!1sforum+mall+bangalore!3m6!1s0x3bae151f1d485609:0x128233fc8d0b7aa4!8m2!3d12.888352!4d77.5633138!15sChRmb3J1bSBtYWxsIGJhbmdhbG9yZVoWIhRmb3J1bSBtYWxsIGJhbmdhbG9yZZIBD3Nob3BwaW5nX2NlbnRlcuABAA!16s%2Fg%2F11jt7sdqjk?entry=ttu&g_ep=EgoyMDI0MDkyOS4wIKXMDSoASAFQAw%3D%3D"
            />
            <Hover2
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGZ1iqtbWzhuwQU6O_7mm8GOFrPORCZY--8Q&s"
            title="Mysore Mall of Mysore"
            locateUrl="https://www.google.com/maps/place/Mall+Of+Mysore/@12.2975437,76.6618085,17z/data=!3m1!4b1!4m6!3m5!1s0x3baf7018a81e0e5d:0x5b736aafd8221b5d!8m2!3d12.2975437!4d76.6643888!16s%2Fm%2F0j7kn52?entry=ttu&g_ep=EgoyMDI0MDkyOS4wIKXMDSoASAFQAw%3D%3D"
            />
        </div>
        <h1 className='sideheadings'>Historical Significance</h1>
        <div className='Historical'>
            <Hover1
            imageSrc="https://beyonder.travel/wp-content/uploads/2020/05/Stone-Chariot-Vittala-Temple-Hampi.jpg"
            title="Hampi"
            location="The ruins of Hampi, a UNESCO World Heritage site, showcase the grandeur of the Vijayanagara Empire."
            />
            <Hover1
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNjBugu9GLapQkwqRl5cJS8TOKxo6I6QKBsA&s"
            title="Mysore Palace"
            location="A royal palace displaying Indo-Saracenic architecture, once the residence of the Wodeyar dynasty."
            />
            <Hover1
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq1WhmJbkMdpU65ikoJ90HrAOwmDm5E8Hm_A&s"
            title="Gol Gumbaz"
            location="The mausoleum of Sultan Mohammed Adil Shah, known for its massive dome and architectural brilliance."
            />
            <Hover1
            imageSrc="https://mapacademy.io/wp-content/uploads/2022/09/badami-cave-1-1l-highres-scaled.jpg"
            title="Badami Caves"
            location="Ancient rock-cut temples from the Chalukya dynasty, featuring intricate carvings and sculptures."
            />
        </div>
        <h1 className='sideheadings'>Travel Tips</h1>
        <div className='Historical'>
            <Hover1
            imageSrc="https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2024/06/28120553/travel-abroad-tips-1600x900.jpeg"
            title = "Best Time to Visit"
            location="Visit Karnataka between October and March for pleasant weather and clear skies."
            />
            <Hover1
            imageSrc="https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2024/06/28120553/travel-abroad-tips-1600x900.jpeg"
            title = "Pack for Varied Terrain"
            location="Pack both light clothes for the plains and warm layers for hill stations like Coorg and Chikmagalur."
            />
            <Hover1
            imageSrc="https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2024/06/28120553/travel-abroad-tips-1600x900.jpeg"
            title = "Explore Local Cuisine"
            location="Don't miss Karnataka’s local dishes like Bisi Bele Bath, Mysore Pak, and Mangalore’s seafood."
            />
            <Hover1
            imageSrc="https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2024/06/28120553/travel-abroad-tips-1600x900.jpeg"
            title = "Respect Religious Sites"
            location="Dress modestly and follow local customs when visiting temples and religious sites."
            />
        </div>
    </div>
)
}
export default Karnataka;