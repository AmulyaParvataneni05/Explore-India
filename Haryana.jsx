import Hover from  '../hover/Hover'
import Hover1 from  '../hover/Hover1'
import Hover2 from  '../hover/Hover2'
import Hover3 from '../hover/Hover3'
import '../states/State.css'
function Haryana() {
  return(
    <div>
        <a href='https://haryanatourism.gov.in/'><h1 className='heading'>Haryana</h1></a>
        <h2 className='capital'>Capital: Chandigarh</h2>
        <h1 className='sideheadings'>Places To Visit</h1>
        <div className='Places'>
            <Hover
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAs4upMwxEUQOzpUUv-4fQVeCscWWc-mNwGg&s"
            title="Pinjore Gardens"
            location="Panchkula"
            bookUrl="https://www.trivago.in/en-IN/lm/hotels-panchkula-india?search=200-424238;dr-20241008-20241009"
            locateUrl= "https://www.google.com/maps/place/Yadavindra+Gardens,+Pinjore/@30.7940877,76.9121306,17z/data=!3m1!4b1!4m6!3m5!1s0x390f8de4809c1367:0x5c308e40a569876c!8m2!3d30.7940877!4d76.9147109!16zL20vMGN3Z3Nk?entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D"
            />
            <Hover
            imageSrc="https://static.toiimg.com/photo/68271442.cms"
            title="Feroz Shah’s Palace and Fort"
            location="Hisar"
            bookUrl="https://www.trivago.in/en-IN/lm/hotels-haryana-india?search=200-64934;dr-20241008-20241009"
            locateUrl= "https://www.google.com/maps/place/Firoz+Shah+Palace+Complex/@29.1666014,75.717997,17z/data=!3m1!4b1!4m6!3m5!1s0x391232d1f2803761:0x6bc95b333a5b7d36!8m2!3d29.1666014!4d75.7205773!16s%2Fm%2F0jwxjhf?entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D"
            />
            <Hover
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQORTLHniNxwtS4xfgFziI5G1-5Tcfb4ycQLA&s"
            title="Jyotisar"
            location="Kurukshetra"
            bookUrl="https://www.trivago.in/en-IN/lm/hotels-kurukshetra-india?search=200-424242;dr-20241008-20241009"
            locateUrl="https://www.google.com/maps/place/Jyotisar,+Josar,+Haryana+136119/@29.9622244,76.7646243,16z/data=!3m1!4b1!4m6!3m5!1s0x390e3925185ef7d3:0x68255f700d296a8!8m2!3d29.9615995!4d76.7697201!16zL20vMGZ2OXR2?entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D"
            />
            <Hover
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdVBcvKODrNcUniMbUPAhEdHFM2-1HKMgGuw&s"
            title="Tilyar Lake"
            location="Rohtak"
            bookUrl="https://www.trivago.in/en-IN/lm/hotels-rohtak-india?search=200-424244;dr-20241008-20241009"
            locateUrl="https://google.com/maps/place/Tilyar+Lake/@28.8813926,76.6341964,17z/data=!3m1!4b1!4m6!3m5!1s0x390d84d3f5616033:0x448dc8f765e1002c!8m2!3d28.8802386!4d76.6358562!16s%2Fm%2F047rj19?entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D"
            />
        </div>
        <h1 className='sideheadings'>Culture and Tradition</h1>
        <div className='CultureTradition'>
            <Hover3
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnkvFr4VhcW1NWrF4n1b7xDWh7yCSsMUK1-A&s"
            title="Ghoomar"
            location="A traditional folk dance performed by women during festivals and celebrations."
            locateUrl='https://www.youtube.com/watch?v=7jg_X01RMCQ'
            />
            <Hover1
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc0w4KE2yuPerJbgHvKIKVzoWIFjm106u7Xw&s"
            title="Dhoti-Kurta and Gagra Choli"
            location="Men wear Dhoti-Kurta and women adorn Ghagra-Choli, often accompanied by a dupatta."
            />
            <Hover1
            imageSrc="https://utsav.gov.in/public/uploads/event_cover_image/event_602/16595155611269959693.jpg"
            title="Lohri"
            location="A popular harvest festival celebrated with bonfires, dance, and Punjabi folk songs."
            />
            <Hover1
            imageSrc="https://aws-static.iicdelhi.in/styles/custom/s3/2023-08/12%20AUG.jpg?itok=BFXCP9Fg"
            title="Ragini"
            location="A genre of folk music featuring poetic verses and vibrant melodies in rural Haryana."
            />
        </div>
        <h1 className='sideheadings'>Cuisine</h1>
        <div className='Cuisine'>
            <Hover1
            imageSrc="https://smithakalluraya.com/wp-content/uploads/2021/04/pearl-millet-khichdi.jpg"
            title="Bajra Khichdi"
            location="A traditional porridge made from pearl millet and lentils."
            />
            <Hover1
            imageSrc="https://themagicsaucepan.com/wp-content/uploads/2018/04/20180405-Besan-masala-ki-roti-0953.jpg"
            title="Besan Masala Roti"
            location="A spiced chickpea flour flatbread, often eaten with butter or yogurt."
            />
            <Hover1
            imageSrc="https://www.archanaskitchen.com/images/archanaskitchen/1-Author/Nithya_Anantham/Hara_Chana_Masala_Recipe_400.jpg"
            title="Hara Dhania Cholia"
            location="Fresh green chickpeas cooked with spices and cilantro."
            />
            <Hover1
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYr2YKXxBYCUgE1sRgoVJhJYjQookUVTC1LA&s"
            title="Methi Gajar"
            location="A flavorful dish of fenugreek leaves and carrots cooked with spices."
            />
        </div>
        <h1 className='sideheadings'>Wild Life and Nature</h1>
        <div className='WildLife'>
            <Hover2
            imageSrc="https://upload.wikimedia.org/wikipedia/commons/5/58/Sultanpur_Bird_Sanctuary%2C_Gurgaon.jpg"
            title="Sultanpur National Park"
            locateUrl ="https://www.google.com/maps/place/Sultanpur+National+Park/@28.4612567,76.8877887,17z/data=!3m1!4b1!4m6!3m5!1s0x390d14485a1cd6e5:0xbf5526199036b949!8m2!3d28.4612567!4d76.890369!16zL20vMDhfcV9t?entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D"
            />
            <Hover2
            imageSrc="https://www.holidify.com/images/cmsuploads/compressed/Elephas_maximus_(Bandipur)_20181129125714.jpg"
            title="Kalesar National Park"
            locateUrl="https://www.google.com/maps/place/Kalesar+National+Park/@30.3574679,77.5708245,17z/data=!3m1!4b1!4m6!3m5!1s0x390f18d5e31a50b5:0xe17a1c8765910629!8m2!3d30.3574679!4d77.5734048!16zL20vMDhfdmJs?entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D"
            />
            <Hover2
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9T_AMtrQyix6rm_Mr5EVO7pp0N0ZLvJ6e8A&s"
            title="Bhindawas Wildlife Sanctuary"
            locateUrl= "https://www.google.com/maps/place/Bhindawas+Wildlife+Sanctuary/@28.5326392,76.5489274,17z/data=!4m10!1m2!2m1!1sBhindawas+Wildlife+Sanctuary!3m6!1s0x390d649faec60bcd:0x666a8f99635a24b!8m2!3d28.5328531!4d76.5513023!15sChxCaGluZGF3YXMgV2lsZGxpZmUgU2FuY3R1YXJ5kgENd2lsZGxpZmVfcGFya-ABAA!16s%2Fm%2F0108dmvj?entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D"
            />
            <Hover2
            imageSrc="https://www.holidify.com/images/cmsuploads/compressed/m1_20170821200241.PNG"
            title="Morni Hills"
            locateUrl="https://www.google.com/maps/place/Morni,+Haryana+134205/@30.6876383,77.0867917,18z/data=!3m1!4b1!4m6!3m5!1s0x390f99592e0f6a2f:0xcf7c223132be50ac!8m2!3d30.6872672!4d77.0877437!16zL20vMGdreTMw?entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D"
            />
        </div>
        <h1 className='sideheadings'>Shopping Destinations</h1>
        <div className='Shopping'>
            <Hover2
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6CulCIT29D9xyJryyX5DgN3UrUQw-xf2ysQ&s"
            title="Ambience Mall"
            locateUrl="https://www.google.com/maps/place/AMBIENCE+MALL,+GURUGRAM/@28.505504,77.0933757,17z/data=!3m2!4b1!5s0x390d194e9e7230ed:0x2ee084f3cee68204!4m6!3m5!1s0x390d1938456789c7:0x45a757aa37e73026!8m2!3d28.505504!4d77.095956!16s%2Fg%2F11c1ndmxzt?entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D"
            />
            <Hover2
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRze_oR49_03KWcsPtXuMF5EPgIBVZ959Ntlg&s"
            title="Sector 17 Market"
            locateUrl="https://www.google.com/maps/place/Sector+17+Market/@30.7396872,76.7800648,17z/data=!4m10!1m2!2m1!1sSector+17+Market!3m6!1s0x390fed0a5368ec41:0x3ec290bb40ea49d4!8m2!3d30.739471!4d76.7825333!15sChBTZWN0b3IgMTcgTWFya2V0WhIiEHNlY3RvciAxNyBtYXJrZXSSAQZtYXJrZXTgAQA!16s%2Fg%2F11c31xm993?entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D"
            />
            <Hover2
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGLsIRtLUY9gSBymEmNOS6aYj978oLSuaBjA&s"
            title="MGF Metropolitan Mall"
            locateUrl="https://www.google.com/maps/place/MGF+Metropolitan+Mall/@28.4797399,77.0785988,17z/data=!4m10!1m2!2m1!1sMGF+Metropolitan+Mall!3m6!1s0x390d19114511ba3f:0x37594f46913176fb!8m2!3d28.4809085!4d77.0802798!15sChVNR0YgTWV0cm9wb2xpdGFuIE1hbGwiA4gBAVoXIhVtZ2YgbWV0cm9wb2xpdGFuIG1hbGySAQ9zaG9wcGluZ19jZW50ZXLgAQA!16s%2Fg%2F11h18kmf_j?entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D"
            />
            <Hover2
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcNswZBWzjpV77WnccThkfjBNjpGnAetNDeg&s"
            title="Sadar Bazaar"
            locateUrl="https://www.google.com/maps/place/Sadar+Bazar,+Roshan+Pura,+Gurugram,+Haryana+122022/@28.4606369,77.0269493,17z/data=!3m1!4b1!4m6!3m5!1s0x390d1836a755a33d:0xce2aec775002bd92!8m2!3d28.4612568!4d77.0298192!16s%2Fg%2F1ptwc5vzp?entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D"
            />
        </div>
        <h1 className='sideheadings'>Historical Significance</h1>
        <div className='Historical'>
            <Hover1
            imageSrc="https://upload.wikimedia.org/wikipedia/commons/6/69/Hitopadesha.jpg"
            title="Kurukshetra"
            location="The site of the epic Mahabharata battle and a prominent pilgrimage destination."
            />
            <Hover1
            imageSrc="https://www.seawatersports.com/images/places/panipat.png"
            title="Panipat"
            location="Known for three major historical battles that shaped Indian history."
            />
            <Hover1
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmtJ6U0h8gX9Pq7dOJ8zb8ctHEqd7tU5yYaA&s"
            title="Brahma Sarovar"
            location="An ancient water tank in Kurukshetra, believed to have been created by Lord Brahma."
            />
            <Hover1
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShXvr2WeYMoH0kZv3-FeCsCoDJWeu3op1ofQ&s"
            title="Feroz Shah's Palace"
            location="Built by Feroz Shah Tughlaq in Hisar, showcasing Indo-Islamic architecture."
            />
        </div>
        <h1 className='sideheadings'>Travel Tips</h1>
        <div className='Historical'>
            <Hover1
            imageSrc="https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2024/06/28120553/travel-abroad-tips-1600x900.jpeg"
            title = "Best Time to Visit"
            location="October to March is ideal for pleasant weather."
            />
            <Hover1
            imageSrc="https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2024/06/28120553/travel-abroad-tips-1600x900.jpeg"
            title = "Carry Cash"
            location="Smaller towns may not have widespread card acceptance."
            />
            <Hover1
            imageSrc="https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2024/06/28120553/travel-abroad-tips-1600x900.jpeg"
            title = "Respect Local Culture"
            location="Dress modestly and follow local customs, especially in rural areas."
            />
            <Hover1
            imageSrc="https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2024/06/28120553/travel-abroad-tips-1600x900.jpeg"
            title = "Stay Hydrated"
            location="The weather can get quite hot in summers, so carry water."
            />
        </div>
    </div>
)
}
export default Haryana;