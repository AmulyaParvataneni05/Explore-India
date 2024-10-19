import Hover from  '../hover/Hover'
import Hover1 from  '../hover/Hover1'
import Hover2 from  '../hover/Hover2'
import Hover3 from '../hover/Hover3'
import '../states/State.css'
function UttarPradesh()
{
    return(
        <div>
            <a href='https://uptourism.gov.in/en'><h1 className='heading'>Uttar Pradesh</h1></a>
            <h2 className='capital'>Capital: Lucknow</h2>
            <h1 className='sideheadings'>Places To Visit</h1>
            <div className='Places'>
                <Hover
                imageSrc="https://miro.medium.com/v2/resize:fit:1400/1*VhDpUbuZQC4tLoP9qQ6W5A.jpeg"
                title="Taj Mahal"
                location="Agra"
                bookUrl="https://www.trivago.in/en-IN/lm/hotels-agra-india?search=200-73666;dr-20240907-20240908"
                locateUrl="https://www.google.com/maps/place/Taj+Mahal/@27.1751448,78.0395619,17z/data=!3m1!4b1!4m6!3m5!1s0x39747121d702ff6d:0xdd2ae4803f767dde!8m2!3d27.1751448!4d78.0421422!16zL20vMGw4Y2I?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
                <Hover
                imageSrc="https://static.toiimg.com/photo/msid-107570888,width-96,height-65.cms"
                title="Varanasi Ghats"
                location="Varanasi"
                bookUrl="https://www.trivago.in/en-IN/lm/hotels-varanasi-india?search=200-73947;dr-20240907-20240908"
                locateUrl="https://www.google.com/maps/search/Varanasi+Ghats/@25.3073273,83.001421,14z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
                <Hover
                imageSrc="https://www.tripsavvy.com/thmb/nAutKnpCRkUPxY7awFfAzQEkz-k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-11277274181-f11cfdb1a6514121aa39eea112917faf.jpg"
                title="Sarnath"
                location="Sarnath"
                bookUrl="https://www.trivago.in/en-IN/lm/hotels-near-sarnath?search=500-4140174;dr-20240907-20240908"
                locateUrl="https://www.google.com/maps/place/Sarnath,+Varanasi,+Uttar+Pradesh+221007/@25.3729368,83.0145137,15z/data=!3m1!4b1!4m6!3m5!1s0x398e2ee870d6a12b:0xa1c385b2ea1fa974!8m2!3d25.3715564!4d83.0252136!16zL20vMDFneXN6?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
                <Hover
                imageSrc="https://upload.wikimedia.org/wikipedia/commons/f/ff/Kashi_Vishwanath.jpg"
                title="Kashi Vishwanath Temple"
                location="Varanasi"
                bookUrl="https://www.trivago.in/en-IN/lm/hotels-varanasi-india?search=200-73947;dr-20240907-20240908"
                locateUrl="https://www.google.com/maps/place/Shri+Kashi+Vishwanath+Temple/@25.2887407,82.9797435,14z/data=!4m10!1m2!2m1!1sKashi+Vishwanath+Temple!3m6!1s0x398e2e21ee940b17:0x48600e4fcdfb7b13!8m2!3d25.3108532!4d83.0106783!15sChdLYXNoaSBWaXNod2FuYXRoIFRlbXBsZVoZIhdrYXNoaSB2aXNod2FuYXRoIHRlbXBsZZIBDGhpbmR1X3RlbXBsZeABAA!16zL20vMDZrYzU0?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
            </div>
            <h1 className='sideheadings'>Culture and Tradition</h1>
            <div className='CultureTradition'>
                <Hover3
                imageSrc="https://www.hercircle.in/hcm/EngageImage/5F0D2024-9AB9-41B4-A03A-24D43C9A7E1A/D/21994541-FD18-4DD8-8A38-C4496950C719.jpg"
                title="Kathak"
                location="A classical dance form featuring intricate footwork and expressive gestures."
                locateUrl='https://www.youtube.com/watch?v=UBYqv21c0Yk&t=2s'
                />
                <Hover1
                imageSrc="https://b1663402.smushcdn.com/1663402/wp-content/uploads/2020/03/u24-2.jpg?lossy=2&strip=1&webp=1"
                title="Sarees and Sherwanis"
                location="Women wear sarees or salwar kameez, while men don dhotis or kurtas, often with jackets or sherwanis."
                />
                <Hover1
                imageSrc="https://people.com/thmb/rsb20cJKBW_qjM3lQyfaItOYHJ0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(614x449:616x451)/Holi-01-a63575dc03ed467f8922efe3992a4060.jpg"
                title="Holi"
                location="A vibrant festival of colors involving the throwing of colored powders and water."
                />
                <Hover1
                imageSrc="https://cdn.britannica.com/74/177574-050-CFF67F47/Sitar-musical-instrument.jpg"
                title="Thumri"
                location="A genre of traditional folk music performed with tabla and harmonium."
                />
            </div>
            <h1 className='sideheadings'>Cuisine</h1>
            <div className='Cuisine'>
                <Hover1
                imageSrc="https://images.herzindagi.info/image/2019/May/tunday-kabab.jpg"
                title="Tunday Kababi"
                location="Famous for its succulent, minced meat kebabs with a blend of spices."
                />
                <Hover1
                imageSrc="https://masalaandchai.com/wp-content/uploads/2021/10/Samosa-Chaat-with-Chai.jpg"
                title="Chaat"
                location="Popular street food including varieties like Pani Puri, Aloo Tikki, and Papri Chaat."
                />
                <Hover1
                imageSrc="https://www.enhanceyourpalate.com/wp-content/uploads/Khasta-Bedai-Urad-Dal-Stuffed-Crispy-Kachori.jpg"
                title="Kachori"
                location="Deep-fried pastries filled with spicy lentils or peas."
                />
                <Hover1
                imageSrc="https://m.media-amazon.com/images/I/51ZrpNzVg4L._AC_UF1000,1000_QL80_.jpg"
                title="Petha"
                location="A sweet dish made from ash gourd, often enjoyed as a dessert."
                /> 
            </div>
            <h1 className='sideheadings'>Wild Life and Nature</h1>
            <div className='WildLife'>
                <Hover2
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0zjr6_NxCWoydZ-vLsJSwM4NFqr3sTvVSTA&s"
                title="Dudhwa National Park"
                locateUrl ="https://www.google.com/maps/place/Dudhwa+National+Park/@28.4784876,80.5919652,13z/data=!4m10!1m2!2m1!1sdudhwa+national+park!3m6!1s0x39a1fad887d2be49:0x9a6ab5adf79bc8ca!8m2!3d28.4910831!4d80.6467335!15sChRkdWRod2EgbmF0aW9uYWwgcGFya1oWIhRkdWRod2EgbmF0aW9uYWwgcGFya5IBDW5hdGlvbmFsX3BhcmuaASNDaFpEU1VoTk1HOW5TMFZKUTBGblNVUTVkVGQ1ZGtaM0VBReABAA!16zL20vMDhfc2Zt?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
                <Hover2
                imageSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Devdari_Water_fall_in_Chandra_prabha.jpg/1200px-Devdari_Water_fall_in_Chandra_prabha.jpg"
                title="Chandraprabha Wildlife Sanctuary"
                locateUrl="https://www.google.com/maps/place/Chandraprabha+Wildlife+Sanctuary/@24.9397432,83.1646342,15z/data=!4m10!1m2!2m1!1sChandraprabha+Wildlife+Sanctuary!3m6!1s0x398e4356d40c74e3:0x53603c95494fbdce!8m2!3d24.9461876!4d83.1699932!15sCiBDaGFuZHJhcHJhYmhhIFdpbGRsaWZlIFNhbmN0dWFyeZIBBHBhcmvgAQA!16s%2Fg%2F11d_9gxnjg?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
                <Hover2
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ85lYPypV18-iskKaypJqb-n70WF6wFpHY6A&s"
                title="Sohelwa Wildlife Sanctuary"
                locateUrl="https://www.google.com/maps/place/Sohelwa+Wildlife+Sanctuary/@27.8003881,82.195521,15z/data=!3m1!4b1!4m6!3m5!1s0x399829f843984149:0xe5a26ee997f77729!8m2!3d27.8003885!4d82.2058208!16s%2Fg%2F11c1lk05h4?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
                <Hover2
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpqhfSTXSbhEiqkYUBacFviRHN0STD6WWypQ&s"
                title="Shaheed Chandra Shekhar Azad Bird Sanctuary"
                locateUrl="https://www.google.com/maps/place/Shaheed+Chandra+Shekhar+Azad+Bird+Sanctuary,+Nawabganj/@26.6191857,80.648255,17z/data=!3m1!4b1!4m6!3m5!1s0x399c0e475e973293:0x1a8b4dfd54eb2676!8m2!3d26.6191858!4d80.6531205!16s%2Fm%2F025_c65?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
            </div>
            <h1 className='sideheadings'>Shopping Destinations</h1>
            <div className='Shopping'>
                <Hover2
                imageSrc="https://media.istockphoto.com/id/488476322/pt/foto/templo-kalkaji-complexo-new-delhi-%C3%ADndia-cngltrv1109.jpg?s=612x612&w=0&k=20&c=wyTK23Zg5igxZVNv9Y1m-XuYWa0_MR8Y7KlS0EPkNUs="
                title="Kalkaji Market"
                locateUrl="https://www.google.com/maps/place/Kalkaji+Market/@28.5415968,77.2516742,17z/data=!4m10!1m2!2m1!1sKalkaji+Market,+Delhi!3m6!1s0x390ce3dbd90ccc0d:0x283597d977c0be63!8m2!3d28.5415968!4d77.2564378!15sChVLYWxrYWppIE1hcmtldCwgRGVsaGlaFiIUa2Fsa2FqaSBtYXJrZXQgZGVsaGmSAQZtYXJrZXTgAQA!16s%2Fg%2F11gf9q9tdm?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
                <Hover2
                imageSrc="https://static.toiimg.com/thumb/imgsize-23456,msid-77080477,width-600,resizemode-4/77080477.jpg"
                title="Phoenix Palassio"
                locateUrl="https://www.google.com/maps/place/Phoenix+Palassio/@26.8087777,81.0101304,17z/data=!3m1!4b1!4m6!3m5!1s0x399bfb177ba59213:0xfd12dad33afbc85d!8m2!3d26.8087777!4d81.0127107!16s%2Fg%2F11c2pnv_0c?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
                <Hover2
                imageSrc="https://content.jdmagicbox.com/comp/lucknow/18/0522p522std450018/catalogue/sahara-ganj-mall-hazratganj-lucknow-malls-9p9evw70zd.jpg"
                title="Sahara Ganj Mall"
                locateUrl="https://www.google.com/maps/place/Sahara+Ganj+Mall,+Lucknow/@26.8551675,80.9436779,17z/data=!3m2!4b1!5s0x399bfd0bb3871f29:0xc69c2db5b7f6042f!4m6!3m5!1s0x399bfd09f2c43d8f:0x855509b5af66b6a9!8m2!3d26.8551675!4d80.9462582!16s%2Fg%2F1tdh6v_3?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
                <Hover2
                imageSrc="https://www.walk2mall.com/wp-content/uploads/2017/09/TDI-Mall-Agra-UP.jpg"
                title="TDI Mall"
                locateUrl="https://www.google.com/maps/place/TDI+Mall/@28.9442099,76.0994095,8z/data=!3m1!5s0x390d03f68fe0242b:0xf3e03345f04cfa05!4m10!1m2!2m1!1sTDI+Mall!3m6!1s0x390d037230e1f379:0x8d225a5d29c1fc43!8m2!3d28.6508395!4d77.1206205!15sCghUREkgTWFsbFoKIgh0ZGkgbWFsbJIBD3Nob3BwaW5nX2NlbnRlcuABAA!16s%2Fg%2F1jkxtzg1_?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
            </div>
            <h1 className='sideheadings'>Historical Significance</h1>
            <div className='Historical'>
                <Hover1
                imageSrc="https://static.toiimg.com/photo/msid-107570888,width-96,height-65.cms"
                title="Varanasi"
                location="One of the oldest continuously inhabited cities in the world, known for its spiritual significance and numerous ghats on the Ganges River."
                />
                <Hover1
                imageSrc="https://www.fabhotels.com/blog/wp-content/uploads/2019/05/Agra-Fort_600.jpg"
                title="Agra Fort"
                location="A UNESCO World Heritage Site and a key Mughal architectural marvel that served as the main residence of the Mughal emperors."
                />
                <Hover1
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNgy54zN6W2fd_Hoj2CP3Z69TPylkBJRlSiw&s"
                title="Fatehpur Sikri"
                location="A former Mughal capital renowned for its well-preserved architecture and historical significance in the Mughal era."
                />
                <Hover1
                imageSrc="https://www.pilgrimagetour.in/blog/wp-content/uploads/2024/01/Ram-Janm-Bhumi-Ayodhya.jpg"
                title="Ayodhya"
                location="Believed to be the birthplace of Lord Rama and a significant site in Hindu mythology and history."
                />
            </div>
            <h1 className='sideheadings'>Travel Tips</h1>
            <div className='Historical'>
                <Hover1
                imageSrc="https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2024/06/28120553/travel-abroad-tips-1600x900.jpeg"
                title = "Weather"
                location="The state experiences extreme temperatures, so dress appropriately for the season."
                />
                <Hover1
                imageSrc="https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2024/06/28120553/travel-abroad-tips-1600x900.jpeg"
                title = "Transport"
                location="Use reputable transportation services. Traffic can be heavy, so plan your travel times accordingly."
                />
                <Hover1
                imageSrc="https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2024/06/28120553/travel-abroad-tips-1600x900.jpeg"
                title = "Local Cuisine"
                location="Enjoy the local cuisine, but make sure to eat at well-reviewed places to avoid foodborne illnesses."
                />
                <Hover1
                imageSrc="https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2024/06/28120553/travel-abroad-tips-1600x900.jpeg"
                title = "Safety"
                location="Be cautious in crowded areas, especially in places like Varanasi and Agra, to avoid petty theft."
                />
            </div>
        </div>
    )
}
export default UttarPradesh;