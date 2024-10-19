import Hover from  '../hover/Hover'
import Hover1 from  '../hover/Hover1'
import Hover2 from  '../hover/Hover2'
import Hover3 from '../hover/Hover3'
import '../states/State.css'
function Nagaland()
{
    return(
        <div>
            <a href='https://tourism.nagaland.gov.in/'><h1 className='heading'>Nagaland</h1></a>
            <h2 className='capital'>Capital: Kohima</h2>
            <h1 className='sideheadings'>Places To Visit</h1>
            <div className='Places'>
                <Hover
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdQSsAQExksogD5QGAcShgRNVPTPX9_gYICA&s"
                title="Dzükou Valley"
                location="Kohima"
                bookUrl="https://www.trivago.in/en-IN/lm/hotels-kohima-india?search=200-64985;dr-20240907-20240908"
                locateUrl= "https://www.google.com/maps/place/Dz%C3%BCko+Valley/@25.5827499,94.0138693,14z/data=!4m10!1m2!2m1!1sDz%C3%BCkou+Valley!3m6!1s0x37489f5930712773:0xcff1a7f40e50782c!8m2!3d25.5553627!4d94.0652787!15sCg5EesO8a291IFZhbGxleZIBEnRvdXJpc3RfYXR0cmFjdGlvbuABAA!16s%2Fg%2F11fkf4w59s?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
                <Hover
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5F4uFBAtcHai2KNiNe3a0NdtL8_hx9QmS-w&s"
                title="Intanki National Park"
                location="Dimapur"
                bookUrl="https://www.trivago.in/en-IN/lm/hotels-dimapur-india?search=200-106351;dr-20240907-20240908"
                locateUrl= "https://www.google.com/maps/place/Intanki+National+Park+Protection+Camp/@25.6214879,93.4439267,12z/data=!4m10!1m2!2m1!1sIntanki+National+Park!3m6!1s0x3745f6dd1785f27f:0xad4c03cc38a07b89!8m2!3d25.6933693!4d93.5324341!15sChVJbnRhbmtpIE5hdGlvbmFsIFBhcmuSAQ1uYXRpb25hbF9wYXJr4AEA!16s%2Fg%2F11gzgdg0g?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
                <Hover
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF2iqw9ZYFAHftL34dvql4wsd5f0BJTw1-Ew&s"
                title="Mon District"
                location="Mon"
                bookUrl="https://www.trivago.in/en-IN/lm/hotels-kohima-india?search=200-64985;dr-20240907-20240908"
                locateUrl="https://www.google.com/maps/place/Mon,+Nagaland/@26.6598953,94.6800906,10z/data=!3m1!4b1!4m6!3m5!1s0x3738a00872968e19:0xfceccfc9820ced1!8m2!3d26.8038362!4d94.976654!16zL20vMDk5M2Q4?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
                <Hover
                imageSrc="https://imgmedia.lbb.in/media/2020/01/5e2003543c8760379967c0ef_1579156308800.jpg"
                title="Mokokchung Village"
                location="Mokokchung"
                bookUrl="https://www.trivago.in/en-IN/lm/hotels-kohima-india?search=200-64985;dr-20240907-20240908"
                locateUrl="https://www.google.com/maps/place/Mokokchung+Village,+Nagaland+798601/@26.3243428,94.5251248,15z/data=!3m1!4b1!4m6!3m5!1s0x3747a839cc561e71:0xeeee268cfd6872bd!8m2!3d26.3269862!4d94.5309259!16s%2Fm%2F0g56_tt?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
            </div>
            <h1 className='sideheadings'>Culture and Tradition</h1>
            <div className='CultureTradition'>
                <Hover3
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ85Fu8eFhKkkTTqiu4MAd64bkHe4nhIzfNAQ&s"
                title="Bamboo Dance"
                location="A dance performed with bamboo poles, where dancers step in and out of clashing bamboos."
                locateUrl='https://www.youtube.com/watch?v=cZgeBmPAgGc'
                />
                <Hover1
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8J3PgiHHo2qoeupcK7BRq8eyRw53K2Ft7vQ&s"
                title="Naga Shawls"
                location="Traditional shawls worn by both men and women, often featuring intricate beadwork and embroidery unique to each Naga tribe."
                />
                <Hover1
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdGM6SADULiKS8TcL2r-rkBOaZTgoNJop5Ew&s"
                title="Hornbill Festival"
                location="An annual festival held in Kisama near Kohima, celebrating the rich culture of Nagaland with traditional music, dance, crafts, and food."
                />
                <Hover1
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLiVqXXzcdXb2TKyxCEyY-pFN9RcNmT5mIcg&s"
                title="Naga Folk Music"
                location="Naga folk music features traditional instruments such as the Hegu (horn), Khuong (drum), and bamboo flute, highlighting the tribe’s cultural heritage and rituals."
                />
            </div>
            <h1 className='sideheadings'>Cuisine</h1>
            <div className='Cuisine'>
                <Hover1
                imageSrc="https://media-cdn.tripadvisor.com/media/photo-s/1c/b9/13/cf/smoked-pork-axone-a-famous.jpg"
                title="Smoked Pork with Bamboo Shoot"
                location="Pork cooked with bamboo shoots, giving it a distinctive smoky flavor, often enjoyed with rice."
                />
                <Hover1
                imageSrc="https://foodiestreasure.com/wp-content/uploads/2019/08/20190815_160147.jpg?w=568&h=925"
                title="Eromba"
                location="A traditional vegetable dish made from mashed vegetables mixed with fermented fish, providing a unique taste and texture."
                />
                <Hover1
                imageSrc="https://i0.wp.com/atmykitchen.net/wp-content/uploads/2022/04/20220402_220145-017634018385027266147.jpeg?resize=640%2C956&ssl=1"
                title="Nagaland Style Pork Curry"
                location="A spicy and flavorful pork curry made with local herbs and spices, a staple in Naga cuisine."
                />
                <Hover1
                imageSrc="https://hashtagmagazine.in/wp-content/uploads/2023/06/Axone-The-Taste-of-North-East-India-Hashtag-Magazine.png"
                title="Axone"
                location="A fermented soybean paste used to add a distinctive tangy flavor to various dishes, including meats and vegetables."
                />
            </div>
            <h1 className='sideheadings'>Wild Life and Nature</h1>
            <div className='WildLife'>
                <Hover2
                imageSrc="https://www.connectingtraveller.com/images/localtip/1654203577DSC_1376.jpg"
                title="Kohima Zoo"
                locateUrl = "https://www.google.com/maps/place/Kohima+Mini+Zoo/@25.6923396,94.0873449,17z/data=!3m1!4b1!4m6!3m5!1s0x374621d71277982f:0x4f9e303cd840121d!8m2!3d25.6923396!4d94.0899252!16s%2Fg%2F11h4g9hspx?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
                <Hover2
                imageSrc="https://www.connectingtraveller.com/images/localtip/1655064324Feature-Nagaland.jpg"
                title="Intanki National Park"
                locateUrl="https://www.google.com/maps/search/Intanki+National+Park/@25.6214879,93.4439267,12z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
                <Hover2
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjyXfJuCCVGP1U5PsxPEqiWcrL8R9bI8Ooyw&s"
                title="Puliebadze Wildlife Sanctuary"
                locateUrl= "https://www.google.com/maps/place/Puliebadze,+Jotsoma+Village/@25.6477122,94.0705315,17z/data=!3m1!4b1!4m6!3m5!1s0x3746202bdf662ca3:0xe0181957730f70ae!8m2!3d25.6477122!4d94.0731118!16s%2Fg%2F1txc5d8y?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
                <Hover2
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB0I5rnmVHTDYzYhCrAISjSC7WH_mABvi4rw&s"
                title="Dzükou Valley"
                locateUrl="https://www.google.com/maps/place/Dz%C3%BCko+Valley/@25.5553627,94.0626984,17z/data=!3m1!4b1!4m6!3m5!1s0x37489f5930712773:0xcff1a7f40e50782c!8m2!3d25.5553627!4d94.0652787!16s%2Fg%2F11fkf4w59s?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
            </div>
            <h1 className='sideheadings'>Shopping Destinations</h1>
            <div className='Shopping'>
                <Hover2
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-KMbNAvCX0cp1CdFqRCcIElXwQ-clFWa6_Q&s"
                title="Kohima Market"
                locateUrl="https://www.google.com/maps/search/kohima+market/@25.5553395,93.9826955,12z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
                <Hover2
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5O1ctfbpS-Vup1-3UuUzLxsXhNib_vtUgYw&s"
                title="Dimapur Haat"
                locateUrl="https://www.google.com/maps/place/Urban+Haat/@25.9061112,93.7426716,17z/data=!3m1!4b1!4m6!3m5!1s0x37460a0716355813:0x72787b511b73cf57!8m2!3d25.9061112!4d93.7452519!16s%2Fg%2F11c5t179ps?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
                <Hover2
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwnEBjNTRqjQWTZ-01grFfvO3XlTRhze6x-A&s"
                title="New Market"
                locateUrl="https://www.google.com/maps/place/New+Market,+Kohima,+Nagaland/@25.6699062,94.0989787,17z/data=!3m1!4b1!4m6!3m5!1s0x374621a48fa4e45f:0x808706d52565b2ad!8m2!3d25.6697282!4d94.103413!16s%2Fg%2F1pty3m7z8?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
                <Hover2
                imageSrc="https://imgmedia.lbb.in/media/2020/09/5f708f877a3d072f45083b27_1601212295655.jpg"
                title="Shops in Mokokchung Town"
                locateUrl="https://www.google.com/maps/search/Shops+in+Mokokchung+Town/@26.3210394,94.5141824,15z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
            </div>
            <h1 className='sideheadings'>Historical Significance</h1>
            <div className='Historical'>
                <Hover1
                imageSrc="https://archive.cloud.cwgc.org/images-cemetery-images-prod/2058100/kohima2003-2.jpg"
                title="Kohima War Cemetery"
                location="A memorial dedicated to the soldiers who fought and died in the Battle of Kohima during World War II."
                />
                <Hover1
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjJxOyJK_izFbFVqzLPZnQRaQvfa21L8XkeQ&s"
                title="Nagaland State Museum"
                location="Showcases the rich cultural heritage and history of Nagaland's diverse tribes."
                />
                <Hover1
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxdJ15kzObjllg3D7wfgTcMxZt4ofZ8KODvQ&s"
                title="Kohima Cathedral"
                location="One of the oldest churches in Nagaland, significant for its role in the Christian missionary history of the region."
                />
                <Hover1
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs-PRDSQrlasB72nd0iZMgFk9qI1x1HtEkFw&s"
                title="Dimapur Ruins"
                location="Ancient ruins believed to be the remnants of the erstwhile Kachari kingdom, offering insights into early Naga civilization."
                />
            </div>
            <h1 className='sideheadings'>Travel Tips</h1>
            <div className='Historical'>
                <Hover1
                imageSrc="https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2024/06/28120553/travel-abroad-tips-1600x900.jpeg"
                title = "Respect Local Customs"
                location="Show respect for local traditions and customs, especially when visiting tribal communities and cultural sites."
                />
                <Hover1
                imageSrc="https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2024/06/28120553/travel-abroad-tips-1600x900.jpeg"
                title = "Weather"
                location="Pack warm clothing, as temperatures can drop significantly, especially in the winter months."
                />
                <Hover1
                imageSrc="https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2024/06/28120553/travel-abroad-tips-1600x900.jpeg"
                title = "Cuisine"
                location="Be ready for spicy and unique local dishes; try local delicacies for a full experience."
                />
                <Hover1
                imageSrc="https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2024/06/28120553/travel-abroad-tips-1600x900.jpeg"
                title = "Health"
                location="Bring necessary medications and be cautious about food hygiene to avoid common travel illnesses."
                />
            </div>
        </div>
    )
}
export default Nagaland;
