import Hover from  '../hover/Hover'
import Hover1 from  '../hover/Hover1'
import Hover2 from  '../hover/Hover2'
import Hover3 from '../hover/Hover3'
import '../states/State.css'
function Punjab()
{
    return(
        <div>
            <a href='https://punjabtourism.punjab.gov.in/'><h1 className='heading'>Punjab</h1></a>
            <h2 className='capital'>Capital: Chandigarh</h2>
            <h1 className='sideheadings'>Places To Visit</h1>
            <div className='Places'>
                <Hover
                imageSrc="https://content.jdmagicbox.com/comp/amritsar/20/0183p183std51020/catalogue/golden-temple-amritsar-gpo-amritsar-tourist-attraction-8ty1txnuy7-250.jpg"
                title="Raja Sansi"
                location="Amritsar"
                bookUrl="https://www.trivago.in/en-IN/lm/hotels-amritsar-india?search=200-74040;dr-20240907-20240908"
                locateUrl= "https://www.google.com/maps/place/Raja+Sansi,+Punjab+143101/@31.7152049,74.7773428,14z/data=!3m1!4b1!4m6!3m5!1s0x39196612b9935505:0x668f8e48c0609eef!8m2!3d31.7136189!4d74.7980705!16zL20vMGY2Mmtz?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
                <Hover
                imageSrc="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/0b/4b/5e/gurdwara-dukh-nivaran.jpg?w=500&h=400&s=1"
                title="Patiala"
                location="Patiala"
                bookUrl="https://www.trivago.in/en-IN/lm/hotels-patiala-india?search=200-420714;dr-20240907-20240908"
                locateUrl= "https://www.google.com/maps/place/Patiala,+Punjab/@30.3466292,76.3264816,12z/data=!3m1!4b1!4m6!3m5!1s0x391028935a3313df:0xd5bc56ad3b90bc7f!8m2!3d30.3397809!4d76.3868797!16zL20vMDE4Zzgz?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
                <Hover
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjgNShnxP-LaX0IjTmqfb-vD7oM4t-VpvPYg&s"
                title="Maharaja Ranjit Singh Museum"
                location="Lahore"
                bookUrl="https://www.trivago.in/en-IN/lm/hotels-lahore-pakistan?search=200-66423;dr-20240907-20240908"
                locateUrl="https://www.google.com/maps/place/Maharaja+Ranjit+Singh+War+Museum/@30.3399542,75.0867693,8z/data=!4m10!1m2!2m1!1sMaharaja+Ranjit+Singh+Museum!3m6!1s0x39101bc52205c1e1:0xd4883d3bbc29c209!8m2!3d30.9568132!4d75.8234702!15sChxNYWhhcmFqYSBSYW5qaXQgU2luZ2ggTXVzZXVtWh4iHG1haGFyYWphIHJhbmppdCBzaW5naCBtdXNldW2SAQp3YXJfbXVzZXVt4AEA!16s%2Fg%2F1q6j936lb?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
                <Hover
                imageSrc="https://c8.alamy.com/comp/ET0N43/anandpur-sahib-gurudwara-during-hola-mohalla-festival-in-rupnagar-ET0N43.jpg"
                title="Anandpur Sahib"
                location="Rupnagar"
                bookUrl="https://www.trivago.in/en-IN/lm/hotels-chandigarh-india?search=200-64988;dr-20240907-20240908"
                locateUrl="https://www.google.com/maps/place/Anandpur+Sahib,+Punjab/@31.2338564,76.4962431,15z/data=!3m1!4b1!4m6!3m5!1s0x39054af92bfa319f:0xf357bfe53f3fcde!8m2!3d31.2355318!4d76.5012734!16zL20vMDh6MjAw?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
            </div>
            <h1 className='sideheadings'>Culture and Tradition</h1>
            <div className='CultureTradition'>
                <Hover3
                imageSrc="https://thumbs.dreamstime.com/z/bhangra-dancers-national-cloth-vector-illustration-isolated-white-men-dressed-silk-shirt-turban-loose-loincloth-tied-90354227.jpg"
                title="Bhangra"
                location="A lively and energetic folk dance performed to celebrate the harvest season and other joyous occasions."
                locateUrl='https://www.youtube.com/watch?v=vD-LFksC1Nc&t=51s'
                />
                <Hover1
                imageSrc="https://thumbs.dreamstime.com/z/punjabi-wedding-couple-traditional-costume-punjab-india-easy-to-edit-vector-illustration-punjabi-wedding-couple-108357275.jpg"
                title="Salwar kameez and Sherwani"
                location="Women wear colorful salwar kameez with dupattas, while men wear kurta-pajamas or sherwanis."
                />
                <Hover1
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdKPDGR7dqPaUdl4NviHi15bJ5CKvO9_JrMg&s"
                title="Lohri"
                location="A popular festival celebrating the harvest, marked by bonfires, singing, dancing, and festive foods."
                />
                <Hover1
                imageSrc="https://punjabtourismguide.files.wordpress.com/2015/04/d8.jpg?w=1100"
                title="Punjabi Folk Music"
                location="Features traditional instruments like the dhol and tumbi, with music reflecting Punjab's vibrant culture."
                />
            </div>
            <h1 className='sideheadings'>Cuisine</h1>
            <div className='Cuisine'>
                <Hover1
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-b7z0LnhOye3QE12C2mUn_bSwgIRoOPWaCg&s"
                title="Butter Chicken"
                location="A rich and creamy chicken curry with a buttery tomato-based sauce, often enjoyed with naan or rice."
                />
                <Hover1
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfrJZlPl2d7sN9qHBCGLEy4FR9TXpWovsxVA&s"
                title="Sarson da Saag"
                location="A flavorful spinach dish cooked with mustard greens and spices, typically served with makki di roti (cornbread)."
                />
                <Hover1
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMZdyvHhc-DKFkr-KcVUo2vzj1zKOPg7B8GA&s"
                title="Chole Bhature"
                location="Spicy chickpea curry paired with deep-fried bread, a popular combination for a hearty meal."
                />
                <Hover1
                imageSrc="https://static.toiimg.com/thumb/62376759.cms?width=1200&height=900"
                title="Amritsari Kulcha"
                location="Stuffed bread baked in a tandoor, often filled with spiced potatoes or paneer, and enjoyed with pickles and yogurt."
                />
            </div>
            <h1 className='sideheadings'>Wild Life and Nature</h1>
            <div className='WildLife'>
                <Hover2
                imageSrc="https://lakesofindia.com/wp-content/uploads/2020/11/image-11.png"
                title="Harike Wetland"
                locateUrl ="https://www.google.com/maps/place/Harike+Wetland/@31.1699991,75.1896788,15z/data=!3m1!4b1!4m6!3m5!1s0x391a3d00b4e8acef:0xfec60bfa07022be4!8m2!3d31.17!4d75.2!16s%2Fm%2F04yhgd2?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
                <Hover2
                imageSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Ropar_Wetland_Credit_To_Rudhrah_Gourav.jpg/220px-Ropar_Wetland_Credit_To_Rudhrah_Gourav.jpg"
                title="Ropar Wetland"
                locateUrl="https://www.google.com/maps/place/Ropar+Wetland/@31.0199991,76.4896788,15z/data=!3m1!4b1!4m6!3m5!1s0x39055377ab8355a7:0x159efb87f66cb2!8m2!3d31.02!4d76.5!16s%2Fm%2F04yd0_c?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
                <Hover2
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuAPxbjSTiKjppbd5xbyACOWo3yjqljX9Png&s"
                title="Keshopur-Miani Wildlife Sanctuary"
                locateUrl= "https://www.google.com/maps/search/Keshopur-Miani+Wildlife+Sanctuary/@32.0874333,75.4048302,18z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
                <Hover2
                imageSrc="https://next57.com/wp-content/uploads/2024/06/b8f7e3efd3386de8d1cfb6c73af2f1e2.jpg"
                title="Sukhna Lake"
                locateUrl="https://www.google.com/maps/place/Sukhna+Lake/@30.7420751,76.8162969,16z/data=!3m1!4b1!4m6!3m5!1s0x390fed34138d9147:0x8a7a0db7c410d5a2!8m2!3d30.7421379!4d76.8187557!16zL20vMDd6ZmM3?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
            </div>
            <h1 className='sideheadings'>Shopping Destinations</h1>
            <div className='Shopping'>
                <Hover2
                imageSrc="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/81/80/07/elante-mall.jpg?w=1200&h=-1&s=1"
                title="Elante Mall"
                locateUrl="https://www.google.com/maps/place/Elante+Mall,+Industrial+Area+Phase+I,+Chandigarh,+160002/@30.7061228,76.7983762,17z/data=!3m1!4b1!4m6!3m5!1s0x390fece98c02452b:0xf3c99c507c9226eb!8m2!3d30.7061228!4d76.8009565!16s%2Fm%2F0115k6tv?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
                <Hover2
                imageSrc="https://content.jdmagicbox.com/comp/ludhiana/j9/0161px161.x161.220920231922.q3j9/catalogue/mbd-neopolis-mall-ludhiana-malls-68fgschsz7.jpg"
                title="MBD Neopolis Mall"
                locateUrl="https://www.google.com/maps/place/MBD+Neopolis+Mall+Ludhiana/@31.101028,75.517779,11z/data=!3m1!5s0x391a810a9db42e4b:0xfc2413143bfbdee2!4m10!1m2!2m1!1sMBD+Neopolis+Mall!3m6!1s0x391a81f72863a52d:0xbec4262ba16b3db8!8m2!3d30.8828858!4d75.7813352!15sChFNQkQgTmVvcG9saXMgTWFsbFoTIhFtYmQgbmVvcG9saXMgbWFsbJIBD3Nob3BwaW5nX2NlbnRlcuABAA!16s%2Fg%2F11ff1q80l_?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
                <Hover2
                imageSrc="https://im.hunt.in/cg/ludhiana/City-Guide/ghumar-Mandi.jpg"
                title="Ghumar Mandi Market "
                locateUrl="https://www.google.com/maps/place/Ghumar+Mandi+Market/@30.9065547,75.8312118,17z/data=!3m1!4b1!4m6!3m5!1s0x391a836b9cf4af8d:0x489f9b04a274d0e6!8m2!3d30.9065547!4d75.8337921!16s%2Fg%2F11s96cw1kb?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
                <Hover2
                imageSrc="https://static-blog.treebo.com/wp-content/uploads/2023/01/Nexus-Mall_www.scai_.in_-1024x675.jpg"
                title="City Centre Mall"
                locateUrl="https://www.google.com/maps/place/City+Centre,+Amritsar,+Punjab/@31.6265219,74.880555,17z/data=!3m1!4b1!4m10!1m2!2m1!1sCity+Centre+Mall+-+Amritsar!3m6!1s0x39197cad83d90403:0xf74f9026ffebfb3b!8m2!3d31.6264053!4d74.8854335!15sChtDaXR5IENlbnRyZSBNYWxsIC0gQW1yaXRzYXKSAQxzdWJsb2NhbGl0eTHgAQA!16s%2Fg%2F1jky3yggl?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
            </div>
            <h1 className='sideheadings'>Historical Significance</h1>
            <div className='Historical'>
                <Hover1
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8OUMQJsFB9gre1K4IHOJCVRlGBA_M9tAiPA&s"
                title="Golden Temple"
                location="The holiest shrine in Sikhism, known for its stunning gold-plated architecture and spiritual significance."
                />
                <Hover1
                imageSrc="https://media.istockphoto.com/id/1047680658/photo/jallianwala-bagh-memorial.jpg?s=612x612&w=0&k=20&c=yBu82odMSZg1Cms4mX5T_NWFUikUqdZBSS14Ex3mQJ4="
                title="Jallianwala Bagh"
                location="A memorial park in Amritsar commemorating the massacre of Indian civilians by British troops in 1919."
                />
                <Hover1
                imageSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Wagah_border_ceremony2.jpg/1200px-Wagah_border_ceremony2.jpg"
                title="Wagah Border"
                location="The site of the daily flag-lowering ceremony between India and Pakistan, symbolizing the historical partition and ongoing diplomatic relations."
                />
                <Hover1
                imageSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Quila-Mubarak-complex-Bhatinda-Bhatinda-Punjab.jpg/220px-Quila-Mubarak-complex-Bhatinda-Bhatinda-Punjab.jpg"
                title="Qila Mubarak"
                location="A historical fort in Patiala, reflecting the architectural grandeur of the Patiala dynasty."
                />
            </div>
            <h1 className='sideheadings'>Travel Tips</h1>
            <div className='Historical'>
                <Hover1
                imageSrc="https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2024/06/28120553/travel-abroad-tips-1600x900.jpeg"
                title = "Visit During Festivals"
                location="Time your visit around festivals like Baisakhi or Lohri for a vibrant experience."
                />
                <Hover1
                imageSrc="https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2024/06/28120553/travel-abroad-tips-1600x900.jpeg"
                title = "Dress Modestly"
                location="While Punjab is relatively liberal, it's respectful to dress modestly, especially in religious sites."
                />
                <Hover1
                imageSrc="https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2024/06/28120553/travel-abroad-tips-1600x900.jpeg"
                title = "Weather Preparation"
                location="Plan your visit between October and March for pleasant weather."
                />
                <Hover1
                imageSrc="https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2024/06/28120553/travel-abroad-tips-1600x900.jpeg"
                title = "Respect Traditions"
                location="Be mindful of local customs and practices, particularly in rural and religious settings."
                />
            </div>
        </div>
    )
}
export default Punjab;
