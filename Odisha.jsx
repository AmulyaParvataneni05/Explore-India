import Hover from  '../hover/Hover'
import Hover1 from  '../hover/Hover1'
import Hover2 from  '../hover/Hover2'
import Hover3 from '../hover/Hover3'
import '../States/State.css'
function Odisha()
{
    return(
        <div>
            <a href='https://odishatourism.gov.in/content/tourism/en.html'><h1 className='heading'>Odisha</h1></a>
            <h2 className='capital'>Capital: Bhubaneswar</h2>
            <h1 className='sideheadings'>Places To Visit</h1>
            <div className='Places'>
                <Hover
                imageSrc="https://media.istockphoto.com/id/1355441785/photo/main-temple-dome-of-jagannath-temple-a-famous-hindu-temple-dedicated-to-jagannath-or-lord.jpg?s=170667a&w=0&k=20&c=zQsG49D3vMoTt62SOGZM-veul7-s-2dGXfkaMYZpRhw="
                title="Jagannath Temple"
                location="Puri"
                bookUrl="https://www.trivago.in/en-IN/lm/hotels-puri-india?search=200-74041;dr-20240907-20240908"
                locateUrl= "https://www.google.com/maps/place/Shree+Jagannatha+Temple+Puri/@19.8049379,85.8153583,17z/data=!3m1!4b1!4m6!3m5!1s0x3a19c6b8bfe386af:0x8f052c84639c7d48!8m2!3d19.8049379!4d85.8179386!16zL20vMGN2eDd4?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
                <Hover
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdkIe08aX-GtXwBK2LD_DujDwRWbm9BED0Vw&s"
                title="Dhauli Hill"
                location="Bhubaneswar"
                bookUrl="https://www.trivago.in/en-IN/lm/hotels-bhubaneswar-india?search=200-344838;dr-20240907-20240908"
                locateUrl= "https://www.google.com/maps/place/Dhauli+Hills+in+Odisha/@20.1923483,85.8370359,17z/data=!3m1!4b1!4m6!3m5!1s0x3a1909ff3825220b:0xd7a9ad5d20fa4250!8m2!3d20.1923483!4d85.8396162!16s%2Fg%2F11j8zc5prw?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
                <Hover
                imageSrc="https://kevinstandagephotography.wordpress.com/wp-content/uploads/2020/03/ksp_9722.jpg"
                title="Shree Mukteswara Temple"
                location="Bhubaneswar"
                bookUrl="https://www.trivago.in/en-IN/lm/hotels-bhubaneswar-india?search=200-344838;dr-20240907-20240908"
                locateUrl="https://www.google.com/maps/place/Shree+Mukteswara+Temple,+Bhubaneswar/@20.2427055,85.8378696,17z/data=!3m1!4b1!4m6!3m5!1s0x3a19a7b6ce55018b:0x99a370245cc19c9d!8m2!3d20.2427055!4d85.8404499!16zL20vMGdfZnNs?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
                <Hover
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1_riAhEHx9GtvhLhTkND8ONiOdG-nh2ERgg&s"
                title="Tara Tarini Temple"
                location="Raipur"
                bookUrl="https://www.trivago.in/en-IN/lm/hotels-raipur-india?search=200-64963;dr-20240907-20240908"
                locateUrl="https://www.google.com/maps/place/Tara+Tarini+Temple/@19.4929576,84.8786271,15z/data=!4m10!1m2!2m1!1sTara+Tarini+Temple!3m6!1s0x3a3d54d629ab4b67:0x9c51ff2a71da2512!8m2!3d19.4888509!4d84.8990899!15sChJUYXJhIFRhcmluaSBUZW1wbGVaFCISdGFyYSB0YXJpbmkgdGVtcGxlkgEMaGluZHVfdGVtcGxl4AEA!16s%2Fm%2F05b2_9q?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
            </div>
            <h1 className='sideheadings'>Culture and Tradition</h1>
            <div className='CultureTradition'>
                <Hover3
                imageSrc="https://blog.ksom.ac.in/wp-content/uploads/2021/06/odissi.jpg"
                title="Odissi"
                location="A classical dance from Odisha known for graceful movements and expressive gestures."
                locateUrl='https://www.youtube.com/watch?v=llIxMQT4MUM'
                />
                <Hover1
                imageSrc="https://i.pinimg.com/474x/1d/c5/72/1dc572b886ecd5d8483de6da83ad29d4.jpg"
                title="Sarees and Dhoti-Kurta"
                location="Women typically wear sarees in traditional weaves like Khandua and Ikat, while men often wear dhotis and kurta."
                />
                <Hover1
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9Cr53zHpsQ29d1CM3jZzFPZlhDEAbsk1duQ&s"
                title="Rath Yatra"
                location="The annual chariot festival in Puri, where the deities Jagannath, Balabhadra, and Subhadra are paraded in massive, elaborately decorated chariots."
                />
                <Hover1
                imageSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/A_still_of_Shri_Banamali_Maharana_who_will_be_presented_with_the_Sangeet_Natak_Akademi_Award_for_Odissi_Music_-_Orissa_by_the_President_Dr._A.P.J_Abdul_Kalam_in_New_Delhi_on_October_26%2C_2004.jpg/432px-thumbnail.jpg"
                title="Odia Folk Music"
                location="Includes traditional songs and instruments such as the Mahuri (flute), Mardala (drum), and Dhol (drum), reflecting the region's rich musical heritage."
                />
            </div>
            <h1 className='sideheadings'>Cuisine</h1>
            <div className='Cuisine'>
                <Hover1
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNd8YLv1wS23_HQq7gCNt_bRGYFbsH0RfZmQ&s"
                title="Dalma"
                location="A hearty lentil and vegetable stew, seasoned with spices and coconut, commonly enjoyed with rice."
                />
                <Hover1
                imageSrc="https://images.slurrp.com/webstories/wp-content/uploads/2023/05/03222236/Pakhala-Recipe.png"
                title="Pakhala Bhata"
                location="Fermented rice served with curd and accompanied by fried or mashed vegetables, perfect for hot weather."
                />
                <Hover1
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkSt4mHnDVl0HaD_VFRdwOjVMu1DWM_mcX5A&s"
                title="Chhena Poda"
                location="A traditional sweet made from paneer (cheese) baked with sugar and cardamom, popular for its caramelized crust."
                />
                <Hover1
                imageSrc="https://www.palatesdesire.com/wp-content/uploads/2022/09/rasgulla-recipe@palates-desire.jpg"
                title="Rasgulla"
                location="Soft, spongy sweets made from paneer soaked in sugar syrup, a well-known dessert originating from Odisha."
                />
            </div>
            <h1 className='sideheadings'>Wild Life and Nature</h1>
            <div className='WildLife'>
                <Hover2
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQfNFo437aZk5U5jrcxceSw1hAoGGGvKKc0w&s"
                title="Simlipal National Park"
                locateUrl ="https://www.google.com/maps/place/Similipal+National+Park/@21.5931151,86.2919596,17z/data=!3m1!4b1!4m6!3m5!1s0x3a1c2ca3d92ecf07:0x13b2655e72c6d5e3!8m2!3d21.5931151!4d86.2945399!16zL20vMDhfczhj?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
                <Hover2
                imageSrc="https://odishatour.in/wp-content/uploads/2021/12/Maa-kalijai-temple-Chilika-Lake-Khordha-2.jpg"
                title="Chilika Lake"
                locateUrl="https://www.google.com/maps/place/Chilika+Lake/@19.6873756,85.2135174,11z/data=!3m1!4b1!4m6!3m5!1s0x3a181f493428369b:0x8c7562c60bcda7a1!8m2!3d19.8449627!4d85.4788065!16zL20vMDRiMDF4?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
                <Hover2
                imageSrc="https://static.toiimg.com/photo/62352245.cms"
                title="Bhitarkanika National Park"
                locateUrl= "https://www.google.com/maps/place/Bhitarkanika+National+Park/@20.7212646,86.8648879,17z/data=!3m1!4b1!4m6!3m5!1s0x3a1b98cd7a93e867:0xa9c8c9801e7798d4!8m2!3d20.7212646!4d86.8674682!16zL20vMDhfdzE5?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
                <Hover2
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4BsYS_vI3PDWtee8mVlrqomm4KC-Nc3zwKw&s"
                title="Nandankanan Zoological Park"
                locateUrl="https://www.google.com/maps/place/Nandankanan+Zoological+Park/@20.39577,85.8233841,17z/data=!3m1!4b1!4m6!3m5!1s0x3a190edd0e133397:0x3d3e1689f5474535!8m2!3d20.39577!4d85.8259644!16zL20vMGg0ajY5?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
            </div>
            <h1 className='sideheadings'>Shopping Destinations</h1>
            <div className='Shopping'>
                <Hover2
                imageSrc="https://static.toiimg.com/thumb/msid-56137011,width=1200,height=900/56137011.jpg"
                title="Ekamra Haat"
                locateUrl="https://google.com/maps/place/Ekamra+Haat/@20.2782121,85.8376042,17z/data=!3m1!4b1!4m6!3m5!1s0x3a19a75716ec54dd:0xd4f819d7477579f1!8m2!3d20.2782121!4d85.8401845!16s%2Fg%2F1tdmc9nw?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
                <Hover2
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW9efpZGwICbaH-iVEAKQGGw8M5MwI-xIW8w&s"
                title="Cuttack Silver Filigree Market"
                locateUrl="https://www.google.com/maps/search/Cuttack+Silver+Filigree+Market/@20.4643723,85.8666894,16z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
                <Hover2
                imageSrc="https://content.jdmagicbox.com/comp/bhubaneshwar/e6/0674px674.x674.140625112616.i6e6/catalogue/orissa-handloom-emporium-ashok-nagar-bhubaneshwar-handloom-retailers-n2b2b4.jpg"
                title="Bhubaneswar Handloom Market"
                locateUrl="https://www.google.com/maps/search/Bhubaneswar+Handloom+Market/@20.4642943,85.7066765,11z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
                <Hover2
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHwt3nfVr9L1G_kIodkI2dmaRnWpRYidnftw&s"
                title="Puri Beach Market"
                locateUrl="https://www.google.com/maps/search/Puri+Beach+Market/@19.7940794,85.8199196,17z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                />
            </div>
            <h1 className='sideheadings'>Historical Significance</h1>
            <div className='Historical'>
                <Hover1
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe0Jp2JP5ZrHToZOGOTRS_GDx93MGF8pSiZ-PiYaWFLIE_kUl4m-tdclnODK19ubVqFkg&usqp=CAU"
                title="Konark Sun Temple"
                location="A 13th-century temple dedicated to the Sun God, renowned for its detailed carvings and chariot-like design."
                />
                <Hover1
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS51W4IboRhyI3phwQQlW75bg5Gh9kqCVsmcQ&s"
                title="Lingaraj Temple"
                location="An ancient Hindu temple in Bhubaneswar, famous for its Kalinga-style architecture and religious significance."
                />
                <Hover1
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRudVfRgV2BOeLgLDdAYT1dsMO1P_kDORLCVA&s"
                title="Udaigiri and Khandagiri Caves"
                location="Rock-cut caves from the 2nd century BCE, showcasing Jain art and inscriptions."
                />
                <Hover1
                imageSrc="https://www.holidify.com/images/cmsuploads/compressed/Raja_Rani_Temple_-_A_different_angle_20180120211657.jpg"
                title="Rajarani Temple"
                location="An 11th-century temple in Bhubaneswar, renowned for its unique architecture and sculptures."
                />
            </div>
            <h1 className='sideheadings'>Travel Tips</h1>
            <div className='Historical'>
                <Hover1
                imageSrc="https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2024/06/28120553/travel-abroad-tips-1600x900.jpeg"
                title = "Check Local Festivals"
                location="Plan your visit around local festivals like Rath Yatra to experience the culture."
                />
                <Hover1
                imageSrc="https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2024/06/28120553/travel-abroad-tips-1600x900.jpeg"
                title = "Dress Modestly"
                location="Some religious sites require modest clothing, so pack accordingly."
                />
                <Hover1
                imageSrc="https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2024/06/28120553/travel-abroad-tips-1600x900.jpeg"
                title = "Weather Awareness"
                location="Visit between October and March for pleasant weather."
                />
                <Hover1
                imageSrc="https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2024/06/28120553/travel-abroad-tips-1600x900.jpeg"
                title = "Respect Customs"
                location="Be mindful of local traditions, especially in temples and tribal areas."
                />
            </div>
        </div>
    )
}
export default Odisha;
