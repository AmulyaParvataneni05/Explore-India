import Hover from  '../hover/Hover'
import Hover1 from  '../hover/Hover1'
import Hover2 from  '../hover/Hover2'
import Hover3 from '../hover/Hover3'
import '../states/State.css'
function HimachalPradesh() {
  return(
    <div>
        <a href='https://himachaltourism.gov.in/'><h1 className='heading'>Himachal Pradesh</h1></a>
        <h2 className='capital'>Summer Capital: Shimla</h2>
        <h2 className='capital'>Winter Capital: Dharamshala</h2>
        <h1 className='sideheadings'>Places To Visit</h1>
        <div className='Places'>
            <Hover
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUD870etI80GlU8zPV-lirrIIIdlepeyOj6w&s"
            title="Shimla Ridge"
            location="Shimla"
            bookUrl="https://www.trivago.in/en-IN/lm/hotels-shimla-india?search=200-64971;dr-20241008-20241009"
            locateUrl= "https://www.google.com/maps/place/The+Ridge/@31.104722,77.1729413,18z/data=!3m1!4b1!4m6!3m5!1s0x39057893779e2ddf:0x426141fd83302704!8m2!3d31.1048001!4d77.1746678!16zL20vMGQxaGh4?entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D"
            />
            <Hover
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPIbnIXVsPGKfxLM3WmTd0sLjErQdVM-61Dg&s"
            title="Manali"
            location="Manali"
            bookUrl="https://www.trivago.in/en-IN/lm/hotels-manali-india?search=200-136801;dr-20241008-20241009"
            locateUrl= "https://www.google.com/maps/place/Manali,+Himachal+Pradesh/@32.2394704,77.1664773,14z/data=!3m1!4b1!4m6!3m5!1s0x39048708163fd03f:0x8129a80ebe5076cd!8m2!3d32.2431872!4d77.1891761!16zL20vMDQ2eDR4?entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D"
            />
            <Hover
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGtmuBj_drkm3bISM7oJXSX8Ya2aA17pDTRA&s"
            title="Rohtang Pass"
            location="Manali"
            bookUrl="https://www.trivago.in/en-IN/lm/hotels-manali-india?search=200-136801;dr-20241008-20241009"
            locateUrl="https://www.google.com/maps/place/Rohtang+La/@32.3717249,77.2442562,17z/data=!3m1!4b1!4m6!3m5!1s0x39047ef0b27a15ad:0xbfdd7e65efefc66b!8m2!3d32.3716426!4d77.2466221!16zL20vMDNsX2Jo?entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D"
            />
            <Hover
            imageSrc="https://upload.wikimedia.org/wikipedia/commons/a/a6/Dharamshala_03_%28Cropped%29.jpg"
            title="Dharamshala"
            location="Dharamshala"
            bookUrl="https://www.trivago.in/en-IN/lm/hotels-dharamsala-india?search=200-154581;dr-20241008-20241009"
            locateUrl="https://www.google.com/maps/place/Dharamshala,+Himachal+Pradesh/@32.2167781,76.3088441,15z/data=!3m1!4b1!4m6!3m5!1s0x391b50df65bd7311:0x3e08bdb100c6dc10!8m2!3d32.219042!4d76.3234037!16s%2Fm%2F0j65lnw?entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D"
            />
        </div>
        <h1 className='sideheadings'>Culture and Tradition</h1>
        <div className='CultureTradition'>
            <Hover3
            imageSrc="https://upload.wikimedia.org/wikipedia/commons/0/0b/Kinnauri_Nati_dance.jpg"
            title="Nati"
            location="A slow, graceful folk dance performed during festivals and weddings, famous in Kullu."
            locateUrl='https://www.youtube.com/watch?v=oZ7cpqSxs3c'
            />
            <Hover1
            imageSrc="https://www.namasteindiatrip.com/wp-content/uploads/2020/05/Himachal-Pradesh-Traditional-Dress-for-Couple.jpg"
            title="Chola-Dora and Reshta"
            location="Men wear Chola-Dora and Topi, while women wear Reshta and colorful Pattoo shawls."
            />
            <Hover1
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-gz8ahVkOslAyz2ifebuEIH92z97YlKDDsA&s"
            title="Kullu Dussehra"
            location="A grand festival in Kullu, marked by processions and traditional dance performances."
            />
            <Hover1
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH-3uR_777r73HbpVZtGLjYw2rLdozmtHF4Q&s"
            title="Himachali Folk Songs"
            location="Melodious tunes often accompanied by instruments like Rumal and Dhol, focusing on nature and devotion."
            />
        </div>
        <h1 className='sideheadings'>Cuisine</h1>
        <div className='Cuisine'>
            <Hover1
            imageSrc="https://assets.cntraveller.in/photos/62283ed3652e69e3c9cd5312/master/w_1600%2Cc_limit/dham%25201.jpeg"
            title="Dham"
            location="A traditional festive meal featuring rice, dal, rajma, and curd, often served on leaves."
            />
            <Hover1
            imageSrc="https://images.hindi.news18.com/ibnkhabar/uploads/2021/09/Siddu-16319545764x3.jpg"
            title="Siddu"
            location="Steamed wheat buns stuffed with mashed potatoes or poppy seeds."
            />
            <Hover1
            imageSrc="https://myspicetrunk.com/wp-content/uploads/2020/09/WhatsApp-Image-2020-09-16-at-9.21.52-PM-e1607456195436.jpeg?v=1613928923"
            title="Chana Madra"
            location="A chickpea-based curry cooked with yogurt and spices, popular in Chamba."
            />
            <Hover1
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT09fV8oohHlJQxHxSi1BTJfNe9fESM1JZDXA&s"
            title="Babru"
            location="A Himachali version of stuffed puris, usually filled with black gram paste."
            />
        </div>
        <h1 className='sideheadings'>Wild Life and Nature</h1>
        <div className='WildLife'>
            <Hover2
            imageSrc="https://i0.wp.com/stampedmoments.com/wp-content/uploads/2023/05/great-himalayan-national-park-2.jpg?fit=1440%2C1080&ssl=1"
            title="Great Himalayan National Park"
            locateUrl ="https://www.google.com/maps/place/Great+Himalayan+National+Park/@31.7985414,77.5134331,17z/data=!3m1!4b1!4m6!3m5!1s0x3904345539963725:0x3930505b5e390442!8m2!3d31.7985414!4d77.5160134!16zL20vMDhreWY2?entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D"
            />
            <Hover2
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSgaTNaz6wEX3Au4qbZzuk_lwoTJwCENTyZw&s"
            title="Pin Valley National Park"
            locateUrl="https://www.google.com/maps/place/Pin+Valley+National+Park/@31.999504,77.8798638,17z/data=!3m1!4b1!4m6!3m5!1s0x390427d2c098beb9:0x96cb61be2e4e0c1b!8m2!3d31.999504!4d77.8824441!16zL20vMDhfdDFs?entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D"
            />
            <Hover2
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNm4eDIEoh9JdCw8sXh9gCtfdYKQzzqiNL8Q&s"
            title="Khirganga National Park"
            locateUrl= "https://www.google.com/maps/place/The+Khirganga+National+Park+-+Himachal+Pradesh,+India/@32.0054278,77.6630069,17z/data=!3m1!4b1!4m6!3m5!1s0x39043be8a45ec667:0xb478b0f2fdf52a5c!8m2!3d32.0054278!4d77.6655872!16s%2Fg%2F11bw8f0zgv?entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D"
            />
            <Hover2
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH4k39I2InCNzX3cJMpwLu-G1bGPMODxmrbQ&s"
            title="Renuka Wildlife Sanctuary"
            locateUrl="https://www.google.com/maps/place/Renuka+Wildlife+Sanctuary/@30.609567,77.4559237,17z/data=!3m1!4b1!4m6!3m5!1s0x390f13590121e5e1:0x3ddaf99018141351!8m2!3d30.609567!4d77.458504!16s%2Fg%2F11nn04kd2z?entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D"
            />
        </div>
        <h1 className='sideheadings'>Shopping Destinations</h1>
        <div className='Shopping'>
            <Hover2
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdXbZCOElZve0agfXWJU_w7Gb-EjX8SDpsNg&s"
            title="Lakkar Bazaar"
            locateUrl="https://www.google.com/maps/place/Lakkar+Bazar,+Shimla,+Himachal+Pradesh+171001/@31.1063074,77.1736914,16z/data=!3m1!4b1!4m6!3m5!1s0x39057893c9c297e5:0x979d1be2a7901d31!8m2!3d31.1058233!4d77.1787114!16zL20vMGNwcTlq?entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D"
            />
            <Hover2
            imageSrc="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/32/f7/12/tibetan-market.jpg?w=1200&h=-1&s=1"
            title="Tibetan Market"
            locateUrl="https://www.google.com/maps/place/Tibetan+Refugee+Market/@31.1063072,77.1736699,16z/data=!4m10!1m2!2m1!1sTibetan+Market!3m6!1s0x3905789338e797ff:0x51af88a69c92a9a1!8m2!3d31.102474!4d77.1763399!15sCg5UaWJldGFuIE1hcmtldFoQIg50aWJldGFuIG1hcmtldJIBBm1hcmtldOABAA!16s%2Fg%2F11g8t_94v5?entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D"
            />
            <Hover2
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkpxtBzb_atu1QO1FAVA1ND3FbPn5b2JxZaQ&s"
            title="Maximus Mall"
            locateUrl="https://www.google.com/maps/place/Maximus+Mall,+Dharamshala/@32.2142398,76.3145364,17z/data=!3m1!4b1!4m6!3m5!1s0x391b50e1dadf1659:0x91a99f2d1e73e2a!8m2!3d32.2142398!4d76.3171167!16s%2Fg%2F11cfclzxn?entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D"
            />
            <Hover2
            imageSrc="https://c8.alamy.com/comp/KRBRMX/lower-bazaar-market-in-shimla-india-KRBRMX.jpg"
            title="Lower Bazaar"
            locateUrl="https://www.google.com/maps/place/Lower+Bazaar+Dhameta+Rd,+Dhameta,+Himachal+Pradesh+176025/@32.0425636,75.9594439,17z/data=!3m1!4b1!4m10!1m2!2m1!1sLower+Bazaar!3m6!1s0x391b6e947f75f9f5:0xef6c5932c3a0032d!8m2!3d32.0425637!4d75.9643094!15sCgxMb3dlciBCYXphYXKSAQVyb3V0ZeABAA!16s%2Fg%2F11c0rlztsg?entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D"
            />
        </div>
        <h1 className='sideheadings'>Historical Significance</h1>
        <div className='Historical'>
            <Hover1
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqs_ewZ2AamfcxUq7F2Egc-Im33aFeuWS-3Q&s"
            title="McLeod Ganj"
            location="Famous as the residence of the Dalai Lama and a center of Tibetan culture."
            />
            <Hover1
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJroUzxoC8EilztEDHDDw2Y8BHlibKO9DxSQ&s"
            title="Kangra Fort"
            location="One of India’s oldest forts, with roots in the Trigarta Kingdom mentioned in the Mahabharata."
            />
            <Hover1
            imageSrc="https://upload.wikimedia.org/wikipedia/commons/6/6e/Rashtrapati_Niwas%2C_Shimla.jpg"
            title="Rashtrapati Niwas"
            location="A British-era mansion in Shimla, used as the summer residence of the Indian President."
            />
            <Hover1
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_nq1RvhdSnMT8zmOtEcImo6FZuPoowgbGCw&s"
            title="Chamba Town"
            location="An ancient town with temples and palaces dating back over a thousand years."
            />
        </div>
        <h1 className='sideheadings'>Travel Tips</h1>
        <div className='Historical'>
            <Hover1
            imageSrc="https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2024/06/28120553/travel-abroad-tips-1600x900.jpeg"
            title = "Best Time to Visit"
            location="Visit from March to June for trekking, or December to February for snow."
            />
            <Hover1
            imageSrc="https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2024/06/28120553/travel-abroad-tips-1600x900.jpeg"
            title = "Pack Warm Clothes"
            location="Even summer evenings can be chilly in the mountains."
            />
            <Hover1
            imageSrc="https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2024/06/28120553/travel-abroad-tips-1600x900.jpeg"
            title = "Road Conditions"
            location="Prepare for narrow, winding roads in the hilly areas."
            />
            <Hover1
            imageSrc="https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2024/06/28120553/travel-abroad-tips-1600x900.jpeg"
            title = "Book in Advance"
            location="Popular destinations like Shimla and Manali fill up quickly during peak season."
            />
        </div>
    </div>
)
}
export default HimachalPradesh;